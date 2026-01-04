#!/usr/bin/env python3
"""Generate social media draft posts (LinkedIn + X) for merged PRs.

This script is intended to be run in GitHub Actions (via
`.github/workflows/social-media-posts.yml`) when a PR is merged into `main`.

Behavior:
- Detect PR number(s) from the event payload (GITHUB_EVENT_PATH) or from
  commit messages (if invoked on push).
- Use the GitHub REST API (GITHUB_TOKEN) to fetch PR title, body, and commits.
- Call OpenAI (or other supported AI provider) to generate a short X post and a
  LinkedIn-style post in a casual tone.
- Create a GitHub issue titled "[DRAFT] Social post for PR #<n>" with the
  generated drafts (default behavior).
- Optionally write a markdown file to disk if OUTPUT_DIR is set (and
  optionally commit it if COMMIT_DRAFT=true).

Required environment variables in workflows that run this script:
- GITHUB_REPOSITORY (provided by Actions)
- GITHUB_EVENT_PATH (provided by Actions)
- GITHUB_TOKEN (provided by Actions) - to read PR & create issue
- OPENAI_API_KEY (set as a secret) - for OpenAI usage

Optional environment variables:
- OPENAI_MODEL (default: gpt-3.5-turbo)
- OUTPUT_DIR (if set, writes generated markdown files to this directory)
- COMMIT_DRAFT (if 'true', will attempt to commit generated files back)

"""

import json
import os
import re
import sys
import time
import logging
from datetime import datetime
from typing import List

import requests

try:
    import openai
except Exception:
    openai = None

# Basic logging
logging.basicConfig(level=logging.INFO, format="%(levelname)s: %(message)s")

GITHUB_API = "https://api.github.com"


def load_event() -> dict:
    path = os.environ.get("GITHUB_EVENT_PATH")
    if not path or not os.path.exists(path):
        logging.error("GITHUB_EVENT_PATH is not set or the file doesn't exist")
        return {}
    with open(path, "r", encoding="utf-8") as fh:
        return json.load(fh)


def extract_pr_numbers_from_push(event: dict) -> List[int]:
    # When a push merges PRs, git merge commit messages often include
    # "Merge pull request #123". We search commits in payload.
    pr_nums = set()
    commits = event.get("commits", [])
    for c in commits:
        msg = c.get("message", "")
        for m in re.findall(r"Merge pull request #([0-9]+)", msg):
            pr_nums.add(int(m))
    return list(pr_nums)


def get_pr_numbers_from_event(event: dict) -> List[int]:
    ev_name = os.environ.get("GITHUB_EVENT_NAME")
    if ev_name == "pull_request":
        pr = event.get("pull_request")
        if not pr:
            return []
        if pr.get("merged"):
            return [pr.get("number")]
        else:
            logging.info("Pull request event but not merged; exiting")
            return []
    elif ev_name == "push":
        return extract_pr_numbers_from_push(event)
    else:
        # fallback: try to find a "pull_request" key anywhere
        pr = event.get("pull_request")
        if pr and pr.get("merged"):
            return [pr.get("number")]
    return []


def gh_get(path: str, token: str, params=None):
    headers = {"Authorization": f"token {token}", "Accept": "application/vnd.github.v3+json"}
    url = f"{GITHUB_API}{path}"
    resp = requests.get(url, headers=headers, params=params, timeout=30)
    if resp.status_code >= 400:
        logging.error("GitHub API error %s: %s", resp.status_code, resp.text)
        resp.raise_for_status()
    return resp.json()


def gh_post(path: str, token: str, payload: dict):
    headers = {"Authorization": f"token {token}", "Accept": "application/vnd.github.v3+json"}
    url = f"{GITHUB_API}{path}"
    resp = requests.post(url, headers=headers, json=payload, timeout=30)
    if resp.status_code >= 400:
        logging.error("GitHub API POST error %s: %s", resp.status_code, resp.text)
        resp.raise_for_status()
    return resp.json()


def fetch_pr(repo: str, pr_number: int, token: str) -> dict:
    owner, repo_name = repo.split("/")
    path = f"/repos/{owner}/{repo_name}/pulls/{pr_number}"
    return gh_get(path, token)


def fetch_pr_commits(repo: str, pr_number: int, token: str) -> List[dict]:
    owner, repo_name = repo.split("/")
    path = f"/repos/{owner}/{repo_name}/pulls/{pr_number}/commits"
    return gh_get(path, token)


def summarize_commits(commits: List[dict]) -> str:
    out = []
    for c in commits:
        sha = c.get("sha", "")[:7]
        msg = c.get("commit", {}).get("message", "").splitlines()[0]
        out.append(f"- {sha}: {msg}")
    return "\n".join(out)


def build_prompt(pr: dict, commits_summary: str) -> str:
    title = pr.get("title", "")
    body = pr.get("body", "") or ""
    url = pr.get("html_url")

    prompt = f"You are a helpful assistant that writes engaging, casual social media posts.\n\n"
    prompt += f"Context (from a merged GitHub Pull Request):\nTitle: {title}\n\nDescription: {body}\n\nCommits:\n{commits_summary}\n\n"

    prompt += (
        "Write two polished outputs in a casual, friendly tone suitable for sharing: \n"
        "1) LinkedIn post (2-4 short paragraphs) that summarizes what was merged, why it matters, and a small call-to-action. Use 1-3 relevant hashtags.\n"
        "2) X (Twitter) post (single message ≤280 characters) that is concise and includes 1-2 hashtags and a short emoji.\n"
        "Also provide a short list of suggested hashtags (comma-separated), a suggested image idea, and alt text suggestion.\n"
        "Return the result as a JSON object with keys: linkedin, x, hashtags, image_idea, image_alt. Do not include extra commentary."
    )
    prompt += f"\nSource PR: {url}\n"
    return prompt


def call_openai(prompt: str, model: str = "gpt-3.5-turbo") -> dict:
    api_key = os.environ.get("OPENAI_API_KEY")
    if not api_key:
        raise RuntimeError("OPENAI_API_KEY environment variable is required for AI generation")
    if openai is None:
        raise RuntimeError("openai package is not installed. Add it to the workflow step: pip install openai")

    openai.api_key = api_key
    logging.info("Calling OpenAI model %s to generate drafts...", model)
    # Use the ChatCompletion API
    resp = openai.ChatCompletion.create(
        model=model,
        messages=[{"role": "system", "content": "You are an assistant that emits only a JSON object as requested."},
                  {"role": "user", "content": prompt}],
        max_tokens=800,
        temperature=0.7,
    )
    text = resp.choices[0].message.content.strip()
    try:
        parsed = json.loads(text)
    except Exception:
        # Try to extract a JSON object from text
        m = re.search(r"\{.*\}", text, re.S)
        if not m:
            logging.error("Failed to parse JSON from model output:\n%s", text)
            raise
        parsed = json.loads(m.group(0))
    return parsed


def create_issue(repo: str, token: str, title: str, body: str, labels: List[str] = None):
    owner, repo_name = repo.split("/")
    path = f"/repos/{owner}/{repo_name}/issues"
    payload = {"title": title, "body": body}
    if labels:
        payload["labels"] = labels
    return gh_post(path, token, payload)


def write_markdown(output_dir: str, filename: str, content: str):
    os.makedirs(output_dir, exist_ok=True)
    path = os.path.join(output_dir, filename)
    with open(path, "w", encoding="utf-8") as fh:
        fh.write(content)
    logging.info("Wrote draft to %s", path)
    return path


def compose_issue_body(pr, ai_result, commits_summary):
    lines = []
    lines.append(f"**Draft social post for PR #{pr.get('number')}: {pr.get('title')}**")
    lines.append("")
    lines.append(f"Source: {pr.get('html_url')}")
    lines.append("")
    lines.append("---")
    lines.append("")
    lines.append("**LinkedIn draft**")
    lines.append("")
    lines.append(ai_result.get("linkedin", ""))
    lines.append("")
    lines.append("**X (Twitter) draft**")
    lines.append("")
    lines.append(ai_result.get("x", ""))
    lines.append("")
    lines.append("**Suggested hashtags**")
    lines.append(ai_result.get("hashtags", ""))
    lines.append("")
    lines.append("**Image idea / alt text**")
    lines.append(ai_result.get("image_idea", ""))
    lines.append("")
    lines.append(ai_result.get("image_alt", ""))
    lines.append("")
    lines.append("---")
    lines.append("")
    lines.append("**Commit summary**")
    lines.append("")
    lines.append(commits_summary)
    return "\n".join(lines)


def main():
    repo = os.environ.get("GITHUB_REPOSITORY")
    token = os.environ.get("GITHUB_TOKEN")
    if not repo or not token:
        logging.error("GITHUB_REPOSITORY and GITHUB_TOKEN must be set in the environment")
        sys.exit(1)

    event = load_event()
    pr_numbers = get_pr_numbers_from_event(event)
    if not pr_numbers:
        logging.info("No merged PRs detected; nothing to do")
        return

    model = os.environ.get("OPENAI_MODEL", "gpt-3.5-turbo")
    output_dir = os.environ.get("OUTPUT_DIR")
    commit_draft = os.environ.get("COMMIT_DRAFT", "false").lower() == "true"

    for prn in pr_numbers:
        logging.info("Processing PR #%s", prn)
        pr = fetch_pr(repo, prn, token)
        if not pr.get("merged"):
            logging.info("PR #%s not merged; skipping", prn)
            continue
        commits = fetch_pr_commits(repo, prn, token)
        commits_summary = summarize_commits(commits)
        prompt = build_prompt(pr, commits_summary)
        ai_result = call_openai(prompt, model=model)

        issue_title = f"[DRAFT] Social post for PR #{prn}: {pr.get('title')}"
        body = compose_issue_body(pr, ai_result, commits_summary)

        # Create issue
        try:
            issue = create_issue(repo, token, issue_title, body, labels=["social-draft"])
            logging.info("Created issue: %s", issue.get("html_url"))
        except Exception as e:
            logging.error("Failed to create issue: %s", e)

        # Optionally write to disk
        if output_dir:
            ts = datetime.utcnow().strftime("%Y%m%d%H%M%S")
            safe_title = re.sub(r"[^a-zA-Z0-9_-]", "-", pr.get("title", "draft").lower())[:80]
            fname = f"pr-{prn}-{safe_title}-{ts}.md"
            content = f"---\ntitle: \"Draft social post for PR #{prn}\"\npr: {prn}\ndate: {datetime.utcnow().isoformat()}\nai_generated: true\n---\n\n" + body
            path = write_markdown(output_dir, fname, content)
            if commit_draft:
                logging.info("COMMIT_DRAFT enabled, attempting to add & commit %s", path)
                # Minimal attempt to commit back (repo must be checked out and git configured in the runner)
                os.system(f"git add {path}")
                msg = f"Add social draft for PR #{prn} [automated]"
                os.system(f"git commit -m \"{msg}\" || true")
                os.system("git push origin HEAD:main || true")

    logging.info("Done")


if __name__ == "__main__":
    main()

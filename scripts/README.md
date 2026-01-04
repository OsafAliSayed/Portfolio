# Social Draft Generator

This script generates casual social media post drafts (LinkedIn + X) for merged PRs and creates a GitHub issue containing the drafts.

How it is intended to be used
- The workflow `.github/workflows/social-media-posts.yml` triggers on PR merges into `main` and runs `scripts/generate-social-draft.py`.

Required secrets / env variables in the workflow:
- `GITHUB_TOKEN` (provided by Actions) — used to read PR details and create an issue
- `OPENAI_API_KEY` — required for the AI generation

Optional env variables:
- `OPENAI_MODEL` — default: `gpt-3.5-turbo`
- `OUTPUT_DIR` — if set, the script will write generated draft(s) as markdown files to this directory
- `COMMIT_DRAFT` — if `'true'`, attempts to commit generated file(s) back to the default branch (runner must have push privileges)

Security notes
- Keep `OPENAI_API_KEY` in repository secrets, do not hard-code API keys.
- The script runs in CI and will create an issue for each merged PR it processes.

Customization
- The prompt and output format can be changed inside `scripts/generate-social-draft.py` (function `build_prompt`).


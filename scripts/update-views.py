#!/usr/bin/env python3
"""
Script to update blog post view counts from PostHog analytics.
Queries PostHog API for pageview data and updates the 'views' frontmatter in blog markdown files.

Usage:
    python scripts/update-views.py            # Update view counts
    python scripts/update-views.py --dry-run  # Preview changes without updating
"""

import requests
import os
import re
import sys
from pathlib import Path
import yaml
from typing import Dict, Tuple

# PostHog Configuration
POSTHOG_PROJECT_ID = os.getenv("POSTHOG_PROJECT_ID")
POSTHOG_API_URL = f"https://us.posthog.com/api/projects/{POSTHOG_PROJECT_ID}/query/"
POSTHOG_TOKEN = os.getenv("POSTHOG_API_KEY")

# Blog content directory
BLOG_DIR = Path(__file__).parent.parent / "public" / "content" / "blog"

def query_posthog_views() -> Dict[str, int]:
    """
    Query PostHog for blog pageview counts.
    
    Returns:
        Dict mapping blog paths to view counts
    """
    headers = {
        "Authorization": f"Bearer {POSTHOG_TOKEN}",
        "Content-Type": "application/json"
    }
    
    payload = {
        "query": {
            "kind": "HogQLQuery",
            "query": "SELECT properties.$pathname as page, COUNT(*) as views FROM events WHERE event = '$pageview' AND properties.$pathname LIKE '/blog/%' GROUP BY properties.$pathname ORDER BY views DESC"
        }
    }
    
    try:
        response = requests.post(POSTHOG_API_URL, json=payload, headers=headers)
        response.raise_for_status()
        
        data = response.json()
        results = data.get("results", [])
        
        # Convert results to a dictionary mapping paths to view counts
        view_counts = {}
        for result in results:
            if len(result) >= 2:
                path, views = result[0], result[1]
                view_counts[path] = views
        
        print(f"Retrieved view counts for {len(view_counts)} blog pages")
        return view_counts
        
    except requests.exceptions.RequestException as e:
        print(f"Error querying PostHog: {e}")
        return {}
    except Exception as e:
        print(f"Error processing PostHog response: {e}")
        return {}

def extract_frontmatter_and_content(content: str) -> Tuple[Dict, str]:
    """
    Extract YAML frontmatter and content from markdown file.
    
    Args:
        content: Raw markdown content
        
    Returns:
        Tuple of (frontmatter_dict, content_without_frontmatter)
    """
    # Pattern to match YAML frontmatter
    frontmatter_pattern = r'^---\s*\n(.*?)\n---\s*\n(.*)'
    match = re.match(frontmatter_pattern, content, re.DOTALL)
    
    if match:
        yaml_content = match.group(1)
        markdown_content = match.group(2)
        try:
            frontmatter = yaml.safe_load(yaml_content) or {}
            return frontmatter, markdown_content
        except yaml.YAMLError as e:
            print(f"Error parsing YAML frontmatter: {e}")
            return {}, content
    else:
        # No frontmatter found
        return {}, content

def create_updated_content(frontmatter: Dict, content: str) -> str:
    """
    Reconstruct markdown file with updated frontmatter.
    
    Args:
        frontmatter: Dictionary of frontmatter data
        content: Markdown content without frontmatter
        
    Returns:
        Complete markdown file content
    """
    yaml_content = yaml.dump(frontmatter, default_flow_style=False, allow_unicode=True)
    return f"---\n{yaml_content}---\n{content}"

def path_to_slug(path: str) -> str:
    """
    Convert PostHog path to blog slug.
    
    Args:
        path: PostHog path like '/blog/welcome/' or '/blog/my-post/'
        
    Returns:
        Slug like 'welcome' or 'my-post'
    """
    # Remove leading '/blog/' and trailing '/'
    slug = path.replace('/blog/', '').rstrip('/')
    return slug

def update_blog_views(view_counts: Dict[str, int], dry_run: bool = False) -> None:
    """
    Update view counts in blog markdown files.
    
    Args:
        view_counts: Dictionary mapping paths to view counts
        dry_run: If True, only show what would be updated without making changes
    """
    if not BLOG_DIR.exists():
        print(f"Blog directory not found: {BLOG_DIR}")
        return
    
    updated_count = 0
    
    # Get all markdown files in blog directory
    md_files = list(BLOG_DIR.glob("*.md"))
    
    for md_file in md_files:
        # Skip .gitkeep and other non-blog files
        if md_file.name.startswith('.'):
            continue
            
        try:
            # Read current content
            with open(md_file, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Extract frontmatter and content
            frontmatter, markdown_content = extract_frontmatter_and_content(content)
            
            # Determine the slug from filename
            slug = md_file.stem
            
            # Find matching view count
            # Try different path variations that PostHog might track
            possible_paths = [
                f"/blog/{slug}/",
                f"/blog/{slug}",
            ]
            
            views = None
            matched_path = None
            for path in possible_paths:
                if path in view_counts:
                    views = view_counts[path]
                    matched_path = path
                    break
            
            if views is not None:
                # Update views in frontmatter
                current_views = frontmatter.get('views')
                
                if dry_run:
                    print(f"Would update {md_file.name}: {current_views} → {views} views (from {matched_path})")
                else:
                    frontmatter['views'] = str(views)  # Store as string to match existing format
                    
                    # Write updated content back to file
                    updated_content = create_updated_content(frontmatter, markdown_content)
                    
                    with open(md_file, 'w', encoding='utf-8') as f:
                        f.write(updated_content)
                    
                    print(f"Updated {md_file.name}: {current_views} → {views} views (from {matched_path})")
                
                updated_count += 1
            else:
                print(f"No view data found for {md_file.name} (slug: {slug})")
        
        except Exception as e:
            print(f"Error processing {md_file.name}: {e}")
    
    if dry_run:
        print(f"\nDry run completed - would update {updated_count} blog posts with view counts")
    else:
        print(f"\nUpdated {updated_count} blog posts with view counts")

def main():
    """Main function to update blog views."""
    # Check for dry run argument
    dry_run = "--dry-run" in sys.argv
    
    if dry_run:
        print("Running in DRY RUN mode - no files will be modified")
    
    print("Updating blog view counts from PostHog...")
    
    # Query PostHog for view counts
    view_counts = query_posthog_views()
    
    if not view_counts:
        print("No view data retrieved. Exiting.")
        return
    
    # Print the view counts for debugging
    print("\nView counts from PostHog:")
    for path, views in sorted(view_counts.items(), key=lambda x: x[1], reverse=True):
        print(f"  {path}: {views} views")
    
    # Update blog files
    update_blog_views(view_counts, dry_run=dry_run)
    
    if dry_run:
        print("\nDry run completed! Use without --dry-run to actually update files.")
    else:
        print("\nView count update completed!")

if __name__ == "__main__":
    main()
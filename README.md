# Portfolio Website

A modern Next.js portfolio website with an integrated blog and automated analytics.

## Features

- 🚀 Next.js with App Router
- 🎨 Tailwind CSS + Shadcn UI components
- 📝 File-based blog system with Markdown
- 📊 Automated blog view tracking via PostHog
- 🌙 Dark/Light theme support
- 📱 Fully responsive design

## Blog Views Automation

This project includes automated blog post view tracking that:
- Runs every Saturday via GitHub Actions
- Queries PostHog analytics for page views
- Updates view counts in blog post frontmatter
- Automatically commits changes back to the repository

For setup instructions, see [docs/BLOG_VIEWS_AUTOMATION.md](docs/BLOG_VIEWS_AUTOMATION.md).

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Test blog views system (requires PostHog credentials)
npm run test:blog-views

# Manually update blog views (requires PostHog credentials)
npm run update:blog-views
```

## Blog System

Blog posts are stored as Markdown files in `public/content/blog/` with frontmatter:

```markdown
---
title: "Post Title"
date: "2025-11-23"
excerpt: "Brief description"
tags: ["tag1", "tag2"]
views: "0"  # Updated automatically
---

## Deployment

The site is configured for deployment to GitHub Pages:

```bash
npm run deploy
```

## Server Proxy For Decap CMS VPS

Run a docker instance on your VPS to verify your login:

```
docker run -d \
  -p 3000:3000 \
  -e OAUTH_CLIENT_ID=your_client_id \
  -e OAUTH_CLIENT_SECRET=your_client_secret \
  -e OAUTH_AUTHORIZE_URL=https://github.com/login/oauth/authorize \
  -e OAUTH_TOKEN_URL=https://github.com/login/oauth/access_token \
  -e GITHUB_API_URL=https://api.github.com \
  -e SCOPES=repo \
  decaporg/decap-cms-github-oauth-provider
```


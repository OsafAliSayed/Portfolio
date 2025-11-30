# Copilot / AI agent instructions — Portfolio (Next.js)

This repo is a small Next.js (App Router) portfolio that uses Tailwind, Shadcn UI primitives, and a file-based blog.
Keep instructions concise and only provide code that follows existing patterns (server components by default, centralized icons, Tailwind classes, and gray-matter for blog parsing).

Key files and where to look
- App router & theme: `app/layout.jsx`, `app/provider.jsx` (wraps PostHog + theme)
- Blog model: `lib/blog.js` — uses `public/content/blog/*.md` and `gray-matter` (examples: frontmatter `title`, `date`, `views`).
- Components: `components/` and `components/ui/` (shadcn primitives). Examples: `components/blog-section.jsx`, `components/icons.jsx` (centralized icon map).
- Static content: blog posts and CMS config under `public/content/blog/` and `public/admin/`.
- Scripts & dev: `package.json` (dev, build, deploy via gh-pages, local CMS via `decap-server`).

Small contract for changes you suggest or implement
- Inputs: new/edited component files or markdown files under `public/content/blog/`.
- Outputs: follow existing export/usage patterns (e.g., `getAllPosts()` API in `lib/blog.js`), use Tailwind classes and `components/ui/*` primitives when available.
- Error modes: if reading files under `public/content/blog/` may be absent; `lib/blog.js` guards for missing directory — keep same defensive style.

Project-specific patterns to follow
- Server vs Client components: prefer server components. Only add `"use client"` when using hooks or browser-only APIs. Many top-level components (sections) are server components that call `lib/*` directly (see `components/blog-section.jsx`).
- Icons: use `components/icons.jsx` for mapping icon names to react-icons; import that single module instead of ad-hoc react-icon imports.
- Blog content: add markdown files to `public/content/blog/` with frontmatter similar to `welcome.md`. `lib/blog.js` reads `slug.md` and expects `metadata.title`, `metadata.date`, `metadata.views`.
- Styling: prefer Tailwind utility classes and the theme variables in `app/globals.css` (use `bg-background`, `text-foreground`, etc.). Use `components/ui/*` for common patterns (buttons, cards).
- Analytics: PostHog wiring lives in `app/provider.jsx` and `lib/posthog.js` — keep instrumentation minimal and consistent with current calls.

Developer workflows / commands (explicit)
- Start dev server: `npm run dev` (runs `next dev`).
- Build for production: `npm run build` (runs `next build`).
- Serve static export: repository uses `npm run start` which serves the `out` directory (after `next export` if used). For normal preview of build use `next start` if needed.
- Deploy to GH Pages: `npm run deploy` (uses `gh-pages -d out`). Note: ensure `next export` is run if you rely on `out`.
- Local CMS: `npm run cms` (decap-server); run both with `npm run dev:cms` which runs concurrently.

Examples to copy from repo
- Read posts: `lib/blog.js` (getAllPostSlugs, getAllPosts). When writing code that lists posts, mirror `components/blog-section.jsx` which maps `metadata` fields to UI props.
- Layout/provider: `app/layout.jsx` wraps the app in `PostHogProvider` and includes `globals.css`. Follow this structure for providers.

When updating or adding files, keep changes minimal and consistent
- Preserve default exports for components already used by layout/page imports.
- Avoid changing global theme variables. If necessary, update `app/globals.css` and reference variables like `var(--primary)`.

When you are unsure
- If a change touches build/deploy behavior, mention the exact `package.json` script to update and test locally (`npm run build` then `npm run start` or `next start`).
- If adding remote services (new analytics, CMS provider), add configuration to `public/admin/` and document environment variables in the repo README — but do not commit secrets.

If you make edits, run the dev server locally and verify pages that render server-side (e.g., the home page and `/blog`) and confirm there are no filesystem-read errors when reading `public/content/blog/`.

— End of agent instructions —


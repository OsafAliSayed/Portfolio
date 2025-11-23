# GitHub Copilot Instructions for Portfolio Project

## Project Overview

This is a personal portfolio website built with Next.js 13.5.1, React 18.2.0, and Tailwind CSS 3.3.3. The portfolio showcases projects, skills, education, work experience, and includes a blog section. It features a clean, responsive design with dark/light mode support powered by next-themes. The project includes content management capabilities for blog posts using markdown files.

## Project Structure

- `app/`: Next.js app directory (App Router)
  - `layout.jsx`: Root layout with theme provider
  - `page.jsx`: Main page component
  - `globals.css`: Global CSS styles
  - `provider.jsx`: Theme and context providers
  - `blog/`: Blog-related pages
    - `page.jsx`: Blog listing page
    - `[slug]/`: Dynamic blog post pages

- `components/`: React components
  - `ui/`: Shadcn UI components
  - Section components (hero, about, projects, blog, etc.)
  - `icons.jsx`: Centralized icon mapping
  - `navbar.jsx`: Navigation component
  - Theme-related components

- `lib/`: Utility functions and configurations
  - `blog.js`: Blog post management functions
  - `utils.ts`: General utility functions

- `public/`: Static assets
  - `images/`: Images for projects, experience, and skills
  - `content/blog/`: Markdown files for blog posts
  - `favicon.jpeg`: Site favicon
  - `admin/`: CMS configuration files

## Tech Stack

- **Frontend Framework**: Next.js 13.5.1
- **UI Library**: React 18.2.0
- **Styling**: 
  - Tailwind CSS 3.3.3
  - CSS Modules
- **UI Components**:
  - Shadcn UI (Radix UI primitives)
  - Framer Motion for animations
  - React Icons for comprehensive icon library
- **Content Management**:
  - Markdown files for blog posts with frontmatter
  - Gray-matter for parsing markdown frontmatter
  - File-based CMS approach
- **Theming**: Always use the custom variables defined in `globals.css` for colors and themes. such as `var(--primary)`, `var(--secondary)`, etc. You can also use Tailwind CSS classes for colors like `bg-primary`, `text-secondary`, etc.

## Coding Standards

### Components
- Use functional components with hooks
- Follow JSX best practices
- Keep components modular and focused on a single responsibility
- Use prop destructuring for clarity
- **Server vs Client Components**: Be mindful of Next.js App Router distinctions
  - Use Server Components by default for data fetching and static content always avoid `"use client"` directive unless necessary

### Icon Management
- Use the centralized `icons.jsx` component for all icons
- Import icons from react-icons and map them in the Icons object
- Reference icons as `<Icons.IconName />` throughout the application

### Styling
- Use Tailwind CSS classes as primary styling method
- Maintain consistent color scheme using the theme
- Use CSS modules for complex component-specific styling
- Follow mobile-first responsive design principles

### File Naming
- Use kebab-case for files: `component-name.jsx`
- Use PascalCase for component names: `ComponentName`

### State Management
- Use React hooks (useState, useEffect, etc.) for state management
- Consider context API for theme and global state

## Development Workflow

### Adding New Components
1. Create component file in appropriate directory
2. Import necessary dependencies and UI components
3. Implement component using existing styling patterns
4. Export component and import where needed

### Adding New Sections
1. Create new section component in `/components`
2. Add to main page in appropriate order
3. Ensure responsive design for all screen sizes

### Blog Management
When working with blog posts:
1. Create markdown files in `/public/content/blog/`
2. Use frontmatter for metadata (title, date, views, etc.)
3. Blog posts are processed server-side using the functions in `/lib/blog.js`
4. Ensure proper error handling for missing or malformed blog content

### Updating Projects
When adding new projects to the portfolio:
1. Add project data to the projects array in `projects-section.jsx`
2. Add project images to `/public/images/projects/`
3. Ensure consistent image sizing and formatting

## Best Practices

### Performance
- Use Next.js Image component for optimized images
- Implement lazy loading where appropriate
- Keep component re-renders to a minimum

### Accessibility
- Use semantic HTML elements
- Ensure proper contrast ratios for text
- Add appropriate ARIA attributes when necessary
- Ensure keyboard navigation works correctly

### SEO
- Use appropriate meta tags in layout
- Use semantic HTML structure
- Ensure content is crawlable

## Deployment
- Project is built with `next build`
- Outputs static files with `next export`
- Deployed using GitHub Pages

## Additional Notes
- Theme switching functionality should always be preserved
- Maintain responsive design for all screen sizes (mobile, tablet, desktop)
- Keep dependencies updated but avoid breaking changes

# GitHub Copilot Instructions for Portfolio Project

## Project Overview

This is a personal portfolio website built with Next.js 13.5.1, React 18.2.0, and Tailwind CSS 3.3.3. The portfolio showcases projects, skills, education, and work experience. It features a clean, responsive design with dark/light mode support powered by next-themes.

## Project Structure

- `app/`: Next.js app directory (App Router)
  - `layout.jsx`: Root layout with theme provider
  - `page.jsx`: Main page component
  - `globals.css`: Global CSS styles
  - `components/`: CSS styles for specific components
  - `projects/`: Project-specific pages

- `components/`: React components
  - `ui/`: Shadcn UI components
  - Section components (hero, about, projects, etc.)
  - Theme-related components

- `public/`: Static assets
  - `images/`: Images for projects, experience, and skills
  - `favicon.jpeg`: Site favicon

## Tech Stack

- **Frontend Framework**: Next.js 13.5.1
- **UI Library**: React 18.2.0
- **Styling**: 
  - Tailwind CSS 3.3.3
  - CSS Modules
- **UI Components**:
  - Shadcn UI (Radix UI primitives)
  - Framer Motion for animations
- **Form Handling**:
  - React Hook Form
  - Zod for validation
- **Theming**: Always use the custom variables defined in `globals.css` for colors and themes. such as `var(--primary)`, `var(--secondary)`, etc. You can also use Tailwind CSS classes for colors like `bg-primary`, `text-secondary`, etc.

## Coding Standards

### Components
- Use functional components with hooks
- Follow JSX best practices
- Keep components modular and focused on a single responsibility
- Use prop destructuring for clarity

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

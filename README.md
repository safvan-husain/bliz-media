# Bliz Media Landing Page

Marketing and web development agency website built with Astro, React islands, and Tailwind CSS.

## Tech Stack

- Astro 5
- React 19 (`@astrojs/react`)
- Tailwind CSS 4 (`@tailwindcss/vite`)
- TypeScript
- Motion/animation libraries (`framer-motion`, `motion`, `tsparticles`, `three`, `matter-js`)

## Run Locally

```bash
npm install
npm run dev
```

Default dev URL: `http://localhost:4321`

## Scripts

- `npm run dev` - Start Astro dev server
- `npm run build` - Build production output to `dist/`
- `npm run preview` - Preview the built site
- `npm run astro` - Run Astro CLI commands

## Project Structure

```text
.
├── public/                     # Static assets (images, icons, logos)
├── src/
│   ├── components/             # Reusable UI sections and React/Astro components
│   ├── data/                   # Content/data sources (services, projects, blogs, team)
│   ├── hooks/                  # Reusable client-side hooks
│   ├── layouts/                # Shared page layouts
│   ├── pages/                  # Route files
│   └── styles/global.css       # Tailwind import + global theme tokens
├── astro.config.mjs
└── package.json
```

## Routes

- `/` Home
- `/about`
- `/contact`
- `/services`
- `/services/[slug]`
- `/projects`
- `/project/[slug]`
- `/blogs`
- `/blogs/[slug]`

## Content and Styling Conventions

- Keep reusable UI in `src/components`.
- Keep editable content in `src/data` as object/array lists.
- Use Tailwind utility classes for styling.
- Use color tokens defined in `src/styles/global.css` instead of hardcoded colors.
- Single-theme project only (no dark mode support).

## Deployment

Build the project:

```bash
npm run build
```

Preview production build locally:

```bash
npm run preview
```

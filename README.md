# Bliz Media Landing Page

Marketing and web development agency website built with Astro, React islands, and Tailwind CSS.

## Tech Stack

- Astro 5
- React 19 (`@astrojs/react`)
- Tailwind CSS 4 (`@tailwindcss/vite`)
- TypeScript
- Motion/animation libraries (`framer-motion`, `motion`, `tsparticles`, `three`, `matter-js`)
- Docker + Nginx (production container)

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Start dev server:

```bash
npm run dev
```

App runs on `http://localhost:4321`.

## Scripts

| Command | Purpose |
| :-- | :-- |
| `npm run dev` | Run Astro dev server |
| `npm run build` | Build production output to `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run astro -- --help` | Show Astro CLI help |

## Docker

Run with Docker Compose:

```bash
docker compose up --build
```

This builds the Astro project and serves `dist/` with Nginx on port `4321`.

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

## Key Routes

- `/`
- `/about`
- `/contact`
- `/services`
- `/services/[slug]`
- `/projects`
- `/project/[slug]`
- `/blogs`
- `/blogs/[slug]`

## Content Management

To update site content, edit data files in `src/data/`:

- `src/data/services.ts`
- `src/data/projects.ts`
- `src/data/blogs.ts`
- `src/data/team.ts`

This keeps UI components separate from data.

## Styling Notes

- Use Tailwind utility classes for component styling.
- Reuse color/theme variables from `src/styles/global.css`.
- This project uses a single light theme (no dark mode).

## Build Output

Production assets are generated in `dist/` via:

```bash
npm run build
```

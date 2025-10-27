# bmocc.github.io — React + MUI (AI/RL Theme)

A GitHub Pages site for Brandon Mocco built with Vite + React + MUI, themed around agentic AI, RAG, and reinforcement learning.

## Local Dev

Prereqs: Node 18+ (or 20+) and npm.

```
npm install
npm run dev
```

Open the printed localhost URL. Routing uses `HashRouter`, so refreshes work on GitHub Pages.

## Build

```
npm run build
npm run preview
```

## Deploy (GitHub Pages)

This repo includes a GitHub Actions workflow at `.github/workflows/deploy.yml` that builds on each push to `main` and deploys to Pages.

Steps (one‑time, in GitHub UI):
- Settings → Pages → Source: GitHub Actions
- Push to `main` and the site will deploy to `https://bmocc.github.io`.

## Structure

- `src/theme.js` — dark neon theme (purple/teal) and UI tweaks.
- `src/pages/*` — Home, Projects, ProjectDetail, About, Notes.
- `src/components/*` — Hero, ProjectCard, Stat.
- `src/data/projects.js` — edit/add project metadata (RL projects welcome!).

## Customize

- Update `src/data/projects.js` with your links, repos, and images.
- Add covers under `public/` (e.g., `public/covers/xyz.jpg`) and set `cover` on projects.
- Tweak theme colors in `src/theme.js`.


# DPnimo11.github.io

Personal portfolio site, built with Astro and deployed to GitHub Pages.

## Tech

- Astro static site
- Plain CSS in `src/styles/global.css`
- Project content in `src/data/projects.ts`
- Static assets in `public/`
- GitHub Actions deployment to Pages

## Local Development

Requires Node `>=22.12.0`.

```bash
npm install
npm run dev
```

Build locally:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Editing

- Home page: `src/pages/index.astro`
- About page: `src/pages/about.astro`
- Project data: `src/data/projects.ts`
- Project detail template: `src/pages/projects/[slug].astro`
- Shared visual styling: `src/styles/global.css`

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds the Astro site and deploys `dist/` through GitHub Pages Actions.

GitHub Pages should be configured to deploy from Actions.

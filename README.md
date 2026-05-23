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

Optional local environment:

```bash
PUBLIC_MAPBOX_TOKEN=your_mapbox_public_token
```

The Spark Social Map demo uses Mapbox Static Images when this token is present.
Without it, the site still builds and shows the map fallback state.

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

For the Spark map preview in production, set `PUBLIC_MAPBOX_TOKEN` as a GitHub
Actions secret or repository variable. The workflow passes it through only at
build time.

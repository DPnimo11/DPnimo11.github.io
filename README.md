# Darren Wang — Portfolio

Personal portfolio for Darren Wang, a computer science student at the
University of Pennsylvania pursuing an accelerated master's in robotics. The
site collects work in computational biology, systems, machine learning/data,
and full-stack development.

[Visit the live site](https://dpnimo11.github.io/)

## Overview

The site is a static Astro project with a restrained lab-notebook and console
visual direction. It includes:

- A responsive homepage with a layered technical artifact stack.
- A data-driven project index and generated project detail pages.
- Project-specific artifacts including a molecular structure viewer, terminal
  simulation, chess tactics trainer, maps, pipeline views, and small interactive
  tools.
- Manual light/dark theme controls with system-theme fallback and persistence.
- Canonical metadata, social previews, structured data, `robots.txt`, and a
  generated sitemap.

## Stack

- [Astro](https://astro.build/) for static generation and component structure.
- TypeScript and vanilla JavaScript for project data and interactions.
- Plain CSS organized into shared and demo-specific partials.
- [Three.js](https://threejs.org/) for procedural 3D experiments and components.
- GitHub Pages and GitHub Actions for hosting and deployment.

## Repository Structure

```text
src/
  components/          Shared UI, homepage artifact, and demo dispatcher
  components/demos/    Project-specific interactive artifacts
  data/projects.ts     Project content and visual configuration
  data/site.ts         Shared profile, contact, and SEO metadata
  layouts/             Shared page shell and metadata
  pages/               Home, About, Resume, and project routes
  styles/              Global, responsive, and demo-specific CSS
public/
  img/                 Project, profile, social, and homepage assets
  structures/          Curated structures used by the PepDock viewer
  video/               Static project video assets
```

## Local Development

Node.js `>=22.12.0` is required.

```bash
npm install
npm run dev
```

Useful commands:

```bash
npm run build       # create the production site in dist/
npm run preview     # preview the production build locally
npm run assets:seo  # regenerate optimized profile/social assets
```

## Editing Projects

Project content lives in [`src/data/projects.ts`](src/data/projects.ts). Each
entry controls its card, detail-page copy, links, stack, metrics, image
configuration, and demo type.

Interactive project artifacts live in [`src/components/demos/`](src/components/demos/).
[`DemoPanel.astro`](src/components/DemoPanel.astro) remains a small dispatcher
between project records and those components. Shared public profile and SEO
metadata lives in [`src/data/site.ts`](src/data/site.ts).

## Deployment

Pushes to `main` run [the GitHub Pages workflow](.github/workflows/deploy.yml).
The workflow installs dependencies with Node 22, runs `npm run build`, uploads
`dist/`, and deploys the static artifact through GitHub Pages Actions.

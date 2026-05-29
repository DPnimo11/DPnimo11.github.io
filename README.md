# DPnimo11.github.io

Personal portfolio site for Darren Wang. Built with a restrained, tactile lab-notebook aesthetic to showcase computational biology research, systems code, ML/data projects, and web applications. 

## Tech Stack

- **Framework**: [Astro](https://astro.build/) (Static Site Generation)
- **3D Graphics**: [Three.js](https://threejs.org/) (used for the interactive Hybrid Data Stream Helix and ambient graphics)
- **Styling**: Vanilla CSS (zero-dependency global partials with CSS variables)
- **Content**: Type-safe data registries (`src/data/projects.ts`)
- **Demos**: Embedded interactive components, Mapbox Static Images API integrations, and Vanilla JS simulators
- **Hosting**: GitHub Pages

## Deployment

Pushes to the `main` branch automatically trigger the `.github/workflows/deploy.yml` pipeline. This securely injects necessary environment variables (like `PUBLIC_MAPBOX_TOKEN`), compiles the Astro site, and deploys the fully optimized static bundle through GitHub Pages Actions.

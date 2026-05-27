import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://dpnimo11.github.io",
  integrations: [sitemap()],
});

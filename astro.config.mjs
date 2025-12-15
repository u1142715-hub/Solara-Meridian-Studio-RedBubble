import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://u1142715-hub.github.io",
  base: "/Solara-Meridian-Studio-RedBubble",

  // Critical for GitHub Pages: ensures /route/ maps to /route/index.html
  trailingSlash: "always",
  build: { format: "directory" },

  integrations: [sitemap()],
});
;

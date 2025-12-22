import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import rehypePrefixBaseLinks from "./src/utils/rehypePrefixBaseLinks.mjs";

export default defineConfig({
  site: "https://u1142715-hub.github.io/Solara-Meridian-Studio-RedBubble/",
  base: "/Solara-Meridian-Studio-RedBubble",

  // Critical for GitHub Pages: ensures /route/ maps to /route/index.html
  trailingSlash: "always",
  build: { format: "directory" },
 
  integrations: [sitemap()],

  // Ensure Markdown-generated links respect `base` too
  markdown: {
    rehypePlugins: [[rehypePrefixBaseLinks, { base: "/Solara-Meridian-Studio-RedBubble" }]],
  },
});

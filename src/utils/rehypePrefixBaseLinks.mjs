/**
 * rehypePrefixBaseLinks.mjs
 * Prefixes GitHub Pages project `base` onto root-relative href/src in Markdown HTML output.
 * - Only touches root-relative URLs like "/articles/..." or "/art/..."
 * - Skips absolute URLs (http/https), mailto, tel, hashes, and already-prefixed URLs.
 */
export default function rehypePrefixBaseLinks({ base = "/" } = {}) {
  const normalizedBase = (base || "/").replace(/\/$/, ""); // no trailing slash

  const shouldSkip = (url) =>
    !url ||
    typeof url !== "string" ||
    url.startsWith("#") ||
    url.startsWith("mailto:") ||
    url.startsWith("tel:") ||
    url.startsWith("http://") ||
    url.startsWith("https://") ||
    url.startsWith(normalizedBase + "/") ||
    url === normalizedBase;

  const prefix = (url) => {
    if (shouldSkip(url)) return url;
    if (!url.startsWith("/")) return url; // only root-relative
    return `${normalizedBase}${url}`;
  };

  const walk = (node) => {
    if (!node || typeof node !== "object") return;

    if (node.type === "element" && node.properties) {
      if (typeof node.properties.href === "string") {
        node.properties.href = prefix(node.properties.href);
      }
      if (typeof node.properties.src === "string") {
        node.properties.src = prefix(node.properties.src);
      }
    }

    const kids = node.children;
    if (Array.isArray(kids)) {
      for (const child of kids) walk(child);
    }
  };

  return function transformer(tree) {
    walk(tree);
  };
}

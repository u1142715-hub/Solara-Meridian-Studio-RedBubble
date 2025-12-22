import { defineCollection, z } from "astro:content";

const articles = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    topicCluster: z.string().optional(),
    targetLandingPage: z.string().optional(),
  }),
});

// Optional: define artworks too (prevents the "artworks does not exist" warning)
// If you are not using src/content/artworks yet, you can leave it empty for now.
// If you already have an artworks collection schema elsewhere, keep that instead.
const artworks = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    publishedAt: z.coerce.date().optional(),
  }),
});

export const collections = {
  articles,
  artworks,
};


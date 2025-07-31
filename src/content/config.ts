// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    author: z.string().default('MAAU MAAU Team'),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    location: z.string().optional(), // Manchester, Salford, etc.
    draft: z.boolean().default(false),      // <-- was missing
    noindex: z.boolean().default(false),    // <-- was missing
  }),
});

export const collections = {
  blog,
};
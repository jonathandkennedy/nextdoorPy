import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(170),
    h1: z.string().optional(),
    category: z.enum(['clover', 'gateways', 'dual-pricing', 'quickbooks', 'guides', 'industries', 'compare']),
    published: z.coerce.date(),
    updated: z.coerce.date(),
    author: z.string().default('Jonathan Kennedy'),
    // One to three sentences that answer the query outright. Rendered at the top and used as the snippet target.
    tldr: z.array(z.string()).min(1).max(5),
    keywords: z.array(z.string()).default([]),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    cta: z
      .object({ heading: z.string(), body: z.string(), smsBody: z.string().optional() })
      .optional(),
    related: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { articles };

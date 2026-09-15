import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://nextdoorpayments.com',
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/thank-you'),
      changefreq: 'weekly',
      priority: 0.7,
    }),
  ],
});

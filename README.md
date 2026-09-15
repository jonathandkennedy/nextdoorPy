# nextdoorpayments.com

Static marketing and content site for Nextdoor Payments, built with Astro and deployed on Vercel.

## Run it

```sh
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs to dist/
npm run preview
npm run indexnow   # after a production deploy: submit sitemap URLs to IndexNow
```

Node 22 or newer.

## Where things live

| Path | What |
|---|---|
| `src/config.ts` | Phone number, hours, service area, nav. Change the phone here and it updates everywhere, including schema. |
| `src/content/articles/**/*.md` | Every guide and industry page. Folder name is the URL prefix (`clover/pricing.md` becomes `/clover/pricing`). Frontmatter schema is in `src/content.config.ts`. |
| `src/pages/*.astro` | Homepage, hub pages (clover, gateways, dual-pricing, industries, guides), statement analysis, contact, opportunity, 404, robots.txt, llms.txt. |
| `src/layouts/Article.astro` | Renders an article: TL;DR block, table of contents, body, inline CTA, FAQ with FAQPage schema, related links, sticky call sidebar. |
| `src/components/` | Header, Footer, sticky call bar, CTA block, FAQ, lead form. |
| `public/` | Images, favicon, IndexNow key file. |
| `research/` | Keyword data, clusters, fan-out query map, competitor notes. |
| `docs/STRATEGY.md` | The plan: positioning, content calendar, outbound playbook, conversion spec, measurement. |
| `scripts/indexnow.mjs` | IndexNow submitter. |

## Writing a new article

1. Copy an existing file in `src/content/articles/` into the right folder.
2. Fill the frontmatter: `title` (title tag), `h1`, `description` (150 to 170 characters), `category`, `published`, `updated`, `tldr` (1 to 5 sentences that answer the query outright), `faq` (4 to 6 real questions), `cta`, `related` (article ids), `keywords`.
3. Write the body in Markdown. Use tables for parallel facts. Date every price. Link to two or three other articles with descriptive anchor text.
4. Check `research/fanout-queries.md` and make sure each sub-query for the page is answered.
5. `npm run build`. Descriptions over 170 characters fail the build on purpose.
6. Bump `updated` whenever facts change. The date is shown on the page and in schema.

## Environment variables

Copy `.env.example` to `.env`. All optional:

- `PUBLIC_GA_ID`: GA4 measurement ID. Enables gtag and call_click / text_click / generate_lead events.
- `PUBLIC_FORM_ENDPOINT`: POST endpoint for the statement-analysis, contact and agent forms (Formspree, Basin, Web3Forms or a Vercel function). Without it, submitting a form opens the SMS composer with the details prefilled.
- `PUBLIC_CALLSCALER_SRC`: CallScaler dynamic number insertion script URL.

## Deploy

Push to the production branch. Vercel detects Astro and builds `dist/`. Set the environment variables above in the Vercel project. After the first production deploy, run `npm run indexnow` locally once and submit the sitemap in Google Search Console and Bing Webmaster Tools.

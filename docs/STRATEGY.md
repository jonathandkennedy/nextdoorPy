# Nextdoor Payments: growth plan

Prepared September 15, 2026. Companion files: `research/keyword-clusters.md`, `research/fanout-queries.md`, `research/competitors.md`.

## The thesis in five sentences

1. The Clover keyword cluster has high commercial value (CPCs of $20 to $50) and almost no ranking difficulty (KD 0 to 20 on most terms). A two-person Clover reseller, limelightpayments.com, pulls about 6,000 organic visits a month with 474 ranking keywords by doing nothing more than a page per device, a page per vertical and a comparison blog.
2. Nextdoor Payments has an economic argument those resellers do not lead with: dual pricing takes the merchant's processing cost to zero. Every page on this site is built around that number.
3. You have lists of Authorize.net and other gateway customers. Outbound calling converts far better when the prospect can be texted a page that answers exactly what they will Google after the call. The gateway pages exist for that.
4. AI search now sits at position one on every SERP we checked. Google says no special file or markup is required; what gets cited is an indexable page with a direct answer at the top, dated facts, tables, and coverage of the sub-questions the AI fans out to. That is the format of every article here.
5. Every visit has one job: a call or a text. The site is built to make that the easiest action on every screen.

## What is built (this repository)

- Astro static site, deploys to Vercel with zero config. 25 pages at launch.
- Homepage and agent page ported from the existing Ionos site with the CallScaler number (213) 934-8686 everywhere, set in one place (`src/config.ts`).
- Hub pages: /clover, /gateways, /dual-pricing, /industries, /guides.
- 15 long-form articles with answer blocks, dated facts, tables, 4 to 6 FAQs each with FAQPage schema, Article and BreadcrumbList schema, author and updated dates, related links.
- Conversion layer: sticky call and text bar on mobile, floating call pill on desktop, call CTA in the header, sidebar and inline blocks on every article, a statement-analysis page with a form that falls back to SMS if no form endpoint is configured, and click tracking on every tel: and sms: link that fires GA4 events and dataLayer pushes.
- Organization, LocalBusiness and FinancialService schema on every page; Service schema on the Clover and statement-analysis pages.
- robots.txt allowing every major AI crawler, llms.txt generated from the content collection, XML sitemap, IndexNow key file and submit script.
- Research files with the raw keyword export, cluster mapping, fan-out query map and competitor analysis.

## Things to verify before launch

These are claims on the site or assumptions in this plan that only you can confirm. Search the codebase for the text to change it.

| Item | Where | Why it matters |
|---|---|---|
| (213) 934-8686 forwards to a line you answer, with voicemail-to-text | CallScaler | Every CTA points here |
| hello@nextdoorpayments.com exists | `src/config.ts` | Contact page and schema |
| Hours "Mon to Sat, 7am to 7pm PT" | `src/config.ts` | Footer, contact page |
| "No long-term contract, no early termination fee, no leases, free-equipment placement for qualifying merchants" | Many pages | This is the positioning; it has to be true in your agreements |
| "$419.71 average monthly residual per dual pricing merchant", "up to 70% split" | /opportunity, homepage | Recruiting claims |
| Founder name Jonathan Kennedy as article author | `src/config.ts`, frontmatter default | Author entity for E-E-A-T; change if someone else should be the face |
| Whether accept.blue accepts Authorize.net-style API calls (an "emulator") | /gateways/switch-from-authorize-net says "some gateways" without naming accept.blue | Do not claim it until confirmed with accept.blue |
| Authorize.net CIM/ARB export fee and schedule | Gateway pages cite Authorize.net documentation retrieved September 2026 | Recheck quarterly |
| Clover prices and QuickBooks Payments rates | Dated on each page | Recheck monthly; bump `updated` when changed |
| Unsplash images on homepage and opportunity page | `src/pages/index.astro`, `opportunity.astro` | Hotlinked. Replace with your own install photos within the first month; real photos of real installs outperform stock and support the local entity |

## Two engines

### Engine 1: outbound to your gateway lists (starts week 1)

This is where clients come from in the first 90 days. The site's job is to make each call convert.

**The offer for an Authorize.net merchant.** Keep your website, cart or QuickBooks exactly as it is. We move the gateway to accept.blue (or re-price the processing behind Authorize.net if the integration is Authorize.net-only), migrate stored cards so nobody re-enters anything, and put gateway and processing on one bill at interchange-plus. For any in-person channel, dual pricing at zero.

**Call flow.**
1. Open: "I work with businesses on Authorize.net. Quick question: when did you last have the processing behind the gateway re-priced?" Most have never. That is the hook.
2. Ask for the two statements (Authorize.net and the processor). Offer the 24-hour analysis.
3. Text, while on the call, the link to /free-statement-analysis and the page that matches what they said: /gateways/authorize-net-fees (they think the gateway is expensive), /gateways/switch-from-authorize-net (they want out), /gateways/authorize-net-alternatives (they are shopping), /quickbooks/credit-card-processing-fees (they invoice through QuickBooks).
4. Deliver the analysis by text within 24 hours as a photo of a one-page comparison. Then call.

**Text templates** (all under 300 characters, from the CallScaler number so replies land in one place):

- After first call: "Thanks for the time. Here's the page on what Authorize.net gateway-only accounts actually pay: nextdoorpayments.com/gateways/authorize-net-fees. Send a photo of both statements when you can and I'll have numbers back within a day. Jon, Nextdoor Payments."
- No answer: "Jon at Nextdoor Payments. I help Authorize.net merchants cut the processing bill behind the gateway without changing their website. If you send a photo of last month's statement I'll reply with what you'd pay with us. No contract either way."
- After analysis: "Your numbers are attached. Effective rate today X%, with us Y%, about $Z/month. Stored cards move over. Want me to walk you through the switch? Here's how it works: nextdoorpayments.com/gateways/switch-from-authorize-net"

**Objections and the page that answers them.**

| Objection | Answer | Page |
|---|---|---|
| "My developer set it up, I can't touch it" | Nothing on the site changes but the plugin settings; we do it on a call with the developer | switch-from-authorize-net |
| "My customers have cards on file" | Authorize.net exports them to a PCI-compliant vault; two to four weeks | switch-from-authorize-net, FAQ |
| "Authorize.net is only $25" | The gateway is 5% to 10% of the bill; the processor is the rest | authorize-net-fees |
| "I don't want a contract" | Month to month, no ETF | any page, footer |
| "I need Level 3 for my B2B customers" | accept.blue does enhanced Level 2 and 3 | accept-blue |

**Cadence.** 40 dials a day, four days a week, is 160 conversations attempted a week. At a 10% reach rate and a 30% statement-send rate from reached, that is about five statements a week. Statement to close in this industry runs 30% to 50% when the analysis shows real savings. Two to three new merchants a week from outbound alone is a realistic month-two target.

**Same playbook for POS lists.** For Clover merchants on a reseller contract: "When does your current agreement renew, and what's the ETF?" Text /clover/reseller-vs-direct and /clover/dual-pricing.

### Engine 2: inbound from search and AI answers (compounds from month 2)

**How pages get cited.** Google's published guidance for AI Overviews and AI Mode says there are no additional requirements beyond being indexed and eligible for a snippet, and that no special files or markup are needed. What the 2026 studies and our own SERP pulls agree on: pages get cited when they answer the question directly near the top, cover the sub-queries the AI fans out to, carry dated and specific facts, use tables for comparisons, show an author and an updated date, and are fresh. Perplexity weights freshness heavily; ChatGPT cites brands rarely (about 0.6% of answers in one 34,000-response study) and favors sites that already rank; Google AI Mode follows organic strength plus fan-out coverage. Structure on this site, per article: TL;DR answer block, table of contents, tables, FAQ with FAQPage schema, byline and dates, related links, llms.txt entry, AI crawlers allowed.

**Fan-out coverage.** `research/fanout-queries.md` lists, for each page, the 8 to 10 sub-queries an AI system is likely to generate and which section answers each. Every new page gets its map written first. Every quarter, ask Google AI Mode, ChatGPT and Perplexity the head query for each page and log which site is cited.

**Freshness.** Prices on the Clover, Authorize.net and QuickBooks pages are dated. Recheck monthly, edit the number, bump `updated`. A dated page that is actually current is the cheapest citation signal available.

**Links.** No amount of on-page work replaces a few real links. Sources, in order of effort: your equipment vendors' dealer directories (Clover partner directory, Dejavoo, Exatouch, TableTurn, Hyfin, accept.blue partner pages), local chambers of commerce in San Diego and LA, restaurant and retail association member listings, a guest post on one POS or restaurant-industry blog per quarter, and merchants you install who have websites (a "payments by Nextdoor" footer link on a client site is a legitimate local link).

## Gateway cluster (built September 15, 2026)

Twenty-nine gateway pages now cover the topic end to end: basics, pricing, features (Level 3, recurring, ACH, 3D Secure, PCI, virtual terminal, high risk), one page per gateway on your call lists (Authorize.net, accept.blue, NMI, USAePay, Fluidpay, PayTrace, EBizCharge, linked2pay, Dejavoo iPOSpays, Stripe, Braintree, Helcim, Elavon Converge, Global Payments Integrated, Pineapple/CardPointe, AnywhereCommerce), the two retiring gateways (Payflow, Transaction Express) and the platforms (WooCommerce, Shopify, other carts). The keyword map and outbound page-per-prospect table are in `research/gateway-cluster.md`. Add a page for each additional gateway on your lists using the same structure; the template is any of the existing gateway pages.

## Content calendar: first 12 weeks

Pages built now are marked done. Each new page gets a fan-out map before writing, an answer block, a table, an FAQ, dated facts, and links to three existing pages.

| Week | Page | Head query (volume, KD, CPC) | Cluster |
|---|---|---|---|
| 0 | 15 articles plus 5 hubs | see research | done |
| 1 | /dejavoo | dejavoo (2,900, KD 5, $26) | products |
| 1 | /compare/clover-vs-square | clover vs square (1,300 + 1,300, KD 0, $16) | Clover |
| 2 | /clover/flex | clover flex (4,400, KD 1, $26) | Clover |
| 2 | /guides/passing-card-fees-to-customers | passing on debit card fees to customers (720, KD 20, $17) | dual pricing |
| 3 | /clover/mini | clover mini (2,900, KD 0, $14) | Clover |
| 3 | /dual-pricing/signage (free sign download, phone number gate) | cash discount signage + signs + templates (1,500 combined, KD 0) | lead magnet |
| 4 | /exatouch | exatouch, exatouch pos (340, KD 0, $17 to $28) | products |
| 4 | /compare/clover-vs-toast | clover vs toast (390 + 10, KD 0, $30 to $42) | Clover |
| 5 | /clover/station-duo | clover station duo (1,000, KD 0) plus duo price | Clover |
| 5 | /guides/pci-non-compliance-fee | pci non compliance fee + pci compliance fee (520, KD 0 to 10) | fees |
| 6 | /hyfin and /text-to-pay | hyfin (1,900, KD 22, $46); text to pay (720, KD 0, $10) | products, QuickBooks |
| 6 | /clover/review | clover pos reviews (720, KD 6, $26) | Clover |
| 7 | /tableturn | tableturn (1,000, KD 0, $21) | products |
| 7 | /guides/interchange-plus-pricing | interchange plus pricing (210, KD 0, $23) + vs flat rate | fees |
| 8 | /clover/kiosk | clover kiosk (880, KD 0, $10) | Clover |
| 8 | /dual-pricing/surcharge-laws-by-state | credit/debit card surcharge laws by state (740, KD 25 to 39) | dual pricing |
| 9 | /industries/salons, /industries/auto-repair | credit card processing for salons (50, KD 0, $26); auto repair | industries |
| 9 | /clover/quickbooks-integration | clover quickbooks integration + does clover integrate (200, KD 0, $22 to $28) | Clover |
| 10 | /gateways/pricing (gateway fee comparison) | payment gateway pricing (260, KD 13, $29) + fees comparison | gateways |
| 10 | /industries/professional-services (law, accounting, medical) | credit card processing for lawyers (30, KD 9, $38) | industries |
| 11 | /san-diego and /los-angeles city pages | merchant services san diego, credit card processing los angeles | local |
| 11 | /guides/credit-card-processing-fees-explained | credit card processing fees (3,600, KD 31, $31) | authority |
| 12 | /clover/pricing refresh, all price pages rechecked | | maintenance |
| 12 | /guides/best-credit-card-processing-for-small-business | (2,400, KD 7, $67) | authority |

After week 12: one Clover page or comparison a week, one industry page every two weeks, monthly price refresh, quarterly AI citation audit.

## Conversion to calls: what is in place and what to add

In place:

- Phone in the top bar, nav button, hero, every section CTA, footer, floating pill (desktop) and sticky call/text bar (mobile). The text option is always beside the call option because a business owner at the counter can text and cannot talk.
- Every tel: and sms: click pushes `call_click` or `text_click` to dataLayer and GA4 with the CTA position, so you can see which placements convert.
- Statement analysis as the universal low-commitment ask: text a photo, get numbers in 24 hours. It is the ask on every page.
- Forms post to whatever endpoint you set; without one, submit opens the SMS composer with the details prefilled so the lead reaches your phone anyway.
- Sidebar CTA on every article stays on screen while reading.

To add, in order:

1. **CallScaler dynamic number insertion.** Paste the DNI script URL into `PUBLIC_CALLSCALER_SRC`. Then organic, direct and any future ads each get their own number and you see calls by source and landing page. CallScaler's DNI is included on all plans and captures gclid, UTM and landing page per session.
2. **GA4.** Set `PUBLIC_GA_ID`. Mark `call_click`, `text_click` and `generate_lead` as key events. Connect Search Console.
3. **Form endpoint.** Formspree, Basin or Web3Forms take five minutes. Set `PUBLIC_FORM_ENDPOINT`. Route to email and to a text via Zapier if you want the phone to buzz.
4. **After-hours auto-reply.** CallScaler or your carrier: a missed call outside hours gets an immediate text: "Got your call. I'll ring you back first thing. Faster: text a photo of your statement here." Missed-call text-back is the single highest-leverage conversion fix for a one-person sales operation.
5. **Real photos.** Replace the Unsplash images with photos of your installs, your terminals, you at a counter. Add a short "who you're calling" block with your photo and name on the contact page and the statement-analysis page.
6. **Reviews.** After each install, text a review link. Until Google Business Profile is possible, collect on Yelp and Facebook and quote them (with permission) on the homepage and industry pages. Add Review schema only for reviews shown on the page.
7. **Calculator.** A dual pricing savings calculator on /dual-pricing (volume in, annual savings out, with a "text me this" button that sends the result to you as a lead). Week 3 or 4.

## Local search without a Google Business Profile (for now)

- LocalBusiness schema is on every page with areaServed for San Diego, Los Angeles, Orange County and California.
- Build the San Diego and Los Angeles city pages (week 11) with real install stories, neighborhoods served, and the local number.
- Claim and fill: Bing Places, Apple Business Connect, Yelp, BBB, Nextdoor (the platform; your name is a natural fit), Facebook, Alignable, the San Diego and LA chambers. Use the same name, address (or service-area designation) and the main phone consistently. Google treats these as corroboration when the profile does get created.
- When GBP becomes possible: list the primary business line as the main number and the CallScaler number as an additional number, or use a dedicated CallScaler number for GBP. Keep the website's displayed number consistent with what CallScaler swaps in for organic traffic.

## Technical launch checklist

1. Create the Vercel project from this repo. Framework preset: Astro. Build `npm run build`, output `dist`. Set the three environment variables.
2. Point nextdoorpayments.com at Vercel (A record 76.76.21.21 and CNAME www to cname.vercel-dns.com, or as Vercel instructs). Keep Ionos DNS but change records; or move DNS to Vercel. Set the apex as canonical and redirect www.
3. Confirm https://nextdoorpayments.com/2c145ebe707b442fb252d480a370e406.txt serves the key. Run `npm run indexnow` once.
4. Google Search Console: add the domain property, submit /sitemap-index.xml, request indexing for the homepage and the five hubs.
5. Bing Webmaster Tools: import from Search Console, submit sitemap. Bing powers ChatGPT search results, so this is not optional.
6. GA4 property, key events, link to Search Console.
7. Check /llms.txt and /robots.txt render in production.
8. Run a Lighthouse pass on the homepage and one article on mobile. The site should score in the 90s; if fonts are the drag, self-host them.
9. Test the sticky call bar and SMS links on a real iPhone and Android. Test the form fallback with no endpoint set.
10. Old Ionos site: once DNS moves, nothing else to do. The only prior URL besides / was /opportunity/, which is redirected.

## Measurement

Weekly, ten minutes:

- CallScaler: calls and texts by source and landing page. Which pages produced conversations.
- GA4: `call_click` and `text_click` by page and CTA position.
- Search Console: impressions and clicks by page; new queries with impressions that a page does not answer (add to the fan-out map).
- Pipeline: statements received, analyses delivered, installs.

Monthly:

- Rank tracker in OpenSEO (project "Nextdoor Payments", id 90b72971-885d-4dc3-9ef3-fa4ed01fb328). Track the head keyword for each page plus the top 30 from the clusters file. Set up with `create_rank_tracker` when the site has been live two weeks.
- Price refresh on the Clover, Authorize.net and QuickBooks pages.

Quarterly:

- AI citation audit: head query per page into Google AI Mode, ChatGPT and Perplexity. Log in `research/ai-citation-log.md`. Note which competitor is cited when you are not, and what their page has that yours does not.
- Backlink count and referring domains.

Targets: by day 90, 40 indexed pages, 300 organic clicks a month, first AI citations on the California dual pricing and Authorize.net pages, and outbound producing two or more installs a week. By day 180, 1,500 organic clicks a month and inbound calls covering a third of new installs.

## Budget notes

OpenSEO credits used for this research: about 500 of 4,817. The remaining 4,300 cover a rank tracker for 50 keywords for several months plus periodic SERP checks. Vercel hobby tier is sufficient until traffic grows. CallScaler DNI is included on all plans. Everything else in this plan is time.

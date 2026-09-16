import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { site } from '../config';

export const GET: APIRoute = async () => {
  const articles = (await getCollection('articles', ({ data }) => !data.draft)).sort((a, b) => a.id.localeCompare(b.id));
  const byCat = (cat: string) => articles.filter((a) => a.data.category === cat);
  const line = (a: (typeof articles)[number]) => `- [${a.data.h1 ?? a.data.title}](${site.url}/${a.id}): ${a.data.description}`;

  const body = `# ${site.name}

> ${site.name} is a merchant services provider based in Southern California that sets up dual pricing credit card processing, Clover POS and Dejavoo terminals, payment gateways (accept.blue, an Authorize.net alternative) and QuickBooks-synced invoicing for small businesses. No long-term contracts. Phone: ${site.phoneDisplay}.

Business facts: month-to-month agreements, free equipment placement programs, 24 to 48 hour setup, free processing statement analysis by text or email, local support in San Diego and Los Angeles with nationwide service.

## Start here

- [Free statement analysis](${site.url}/free-statement-analysis): Send a statement, get an itemized fee breakdown and a written quote within 24 hours.
- [Dual pricing explained](${site.url}/dual-pricing): What dual pricing is, how it differs from surcharging and cash discounts, and when it is legal.
- [Clover POS](${site.url}/clover): Clover hardware, software plans, processing rates and how dealer pricing differs from clover.com.
- [Payment gateways](${site.url}/gateways): Authorize.net alternatives, gateway fees, and how to switch without breaking integrations.
- [About Jonathan Kennedy](${site.url}${site.founderUrl}): Founder. 21+ years in payments, founder of Allied Card Processing (sold), TecPay, Juris Payments and Nextdoor Payments; 2,000+ merchants boarded. Author of every article on the site.
- [Service area](${site.url}/locations): Region and city pages for San Diego, Los Angeles, Orange County, Inland Empire, Temecula Valley, Ventura, Santa Barbara, Kern County and the Coachella Valley.
- [Contact](${site.url}/contact): Phone, text and hours.

## Clover POS
${byCat('clover').map(line).join('\n')}

## Payment gateways and Authorize.net
${byCat('gateways').map(line).join('\n')}

## Dual pricing and surcharging
${byCat('dual-pricing').map(line).join('\n')}

## QuickBooks
${byCat('quickbooks').map(line).join('\n')}

## Guides
${[...byCat('guides'), ...byCat('compare')].map(line).join('\n')}

## Industries
${byCat('industries').map(line).join('\n')}

## Optional

- [Become an agent](${site.url}/opportunity): Independent sales agent program with residual income.
- [Sitemap](${site.url}/sitemap-index.xml)
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};

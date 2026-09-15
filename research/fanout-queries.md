# Fan-out query map

When someone asks Google AI Mode, ChatGPT or Perplexity a question, the system breaks it into several sub-queries (Google's own figure for AI Mode is 8 to 12; Seer Interactive measured about 10.7 per prompt in 2026), retrieves pages for each, and cites the pages that answer the most of them well. A page that covers the sub-queries gets cited far more often than a page that only matches the headline keyword.

This file lists, for each page on the site, the head query, the fan-out sub-queries an AI system is likely to generate, and which section of the page answers each one. Use it two ways: when writing or updating a page, check every row is answered; when adding a page, write its fan-out map first.

Sub-queries below were derived from People Also Ask blocks on the live SERPs pulled September 15, 2026, from related-search data, and from the way these questions are actually asked to assistants. Verify against Google's "Query fan-out" behaviour periodically by asking AI Mode the head query and noting which sub-topics its answer covers.

## /clover/pricing

Head query: "how much does Clover POS cost" / "clover pos pricing"

| Fan-out sub-query | Answered by |
|---|---|
| Clover Station Duo price | Hardware table |
| Clover Flex price, Clover Mini price | Hardware table |
| Clover monthly software fee | Software plan table |
| Clover processing rate, transaction fee | Processing section, TL;DR |
| Clover hidden fees, does Clover have hidden fees | FAQ, dealer traps section |
| Clover contract length, early termination fee | Dealer traps, FAQ |
| Clover vs Square cost | FAQ |
| Is Clover worth it for a small business | "What Clover does well" section |
| Clover pricing for restaurants | Worked example |
| Can you buy Clover without a contract | FAQ |

## /clover/reseller-vs-direct

Head query: "should I buy Clover from a reseller or direct"

| Fan-out sub-query | Answered by |
|---|---|
| What is a Clover reseller / dealer | Intro |
| clover.com pricing vs reseller pricing | Direct section, dealer section |
| Clover free equipment program, how does it work | Dealer section, FAQ |
| Clover lease vs buy | Traps table |
| Clover reseller contract, ETF | Traps table |
| Are Clover resellers authorized | FAQ |
| What happens to Clover equipment if I switch | FAQ |
| Questions to ask a POS dealer | Eight questions |

## /clover/dual-pricing

Head query: "can I do dual pricing on Clover"

| Fan-out sub-query | Answered by |
|---|---|
| Clover cash discount program | Intro, FAQ |
| Clover surcharge app vs dual pricing | FAQ, "where it goes wrong" |
| What customers see with dual pricing | Step-by-step table |
| Dual pricing receipt requirements | Configuration section |
| Dual pricing signage requirements | Configuration section |
| Dual pricing and tips | FAQ |
| Dual pricing online ordering | FAQ |
| Is dual pricing legal, Visa rules | Rules section |
| How much does dual pricing save | Cost example |

## /clover/for-restaurants

Head query: "is Clover good for restaurants"

| Fan-out sub-query | Answered by |
|---|---|
| Best Clover device for a restaurant | Setup table |
| Clover pay at table | Setup table |
| Clover kitchen display, KDS | FAQ, setup |
| Clover online ordering, DoorDash integration | FAQ |
| Clover Table Service plan cost | Cost table |
| Clover vs Toast | Comparison table |
| Restaurant POS with no processing fees | Cost table, dual pricing |
| Clover for bars, cafes, food trucks | Setup table |

## /gateways/authorize-net-fees

Head query: "how much does Authorize.net cost"

| Fan-out sub-query | Answered by |
|---|---|
| Authorize.net monthly fee | Pricing table |
| Authorize.net per transaction fee | Pricing table |
| Authorize.net batch fee | FAQ, table |
| Authorize.net all-in-one vs gateway only | Pricing table, "half not on the price page" |
| Authorize.net eCheck fees | Pricing table |
| Authorize.net setup fee, cancellation fee | FAQ |
| Is Authorize.net expensive / worth it | "When it is fine" and "when it is not" |
| Authorize.net vs Stripe pricing | FAQ |
| What is the processor fee behind Authorize.net | "Half not on the price page", worked examples |

## /gateways/authorize-net-alternatives

Head query: "what is a good alternative to Authorize.net"

| Fan-out sub-query | Answered by |
|---|---|
| Authorize.net vs NMI | NMI section, table |
| Authorize.net vs Stripe | Stripe section, table |
| Authorize.net vs Square, PayPal | Table |
| Cheapest payment gateway | FAQ |
| Gateway that works with WooCommerce / Shopify / QuickBooks | FAQ, table |
| Can I move stored cards from Authorize.net | FAQ, migration section |
| Level 3 processing gateway | Table, accept.blue section |
| When to stay on Authorize.net | "Stay" section |
| What is accept.blue | FAQ, section |

## /gateways/switch-from-authorize-net

Head query: "how do I switch from Authorize.net"

| Fan-out sub-query | Answered by |
|---|---|
| Authorize.net data export / CIM migration | Step 4 |
| Does switching gateways break my website | "What changes" table |
| Will customers have to re-enter cards | FAQ |
| How long does it take | Timeline |
| Authorize.net cancellation fee | FAQ |
| Can I run two gateways at once | FAQ |
| What if my software only supports Authorize.net | FAQ, closing section |
| Recurring billing migration | Steps 4 to 7 |

## /gateways/accept-blue

Head query: "what is accept.blue"

| Fan-out sub-query | Answered by |
|---|---|
| accept.blue features | Feature list |
| accept.blue pricing | Pricing approach |
| accept.blue vs Authorize.net | Related page link, FAQ |
| accept.blue vs NMI | FAQ |
| accept.blue integrations | FAQ |
| Can I sign up directly | FAQ |
| accept.blue Level 3 | FAQ |
| accept.blue reviews | (gap: add a "what merchants report" section after 3 months of installs) |

## /quickbooks/credit-card-processing-fees

Head query: "how much does QuickBooks charge for credit card processing"

| Fan-out sub-query | Answered by |
|---|---|
| QuickBooks Payments rates, ACH fee, keyed rate | Rates table |
| QuickBooks Payments monthly fee | FAQ |
| QuickBooks instant deposit fee | Rates table |
| Can I use another processor with QuickBooks | FAQ, option 2 |
| Pass credit card fees to customers in QuickBooks | FAQ, option 3 |
| QuickBooks Payments discount | Option 1 |
| QuickBooks Desktop processing | Rates note |
| Cheaper alternative to QuickBooks Payments | Options 2 and 3 |

## /dual-pricing/is-dual-pricing-legal-in-california

Head query: "is it legal to charge a credit card fee in California"

| Fan-out sub-query | Answered by |
|---|---|
| California credit card surcharge law | Two laws section |
| SB 478 credit card fees | Two laws section, FAQ |
| Cash discount legal in California | FAQ, table |
| Dual pricing vs surcharge California | Table |
| Visa surcharge rules 2026 | Card-brand section |
| Debit card surcharge California | FAQ |
| How to set up compliant dual pricing | Compliant setup section |
| Restaurant credit card fee California | Two laws, setup |

## /dual-pricing/dual-pricing-vs-surcharging-vs-cash-discount

Head query: "difference between surcharge and cash discount"

| Fan-out sub-query | Answered by |
|---|---|
| Surcharge cap 3% | Table, surcharging section |
| Can you surcharge debit cards | FAQ, table |
| States where surcharging is illegal | Table, surcharging section |
| Cash discount program rules | Cash discount section |
| What is dual pricing | Dual pricing section |
| How much to charge for card price | FAQ |
| Do customers mind | FAQ |
| How to tell what my terminal is doing | "How to tell" section |
| Example on a $40 sale | Example table |

## /guides/how-to-read-a-merchant-statement

Head query: "how do I read my credit card processing statement"

| Fan-out sub-query | Answered by |
|---|---|
| What is effective rate | Step 1 |
| Good effective rate | Benchmarks table, FAQ |
| What is interchange | Step 2 |
| Interchange plus vs tiered | Step 2, FAQ |
| PCI non-compliance fee | Fee table, FAQ |
| Hidden fees on merchant statement | Fee table |
| Why did my processing rate go up | Step 4, FAQ |
| Equipment lease on statement | Fee table, step 5 |

## /industries/* pages

Each industry page answers: what POS fits, what it costs today, what dual pricing changes, what integrations matter (online ordering, QuickBooks, scan data), how long the switch takes, and what happens on install day. Add sub-queries as PAA data accumulates in Search Console.

## Homepage

Head queries: "merchant services San Diego", "credit card processing near me", "dual pricing merchant services"

Fan-out: what is dual pricing, is it legal, do I need new equipment, contract terms, what is a statement analysis, where are you located. All in the homepage FAQ.

## Monitoring

Once Search Console has 60 days of data, run the queries it shows for each page against this map and add any sub-query with impressions that the page does not answer. Every quarter, ask Google AI Mode, ChatGPT and Perplexity the head query for each page and record whether nextdoorpayments.com is cited and which competitor is. Keep the log in `research/ai-citation-log.md`.

## Gateway cluster pages (added September 15, 2026)

Each gateway page answers the same fan-out set, which is how a consistent template earns citations across the whole cluster:

| Fan-out sub-query | Section on every gateway page |
|---|---|
| What is [gateway] | Intro and TL;DR |
| Who owns [gateway] | Intro or history table |
| [gateway] features (vault, recurring, virtual terminal, Level 3, ACH) | Feature list or table |
| [gateway] pricing / fees / cost | Pricing section (published, indicative, or "set by reseller" with typical ranges) |
| Can I sign up directly | FAQ |
| [gateway] vs Authorize.net / NMI / Stripe | Comparison table or section |
| Is [gateway] being shut down | Timeline (Payflow, Transaction Express) or FAQ |
| How to switch from [gateway], migrate stored cards | Migration outline |
| Who should stay on [gateway] | Stay or move section |

Feature pages (Level 3, recurring, ACH, 3DS, PCI, virtual terminal, high risk) each answer: what it is, what it costs or saves, who needs it, which gateways support it, how to set it up, what can go wrong.

Platform pages (WooCommerce, Shopify, others) each answer: which gateways connect, does the platform charge extra, bundled vs merchant account cost at three volumes, subscriptions and stored cards, PCI, how to switch.

## Clover cluster pages (added September 15, 2026)

Device pages (Station Duo, Station Solo, Mini, Flex, Kiosk, Compact, Go) each answer: what it is, specs, price direct and through a dealer, what is in the box, what it cannot do, which businesses it fits, which alternative device to consider, dual pricing on that device.

Comparison pages (Duo vs Solo vs Mini, Flex vs Mini, Clover vs Square, Clover vs Toast) each answer: side-by-side table with dated prices, where each option wins, worked cost example, the decision by business size, the risks on each side.

Vertical pages (restaurants, quick service, bars, coffee shops, retail, salons, food trucks) each answer: the device layout, the plan, menu or inventory design, the feature that matters most for that business (tabs, kiosk, modifiers, inventory limits, tips by stylist, offline), integrations, dual pricing math on a realistic volume, cost through a dealer.

Operations pages (setup and training, offline mode, online ordering, gift cards and loyalty, QuickBooks integration, used and reprogramming, reviews) each answer: how it works, how to enable or set it up, what it costs, what can go wrong, what is Clover's fault versus the seller's.

Head-query sub-queries verified against People Also Ask on the live SERPs for clover pos pricing, clover vs square, clover flex, clover mini and clover pos reviews.

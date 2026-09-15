---
title: "Stripe Fees Explained (2026): 2.9% + 30¢, Hidden Costs, and When a Merchant Account Beats It"
h1: "Stripe Fees in 2026: What You Pay, What the Rate Sheet Leaves Out, and the Volume Where It Stops Making Sense"
description: "Stripe's US fees for online, in-person, ACH, international cards, disputes and instant payouts, the costs that surprise growing stores, and where a merchant account wins."
category: gateways
published: 2026-09-15
updated: 2026-09-15
tldr:
  - "Stripe's US pricing as of September 2026: 2.9% + 30¢ for online cards, 2.7% + 5¢ in person, 0.8% capped at $5 for ACH, plus 1.5% on international cards and 1% for currency conversion, $15 per dispute, 1.5% for instant payouts. No monthly fee."
  - "Stripe is an aggregator: every Stripe account sits under Stripe's master merchant account. That is why sign-up takes minutes and also why accounts get reserves, holds and closures without the underwriting conversation a merchant account would have had up front."
  - "Under about $10,000 a month in card-not-present volume Stripe's simplicity is worth its premium. Above that, a standalone gateway with interchange-plus processing typically saves 0.4% to 0.8% of volume, which on $50,000 a month is $200 to $400 every month."
keywords: ["stripe fees", "stripe pricing", "stripe transaction fees", "stripe fees calculator", "stripe fees vs square", "stripe vs authorize.net", "stripe alternative for small business", "is stripe expensive"]
faq:
  - q: "What are Stripe's fees?"
    a: "For US businesses as of September 2026: 2.9% + 30¢ per successful online card transaction, 2.7% + 5¢ in person, 0.8% capped at $5 for ACH direct debit, an additional 1.5% for international cards and 1% for currency conversion, $15 per dispute, and 1.5% (50¢ minimum) for instant payouts. Stripe charges no setup or monthly fees on standard pricing."
  - q: "Does Stripe offer interchange-plus or volume discounts?"
    a: "Stripe offers custom pricing, including interchange-plus, to larger businesses through its sales team, generally at volumes well into six figures a month. Standard accounts pay the flat rate regardless of card type, which means a debit card with 0.05% interchange costs the same 2.9% + 30¢ as a premium rewards card."
  - q: "Stripe fees vs Square: which is cheaper?"
    a: "Online, both are 2.9% + 30¢. In person, Stripe Terminal is 2.7% + 5¢ and Square is 2.6% + 15¢, so Stripe is cheaper above about a $10 ticket and Square below it. Keyed, Square is 3.5% + 15¢ and Stripe is 2.9% + 30¢. Neither offers interchange-plus on standard accounts."
  - q: "Why did Stripe put a reserve on my account?"
    a: "Stripe underwrites after the fact using transaction data. Fast growth, a rise in disputes, a category Stripe considers elevated risk, or large refunds can trigger a rolling reserve or a payout delay, sometimes with little notice. A merchant account underwritten to your business at the start has the risk conversation before you depend on the funds."
  - q: "Can I move stored cards off Stripe?"
    a: "Yes. Stripe supports exporting customer payment methods to another PCI-compliant processor or gateway on request, encrypted to the receiving party. The new gateway imports them into its vault and your integration is remapped to the new tokens. Allow a few weeks and time the cutover around any subscription billing dates."
cta:
  heading: "See the Stripe vs merchant account math on your numbers"
  body: "Text your monthly Stripe volume and transaction count (the Stripe dashboard shows both). You get a side-by-side against a gateway plus interchange-plus, including migration of stored cards if it makes sense."
  smsBody: "Hi, I am on Stripe and want to compare costs."
related: ["gateways/pricing", "gateways/authorize-net-alternatives", "gateways/braintree", "gateways/helcim-review"]
---

Stripe is the default for a reason: an account in ten minutes, excellent developer tools, a checkout that works, and one rate for everything. The rate is the trade. This page lists Stripe's current fees, the costs that show up as a business grows, and the volume at which a standalone gateway on a merchant account starts saving real money.

## Stripe's published US fees, September 2026

| Item | Fee |
|---|---|
| Online card payments (domestic) | 2.9% + 30¢ |
| International cards | + 1.5% |
| Currency conversion | + 1% |
| In-person (Stripe Terminal, Tap to Pay) | 2.7% + 5¢ |
| ACH direct debit | 0.8%, capped at $5 |
| Link and digital wallets | 2.9% + 30¢ (same as cards) |
| Disputes | $15 each |
| Instant payouts | 1.5% of volume, 50¢ minimum |
| Setup, monthly | $0 |

Source: stripe.com/pricing. Stripe's add-on products (Billing, Invoicing, Radar for Fraud Teams, Tax, Identity, Connect) carry their own fees, typically a percentage of volume or a per-object charge, on top of processing.

## What is not on the rate sheet

**Flat rate on every card.** A PIN debit card with interchange around 0.05% + 22¢ costs you 2.9% + 30¢. A premium rewards card with interchange around 2.3% + 10¢ also costs 2.9% + 30¢. The spread between the two is Stripe's margin, and it is largest exactly on the cheap cards. Interchange-plus passes that difference to you.

**Aggregator underwriting.** Stripe puts every account under its own master merchant account and underwrites by watching. Reserves, payout delays and closures happen after the fact, sometimes to businesses that did nothing unusual beyond growing quickly or selling in a category Stripe's models dislike. A merchant account underwritten to your business at the start has fewer surprises.

**Add-ons that turn into percentages.** Stripe Billing for subscriptions and Invoicing each take a cut of volume on top of processing. A subscription business on Stripe Billing can pay 3.6% to 3.9% all-in before disputes.

**International and conversion.** A US business with 20% international customers pays 4.4% + 30¢ on those sales plus 1% if the charge is in another currency. That is a real cost for ecommerce.

**Instant payout habit.** 1.5% to get money a day early adds up to half a point on total volume for businesses that use it constantly.

## Stripe vs a gateway on a merchant account

Same three businesses used on the [gateway pricing page](/gateways/pricing). Standalone: $20 a month gateway, 10¢ per item, interchange plus 0.30% + 10¢, blended card-not-present interchange 1.95% + 10¢.

| | $8,000 / 100 txns | $50,000 / 600 txns | $200,000 / 2,000 txns |
|---|---|---|---|
| Stripe | $262 | $1,630 | $6,400 |
| Gateway + interchange-plus | $226 | $1,325 | $5,120 |
| Monthly difference | $36 | $305 | $1,280 |
| Annual difference | $432 | $3,660 | $15,360 |

At $8,000 a month, keep Stripe. At $50,000, the merchant account pays for a lot of developer time. At $200,000, it is a salary.

The gap grows with debit share (retail, services) and with commercial card share if you add Level 3 data. It shrinks for businesses with tiny tickets, where Stripe's 30¢ per item is comparable to a merchant account's per-item fees.

## Stripe vs Square, Braintree and Helcim

| | Online | In person | ACH | Monthly |
|---|---|---|---|---|
| Stripe | 2.9% + 30¢ | 2.7% + 5¢ | 0.8%, $5 cap | $0 |
| Square | 2.9% + 30¢ | 2.6% + 15¢ | 1% ($1 min) | $0 |
| Braintree | 2.59% + 49¢ | n/a | 0.75%, $5 cap | $0 |
| Helcim | Interchange + 0.50% + 25¢ | Interchange + 0.40% + 8¢ | 0.5% + 25¢, $6 cap | $0 |

Braintree is cheaper than Stripe above about a $60 ticket on the percentage and more expensive below it on the per-item fee. Helcim is interchange-plus with no monthly fee and is the direct option for merchants who want that model without a reseller; its markup is higher than a negotiated merchant account's but its simplicity is real. Details on the [Braintree](/gateways/braintree) and [Helcim](/gateways/helcim-review) pages.

## When to stay on Stripe

- Under about $10,000 a month card-not-present.
- Heavy reliance on Stripe-specific products: Connect for marketplaces, Billing with complex plans, Radar rules you have tuned, Stripe Tax.
- A developer team that has built deeply on the Stripe API and would spend weeks re-integrating.
- International sales where Stripe's local acquiring in multiple countries matters.

## When to leave

- Volume over $15,000 a month with a normal domestic card mix.
- Reserves or holds that have already hurt cash flow.
- B2B volume that would benefit from Level 3.
- A desire to run in-person dual pricing alongside online, which Stripe does not support.
- Wanting one person to call.

Migration: Stripe exports stored payment methods to another PCI-compliant gateway on request, encrypted. Your cart's gateway plugin changes, your integration is remapped to new tokens, subscriptions are recreated in the new gateway's recurring engine. Two to four weeks. The sequence in [switching from Authorize.net](/gateways/switch-from-authorize-net) is the same with the export requested from Stripe.

---
title: "Braintree Fees and Review (2026): 2.59% + 49¢, PayPal and Venmo, and Braintree vs Stripe vs a Merchant Account"
h1: "Braintree in 2026: Fees, Where It Beats Stripe, and Where a Merchant Account Beats Both"
description: "PayPal Braintree's pricing (2.59% + 49¢ cards, 3.49% + 49¢ PayPal, ACH 0.75% capped), its interchange-plus tier, Braintree vs Stripe by ticket size, and who it fits."
category: gateways
published: 2026-09-15
updated: 2026-09-15
tldr:
  - "Braintree is PayPal's developer-oriented gateway and processor. Standard US pricing as of 2026: 2.59% + 49¢ for cards and digital wallets including Venmo, 3.49% + 49¢ for PayPal transactions, ACH 0.75% capped at $5, no monthly fee, and interchange-plus (about interchange + 0.35% + 10¢) for businesses over roughly $80,000 a month."
  - "Against Stripe's 2.9% + 30¢, Braintree is cheaper on tickets above about $60 and more expensive below. Its distinctive value is native PayPal and Venmo acceptance in one integration."
  - "Like Stripe, it is an aggregator with after-the-fact underwriting. Businesses over about $15,000 a month with a domestic card mix usually pay less on a standalone gateway with a negotiated merchant account, unless PayPal and Venmo volume is a large share of sales."
keywords: ["braintree pricing", "braintree fees", "braintree vs stripe", "braintree vs authorize.net", "braintree review", "paypal braintree", "braintree interchange plus"]
faq:
  - q: "What are Braintree's fees?"
    a: "As of 2026 for US merchants on standard pricing: 2.59% + 49¢ per transaction for cards and digital wallets (Apple Pay, Google Pay, Venmo), 3.49% + 49¢ for PayPal transactions, 0.75% capped at $5 for ACH, and no monthly, setup or PCI fees. Chargebacks carry a fee. Businesses processing above about $80,000 a month can get interchange-plus pricing of roughly interchange + 0.35% + 10¢."
  - q: "Is Braintree cheaper than Stripe?"
    a: "It depends on ticket size. Braintree's percentage is lower (2.59% vs 2.9%) and its per-item fee is higher (49¢ vs 30¢). The break-even is a ticket of about $61. Above that Braintree is cheaper per transaction; below it Stripe is. PayPal transactions on Braintree cost more (3.49% + 49¢) than card transactions."
  - q: "Do I need a PayPal business account to use Braintree?"
    a: "Braintree is a PayPal company, and PayPal and Venmo acceptance are integrated. You can process cards on Braintree without routing everything through PayPal, but the products share an underwriting and risk framework, and reserves or holds on one can affect the other."
  - q: "Braintree vs Authorize.net: which should I use?"
    a: "Different models. Braintree bundles gateway and processing at a flat rate with no monthly fee and includes PayPal and Venmo. Authorize.net is a $25-a-month gateway on a merchant account you price separately. At low volume Braintree is simpler; at higher volume Authorize.net (or accept.blue or NMI) with interchange-plus processing is cheaper unless PayPal wallet volume is significant."
  - q: "Can I migrate stored cards from Braintree?"
    a: "Yes. Braintree supports exporting vaulted payment methods to another PCI-compliant provider on request, encrypted to the receiving party. The new gateway imports them and your integration is remapped. PayPal and Venmo wallet agreements do not migrate; those customers re-authorize on the new PayPal integration if you keep one."
cta:
  heading: "Compare Braintree against a merchant account on your volume"
  body: "Text your monthly volume, average ticket and the share of sales that pay with PayPal or Venmo. You get an all-in comparison and a recommendation, including staying on Braintree when that is the right answer."
  smsBody: "Hi, I am on Braintree and want to compare costs."
related: ["gateways/stripe-fees", "gateways/pricing", "gateways/authorize-net-alternatives", "gateways/paypal-payflow"]
---

Braintree is what PayPal built after buying it in 2013 to compete with Stripe for developers: a clean API, a vault, recurring billing, and PayPal and Venmo built in. Its pricing is slightly different from Stripe's in a way that matters depending on your ticket size. This page lays out the fees, the comparisons, and the volume where a merchant account wins.

## Braintree's published pricing, 2026

| Item | Fee |
|---|---|
| Cards and digital wallets (Apple Pay, Google Pay, Venmo) | 2.59% + 49¢ |
| PayPal transactions | 3.49% + 49¢ |
| ACH direct debit | 0.75%, capped at $5 |
| Monthly, setup, PCI | $0 |
| Chargeback | Fee applies (confirm current amount in your agreement) |
| Interchange-plus (high volume, by application) | About interchange + 0.35% + 10¢ |

Figures from PayPal Braintree's published US pricing and 2026 reviews; PayPal adjusts these periodically, so confirm on your agreement.

## Braintree vs Stripe on ticket size

| Ticket | Braintree 2.59% + 49¢ | Stripe 2.9% + 30¢ |
|---|---|---|
| $20 | $1.01 | $0.88 |
| $40 | $1.53 | $1.46 |
| $61 | $2.07 | $2.07 |
| $100 | $3.08 | $3.20 |
| $250 | $6.97 | $7.55 |
| $1,000 | $26.39 | $29.30 |

Break-even is a $61 ticket. Subscriptions at $15 favor Stripe; furniture at $800 favors Braintree. PayPal-branded transactions at 3.49% + 49¢ are more expensive than either card rate, which matters for stores where a large share of customers click the PayPal button.

## Where Braintree is the right choice

- PayPal and Venmo are a meaningful share of checkout, and you want them in the same integration as cards.
- Average ticket is over $60 and volume is under about $15,000 a month.
- A developer team that likes the Braintree SDKs and Drop-in UI.
- Marketplaces using Braintree's split-payment features.

## Where a merchant account beats it

Same aggregator trade-offs as Stripe: flat rate on every card type, after-the-fact underwriting, reserves and holds without warning. Over about $15,000 a month with a normal domestic card mix, a standalone gateway with interchange-plus processing costs less. Braintree's own interchange-plus tier addresses that for large merchants but starts around $80,000 a month.

| | $50,000 / 600 txns, $83 ticket | $200,000 / 2,000 txns |
|---|---|---|
| Braintree standard | $1,589 | $6,160 |
| Gateway + interchange-plus (interchange + 0.30% + 10¢) | $1,325 | $5,120 |
| Difference per month | $264 | $1,040 |

If PayPal and Venmo matter, keep a PayPal button through PayPal's own checkout alongside the merchant account for cards. Most carts support both at once.

## Braintree vs Authorize.net, NMI and accept.blue

Braintree is a bundled processor; the other three are standalone gateways on a merchant account. The bundled option has no monthly fee and one bill. The standalone option has a $10 to $25 gateway fee, negotiated processing, an underwritten merchant account, Level 3 for B2B, and the ability to run dual pricing in store on the same account. The [Authorize.net alternatives comparison](/gateways/authorize-net-alternatives) puts all of them side by side.

## Leaving Braintree

Vaulted cards export to another PCI-compliant gateway, encrypted, on request. Subscriptions are recreated in the new gateway's recurring engine. Your cart's payment plugin changes. PayPal and Venmo wallet agreements stay with PayPal; customers who want to keep paying that way re-authorize through a PayPal checkout you retain. Two to four weeks with stored cards.

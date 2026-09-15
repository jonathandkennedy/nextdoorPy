---
title: "Payment Gateway Pricing and Fees (2026): Authorize.net, NMI, accept.blue, Stripe, Braintree, Helcim Compared"
h1: "Payment Gateway Pricing in 2026: What Each Gateway Charges and What It Adds Up To"
description: "Monthly, per-item and processing fees for Authorize.net, NMI, accept.blue, Fluidpay, Stripe, Braintree, Helcim and Shopify, with all-in cost at three volumes."
category: gateways
published: 2026-09-15
updated: 2026-09-15
tldr:
  - "Gateway fees come in two shapes. Standalone gateways charge a monthly fee and cents per transaction and leave processing to your merchant account provider: Authorize.net is $25 plus 10¢ plus a 10¢ daily batch fee. Bundled providers charge no monthly fee and one flat rate that includes processing: Stripe and WooPayments 2.9% + 30¢, Braintree 2.59% + 49¢, Shopify Payments 2.9% + 30¢ on Basic."
  - "The gateway fee itself is small. On $50,000 a month the difference between gateways is tens of dollars; the difference between flat-rate and interchange-plus processing behind the gateway is hundreds."
  - "Above roughly $10,000 a month card-not-present, a standalone gateway with interchange-plus processing beats every bundled flat rate. Below that, bundled is simpler and close enough."
keywords: ["payment gateway pricing", "payment gateway fees", "payment gateway cost", "cheapest payment gateway", "payment gateway fees comparison", "payment gateway comparison"]
faq:
  - q: "How much does a payment gateway cost per month?"
    a: "Standalone gateways run $0 to $30 a month plus 5¢ to 15¢ per transaction. Authorize.net publishes $25 a month and 10¢. NMI, accept.blue, Fluidpay and USAePay are priced by the reseller and commonly land between $10 and $25. Bundled providers like Stripe, Braintree and WooPayments charge no monthly fee and bake everything into the transaction rate."
  - q: "What is the cheapest payment gateway?"
    a: "For a business under about $5,000 a month, a bundled provider with no monthly fee is cheapest in total. Above about $10,000 a month, a standalone gateway with interchange-plus processing is cheapest, because the processing markup is negotiated rather than fixed at 2.9% + 30¢. The gateway fee is rarely the deciding factor."
  - q: "Are gateway fees and processing fees the same thing?"
    a: "No. Gateway fees pay for the software that captures and routes the transaction. Processing fees, meaning interchange plus the processor's markup, pay for moving the money. Standalone gateways bill them separately, often from two companies. Bundled providers roll both into one rate."
  - q: "Why does my gateway bill have a batch fee?"
    a: "Some gateways, including Authorize.net, charge a small fee (10¢) each time the day's transactions are settled. On a normal month that is $2 to $3. It is a legacy fee from when batching cost real money and it is one reason gateway-only bills are higher than the headline monthly fee."
  - q: "Is interchange-plus available on a gateway?"
    a: "Yes. Interchange-plus is a processing pricing model, not a gateway feature. Any standalone gateway (Authorize.net, NMI, accept.blue, Fluidpay) connected to a merchant account priced on interchange-plus gives you interchange-plus. Helcim and Braintree's high-volume tier offer it bundled."
cta:
  heading: "Get an all-in number for your actual volume"
  body: "Text your monthly card-not-present volume and transaction count. You get gateway fee, per-item fee and interchange-plus markup on one page, next to what you pay now."
  smsBody: "Hi, I want a gateway and processing quote."
related: ["gateways/what-is-a-payment-gateway", "gateways/authorize-net-fees", "gateways/stripe-fees", "gateways/authorize-net-alternatives"]
---

Gateway pricing is easy to compare and mostly irrelevant. Processing pricing is hard to compare and decides the bill. This page lists what each gateway publishes, then does the arithmetic that matters: all-in cost per month at three volumes, standalone versus bundled.

Prices are from each provider's pricing page or documentation as of September 2026 and change without notice.

## Published gateway pricing, September 2026

| Gateway | Monthly | Per transaction | Processing | Sold by |
|---|---|---|---|---|
| Authorize.net Gateway Only | $25 | 10¢ + 10¢ daily batch | Separate merchant account | Direct and resellers |
| Authorize.net All-in-One | $25 | 2.9% + 30¢ | Included | Direct |
| NMI | Reseller-set, commonly $10 to $25 | Reseller-set, commonly 5¢ to 15¢ | Separate | Resellers only |
| USAePay (NMI) | Reseller-set | Reseller-set | Separate | Resellers only |
| accept.blue | Provider-set | Provider-set | Separate or bundled by provider | ISOs only |
| Fluidpay | Partner-set | Partner-set | Separate | Partners only |
| PayPal Payflow Pro | Historically $25 | Historically 10¢ | Separate | Direct; PayPal has announced deprecation |
| Stripe | $0 | 2.9% + 30¢ online, 2.7% + 5¢ in person, ACH 0.8% capped at $5 | Included | Direct |
| Braintree | $0 | 2.59% + 49¢ cards and wallets; 3.49% + 49¢ PayPal; ACH 0.75% capped at $5 | Included; interchange-plus above about $80k a month | Direct |
| Helcim | $0 | Interchange + 0.50% + 25¢ online, + 0.40% + 8¢ in person, stepping down with volume; ACH 0.5% + 25¢ capped at $6 | Included | Direct |
| WooPayments | $0 | 2.9% + 30¢, +1.5% international | Included | Via WooCommerce |
| Shopify Payments | Plan fee $39 to $399 | 2.9% + 30¢ Basic, 2.7% Grow, 2.5% Advanced online | Included | Via Shopify |
| Shopify third-party gateway | Plan fee | Gateway's rate plus Shopify's 2% (Basic), 1% (Grow), 0.6% (Advanced), 0.2% (Plus) | Gateway's processor | Via Shopify |
| QuickBooks Payments | $0 | 2.99% invoiced, 2.5% in person, 3.5% keyed, ACH 1% | Included | Via QuickBooks |

Two things stand out. Bundled providers cluster at 2.6% to 3% plus a per-item fee and charge nothing monthly. Standalone gateways charge $10 to $25 and cents per item, and the processing behind them is whatever you negotiate.

## The arithmetic

Three online businesses. Standalone gateway priced at $20 a month and 10¢ per transaction with interchange-plus processing at 0.30% + 10¢ over interchange. Card-not-present interchange assumed at 1.95% + 10¢ blended, which is typical for a consumer card mix; commercial-heavy B2B runs higher without Level 3.

| | $8,000 a month, 100 transactions | $50,000 a month, 600 transactions | $200,000 a month, 2,000 transactions |
|---|---|---|---|
| Stripe / WooPayments 2.9% + 30¢ | $262 | $1,630 | $6,400 |
| Braintree 2.59% + 49¢ | $256 | $1,589 | $6,160 |
| Authorize.net All-in-One 2.9% + 30¢ + $25 | $287 | $1,655 | $6,425 |
| Helcim online (interchange + 0.50% + 25¢) | $221 | $1,375 | $5,300 (lower tier applies) |
| Standalone gateway + interchange-plus | $20 + $10 + $196 = $226 | $20 + $60 + $1,245 = $1,325 | $20 + $200 + $4,900 = $5,120 |

At $8,000 a month everything is within $60 and simplicity wins. At $50,000 the standalone setup saves about $300 a month over Stripe. At $200,000 it saves about $1,280 a month, or $15,000 a year. Add Level 3 data for a B2B mix and the standalone gap widens by another 0.5% to 1% of commercial card volume.

## What is not in the table

- **Chargeback and dispute fees.** Stripe and WooPayments $15. Standalone processors $15 to $35. Authorize.net eCheck chargeback $25.
- **International cards.** Stripe, WooPayments, Shopify Payments add 1.5% plus 1% for conversion. Standalone processors pass through the higher international interchange, typically 1% to 1.5% more.
- **Instant payouts.** Stripe 1.5%, QuickBooks 1.75%. Standalone merchant accounts fund next business day at no charge on most programs.
- **Account Updater.** Authorize.net 25¢ per update. Others bundle or charge similarly. Worth it for subscription businesses.
- **Shopify's third-party gateway fee.** The one that surprises people. Using any gateway other than Shopify Payments adds 2% on Basic, on top of the gateway's own rate. Details on the [Shopify gateway page](/gateways/shopify).
- **Reserves and holds.** Aggregators hold funds on new or fast-growing accounts more often than an underwritten merchant account does. That cost does not show on a rate sheet.

## When to switch pricing models

| Situation | Better model |
|---|---|
| Under $5,000 a month, new business, no time | Bundled (Stripe, Square, WooPayments) |
| $5,000 to $15,000 a month | Either; run the numbers on ticket size |
| Over $15,000 a month card-not-present | Standalone gateway with interchange-plus |
| B2B with commercial or purchasing cards | Standalone with Level 3 data |
| Recurring billing with a large subscriber base | Standalone with vault and Account Updater |
| Any in-person channel alongside online | Standalone, so both run on one merchant account and dual pricing is available in store |

We supply accept.blue, NMI or Fluidpay with interchange-plus processing on one bill, and we re-price the processing behind an Authorize.net account you want to keep. Either way the quote shows gateway fee, per-item and markup on one page.

---
title: "Elavon Converge Gateway: Features, Quote-Based Pricing, and Whether to Stay on It"
h1: "Elavon Converge (VirtualMerchant): What the U.S. Bank Gateway Does, What It Costs, and Your Options"
description: "Converge is Elavon's omnichannel gateway, also known as ConvergePay and VirtualMerchant: virtual terminal, card on file, recurring, hosted payments."
category: gateways
published: 2026-09-15
updated: 2026-09-15
tldr:
  - "Converge is Elavon's payment gateway. Elavon is a subsidiary of U.S. Bank, and Converge is the platform behind many bank-referred merchant accounts. Same product under the names ConvergePay, Elavon Converge and the older VirtualMerchant."
  - "Features: virtual terminal for card-present and MOTO, hosted payment pages, card on file for repeat and recurring billing, ecommerce and mobile, electronic checks, PayPal and digital wallets, and support for all major card brands. Elavon announced a new payment gateway in October 2024; Converge remains in service."
  - "Elavon does not publish rates; pricing is quoted by business type, volume and card mix. Bank-referred accounts are often on tiered or flat pricing set years ago. Compare the all-in effective rate, and know that leaving is a gateway-plus-processor change because Converge only runs on Elavon."
keywords: ["elavon converge", "converge gateway", "convergepay", "elavon virtual merchant", "elavon converge pricing", "elavon converge review", "elavon gateway"]
faq:
  - q: "What is Elavon Converge?"
    a: "Elavon's omnichannel payment gateway, marketed as ConvergePay and previously called VirtualMerchant. It provides a virtual terminal for in-person and mail or phone orders, hosted online payment pages, card-on-file storage for repeat and recurring payments, mobile acceptance, electronic checks, PayPal and digital wallet support. Elavon is owned by U.S. Bank."
  - q: "How much does Elavon Converge cost?"
    a: "Elavon does not publish standard rates. Pricing is quote-based and depends on business type, volume and card mix. Converge typically carries a monthly gateway fee plus per-transaction fees on top of Elavon's processing, all set in the merchant agreement. Get the full schedule and compute the effective rate."
  - q: "Can I use Converge with a different processor?"
    a: "No. Converge is Elavon's own gateway and runs on Elavon processing. Leaving Elavon means changing both gateway and processor, which is a larger migration than swapping gateways on an independent platform like NMI or accept.blue."
  - q: "Is Elavon replacing Converge?"
    a: "Elavon announced a new payment gateway in October 2024 aimed at streamlining in-store and online payments. Converge continues to operate and be sold. If you are on Converge, ask Elavon about migration plans and timelines so a forced change does not surprise you."
  - q: "How do I move stored cards off Converge?"
    a: "Elavon can export card-on-file data to another PCI DSS compliant processor or gateway on request from the account owner, encrypted to the receiving party. The receiving gateway imports it into its vault and your integration is remapped to new tokens. Allow several weeks and coordinate recurring billing dates."
cta:
  heading: "On Converge through your bank? See what you are actually paying."
  body: "Text a photo of your Elavon statement. You get the effective rate, every fee labeled, and a quote for an independent gateway on interchange-plus, with the migration plan if it is worth it."
  smsBody: "Hi, I am on Elavon Converge and want to compare."
related: ["gateways/what-is-a-payment-gateway", "gateways/pricing", "gateways/authorize-net-alternatives", "guides/how-to-read-a-merchant-statement"]
---

If your business banks with U.S. Bank or was referred to merchant services by a bank, there is a good chance you are on Elavon with the Converge gateway. It is a competent, widely used platform. It is also one where merchants tend to have been priced once, at account opening, and never again. This page describes Converge, what to check, and what leaving involves.

## What Converge is

Elavon is a large acquirer owned by U.S. Bank. Converge is its gateway, sold as ConvergePay and formerly VirtualMerchant. From Elavon's materials and 2026 reviews:

- Virtual terminal for card-present (with a connected reader) and MOTO transactions.
- Hosted online payment pages and ecommerce integrations.
- Card on file: stored customer profiles for repeat, recurring and subscription billing.
- Mobile acceptance.
- Electronic checks, PayPal and digital wallets, all major card brands including JCB and Diners.
- Reporting and user management for multi-user businesses.

In October 2024 Elavon announced a new payment gateway to unify in-store and online acceptance. Converge remains in service and is still the gateway most Elavon merchants use.

## Pricing

Quote-based. Elavon publishes no standard rate. Converge accounts typically show:

| Line | Notes |
|---|---|
| Gateway monthly fee | Converge access; varies by agreement |
| Per-transaction gateway fee | Cents per item |
| Processing | Elavon's pricing: interchange-plus, tiered or flat depending on how the account was sold |
| PCI, statement, annual fees | Common on bank-referred accounts |
| Term | Often multi-year with early termination fee; check the agreement |

Bank-referred accounts from years ago are frequently on tiered pricing. The tell is qualified, mid-qualified and non-qualified lines on the statement. How to read them is in the [statement guide](/guides/how-to-read-a-merchant-statement).

## Converge is tied to Elavon

Independent gateways (NMI, accept.blue, Fluidpay, Authorize.net) connect to many processors, so you can change processing pricing without touching your integration. Converge runs only on Elavon. Two consequences:

- Re-pricing means negotiating with Elavon, which is worth trying first if the integration is deep.
- Leaving means a gateway and processor migration together: new merchant account, new gateway, plugin or virtual terminal change, card-on-file export and import.

That is more work than a gateway swap, but it is routine. Allow three to five weeks with stored cards.

## When to stay

The integration into your practice management, property management or vertical software is Converge-specific and would be a project to change. The processing has been re-priced recently to a fair interchange-plus rate. You value the bank relationship and the single point of contact. In those cases, ask Elavon for a review and stay.

## When to move

The statement shows tiered pricing or an effective rate over 2.5% on a normal mix. The agreement is auto-renewing with a termination fee you are about to pass. You want dual pricing at the counter (available through independent processors on Clover and Dejavoo) with online processing on the same account. Or you want a person to call rather than a bank queue.

## Migration outline

1. Statement analysis: effective rate, fee schedule, contract end date and termination fee.
2. New merchant account on interchange-plus and an independent gateway with the integration your software supports.
3. Card-on-file export request to Elavon, encrypted to the new gateway.
4. Import, token remap, recurring schedules recreated after the last Elavon billing run.
5. Live tests, cutover, close Elavon after two clean cycles.

The gateway comparison for the receiving side is on the [Authorize.net alternatives page](/gateways/authorize-net-alternatives), which covers NMI, accept.blue and Fluidpay in the same terms.

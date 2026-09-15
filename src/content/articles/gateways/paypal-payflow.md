---
title: "PayPal Payflow Pro and Payflow Link: Deprecation, Pricing, and Where to Move"
h1: "PayPal Payflow Is Being Retired: What Payflow Pro and Payflow Link Merchants Should Do Now"
description: "PayPal is retiring Payflow and platforms are dropping it in 2026. What Payflow Pro and Link cost, and how to move without losing your cart or recurring billing."
category: gateways
published: 2026-09-15
updated: 2026-09-15
tldr:
  - "Payflow is PayPal's legacy standalone gateway, inherited from VeriSign in 2005. Payflow Pro was the API and virtual terminal product, historically $25 a month plus 10¢ per transaction on top of a separate merchant account; Payflow Link was the hosted-page version."
  - "PayPal has announced deprecation of Payflow Pro and related legacy gateway products, and several platforms (NationBuilder, Zoho, Gravity Forms and others) have stated they are ending Payflow support in 2026. PayPal has not published a final shutdown date as of September 2026. Do not build on it, and plan a migration."
  - "The natural moves are a modern standalone gateway (accept.blue, NMI or Fluidpay) on the merchant account you already have, which preserves negotiated processing, or PayPal's current bundled products if you want to stay inside PayPal. Stored cards can be exported and migrated."
keywords: ["payflow pro", "paypal payflow", "paypal payflow pro", "payflow link", "payflow pro pricing", "payflow deprecation", "payflow alternative"]
faq:
  - q: "Is PayPal shutting down Payflow?"
    a: "PayPal has announced deprecation of Payflow Pro and PayPal Payments Pro, and third-party platforms have begun removing Payflow integrations, citing 2026 as the cutoff for their support. As of September 2026 PayPal had not published a firm date for ending transaction processing on existing Payflow accounts. Treat it as a gateway with no future and migrate on your own schedule rather than PayPal's."
  - q: "What did Payflow Pro cost?"
    a: "PayPal's long-standing published pricing for Payflow Pro was $25 a month plus 10¢ per transaction, with processing billed separately by the merchant's own acquirer. Payflow Link had a lower monthly fee for its hosted page. Confirm your current fees on your Payflow invoice, since PayPal has changed plan structures over time."
  - q: "What is the difference between Payflow Pro and Payflow Link?"
    a: "Payflow Pro is the full gateway with an API, virtual terminal, recurring billing and a customer vault, for merchants with their own merchant account. Payflow Link is the hosted checkout page version, simpler to integrate with smaller PCI scope. Both sit on top of a merchant account from your acquirer, not PayPal."
  - q: "Can I keep my merchant account and just change the gateway?"
    a: "Yes, and that is usually the right move. Payflow was a gateway on your own merchant account. accept.blue, NMI and Fluidpay all connect to major acquirers, so your processing pricing and history stay while the gateway changes. We check that your acquirer is supported before anything else."
  - q: "Will my stored cards and recurring profiles move?"
    a: "Payflow's recurring billing and stored profiles can be exported to another PCI-compliant gateway through PayPal's data migration process. Request it early; gateway migrations run on the old provider's schedule. The receiving gateway imports the file and your software is remapped to new tokens."
cta:
  heading: "Off Payflow before your platform drops it"
  body: "Text your cart or software name and whether you bill recurring. You get a migration plan with the gateway that fits your platform and your existing merchant account, and the all-in cost after the move."
  smsBody: "Hi, I am on PayPal Payflow and need to move."
related: ["gateways/authorize-net-alternatives", "gateways/switch-from-authorize-net", "gateways/accept-blue", "gateways/nmi"]
---

Payflow is the gateway many businesses set up in 2008 with a web developer and never touched again. It worked, quietly, on top of a merchant account from a bank. Now PayPal is retiring it and the platforms that connect to it are pulling their integrations. This page is for the merchant who just got that email.

## What Payflow was

PayPal acquired the Payflow gateway from VeriSign in 2005. It came in two forms:

- **Payflow Pro.** API-based gateway with a virtual terminal, recurring billing, a stored-card vault and fraud filters. Historically $25 a month plus 10¢ a transaction. Used with the merchant's own acquiring account from a bank or processor.
- **Payflow Link.** Hosted checkout page for merchants who wanted the smallest integration and PCI footprint. Lower monthly fee.

The defining feature was that Payflow was a gateway only: your processing was with your own acquirer, priced by them. That is also why moving off it is straightforward.

## What is happening

PayPal has announced the deprecation of Payflow Pro and PayPal Payments Pro as part of consolidating on its current platform. Third-party software has started acting on it: NationBuilder listed Payflow among processors no longer supported beginning in 2026; Zoho and Gravity Forms have posted similar notices. As of September 2026 PayPal has not published a final date for ending transactions on existing accounts, and processing continues for now.

The practical read: no new features, shrinking integration support, and a shutdown date that will arrive with less notice than you want. Migrate on your timeline.

## Your options

| Option | Keeps your merchant account? | Keeps your integration? | Notes |
|---|---|---|---|
| accept.blue on your existing acquirer | Yes, if the acquirer is supported | Plugin or API change | Modern interface, invoicing, Level 3, vault, recurring. Our default for Payflow migrations. |
| NMI on your existing acquirer | Yes, 150+ processor connections | Plugin or API change | Broadest integration catalog; strong for multi-MID. |
| Fluidpay on your existing acquirer | Yes, via a partner | Plugin or API change; Authorize.net AIM emulation for legacy carts | Partner-only. |
| Authorize.net | Yes | Plugin or API change | Direct sign-up, published $25 + 10¢, oldest plugin catalog. |
| PayPal's current bundled products | No, PayPal becomes the processor | PayPal's checkout | Simplest if you want everything inside PayPal; flat-rate pricing, aggregator underwriting. |

For a merchant with negotiated interchange-plus processing on a bank merchant account, the first three preserve it. Moving to a bundled product resets you to a flat rate.

## Migration sequence

1. Confirm your acquirer and your current processing pricing from the merchant statement.
2. Check your cart or software for a native connection to accept.blue, NMI or Fluidpay. Most mainstream carts have all three; custom code may use an Authorize.net-compatible endpoint.
3. Board the new gateway on your existing merchant account (or a new one if the pricing is bad anyway).
4. Request the Payflow stored-profile and recurring export from PayPal; supply the receiving gateway's encryption key.
5. Import the vault, remap customer IDs, recreate recurring schedules timed after the last Payflow billing run.
6. Live tests, cutover, then close Payflow.

Two to four weeks with stored cards. About a week without. The step-by-step in [switching from Authorize.net](/gateways/switch-from-authorize-net) applies to Payflow with the export request pointed at PayPal instead.

## While you are moving

A migration is the one time re-pricing the processing costs nothing extra, because the account is being touched anyway. Send the statement with the migration request and we quote interchange-plus alongside the gateway. If your current acquirer's pricing is good, we say so and leave it.

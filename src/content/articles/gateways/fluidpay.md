---
title: "Fluidpay Gateway: Features, Partner-Only Pricing, Authorize.net Emulator, and Who It Fits"
h1: "Fluidpay: A Partner-Only Gateway With a Vault, Cash Discount Program and Authorize.net Emulation"
description: "What Fluidpay does, its partner-only sales model, the Authorize.net AIM emulator for legacy carts, Level 3, ACH, recurring and fraud tools, and how it compares to NMI."
category: gateways
published: 2026-09-15
updated: 2026-09-15
tldr:
  - "Fluidpay is a cloud gateway built for ISOs, agents and software platforms. The company has never boarded a merchant directly and says it never will, so every Fluidpay account comes through a partner who sets pricing and provides support."
  - "Features: virtual terminal for cards and ACH, tokenized vault with account updater, recurring billing with retries and dunning, hosted fields that keep merchants on SAQ A, Level 3 for B2B, fraud rules and scoring, batch uploads, a patented cash discount program across channels, and an Authorize.net AIM emulator so legacy carts can post to Fluidpay by changing one URL."
  - "It fits merchants leaving Authorize.net whose cart only speaks AIM, merchants who want cash discount or dual pricing online and in store on one platform, and B2B sellers. Pricing is partner-set; get gateway, per-item and processing markup on one page."
keywords: ["fluidpay", "fluidpay gateway", "fluid pay", "fluidpay pricing", "fluidpay authorize.net emulator", "fluidpay vs nmi", "fluidpay reviews"]
faq:
  - q: "Can I sign up for Fluidpay directly?"
    a: "No. Fluidpay states it has boarded zero merchants directly since 2017 and sells only through ISOs, agents, ISVs and white-label resellers. Your partner boards the account, sets pricing and handles support."
  - q: "What is the Fluidpay Authorize.net emulator?"
    a: "An endpoint that accepts transactions formatted for Authorize.net's legacy AIM 3.0/3.1 integration. If your shopping cart or software supports Authorize.net AIM, you change the transaction post URL to Fluidpay's emulator address and keep the rest of the integration. It does not emulate Authorize.net's SIM, XML, CIM, ARB or DPM methods, so carts using those need a native integration instead."
  - q: "How much does Fluidpay cost?"
    a: "Fluidpay publishes no merchant pricing. Partners commonly set the gateway between $10 and $25 a month plus a per-item fee, with processing on a separate merchant account. As with NMI and accept.blue, compare the all-in effective rate rather than the gateway line."
  - q: "Fluidpay vs NMI: which is better?"
    a: "Similar core feature sets: vault, recurring, virtual terminal, Level 3, ACH, fraud tools, broad cart support. NMI has a longer integration history and multi-processor breadth. Fluidpay has the built-in cash discount program across channels, the AIM emulator, and a newer codebase. We choose based on the merchant's platform and whether cash discount or dual pricing online is a requirement."
  - q: "Does Fluidpay support cash discount and dual pricing?"
    a: "Yes. Fluidpay markets a patented cash discount program that runs across its channels, including online and virtual terminal. The compliance points for online dual pricing are the same as in store: both prices visible before the customer chooses, the card price charged as the price, and no fee line on the receipt."
cta:
  heading: "Get a Fluidpay quote through a partner who answers the phone"
  body: "Text your platform and monthly volume, and whether you want cash discount online. You get gateway fee, per-item and interchange-plus markup on one page, plus the emulator or native integration plan for your cart."
  smsBody: "Hi, I want a quote for the Fluidpay gateway."
related: ["gateways/nmi", "gateways/accept-blue", "gateways/switch-from-authorize-net", "dual-pricing/dual-pricing-vs-surcharging-vs-cash-discount"]
---

Fluidpay is the gateway you meet when a processor says "we have our own gateway." It is not their own; it is Fluidpay with their logo, and that is by design. This page explains what it is, what it does that the others do not, and when we place it.

## The sales model

Fluidpay's own words: it has never boarded a merchant directly and that is not changing. It builds the gateway; ISOs, agents, software vendors and white-label resellers sell it. For a merchant that means the partner is the relationship: pricing, boarding, support and the quality of the integration advice all come from them. Choose the partner as carefully as the gateway.

## What it does

From Fluidpay's published feature list, September 2026:

- **Virtual terminal** for cards and ACH from a browser.
- **Customer vault** with tokenization for cards and ACH, including an account updater to refresh reissued cards.
- **Recurring billing** with plans, retry schedules and dunning.
- **Tokenizer / hosted fields** that keep the merchant's checkout on SAQ A.
- **WatchDog fraud detection** with partner-specific rules and machine-learning scoring.
- **Level 3 processing** for B2B and B2G interchange optimization.
- **Batch processing** from CSV uploads.
- **Cash discount program**, patented, across all channels.
- **Unified card and ACH** processing.
- **API, SDKs and shopping cart integrations**, multi-region cloud infrastructure.
- **Authorize.net AIM emulator** for legacy integrations.

## The emulator, explained

Many older carts and custom integrations talk to Authorize.net through its legacy AIM method: a form post to a URL. Fluidpay exposes an endpoint that accepts the same format. Migration for those integrations is a URL change and new credentials, with no code rewrite.

Limits: the emulator covers AIM only. Integrations built on Authorize.net's SIM hosted form, its XML API, CIM stored profiles, ARB recurring, or DPM need a native Fluidpay integration or plugin instead. Most modern carts have one. Custom code written against CIM or ARB is the case to check before promising anyone a one-hour migration.

## Cash discount and dual pricing online

Fluidpay is the gateway we reach for when a merchant wants dual pricing in store and online on one platform. The rules do not change with the channel: display both prices before the customer chooses, charge the card price as the price, keep fee lines off the receipt. Fluidpay's program handles the display and receipt mechanics; the merchant handles menu, cart and signage disclosure. The three models are compared in [dual pricing vs surcharging vs cash discount](/dual-pricing/dual-pricing-vs-surcharging-vs-cash-discount).

## Fluidpay vs NMI vs accept.blue

| | Fluidpay | NMI | accept.blue |
|---|---|---|---|
| Sold by | Partners only | Partners only | ISOs only |
| Vault, recurring, virtual terminal | Yes | Yes | Yes |
| Level 2 and 3 | Yes | Yes | Enhanced |
| ACH | Yes, unified | Yes | Yes |
| Fraud tools | WatchDog rules and ML scoring | Fraud suite | Scoring and rules |
| 3D Secure | Via partner configuration | Yes | Yes |
| Cash discount / dual pricing built in | Yes, all channels | Via partner programs | Via partner programs |
| Authorize.net emulator | AIM | Partner-dependent | Not published |
| Invoicing suite | Basic | Basic | Yes |
| Integration catalog | Growing | Largest | Broad |
| Interface | Modern | Functional, partner-branded | Modern |

## Pricing

Partner-set. Ranges we see are the same as NMI and accept.blue: $10 to $25 monthly, 5¢ to 15¢ per item, processing on a separate merchant account. The comparison method, with worked examples at three volumes, is on the [gateway pricing page](/gateways/pricing).

## When we place Fluidpay

An Authorize.net AIM integration with no budget to rebuild. Dual pricing or cash discount wanted online and in store on one platform. B2B sellers who want Level 3 with a modern vault and recurring. High-risk placements through partner acquirers. Month to month, one bill, interchange-plus.

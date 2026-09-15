---
title: "NMI Payment Gateway: Features, Pricing Model, Customer Vault, and NMI vs Authorize.net"
h1: "NMI Gateway: What It Does, How It Is Priced, and When to Choose It Over Authorize.net"
description: "NMI is a partner-sold gateway with a Customer Vault, recurring billing and 150+ processor connections. Reseller pricing, NMI vs Authorize.net, and how to migrate."
category: gateways
published: 2026-09-15
updated: 2026-09-15
tldr:
  - "NMI is one of the largest payment gateways in the US, sold only through ISOs, agents and software partners (NMI reports 6,000 channel partners and 150+ processor connections). It also owns USAePay, acquired in 2021. Merchants cannot sign up with NMI directly."
  - "Because it is reseller-priced, the gateway fee varies: commonly $10 to $25 a month plus 5¢ to 15¢ per transaction, with processing on a separate merchant account. The all-in cost depends on the processing markup far more than the gateway fee."
  - "Choose NMI when your cart, billing or practice software has a native NMI connection, when you need multiple merchant IDs under one login, or when you are moving off Authorize.net and want the broadest plugin catalog. Choose accept.blue for a more modern interface and invoicing. Either way, price the processing on interchange-plus."
keywords: ["nmi gateway", "nmi payment gateway", "nmi gateway pricing", "nmi gateway fees", "nmi vs authorize.net", "nmi vs stripe", "nmi customer vault", "nmi payment"]
faq:
  - q: "Can I sign up for NMI directly?"
    a: "No. NMI sells through channel partners: ISOs, agents, software vendors and banks. The partner boards your merchant account, sets the gateway fee, and provides support. That makes the partner's terms and responsiveness the real decision."
  - q: "How much does the NMI gateway cost?"
    a: "NMI does not publish merchant pricing. Through resellers, the gateway commonly runs $10 to $25 a month plus 5¢ to 15¢ per transaction, sometimes with a batch fee. Processing is separate and priced by the merchant account provider. Ask for the gateway fee, per-item fee and processing markup on one page."
  - q: "Is NMI better than Authorize.net?"
    a: "They overlap heavily: both have a vault, recurring billing, virtual terminal, Level 2 and 3, fraud tools and broad integrations. NMI's advantages are multi-processor flexibility, multi-MID management, and reseller pricing that can beat Authorize.net's $25 and 10¢. Authorize.net's advantages are direct sign-up, published pricing and the longest plugin history. For most switching merchants the processing behind the gateway decides the total."
  - q: "What is the NMI Customer Vault?"
    a: "NMI's tokenized storage for cards and bank accounts. Cards are stored once and charged by token for repeat and recurring billing. Vault data can be imported from another gateway's encrypted export and exported to one if you leave."
  - q: "Does NMI work with WooCommerce, Shopify and QuickBooks?"
    a: "NMI has plugins and connectors for WooCommerce, Magento, BigCommerce, OpenCart and many other carts, and is integrated into a large number of billing, practice management and vertical software products. Shopify requires a third-party gateway app and adds its own transaction fee. QuickBooks integration goes through partner tools rather than a native connector."
cta:
  heading: "Get NMI with processing priced on one page"
  body: "Text your platform and monthly volume. You get the NMI gateway fee, per-item fee and interchange-plus markup together, plus a migration plan if you are leaving Authorize.net or another gateway."
  smsBody: "Hi, I want a quote for the NMI gateway."
related: ["gateways/usaepay", "gateways/authorize-net-alternatives", "gateways/accept-blue", "gateways/switch-from-authorize-net"]
---

NMI is the gateway behind a large share of the independent merchant services industry. If you have ever been sold a "virtual terminal" or an "online gateway" by a local processor, there is a good chance it was NMI with the processor's logo on it. This page describes what it is, how it is priced, how it compares, and when we place it.

## What NMI is

Network Merchants Inc., founded in 2001, describes itself as an embedded payments enablement platform. In practice for a merchant it is a gateway: virtual terminal, hosted payment pages, a Customer Vault for tokenized cards and bank accounts, recurring billing, Level 2 and 3 data, ACH, a fraud rules suite, 3D Secure, mobile and in-person device support, and an API with a large catalog of shopping cart and software integrations.

Two facts shape everything else. NMI sells only through partners (it reports 6,000 channel partners and 150+ processor connections). And NMI acquired USAePay in 2021, so USAePay merchants are now on NMI-owned infrastructure with a separate login and brand. USAePay has [its own page](/gateways/usaepay).

## What it costs

NMI publishes no merchant pricing. Your reseller sets it. Common ranges we see on statements:

| Line | Typical reseller pricing |
|---|---|
| Gateway monthly | $10 to $25 |
| Per transaction | 5¢ to 15¢ |
| Batch fee | $0 to 25¢ per day |
| Vault or recurring add-on | Often included; sometimes $5 to $10 a month |
| Processing | Separate merchant account, whatever the reseller negotiated |

The gateway line is small. A reseller charging $10 for the gateway and 3.2% flat for processing is more expensive than one charging $25 and interchange plus 0.3%. Compare the all-in number using the method on the [gateway pricing page](/gateways/pricing).

## NMI vs Authorize.net

| | NMI | Authorize.net |
|---|---|---|
| Sign-up | Through a partner only | Direct or through resellers |
| Published pricing | No | Yes: $25 + 10¢ + 10¢ batch (gateway only) |
| Vault and recurring | Customer Vault, recurring plans | CIM, ARB |
| Level 2 and 3 | Yes | Yes |
| Processor flexibility | 150+ processor connections; can change processors without changing gateway | Tied to the processor on the account; changing means re-boarding |
| Multiple merchant IDs | One login, many MIDs | Separate accounts |
| Integrations | Very broad, especially vertical software | Broadest cart history |
| Interface | Functional, dated in places; partner-branded | Functional, dated |
| Support | Your reseller first | Authorize.net direct |

The processor flexibility is NMI's underrated advantage: if your reseller's processing pricing goes bad, a good reseller can move the merchant account to another processor behind the same gateway without touching your integration or vault.

## NMI vs accept.blue

Both partner-sold, both with vault, recurring, Level 2 and 3, ACH, fraud tools and 3DS. NMI has been integrated into more software over more years. accept.blue has a more modern merchant interface, an invoicing suite, and features like Amex smart routing. We choose based on which one your platform connects to natively. When both do, we lean accept.blue for invoicing-heavy businesses and NMI for merchants with several integrations or MIDs. The [accept.blue page](/gateways/accept-blue) has the detail.

## NMI vs Stripe

Different products. Stripe bundles gateway and processing at 2.9% + 30¢ with no monthly fee and direct sign-up. NMI is a gateway on a merchant account you negotiate. Under about $10,000 a month Stripe's simplicity wins. Above it, NMI with interchange-plus processing costs less and gives you an underwritten merchant account with fewer surprise holds. The arithmetic is in [Stripe fees explained](/gateways/stripe-fees).

## Moving to NMI

Cart plugin or API keys swapped on your platform, vault data imported from your old gateway's encrypted export, recurring schedules recreated, live tests, cutover. Two to four weeks with stored cards, about a week without. The Authorize.net-specific sequence, including the export request, is in [switching from Authorize.net](/gateways/switch-from-authorize-net).

## When we place NMI

Your software's native gateway connection is NMI. You run several merchant IDs or locations and want one login. You want the option to change processors later without re-integrating. You are on USAePay and want to consolidate. In all cases: month to month, gateway and processing on one bill, interchange-plus, and a cell number for support.

---
title: "Best Payment Gateway for WooCommerce (2026): WooPayments vs Stripe vs a Merchant Account Gateway"
h1: "WooCommerce Payment Gateways: WooPayments, Stripe, and When a Merchant Account Gateway Costs Less"
description: "WooPayments' 2.9% + 30¢ against Stripe, Authorize.net, NMI, accept.blue and Fluidpay on WooCommerce: fees at three volumes, subscriptions, PCI scope, and how to switch."
category: gateways
published: 2026-09-15
updated: 2026-09-15
tldr:
  - "WooPayments (built on Stripe) charges 2.9% + 30¢ per US card transaction plus 1.5% for international cards and 1% for currency conversion, with no monthly fee and a $15 dispute fee. It is the default and it is fine under about $10,000 a month."
  - "WooCommerce supports every major gateway through plugins: Stripe, PayPal, Square, Braintree, Authorize.net, NMI, accept.blue, Fluidpay and others. Above roughly $15,000 a month a merchant account gateway on interchange-plus saves 0.4% to 0.8% of volume."
  - "Switching gateways in WooCommerce is a plugin install and a settings change. Stored cards for WooCommerce Subscriptions migrate through the old gateway's encrypted export. Keep the old gateway active until the new one has processed live orders."
keywords: ["payment gateway for woocommerce", "woocommerce payment gateway", "best payment gateway for woocommerce", "woocommerce payment gateway plugin", "woopayments fees", "woopayments vs stripe", "woocommerce authorize.net", "woocommerce nmi"]
faq:
  - q: "What is the best payment gateway for WooCommerce?"
    a: "For a new or small store, WooPayments or Stripe: no monthly fee, quick setup, wallets included. For a store over about $15,000 a month, a merchant account gateway (accept.blue, NMI, Authorize.net or Fluidpay) on interchange-plus, because the processing markup is negotiated instead of fixed at 2.9% + 30¢. Stores with heavy PayPal use keep a PayPal button alongside either."
  - q: "What does WooPayments charge?"
    a: "As of 2026 for US stores: 2.9% + 30¢ per card transaction, plus 1.5% for cards issued outside the US and 1% for currency conversion, a $15 dispute fee, and no monthly or setup fees. WooPayments is operated by Automattic on Stripe's infrastructure."
  - q: "Does WooCommerce work with Authorize.net, NMI or accept.blue?"
    a: "Yes. Authorize.net has an official WooCommerce extension. NMI and accept.blue have plugins, and Fluidpay supports WooCommerce natively and through its Authorize.net AIM emulator. All support WooCommerce Subscriptions through their vaults."
  - q: "Can I use two payment gateways on WooCommerce?"
    a: "Yes. WooCommerce lets you enable several gateways and the customer picks at checkout. A common setup is a merchant account gateway for cards plus PayPal for wallet customers. Enabling a new gateway alongside the old one is also how you test a migration safely."
  - q: "Is my WooCommerce store PCI compliant?"
    a: "With a gateway that uses hosted fields or a hosted page (WooPayments, Stripe, accept.blue, NMI, Fluidpay tokenizer, Authorize.net Accept.js), card data never touches your server and the store qualifies for the shortest questionnaire, SAQ A. Older 'direct post' configurations expand scope. Keep WordPress, WooCommerce and the gateway plugin updated regardless."
cta:
  heading: "Get a WooCommerce gateway quote with the processing on one page"
  body: "Text your monthly store volume and average order value. You get the gateway plugin we would use, the gateway fee, and interchange-plus processing next to your WooPayments or Stripe cost, with the migration steps if it is worth it."
  smsBody: "Hi, I run a WooCommerce store and want to compare gateways."
related: ["gateways/pricing", "gateways/stripe-fees", "gateways/shopify", "gateways/hosted-payment-page-and-pci"]
---

WooCommerce's strength is that it does not care which gateway you use. That is also why store owners rarely revisit the choice: WooPayments was one click at setup, it worked, and the fee looks like everyone else's. This page compares the options on cost and features, and shows when the switch pays.

## The gateways WooCommerce supports

| Gateway | Model | US card rate | Monthly | Subscriptions support | Notes |
|---|---|---|---|---|---|
| WooPayments | Bundled (Stripe infrastructure) | 2.9% + 30¢, +1.5% international, +1% conversion | $0 | Yes | Default; wallets included; $15 disputes |
| Stripe (official plugin) | Bundled | 2.9% + 30¢ | $0 | Yes | Same rates as WooPayments; direct Stripe dashboard |
| PayPal Payments | Bundled | About 3.49% + 49¢ PayPal; card rates vary | $0 | Yes via vault | Keep for wallet customers |
| Square | Bundled | 2.9% + 30¢ online | $0 | Yes | Fits stores that also use Square in person |
| Braintree | Bundled | 2.59% + 49¢ | $0 | Yes | PayPal and Venmo included |
| Authorize.net (official extension) | Gateway on your merchant account | Your processor's rate | $25 + 10¢ + batch | Yes (CIM) | Oldest integration |
| NMI | Gateway on your merchant account | Your processor's rate | Reseller-set | Yes (Customer Vault) | Broad; multi-MID |
| accept.blue | Gateway on your merchant account | Your processor's rate | Provider-set | Yes | Modern; Level 3; invoicing |
| Fluidpay | Gateway on your merchant account | Your processor's rate | Partner-set | Yes | Native plugin or AIM emulator |

## Cost at three volumes

Merchant account gateway priced at $20 a month, 10¢ per item, interchange plus 0.30% + 10¢; blended card-not-present interchange 1.95% + 10¢.

| | $8,000 / 100 orders | $50,000 / 600 orders | $200,000 / 2,000 orders |
|---|---|---|---|
| WooPayments or Stripe | $262 | $1,630 | $6,400 |
| Merchant account gateway | $226 | $1,325 | $5,120 |
| Difference per year | $432 | $3,660 | $15,360 |

Add international sales and the WooPayments column grows by 1.5% to 2.5% of that share. Add B2B customers with commercial cards and Level 3 data through accept.blue, NMI or Fluidpay widens the gap further.

## Features that matter on WooCommerce

**Subscriptions.** WooCommerce Subscriptions needs a gateway with a vault. All of the above qualify. What differs is migration: moving subscribers between bundled providers or to a merchant account gateway requires an encrypted vault export, then remapping the subscription records to new tokens. Plan it around renewal dates.

**Wallets.** Apple Pay and Google Pay are built into WooPayments and Stripe. The merchant account gateways support them through their hosted fields on most plans; confirm for your specific gateway and plugin version.

**PCI.** Every gateway in the table can be configured with hosted fields so the store stays on SAQ A. The [hosted page and PCI guide](/gateways/hosted-payment-page-and-pci) explains the difference between that and a direct-post setup.

**Refunds and disputes from the WooCommerce order screen.** Supported by WooPayments, Stripe, Square, Braintree and Authorize.net; partially by others. Minor day to day.

## How to switch gateways on WooCommerce

1. Install and configure the new gateway plugin in test mode. Run test orders.
2. Enable it live alongside the old gateway. Place a real low-value order with each card type. Refund it.
3. If you use Subscriptions: request the vault export from the old gateway, import to the new one, remap subscription payment tokens (the new gateway's plugin usually includes a migration tool or CSV import). Time this after a renewal run.
4. Set the new gateway as the default and, after a week of clean orders and settlements, disable the old one. Keep its plugin installed until every subscription has renewed at least once on the new gateway.
5. Cancel the old gateway account.

A store without subscriptions can do this in an afternoon. With subscriptions, two to four weeks.

## When to stay on WooPayments

Under about $10,000 a month. No international volume to speak of. No developer, no time, no appetite for a second vendor. WooPayments is fair at that scale.

## When to move

Over $15,000 a month. International customers. B2B orders on commercial cards. A subscriber base large enough that Account Updater and retry logic matter. A physical location where you want dual pricing on the same merchant account. Or a reserve or hold that has already happened. In every one of those cases the arithmetic above applies and the switch is a plugin.

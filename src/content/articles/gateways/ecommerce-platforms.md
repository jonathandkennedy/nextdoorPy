---
title: "Payment Gateways for Magento, BigCommerce, Ecwid, OpenCart, Volusion and WordPress: Options and Fees"
h1: "Payment Gateway Options by Ecommerce Platform: Magento, BigCommerce, Ecwid, OpenCart, Volusion and WordPress"
description: "Which gateways connect to Magento, BigCommerce, Ecwid, OpenCart, Volusion and WordPress, whether the platform adds a fee, and bundled vs merchant account pricing."
category: gateways
published: 2026-09-15
updated: 2026-09-15
tldr:
  - "Magento (Adobe Commerce), BigCommerce, Ecwid, OpenCart and WordPress plugins all support external gateways without a platform surcharge, so a merchant account gateway on interchange-plus is a real option above roughly $15,000 a month. BigCommerce and Ecwid include a bundled option (PayPal-powered and Stripe-powered respectively) that is fine below that."
  - "Authorize.net has a native or official integration on every platform listed. NMI has plugins for Magento, BigCommerce, OpenCart and WordPress. accept.blue and Fluidpay cover the major platforms natively and, for Fluidpay, through an Authorize.net AIM emulator for older carts."
  - "Switching is a plugin or extension install and a settings change on every platform. Stored cards and subscriptions migrate through the old gateway's encrypted vault export."
keywords: ["magento payment gateway", "bigcommerce payment gateway", "ecwid payment gateway", "opencart payment gateway", "volusion payment gateway", "payment gateway for wordpress", "payment gateway for website", "payment gateway integration"]
faq:
  - q: "Does BigCommerce charge extra for third-party gateways?"
    a: "No. BigCommerce does not add a transaction fee for using an external gateway on any plan, unlike Shopify. It lists dozens of supported gateways including Authorize.net, NMI-based providers, Stripe, PayPal-powered Braintree and Square. Its own bundled option is PayPal-powered."
  - q: "Which payment gateway works with Magento?"
    a: "Magento Open Source and Adobe Commerce support Authorize.net (official), Braintree (bundled with Magento), Stripe, PayPal, NMI, accept.blue and Fluidpay through extensions. Fluidpay's Authorize.net AIM emulator also works for legacy Magento setups. Merchant account gateways on interchange-plus are common on Magento because stores tend to be larger."
  - q: "What gateway should I use on Ecwid?"
    a: "Ecwid includes a Stripe-powered option (Lightspeed Payments in some regions) and connects to Authorize.net, Square, PayPal and others. For a small Ecwid store the bundled option is fine; for higher volume, Authorize.net or another merchant account gateway on interchange-plus."
  - q: "Does OpenCart support NMI or Authorize.net?"
    a: "Yes. OpenCart ships with several gateway modules and has marketplace extensions for Authorize.net, NMI, accept.blue, Fluidpay, Stripe and PayPal. Because OpenCart stores are often self-hosted and developer-maintained, choose a gateway with hosted fields to keep the store on SAQ A."
  - q: "Is Volusion still supported?"
    a: "Volusion continues to operate and supports Authorize.net and other gateways through its admin settings. Stores on Volusion are often long-established with old processing pricing behind an Authorize.net account, which makes re-pricing the merchant account the first thing to look at."
cta:
  heading: "Get the gateway that fits your platform, with processing on one page"
  body: "Text your platform and monthly volume. You get the gateway we would install, the extension or plugin, the gateway fee and interchange-plus processing next to what you pay now."
  smsBody: "Hi, I need a payment gateway for my ecommerce platform."
related: ["gateways/woocommerce", "gateways/shopify", "gateways/pricing", "gateways/hosted-payment-page-and-pci"]
---

Outside Shopify, most ecommerce platforms treat the payment gateway as a plugin and do not penalize you for choosing one. That makes the gateway decision a pure cost and features question. This page covers the platforms we are asked about most, which gateways connect, and how switching works on each.

## Platform by platform

| Platform | Bundled option | Platform fee for external gateway | External gateways with native or official support |
|---|---|---|---|
| Magento Open Source / Adobe Commerce | Braintree (bundled extension) | None | Authorize.net (official), Stripe, PayPal, NMI, accept.blue, Fluidpay (native and AIM emulator) |
| BigCommerce | PayPal-powered | None on any plan | Authorize.net, Stripe, Square, Braintree, NMI-based providers, many processor gateways |
| Ecwid (Lightspeed) | Stripe-powered | None | Authorize.net, Square, PayPal, Stripe, others by region |
| OpenCart | None; modules included | None | Authorize.net, NMI, accept.blue, Fluidpay, Stripe, PayPal via core modules and marketplace extensions |
| Volusion | Volusion Payments (historically) | None | Authorize.net and other gateways via admin |
| WordPress with form or membership plugins (Gravity Forms, WPForms, MemberPress, GiveWP) | Varies by plugin; usually Stripe or PayPal | None | Authorize.net on most; NMI and others via add-ons |

Confirm the current extension for your platform version before boarding; plugin support changes, and Payflow in particular is being dropped by several platforms in 2026.

## Bundled vs merchant account gateway

The arithmetic is the same on every platform without a surcharge, and it is worked through on the [gateway pricing page](/gateways/pricing). Short version: bundled providers (Stripe-powered, PayPal-powered, Braintree) charge 2.6% to 2.9% plus a per-item fee with no monthly; a merchant account gateway charges $10 to $25 a month plus a per-item fee with processing on interchange-plus. Crossover is around $10,000 to $15,000 a month. Above that the merchant account saves 0.4% to 0.8% of volume, more with international or commercial card mix.

## Choosing among the merchant account gateways

| Need | Gateway |
|---|---|
| Widest plugin history, direct sign-up, published pricing | Authorize.net |
| Multiple stores or MIDs, broad vertical software integrations | NMI |
| Modern interface, invoicing, Level 3, Amex routing | accept.blue |
| Legacy cart that only speaks Authorize.net AIM; dual pricing online | Fluidpay |

All four connect to the platforms above and to a merchant account priced on interchange-plus. Comparison detail is on the [Authorize.net alternatives page](/gateways/authorize-net-alternatives).

## PCI on self-hosted platforms

Magento, OpenCart and WordPress stores are usually self-hosted, which means the store owner is responsible for the server. Use a gateway integration with hosted fields or a hosted page so card data never reaches that server; the store then qualifies for SAQ A regardless of how the server is maintained. A direct-post integration on a self-hosted store is the configuration most likely to fail a PCI review. The [hosted page and PCI guide](/gateways/hosted-payment-page-and-pci) explains the options.

## Switching gateways, generically

1. Install the new gateway's extension. Configure in sandbox or test mode. Place test orders.
2. Enable live alongside the old gateway. Run real low-value orders with each card brand. Refund.
3. Migrate stored cards and subscriptions if any: encrypted vault export from the old gateway, import to the new, remap customer tokens, recreate schedules after the last old-gateway billing run.
4. Make the new gateway default. After a week of clean settlement, disable the old one. Keep it installed until subscriptions have renewed once.
5. Close the old gateway account and, if you changed processors, the old merchant account.

Platform-specific notes:

- **Magento.** Test on a staging copy first; extension conflicts are common. Braintree's bundled extension can stay installed for PayPal wallet acceptance.
- **BigCommerce.** Gateway settings are in the control panel; changes apply immediately. Enable the new provider and disable the old in the same session after testing.
- **Ecwid.** Payment settings are per-store in the control panel; test with a $1 product.
- **OpenCart.** Module order controls which gateway shows first at checkout; set the new one first.
- **Volusion.** Gateway credentials are in the payment settings; keep the old credentials until the first live settlement clears.
- **WordPress plugins.** Each form or membership plugin has its own gateway add-on; a site with three plugins may need three configurations.

## What we do

Confirm the integration for your platform, board the gateway on a merchant account priced on interchange-plus, coordinate the vault export, and stay on the call for the cutover. One bill, month to month, and a person to call when a plugin update breaks checkout at 9pm.

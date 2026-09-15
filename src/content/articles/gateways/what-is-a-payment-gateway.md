---
title: "What Is a Payment Gateway? How It Works, Gateway vs Processor vs Merchant Account"
h1: "What a Payment Gateway Is, What It Is Not, and Whether You Need One"
description: "A gateway captures the card at checkout and sends it for authorization. The processor and merchant account move the money. How the three fit and what each costs."
category: gateways
published: 2026-09-15
updated: 2026-09-15
tldr:
  - "A payment gateway is the software that securely captures card or bank details on a website, invoice, app or virtual terminal, encrypts or tokenizes them, and sends the transaction to the processor for authorization. Authorize.net, NMI, accept.blue, Fluidpay and USAePay are gateways."
  - "The payment processor and acquiring bank route the authorization to the card networks, settle the funds, and charge interchange plus their markup. The merchant account is the account those funds settle into before deposit."
  - "Card-present businesses with a terminal or POS do not need a separate gateway; it is built in. Any business that takes cards online, by invoice, by phone or on a recurring schedule does, and usually pays the gateway and the processor as two line items unless one provider supplies both."
keywords: ["what is a payment gateway", "how does a payment gateway work", "payment gateway vs payment processor", "payment gateway vs merchant account", "do i need a payment gateway", "types of payment gateway"]
faq:
  - q: "What is the difference between a payment gateway and a payment processor?"
    a: "The gateway is the front door: it collects the card securely from the customer and passes the transaction on. The processor is the plumbing behind it: it sends the authorization to Visa, Mastercard, Discover or Amex, gets the approval, and settles the money to your merchant account. Stripe and Square bundle both. Authorize.net, NMI and accept.blue are gateways that connect to a separate processor."
  - q: "Do I need a merchant account to use a payment gateway?"
    a: "Yes, for a standalone gateway. The gateway needs a merchant account to settle into, supplied by a processor or acquiring bank. Aggregators like Stripe, Square and PayPal give you a sub-account under their master merchant account instead, which is faster to open but gives you less control over pricing and holds."
  - q: "Does a retail store need a payment gateway?"
    a: "Not a separate one. Countertop terminals and POS systems like Clover talk to the processor directly. A store needs a gateway only when it adds an online store, invoicing, phone orders or a customer-facing app."
  - q: "What are the types of payment gateway?"
    a: "Hosted gateways redirect the customer to the gateway's page to pay (simplest PCI scope). Integrated or API gateways let the checkout live on your site with the card fields served by the gateway (hosted fields or tokenizer). Direct-post or server-side integrations pass card data through your server (largest PCI scope, rarely worth it). Most small businesses use hosted or hosted-fields integrations."
  - q: "How much does a payment gateway cost?"
    a: "Standalone gateways typically charge $10 to $30 a month plus 5¢ to 15¢ per transaction, with processing billed separately by the merchant account provider. Bundled providers charge no gateway fee but a flat rate of about 2.9% + 30¢ that includes processing. The all-in comparison is on our gateway pricing page."
cta:
  heading: "Not sure what you have or what you are paying for?"
  body: "Text a photo of your gateway invoice and your processing statement. We map out which company does what, total the two bills, and quote one number to beat."
  smsBody: "Hi, I want to understand my gateway and processing setup."
related: ["gateways/pricing", "gateways/authorize-net-fees", "gateways/hosted-payment-page-and-pci"]
---

Three companies can be involved every time a customer pays you online: the one that runs the checkout, the one that moves the money, and the one that holds the funds. Merchants routinely pay all three without knowing which is which, which is why a "gateway fee" and a "processing fee" show up on different invoices. This page explains what each does, when you need a standalone gateway, and how the pieces get priced.

## What a gateway does

When a customer enters a card on your website, in a pay-by-link email, in a virtual terminal your staff use, or on a recurring plan, the gateway:

1. **Collects the card data securely.** Through a hosted page, hosted card fields on your checkout, or an API call from your software.
2. **Encrypts or tokenizes it.** The raw card number never sits on your server. The gateway stores a token in its vault if the card is to be reused.
3. **Sends the transaction to the processor** for authorization and returns the approval or decline to your checkout in about a second.
4. **Manages the extras.** Recurring billing schedules, stored customer profiles, fraud screening, 3D Secure authentication, Level 2 and 3 data for commercial cards, invoicing, reporting and refunds.

The gateway does not touch the money. It moves data.

## What the processor and merchant account do

The **processor** (also called the acquirer or the merchant services provider) takes the authorization request from the gateway, routes it through the card networks to the customer's bank, returns the answer, and at the end of the day batches approved transactions for settlement. It charges interchange (set by the card networks, the same for everyone), network assessments, and its own markup.

The **merchant account** is the account at the acquiring bank that the settled funds land in before they are deposited to your business checking account, usually one to two business days later. It is underwritten to your business, which is why applications ask for volume, ticket size, industry and ownership.

A gateway-only account, like Authorize.net's Gateway Only plan, needs a merchant account from a processor to work. That is the second bill.

## How the three fit together

| Piece | Job | Examples | Charges |
|---|---|---|---|
| Gateway | Capture, tokenize, route, manage recurring and vault | Authorize.net, NMI, accept.blue, Fluidpay, USAePay, Payflow | Monthly fee plus per-transaction fee |
| Processor / acquirer | Authorize, settle, fund | Fiserv, Worldpay, Elavon, TSYS, Global Payments, and the ISOs that resell them | Interchange, assessments, markup, monthly fees |
| Merchant account | Holds settled funds, carries underwriting | Opened through the processor | Usually part of processor pricing |
| Aggregator (all three bundled) | Everything above under one master account | Stripe, Square, PayPal, WooPayments, Shopify Payments | One flat rate, no monthly fee |

Aggregators are simpler and faster to open. Standalone gateway plus merchant account is cheaper at volume, lets you negotiate the processing, and gives you a merchant account underwritten to you, which means fewer surprise holds. The crossover point is usually somewhere around $8,000 to $15,000 a month in card-not-present volume, depending on ticket size.

## Do you need a payment gateway?

| You take payments by | Standalone gateway needed? |
|---|---|
| Countertop terminal or POS only | No. The terminal connects to the processor directly. |
| Online store | Yes, or an aggregator. Most carts support both. |
| Emailed or texted invoices | Yes, usually built into the invoicing platform. |
| Phone or mail orders keyed in by staff | Yes, a virtual terminal, which is a gateway feature. |
| Recurring subscriptions or memberships | Yes, with a vault and scheduler. |
| Your own software or app | Yes, through the gateway's API. |
| In person and online | A gateway for the online side. Some processors connect both to one merchant account so you get one statement. |

## Types of gateway integration

- **Hosted payment page.** The customer is sent to a page the gateway hosts, pays, and returns. Smallest PCI scope (SAQ A). Slightly less brand control.
- **Hosted fields or tokenizer.** The checkout stays on your site; the card fields are iframes served by the gateway. Still SAQ A in most cases. This is the modern default.
- **API or server-side.** Your software collects the card and calls the gateway API. Full PCI scope (SAQ D) unless you use the gateway's client-side tokenizer. Reserved for custom platforms.
- **Plugin.** A cart plugin (WooCommerce, Magento, BigCommerce) that implements one of the above for you.

The PCI implications are covered in [hosted payment pages, tokenization and PCI scope](/gateways/hosted-payment-page-and-pci).

## What each piece costs

Standalone gateways: $10 to $30 a month, 5¢ to 15¢ per transaction, sometimes a batch fee. Authorize.net publishes $25 and 10¢ plus 10¢ per daily batch. NMI, accept.blue and Fluidpay are priced by the provider who sells them.

Processing behind a gateway: interchange (about 1.5% to 2.6% on card-not-present transactions depending on card type) plus the processor's markup, which on a fair interchange-plus deal is 0.2% to 0.5% plus 5¢ to 15¢.

Aggregators: 2.9% + 30¢ (Stripe, WooPayments, Shopify Payments on Basic), 2.59% + 49¢ (Braintree), 2.99% (QuickBooks Payments invoiced), with no monthly fee.

The all-in comparison, with worked examples at three volumes, is on the [payment gateway pricing](/gateways/pricing) page.

## Where this goes wrong for small businesses

- Paying a gateway fee to Authorize.net and a second "gateway access" fee to the processor for the same gateway.
- Being on a gateway-only plan with processing that was priced in 2016 and never revisited.
- Using an aggregator at $40,000 a month because it was easy to open in 2019.
- Running two gateways, one for the store and one for invoicing, with two vaults and two bills.

Each of those is a phone call to fix. We supply gateway and processing together on one bill, or re-price the processing behind the gateway you already have.

---
title: "Level 3 Credit Card Processing: What It Is, Interchange Savings, and Which Gateways Support It"
h1: "Level 2 and Level 3 Processing: Lower Interchange on Commercial Cards for B2B Sellers"
description: "What Level 2 and 3 data are, which transactions qualify, how much interchange drops on commercial cards, and the gateway and pricing model that make the saving reach you."
category: gateways
published: 2026-09-15
updated: 2026-09-15
tldr:
  - "Level 2 and Level 3 are extra data fields sent with a transaction: tax amount and customer code for Level 2; line items, quantities, unit costs and commodity codes for Level 3. Visa and Mastercard reward that data on commercial, corporate and purchasing cards with lower interchange."
  - "The saving is roughly 0.5% to 1% of volume on qualifying commercial cards. A B2B distributor taking $100,000 a month, half on commercial cards, can save $250 to $500 a month. It only shows up on interchange-plus pricing; on a flat rate the processor keeps the difference."
  - "You need a gateway that passes the data (accept.blue, NMI, Fluidpay and Authorize.net do), software or a virtual terminal that fills the fields, and a processor that prices on interchange-plus."
keywords: ["level 3 processing", "level 3 credit card processing", "level 2 processing", "level 2 and level 3 data", "b2b payment processing", "b2b credit card processing", "commercial card interchange", "purchasing card processing"]
faq:
  - q: "What is Level 3 processing?"
    a: "Sending line-item detail with a card transaction: item descriptions, quantities, unit prices, commodity codes, tax, freight, and the customer's purchase order number. Visa and Mastercard use the data for corporate expense reporting and offer lower interchange rates on commercial cards when it is present and the transaction qualifies."
  - q: "How much does Level 3 save?"
    a: "It depends on the card. On a Visa purchasing card, Level 3 interchange can be roughly 0.5% to 1% lower than the same card without the data. Consumer cards get no reduction at all. The saving is proportional to the share of your volume on commercial, corporate, purchasing, fleet and government cards."
  - q: "Do I need special software for Level 3?"
    a: "You need a gateway that supports Level 3 fields and a way to populate them. Virtual terminals in accept.blue, NMI and Fluidpay have the fields. Many B2B invoicing and ERP integrations pass them automatically. Some gateways can fill default line-item data so that a transaction qualifies even when your software does not send it."
  - q: "Does Level 3 work on Stripe or Square?"
    a: "Stripe supports Level 2 and 3 data on some accounts but prices on a flat rate, so the interchange reduction does not change what you pay. Square does not support it. The saving only reaches you on interchange-plus pricing through a merchant account."
  - q: "What is the difference between Level 1, 2 and 3?"
    a: "Level 1 is a standard consumer transaction: amount, date, merchant. Level 2 adds tax amount, customer code and merchant tax ID. Level 3 adds line-item detail. Each level qualifies commercial cards for a lower interchange tier when the card type is eligible and the data passes validation."
cta:
  heading: "Find out what Level 3 would save on your card mix"
  body: "Text a photo of your statement. We identify the commercial card share, estimate the Level 3 reduction, and quote interchange-plus with a gateway that passes the data."
  smsBody: "Hi, I sell B2B and want to know if Level 3 processing would help."
related: ["gateways/accept-blue", "gateways/pricing", "gateways/virtual-terminal", "gateways/what-is-a-payment-gateway"]
---

If your customers pay with company cards, you are probably paying more interchange than you need to. Commercial cards carry the highest interchange rates in the system, and the card networks offer a discount for merchants who send purchase detail with the transaction. Most small B2B sellers have never been set up to send it. This page explains what the data is, what it is worth, and what has to be in place for the saving to reach you.

## The three levels

| Level | Data sent | Who benefits |
|---|---|---|
| Level 1 | Amount, date, merchant name and category | Everyone; it is the default |
| Level 2 | Level 1 plus sales tax amount, customer code (PO or account number), merchant tax ID, sometimes ZIP | Merchants taking business and corporate cards |
| Level 3 | Level 2 plus line items: description, quantity, unit of measure, unit cost, commodity code, extended amount, plus freight, duty, discount, destination ZIP | Merchants taking corporate, purchasing, fleet and government (GSA) cards |

The card networks created these tiers so that corporate cardholders get itemized data on their statements. Merchants that supply the data get lower interchange as the incentive.

## What the saving looks like

Interchange rates are published by Visa and Mastercard and change twice a year. The pattern is stable even as the numbers move: a commercial card transaction without enhanced data lands in a "standard" or "data rate I" category; with Level 2 it moves to a lower tier; with Level 3 it moves lower again. The gap between no data and Level 3 on purchasing and corporate cards is commonly in the 0.5% to 1% range, and larger on some government and fleet card types.

Worked example, a B2B wholesaler:

| | Amount |
|---|---|
| Monthly card volume | $100,000 |
| Share on commercial, corporate, purchasing cards | 50% ($50,000) |
| Estimated Level 3 reduction on that share | 0.5% to 1% |
| Monthly saving | $250 to $500 |
| Annual | $3,000 to $6,000 |

Consumer cards, which are the other $50,000 in this example, get no reduction. Level 3 is a B2B tool.

## Three things that have to be true

**1. The gateway passes the data.** accept.blue advertises enhanced Level 2 and 3. NMI, USAePay, Fluidpay and Authorize.net support it. Aggregator checkouts (Square, most PayPal products, Shopify Payments) do not pass Level 3 in a way that changes your cost.

**2. The data gets populated.** Three ways: your invoicing, ERP or e-commerce integration sends it automatically; staff fill the fields in the virtual terminal; or the gateway fills default line-item data so the transaction qualifies. The third option matters for businesses without integrated software. Ask the provider whether their Level 3 is "automatic" and what that means in practice.

**3. You are on interchange-plus.** This is the one most merchants miss. If you pay a flat 2.9% + 30¢, Level 3 lowers the processor's cost and not yours. On interchange-plus the interchange line on your statement drops and the processor's markup stays fixed, so the saving is yours.

## Who should set this up

- Wholesalers and distributors invoicing businesses.
- Manufacturers with B2B card payments.
- Government contractors taking GSA SmartPay cards (which also require split data handling).
- Medical and dental suppliers, lab services, industrial services.
- Any business where more than a quarter of card volume is on cards with "Business", "Corporate" or "Purchasing" printed on them.

Retail, restaurants and consumer services can skip this page; their cards do not qualify.

## How to check your own mix

On an interchange-plus statement, look at the interchange detail. Card types with "Commercial", "Corporate", "Purchasing", "Business", "Fleet" or "GSA" in the name are the eligible ones. Add up their volume. On a tiered or flat-rate statement, you cannot see it; send us the statement and we pull the mix from the processor's data during the analysis.

## Setup with us

accept.blue with Level 2 and 3 enabled, interchange-plus processing so the reduction reaches your statement, virtual terminal fields configured and staff shown where they are, and integration with your invoicing platform when one exists. One bill, month to month. The [accept.blue page](/gateways/accept-blue) covers the gateway itself.

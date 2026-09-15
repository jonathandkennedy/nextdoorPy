---
title: "Virtual Terminal for Credit Card Processing: What It Is, Fees, and MOTO Rules (2026)"
h1: "Virtual Terminals: Taking Card Payments by Phone, Mail and Email Without a Machine"
description: "How a virtual terminal works, what keyed phone and mail orders cost, why keyed rates run higher, stored-card and PCI rules for staff, and which gateways include one."
category: gateways
published: 2026-09-15
updated: 2026-09-15
tldr:
  - "A virtual terminal is a secure web page inside your payment gateway where staff key in a card number to charge a customer who is not present: phone orders, mail orders, deposits, balances due. Authorize.net, NMI, accept.blue, Fluidpay and USAePay all include one."
  - "Keyed transactions are card-not-present, so interchange is higher and most providers charge more: QuickBooks 3.5%, Clover 3.5% + 10¢, Stripe 2.9% + 30¢ (same as online), interchange-plus typically 2.2% to 2.6% all-in. Level 2 data and AVS matching lower it."
  - "Storing cards for repeat charges must go through the gateway's vault, not a notebook or spreadsheet. A pay link or text-to-pay is cheaper and safer than keying when the customer can act themselves."
keywords: ["virtual terminal", "virtual terminal credit card processing", "virtual terminal for small business", "moto payment processing", "card not present processing", "best virtual terminal", "free virtual terminal"]
faq:
  - q: "What is a virtual terminal?"
    a: "A login-protected web page in your payment gateway where an authorized employee types in a customer's card details and amount to run a charge, refund or authorization. It replaces a physical terminal for phone, mail and email orders. Most gateways include it; some processors sell it as a standalone product."
  - q: "How much does a virtual terminal cost?"
    a: "Usually nothing extra beyond the gateway fee, which is $0 to $30 a month depending on provider. The cost is in the keyed transaction rate, which is higher than in-person because the card is not present. Providers advertising a 'free virtual terminal' recover it in the rate."
  - q: "Why are keyed-in card rates higher?"
    a: "Card-not-present transactions carry more fraud risk, so the card networks set higher interchange for them, and processors add a larger margin. Providing address verification (AVS), the security code, and Level 2 data such as tax amount and invoice number qualifies the transaction for lower card-not-present interchange tiers."
  - q: "Can I store a customer's card to charge later?"
    a: "Yes, through the gateway's customer vault, which tokenizes the card. Writing it down, saving it in a spreadsheet or emailing it is a PCI violation and a liability. Every gateway we place includes a vault; staff store the card once and charge the token afterward."
  - q: "Is a virtual terminal PCI compliant?"
    a: "The virtual terminal itself is hosted by the gateway and is PCI Level 1. Your obligations are the workstation and the people: a clean computer, no card numbers written down or emailed, unique logins per employee, and completing the SAQ (usually SAQ C-VT for a virtual terminal on a dedicated machine)."
cta:
  heading: "Set up a virtual terminal with a real rate"
  body: "Text your monthly keyed volume and average ticket. You get the gateway fee and an interchange-plus keyed rate on one page, plus a pay-link option so customers can pay themselves at a lower rate."
  smsBody: "Hi, I need a virtual terminal for phone orders."
related: ["gateways/what-is-a-payment-gateway", "gateways/pricing", "gateways/recurring-billing", "gateways/level-3-processing"]
---

Every business that takes a card over the phone has a virtual terminal whether it calls it that or not. The difference between a good one and a bad one is the rate on those keyed transactions, whether stored cards are tokenized, and whether staff have a safe way to do it. This page covers all three.

## What it is and who uses it

A virtual terminal is the "charge a card" screen inside your gateway. An employee logs in, enters the amount, card number, expiration, security code and billing ZIP, and clicks charge. It can also run refunds, voids, pre-authorizations, and, with a vault, charge a stored customer without re-entering the card.

Typical users: contractors taking deposits by phone, medical and dental offices collecting balances, B2B distributors taking purchase orders, law firms, property managers, wholesalers, nonprofits, and any retailer with phone orders. It is also the fallback when a terminal goes down.

## What keyed transactions cost

Keyed transactions are card-not-present. Interchange is higher than in-person, and most providers price them higher still.

| Provider | Keyed / virtual terminal rate | Notes |
|---|---|---|
| QuickBooks Payments | 3.5% | Highest published tier |
| Clover direct | 3.5% + 10¢ | Same as online |
| Square | 3.5% + 15¢ | Manually entered |
| Stripe | 2.9% + 30¢ | Same as online; Dashboard virtual terminal |
| Authorize.net All-in-One | 2.9% + 30¢ | |
| Interchange-plus through a standalone gateway | Interchange + 0.2% to 0.5% + 10¢; about 2.2% to 2.6% all-in on consumer cards | Lower with AVS, CVV and Level 2 data |

On $20,000 a month keyed, 3.5% is $700; interchange-plus at 2.4% all-in is $480. The gateway fee difference is a rounding error next to that.

## How to lower the keyed rate

Card-not-present interchange has tiers. A keyed transaction with no supporting data lands in the most expensive one. Supplying data moves it down:

- **AVS.** Billing ZIP and street address checked against the card issuer. Required for the better tiers and for chargeback defense.
- **CVV.** The three or four-digit code. Never stored, always entered.
- **Level 2 data.** Tax amount, customer code, invoice number. Qualifies commercial cards for lower interchange. Most virtual terminals have the fields; staff have to fill them.
- **Level 3 data.** Line items, quantities, commodity codes. Larger reduction on corporate and purchasing cards. Covered in [Level 3 processing](/gateways/level-3-processing).
- **Settle within 24 hours.** Late settlement downgrades.

A gateway that supports Level 2 and 3 and a processor on interchange-plus is what makes these reductions show up on your statement. On flat-rate pricing, nothing you do changes the rate.

## Storing cards for repeat customers

The gateway's vault tokenizes the card. Staff store it once, with the customer's permission, and future charges reference the token. The token is useless outside your account. If a laptop is stolen, no card numbers are on it.

Never: paper forms in a drawer, spreadsheets, notes in a CRM, card numbers in email or text. All of those are PCI violations, and in a breach they are the difference between a bad week and a lawsuit.

## Pay links: the cheaper alternative for many keyed charges

If the customer can act, send them a link instead of keying. A pay-by-link or text-to-pay message opens a hosted page where the customer enters their own card. It is still card-not-present, but it removes your staff from the card data (smaller PCI scope), captures AVS and CVV from the customer directly, and usually costs the same or less. Contractors and service businesses get paid faster this way because the customer pays from their phone the same evening. Our [contractors and service page](/industries/contractors-and-service) covers the setup.

## PCI for the office

The gateway is PCI Level 1. Your side, for a virtual terminal on a dedicated workstation, is SAQ C-VT: a short questionnaire covering the computer, the network and staff practices. The rules that matter day to day: unique logins per employee, no card data written down or stored outside the vault, a computer that is not also used for personal browsing, and annual completion of the SAQ so you are not charged a PCI non-compliance fee.

## Which gateway

| Gateway | Virtual terminal | Vault | Level 2/3 | Notes |
|---|---|---|---|---|
| accept.blue | Yes | Yes | Enhanced | Modern interface, invoicing suite, our default |
| NMI / USAePay | Yes | Customer Vault | Yes | Broad integrations, multi-user permissions |
| Fluidpay | Yes | Yes | Yes | Partner-only, cash discount program built in |
| Authorize.net | Yes | CIM | Yes | Familiar to most staff; gateway-only needs a separate merchant account |
| Stripe Dashboard | Yes | Yes | Limited | Flat rate; fine at low volume |

All of the standalone gateways above connect to a merchant account we price on interchange-plus, with keyed and card-present channels on one statement.

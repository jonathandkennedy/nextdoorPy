---
title: "ACH Payment Processing Through a Gateway: Fees, Timing, Returns and When to Use It Over Cards"
h1: "ACH and eCheck Processing for Small Businesses: Costs, Timing and Setup Through Your Gateway"
description: "How ACH and eCheck payments run through a gateway, what they cost against cards, settlement timing, return codes and risk, and which businesses should push bank payments."
category: gateways
published: 2026-09-15
updated: 2026-09-15
tldr:
  - "ACH moves money directly between bank accounts through the ACH network instead of the card networks. Through a gateway it costs a flat 25¢ to $1.50 per item, or 0.5% to 1% with a cap, against 2.5% to 3.5% for a card. On a $5,000 invoice that is about $1 to $5 instead of $125 to $175."
  - "Funds settle in one to three business days, and a payment can be returned for up to two business days (insufficient funds) or up to 60 days (unauthorized, consumer accounts). Cards authorize instantly; ACH does not."
  - "accept.blue, NMI, Fluidpay, USAePay and Authorize.net all process ACH through the same vault and virtual terminal as cards. Authorize.net charges 0.75% with a $10 monthly minimum; QuickBooks 1% uncapped; Stripe 0.8% capped at $5; Helcim 0.5% + 25¢ capped at $6."
keywords: ["ach payment processing", "ach payment gateway", "echeck processing", "ach vs credit card fees", "ach processing for small business", "accept ach payments", "bank transfer payments small business"]
faq:
  - q: "What is the difference between ACH and eCheck?"
    a: "They are the same rails. An eCheck is an ACH debit initiated from a paper check's information or entered online; the term is used by gateways for a customer-initiated bank payment. Both clear through the ACH network operated by the Federal Reserve and The Clearing House under Nacha rules."
  - q: "How much does ACH processing cost?"
    a: "Through a gateway on a merchant account, typically a flat 25¢ to $1.50 per transaction, or 0.5% to 1% with a cap of $5 to $10. Bundled providers vary: Stripe 0.8% capped at $5, Braintree 0.75% capped at $5, Helcim 0.5% + 25¢ capped at $6, Authorize.net 0.75% with a $10 monthly minimum, QuickBooks Payments 1% with no cap."
  - q: "How long does ACH take to settle?"
    a: "Standard ACH debits settle in one to two business days and funds are typically available in two to three. Same-day ACH is available through some gateways for an added fee. Returns for insufficient funds arrive within two business days; unauthorized-return claims on consumer accounts can arrive for up to 60 days."
  - q: "Is ACH safer than cards for the merchant?"
    a: "Different. There is no chargeback process on ACH; instead there are returns. NSF returns are common and simply mean retry. Unauthorized returns are rare when you keep proper authorization records (a signed form, a checked box with the terms, or a recorded phone authorization). Card chargebacks are more frequent and more expensive to fight."
  - q: "Can customers pay an invoice by ACH from a link?"
    a: "Yes. Pay-by-link and text-to-pay pages from accept.blue, NMI and most invoicing tools offer a bank payment option next to the card option. Some use instant bank verification (log in to your bank) instead of typing routing and account numbers, which reduces errors and returns."
cta:
  heading: "Add ACH to your invoices and stop paying 3% on big tickets"
  body: "Text your monthly invoiced volume and average ticket. You get ACH and card pricing on one page and a pay link that offers both, synced to QuickBooks if you use it."
  smsBody: "Hi, I want to accept ACH payments on invoices."
related: ["gateways/recurring-billing", "industries/contractors-and-service", "quickbooks/credit-card-processing-fees", "gateways/pricing"]
---

For any business invoicing amounts in the hundreds or thousands, ACH is the cheapest way to get paid short of a paper check, and it is faster than the check. It is underused because it does not authorize instantly, because gateways bury it under the card option, and because some providers price it like a card. This page covers cost, timing, risk and setup.

## Cost, side by side

| Payment | $500 invoice | $5,000 invoice | $25,000 progress payment |
|---|---|---|---|
| Card at 2.99% (QuickBooks invoiced) | $14.95 | $149.50 | $747.50 |
| Card on interchange-plus (about 2.3%) | $11.50 | $115 | $575 |
| ACH at 1% uncapped (QuickBooks) | $5 | $50 | $250 |
| ACH at 0.8% capped at $5 (Stripe) | $4 | $5 | $5 |
| ACH flat $1 through a gateway on a merchant account | $1 | $1 | $1 |

The cap is the whole story. An uncapped percentage on a large ticket is a card fee in disguise. A flat per-item fee or a low capped percentage is what ACH should cost.

## Where the two options are wrong

Card-only invoicing at 3% on high tickets costs a service business thousands a year for no reason. ACH-only invoicing turns away customers who want points or need to pay from a company card. Offer both on the invoice and make ACH the default or the visibly cheaper choice; dual-priced invoices that show a bank price and a card price do exactly that. Details are in [dual pricing vs surcharging vs cash discount](/dual-pricing/dual-pricing-vs-surcharging-vs-cash-discount).

## Timing and what "settled" means

| Step | Cards | ACH |
|---|---|---|
| Authorization | Instant | None; the debit is submitted |
| Funds in your account | Next business day, typically | 1 to 3 business days; same-day ACH available for a fee on some gateways |
| Can it bounce? | Chargeback, up to 120 days | NSF return within 2 business days; unauthorized return up to 60 days (consumer) or 2 days (business accounts under Nacha rules) |

Practical rule: do not release goods or finish work on an ACH payment until it has cleared, which is usually two to three business days. For deposits and progress payments on jobs that is rarely a problem.

## Returns and how to avoid them

ACH returns have codes. The ones that matter:

- **R01 insufficient funds.** The most common. Retry in a few days, or contact the customer. Most gateways can auto-retry.
- **R02 closed account, R03 no account.** Wrong details or a closed account. Get updated information.
- **R10 / R11 unauthorized.** The customer says they did not authorize it. Your defense is the authorization record.
- **R29 corporate customer advises not authorized.** Business account version of the same.

Authorization records: for online payments, the checkbox and the terms the customer agreed to, with timestamp and IP. For phone, a recorded authorization or a signed form. For recurring, a signed or electronically signed agreement stating amount, frequency and how to cancel. Gateways store these when you use their forms; keep them if you collect authorization outside the gateway.

Instant bank verification (the customer logs into their bank through a widget instead of typing account numbers) cuts R02 and R03 returns to almost nothing and is worth enabling where the gateway offers it.

## Which gateways handle ACH

accept.blue: cards, signature debit, eChecks and ACH through one vault and virtual terminal, with recurring. NMI and USAePay: ACH through the Customer Vault alongside cards. Fluidpay: unified card and ACH handling. Authorize.net: Gateway + eCheck plan at 0.75% with a $10 minimum. All of them let a customer pay an invoice link by bank or card and store the bank account for recurring.

Pricing on a merchant account is set by the provider. Ours is a flat per-item fee, quoted on the same page as the card pricing.

## Who should push ACH

Contractors and trades taking deposits and progress payments. Professional services on retainers. Property managers. B2B suppliers. Nonprofits with monthly donors. Gyms and memberships. Anyone with an average ticket over about $300 or a recurring relationship. For a restaurant or a retail counter, ACH is irrelevant.

The contractor setup, with text-to-pay and QuickBooks sync, is on the [contractors and service businesses page](/industries/contractors-and-service).

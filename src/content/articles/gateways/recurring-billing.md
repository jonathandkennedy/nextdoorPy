---
title: "Recurring Billing Through a Payment Gateway: Vaults, Account Updater, Dunning and Fees"
h1: "Recurring Billing for Small Businesses: How Gateway Subscriptions, Vaults and Account Updater Work"
description: "How recurring billing runs inside a gateway, what a vault and Account Updater do, why cards fail and how retries recover them, and gateway tools vs subscription software."
category: gateways
published: 2026-09-15
updated: 2026-09-15
tldr:
  - "Recurring billing lives in the gateway: the customer's card is tokenized in the vault, a schedule charges the token on the interval you set, and the gateway retries declines and notifies the customer. accept.blue, NMI, Fluidpay, USAePay and Authorize.net (ARB) all include it."
  - "Cards expire and get reissued, so a subscriber base leaks about 1% to 2% a month without an Account Updater, which refreshes card numbers automatically from the networks. It is the single feature that most affects recurring revenue."
  - "Dedicated subscription platforms add plan management, proration and customer portals for $100 to $500 a month. Most small businesses with under a few hundred subscribers do fine on the gateway's own tools."
keywords: ["recurring billing software", "recurring payments small business", "subscription billing payment gateway", "customer vault", "account updater", "membership billing", "automatic payments"]
faq:
  - q: "Can a payment gateway do recurring billing without extra software?"
    a: "Yes. accept.blue, NMI, Fluidpay, USAePay and Authorize.net all include a subscription or recurring engine: store the card in the vault, set an amount and interval, and the gateway charges it automatically, with retries on decline and email receipts. Subscription platforms add customer self-service, plan changes and revenue reporting on top."
  - q: "What is an Account Updater?"
    a: "A service from Visa, Mastercard, Discover and Amex, delivered through your gateway, that replaces expired or reissued card numbers stored in your vault with the new ones before the next billing date. Without it, every reissued card is a failed payment and a customer service call. Authorize.net charges 25¢ per update; others price it similarly or bundle it."
  - q: "Why do recurring card payments fail?"
    a: "Expired or reissued cards, insufficient funds, a bank's fraud rules flagging an unexpected charge, a closed account, or a customer disputing. Account Updater fixes the first cause. Smart retry schedules (retry in 3 days, then 7) fix most of the second. Clear descriptors and receipts reduce the third."
  - q: "Is ACH better than cards for recurring billing?"
    a: "For larger or long-lived subscriptions, usually yes. ACH costs a fraction of card processing, bank accounts do not expire, and returns are lower than card declines. Cards win on sign-up friction and instant authorization. Many businesses offer both and nudge toward ACH on higher tiers."
  - q: "Can I move my subscribers to a new gateway?"
    a: "Yes. Vaulted cards can be exported from most gateways to another PCI-compliant gateway, encrypted, and the schedules recreated. Authorize.net supports export of Customer Information Manager and ARB data on request. Plan the cutover around billing dates so no one is charged twice or missed."
cta:
  heading: "Set up recurring billing that does not leak"
  body: "Tell us how many subscribers you bill and how. You get a gateway with vault, Account Updater and retry rules configured, on interchange-plus pricing, with a migration plan if you are moving from Authorize.net or a subscription platform."
  smsBody: "Hi, I bill customers on a recurring basis and want a better setup."
related: ["gateways/hosted-payment-page-and-pci", "gateways/ach-payment-gateway", "gateways/switch-from-authorize-net", "gateways/accept-blue"]
---

Recurring revenue is only as good as the billing behind it. Businesses that charge memberships, maintenance plans, retainers, subscriptions or installments lose money in two places: cards that silently fail, and fees that were set when the business had twenty subscribers and never revisited at two hundred. This page covers how gateway recurring billing works, what stops the leaks, and when a dedicated subscription platform is worth paying for.

## How it works inside a gateway

1. **The card or bank account is vaulted.** Entered once, on a hosted page, an invoice link, or by staff in the virtual terminal. The gateway stores it and returns a token.
2. **A schedule is created.** Amount, interval (weekly, monthly, annual, custom), start date, optional end or number of payments, optional trial.
3. **The gateway charges the token on schedule.** Receipts go out automatically. Your reporting shows successes, declines and upcoming charges.
4. **Declines are retried** on a schedule you set, and the customer can be emailed a link to update their card.
5. **Account Updater** refreshes expired and reissued cards between cycles, so most "expired card" declines never happen.

accept.blue, NMI, USAePay and Fluidpay all do this. Authorize.net does it through Automated Recurring Billing (ARB) with the Customer Information Manager (CIM) vault.

## The leak: card churn

Roughly a fifth of cards are reissued each year for expiry, loss, fraud or bank mergers. Without Account Updater, a subscriber base loses 1% to 2% of successful charges a month for that reason alone. On 300 subscribers at $80 a month that is $250 to $500 in failed billing every month, plus the staff time to chase it, and some customers who never come back.

Account Updater costs cents per update. It is the highest-return setting in the gateway and it is off by default on many accounts.

## The other leak: retries and dunning

A decline is not a cancellation. Insufficient funds on the 1st often clears by the 4th. A good retry schedule (for example, retry at 3 days, 7 days, and 14 days) recovers a large share of soft declines. Dunning is the email sequence around it: a receipt on success, a polite "your card did not go through, update it here" on decline, and a final notice before the service is paused. The gateway sends these; you set the wording once.

## Cards vs ACH for recurring

| | Cards | ACH |
|---|---|---|
| Cost per $100 charge | $2.50 to $3.20 on flat rate; $2.00 to $2.50 interchange-plus | 25¢ to $1 flat, or 0.5% to 1% capped |
| Expiry | Cards expire and are reissued | Bank accounts rarely change |
| Failure mode | Decline at authorization, instant | Return 2 to 4 days later (NSF, closed) |
| Disputes | Chargebacks up to 120 days | Unauthorized returns up to 60 days for consumers |
| Sign-up friction | Low | Slightly higher (routing and account number, or instant bank verification) |
| Best for | Consumer subscriptions, small tickets | B2B retainers, large or long-lived plans, memberships over $50 |

Offering both and defaulting higher tiers to ACH is the usual answer. ACH mechanics are on the [ACH gateway page](/gateways/ach-payment-gateway).

## Gateway tools vs subscription platforms

| | Gateway recurring (accept.blue, NMI, Fluidpay, Authorize.net ARB) | Subscription platform (Chargebee, Recurly, and others) |
|---|---|---|
| Cost | Included in gateway fee | $100 to $500+ a month, sometimes a percentage of revenue |
| Plan management | Basic: amount, interval, trial | Full: plans, add-ons, proration, upgrades, coupons |
| Customer self-service portal | Limited or none | Yes |
| Revenue reporting, MRR, churn | Basic | Detailed |
| Invoicing and tax | Basic or via add-on | Built in |
| Best for | Under a few hundred subscribers, simple plans | SaaS, complex catalogs, finance reporting needs |

A gym, a lawn service with monthly plans, a law firm on retainers, an HVAC company with maintenance agreements, or a nonprofit with monthly donors does not need a subscription platform. A software company with tiered plans and usage billing does. Either way the payments still run through a gateway, so the gateway and processing pricing apply in both cases.

## Pricing recurring billing

Recurring transactions are card-not-present and price like any keyed or online transaction. On a flat rate that is 2.9% + 30¢ regardless of volume. On interchange-plus it is interchange plus a fixed markup, and for a subscription business with a large base the difference is significant: 500 subscribers at $60 a month is $30,000 in volume, which is about $1,020 on flat rate and about $760 on interchange-plus, every month.

Watch for per-subscription fees (some gateways charge cents per active subscription per month) and Account Updater fees, both of which belong on the quote.

## Migrating subscribers

Vaulted cards move between gateways through an encrypted export from the old gateway to the new one. The new gateway imports the cards, returns new tokens, and schedules are recreated against them. Time the cutover for the day after a billing run so no customer is charged twice or missed. Authorize.net's export process, including its schedule and limits, is described in [switching from Authorize.net](/gateways/switch-from-authorize-net).

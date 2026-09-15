---
title: "Transaction Express and TransIT (TSYS / Global Payments): Retirement Dates and Where to Move"
h1: "Transaction Express Is Being Retired: What TransIT Merchants Should Do Before October 1, 2026"
description: "Global Payments retired the TXP gateway in 2023 and retires the Transaction Express virtual terminal on October 1, 2026. What to export and where to move."
category: gateways
published: 2026-09-15
updated: 2026-09-15
tldr:
  - "Transaction Express was the TransFirst gateway that came to TSYS and then Global Payments. Global Payments retired the TXP gateway on July 31, 2023, migrating merchants automatically to TransIT, and has set October 1, 2026 as the retirement date for the Transaction Express virtual terminal, directing merchants to the TransIT WebPass virtual terminal and the Merchant Center."
  - "If you use the Transaction Express virtual terminal for keyed payments, export your reporting before it closes, register for the new portal, and retrain staff. Integrations built on TXP were moved to a TransIT proxy in 2023; confirm yours still works and has a maintained path."
  - "A forced platform change is the cheapest moment to re-price or move. Merchants on legacy TransFirst pricing are often paying tiered rates from a decade ago; a statement review before October decides whether to follow Global Payments to TransIT or move to an independent gateway on interchange-plus."
keywords: ["transaction express", "transactionexpress", "transit gateway tsys", "transit-pass", "transaction express retirement", "transfirst gateway", "global payments transit"]
faq:
  - q: "What is Transaction Express?"
    a: "A payment gateway and virtual terminal originally from TransFirst, which TSYS acquired in 2016 and which became part of Global Payments in 2019. Merchants used it for keyed payments, recurring billing, stored cards and integrations. Global Payments has been consolidating it into its TransIT platform."
  - q: "When is Transaction Express shutting down?"
    a: "Per Global Payments' merchant notices reported in 2026, the TXP gateway sunset on July 31, 2023 with automatic migration to TransIT, and the Transaction Express virtual terminal is retired on October 1, 2026. Merchants are directed to the TransIT WebPass virtual terminal and the Global Merchant Portal for reporting."
  - q: "What is TransIT?"
    a: "Global Payments' current gateway platform, formerly TSYS TransIT, with a WebPass virtual terminal, hosted payment pages, tokenization, recurring billing and an API. Merchants on legacy Global Payments and TSYS gateways are being moved to it."
  - q: "What should I export before Transaction Express closes?"
    a: "Transaction history and reports you may need for accounting or disputes, stored customer records for reference, and recurring billing schedules. Reporting portals become inaccessible after retirement, so download before the date, then register with the Global Merchant Portal."
  - q: "Should I move to TransIT or leave Global Payments?"
    a: "Look at the processing pricing first. If you were a TransFirst merchant, the rates may be tiered and old. If Global Payments offers a competitive interchange-plus rate and TransIT supports your integration, following the migration is the least effort. If not, this is the moment to move to an independent gateway on a re-priced merchant account, because you are changing platforms anyway."
cta:
  heading: "Before October 1: get a statement review and a plan"
  body: "Text a photo of your Global Payments or TSYS statement. You get the effective rate, whether following the TransIT migration or moving out makes more sense, and the steps either way."
  smsBody: "Hi, I am on Transaction Express and need to move before it is retired."
related: ["gateways/what-is-a-payment-gateway", "gateways/authorize-net-alternatives", "gateways/virtual-terminal", "guides/how-to-read-a-merchant-statement"]
---

Transaction Express merchants have been through two migrations already and are about to face the last one. TransFirst became TSYS, TSYS became Global Payments, the TXP gateway became TransIT, and the Transaction Express virtual terminal is being retired. This page collects the dates, what to do before them, and why the change is the right time to look at pricing.

## The timeline

| Date | Event |
|---|---|
| 2016 | TSYS acquires TransFirst, including the Transaction Express gateway and virtual terminal |
| 2019 | Global Payments merges with TSYS |
| July 31, 2023 | Global Payments sunsets the TXP gateway; merchants automatically migrated to a TransIT proxy with a new reporting center and virtual terminal in the Merchant Center |
| October 1, 2026 | Transaction Express virtual terminal retired; merchants directed to the TransIT WebPass virtual terminal and the Global Merchant Portal |

Dates are from Global Payments merchant communications as reported in 2026 industry coverage. Confirm your own account's notices.

## What to do before October 1, 2026

1. **Export reporting.** Download transaction history, settlement reports and anything needed for accounting or open disputes. The old portal becomes inaccessible after retirement.
2. **Register for the Global Merchant Portal** and, if staying, set up users in the TransIT WebPass virtual terminal.
3. **Check integrations.** Anything that posted to TXP was moved to a TransIT proxy in 2023. Confirm the software vendor supports TransIT natively going forward, or plan to move.
4. **Record recurring schedules and stored customers** so they can be recreated or migrated.
5. **Pull the processing statement** and compute the effective rate. Decide whether to follow or leave.

## The pricing question

TransFirst-era accounts commonly show tiered pricing (qualified, mid-qualified, non-qualified) with monthly, PCI and annual fees added over the years. Effective rates over 3% are not unusual. Global Payments may offer better pricing to keep you through the migration, and it is worth asking. If they do not, the migration cost is being paid either way, so the marginal cost of moving to an independent gateway on interchange-plus is small. How to compute the rate is on the [statement guide](/guides/how-to-read-a-merchant-statement).

## Options

| Path | Effort | When it fits |
|---|---|---|
| Follow to TransIT WebPass on Global Payments | Low: new portal, retraining, integration check | Pricing is fair or renegotiated, integration is supported |
| Independent gateway (accept.blue, NMI, Fluidpay) on a new merchant account | Medium: new account, plugin or terminal change, stored-card export | Pricing is stale, you want interchange-plus and a person to call, or you want dual pricing at the counter on the same account |
| Authorize.net direct | Medium | You want published pricing and the widest plugin catalog |

## Migration to an independent gateway

Statement review, new merchant account on interchange-plus, gateway boarded with virtual terminal users set up, request stored-card export from Global Payments encrypted to the new gateway, import and remap, recreate recurring schedules after the last billing run, live tests, cutover. Three to five weeks. The generic sequence is in [switching from Authorize.net](/gateways/switch-from-authorize-net) and applies with the export request pointed at Global Payments.

Do it before October. A forced cutover with no plan is how businesses end up unable to key a payment for a week.

---
title: "Authorize.net Fees Explained (2026): Monthly, Per-Transaction and the Costs They Do Not List"
h1: "Authorize.net Fees in 2026: What You Pay, What Is Missing From the Price Page, and What It Adds Up To"
description: "Authorize.net's $25 monthly fee, 10¢ per transaction, 10¢ daily batch, 2.9% + 30¢ all-in-one and eCheck pricing, plus the processor fees the gateway-only plan leaves out."
category: gateways
published: 2026-09-15
updated: 2026-09-15
tldr:
  - "Authorize.net's published 2026 pricing: $25 a month on every plan. Gateway Only adds 10¢ per transaction plus a 10¢ daily batch fee. All-in-One charges 2.9% + 30¢ per transaction with processing included. Gateway + eCheck adds 0.75% per eCheck with a $10 monthly minimum."
  - "The gateway-only plan is the one most established merchants are on, and it is not the whole bill. You still pay a separate processor for interchange and markup. Merchants routinely find they are paying $25 plus about $4 in batch fees plus $0.10 an item to Authorize.net, and another 2% to 3% plus monthly fees to the processor."
  - "On 500 transactions and $50,000 a month, Authorize.net's own fees are about $79. Processing on top of that is typically $1,100 to $1,500. That second number is where the savings are when you switch."
keywords: ["authorize.net fees", "authorize.net pricing", "authorize.net monthly fee", "authorize.net transaction fee", "authorize.net batch fee", "authorize.net echeck fees"]
faq:
  - q: "How much does Authorize.net cost per month?"
    a: "$25 a month on every plan as of 2026, plus per-transaction fees. Gateway Only is 10¢ per transaction and 10¢ per daily batch. All-in-One is 2.9% + 30¢ per transaction and includes processing. Gateway + eCheck is $25 plus 10¢ per card transaction and 0.75% per eCheck with a $10 minimum monthly eCheck fee."
  - q: "Does Authorize.net charge a setup fee or early termination fee?"
    a: "No. Authorize.net lists no setup fee and no early termination fee for the gateway. If you got Authorize.net through a reseller or processor, that separate processing agreement may have its own term and termination fee."
  - q: "What is the Authorize.net daily batch fee?"
    a: "10¢ each time your transactions are settled, which is usually once per business day. On a typical month that is about $2 to $3. It is small but it is one of several fees that make the gateway-only bill higher than $25."
  - q: "Is Authorize.net's 2.9% + 30¢ a good rate?"
    a: "It matches Stripe and PayPal for online sales and is fine for low volume. Above roughly $10,000 a month, interchange-plus pricing through a processor usually beats it by 0.5% to 1% of volume, and dual pricing for in-person sales takes the merchant's cost to zero."
  - q: "What does Authorize.net charge for Account Updater?"
    a: "$0.25 per updated card as of 2026. Account Updater refreshes expired or reissued card numbers for recurring billing customers. It is optional but valuable for subscription businesses."
cta:
  heading: "Send both bills and get one number back"
  body: "Authorize.net's invoice and your processor's statement together show your true cost per transaction. We total them and quote a single all-in figure to beat, with stored cards migrated so recurring customers do not re-enter anything."
  smsBody: "Hi, here is my Authorize.net bill and processing statement."
related: ["gateways/authorize-net-alternatives", "gateways/switch-from-authorize-net", "gateways/accept-blue"]
---

Authorize.net publishes its prices, which is more than most gateways do. The confusion comes from what the price page does not say: on the plan most long-time merchants use, Authorize.net is only half the bill. This page lists the published 2026 fees, explains the missing half, and works through what real merchants pay.

## Authorize.net published pricing, 2026

| Plan | Monthly | Per transaction | Other |
|---|---|---|---|
| Gateway Only | $25 | 10¢ | 10¢ daily batch fee. Processing billed separately by your merchant account provider. |
| All-in-One | $25 | 2.9% + 30¢ | Processing included. Batch fee included. |
| Gateway + eCheck | $25 | 10¢ per card transaction; 0.75% per eCheck | 10¢ daily batch fee. $10 minimum monthly eCheck fee. |

Additional published items: no setup fee, no early termination fee, Account Updater $0.25 per update, eCheck returned item $3.00, eCheck chargeback $25.00. Source: authorize.net pricing page, retrieved September 2026.

Authorize.net also sells through resellers, and a reseller can wrap the gateway fee into a processing agreement at a different price. If your gateway fee is not $25, you are on a reseller plan and should check that agreement's term and cancellation clause.

## The half that is not on the price page

Gateway Only means exactly that. Authorize.net moves the transaction to your processor. The processor and its acquiring bank charge interchange (set by Visa, Mastercard, Discover and Amex), plus their own markup, plus their own monthly fees. That is a second bill from a second company.

Typical processor charges behind an Authorize.net gateway-only account:

- Interchange: 1.5% to 2.6% depending on card type, unavoidable with any provider.
- Processor markup: 0.2% to 1.0% plus 5¢ to 15¢ per item, depending on how the account was sold.
- Monthly: statement fee, PCI fee, annual fee, sometimes a "gateway access" fee that duplicates Authorize.net's own.

Merchants who were sold Authorize.net five or ten years ago through a web developer or a bank often have never seen the processing side re-priced. That is the account where the savings live.

## What it adds up to

Three merchants, all on Gateway Only with a separate processor at a middle-of-the-road 2.4% + 10¢ effective processing cost. Batch fee assumes 22 settlement days.

| | 200 transactions, $15,000 volume | 500 transactions, $50,000 volume | 2,000 transactions, $180,000 volume |
|---|---|---|---|
| Authorize.net monthly | $25 | $25 | $25 |
| Authorize.net per-transaction (10¢) | $20 | $50 | $200 |
| Authorize.net batch (10¢ x 22) | $2.20 | $2.20 | $2.20 |
| Authorize.net total | $47.20 | $77.20 | $227.20 |
| Processing at 2.4% + 10¢ | $380 | $1,250 | $4,520 |
| All-in monthly | $427 | $1,327 | $4,747 |
| All-in effective rate | 2.85% | 2.65% | 2.64% |

The gateway is 4% to 11% of the total. The processor is the rest. When merchants tell us "Authorize.net is expensive," what they are usually looking at is the combined bill, and the fix is on the processing side, whether or not the gateway changes.

## When Authorize.net's own pricing is fine

- You are on All-in-One, do under about $10,000 a month, and the 2.9% + 30¢ is simple and predictable.
- Your software only supports Authorize.net and switching would mean re-integrating.
- You depend on Authorize.net-specific features (its fraud filters, its hosted form, its Account Updater) and have tuned them.

In those cases the move is to re-price the processing behind the gateway, not to replace the gateway.

## When it is not

- You are gateway-only, above $10,000 a month, and have not had the processing re-quoted in years.
- You invoice or bill recurring and are paying 3.5% keyed rates through the processor.
- You take cards in person too, and the in-person side could run dual pricing at $0 through a modern terminal.
- You are paying a reseller price for the gateway that is higher than $25.

For those, the [Authorize.net alternatives](/gateways/authorize-net-alternatives) comparison covers gateways with the same integrations and a lower total, and [switching from Authorize.net](/gateways/switch-from-authorize-net) covers how stored cards move.

## How to read your Authorize.net bill

Log in to the merchant interface, go to Account, then Statements. The gateway statement shows the monthly fee, transaction count times 10¢, and batch count times 10¢. It does not show interchange or processor markup; those are on the statement from the merchant account provider named in your Authorize.net settings under Merchant Profile. If you do not know who that is, we can identify it from the descriptor on your bank deposits. Text a photo of either statement and we will send back the combined effective rate.

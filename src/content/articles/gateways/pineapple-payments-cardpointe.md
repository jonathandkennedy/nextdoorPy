---
title: "Pineapple Payments and Transax After Fiserv: CardPointe, What Changed, and Merchant Options"
h1: "Pineapple Payments Is Now Fiserv: Where Transax and CardPointe Merchants Stand"
description: "Fiserv acquired Pineapple Payments (and its Transax gateway) in 2021 for $206 million; pineapplepayments.com now redirects to CardConnect. What Transax and CardPointe..."
category: gateways
published: 2026-09-15
updated: 2026-09-15
tldr:
  - "Pineapple Payments was founded in 2016 by Brian Shanahan (previously of CardConnect), acquired the Transax gateway in August 2018, and was acquired by Fiserv in 2021 for $206 million. Its website now redirects to cardconnect.com, Fiserv's CardConnect and CardPointe brand."
  - "Merchants who came in through Pineapple or its resellers are Fiserv merchants on CardPointe or Transax tooling: hosted payment pages, virtual terminal, tokenized vault, recurring billing, and integrations through CardConnect's API. Pricing was set by the reseller and is worth reviewing."
  - "CardPointe is a solid gateway. The decision is about processing pricing and terms, and about whether you want processing tied to Fiserv (CardPointe runs on Fiserv) or an independent gateway that can move between processors."
keywords: ["pineapple payments", "pineapple payments fiserv", "transax gateway", "cardpointe gateway", "cardconnect gateway", "cardpointe vs authorize.net", "cardconnect review"]
faq:
  - q: "What happened to Pineapple Payments?"
    a: "Fiserv agreed to acquire Pineapple Payments in March 2021 for $206 million, with the deal closing in the second quarter of that year. Pineapple's merchants continued to be processed by Fiserv, and the Transax gateway and related tools continued to be distributed through resellers. pineapplepayments.com now redirects to cardconnect.com."
  - q: "What is Transax?"
    a: "A Chicago-based payment gateway and omni-channel payment enablement company that Pineapple Payments acquired in August 2018. It provided hosted payments, virtual terminal, tokenization and integration tools. After the Fiserv acquisition it sits alongside CardConnect's CardPointe platform."
  - q: "What is CardPointe?"
    a: "CardConnect's merchant platform, part of Fiserv since First Data acquired CardConnect in 2017 and Fiserv acquired First Data in 2019. CardPointe includes a virtual terminal, hosted payment pages, a tokenized vault, recurring billing, reporting, mobile and terminal support, and an API for integrations. It runs on Fiserv processing."
  - q: "How is a CardPointe account priced?"
    a: "By the reseller or Fiserv sales channel that sold it: gateway monthly and per-item fees, processing on interchange-plus, tiered or flat, and monthly fees set per agreement. CardConnect has historically marketed interchange-plus. Check your own statement's model and effective rate."
  - q: "Can I move stored cards off CardPointe?"
    a: "Yes. Vaulted tokens can be exported to another PCI-compliant gateway on request from the account owner, encrypted to the receiving party. Because CardPointe is tied to Fiserv processing, leaving is a gateway and processor migration together, similar to leaving Elavon Converge."
cta:
  heading: "Came in through Pineapple or a CardConnect reseller? Check the terms."
  body: "Text a photo of your statement. You get the effective rate, the pricing model, the contract term, and a quote for an independent gateway on interchange-plus with the migration plan if it is worth it."
  smsBody: "Hi, my account came through Pineapple Payments or CardConnect and I want to compare."
related: ["gateways/elavon-converge", "gateways/authorize-net-alternatives", "gateways/pricing", "guides/how-to-read-a-merchant-statement"]
---

Pineapple Payments was a fast-growing reseller platform with its own gateway for about five years. Then Fiserv bought it. If your account came through Pineapple, a Pineapple sub-reseller, or the Transax gateway, you are a Fiserv merchant now, most likely on CardPointe tooling. This page explains the history, what you are on, and what to check.

## The history

| Year | Event |
|---|---|
| 2014 | Brian Shanahan leaves CardConnect |
| 2016 | Shanahan founds Pineapple Payments |
| 2017 | First Data acquires CardConnect |
| August 2018 | Pineapple acquires Transax, a Chicago payments software company with a full-service gateway and omni-channel tools |
| 2019 | Fiserv acquires First Data, and with it CardConnect and CardPointe |
| March 2021 | Fiserv agrees to acquire Pineapple Payments for $206 million; closes in the second quarter |
| Today | pineapplepayments.com redirects to cardconnect.com |

## What you are on

Merchants acquired through Pineapple continued to be processed by Fiserv, and Transax and Pineapple's value-added tools continued to be distributed by resellers. In practice most accounts now use CardConnect's CardPointe platform or Transax tooling on Fiserv processing:

- Virtual terminal for keyed and stored-card transactions.
- Hosted payment pages and hosted fields for websites.
- Tokenized vault and recurring billing.
- Reporting, mobile acceptance, terminal support.
- API and a catalog of software integrations, including many practice management and vertical products.

CardPointe is a good gateway. The question is not the software; it is the pricing and the tie to Fiserv.

## What to check

1. **Pricing model.** CardConnect has historically marketed interchange-plus, but reseller channels set their own. Look for qualified, mid-qualified and non-qualified lines (tiered) versus an interchange detail section with a stated markup.
2. **Effective rate.** Total fees divided by volume. Method on the [statement guide](/guides/how-to-read-a-merchant-statement).
3. **Fees.** Gateway, PCI, statement, annual, minimum, and any fee added since the acquisition. Rate and fee changes are disclosed on the statement footer.
4. **Term.** Reseller agreements from the Pineapple era commonly ran multi-year with auto-renewal. Know the end date and the termination fee.
5. **Equipment.** Placed, purchased or leased. Leases are the expensive line.

## Stay or move

Stay if the integration into your software is CardPointe-specific and the effective rate is fair, or if Fiserv will re-price to competitive interchange-plus. The tooling is not the problem.

Move if the rate is tiered or over 2.5% on a normal mix, the agreement is auto-renewing with a penalty, you want dual pricing at the counter on an independent processor with online on the same account, or you want processing that is not tied to one acquirer. Because CardPointe runs on Fiserv, leaving is a gateway and processor migration together: new merchant account, independent gateway (accept.blue, NMI, Fluidpay), vault export from CardPointe encrypted to the new gateway, remap, recurring recreated, live tests, cutover. Three to five weeks with stored cards.

The same considerations apply to Elavon Converge, which is [covered separately](/gateways/elavon-converge), and the receiving-gateway comparison is on the [Authorize.net alternatives page](/gateways/authorize-net-alternatives).

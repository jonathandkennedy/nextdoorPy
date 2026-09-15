---
title: "Hosted Payment Pages, Tokenization and PCI Scope: SAQ A vs A-EP vs D for Small Businesses"
h1: "Hosted Payment Pages, Tokenization and PCI: How to Take Cards Online With the Smallest Compliance Burden"
description: "Hosted pages, hosted fields, tokenization and vaults explained, and how each integration choice sets your PCI questionnaire (SAQ A, A-EP, C-VT or D) and liability."
category: gateways
published: 2026-09-15
updated: 2026-09-15
tldr:
  - "The less card data your systems touch, the smaller your PCI obligation. A hosted payment page or hosted card fields served by the gateway keep you on SAQ A, the shortest questionnaire. Collecting cards on your own page and posting them to the gateway moves you to SAQ A-EP or D, which most small businesses cannot realistically maintain."
  - "Tokenization means the gateway replaces the card number with a token that only works in your account. Store tokens, never cards. Every gateway we place includes a vault."
  - "PCI is not a fee, it is a questionnaire and a quarterly scan (for some SAQs). The 'PCI non-compliance fee' on statements is a processor penalty for not completing it, and it goes away when you do."
keywords: ["hosted payment page", "hosted payment gateway", "hosted checkout page", "tokenization credit card", "credit card vault", "payment gateway pci compliance", "pci dss saq a", "pci compliance for ecommerce"]
faq:
  - q: "What is a hosted payment page?"
    a: "A checkout page hosted on the gateway's servers rather than yours. The customer is sent there to enter card details and returned to your site afterward. Because card data never touches your website, your PCI scope is the smallest available, SAQ A. Most gateways let you brand it with your logo and colors."
  - q: "What is the difference between a hosted page and hosted fields?"
    a: "Hosted fields (also called a tokenizer or iframe fields) keep the checkout on your page but serve the card input boxes from the gateway inside iframes. Your page never sees the card number. It gives the look of an on-site checkout with the PCI scope of a hosted page, provided the rest of the page meets SAQ A's conditions."
  - q: "What is tokenization?"
    a: "The gateway stores the card in its PCI Level 1 vault and gives you a token, a random reference that only works within your gateway account. You charge the token for repeat or recurring payments. If your systems are breached, the tokens are worthless to an attacker."
  - q: "Which PCI SAQ applies to an online store?"
    a: "SAQ A if the entire card entry is outsourced to a PCI-validated provider through a hosted page or compliant iframe and your site does not receive card data. SAQ A-EP if your page controls the form but posts directly to the gateway. SAQ D if card data passes through your server. A virtual terminal on a dedicated computer is SAQ C-VT."
  - q: "What is a PCI non-compliance fee?"
    a: "A monthly penalty, typically $20 to $99, that processors charge when the merchant has not completed the annual self-assessment questionnaire and, where required, quarterly scans. It stops when you complete them. It is not a PCI Council fee; it is the processor's."
cta:
  heading: "Get on SAQ A and stop paying non-compliance fees"
  body: "Tell us how you take cards online. We set up a hosted page or hosted fields, move stored cards into a vault, and walk you through the questionnaire once so the penalty disappears."
  smsBody: "Hi, I want help with PCI and a hosted payment page."
related: ["gateways/what-is-a-payment-gateway", "gateways/virtual-terminal", "gateways/recurring-billing", "guides/how-to-read-a-merchant-statement"]
---

PCI compliance is where small businesses either overpay for consultants or ignore it and pay the penalty fee forever. Neither is necessary. The choice of how your checkout collects the card determines almost everything about your obligation, and the right choice puts nearly every small business on the shortest questionnaire. This page explains the options and what each one commits you to.

## Four ways a gateway can collect a card

| Method | How it works | Card data touches your site? | Typical SAQ |
|---|---|---|---|
| Hosted payment page | Customer redirected to the gateway's page, returns after payment | No | A |
| Hosted fields / tokenizer | Card inputs are iframes from the gateway embedded in your checkout | No | A |
| Direct post / client-side API | Your form posts card data straight from the browser to the gateway | Your page controls the form, data bypasses your server | A-EP |
| Server-side API | Card data passes through your server to the gateway | Yes | D |
| Virtual terminal | Staff key cards into the gateway's web page | No, but your workstation does | C-VT |

Hosted page and hosted fields are the answer for almost everyone. Direct post is for developers who need full control of the form and accept a longer questionnaire. Server-side is for platforms with security staff.

## What the SAQs actually require

- **SAQ A.** Around 30 questions. Confirms you outsource card handling to validated providers, do not store card data, and manage the parts you do control (like who can log into the gateway). No quarterly scan required in most cases. An afternoon, once a year.
- **SAQ A-EP.** Around 190 questions plus quarterly external vulnerability scans of your website. Needed when your page has control over how the card form is delivered, even if data goes straight to the gateway. This is the trap: a web developer picks a "direct" integration for design reasons and the merchant inherits a much larger burden.
- **SAQ C-VT.** Around 80 questions. For merchants keying cards into a virtual terminal from a dedicated computer that is not connected to other systems that store card data.
- **SAQ D.** Over 300 questions plus scans plus, at some volumes, penetration testing. For anyone storing, processing or transmitting card data on their own systems. Avoid unless you are a software company.

## Tokenization and vaults

Every serious gateway has a vault. The first time a customer pays, the gateway stores the card and gives you a token. Your software, your virtual terminal, or your recurring billing schedule charges the token afterward. Tokens are tied to your gateway account and useless anywhere else.

What this means in practice: no card numbers in your CRM, spreadsheets, paper files or email. Ever. If a customer emails you a card number, charge it, then delete the email. Repeat customers get stored in the vault with their permission.

When you switch gateways, the vault migrates: the old gateway exports encrypted tokens and card data to the new one, and your customer IDs are remapped. The process for Authorize.net is in [switching from Authorize.net](/gateways/switch-from-authorize-net).

## Hosted pages: what you give up and what you get

You give up some design control. The page lives on the gateway's domain, and while you can add a logo, colors and your business name, it will not be pixel-identical to your site. Hosted fields solve most of that by putting only the card inputs in iframes.

You get SAQ A, no scans, no liability for card data on your server, a payment form that is maintained and updated by the gateway (including 3D Secure and wallet support as they change), and the ability to move gateways without rebuilding your checkout.

## Where PCI fees come from

There is no fee to be PCI compliant. There are two fees on statements that reference it:

- **PCI compliance fee** ($5 to $30 a month). A processor charge for providing the compliance portal and scan service. Some charge it, some do not. It is negotiable.
- **PCI non-compliance fee** ($20 to $99 a month). A penalty for not completing the SAQ and scans. It is entirely avoidable. Merchants pay it for years because nobody told them what it was.

On a statement review we find the non-compliance fee on about a third of accounts. Completing the questionnaire takes an afternoon. Our [statement guide](/guides/how-to-read-a-merchant-statement) shows where to find it.

## Setup with us

We configure the gateway's hosted page or hosted fields on your cart, enable the vault, confirm the integration keeps you on SAQ A, and sit with you for the questionnaire once. After that it is an annual renewal you can do yourself.

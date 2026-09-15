---
title: "How to Switch From Authorize.net Without Breaking Your Integrations or Losing Stored Cards"
h1: "Switching From Authorize.net: Keep Your Software, Move Your Stored Cards, Cut the Bill"
description: "What changes and what does not, how Authorize.net exports stored customer profiles to a new PCI-compliant gateway, cart plugin swaps, recurring billing, and a timeline."
category: gateways
published: 2026-09-15
updated: 2026-09-15
tldr:
  - "Your cart, invoicing tool or QuickBooks workflow stays. The gateway behind it changes. For most platforms that is a plugin install and new API keys, done in an hour on a call with us."
  - "Stored cards move. Authorize.net exports Customer Information Manager and recurring billing profiles to another PCI DSS compliant gateway when the account owner requests it. The export is PGP-encrypted, runs on Authorize.net's weekly schedule, is limited to two per rolling year, and can carry a fee. Budget two to four weeks."
  - "Nothing is cancelled until the new gateway is live and tested. Then the old one is closed, with no early termination fee from Authorize.net itself."
keywords: ["switch from authorize.net", "migrate from authorize.net", "authorize.net data export", "authorize.net cim migration", "cancel authorize.net", "leave authorize.net"]
faq:
  - q: "Will my customers have to re-enter their cards?"
    a: "Not if the stored profiles are migrated. Authorize.net exports customer payment profiles to the new gateway's vault. Your software then references the new token IDs. Customers on recurring plans continue to be billed without action on their part. If you skip the migration, customers re-enter cards on their next purchase."
  - q: "How long does an Authorize.net data export take?"
    a: "Authorize.net processes export requests on a set weekly schedule and requires an encryption key and a signed request from the account owner, with an officer of the company signing a waiver. Allow one to two weeks for the file and a few days for the import on the new side. Recurring billing cutover is scheduled around your billing dates."
  - q: "Does Authorize.net charge to cancel?"
    a: "Authorize.net lists no early termination fee for the gateway. Data extraction for customer profiles or recurring billing may carry a fee, which we confirm in writing before requesting it. If Authorize.net was bundled into a processor contract, that contract's terms apply to the processing side."
  - q: "What if my software only supports Authorize.net?"
    a: "Then keep the gateway and re-price the processing behind it, which is where most of the cost is. Some gateways also offer an Authorize.net-compatible endpoint so legacy AIM-style integrations can post to them unchanged; we check whether that applies to your platform before recommending anything."
  - q: "Can I run both gateways during the switch?"
    a: "Yes, and you should. The new gateway is set up, connected in test mode, and verified with live low-value transactions while Authorize.net continues to process. Cutover is a settings change on your platform once everything checks out."
cta:
  heading: "Start with a five-minute call"
  body: "Tell us your platform and whether you bill recurring. We tell you on the spot whether your integration is a plugin swap or a project, and what the all-in cost looks like after the move."
  smsBody: "Hi, I want to switch from Authorize.net. My platform is:"
related: ["gateways/authorize-net-alternatives", "gateways/authorize-net-fees", "gateways/accept-blue"]
---

Leaving Authorize.net is not hard. Leaving it badly is: a developer swaps the plugin on a Friday, recurring customers get declined on Monday, and stored cards are gone because nobody requested the export. This page is the sequence we use. It is written for a business owner, not a developer, and it is the page we send when someone calls us mid-switch.

## What changes and what does not

| Stays the same | Changes |
|---|---|
| Your website, cart, checkout page design | The gateway plugin or API keys behind the checkout |
| Your invoicing software and QuickBooks | The payment connection inside it |
| Your customer list and order history | Where stored card tokens live |
| Your bank account and deposit schedule | The processor depositing into it |
| Your prices | Your effective rate |

If your platform is WooCommerce, Shopify, BigCommerce, Magento, Ecwid, OpenCart, Volusion, or a mainstream billing or practice-management system, the gateway change is configuration, not development. If it is custom code written against Authorize.net's API, it is a small development task, and some gateways can accept Authorize.net-style requests directly. We check before you commit to anything.

## The sequence

### 1. Get the numbers first

Pull your Authorize.net statement and your processor's statement for the same month. Total them. That is your current all-in cost. Everything after this step is measured against it. If you do not know who your processor is, the deposit descriptor on your bank statement usually names them. Our [Authorize.net fees breakdown](/gateways/authorize-net-fees) explains what to look for.

### 2. Confirm platform compatibility

We check your cart or software against the new gateway's integration list. For accept.blue and NMI that covers the major carts and most billing tools. If there is no native integration, we look at an Authorize.net-compatible endpoint or a small custom change, and we tell you the cost before going further.

### 3. Board the new merchant account and gateway

Application, underwriting, approval. Typically two to five business days. The new gateway is provisioned in test mode. Nothing on Authorize.net changes.

### 4. Request the stored-card export from Authorize.net

This is the step people skip. Authorize.net will export Customer Information Manager profiles, and recurring billing subscriptions, to another PCI DSS compliant gateway. As of 2026 the process, per Authorize.net's support documentation:

- The request comes from the Authorize.net account owner, with a signed waiver from an officer of the company.
- You supply the receiving gateway's PGP public key. The export file is encrypted to it, so only the new gateway can read the card data.
- Exports run on a fixed weekly schedule, not on demand. Authorize.net limits accounts to two extractions in a rolling year with 30 days between them.
- Customer profile exports have historically been free; CIM and ARB (recurring) extractions have carried a fee, quoted at request time. We confirm the fee before submitting.

We prepare the request with you, supply the receiving key, and track it.

### 5. Import into the new vault and map IDs

The new gateway imports the file and returns a mapping of old customer profile IDs to new tokens. Your platform is updated so each customer record points to the new token. For most carts this is a plugin function or a CSV import; for custom code it is a script we help specify.

### 6. Test with live transactions

Switch the platform to the new gateway in live mode for a short window and run a handful of real low-value transactions: a sale, a refund, a stored-card charge, a recurring charge if applicable. Verify deposits arrive. Then switch back or leave it live, depending on whether the migration is complete.

### 7. Cut over

Change the platform's active gateway. Update recurring billing schedules to bill from the new vault, timed after the last Authorize.net billing run. Watch the first two days of settlements.

### 8. Close Authorize.net

Only after two clean settlement cycles on the new gateway and after the last recurring run. Authorize.net has no early termination fee for the gateway. Cancel the processing account behind it per that agreement's terms, which is the one place a termination fee can exist.

## Timeline

| Week | Work |
|---|---|
| 1 | Statements, compatibility check, application, export request submitted |
| 2 | Approval, test-mode setup, export file received |
| 3 | Vault import, ID mapping, live tests |
| 4 | Cutover, recurring schedules moved, monitoring |

Businesses without stored cards or recurring billing can compress this to about a week.

## Who should not switch the gateway

If your integration is Authorize.net-only and re-integrating would cost more than a year of savings, keep the gateway. Ask us to re-price the processing behind it instead. That is the bigger number in almost every case, and it does not require touching your website at all. We say this on the first call when it applies.

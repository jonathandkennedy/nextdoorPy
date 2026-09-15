---
title: "Clover Offline Mode (2026): How to Take Payments During an Internet Outage, Limits and Risks"
h1: "Clover Offline Mode: Enabling It Before the Outage, What It Can and Cannot Do"
description: "How Clover offline payments work on Flex and Mini, the dashboard setting to enable first, per-transaction limits, the sync window, the decline risk you carry, and."
category: clover
published: 2026-09-15
updated: 2026-09-15
tldr:
  - "Clover Flex and Mini can keep accepting card payments when the internet is down, but only if offline payments were enabled in the Clover dashboard before the outage (Setup, Payments, Offline Payments) with a per-transaction limit set. Transactions are stored encrypted on the device and submitted for authorization when the connection returns."
  - "Offline transactions are not authorized at the time of sale. A card that declines when the queue processes, after the customer has left, is the merchant's loss. Set the limit to a ticket you can afford to lose, and keep the outage short: Clover holds offline transactions for a limited window, commonly cited as up to 7 days."
  - "Refunds, voids and most non-payment functions need a live connection. The Station line is designed for continuous connectivity; the practical protection for a counter is LTE on the device or a Flex on cellular beside the Station."
keywords: ["clover offline mode", "clover offline payments", "clover internet outage", "clover pos no internet", "does clover work without wifi", "clover offline transaction limit", "clover down"]
faq:
  - q: "Does Clover work without internet?"
    a: "Flex and Mini can accept card payments offline when the feature is enabled in the dashboard ahead of time, storing transactions on the device and submitting them when the connection returns. Without it enabled, the device cannot take cards during an outage. Clover Station is built for a continuous connection and should have LTE or a Flex beside it as a backup."
  - q: "How do I turn on Clover offline mode?"
    a: "In the Clover web dashboard go to Setup, then Payments, then Offline Payments, enable it, and set a per-transaction limit and, where offered, a total offline limit. Do this before an outage; it cannot be enabled from the device while it is offline."
  - q: "Are offline Clover payments guaranteed?"
    a: "No. They are not authorized by the bank at the time of sale. When the device reconnects, each transaction is submitted; a card that is declined, over limit, cancelled or fraudulent fails then, and the merchant absorbs the loss. That is why the per-transaction limit matters."
  - q: "How long can Clover hold offline transactions?"
    a: "Clover holds queued offline transactions for a limited period, commonly cited as up to 7 days, after which they can expire unprocessed. In practice, reconnect the same day. If an outage is longer, switch the device to LTE or a phone hotspot to sync."
  - q: "Can I issue refunds offline on Clover?"
    a: "No. Refunds and voids require a live connection to the processor. Take the customer's details and process the refund when the connection is back."
cta:
  heading: "Set up offline mode and a cellular backup before the next outage"
  body: "Text which Clover devices you have. We check whether offline payments are enabled and sized sensibly, add LTE where the device supports it, and put a Flex on cellular beside a Station so the counter never stops."
  smsBody: "Hi, I want my Clover set up to keep working during internet outages."
related: ["clover/flex", "clover/mini", "clover/setup-and-training", "clover/for-food-trucks"]
---

The internet goes down at 12:15 on a Saturday and the line is out the door. Whether your Clover keeps taking cards depends on a checkbox someone set months earlier. This page explains what offline mode does, how to enable it, what it costs you in risk, and the better first defense.

## What offline mode is

When enabled, a Clover Flex or Mini that loses connectivity continues to accept card payments up to limits you set. Each transaction is encrypted and stored on the device. When the connection returns, the device submits the queue for authorization and settlement. The customer's experience is normal; the merchant's risk is not.

## How to enable it

1. Log in to the Clover web dashboard.
2. Setup, then Payments, then Offline Payments.
3. Enable offline payments.
4. Set the per-transaction limit (for example $50 or $100) and any total offline limit offered.
5. Confirm the setting has synced to each device.

It has to be done in advance. A device that is already offline cannot fetch the new setting.

## What it cannot do

| Action | Offline |
|---|---|
| Accept a card payment under the limit | Yes, queued |
| Accept a card payment over the limit | Declined |
| Authorize the card with the bank | No, deferred until reconnect |
| Refund or void | No |
| Process gift card or loyalty | Generally no |
| Online orders | No, they never reach the device |
| Sync menu changes | No |

## The risk you carry

An offline sale is a promise to submit the card later. If the card is declined when it is submitted (insufficient funds, cancelled, over limit, stolen), the sale fails and the goods are gone. Clover cannot verify what it could not reach. The per-transaction limit is your loss cap per sale. Set it at the ticket size you can afford to write off, not at your largest ticket.

Time matters too. Queued transactions are held for a limited window, commonly cited as up to 7 days, and expire if not submitted. Reconnect the same day; a phone hotspot or the device's LTE will do it.

## Which devices

| Device | Offline payments | Notes |
|---|---|---|
| Flex | Yes | Also has LTE, so true outages are rare |
| Flex Pocket | Yes | Same |
| Mini | Yes | LTE optional; add it |
| Station Duo, Solo | Designed for continuous connection | Use Ethernet plus Wi-Fi plus LTE, and keep a Flex on cellular as the backup |
| Compact | Check configuration with dealer | LTE optional |
| Go | Depends on the phone's connection | Phone hotspot is the fallback |

## The better first defense: cellular

Offline mode is the last resort. The first is a second path to the internet. Flex and Mini have LTE radios; enable cellular data on them and a Wi-Fi outage does not become a payments outage. For a Station, connect Ethernet and Wi-Fi and keep a Flex on LTE at the counter. Most "Clover is down" days at merchants we support are Wi-Fi router days, and LTE ends them.

## During an outage

1. Confirm it is your connection and not Clover: the Clover status page and a phone check of another site.
2. Switch devices to LTE or a hotspot if available.
3. If neither, offline mode carries you under the limit. Note cash sales as usual.
4. Hold refunds until reconnected.
5. When back online, confirm the queue submitted and check for declines in the transactions report.

We configure all of this on install and check it on every support visit. The install checklist is on [Clover setup and training](/clover/setup-and-training).

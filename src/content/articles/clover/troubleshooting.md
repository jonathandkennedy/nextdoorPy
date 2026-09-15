---
title: "Clover POS Troubleshooting (2026): Printer, Wi-Fi, Frozen Screen, Tap, Battery and Decline Fixes"
h1: "Clover Troubleshooting: Fixes for the Printer, Connectivity, Frozen Devices, Tap Failures and Declines"
description: "Step-by-step fixes for the Clover problems merchants hit most: printers not printing, offline errors, frozen devices, tap and chip failures, Flex charging, and declines."
category: clover
published: 2026-09-15
updated: 2026-09-15
tldr:
  - "Most Clover problems are one of five things: paper or a stuck print queue, the internet connection, a device that needs a restart, a dirty or misused card reader, or a decline from the customer's bank. Each has a two-minute fix that does not need a support call."
  - "The Diagnostics app on the device home screen shows printer status and lets you clear or retry the print queue. Register, then Devices, tests and refreshes kitchen printer and KDS connections. Power-cycling fixes most of the rest."
  - "Call Clover support at 1-855-853-8340 (24/7) or your dealer when a device fails repeatedly, a printer is physically damaged, or a Flex will not charge; those are replacement cases."
keywords: ["clover pos troubleshooting", "clover printer not printing", "clover flex troubleshooting", "clover kitchen printer offline", "clover frozen screen", "clover tap not working", "clover flex not charging", "clover error"]
faq:
  - q: "Why is my Clover printer not printing?"
    a: "In order: paper out or loaded backwards, a stuck print queue, a lost connection to a kitchen printer, or a dirty print head. Load 2 1/4-inch thermal paper with the roll feeding from underneath, open Diagnostics on the home screen to check status and Clear Queue then Retry Print Jobs, use Register then Devices to Test Print a kitchen printer, and power-cycle the printer."
  - q: "How do I restart a Clover?"
    a: "Station and Mini: unplug the power, wait ten seconds, plug back in. Flex: hold the power button until the restart menu or logo appears; if it is unresponsive with a dead battery, dock it for ten minutes then hold power. Restarts do not lose your menu or transactions."
  - q: "Why does my Clover say offline?"
    a: "It has lost its internet connection. Check the router and other devices on the same Wi-Fi first. On a Flex or Mini, switch to LTE in the network settings. On a Station, reseat the Ethernet cable or reconnect Wi-Fi under Setup. If offline payments were enabled beforehand, card sales under the limit continue and sync later."
  - q: "Why is tap to pay not working on my Clover?"
    a: "Hold the card or phone flat over the NFC area on the customer screen or Flex for a full two seconds. Check that contactless is enabled in payment settings and the reader surface is clean. A single failure is usually the card or phone; if every tap fails, restart the device. If chip also fails, it is a connectivity or processor issue."
  - q: "What do I do about a declined card on Clover?"
    a: "A decline comes from the customer's bank, not from Clover. Try inserting the chip instead of tapping, then ask for another card. Repeated declines on all cards mean a connection or account problem: check connectivity, then call your processor. Do not run the same card repeatedly; each attempt can trigger the bank's fraud block."
cta:
  heading: "Stuck? Text a photo of the screen."
  body: "Our merchants text us a photo of the error and get a call back with the fix, or a replacement device if it is hardware. Not our merchant? The steps above solve most problems; for pricing questions Clover cannot answer, text a statement."
  smsBody: "Hi, my Clover has a problem. Here is a photo:"
related: ["clover/support", "clover/offline-mode", "clover/how-to-use-clover", "clover/setup-and-training"]
---

Clover hardware is reliable, which means most support calls are not hardware. They are paper, a router, a device that has not been restarted in six months, a card held wrong, or a bank saying no. Here are the fixes, in the order to try them.

## Receipt printer not printing (Station, Mini, Flex)

1. **Paper.** 2 1/4-inch thermal paper, glossy side toward the print head, roll feeding from underneath. The Flex takes the shorter roll that fits its compartment. A roll loaded backwards prints blank.
2. **Queue.** On the device home screen open Diagnostics. Check printer status. Tap Clear Queue to drop stuck jobs, then Retry Print Jobs after fixing the cause.
3. **Restart.** Power-cycle the device.
4. **Print head.** With the device off, wipe the print head with a dry lint-free cloth. Dust and paper residue cause faint or blank prints.
5. **Cover and sensor.** Close the paper door fully; a half-closed door reports paper out.

If the printer mechanism grinds or the paper will not feed, it is a hardware case.

## Kitchen printer or KDS not receiving tickets

1. Register, then Devices. Find the printer or display. Tap Test Print (printer) or check status (KDS). Tap Refresh Connection.
2. Check the printer has power and a link light on the Ethernet port, or is on the right Wi-Fi network.
3. Confirm the item's category is routed to that printer in the printer settings (a new category with no routing prints nowhere).
4. Power-cycle the printer. Power-cycle the router if several devices dropped.
5. Reassign the printer under Devices if it shows disconnected after restart.

## Device offline or not connecting

- **Router first.** If phones on the same Wi-Fi have no internet, it is the router; restart it.
- **Flex and Mini:** Settings, network, switch to LTE. If LTE is off, turn it on; if there is no LTE plan on the device, ask your dealer.
- **Station:** reseat the Ethernet cable at both ends; or Setup, Wi-Fi, reconnect. Ethernet plus Wi-Fi backup is the recommended setup.
- **Offline mode:** if it was enabled in advance, card sales under the limit continue and sync when the connection returns. If it was not, the device cannot take cards until it reconnects. Enable it after this outage; steps on [Clover offline mode](/clover/offline-mode).

## Frozen screen or will not turn on

- **Station, Mini:** unplug power, wait ten seconds, plug in. A Station that freezes on a specific app: force-close the app from the recent apps view first.
- **Flex:** hold the power button for several seconds until it restarts. If nothing happens, the battery is flat: dock it or connect the charger for ten minutes, then hold power. A Flex that will not charge on a known-good dock is a hardware case.
- **Repeat freezes:** note the app and time, restart, and open a case for replacement through your dealer.

## Tap, chip and swipe failures

- **Tap:** card or phone flat over the NFC area (top of the customer screen on a Duo, the reader area on Mini and Flex), held for two seconds. Wallet users need the phone unlocked. Clean the surface.
- **Chip:** insert fully, chip first, leave it in until prompted. A chip that reads on other devices and not yours means a dirty or worn reader: a card-reader cleaning card fixes most.
- **Swipe:** stripe toward the reader, steady speed. Swipe fallback may be disabled for chip cards by design; use the chip.
- **Every card failing:** connectivity or account issue, not the reader. Check the connection, then call your processor.

## Declines

A decline is the customer's bank answering no. Insert the chip instead of tapping, then ask for another card. Do not retry the same card repeatedly; banks block cards after repeated attempts. If every card from every customer declines, it is your account or connection: check the device is online, then call your processor. Under dual pricing, a decline is handled the same way and the customer can pay cash at the cash price.

## Flex battery and charging

Rated about 8 hours; a full-day shift needs a mid-day dock. Dock contacts must be clean and the Flex seated fully; a wobbling Flex on the dock does not charge. Use Clover's charger; third-party USB chargers often underpower it. A Flex that drains in two hours or will not hold a charge is a battery case for replacement.

## Slow device

Close apps you are not using, restart nightly (a scheduled restart setting exists on some devices), and remove App Market apps you no longer pay for. A Station with dozens of apps installed slows down.

## When to call

Clover support, 1-855-853-8340, 24/7, for device faults you cannot clear. Your dealer for replacements and for any question involving money. Who handles what is on the [Clover support page](/clover/support).

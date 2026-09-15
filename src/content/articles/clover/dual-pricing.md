---
title: "Dual Pricing on Clover POS: Setup, Signage, Receipts and Rules (2026)"
h1: "Dual Pricing on Clover: How It Is Set Up and What Customers See"
description: "How dual pricing runs on Clover Station, Mini and Flex: what the customer screen and receipt show, card-brand rules, signage, tips, and how it differs from a surcharge."
category: clover
published: 2026-09-15
updated: 2026-09-15
tldr:
  - "Clover supports dual pricing when the processor enables it at the merchant account level. Every item shows a cash price and a card price, the customer-facing screen displays both before the card is tapped, and the receipt shows the price paid and the payment method."
  - "Done this way the merchant pays $0 in processing on card sales. It applies to credit and debit equally, which a surcharge cannot do, and it is the compliant route in California where surcharging is restricted."
  - "It takes about a day to configure. Signage at the entrance and register is required, and staff need a one-sentence explanation. Most of our Clover merchants run it."
keywords: ["clover dual pricing", "clover cash discount", "clover surcharge", "dual pricing pos", "cash discount program clover"]
faq:
  - q: "Does Clover have a dual pricing feature built in?"
    a: "Dual pricing on Clover is enabled through the processor's configuration of the merchant account and, on some setups, an approved App Market app. It is not a toggle in the standard Clover settings menu. Any Clover dealer that offers dual pricing sets it up for you during boarding."
  - q: "What does the customer see on Clover with dual pricing?"
    a: "On a Station Duo or Mini, the customer-facing screen shows the cash total and the card total side by side before payment. On a Flex the merchant turns the screen to the customer. The receipt lists the price paid and labels the payment type. There is no line item called 'fee' or 'surcharge.'"
  - q: "Can I run dual pricing on tips?"
    a: "Tips are entered on the card total the customer sees. The tip amount is passed through to staff in full. The processing cost of the tip is covered the same way as the sale, so the merchant does not absorb it."
  - q: "Is a Clover surcharge app the same thing?"
    a: "No. Surcharge apps add a percentage at checkout on top of one posted price. They cannot apply to debit cards, are capped at 3% for Visa, require 30 days' notice to your acquirer, and are restricted in California, Connecticut, Massachusetts and Maine. Dual pricing displays two prices, applies to all card types, and has no cap tied to a surcharge rule."
  - q: "Does dual pricing work with Clover online ordering?"
    a: "Online orders are card-only, so the card price is the price shown. Menus in Clover Online Ordering and third-party apps display the card price. Some merchants keep a single online price and run dual pricing in store only, which is fine as long as each channel is internally consistent."
cta:
  heading: "See dual pricing on a Clover before you commit"
  body: "We can walk you through a live Station or Flex over a video call, or in person in San Diego and LA. You see the customer screen, the receipt and the signage. Then decide."
  smsBody: "Hi, I want to see how dual pricing looks on Clover."
related: ["dual-pricing/dual-pricing-vs-surcharging-vs-cash-discount", "dual-pricing/is-dual-pricing-legal-in-california", "clover/pricing"]
---

Dual pricing is the reason most of our Clover merchants pay nothing in processing. It is also the feature most often set up wrong by dealers in a hurry, which is how businesses end up with a "3.99% fee" line on receipts and a letter from Visa. This page shows how it is supposed to work on Clover, what the customer sees, and what the rules require.

## What dual pricing is, in one paragraph

Every item has two prices. The cash price is your real price. The card price is the cash price plus the cost of card acceptance, typically 3% to 4%. Both are displayed before the customer chooses how to pay. The customer picks. If they pay by card, the card price covers the processing cost and you net the cash price. If they pay cash, you get the cash price. Either way, your processing cost on the sale is zero.

That is different from a surcharge, where one price is posted and a fee is added at checkout, and different from a "cash discount" where the card price is posted and a discount is taken for cash. The three models are compared in [dual pricing vs surcharging vs cash discount](/dual-pricing/dual-pricing-vs-surcharging-vs-cash-discount).

## How it is configured on Clover

Dual pricing is turned on at the processor and merchant account level when the account is boarded. The dealer sets the card price percentage, and the Clover devices on that account display both prices automatically. Depending on the processor, an approved App Market app handles the display and receipt formatting.

What we configure on a typical install:

1. **The percentage.** Usually 3.5% to 3.99%. It is set once and applies to every item.
2. **Customer-facing display.** Station Duo and Mini show both totals on the customer screen before payment. Flex shows both totals on the merchant screen, which is turned to the customer.
3. **Receipts.** The receipt shows the price paid and the tender type. It does not show a "fee." This is the detail that separates compliant dual pricing from a surcharge.
4. **Menus and shelf labels.** Restaurants add a line to the menu: "Prices shown are cash prices. Card prices are 3.99% higher." Retail uses shelf tags or a register sign. Either way the two-price disclosure exists before the customer reaches the terminal.
5. **Signage.** Entrance and register. We supply the signs.
6. **Staff script.** "We show a cash price and a card price. The card price covers the processing cost. Which would you like?" That is the whole thing.

Setup takes about a day. If you are replacing another POS, the menu or inventory import takes longer than the dual pricing configuration.

## What the customer sees, step by step

| Step | Station Duo / Mini | Flex |
|---|---|---|
| Item rung up | Cash price on merchant screen, both prices on customer screen | Both prices on the single screen |
| Tip prompt (restaurants) | Tip options calculated on the card total shown | Same |
| Payment | Customer taps, dips or pays cash | Same |
| Receipt | Amount paid, tender type, no fee line | Same |

Customers ask about it for the first week or two. In practice, the price difference on a $30 ticket is about $1.10, and almost nobody changes behavior. Gas stations have run two prices for decades.

## Rules it has to meet

The card brands allow dual pricing. The requirements come down to disclosure:

- Both prices are visible before the customer selects a payment method.
- The card price is the price actually charged. No additional fee appears at checkout.
- The receipt reflects the price paid, not a base price plus a fee.
- Debit and credit are treated the same.

Compare that to surcharging under 2026 card-brand rules: capped at 3% for Visa, never on debit or prepaid, 30 days' written notice to your acquirer, and restricted or prohibited in several states. Dual pricing has none of those constraints because nothing is added. It is also the model that works in California, where adding a fee at the register runs into the state's price-transparency law. Details in [is dual pricing legal in California](/dual-pricing/is-dual-pricing-legal-in-california). This is a description of the rules as we apply them, not legal advice.

## Where dual pricing on Clover goes wrong

- **Receipts that say "fee."** A dealer configures a surcharge app and calls it dual pricing. The receipt shows "Non-cash adjustment 3.99%." That is a surcharge, with all of a surcharge's restrictions.
- **Card price only on the terminal.** If the menu and shelf show one price and the terminal shows a higher one, the customer did not see two prices before choosing. Menu and signage matter.
- **Applying it to online orders inconsistently.** Pick the card price for online channels and keep it consistent.
- **No staff script.** The first "why is it more on card?" from a customer, answered badly, becomes a review.

## Cost example on Clover

A cafe on a Clover Mini doing $22,000 a month in cards, average ticket $11.

| | Clover direct, Counter Service plan | Dual pricing through us |
|---|---|---|
| Software | $59.95 | $59.95 |
| Processing at 2.3% + 10¢ | $506 + $200 = $706 | $0 to the merchant |
| Hardware | $849 outright | Placed at no charge |
| Monthly cost of taking cards | About $766 | About $60 |

Over a year the cafe keeps roughly $8,400 that would otherwise go to processing. That is the entire case for running dual pricing, and it is why we lead with it.

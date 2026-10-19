---
title: "Dual Pricing on Invoices: Stop Paying Card Fees on Invoiced Payments"
h1: "Dual Pricing on Invoices: How to Stop Paying Credit Card Fees on What You Bill"
description: "How to avoid credit card fees on invoices with dual pricing: sample wording, QuickBooks limits, Hyfin sync, the compliance rules, and a contractor's annual savings."
category: dual-pricing
published: 2026-10-19
updated: 2026-10-19
tldr:
  - "To avoid credit card fees on invoices, dual-price them: the invoice shows a bank transfer or check total and a card total, or shows the card total as the price with a stated discount for paying by ACH or check. The customer chooses, and the card total funds the card cost, so the business stops paying 2.99% to 3.5% on invoiced card payments."
  - "Do not add a 'credit card fee' or 'processing fee' line to an invoice. A fee added for paying by card is a surcharge: capped at 3% for Visa, prohibited on debit cards, 30 days' notice to your acquirer, and restricted for consumer credit card sales in California. A discount for paying by bank is the compliant version of the same idea."
  - "QuickBooks Online does not automatically dual-price an invoice. Its own options are a manual discount, a manual fee line, or, on some accounts, a surcharge setting. We use Hyfin to send dual-priced invoices by text and email and sync payments back to QuickBooks Online or Desktop. This is how we set it up, not legal advice."
keywords: ["dual pricing invoices", "how to avoid credit card fees on invoices", "credit card fees on invoices", "pass credit card fees to customers invoice", "quickbooks invoice credit card fee", "add credit card fee to invoice"]
faq:
  - q: "Can I add a credit card fee to an invoice?"
    a: "You can, but it is a surcharge. Visa caps surcharges at 3%, they cannot be applied to debit or prepaid cards, you must give your acquirer 30 days' written notice, and California's Civil Code 1748.1 prohibits surcharges on consumers who pay by credit card. The compliant alternative is to make the card total the invoice price and offer a discount for paying by ACH or check."
  - q: "How do I avoid paying credit card fees on invoices?"
    a: "Show two totals on the invoice, one for bank transfer or check and one for card, so the card total covers the cost of acceptance. Add an ACH option with a flat per-payment fee so customers have a cheap way to pay. Businesses that keep a single price can still lower the cost with interchange-plus pricing and Level 2 and 3 data on commercial cards."
  - q: "Does QuickBooks let me charge a credit card fee on invoices?"
    a: "Intuit staff said in 2024 that QuickBooks Online could not automatically apply a card fee or a payment-method discount, and suggested adding a fee or discount line by hand. In 2026 Intuit described a percentage surcharging setting under Invoice Payments that only appears on accounts where QuickBooks Payments has enabled it. Both are surcharges, with the rules that come with surcharging."
  - q: "What should the invoice say?"
    a: "Something like: Pay by bank transfer (ACH) or check: $4,800.00. Pay by credit or debit card: $4,991.52. Our prices include the cost of card acceptance; paying by bank transfer or check saves $191.52. No line called fee, surcharge or convenience fee."
  - q: "Do debit cards get the bank transfer price?"
    a: "No. A debit card is a card and pays the card total. The lower total is for ACH, eCheck and paper checks. Charging debit and credit the same is part of what keeps the program a discount rather than a surcharge."
  - q: "Will customers push back?"
    a: "A few ask once. Business customers on company cards usually pay the card total without comment, and many others switch to ACH, which also gets you paid faster than a mailed check. A one-line answer covers most questions: the invoice total is our price, and paying by bank costs us less, so you get a discount."
cta:
  heading: "See what dual-priced invoices would save you"
  body: "Text your monthly invoiced volume and how customers pay today. We reply with what card fees cost you now, what a dual-priced invoice would look like to your customers, and how it syncs to QuickBooks."
  smsBody: "Hi, I want to stop paying credit card fees on my invoices."
related: ["dual-pricing/hosted-payment-page", "quickbooks/credit-card-processing-fees", "dual-pricing/is-dual-pricing-legal-in-california", "gateways/ach-payment-gateway"]
---

Invoices are where card fees hurt most. The tickets are large, the payments are card-not-present, and a growing share of business customers pay on rewards or corporate cards. A contractor or distributor can easily send $10,000 to $20,000 a year to card processing on invoiced payments alone. Dual pricing fixes that the same way it does at a register: the invoice shows a bank transfer or check price and a card price, the customer chooses, and the card price covers the cost of taking the card. This page covers why invoiced card payments are expensive, how to word the invoice, what QuickBooks does and does not do, how we set it up with Hyfin, and the rules that keep it compliant.

## Why card payments on invoices cost so much

Three things stack up on an invoiced card payment.

**It is card-not-present.** When a customer pays an invoice from a link or reads a card number over the phone, the card is not in front of you. The card networks charge higher interchange for card-not-present payments because fraud risk is higher, and keyed payments are often priced higher still. QuickBooks Payments, for example, charges 2.99% for cards paid online or by invoice and 3.5% for keyed cards, against 2.5% for a card tapped in person.

**Business customers pay with business cards.** Commercial, corporate and purchasing cards carry the highest interchange of any card type. Recent Visa schedules have put a commercial card paid card-not-present at about 2.7% plus 10 cents before the processor's markup. Sending Level 2 and Level 3 data (tax amount, PO number, line items) can bring that down by roughly 0.5% to 1% on qualifying cards, but only on interchange-plus pricing and only through a gateway that passes the data. See [Level 2 and Level 3 processing](/gateways/level-3-processing).

**The tickets are large.** A percentage on a $300 restaurant bill is a few dollars. A percentage on an $8,000 progress payment is $240.

The full QuickBooks rate table and what it costs on real volume is in [QuickBooks credit card processing fees](/quickbooks/credit-card-processing-fees).

## Why "add a credit card fee to the invoice" is the wrong fix

The most common search on this topic is how to add a credit card fee to an invoice. The usual answer online is: create a service item called "Processing Fee" and add it as a line. That is a surcharge, and it carries every surcharge rule:

- **Capped at 3% for Visa**, and never more than your actual cost of acceptance.
- **Prohibited on debit and prepaid cards**, even when they are run as credit. A fee line you add before you know which card the customer will use is a problem from the start.
- **30 days' written notice to your acquirer** before you begin.
- **Restricted by state law.** California's Civil Code 1748.1 prohibits a retailer from imposing a surcharge on a consumer who pays by credit card instead of cash, check or similar means. Connecticut, Massachusetts and Maine also restrict surcharging.
- **It reads as a penalty.** Customers see a line called "fee" and feel charged for something.

The compliant version of the same idea is a discount for paying by bank. The card total is your price. Paying by ACH or check takes money off. California's 1748.1 says so directly: a retailer may offer discounts to induce payment by cash, check or other means not involving a credit card, provided the discount is offered to all prospective buyers. The differences between the models are laid out in [dual pricing vs surcharging vs cash discount](/dual-pricing/dual-pricing-vs-surcharging-vs-cash-discount).

## Two ways to dual-price an invoice

### Option 1: two totals

The invoice shows both totals at the bottom, labeled by payment method. This is the clearest version and the one we recommend.

```
Amount due
Pay by bank transfer (ACH) or check:   $4,800.00
Pay by credit or debit card:            $4,991.52

Our prices include the cost of card acceptance.
Paying by bank transfer or check saves $191.52.
Terms: Net 15. Either amount is due by November 3, 2026.
```

### Option 2: card total with a stated ACH discount

The invoice total is the card price, and the discount for bank payment is stated right under it. Some customers' accounts payable systems prefer one total, which is when this version helps.

```
Invoice total:                          $4,991.52

Pay by bank transfer (ACH) or check and pay $4,800.00.
That is a $191.52 discount for paying without a card.
Credit and debit cards are charged the invoice total.
Terms: Net 15.
```

### Wording to avoid

- "3% credit card processing fee"
- "Convenience fee for card payments"
- "Non-cash adjustment"
- "Card payments subject to surcharge"

Any of these on top of a base price turns the program into a surcharge, whatever the rest of the invoice says.

### Payment terms

Keep the bank price available for the whole payment term, not just for early payment. If you also offer an early-payment discount (such as 2/10 net 30), state it separately so the customer can see each discount and what it is for. Late fees, deposits and retainage work the same as before. Dual pricing changes the method price, not your terms.

## The compliance rules, in one list

This is how we set it up, not legal advice. If your situation is unusual, ask a lawyer.

1. **Two totals, or the card total with a stated bank discount**, visible on the invoice before the customer pays.
2. **No line called fee, surcharge, convenience fee or adjustment.**
3. **Debit cards pay the card total.** The bank price is for ACH, eCheck and paper check.
4. **Charge exactly the amount shown** for the method used, and show the amount paid and method on the receipt.
5. **Keep the card price close to your cost of acceptance.** Most programs run 3.5% to 3.99%.
6. **Offer the discount to every customer**, as 1748.1 requires for consumer sales.
7. **In California, show the full price up front.** SB 478, effective July 1, 2024, prohibits advertising or offering a price that leaves out mandatory fees. The Attorney General's guidance says a card fee the customer can avoid by paying another way is not mandatory, but a card fee is mandatory if the business accepts only cards. Showing both totals on the invoice avoids the question.

Both California laws are written for consumer transactions. Business-to-business invoices may fall outside them, but we set B2B invoices up the same way because it is clearer for customers and it keeps you inside card-brand rules everywhere. More on the state rules is in [is dual pricing legal in California](/dual-pricing/is-dual-pricing-legal-in-california).

## What QuickBooks Online does and does not do

QuickBooks Payments rates as of April 30, 2026: 2.99% for cards paid online or by invoice, 3.5% for keyed cards, and 1% for ACH bank transfers with a $1 minimum and no cap. Intuit invites businesses over $2,500 a month to call for up to 25% off.

Here is what we could confirm from Intuit's own answers, and what we could not:

| Task | QuickBooks Online natively |
|---|---|
| Let the customer pay by card, bank transfer or both | Yes, set in Invoice Payments, and editable on each invoice |
| Add a discount to an invoice | Yes, once the Discount field is turned on in Sales settings, entered by hand |
| Apply a discount automatically when the customer pays by ACH | No. Intuit staff said in September 2024 that a payment-type discount is unavailable and suggested adding it by hand |
| Show two totals and charge whichever matches the method chosen | Not that we could find |
| Add a card fee automatically | In 2024 Intuit said no and suggested a manual "Processing Fee" line. In August 2026 Intuit staff described a percentage surcharging setting under Invoice Payments, for card, ACH or both, that only appears on accounts where QuickBooks Payments has enabled it |

Both of QuickBooks' fee options are surcharges. The manual line is a surcharge you type in. The surcharging setting is a surcharge applied for you, with Intuit's own compliance terms to accept. Neither turns an invoice into a dual-priced invoice, and in California a surcharge on a consumer credit card payment is the thing 1748.1 prohibits.

You can dual-price in plain QuickBooks by hand: put both totals in the invoice message, invoice at the card total, and enter a discount when a customer pays by ACH or check. It works for a handful of invoices a month. It does not scale, and the 1% uncapped ACH still costs $48 on a $4,800 invoice.

## How we set it up with Hyfin and QuickBooks

For businesses that invoice from QuickBooks, we install Hyfin. What it does in our setups:

- **Sends invoices by text and email** with a pay link. Text invoices get read and paid faster than emailed ones.
- **Takes card, ACH and eCheck** on the same pay page.
- **Dual-priced invoices**, with the bank transfer amount and the card amount side by side. The customer picks and the business nets the bank transfer amount either way.
- **Two-way sync with QuickBooks Online and Desktop.** The invoice goes out from your QuickBooks data, the payment posts back against the invoice, and the deposit matches for reconciliation.
- **Recurring billing, deposits and progress payments** for maintenance plans and staged jobs.

Your QuickBooks file, customer list, invoice template and numbering stay as they are. Most businesses are live in two to three days, with a 30-minute screen share for the office. We work out with you and your bookkeeper how the card price difference is recorded in your books before the first invoice goes out.

Behind the pay link, card processing and ACH run through a merchant account and gateway such as [accept.blue](/gateways/accept-blue), with ACH at a flat per-item fee. For payments that start from your website or a payment link instead of an invoice, the same model is covered in [dual pricing on a hosted payment page](/dual-pricing/hosted-payment-page). ACH timing and return codes are on the [ACH payment gateway](/gateways/ach-payment-gateway) page.

## Worked example: a contractor's month of invoices

An electrical contractor sends 30 invoices a month averaging $2,000, for $60,000 invoiced. Today 60% is paid by card and 40% by ACH through QuickBooks Payments. Under dual pricing we assume some card payers move to ACH, to an even split. ACH on a merchant account is shown at a flat $1 per payment for illustration. Gateway and platform monthly fees are quoted separately and not included.

| | QuickBooks Payments today | Interchange-plus, one price | Dual-priced invoices |
|---|---|---|---|
| Card payments | 18 invoices, $36,000 | 18 invoices, $36,000 | 15 invoices, $31,200 at card price |
| Card cost to the business | $1,076 at 2.99% | About $760 to $900 | $0, funded by the card price |
| ACH payments | 12 invoices, $24,000 | 12 invoices, $24,000 | 15 invoices, $30,000 |
| ACH cost | $240 at 1% | $12 | $15 |
| Monthly cost | $1,316 | About $770 to $910 | About $15 |
| Annual cost | About $15,800 | About $9,300 to $10,900 | About $180 |
| Annual saving vs today | | About $4,900 to $6,500 | About $15,600 |

The card price on the 15 card invoices is the $2,000 bank price plus 3.99%, or $2,079.80 each. The business nets about $2,000 on every invoice, whichever way it is paid.

For a B2B distributor with a heavier commercial card mix, the picture is the same with bigger numbers, because commercial cards cost more to accept. Under dual pricing the card price funds it either way. Without dual pricing, Level 2 and 3 data is the main lever.

## Objections customers raise, and what to say

**"Why are you charging me a card fee?"**
"There is no fee. The invoice total is our price. Paying by bank transfer or check costs us less, so you get a discount for it."

**"My other suppliers don't charge more for cards."**
"Most of them build card costs into prices for everyone. We show it, so customers who pay by bank are not paying for card processing."

**"I want my card points."**
"That is what the card total is for. Pay it by card and the points are yours."

**"I'm paying with a debit card. That's the same as cash."**
"It still runs as a card and costs us a card fee. ACH from the same bank account gets the lower total."

**"Our accounts payable team only pays by corporate card."**
"No problem. The card total is on the invoice, and we can send the PO number and line-item detail your card program needs."

**"I don't want to give you my bank details."**
"You enter them on the payment processor's secure page, not in an email or on a form in our office. A paper check gets the same price if you prefer."

**"Can you give me the bank price on a card this once?"**
"We keep it the same for every customer. The bank price is there any time you pay by ACH or check."

Train the office on these once. After the first month the questions mostly stop.

## Next step

Send a recent processing statement or a QuickBooks Payments fee report through our [free statement analysis](/free-statement-analysis). We reply with what invoiced card payments cost you now, what interchange-plus would cost, and what a dual-priced invoice would look like. The program overview is on our [dual pricing](/dual-pricing) page.

---
title: "Dual Pricing on a Hosted Payment Page: Show an ACH Price and a Card Price Online"
h1: "Dual Pricing Online: An ACH Price and a Card Price on Your Payment Page"
description: "How dual pricing works on an online payment page that takes ACH and cards: what customers see, card-brand and California rules, ACH risks, and a $2,500 worked example."
category: dual-pricing
published: 2026-10-19
updated: 2026-10-19
tldr:
  - "Dual pricing online means your payment page or payment link shows two totals before the customer picks a method: an ACH (bank transfer) price and a card price. The ACH price is the discounted price. The card price is the regular price and covers the cost of card acceptance, so the business nets about the same either way and stops paying card fees out of margin."
  - "It works because ACH costs a flat amount per payment, often around $1 on a merchant account, while a card online costs 2.5% to 3.5% or more. On a $2,500 order that is about $1 against $75 to $90."
  - "The compliant framing is a discount for paying by bank, not a fee for paying by card. Show both totals up front, charge exactly the card total for every card including debit, and never add a 'fee', 'surcharge' or 'non-cash adjustment' line. This is how we set it up, not legal advice."
keywords: ["dual pricing online", "dual pricing hosted payment page", "ach and credit card payment page", "ach discount", "pass credit card fees to customers online", "online payment page ach and card"]
faq:
  - q: "Can I pass credit card fees to customers online?"
    a: "You can price for it. The compliant way is dual pricing: show an ACH price and a card price before the customer chooses, and charge the card total as the regular price. Adding a separate card fee at checkout is a surcharge, which is capped at 3% for Visa, prohibited on debit cards, needs 30 days' notice to your acquirer, and is restricted for consumer credit card sales in California."
  - q: "What does the customer see on a dual-priced payment page?"
    a: "Two totals for the same order, labeled by payment method, before they enter any payment details. For example: Pay by bank (ACH) $2,500.00, Pay by card $2,599.75. They pick one, and the receipt shows the amount paid and the method. There is no fee line."
  - q: "Do debit cards get the ACH price?"
    a: "No. A debit card is a card and pays the card price. The discounted price is for ACH or eCheck payments from a bank account. Treating debit and credit the same is part of what keeps dual pricing out of surcharge territory."
  - q: "How much cheaper is ACH than a card online?"
    a: "Through a gateway on a merchant account, ACH typically costs a flat 25 cents to $1.50 per payment, or a low percentage with a cap. Cards cost a percentage of the sale, usually 2.5% to 3.5% online. On a $2,500 order that is roughly $1 for ACH against $75 or more for a card."
  - q: "What are the risks of taking ACH online?"
    a: "ACH does not authorize instantly. Funds settle in one to three business days, a payment can come back for insufficient funds within about two business days, and a consumer can claim an unauthorized debit for up to 60 days. Verify the bank account, keep the authorization record, and do not ship or release work until the payment clears."
  - q: "Which gateways can do this?"
    a: "We set it up on accept.blue and NMI, which both process cards and ACH through the same hosted payment pages, payment links and customer vault. How the two totals are presented depends on the gateway and your integration, which we confirm before boarding."
cta:
  heading: "Put an ACH price and a card price on your payment page"
  body: "Text your monthly online volume, average order and how customers pay today. We reply with what card fees cost you now, what a dual-priced payment page would look like, and which gateway fits your site."
  smsBody: "Hi, I want dual pricing with ACH and card on my online payment page."
related: ["dual-pricing/invoices", "gateways/ach-payment-gateway", "dual-pricing/is-dual-pricing-legal-in-california", "gateways/hosted-payment-page-and-pci"]
---

Dual pricing at a register is familiar: a cash price and a card price, posted side by side. Online there is no cash, but there is something better for the business: ACH, a direct bank payment that costs a flat amount instead of a percentage. Put an ACH price and a card price on your payment page, let the customer pick, and the card cost stops coming out of your margin. This page covers how it works on a hosted payment page or payment link, what the customer sees, the card-brand and California rules, the risks of ACH, and how we set it up.

## How dual pricing works on a payment page

A hosted payment page is a checkout page served by your gateway, not your website. The customer arrives from a button on your site, an emailed or texted payment link, or an invoice. Because the card and bank details are entered on the gateway's page, your website never touches them, which keeps most businesses on the shortest PCI questionnaire. That part is covered on our [hosted payment pages and PCI scope](/gateways/hosted-payment-page-and-pci) page.

Dual pricing adds one thing to that page: two totals.

1. **The regular price is the card price.** That is the price you quote, the price on the order, and the amount charged when the customer pays by card.
2. **The ACH price is the discounted price.** It is the card price less the discount for paying from a bank account.
3. **Both totals are visible before the customer enters payment details.** The customer chooses the method, sees the matching total, and pays it.
4. **The receipt shows the amount paid and the method.** No fee line, no adjustment line.

The business nets about the same amount either way. On ACH it receives the ACH price less a small flat ACH fee. On a card it receives the card price, and the difference between the two prices funds the cost of card acceptance.

## What the customer sees

On a $2,500 order with a 3.99% card price, a dual-priced page reads like this:

| Payment method | Total |
|---|---|
| Pay by bank (ACH / eCheck) | $2,500.00 |
| Pay by credit or debit card | $2,599.75 |

Under the totals, one sentence does the explaining: "Our prices include the cost of card acceptance. Pay by bank transfer and save $99.75." That is a discount for using a cheaper method, stated in plain words, before the customer commits.

A customer who wants card points or needs to pay on a company card pays $2,599.75 and moves on. A customer who would rather keep $99.75 pays by bank. Either way, nobody is surprised at the end of checkout.

## Why ACH is so much cheaper than a card

Cards are priced as a percentage of the sale. Online and keyed card payments are card-not-present, which carries higher interchange than tapping a card at a counter because the fraud risk is higher. All-in, a small business usually pays 2.5% to 3.5% on an online card payment, and more on rewards and commercial cards.

ACH is priced per item. Through a gateway on a merchant account it is typically a flat 25 cents to $1.50 per payment, or a low percentage with a cap. The ACH network moves money between bank accounts without the card networks, so there is no percentage to pay. Our own ACH pricing is a flat per-item fee.

| Order size | Card at 2.99% | Card at 3.5% | ACH at a flat $1 |
|---|---|---|---|
| $300 | $8.97 | $10.50 | $1 |
| $2,500 | $74.75 | $87.50 | $1 |
| $10,000 | $299 | $350 | $1 |

The bigger the ticket, the more a percentage costs and the more ACH saves. Costs, timing and return codes are on our [ACH payment gateway](/gateways/ach-payment-gateway) page.

## A worked example: one $2,500 order

Same order, three setups. ACH at a flat $1 per payment is used for illustration. The card price is 3.99% above the ACH price.

| | Card only, one price (today) | Dual pricing, paid by card | Dual pricing, paid by ACH |
|---|---|---|---|
| Price the customer sees | $2,500.00 | $2,599.75 card total | $2,500.00 ACH total |
| Customer pays | $2,500.00 | $2,599.75 | $2,500.00 |
| Processing cost | $74.75 at 2.99% | About $99.75, funded by the card price | $1.00 |
| Business nets | $2,425.25 | About $2,500 | $2,499.00 |

Twenty orders like this a month is $50,000 in online sales. Card-only at 2.99%, the business pays about $1,495 a month, or roughly $17,900 a year. With dual pricing, the card cost is funded by the card price and the business pays only the flat ACH fees on bank payments, a few dollars a month, plus whatever gateway fee it already pays.

## How card-brand rules treat dual pricing online

Card-brand rules distinguish between adding a charge for using a card and giving a discount for using something else.

- **A surcharge** starts from one price and adds a fee when the customer pays by credit card. Visa caps it at 3%, it can never be applied to debit or prepaid cards, it requires 30 days' written notice to your acquirer, and the receipt shows it as a separate line.
- **A discount for a non-card method** starts from the regular price, which is the card price, and takes money off for paying another way. Federal law (the Durbin Amendment) protects a merchant's right to offer discounts for paying by cash, check or other methods, and the card brands permit it when it is clearly disclosed.

Dual pricing on a payment page is the second one. To keep it that way:

- **The displayed card total is the regular price.** You quote it, you invoice it, you charge it.
- **Never label the difference as a "fee", "surcharge", "convenience fee", "service fee" or "non-cash adjustment".** A line item with any of those names on top of a base price is a surcharge, whatever the program is called.
- **Debit cards pay the card price.** The discount is for paying from a bank account by ACH or eCheck, not for which kind of card is used.
- **Show both totals before the customer enters payment details.** Not after the card is entered, and not only on the receipt.
- **Keep the card price close to your cost of acceptance.** Most programs run 3.5% to 3.99%.

The full side-by-side of the three models is in [dual pricing vs surcharging vs cash discount](/dual-pricing/dual-pricing-vs-surcharging-vs-cash-discount).

A proposed Visa and Mastercard settlement with merchants received preliminary court approval in June 2026 and would loosen some surcharging and steering rules if it is finally approved. As of this writing it is not final, and it would not change state law. Dual pricing does not depend on it.

## California: Civil Code 1748.1 and SB 478

This is how we set it up, not legal advice. If your situation is unusual, ask a lawyer.

**Civil Code 1748.1** says a retailer may not impose a surcharge on a consumer who elects to pay by credit card instead of cash, check or similar means. The same subdivision says a retailer may offer discounts to induce payment by cash, check or other means not involving a credit card, provided the discount is offered to all prospective buyers. An ACH discount offered to every customer on the payment page fits that language. A card fee added at checkout does not.

**SB 478**, California's honest pricing law, took effect July 1, 2024. It prohibits advertising, displaying or offering a price that leaves out mandatory fees, other than government taxes and reasonable shipping. The Attorney General's guidance says a credit card fee is not mandatory if the customer can avoid it by paying another way, but if a business accepts only credit cards, the fee is mandatory and must be in the advertised price.

That second point matters online. Most websites take cards only. A card-only site that adds a card fee at checkout is advertising a price the customer cannot actually pay. Adding ACH as a real alternative, and showing both totals before the customer chooses, means the price the customer sees is the price the customer pays, whichever method they pick.

Both laws are written for consumer transactions. We apply the same setup to business customers anyway, because it is clearer and it costs nothing extra. California specifics are in [is dual pricing legal in California](/dual-pricing/is-dual-pricing-legal-in-california).

## ACH risks, and how to manage them

ACH is cheaper, but it is not a card. Plan for these:

- **No instant authorization.** A card tells you in two seconds whether the money is there. ACH is submitted and settles in one to three business days.
- **NSF returns.** If the account is short, the payment comes back, usually within two business days. Most gateways can retry automatically.
- **Unauthorized returns.** A consumer can dispute an ACH debit as unauthorized for up to 60 days. Business accounts have a much shorter window. Your defense is the authorization record: the checkbox, the terms shown, the timestamp and IP address, which the hosted page stores.
- **Account verification.** Nacha rules have required businesses taking online (WEB) debits to validate a bank account the first time it is used since March 2021, and new fraud-monitoring rules phased in during 2026. Instant bank verification, where the customer logs into their bank instead of typing numbers, handles most of this and cuts wrong-account returns.
- **Longer settlement.** Do not ship goods, release a deliverable or start a large job until the ACH payment has cleared.

For a business with a long-term customer and a large ticket, these are small costs. For a first-time online buyer of a $2,500 item that ships today, a card may be the better risk, and the card price covers it.

## Which businesses this fits

Dual pricing online pays off when tickets are large and customers have a bank account handy:

- **B2B sellers and distributors.** Business customers often prefer ACH already, and the ones on company cards pay the card price without complaint.
- **Contractors and trades** taking deposits and progress payments by payment link. The [contractors and service businesses](/industries/contractors-and-service) page covers the full setup.
- **Professional services.** Law firms, accountants, consultants, agencies, IT and managed services.
- **Recurring billing.** Memberships, retainers and maintenance plans, where a bank account on file does not expire. See [recurring billing](/gateways/recurring-billing).
- **High-ticket online orders.** Equipment, furniture, custom work, tuition, events.

It matters less for a store with a $35 average order, where ACH saves about a dollar and adds settlement risk. For in-person sales, see [dual pricing](/dual-pricing) at the counter.

## How we set it up on accept.blue or NMI

We place two gateways for this: [accept.blue](/gateways/accept-blue) and [NMI](/gateways/nmi). Both process cards and ACH through the same hosted payment pages, payment links, virtual terminal and tokenized customer vault.

1. **Board the account** with card processing and ACH on one merchant relationship and one bill, month to month.
2. **Configure the payment page or link** with both card and bank payment enabled, your logo and colors, and the two totals labeled by method. How the totals are presented depends on the gateway and how the payment is created (button on your site, payment link, or invoice), and we confirm the exact presentation for your setup before you go live.
3. **Set the card price** at a percentage that matches your cost of acceptance, usually 3.5% to 3.99%.
4. **Turn on bank verification and authorization capture** for ACH, and set retry rules for NSF returns.
5. **Write the disclosure sentence** for the page, the payment link message and your order confirmation.
6. **Run test payments** by card, debit card and ACH and check each receipt for the right total and no fee line.

If you also bill by invoice, the same model applies to the invoice itself. That setup, including QuickBooks, is on [dual pricing on invoices](/dual-pricing/invoices).

## Dual pricing vs surcharging online

| | Surcharge online | Dual pricing online |
|---|---|---|
| Price shown first | One price, then a fee at checkout | Two totals before the customer chooses |
| Applies to debit cards | No, prohibited | Yes, debit pays the card price |
| Cap | 3% for Visa | No surcharge cap; set near cost of acceptance |
| Notice to acquirer | 30 days in writing | None |
| California consumer sales | Restricted under 1748.1 and awkward under SB 478 | Fits 1748.1's discount allowance and SB 478's full-price rule |
| Receipt | Base price plus surcharge line | Amount paid and method |
| What it recovers | Credit cards only | All cards |

On a $2,500 order with half the card payers on debit, a 3% surcharge recovers $75 from credit payers and nothing from debit payers. Dual pricing recovers the cost on every card and moves some customers to ACH, which costs a dollar.

## Next step

Send us a recent processing statement through our [free statement analysis](/free-statement-analysis) and tell us how you take payments online. We reply with what card fees cost you today, what a dual-priced payment page would cost, and which gateway fits your website or billing software.

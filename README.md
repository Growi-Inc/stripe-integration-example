# Stripe Integration Example App

This is an example app using Growi's Stripe Integration.

## Explanation

### Tracking Script
The [layout](src/app/layout.tsx) contains the implementation of our tracking script:
```html
...
<script
    async
    src="https://cdn.growi.io/growi.js"
    data-growi={process.env.NEXT_PUBLIC_GROWI_ID}
/>
...
```

### Passing affiliate code to Stripe metadata
The [payment-link page](src/app/payment-link/page.tsx) & [create payment-link server action](src/app/payment-link/create.ts) contain an example of passing up the affiliate code to the Stripe metadata
```ts
...
const paymentLink = await stripe.paymentLinks.create({
    line_items: [
      {
        price: process.env.PRICE_ID!,
        quantity: 1,
      },
    ],
    metadata: {
      growi_affiliate_code: affiliateCode,
    },
  });
...
```

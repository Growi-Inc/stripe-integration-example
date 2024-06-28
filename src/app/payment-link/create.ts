"use server";

import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
});

export const createPaymentLink = async ({
  affiliateCode,
}: {
  affiliateCode: string | null;
}) => {
  const paymentLink = await stripe.paymentLinks.create({
    line_items: [
      {
        price: process.env.PRICE_ID!,
        quantity: 1,
      },
    ],
    // metadata on the payment link is automatically copied to the checkout session (see: https://docs.stripe.com/api/payment_links/payment_links/create#create_payment_link-metadata)
    metadata: {
      growi_affiliate_code: affiliateCode,
    },
  });

  return paymentLink.url;
};

"use client";

import React, { useCallback, useEffect } from "react";
import { createPaymentLink } from "./create";
import { useAffiliateCode } from "@/lib/use-affiliate-code";

const PaymentLinkExamplePage = () => {
  const affiliateCode = useAffiliateCode();

  const handleGoToCheckout = useCallback(async () => {
    const url = await createPaymentLink({
      affiliateCode: affiliateCode || null,
    });
    window.open(url);
  }, [affiliateCode]);

  return (
    <div>
      <button
        onClick={handleGoToCheckout}
        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Go to checkout
      </button>
    </div>
  );
};

export default PaymentLinkExamplePage;

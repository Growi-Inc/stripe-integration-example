import { useEffect, useState } from "react";

export const useAffiliateCode = () => {
  const [affiliateCode, setAffiliateCode] = useState(
    typeof window !== "undefined" ? window.growi?.affiliate_code : undefined
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleAffiliateCodeChange = () => {
      setAffiliateCode(window.growi?.affiliate_code);
    };

    window.addEventListener("affiliateCodeChange", handleAffiliateCodeChange);

    return () => {
      window.removeEventListener(
        "affiliateCodeChange",
        handleAffiliateCodeChange
      );
    };
  }, []);

  return affiliateCode;
};

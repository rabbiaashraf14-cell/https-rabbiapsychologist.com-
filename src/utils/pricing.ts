import { promotion } from "../config/promotion";

export function getDiscountedPrice(originalPrice: number): number {
  if (!isPromotionActive()) return originalPrice;
  return Math.round(originalPrice * (1 - promotion.discount / 100));
}

export function isPromotionActive(): boolean {
  if (!promotion.enabled) return false;
  const now = new Date();
  const start = new Date(promotion.startDate);
  const end = new Date(promotion.endDate);
  return now >= start && now <= end;
}

// Format: "USD 95 / AUD 145" -> "USD 62 / AUD 94"
export function formatPricingString(pricingString: string): {
  original: string;
  discounted: string | null;
  hasDiscount: boolean;
  savingsPercent: number;
} {
  if (!isPromotionActive() || pricingString.includes("Free")) {
    return {
      original: pricingString,
      discounted: null,
      hasDiscount: false,
      savingsPercent: 0
    };
  }

  // Regex to match numbers with optional "From " prefix
  const regex = /(From )?(USD|AUD) (\d+)(?:–\d+)?/g;

  let discountedString = pricingString;
  let matches = [...pricingString.matchAll(regex)];

  if (matches.length > 0) {
    matches.forEach(match => {
        const fullMatch = match[0];
        const prefix = match[1] || "";
        const currency = match[2];

        // Handle ranges like "USD 150-200"
        if (fullMatch.includes("–")) {
           const [minStr, maxStr] = fullMatch.replace(prefix + currency + " ", "").split("–");
           const min = parseInt(minStr);
           const max = parseInt(maxStr);
           const discMin = getDiscountedPrice(min);
           const discMax = getDiscountedPrice(max);
           discountedString = discountedString.replace(fullMatch, `${prefix}${currency} ${discMin}–${discMax}`);
        } else {
           const price = parseInt(match[3]);
           const discPrice = getDiscountedPrice(price);
           discountedString = discountedString.replace(fullMatch, `${prefix}${currency} ${discPrice}`);
        }
    });

    return {
      original: pricingString,
      discounted: discountedString,
      hasDiscount: true,
      savingsPercent: promotion.discount
    };
  }

  return {
    original: pricingString,
    discounted: null,
    hasDiscount: false,
    savingsPercent: 0
  };
}

import { promotion } from "../config/promotion";
import { regionalPricing, type ServiceKey } from "../data/pricing";

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

function formatNumber(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function formatRegionalPrice(serviceKey: ServiceKey, region: 'international' | 'pakistan', applyDiscount: boolean = false): {
  original: string;
  discounted: string | null;
  hasDiscount: boolean;
  savingsPercent: number;
} {
  const config = regionalPricing[serviceKey][region];
  const currency = region === 'pakistan' ? 'PKR' : '$';
  const prefix = 'prefix' in config ? config.prefix : '';
  const hasPromo = applyDiscount && isPromotionActive() && !('min' in config && config.min === 0);

  let originalStr = '';
  let discountedStr = null;

  if ('price' in config) {
    // Single price
    const priceNum = config.price;
    const formattedPrice = formatNumber(priceNum);
    originalStr = `${prefix}${currency}${currency === 'PKR' ? ' ' : ''}${formattedPrice}`;

    if (hasPromo) {
      const discPrice = getDiscountedPrice(priceNum);
      discountedStr = `${prefix}${currency}${currency === 'PKR' ? ' ' : ''}${formatNumber(discPrice)}`;
    }
  } else if ('min' in config && 'max' in config) {
    // Range price
    const minNum = config.min;
    const maxNum = config.max;
    const minStr = minNum === 0 && prefix.includes('Free') ? prefix : `${currency}${currency === 'PKR' ? ' ' : ''}${formatNumber(minNum)}${minNum !== 0 ? '–' : ''}`;

    if (minNum === 0 && prefix === 'Free–') {
       originalStr = `Free–${currency}${currency === 'PKR' ? ' ' : ''}${formatNumber(maxNum)}`;
       if (hasPromo) {
          const discMax = getDiscountedPrice(maxNum);
          discountedStr = `Free–${currency}${currency === 'PKR' ? ' ' : ''}${formatNumber(discMax)}`;
       }
    } else {
       originalStr = `${prefix}${currency}${currency === 'PKR' ? ' ' : ''}${formatNumber(minNum)}–${formatNumber(maxNum)}`;
       if (hasPromo) {
          const discMin = getDiscountedPrice(minNum);
          const discMax = getDiscountedPrice(maxNum);
          discountedStr = `${prefix}${currency}${currency === 'PKR' ? ' ' : ''}${formatNumber(discMin)}–${formatNumber(discMax)}`;
       }
    }
  }

  return {
    original: originalStr,
    discounted: discountedStr,
    hasDiscount: discountedStr !== null,
    savingsPercent: hasPromo ? promotion.discount : 0
  };
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

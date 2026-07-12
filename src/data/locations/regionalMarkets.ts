import { regions } from '../regions';

export interface RegionalMarket {
  title: string;
  slug: string;
  seoTitle: string;
  metaDescription: string;
  safePositioning: string;
  whatSupportMayInclude: string[];
  whatSupportDoesNotReplace: string[];
  whenToSeekLocalCare: string;
  providerFilterTag: string;
}

// Re-export existing regions to preserve and link them with the new location architecture.
export const regionalMarkets: RegionalMarket[] = regions;

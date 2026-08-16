# Regional Pricing Rollout Report

## 1. Files Changed
- `src/data/pricing.ts` (Central Pricing Configuration)
- `src/utils/pricing.ts` (Pricing format logic)
- `src/styles/global.css` (Added CSS for price toggles without layout shift)
- `src/layouts/BaseLayout.astro` (Injected RegionDetector)
- `src/components/global/PriceDisplay.astro` (Refactored to show regional variants using `serviceKey`)
- `src/components/global/RegionDetector.astro` (New: script to detect/persist region)
- `src/components/global/RegionSelector.astro` (New: manual region toggle)
- `src/components/home/PricingPreview.astro` (Updated to display regional prices)
- `src/pages/book.astro` (Removed hardcoded prices and discounts, replaced with dynamic `regionalPricing` variables)

## 2. Pages Migrated
All specified service and international pages have been updated to use the centralized pricing format:
- `src/pages/pricing.astro`
- `src/pages/parent-support.astro`
- `src/pages/report-review.astro`
- `src/pages/services/adhd-support.astro`
- `src/pages/services/asd-support.astro`
- `src/pages/services/behaviour-planning.astro`
- `src/pages/services/emotional-regulation-support.astro`
- `src/pages/services/school-consultation.astro`
- `src/pages/international-families/australia.astro`
- `src/pages/international-families/usa.astro`
- `src/pages/international-families/uk-europe.astro`
- `src/pages/international-families/overseas-pakistani-families.astro`

## 3. Central Pricing File
The single source of truth for pricing is now `src/data/pricing.ts` under the `regionalPricing` constant.

## 4. How Region Detection Works
The `RegionDetector.astro` component runs an inline script in the `<head>` that:
1. Checks `localStorage` for a manual preference.
2. Checks `sessionStorage` for a detected session preference.
3. If no preference exists, sets a fallback of `international` to prevent blank spaces.
4. Uses Cloudflare `1.1.1.1/cdn-cgi/trace` to get the user's country code (`loc=XX`).
5. Falls back to `get.geojs.io` if the Cloudflare trace fails.
6. If the country code is `PK`, it sets `data-pricing-region="pakistan"` on the `<html>` root element. Otherwise, it sets it to `international`.
7. CSS rules in `src/styles/global.css` toggle `display: none` on `.price-pakistan` and `.price-international` classes based on the `data-pricing-region` attribute.

## 5. How Manual Switching Works
The `RegionSelector.astro` component provides two buttons ("Pakistan 🇵🇰" and "International 🌎"). When clicked, a script modifies the `data-pricing-region` attribute on the root `<html>` element instantly, avoiding full page reloads, and simultaneously saves the chosen value.

## 6. How the Preference is Saved
The user's manual choice via `RegionSelector.astro` is saved directly into the browser's `localStorage` under the key `rabbia_pricing_region`. This ensures the choice persists across pages and upon refreshing.

## 7. Remaining Hardcoded Pricing
Extensive codebase searches were performed. All listed and documented instances of `USD`, `AUD`, and `Pricing available at` on relevant core service pages and booking templates have been eliminated. Prices are strictly loaded from `regionalPricing` inside `src/data/pricing.ts`.

## 8. Build Result
`npm run build` completes successfully. All TypeScript rules match and there are no instances of `ReferenceError` during compilation.

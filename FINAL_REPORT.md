# Regional Pricing Rollout Report

## 1. Files Changed
- `src/data/pricing.ts` (Central Pricing Configuration)
- `src/utils/pricing.ts` (Pricing format logic)
- `src/styles/global.css` (Added CSS for price toggles without layout shift)
- `src/layouts/BaseLayout.astro` (Injected RegionDetector)
- `src/components/global/PriceDisplay.astro` (Refactored to show regional variants using `serviceKey`)
- `src/components/global/RegionDetector.astro` (New: script to detect region)
- `src/components/home/PricingPreview.astro` (Updated to display regional prices)
- `src/pages/book.astro` (Removed hardcoded prices and discounts, replaced with dynamic `regionalPricing` variables)

## 2. Public Pakistan / International Selector Removed
The manual toggle (`RegionSelector.astro`) has been deleted entirely. This forces the pricing state to rely purely on geographic IP detection and clears any historical local storage override.

## 3. New Residence-Based Logic
Users living in Pakistan see localized Pakistani resident rates (`PKR`). Users residing outside of Pakistan, regardless of nationality, see international client pricing in `USD`. This logic replaces earlier instances of "regional" naming or discount-based language to accurately represent separate local rate tiers.

## 4. How Automatic Location Detection Works
The `RegionDetector.astro` component runs an inline script in the `<head>` that:
1. Checks `sessionStorage` for a detected session preference.
2. If no session preference exists, sets a fallback of `international` to prevent blank spaces.
3. Uses Cloudflare `1.1.1.1/cdn-cgi/trace` to get the user's country code (`loc=XX`).
4. Falls back to `get.geojs.io` if the Cloudflare trace fails.
5. If the country code is `PK`, it sets `data-pricing-region="pakistan"` on the `<html>` root element. Otherwise, it sets it to `international`.
6. CSS rules in `src/styles/global.css` toggle `display: none` on `.price-pakistan` and `.price-international` classes based on the `data-pricing-region` attribute.

## 5. Location Fallback
If for any reason location services fail, the inline script uses `international` as the baseline rendering tier.

## 6. Where Country of Residence is Captured
The required list field within `src/pages/book.astro` mapping out the items required to contact the team has been changed from `Country/city` to `Current country of residence`. A helpful note asking international prospects residing outside of their IP detected zone has also been provided beside the pricing summary blocks on `src/pages/book.astro` and `src/pages/pricing.astro`.

## 7. Handling of Old localStorage/cookie Region Preferences
An explicit `localStorage.removeItem('rabbia_pricing_region')` call was added inside `RegionDetector.astro`. This guarantees any returning visitors who previously saved a "Pakistan" preference while abroad will have their cache cleared automatically on load and revert to the correct residence-based location.

## 8. Can Pricing Still be Manually Switched?
No. The previous UI toggle has been fully removed. The end-user can only read what the detector defines for them or supply manual location context upon initiating contact via form/booking flow.

## 9. Pages Migrated & Checked for Consistency
All specified service and international pages have been updated to use the centralized pricing format without reference to legacy `AUD`, `USD`, or inline hardcoding.
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
- `src/pages/international-families/pakistan.astro` (Removed 'discount' language, swapped to 'Pakistan Resident Pricing')

## 10. Build Result
`npm run build` completes successfully. All TypeScript rules match and there are no instances of `ReferenceError` during compilation.

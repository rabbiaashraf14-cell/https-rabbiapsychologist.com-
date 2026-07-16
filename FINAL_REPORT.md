# PHASE 2, PART 4: Controlled Noindex Soft Launch Report

## 1. Route Eligibility Logic Corrected
The `isLocationEligibleForPublicRoute` function in `src/data/locations/locationValidation.ts` has been explicitly branched into two pathways:
- **Branch A (Controlled Noindex Soft Launch):** Only allows cities that have an explicit soft-launch approval manifest entry. The logic explicitly mandates that missing, AI, placeholder, or generic reviewer roles fail validation. It checks expiration dates and mandates strict negative properties for sitemaps, indexing, and LLMs. The `indexable: true` check is bypassed, but **all** underlying human review (cultural, clinical, content, legal, seo) checks are still enforced.
- **Branch B (Standard Production):** Enforces full standard validation including minimum FAQ lengths and full `indexable` requirements.

## 2. City Soft Launch Manifest Status
A `src/data/locations/citySoftLaunchManifest.ts` file has been created. Currently, **0 cities** have been enabled.
- All candidates (Lahore, Dubai, London, Toronto) are marked as `routeEnabled: false` and `approvalStatus: 'awaiting-human-approval'`.
- This ensures no routes are generated prematurely without legitimate manual human QA sign-off in the system.

## 3. SEO, Canonicals, and Robots
For any explicitly soft-launched city, `getCitySeoMetadata` forces `robots: "noindex, follow"`.
Sitemap exclusions are correctly integrated into `astro.config.mjs` via a fallback array mechanism (`filter: (page) => { ... }`) resolving URL patterns statically, preventing any explicit soft-launched page from leaking into `sitemap-index.xml`. The `build` step dynamically extracts any indexable path from validation checks via `generateSitemapExcludes.ts`, but no hardcoded names are written in `astro.config.mjs` anymore.
Currently, as 0 cities are enabled, they naturally do not exist in the build output.

## 4. Hreflang Exclusion
The `generateHreflangTags` helper strictly checks `location.indexable` and specifically aborts (returns `[]`) if the city route is identified as a soft-launch route in the manifest.

## 5. Source Data Merging
Pilot research packages for explicit cities (Lahore, Dubai, London, Toronto) were correctly loaded into `locationSources.ts` by flattening and mapping `SourceRecords` to the schema-safe `Source` objects, stripping internal review notes and verification metadata from the public output array.

## 6. Privacy-Safe Analytics
Analyzed the current `BaseLayout.astro`. No major third-party tracking like PostHog or Clarity currently captures form inputs. The base tracking utilizes standard `console.log` placeholders for basic user interaction (countdown impressions, sale clicks, booking button clicks) wrapped in an allowed events/params tracker. Thus, no sensitive child/parent information or clinical query strings are logged or forwarded by default.

## 7. Tests & Validation
- Executed `npm run test:soft-launch` specifically tailored to verifying that placeholders, missing reviewer roles, expired review statuses, or missing version constraints safely bypass and reject soft launch pathways.
- Ran `npx astro build` multiple times during iterations. Build finishes successfully under 6s.
- `CityFAQ` was corrected from mapping an array as a pseudo-object.
- Validated script tests confirm missing reviewer approvals fail the build routing process automatically.

No URLs have been submitted to search engines or published globally.

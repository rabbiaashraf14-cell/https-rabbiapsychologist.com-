# Global Locations Architecture

This document describes the location architecture designed for Rabbia Psychologist Child Development Services to support 500+ international city pages.

## Architecture Overview
The static-first architecture supports continent hubs, countries, cities, regional markets, multilingual URLs, and schema validation. It strictly restricts runtime sanity queries for locations to protect Vercel response times.

## Structure
- `locationTypes.ts`: Strict TypeScript interfaces for Cities, Countries, Continents, Research Sources, and Reviews.
- `continents.ts`: Defines the 6 major continent regions.
- `countries.ts`: Defines international country targets.
- `cities.ts`: Holds data for all target cities.
- `regionalMarkets.ts`: Re-exports existing global market data (`regions.ts`) to preserve existing regional URLs (e.g., Pakistan, UK & Europe).
- `locationSources.ts`: Manages scientific or official sources referencing the clinical and educational guidelines per location.
- `locationHelpers.ts`: URL paths, hreflang tags, and schema.org generation functions.
- `locationValidation.ts`: The quality gate ensuring compliance before any location is published.
- `validateLocations.ts`: Run script that exits with non-zero on validation failures.

## Adding Data
### How to add a Continent
1. Add an object to `continents.ts` (e.g., `{ id: 'c-asia', continentName: 'Asia', continentSlug: 'asia' }`).

### How to add a Country
1. Add an object to `countries.ts`. Ensure `continentSlug` matches a valid continent.

### How to add a City
1. Add a `CityLocation` object to `cities.ts`.
2. Do not leave placeholder text or empty fields without resolving.
3. Ensure to follow safety limits: physicalOfficeAvailable must only be true if an actual clinic exists. If not, disclaimers must state it is an online service.

### How to Assign a Rollout Tier
Use the `priorityTier` (1, 2, or 3) inside the `CityLocation` based on relevance to international demand or the overseas Pakistani community.

### How to Add Official Guidance & Research Papers
Add source records to `locationSources.ts`. Include full URLs, DOIs, or PMIDs. Cities referencing sources must link to legitimate guidelines.

### How to Add Localized Content
- Localized FAQs: Use `localLanguageFrequentlyAskedQuestions`.
- Cultural Context: Address specific international needs (e.g., specific expat communities or schooling expectations) in `culturalContext`.
- School Systems: Detail local IEP or special needs schooling info in `schoolSystemOverview`.

### How to create translated content
Translation paths like `/ur/locations/...` are generated dynamically via `locationHelpers.ts` based on `primaryLocale`. `translationReviewStatus` must be `approved` for a translated page to index.

## Review Statuses
Fields like `contentStatus`, `legalScopeReviewStatus`, and `seoReviewStatus` require an `approved` value to index a page.

## Indexable Status
A page becomes indexable when:
- It meets strict requirements specified in `locationValidation.ts`.
- It has clear formal-diagnosis and emergency-service disclaimers.
- All human reviews are marked `approved`.
- `published` AND `indexable` are true.

## Validation
Run `npm run validate:locations`. The system will reject duplicate IDs/slugs, mismatched relationships, lacking disclaimers, or invalid URLs. Draft/failing pages cannot enter sitemaps.

## Prohibited Claims
Do not claim:
- Fake addresses, branches, or phone numbers.
- Unlicensed legal/medical services across borders.
- Guarantee of international formal diagnosis.
- Fake reviews or ratings in LocalBusiness Schema.

## Sitemaps & The Footer
- Future sitemaps (`/sitemaps/locations-asia.xml`, etc.) will only generate loops over items where `isLocationEligibleForIndexing` passes.
- The footer placeholder (`Footer.astro`) will hold featured cities and continent links when ready.

## Duplicate Content Prevention
`validateAllLocations` ensures unique canonical paths and IDs. Content reviews (human side) must ensure regional specifics (e.g., 'Lahore' versus 'Dubai') are distinct rather than mere find-and-replace text.

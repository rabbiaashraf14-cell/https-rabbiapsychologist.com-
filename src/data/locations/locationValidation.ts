import type { CityLocation, Source } from './locationTypes';
import { continents } from './continents';
import { countries } from './countries';
import { featuredLocations } from './featuredLocations';
import { locationSources } from './locationSources';

export interface ValidationResult {
  valid: boolean;
  errors: string[];
  warnings: string[];
}


export function validateCityPlanningRecord(location: CityLocation): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  if (!location.id) errors.push('Missing unique city ID');
  if (!location.cityName) errors.push('Missing city name');
  if (!location.citySlug) errors.push('Missing unique city slug');
  if (!location.countryCode) errors.push('Missing country code');
  if (!location.geographicRegion) errors.push('Missing geographic region');
  if (!location.publicationRegion) errors.push('Missing publication region');

  if (location.priorityTier !== 1 && location.priorityTier !== 2 && location.priorityTier !== 3) {
    errors.push('Invalid priority tier');
  }

  if (location.priorityScore === undefined || location.priorityScore < 0 || location.priorityScore > 100) {
     errors.push('Missing or invalid priority score');
  }

  if (!location.priorityReasons || location.priorityReasons.length === 0) {
    errors.push('Missing priority reasons');
  }

  if (!location.publicationBatch) errors.push('Missing publication batch');

  if (location.published) errors.push('New city cannot be published');
  if (location.indexable) errors.push('New city cannot be indexable');
  if (location.legalScopeResearchRequired === undefined) errors.push('Missing legal-research status');


      if (location.relatedCitySlugs && location.relatedCitySlugs.some(slug => !slug)) {
      errors.push('Related cities that do not exist');
  }

  return { valid: errors.length === 0, errors, warnings };
}

export function isLocationEligibleForIndexing(location: CityLocation): ValidationResult {

  const errors: string[] = [];
  const warnings: string[] = [];

  // 1. Required core fields
  if (!location.id) errors.push('Missing unique city ID');
  if (!location.citySlug) errors.push('Missing unique city slug');
  if (!location.countryCode) errors.push('Missing country code');

  // 2. Valid relationships
  const countryExists = countries.some(c => c.countryCode === location.countryCode && c.countrySlug === location.countrySlug);
  if (!countryExists) errors.push('Invalid country relationship');

  const continentExists = continents.some(c => c.continentSlug === location.continentSlug);
  if (!continentExists) errors.push('Invalid continent relationship');

  if (!location.canonicalPath || !location.canonicalUrl) {
    errors.push('Missing canonical path or URL');
  }

  // 3. Service Scope & Disclaimers
  if (!location.serviceScopeStatement) errors.push('Missing complete online-service scope statement');
  if (location.physicalOfficeAvailable === undefined || location.physicalOfficeAvailable === null) {
    errors.push('Missing clear physical-location status');
  }
  if (!location.crossBorderDisclaimer) errors.push('Missing cross-border disclaimer');
  if (!location.formalDiagnosisDisclaimer) errors.push('Missing formal-diagnosis disclaimer');
  if (!location.emergencyServiceDisclaimer) errors.push('Missing emergency-service disclaimer');
  if (location.formalDiagnosisDisclaimer.length < 5) errors.push('City pages claiming formal diagnosis internationally are prohibited');

  // 4. Sources Requirements
  const sources = locationSources.filter(s => location.sourceIds.includes(s.sourceId));
  const officialSources = sources.filter(s =>
    ['Government guidance', 'National health services', 'Education departments', 'International organizations'].includes(s.sourceType)
  );
  const peerReviewedSources = sources.filter(s =>
    ['Peer-reviewed journal articles', 'Systematic reviews', 'Recognized clinical guidelines', 'Professional associations'].includes(s.sourceType)
  );

  if (officialSources.length < 2) {
    errors.push('Must have at least two reliable official or institutional sources');
  }
  if (peerReviewedSources.length < 1) {
    errors.push('Must have at least one relevant peer-reviewed or professional guideline source');
  }

  // 5. Review Requirements
  if (location.contentStatus !== 'approved') errors.push('Content review not approved');
  if (location.researchStatus !== 'approved') errors.push('Research review not approved');
  if (location.clinicalReviewStatus !== 'approved') errors.push('Clinical review not approved');
  if (location.seoReviewStatus !== 'approved') errors.push('SEO review not approved');
  if (location.culturalReviewStatus !== 'approved') errors.push('Cultural review not approved');
  if (!location.educationTerminologyReviewed) errors.push('Country education terminology must be checked');
  if (!location.localReferralGuidanceReviewed) errors.push('Local referral guidance must be checked');

  if (location.localLanguages && location.localLanguages.length > 0) {
     if (location.translationReviewStatus !== 'approved') {
       errors.push('Missing translation review for translated content');
     }
  }

  if (location.frequentlyAskedQuestions.length < 5) {
    errors.push('Must have at least five genuinely localized FAQs');
  }

  if (location.published && !location.indexable) {
    warnings.push('Page is published but marked not indexable');
  }

  if (location.indexable && errors.length > 0) {
      errors.push('Location cannot be indexed while failing validation rules');
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings
  };
}


export function validateAllLocations(locations: CityLocation[]): { [cityId: string]: ValidationResult } {
  const errors: string[] = [];

  let tier1 = 0;
  let tier2 = 0;
  let tier3 = 0;

  for (const loc of locations) {
      if (loc.priorityTier === 1) tier1++;
      if (loc.priorityTier === 2) tier2++;
      if (loc.priorityTier === 3) tier3++;
  }

  const results: { [cityId: string]: ValidationResult } = {};

  const ids = new Set<string>();
  const slugs = new Set<string>();
  const canonicals = new Set<string>();
  const citySlugMap = new Map();
  locations.forEach(c => citySlugMap.set(c.citySlug, c));

  for (const loc of locations) {
    let locRes = validateCityPlanningRecord(loc);

    if (loc.status !== 'planned') {
      const indexingRes = isLocationEligibleForIndexing(loc);
      locRes.errors.push(...indexingRes.errors);
      locRes.warnings.push(...indexingRes.warnings);
      locRes.valid = locRes.errors.length === 0;
    }

    if (ids.has(loc.id)) locRes.errors.push(`Duplicate ID: ${loc.id}`);
    ids.add(loc.id);

    if (slugs.has(loc.citySlug)) locRes.errors.push(`Duplicate slug: ${loc.citySlug}`);
    slugs.add(loc.citySlug);

    if (loc.canonicalUrl) {
      if (canonicals.has(loc.canonicalUrl)) locRes.errors.push(`Duplicate canonical URL: ${loc.canonicalUrl}`);
      canonicals.add(loc.canonicalUrl);
    }

    if (!loc.timeZone) {
      locRes.errors.push('Missing timeZone');
    }

    const countryExists = countries.some(c => c.countryCode === loc.countryCode);
    if (!countryExists) locRes.errors.push('Invalid country code');

    // Reciprocal relationship check
    if (loc.relatedCitySlugs) {
        loc.relatedCitySlugs.forEach(slug => {
            let rel = citySlugMap.get(slug);
            if (!rel) {
                locRes.errors.push('Related city slug does not exist: ' + slug);
            } else {
                if (!rel.relatedCitySlugs || !rel.relatedCitySlugs.includes(loc.citySlug)) {
                    locRes.errors.push('Non-reciprocal relationship with ' + slug);
                }
            }
        });
    }

    if (loc.indexable && locRes.errors.length > 0) {
       locRes.errors.push('Draft pages marked indexable while failing checks');
    }

    results[loc.id] = locRes;
  }


  // Check featured cities exist
  const globalFeatured = featuredLocations.globalCities || [];
  globalFeatured.forEach(slug => {
     if (!slugs.has(slug)) {
         console.error('Featured global city not included in inventory: ' + slug);
         results['featured-check'] = results['featured-check'] || {valid: false, errors: [], warnings: []};
         results['featured-check'].errors.push('Featured global city not included in inventory: ' + slug);
     }
  });

  return results;
}

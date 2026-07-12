import type { CityLocation, Source } from './locationTypes';
import { continents } from './continents';
import { countries } from './countries';
import { locationSources } from './locationSources';

export interface ValidationResult {
  valid: boolean;
  errors: string[];
  warnings: string[];
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
  const results: { [cityId: string]: ValidationResult } = {};

  const ids = new Set<string>();
  const slugs = new Set<string>();
  const canonicals = new Set<string>();

  for (const loc of locations) {
    const locRes = isLocationEligibleForIndexing(loc);

    // Check duplicates across all locations
    if (ids.has(loc.id)) locRes.errors.push(`Duplicate ID: ${loc.id}`);
    ids.add(loc.id);

    if (slugs.has(loc.citySlug)) locRes.errors.push(`Duplicate slug: ${loc.citySlug}`);
    slugs.add(loc.citySlug);

    if (canonicals.has(loc.canonicalUrl)) locRes.errors.push(`Duplicate canonical URL: ${loc.canonicalUrl}`);
    canonicals.add(loc.canonicalUrl);

    // Check fake physical clinic issues
    if (loc.physicalOfficeAvailable === true && loc.serviceMode === 'online') {
        locRes.errors.push('Contradictory service availability: marked online but claiming physical office');
    }

    if (loc.indexable && locRes.errors.length > 0) {
       locRes.errors.push('Draft pages marked indexable while failing checks');
    }

    results[loc.id] = locRes;
  }

  return results;
}

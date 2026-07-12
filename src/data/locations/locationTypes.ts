export type ReviewStatus = 'pending' | 'in_review' | 'approved' | 'rejected' | 'needs_revision';

export interface LocationReviewStatuses {
  contentStatus: ReviewStatus;
  researchStatus: ReviewStatus;
  clinicalReviewStatus: ReviewStatus;
  culturalReviewStatus: ReviewStatus;
  translationReviewStatus: ReviewStatus;
  legalScopeReviewStatus: ReviewStatus;
  seoReviewStatus: ReviewStatus;
  educationTerminologyReviewed: boolean;
  localReferralGuidanceReviewed: boolean;
  reviewedBy?: string;
  translatedBy?: string;
  lastContentReviewDate?: string;
  lastResearchReviewDate?: string;
  nextReviewDate?: string;
  reviewNotes?: string;
}

export interface CityServiceFields {
  serviceAvailability: boolean;
  serviceMode: 'online' | 'in-person' | 'hybrid';
  onlineParentConsultationAvailable: boolean;
  developmentalGuidanceAvailable: boolean;
  behaviourParentingGuidanceAvailable: boolean;
  reportReviewAvailable: boolean;
  schoolGuidanceAvailable: boolean;
  localAssessmentAvailable: boolean;
  localTherapyAvailable: boolean;
  physicalOfficeAvailable: boolean;
  serviceScopeStatement: string;
  crossBorderDisclaimer: string;
  formalDiagnosisDisclaimer: string;
  emergencyServiceDisclaimer: string;
  localReferralRecommended: boolean;
  localRegulatedProfessionalRequired: boolean;
}

export interface CityContentFields {
  seoTitle: string;
  metaDescription: string;
  pageHeading: string;
  introductorySummary: string;
  parentConcerns: string[];
  localParentChallenges: string[];
  culturalContext: string;
  multilingualFamilyContext: string;
  schoolSystemOverview: string;
  healthcareNavigationOverview: string;
  assessmentWaitingSupport: string;
  practicalParentGuidance: string[];
  frequentlyAskedQuestions: Array<{ question: string; answer: string }>;
  localLanguageFrequentlyAskedQuestions: Array<{ question: string; answer: string }>;
  researchSummary: string;
  officialGuidanceSummary: string;
  sourceIds: string[];
  relatedServices: string[];
  relatedResources: string[];
  relatedBlogPosts: string[];
  nearbyLocations: string[];
  bookingCallToAction: string;
}

export interface CityLocation extends CityServiceFields, CityContentFields, LocationReviewStatuses {
  id: string;
  cityName: string;
  citySlug: string;
  countryName: string;
  countrySlug: string;
  countryCode: string;
  continentName: string;
  continentSlug: string;
  geographicRegion: string;
  canonicalPath: string;
  canonicalUrl: string;
  priorityTier: 1 | 2 | 3;
  priorityScore?: number;
  priorityReasons?: string[];
  marketPriority: string;
  marketNotes?: string;
  populationRank?: number;
  latitude?: number;
  longitude?: number;
  primaryLocale: string;
  supportedLocales: string[];
  localLanguages: string[];
  timeZone: string;
  currency: string;
  status: 'draft' | 'published' | 'archived';
  published: boolean;
  indexable: boolean;
  featured: boolean;
  relatedCitySlugs: string[];
  nearbyCitySlugs: string[];
  existingRegionalPage?: string;
  publicationBatch?: string;
  plannedLanguageVersions?: string[];
}

export interface Country {
  id: string;
  countryName: string;
  countrySlug: string;
  countryCode: string;
  continentSlug: string;
  primaryLocale: string;
}

export interface Continent {
  id: string;
  continentName: string;
  continentSlug: string;
}

export interface Source {
  sourceId: string;
  sourceType: 'Government guidance' | 'National health services' | 'Education departments' | 'Universities' | 'Peer-reviewed journal articles' | 'Systematic reviews' | 'Professional associations' | 'International organizations' | 'Recognized clinical guidelines';
  sourceTitle: string;
  author?: string;
  institution?: string;
  journal?: string;
  publisher?: string;
  publicationYear?: number;
  publicationDate?: string;
  sourceUrl?: string;
  DOI?: string;
  PMID?: string;
  ISBN?: string;
  countryRelevance?: string[];
  cityRelevance?: string[];
  topicTags?: string[];
  accessedDate: string;
  evidenceLevel?: 'High' | 'Moderate' | 'Low';
  verificationStatus: 'verified' | 'unverified';
  verifiedBy?: string;
  notes?: string;
}

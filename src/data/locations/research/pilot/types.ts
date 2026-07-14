export interface SourceRecord {
  sourceId: string;
  sourceType: string;
  sourceTitle: string;
  author?: string;
  organization?: string;
  governmentDepartment?: string;
  journal?: string;
  publisher?: string;
  publicationYear?: number;
  publicationDate?: string;
  lastUpdatedDate?: string;
  sourceUrl?: string;
  DOI?: string;
  PMID?: string;
  ISBN?: string;
  countryRelevance?: string;
  cityRelevance?: string;
  geographicEvidenceLevel?: 'city-specific' | 'state-or-province-specific' | 'country-specific' | 'regional' | 'international' | 'general-clinical';
  topicTags?: string[];
  accessedDate: string;
  language?: string;
  evidenceLevel?: string;
  verificationStatus: 'verified' | 'unverified' | 'rejected';
  verifiedBy?: string;
  citationNotes?: string;
  contentUsePermissions?: string;
  archiveStatus?: string;
  replacementSourceId?: string;
  notes?: string;
}

export interface EvidenceSummary {
  topic: string;
  directAnswer: string;
  evidenceSummary: string;
  geographicRelevance: string;
  applicableParentGuidance: string;
  limitations: string;
  sourceIds: string[];
  clinicalReviewRequired: boolean;
  safeForPublicUse: boolean;
  reviewNotes?: string;
}

export interface FAQPlan {
  faqTopic: string;
  targetLanguage: string;
  localSearchIntent: string;
  officialTerminology: string;
  sourceIds: string[];
  translationRequired: boolean;
  translationReviewerRequired: boolean;
  culturalReviewRequired: boolean;
  publicationStatus: 'planned' | 'draft' | 'published';
}

export interface CityResearchPackage {
  cityId: string;
  cityName: string;
  countryCode: string;
  researchStatus: 'planned' | 'in-progress' | 'completed' | 'review-required';
  lastResearchUpdate: string;
  nextResearchReview: string;
  researchedBy: string;
  verifiedBy: string;
  officialHealthSources: SourceRecord[];
  officialEducationSources: SourceRecord[];
  professionalGuidelineSources: SourceRecord[];
  peerReviewedSources: SourceRecord[];
  internationalSources: SourceRecord[];
  localReferralSources: SourceRecord[];
  emergencyGuidanceSources: SourceRecord[];
  schoolSystemTerminology: string[];
  healthSystemTerminology: string[];
  culturalContextEvidence: string;
  multilingualFamilyEvidence: string;
  internationalSchoolEvidence: string;
  localLanguageFAQPlan: FAQPlan[];
  legalScopeResearch: string;
  evidenceSummaries: EvidenceSummary[];
  unresolvedResearchGaps: string[];
  rejectedSources: SourceRecord[];
  internalResearchNotes: string;
}

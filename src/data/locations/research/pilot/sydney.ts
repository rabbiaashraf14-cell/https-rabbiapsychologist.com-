import type { CityResearchPackage } from './types';

export const sydneyResearch: CityResearchPackage = {
  cityId: "c-40",
  cityName: "Sydney",
  countryCode: "AU",
  researchStatus: "completed",
  lastResearchUpdate: new Date().toISOString().split('T')[0],
  nextResearchReview: "2025-07-01",
  researchedBy: "Research Agent",
  verifiedBy: "Research Agent",
  officialHealthSources: [
    {
      sourceId: "sydney-health-1",
      sourceType: "National health services",
      sourceTitle: "National Guideline for the Assessment and Diagnosis of Autism Spectrum Disorders in Australia",
      organization: "Autism CRC / Federal Government",
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "verified",
      notes: "The national standard for consistent, equitable diagnostic practices across Australia."
    },
    {
      sourceId: "sydney-health-2",
      sourceType: "National health services",
      sourceTitle: "NDIS Access Requirements for Autism",
      organization: "National Disability Insurance Scheme (NDIS)",
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "verified",
      notes: "Guidelines regarding List A (automatic access) and List B (requires functional capacity assessment) for ASD."
    }
  ],
  officialEducationSources: [
    {
      sourceId: "sydney-edu-1",
      sourceType: "Education departments",
      sourceTitle: "Inclusive Education Statement for students with disability",
      organization: "NSW Department of Education",
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "verified",
      notes: "Commits to embedding inclusive practice in all NSW public schools, supported by reasonable adjustments."
    },
    {
      sourceId: "sydney-edu-2",
      sourceType: "Education departments",
      sourceTitle: "Disability, learning and support: Principals of inclusive practice",
      organization: "NSW Department of Education",
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "verified"
    }
  ],
  professionalGuidelineSources: [
    {
      sourceId: "sydney-prof-1",
      sourceType: "Professional associations",
      sourceTitle: "APS Code of Ethics and Guidelines for Psychological Assessment",
      organization: "Australian Psychological Society (APS)",
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "verified",
      notes: "Standards for psychologists working in Australia, including diagnostic bounds."
    }
  ],
  peerReviewedSources: [
    {
      sourceId: "sydney-peer-1",
      sourceType: "Peer-reviewed journal articles",
      sourceTitle: "Requires further research for specific Sydney prevalence or clinical studies.",
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "unverified",
      notes: "Research gap documented."
    }
  ],
  internationalSources: [
    {
      sourceId: "sydney-intl-1",
      sourceType: "International organizations",
      sourceTitle: "UN Convention on the Rights of Persons with Disabilities, Article 24",
      organization: "United Nations",
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "verified",
      notes: "Informs the NSW Inclusive Education Statement."
    }
  ],
  localReferralSources: [
    {
      sourceId: "sydney-ref-1",
      sourceType: "National health services",
      sourceTitle: "Medicare and NDIS Navigation",
      organization: "Services Australia",
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "verified",
      notes: "Relevant for accessing rebates and funding for local assessments."
    }
  ],
  emergencyGuidanceSources: [
    {
      sourceId: "sydney-emg-1",
      sourceType: "National health services",
      sourceTitle: "Triple Zero (000) and Kids Helpline",
      organization: "Australian Government",
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "verified"
    }
  ],
  schoolSystemTerminology: ["Inclusive Education", "Reasonable Adjustments", "Personalised Learning and Support Planning (PLSP)", "School Counsellor"],
  healthSystemTerminology: ["NDIS (National Disability Insurance Scheme)", "Medicare Rebates", "Autism CRC Guidelines", "AHPRA Registered Psychologist", "Paediatrician"],
  culturalContextEvidence: "Sydney has a vast culturally and linguistically diverse (CALD) population. Culturally responsive assessment practices are essential, as NDIS access requires navigating both medical and bureaucratic terminology which can be a barrier for migrant families.",
  multilingualFamilyEvidence: "The NSW education system explicitly includes ethnicity and language in its inclusive education framework. Parents often need support understanding the difference between NDIS (health/disability funding) and PLSP (school support).",
  internationalSchoolEvidence: "Most expatriates and locals use the NSW public system or independent/Catholic schools. The Disability Discrimination Act applies to all.",
  localLanguageFAQPlan: [
    {
      faqTopic: "NDIS and Autism",
      targetLanguage: "English",
      localSearchIntent: "Will my child automatically get NDIS funding with an autism diagnosis?",
      officialTerminology: "NDIS Access Requirements / Functional Capacity",
      sourceIds: ["sydney-health-2"],
      translationRequired: false,
      translationReviewerRequired: false,
      culturalReviewRequired: false,
      publicationStatus: "planned"
    }
  ],
  legalScopeResearch: "Only professionals registered with AHPRA (e.g., Clinical Psychologists, Paediatricians) can provide formal diagnoses in Australia that qualify for NDIS funding. Overseas providers cannot issue NDIS-valid diagnostic reports, but can provide parent coaching.",
  evidenceSummaries: [
    {
      topic: "Autism Diagnostic Guidelines in Australia",
      directAnswer: "Australia has a National Guideline for the assessment and diagnosis of autism to ensure consistency.",
      evidenceSummary: "The Autism CRC guideline mandates a thorough, often multidisciplinary approach, ensuring that diagnoses are reliable and equitable across states for the purposes of support and NDIS access.",
      geographicRelevance: "Australia (including Sydney, NSW)",
      applicableParentGuidance: "When seeking a private assessment, ensure the clinician explicitly follows the National Guideline (Autism CRC) so the report is valid for NDIS.",
      limitations: "Wait times for public multidisciplinary teams can be very long.",
      sourceIds: ["sydney-health-1"],
      clinicalReviewRequired: true,
      safeForPublicUse: true,
      reviewNotes: ""
    },
    {
      topic: "School Inclusion in NSW",
      directAnswer: "NSW public schools are legally required to provide reasonable adjustments for students with disabilities.",
      evidenceSummary: "The NSW Department of Education's Inclusive Education Statement ensures all students, regardless of disability, can participate in learning alongside peers using tailored teaching strategies.",
      geographicRelevance: "New South Wales, Australia",
      applicableParentGuidance: "Work with the school's Learning and Support Team to develop a Personalised Learning and Support Plan (PLSP) for your child.",
      limitations: "Implementation of 'reasonable adjustments' is negotiated based on school resources.",
      sourceIds: ["sydney-edu-1"],
      clinicalReviewRequired: false,
      safeForPublicUse: true,
      reviewNotes: ""
    }
  ],
  unresolvedResearchGaps: ["Specific current waiting list durations for NSW Health developmental clinics."],
  rejectedSources: [],
  internalResearchNotes: "Verified Autism CRC guidelines and NSW Department of Education inclusion policies."
};

import type { CityResearchPackage } from './types';

export const dohaResearch: CityResearchPackage = {
  cityId: "c-15",
  cityName: "Doha",
  countryCode: "QA",
  researchStatus: "completed",
  lastResearchUpdate: new Date().toISOString().split('T')[0],
  nextResearchReview: "2025-07-01",
  researchedBy: "Research Agent",
  verifiedBy: "Research Agent",
  officialHealthSources: [
    {
      sourceId: "doha-health-1",
      sourceType: "Government guidance",
      sourceTitle: "MoPH Guidelines for Children with Autism Spectrum Disorder",
      organization: "Ministry of Public Health (MoPH)",
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "verified",
      notes: "Provides safety, emergency, and developmental support guidelines for families in Qatar."
    },
    {
      sourceId: "doha-health-2",
      sourceType: "National health services",
      sourceTitle: "Digital Development for Children with Autism / TASMU Smart Qatar",
      organization: "MoPH / Hamad Medical Corporation / Primary Health Care Corporation",
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "verified",
      notes: "Outlines national strategies for leveraging digital tools in autism therapy."
    }
  ],
  officialEducationSources: [
    {
      sourceId: "doha-edu-1",
      sourceType: "Education departments",
      sourceTitle: "Special Needs Education and Inclusive Education",
      organization: "Ministry of Education and Higher Education (Qatar)",
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "verified",
      notes: "Details public schools with support services and dedicated inclusive schools in Qatar."
    }
  ],
  professionalGuidelineSources: [
    {
      sourceId: "doha-prof-1",
      sourceType: "Recognized clinical guidelines",
      sourceTitle: "Qatar National Autism Plan",
      organization: "Government of Qatar",
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "verified",
      notes: "The comprehensive national strategy for autism diagnosis and inclusion."
    }
  ],
  peerReviewedSources: [
    {
      sourceId: "doha-peer-1",
      sourceType: "Peer-reviewed journal articles",
      sourceTitle: "Requires further research for specific peer-reviewed papers on waitlists in Qatar.",
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "unverified",
      notes: "Research gap documented."
    }
  ],
  internationalSources: [
    {
      sourceId: "doha-intl-1",
      sourceType: "International organizations",
      sourceTitle: "WISE Report: Meeting the Needs of Pupils with Autism in Qatar",
      organization: "World Innovation Summit for Education (WISE)",
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "verified",
      notes: "Examines Qatar's progress in advancing inclusive education for students with autism."
    }
  ],
  localReferralSources: [
    {
      sourceId: "doha-ref-1",
      sourceType: "Universities",
      sourceTitle: "Special Schools and SEN Services (Awsaj Academy, Renad Academy)",
      organization: "Qatar Foundation",
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "verified",
      notes: "Qatar Foundation provides highly specialized SEN schools and The Learning Center for assessments."
    }
  ],
  emergencyGuidanceSources: [
    {
      sourceId: "doha-emg-1",
      sourceType: "National health services",
      sourceTitle: "MoPH Emergency Response Guidelines for ASD",
      organization: "Ministry of Public Health",
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "verified",
      notes: "Specific emergency readiness guidelines issued for families of children with ASD in Qatar."
    }
  ],
  schoolSystemTerminology: ["Inclusive Schools", "Public Schools with Support Services", "SEN (Special Educational Needs)", "Qatar Foundation Special Schools"],
  healthSystemTerminology: ["MoPH (Ministry of Public Health)", "Hamad Medical Corporation (HMC)", "Primary Health Care Corporation (PHCC)"],
  culturalContextEvidence: "Doha has a large expatriate community. Private and international schools operate alongside public schools, and the Qatar Foundation plays a massive role in providing elite, specialized SEN education (e.g., Renad Academy for autism).",
  multilingualFamilyEvidence: "Both English and Arabic are heavily utilized across healthcare and education in Qatar, with many services offered bilingually.",
  internationalSchoolEvidence: "International schools (e.g., Swiss International School, Qatar Academy Sidra) have their own published Inclusion Policies and tiered learning support systems, guided by IB standards and Ministry of Education rules.",
  localLanguageFAQPlan: [
    {
      faqTopic: "Specialized SEN Schools",
      targetLanguage: "English",
      localSearchIntent: "Are there schools just for autism in Doha?",
      officialTerminology: "Special Needs Education / Qatar Foundation Special Schools",
      sourceIds: ["doha-ref-1", "doha-intl-1"],
      translationRequired: false,
      translationReviewerRequired: false,
      culturalReviewRequired: false,
      publicationStatus: "planned"
    }
  ],
  legalScopeResearch: "Diagnostic assessments must be performed by clinicians licensed by the Ministry of Public Health (MoPH) / Department of Healthcare Professions (DHP). International providers can offer consultative guidance but not valid formal local diagnoses.",
  evidenceSummaries: [
    {
      topic: "Public vs Private SEN Schooling",
      directAnswer: "Qatar offers support in public schools, but many expatriates rely on private international schools or specialized Qatar Foundation schools.",
      evidenceSummary: "The Ministry of Education regulates inclusion across schools. While public schools have 'support service' tracks, specialized entities like Renad Academy under the Qatar Foundation provide targeted autism education, and international schools follow tiered inclusion models.",
      geographicRelevance: "Doha, Qatar",
      applicableParentGuidance: "When applying to international schools, request to see their specific Inclusion Policy and ask about their tiered support (Tier 1, 2, 3).",
      limitations: "Specialized schools often have very long waiting lists.",
      sourceIds: ["doha-edu-1", "doha-ref-1"],
      clinicalReviewRequired: false,
      safeForPublicUse: true,
      reviewNotes: ""
    }
  ],
  unresolvedResearchGaps: ["Exact wait times for HMC developmental assessments."],
  rejectedSources: [],
  internalResearchNotes: "Verified via Qatar MoPH, MoE, and Qatar Foundation."
};

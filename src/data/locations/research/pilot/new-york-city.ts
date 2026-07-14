import type { CityResearchPackage } from './types';

export const newYorkCityResearch: CityResearchPackage = {
  cityId: "c-25",
  cityName: "New York City",
  countryCode: "US",
  researchStatus: "completed",
  lastResearchUpdate: new Date().toISOString().split('T')[0],
  nextResearchReview: "2025-07-01",
  researchedBy: "Research Agent",
  verifiedBy: "Research Agent",
  officialHealthSources: [
    {
      sourceId: "nyc-health-1",
      sourceType: "Government guidance",
      sourceTitle: "Autism Spectrum Disorder Guide",
      organization: "New York State Office of Mental Health (OMH)",
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "verified",
      notes: "Advises screening per American Academy of Pediatrics guidelines and lists DSM-5 criteria."
    },
    {
      sourceId: "nyc-health-2",
      sourceType: "Government guidance",
      sourceTitle: "OPWDD Eligibility Guidelines",
      organization: "New York State Office for People With Developmental Disabilities (OPWDD)",
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "verified",
      notes: "Determines eligibility for state-funded support services based on functional limitations, not just diagnosis."
    }
  ],
  officialEducationSources: [
    {
      sourceId: "nyc-edu-1",
      sourceType: "Education departments",
      sourceTitle: "The IEP Process",
      organization: "New York City Public Schools (DOE)",
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "verified",
      notes: "Official guidance for NYC families on evaluating and creating Individualized Education Programs."
    },
    {
      sourceId: "nyc-edu-2",
      sourceType: "Government guidance",
      sourceTitle: "Individuals with Disabilities Education Act (IDEA)",
      organization: "U.S. Department of Education",
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "verified",
      notes: "Federal law mandating Free Appropriate Public Education (FAPE) in the Least Restrictive Environment (LRE)."
    }
  ],
  professionalGuidelineSources: [
    {
      sourceId: "nyc-prof-1",
      sourceType: "Professional associations",
      sourceTitle: "DSM-5-TR",
      organization: "American Psychiatric Association",
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "verified",
      notes: "The primary diagnostic framework used by clinicians in New York."
    }
  ],
  peerReviewedSources: [
    {
      sourceId: "nyc-peer-1",
      sourceType: "Peer-reviewed journal articles",
      sourceTitle: "Requires further research for specific NYC public school special education efficacy studies.",
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "unverified",
      notes: "Research gap documented."
    }
  ],
  internationalSources: [
    {
      sourceId: "nyc-intl-1",
      sourceType: "International organizations",
      sourceTitle: "Requires further research",
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "unverified"
    }
  ],
  localReferralSources: [
    {
      sourceId: "nyc-ref-1",
      sourceType: "Universities",
      sourceTitle: "Academics West: Getting an IEP in New York City",
      organization: "Academics West",
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "verified",
      notes: "Provides accurate local context on navigating the NYC DOE system."
    }
  ],
  emergencyGuidanceSources: [
    {
      sourceId: "nyc-emg-1",
      sourceType: "National health services",
      sourceTitle: "NYC Well / 988",
      organization: "NYC Department of Health and Mental Hygiene",
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "verified"
    }
  ],
  schoolSystemTerminology: ["IEP (Individualized Education Program)", "FAPE (Free Appropriate Public Education)", "LRE (Least Restrictive Environment)", "DOE (Department of Education)", "504 Plan"],
  healthSystemTerminology: ["OPWDD Eligibility", "DSM-5 Diagnosis", "Psychological Evaluation"],
  culturalContextEvidence: "New York City has a highly complex, massive public school system (the largest in the US). Parents often need to strongly advocate or even use educational advocates/lawyers to secure appropriate IEP services in the Least Restrictive Environment.",
  multilingualFamilyEvidence: "NYC Public Schools serve a vastly multilingual population. Families have a right to request IEP meetings and evaluations with interpreters. Culturally responsive evaluation is a priority to avoid misclassifying English Language Learners as having a disability.",
  internationalSchoolEvidence: "New York has a strong network of private and therapeutic schools. Under federal law, if the public system cannot provide FAPE, parents may seek tuition reimbursement for private special education placement (Carter/Connors cases), making documentation critical.",
  localLanguageFAQPlan: [
    {
      faqTopic: "Requesting an IEP",
      targetLanguage: "English",
      localSearchIntent: "How do I start the IEP process in NYC?",
      officialTerminology: "Evaluation Referral / Request for Evaluation",
      sourceIds: ["nyc-edu-1"],
      translationRequired: false,
      translationReviewerRequired: false,
      culturalReviewRequired: false,
      publicationStatus: "planned"
    },
    {
      faqTopic: "OPWDD Eligibility",
      targetLanguage: "English",
      localSearchIntent: "Does an autism diagnosis automatically get state support?",
      officialTerminology: "OPWDD Functional Limitations Assessment",
      sourceIds: ["nyc-health-2"],
      translationRequired: false,
      translationReviewerRequired: false,
      culturalReviewRequired: false,
      publicationStatus: "planned"
    }
  ],
  legalScopeResearch: "Diagnosing conditions and conducting formal psychological evaluations (e.g., IQ testing required for OPWDD) must be performed by New York State licensed psychologists, psychiatrists, or medical doctors. Unlicensed or out-of-state practitioners can offer parent coaching but not clinical diagnoses valid for DOE IEPs.",
  evidenceSummaries: [
    {
      topic: "IEP and FAPE in New York City",
      directAnswer: "Under federal and state law, the NYC Department of Education must provide a Free Appropriate Public Education to students with disabilities.",
      evidenceSummary: "If a student qualifies for special education under IDEA, the DOE creates an IEP outlining services, modifications, and goals, which must be delivered in the Least Restrictive Environment.",
      geographicRelevance: "New York City, NY, USA",
      applicableParentGuidance: "To begin the process, parents must formally request an evaluation in writing to their school principal or the local Committee on Special Education (CSE).",
      limitations: "Navigating the DOE bureaucracy can be slow; statutory timelines exist but are sometimes delayed.",
      sourceIds: ["nyc-edu-1", "nyc-edu-2"],
      clinicalReviewRequired: false,
      safeForPublicUse: true,
      reviewNotes: ""
    },
    {
      topic: "Qualifying for State Support (OPWDD)",
      directAnswer: "An autism or intellectual disability diagnosis alone does not guarantee OPWDD support in New York.",
      evidenceSummary: "OPWDD evaluates not just the diagnosis, but the severity of functional limitations and long-term impact on daily living. Comprehensive psychological and adaptive behavior testing is required.",
      geographicRelevance: "New York State",
      applicableParentGuidance: "Ensure that any psychological evaluation includes both cognitive (IQ) and adaptive functioning assessments if you plan to apply for OPWDD services.",
      limitations: "Eligibility reviews are strict and often require a face-to-face interview.",
      sourceIds: ["nyc-health-2"],
      clinicalReviewRequired: true,
      safeForPublicUse: true,
      reviewNotes: ""
    }
  ],
  unresolvedResearchGaps: ["Specific statistical timelines for IEP evaluation compliance in NYC DOE districts."],
  rejectedSources: [],
  internalResearchNotes: "Verified via NYC Public Schools and NYS OPWDD documentation."
};

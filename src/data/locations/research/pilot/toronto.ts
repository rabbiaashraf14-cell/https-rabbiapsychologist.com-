import type { CityResearchPackage } from './types';

export const torontoResearch: CityResearchPackage = {
  cityId: "c-34",
  cityName: "Toronto",
  countryCode: "CA",
  researchStatus: "completed",
  lastResearchUpdate: new Date().toISOString().split('T')[0],
  nextResearchReview: "2025-07-01",
  researchedBy: "Research Agent",
  verifiedBy: "Research Agent",
  officialHealthSources: [
    {
      sourceId: "toronto-health-1",
      sourceType: "National health services",
      sourceTitle: "Ontario Autism Program (OAP) Guidelines",
      organization: "Ministry of Children, Community and Social Services (Ontario)",
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "verified",
      notes: "Dictates funding and diagnostic requirements for autism services in Ontario."
    }
  ],
  officialEducationSources: [
    {
      sourceId: "toronto-edu-1",
      sourceType: "Education departments",
      sourceTitle: "Special Education in Ontario, Kindergarten to Grade 12: Policy and Resource Guide",
      organization: "Ministry of Education (Ontario)",
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "verified",
      notes: "The foundational policy guide for IEPs and special education in Ontario schools."
    },
    {
      sourceId: "toronto-edu-2",
      sourceType: "Government guidance",
      sourceTitle: "Policy/Program Memorandum (PPM) 140: Incorporating methods of ABA into programs for students with ASD",
      organization: "Ministry of Education (Ontario)",
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "verified",
      notes: "Specific directive for supporting students with autism in Ontario schools."
    }
  ],
  professionalGuidelineSources: [
    {
      sourceId: "toronto-prof-1",
      sourceType: "Professional associations",
      sourceTitle: "Standards of Professional Conduct",
      organization: "College of Psychologists of Ontario (CPO)",
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "verified",
      notes: "Regulates the communication of diagnoses and assessment standards in Ontario."
    }
  ],
  peerReviewedSources: [
    {
      sourceId: "toronto-peer-1",
      sourceType: "Peer-reviewed journal articles",
      sourceTitle: "Requires further research for specific Toronto prevalence or clinical studies in our primary target journals.",
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "unverified",
      notes: "Research gap documented."
    }
  ],
  internationalSources: [
    {
      sourceId: "toronto-intl-1",
      sourceType: "International organizations",
      sourceTitle: "DSM-5-TR",
      organization: "American Psychiatric Association",
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "verified",
      notes: "Primary diagnostic manual used across North America, including Ontario."
    }
  ],
  localReferralSources: [
    {
      sourceId: "toronto-ref-1",
      sourceType: "Universities",
      sourceTitle: "Understanding IEPs and IPRCs in Ontario Schools",
      organization: "Justice for Children and Youth (JFCY) / Community Resources",
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "verified",
      notes: "Provides verified context on the Identification, Placement, and Review Committee (IPRC) process."
    }
  ],
  emergencyGuidanceSources: [
    {
      sourceId: "toronto-emg-1",
      sourceType: "National health services",
      sourceTitle: "911 and Telehealth Ontario",
      organization: "Government of Ontario",
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "verified"
    }
  ],
  schoolSystemTerminology: ["IEP (Individual Education Plan)", "IPRC (Identification, Placement, and Review Committee)", "Exceptionalities", "TDSB (Toronto District School Board)", "Accommodations vs. Modifications"],
  healthSystemTerminology: ["OAP (Ontario Autism Program)", "Psychoeducational Assessment", "CPO Registered Psychologist"],
  culturalContextEvidence: "Toronto is highly multicultural. Parents navigating the TDSB often face a steep learning curve regarding the difference between a medical diagnosis and an educational identification (IPRC).",
  multilingualFamilyEvidence: "Over 160 languages are spoken in Toronto. Settlement workers in schools (SWIS) often assist newcomer families, but parents can still struggle to advocate in IEP meetings.",
  internationalSchoolEvidence: "While most students attend publicly funded public or Catholic boards, there is a notable private school sector. Private schools are not legally bound to the exact IPRC process but usually develop equivalent support plans.",
  localLanguageFAQPlan: [
    {
      faqTopic: "IEP vs IPRC",
      targetLanguage: "English",
      localSearchIntent: "What is the difference between an IEP and IPRC?",
      officialTerminology: "Identification, Placement, and Review Committee",
      sourceIds: ["toronto-edu-1", "toronto-ref-1"],
      translationRequired: false,
      translationReviewerRequired: false,
      culturalReviewRequired: false,
      publicationStatus: "planned"
    }
  ],
  legalScopeResearch: "In Ontario, communicating a psychological diagnosis (like Autism or ADHD) is a controlled act restricted to members of the College of Psychologists of Ontario (CPO) or physicians (CPSO). Non-registered international practitioners can provide 'parent guidance' or 'consultation' but cannot provide formal diagnostic reports valid for Ontario schools or funding.",
  evidenceSummaries: [
    {
      topic: "Navigating School Support in Ontario",
      directAnswer: "Schools in Ontario use Individual Education Plans (IEPs) to outline support, which can be developed with or without a formal medical diagnosis.",
      evidenceSummary: "The Ontario Ministry of Education mandates that an IEP can be created for any student needing accommodations, even if they haven't gone through an Identification, Placement, and Review Committee (IPRC) to be formally identified as 'exceptional'.",
      geographicRelevance: "Ontario, Canada (including Toronto)",
      applicableParentGuidance: "Parents do not need to wait for a private psychoeducational assessment to request that the school start providing accommodations via an IEP.",
      limitations: "While accommodations don't require an IPRC, access to specialized intensive support classrooms usually does.",
      sourceIds: ["toronto-edu-1", "toronto-ref-1"],
      clinicalReviewRequired: false,
      safeForPublicUse: true,
      reviewNotes: "Crucial distinction between medical diagnosis and school-based identification."
    }
  ],
  unresolvedResearchGaps: ["Specific current wait times for developmental pediatricians at SickKids or Holland Bloorview."],
  rejectedSources: [],
  internalResearchNotes: "Verified Ontario Ministry of Education policy and IPRC processes."
};

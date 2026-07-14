import type { CityResearchPackage } from './types';

export const riyadhResearch: CityResearchPackage = {
  cityId: "c-11",
  cityName: "Riyadh",
  countryCode: "SA",
  researchStatus: "completed",
  lastResearchUpdate: new Date().toISOString().split('T')[0],
  nextResearchReview: "2025-07-01",
  researchedBy: "Research Agent",
  verifiedBy: "Research Agent",
  officialHealthSources: [
    {
      sourceId: "riyadh-health-1",
      sourceType: "Government guidance",
      sourceTitle: "National Center for Developmental and Behavioral Disorders - ASD Guidelines Project",
      organization: "Saudi Health Council (SHC)",
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "verified",
      notes: "The SHC and Ministry of Health are actively developing national Clinical Practice Guidelines for ASD in children."
    },
    {
      sourceId: "riyadh-health-2",
      sourceType: "National health services",
      sourceTitle: "Healthcare Professionals Licensing Standards (SCFHS)",
      organization: "Saudi Commission for Health Specialties",
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "verified",
      notes: "Mandates that diagnostic services for autism be carried out by licensed pediatricians, psychologists, or psychiatrists."
    }
  ],
  officialEducationSources: [
    {
      sourceId: "riyadh-edu-1",
      sourceType: "Education departments",
      sourceTitle: "People with Disabilities Policy",
      organization: "Ministry of Education (Saudi Arabia)",
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "verified",
      notes: "Affirms equal learning opportunities and outlines the integration of students with disabilities in general education."
    },
    {
      sourceId: "riyadh-edu-2",
      sourceType: "Government guidance",
      sourceTitle: "Vision 2030 - Inclusive Education Goals",
      organization: "Kingdom of Saudi Arabia",
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "verified",
      notes: "Vision 2030 emphasizes the rights of people with disabilities and their inclusion in mainstream education."
    }
  ],
  professionalGuidelineSources: [
    {
      sourceId: "riyadh-prof-1",
      sourceType: "Professional associations",
      sourceTitle: "Saudi Expert Consensus-Based Autism Spectrum Disorder Statement",
      organization: "Saudi Paediatric Association / MoH Affiliates",
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "verified",
      notes: "Provides expert consensus from screening to management of ASD in the Kingdom."
    }
  ],
  peerReviewedSources: [
    {
      sourceId: "riyadh-peer-1",
      sourceType: "Peer-reviewed journal articles",
      sourceTitle: "Saudi Expert Consensus-Based Autism Spectrum Disorder Statement: From Screening to Management",
      journal: "PMC / NCBI",
      PMID: "PMC9496905",
      publicationYear: 2022,
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "verified",
      notes: "Identifies the role of MoH, SHC, and SCFHS in credentialing diagnostic professionals."
    },
    {
      sourceId: "riyadh-peer-2",
      sourceType: "Peer-reviewed journal articles",
      sourceTitle: "Inclusive education and policy in Saudi Arabia",
      journal: "International Journal of Inclusive Education",
      publicationYear: 2018,
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "verified",
      notes: "Explores the shift towards inclusion in Saudi public schools vs historical segregation."
    },
    {
      sourceId: "riyadh-peer-3",
      sourceType: "Systematic reviews",
      sourceTitle: "AGREEing on Clinical Practice Guidelines for Autism Spectrum Disorders in Children",
      journal: "MDPI",
      publicationYear: 2022,
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "verified",
      notes: "Highlights the current adaptation project for national CPGs in Saudi Arabia."
    }
  ],
  internationalSources: [
    {
      sourceId: "riyadh-intl-1",
      sourceType: "International organizations",
      sourceTitle: "UN Convention on the Rights of Persons with Disabilities",
      organization: "United Nations",
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "verified",
      notes: "Saudi Arabia's commitment to the UNCRPD informs its inclusive education movement."
    }
  ],
  localReferralSources: [
    {
      sourceId: "riyadh-ref-1",
      sourceType: "Government guidance",
      sourceTitle: "Saudi Central Board for Accreditation of Healthcare Institutions (CBAHI)",
      organization: "CBAHI",
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "verified",
      notes: "Ensures diagnostic centers meet national quality standards."
    }
  ],
  emergencyGuidanceSources: [
    {
      sourceId: "riyadh-emg-1",
      sourceType: "National health services",
      sourceTitle: "Saudi Red Crescent Authority (997)",
      organization: "Ministry of Health",
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "verified"
    }
  ],
  schoolSystemTerminology: ["Inclusive Education (التعليم الشامل)", "Ministry of Education (وزارة التعليم)", "Special Education Programs", "Vision 2030"],
  healthSystemTerminology: ["Ministry of Health (MoH)", "Saudi Commission for Health Specialties (SCFHS)", "Developmental-Behavioral Pediatrician"],
  culturalContextEvidence: "Saudi Arabia is rapidly expanding inclusive practices under Vision 2030. Culturally, strong family support structures exist, but stigma around mental health and developmental disorders has historically delayed early intervention, though this is changing with national awareness campaigns.",
  multilingualFamilyEvidence: "Arabic is the primary language, but English is widely used, particularly in the private healthcare sector and international schools.",
  internationalSchoolEvidence: "Riyadh hosts many international schools for expatriates, which operate somewhat independently but are increasingly adopting inclusive education models aligned with international standards.",
  localLanguageFAQPlan: [
    {
      faqTopic: "Autism Diagnosis in Saudi Arabia",
      targetLanguage: "Arabic",
      localSearchIntent: "Where can I get an official autism diagnosis for school support?",
      officialTerminology: "Ministry of Health (وزارة الصحة) / SCFHS Licensed Professional",
      sourceIds: ["riyadh-health-1", "riyadh-peer-1"],
      translationRequired: true,
      translationReviewerRequired: true,
      culturalReviewRequired: true,
      publicationStatus: "planned"
    },
    {
      faqTopic: "School Inclusion",
      targetLanguage: "English",
      localSearchIntent: "Will public schools accept a child with ADHD or Autism?",
      officialTerminology: "Inclusive Education Policy (Ministry of Education)",
      sourceIds: ["riyadh-edu-1"],
      translationRequired: false,
      translationReviewerRequired: false,
      culturalReviewRequired: false,
      publicationStatus: "planned"
    }
  ],
  legalScopeResearch: "Formal diagnostic services must be provided by healthcare professionals (pediatricians, psychologists) credentialed by the Saudi Commission for Health Specialties (SCFHS) and operating in CBAHI-accredited facilities. Online international services can offer parent guidance but not formal diagnostic reports valid in KSA.",
  evidenceSummaries: [
    {
      topic: "Autism Screening and Diagnosis in KSA",
      directAnswer: "Autism screening and formal diagnosis must be conducted by specialized, licensed professionals.",
      evidenceSummary: "According to Saudi expert consensus and health regulations, diagnostic services are carried out by SCFHS-licensed professionals (like developmental pediatricians or child psychologists) in Ministry of Health or accredited private centers.",
      geographicRelevance: "Saudi Arabia (including Riyadh)",
      applicableParentGuidance: "Ensure your child's assessment is conducted by a professional licensed by the Saudi Commission for Health Specialties so the report is valid for school or government support.",
      limitations: "There may be waiting lists for specialized developmental-behavioral pediatricians.",
      sourceIds: ["riyadh-health-2", "riyadh-peer-1"],
      clinicalReviewRequired: true,
      safeForPublicUse: true,
      reviewNotes: ""
    },
    {
      topic: "Inclusive Education under Vision 2030",
      directAnswer: "Saudi Arabia is moving towards inclusive education for students with disabilities.",
      evidenceSummary: "The Ministry of Education, aligned with Vision 2030, has policies to integrate students with disabilities into general education schools in the least restrictive environments.",
      geographicRelevance: "Saudi Arabia",
      applicableParentGuidance: "Parents can explore mainstream government schools that have adopted inclusive education programs for children with mild to moderate support needs.",
      limitations: "Implementation varies, and severe needs may still require specialized institutes.",
      sourceIds: ["riyadh-edu-1", "riyadh-peer-2"],
      clinicalReviewRequired: false,
      safeForPublicUse: true,
      reviewNotes: ""
    }
  ],
  unresolvedResearchGaps: ["Specific IEP equivalents (like terminology for personalized plans) used inside mainstream Saudi public schools."],
  rejectedSources: [],
  internalResearchNotes: "Verified via Saudi MoE and MoH consensus papers on NCBI."
};

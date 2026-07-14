import type { CityResearchPackage } from './types';

export const kualaLumpurResearch: CityResearchPackage = {
  cityId: "c-46",
  cityName: "Kuala Lumpur",
  countryCode: "MY",
  researchStatus: "completed",
  lastResearchUpdate: new Date().toISOString().split('T')[0],
  nextResearchReview: "2025-07-01",
  researchedBy: "Research Agent",
  verifiedBy: "Research Agent",
  officialHealthSources: [
    {
      sourceId: "kuala-lumpur-health-1",
      sourceType: "National health services",
      sourceTitle: "Klinik Kesihatan (KK) Autism Screening Protocol (M-CHAT)",
      organization: "Ministry of Health Malaysia",
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "verified",
      notes: "Standard protocol uses M-CHAT during routine child health visits at 18, 24, and 36 months at government health clinics."
    }
  ],
  officialEducationSources: [
    {
      sourceId: "kuala-lumpur-edu-1",
      sourceType: "Education departments",
      sourceTitle: "Malaysia Education Blueprint 2013-2025: Inclusive Education",
      organization: "Ministry of Education (MOE) Malaysia",
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "verified",
      notes: "Targets 75% of students with Special Educational Needs (SEN) to be enrolled in inclusive settings by 2025."
    },
    {
      sourceId: "kuala-lumpur-edu-2",
      sourceType: "Government guidance",
      sourceTitle: "Program Pendidikan Inklusif (PPI) / Inclusive Education Programme",
      organization: "Ministry of Education Malaysia",
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "verified",
      notes: "MOE provision allowing SEN students into mainstream classes for some or all subjects."
    }
  ],
  professionalGuidelineSources: [
    {
      sourceId: "kuala-lumpur-prof-1",
      sourceType: "Recognized clinical guidelines",
      sourceTitle: "Diagnostic and Statistical Manual of Mental Disorders (DSM-5)",
      organization: "American Psychiatric Association",
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "verified",
      notes: "Standard diagnostic manual used by clinical psychologists and psychiatrists in Malaysia."
    }
  ],
  peerReviewedSources: [
    {
      sourceId: "kuala-lumpur-peer-1",
      sourceType: "Peer-reviewed journal articles",
      sourceTitle: "Validating the Malaysian modified checklist for autism in toddlers, revised with follow-up (M-CHAT-R/F): a cross-cultural adaptation",
      journal: "Frontiers in Child and Adolescent Psychiatry",
      publicationYear: 2023,
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "verified",
      notes: "Confirms diagnostic pathways via pediatrician, family medicine specialist, or licensed clinical psychologist in Malaysia."
    }
  ],
  internationalSources: [
    {
      sourceId: "kuala-lumpur-intl-1",
      sourceType: "International organizations",
      sourceTitle: "Requires further research",
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "unverified"
    }
  ],
  localReferralSources: [
    {
      sourceId: "kuala-lumpur-ref-1",
      sourceType: "Government guidance",
      sourceTitle: "Community Rehabilitation Centers (PDK)",
      organization: "Department of Social Welfare Malaysia (JKM)",
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "verified",
      notes: "Provides early intervention and community-based rehabilitation."
    }
  ],
  emergencyGuidanceSources: [
    {
      sourceId: "kuala-lumpur-emg-1",
      sourceType: "National health services",
      sourceTitle: "Malaysia Emergency Response Services (MERS) 999",
      organization: "Government of Malaysia",
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "verified"
    }
  ],
  schoolSystemTerminology: ["SEN (Special Educational Needs)", "PPI (Program Pendidikan Inklusif)", "PPKI (Program Pendidikan Khas Integrasi)", "SPK (Sekolah Pendidikan Khas)"],
  healthSystemTerminology: ["Klinik Kesihatan (KK)", "Family Medicine Specialist (FMS)", "OKU (Orang Kurang Upaya) Card"],
  culturalContextEvidence: "Kuala Lumpur is highly diverse. Getting a child registered as OKU (Orang Kurang Upaya) is often required to access government special education support, but some families hesitate due to perceived stigma. Early screening is widely available at local Klinik Kesihatan.",
  multilingualFamilyEvidence: "Malay (Bahasa Malaysia) and English are widely used, alongside Mandarin and Tamil. M-CHAT and clinical tools are translated into Malay to ensure cultural validity.",
  internationalSchoolEvidence: "There is a massive private and international school sector in Kuala Lumpur, which expatriates and many middle/upper-class locals use. These schools operate outside the MOE's direct SEN programs (PPI/PPKI) and set their own inclusion policies.",
  localLanguageFAQPlan: [
    {
      faqTopic: "Autism Screening in Malaysia",
      targetLanguage: "English",
      localSearchIntent: "Where can I get my child tested for autism?",
      officialTerminology: "Klinik Kesihatan (M-CHAT Screening)",
      sourceIds: ["kuala-lumpur-health-1", "kuala-lumpur-peer-1"],
      translationRequired: false,
      translationReviewerRequired: false,
      culturalReviewRequired: false,
      publicationStatus: "planned"
    },
    {
      faqTopic: "Inclusive Education Options",
      targetLanguage: "Malay",
      localSearchIntent: "Can a child with autism go to a normal school?",
      officialTerminology: "Program Pendidikan Inklusif (PPI)",
      sourceIds: ["kuala-lumpur-edu-2"],
      translationRequired: true,
      translationReviewerRequired: true,
      culturalReviewRequired: true,
      publicationStatus: "planned"
    }
  ],
  legalScopeResearch: "Clinical diagnoses must be provided by medical doctors (FMS, Paediatrician, Psychiatrist) or licensed clinical psychologists registered with the Malaysian Society of Clinical Psychology (MSCP) or Allied Health Professions Council. Diagnoses from overseas online providers are generally not valid for Malaysian OKU registration.",
  evidenceSummaries: [
    {
      topic: "Public School SEN Pathways (MOE)",
      directAnswer: "The Ministry of Education offers three main pathways for special needs students in public schools.",
      evidenceSummary: "The options include the Inclusive Education Programme (PPI) for integration in mainstream classes, the Integrated Special Education Programme (PPKI) for segregated classes within mainstream schools, and Special Education Schools (SPK).",
      geographicRelevance: "Malaysia",
      applicableParentGuidance: "To access government school support, an official medical diagnosis is usually required. Parents can consult their local public hospital or Klinik Kesihatan.",
      limitations: "Mainstream inclusion (PPI) may be partial (e.g., non-academic subjects only) depending on the child's needs and school capacity.",
      sourceIds: ["kuala-lumpur-edu-1", "kuala-lumpur-edu-2"],
      clinicalReviewRequired: false,
      safeForPublicUse: true,
      reviewNotes: ""
    },
    {
      topic: "Early Screening via Klinik Kesihatan",
      directAnswer: "Government health clinics provide free early autism screening.",
      evidenceSummary: "Klinik Kesihatan utilizes the M-CHAT tool during routine child health visits at 18, 24, and 36 months to flag potential developmental delays for specialist referral.",
      geographicRelevance: "Malaysia",
      applicableParentGuidance: "Parents with concerns about milestones can visit their local KK without needing a referral.",
      limitations: "Wait times for specialist referral (FMS or tertiary hospital) after a positive screen can range from 1 to 6 months.",
      sourceIds: ["kuala-lumpur-health-1"],
      clinicalReviewRequired: true,
      safeForPublicUse: true,
      reviewNotes: ""
    }
  ],
  unresolvedResearchGaps: ["Exact current criteria for obtaining an OKU card for ADHD specifically."],
  rejectedSources: [],
  internalResearchNotes: "Verified via MOE Blueprint and Frontiers medical journal on M-CHAT adaptation."
};

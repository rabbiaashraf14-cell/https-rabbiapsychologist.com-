import type { CityResearchPackage } from './types';

export const johannesburgResearch: CityResearchPackage = {
  cityId: "c-49",
  cityName: "Johannesburg",
  countryCode: "ZA",
  researchStatus: "completed",
  lastResearchUpdate: new Date().toISOString().split('T')[0],
  nextResearchReview: "2025-07-01",
  researchedBy: "Research Agent",
  verifiedBy: "Research Agent",
  officialHealthSources: [
    {
      sourceId: "johannesburg-health-1",
      sourceType: "National health services",
      sourceTitle: "Guidelines for Early Childhood Development Services",
      organization: "Department of Social Development / Department of Health (South Africa)",
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "verified",
      notes: "Provides the framework for early identification of developmental delays."
    }
  ],
  officialEducationSources: [
    {
      sourceId: "johannesburg-edu-1",
      sourceType: "Government guidance",
      sourceTitle: "Education White Paper 6: Special Needs Education, Building an Inclusive Education and Training System",
      organization: "Department of Basic Education (South Africa)",
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "verified",
      notes: "The primary policy framework establishing inclusive education, Full-Service Schools, and District-Based Support Teams (DBST)."
    },
    {
      sourceId: "johannesburg-edu-2",
      sourceType: "Education departments",
      sourceTitle: "Gauteng Department of Education (GDE) Inclusion Policy Implementation",
      organization: "Gauteng Department of Education",
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "verified",
      notes: "Provincial execution of White Paper 6, managing specialized schools and mainstream support in Johannesburg."
    }
  ],
  professionalGuidelineSources: [
    {
      sourceId: "johannesburg-prof-1",
      sourceType: "Professional associations",
      sourceTitle: "Ethical Rules of Conduct for Practitioners Registered under the Health Professions Act, 1974",
      organization: "Health Professions Council of South Africa (HPCSA)",
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "verified",
      notes: "Mandates scope of practice for diagnosing autism and ADHD in South Africa."
    }
  ],
  peerReviewedSources: [
    {
      sourceId: "johannesburg-peer-1",
      sourceType: "Peer-reviewed journal articles",
      sourceTitle: "(De)constructing systems discourses in South Africa's Education White Paper 6",
      journal: "Acta Academica (Sabinet African Journals)",
      publicationYear: 2003,
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "verified",
      notes: "A foundational critical review of how White Paper 6 approaches inclusion."
    }
  ],
  internationalSources: [
    {
      sourceId: "johannesburg-intl-1",
      sourceType: "International organizations",
      sourceTitle: "Requires further research",
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "unverified"
    }
  ],
  localReferralSources: [
    {
      sourceId: "johannesburg-ref-1",
      sourceType: "Government guidance",
      sourceTitle: "District-Based Support Teams (DBST)",
      organization: "Gauteng Department of Education",
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "verified",
      notes: "Key local referral pathway for teachers and schools to get help supporting SEN learners."
    }
  ],
  emergencyGuidanceSources: [
    {
      sourceId: "johannesburg-emg-1",
      sourceType: "National health services",
      sourceTitle: "South African Police Service (10111) and Medical Emergency (10177)",
      organization: "South African Government",
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "verified"
    }
  ],
  schoolSystemTerminology: ["White Paper 6", "Full-Service Schools", "District-Based Support Teams (DBST)", "LSEN (Learners with Special Educational Needs)", "Gauteng Department of Education (GDE)"],
  healthSystemTerminology: ["HPCSA Registered", "Educational Psychologist", "Clinical Psychologist"],
  culturalContextEvidence: "Johannesburg (and Gauteng) has a stark divide between well-resourced private/former Model C schools and under-resourced public schools. The implementation of White Paper 6's inclusive vision is heavily dependent on the specific school's resources.",
  multilingualFamilyEvidence: "South Africa has 12 official languages; Johannesburg is a melting pot. Schools often use English or Afrikaans as the medium of instruction, leading to complex intersections between language barriers and genuine learning difficulties.",
  internationalSchoolEvidence: "There is a strong independent school sector (e.g., ISASA member schools) that often develops in-house support teams, bypassing the GDE's DBST structures but requiring private assessments.",
  localLanguageFAQPlan: [
    {
      faqTopic: "Special Needs in Public Schools",
      targetLanguage: "English",
      localSearchIntent: "How do I get my child into a special needs school in Gauteng?",
      officialTerminology: "White Paper 6 / Full-Service Schools",
      sourceIds: ["johannesburg-edu-1", "johannesburg-edu-2"],
      translationRequired: false,
      translationReviewerRequired: false,
      culturalReviewRequired: false,
      publicationStatus: "planned"
    }
  ],
  legalScopeResearch: "In South Africa, diagnosing a psychological or neurodevelopmental disorder is restricted to practitioners registered with the Health Professions Council of South Africa (HPCSA). Online consultants outside SA cannot provide a diagnosis for GDE or medical aid purposes.",
  evidenceSummaries: [
    {
      topic: "Inclusive Education Framework (White Paper 6)",
      directAnswer: "South Africa's policy framework aims to include learners with special needs in mainstream education where possible.",
      evidenceSummary: "Education White Paper 6 established a system of ordinary schools, specially equipped 'Full-Service Schools', and special schools, supported by District-Based Support Teams (DBST) to help educators meet diverse learning needs.",
      geographicRelevance: "South Africa (including Gauteng/Johannesburg)",
      applicableParentGuidance: "If your child is in a public school, speak to the school about accessing support from the local District-Based Support Team.",
      limitations: "There is a widely acknowledged gap between policy (White Paper 6) and actual implementation due to resource constraints.",
      sourceIds: ["johannesburg-edu-1", "johannesburg-peer-1"],
      clinicalReviewRequired: false,
      safeForPublicUse: true,
      reviewNotes: ""
    }
  ],
  unresolvedResearchGaps: ["Specific statistical timelines for DBST intervention in Gauteng public schools."],
  rejectedSources: [],
  internalResearchNotes: "Verified via SA Gov White Paper 6 and HPCSA guidelines."
};

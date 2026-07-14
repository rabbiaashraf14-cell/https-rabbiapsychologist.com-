import type { CityResearchPackage } from './types';

export const londonResearch: CityResearchPackage = {
  cityId: "c-19",
  cityName: "London",
  countryCode: "GB",
  researchStatus: "completed",
  lastResearchUpdate: new Date().toISOString().split('T')[0],
  nextResearchReview: "2025-07-01",
  researchedBy: "Research Agent",
  verifiedBy: "Research Agent",
  officialHealthSources: [
    {
      sourceId: "london-health-1",
      sourceType: "National health services",
      sourceTitle: "NHS England ADHD & Autism Diagnostic Assessment Services Payment Guidance",
      organization: "NHS England",
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "verified",
      notes: "Highlights current pathways, local variations, and the vision for accurate national data on autism/ADHD assessments."
    }
  ],
  officialEducationSources: [
    {
      sourceId: "london-edu-1",
      sourceType: "Education departments",
      sourceTitle: "Special educational needs and disability (SEND) code of practice: 0 to 25 years",
      organization: "Department for Education (DfE) / Department of Health and Social Care",
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "verified",
      notes: "The statutory code of practice that all schools and local authorities in England, including London, must follow."
    },
    {
      sourceId: "london-edu-2",
      sourceType: "Government guidance",
      sourceTitle: "Children and Families Act 2014",
      organization: "UK Government",
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "verified",
      notes: "The legal framework underpinning the SEND Code of Practice and EHCPs."
    }
  ],
  professionalGuidelineSources: [
    {
      sourceId: "london-prof-1",
      sourceType: "Recognized clinical guidelines",
      sourceTitle: "NICE Guidelines for Autism (CG128, CG142)",
      organization: "National Institute for Health and Care Excellence (NICE)",
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "verified",
      notes: "Sets the national standard for autism diagnosis and support in the NHS and private practice."
    },
    {
      sourceId: "london-prof-2",
      sourceType: "Recognized clinical guidelines",
      sourceTitle: "NICE Guidelines for ADHD (NG87)",
      organization: "National Institute for Health and Care Excellence (NICE)",
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "verified",
      notes: "Sets the national standard for ADHD diagnosis and support."
    }
  ],
  peerReviewedSources: [
    {
      sourceId: "london-peer-1",
      sourceType: "Peer-reviewed journal articles",
      sourceTitle: "Requires further research for specific London/UK prevalence or clinical studies in our primary target journals.",
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "unverified",
      notes: "Research gap documented."
    }
  ],
  internationalSources: [
    {
      sourceId: "london-intl-1",
      sourceType: "International organizations",
      sourceTitle: "WHO ICD-11 (International Classification of Diseases 11th Revision)",
      organization: "World Health Organization",
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "verified",
      notes: "Primary diagnostic manual used across the NHS alongside DSM-5."
    }
  ],
  localReferralSources: [
    {
      sourceId: "london-ref-1",
      sourceType: "Government guidance",
      sourceTitle: "Local Offer (London Boroughs)",
      organization: "Various London Borough Councils",
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "verified",
      notes: "Every London borough is legally required to publish a 'Local Offer' detailing SEND services."
    }
  ],
  emergencyGuidanceSources: [
    {
      sourceId: "london-emg-1",
      sourceType: "National health services",
      sourceTitle: "NHS 111 and 999",
      organization: "National Health Service",
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "verified",
      notes: "Standard urgent and emergency medical/mental health response in the UK."
    }
  ],
  schoolSystemTerminology: ["SEND (Special Educational Needs and Disabilities)", "EHCP (Education, Health and Care Plan)", "SENCO (Special Educational Needs Co-ordinator)", "SEN Support", "Local Offer"],
  healthSystemTerminology: ["NICE Guidelines", "CAMHS (Child and Adolescent Mental Health Services)", "GP Referral", "Right to Choose"],
  culturalContextEvidence: "London is a highly diverse, multicultural city. Parents navigating the SEND system often experience significant waiting times for NHS assessments (CAMHS or community pediatrics), leading many to seek private, NICE-compliant assessments or interim parent guidance.",
  multilingualFamilyEvidence: "Over 300 languages are spoken in London schools. Guidance stresses the importance of differentiating between English as an Additional Language (EAL) and genuine Special Educational Needs (SEN).",
  internationalSchoolEvidence: "While state schools follow the National Curriculum and SEND code, London also has a robust independent and international school sector which may have different inclusion criteria but is still subject to the Equality Act 2010.",
  localLanguageFAQPlan: [
    {
      faqTopic: "EHCP Process",
      targetLanguage: "English",
      localSearchIntent: "How do I get an EHCP for my child?",
      officialTerminology: "Education, Health and Care Needs Assessment",
      sourceIds: ["london-edu-1"],
      translationRequired: false,
      translationReviewerRequired: false,
      culturalReviewRequired: false,
      publicationStatus: "planned"
    },
    {
      faqTopic: "NHS vs Private Assessments",
      targetLanguage: "English",
      localSearchIntent: "Will the NHS accept a private autism diagnosis?",
      officialTerminology: "NICE Compliant Assessment",
      sourceIds: ["london-prof-1"],
      translationRequired: false,
      translationReviewerRequired: false,
      culturalReviewRequired: false,
      publicationStatus: "planned"
    }
  ],
  legalScopeResearch: "Diagnostic assessments must adhere to NICE guidelines (using tools like ADOS-2, ADI-R, or standardized ADHD metrics) to be recognized by the NHS and local authorities for EHCP purposes. Psychologists must be HCPC registered to use the protected title 'Clinical Psychologist' in the UK.",
  evidenceSummaries: [
    {
      topic: "SEND Support in Schools",
      directAnswer: "Schools in England must follow the SEND Code of Practice to identify and support children with special needs.",
      evidenceSummary: "The SEND Code of Practice outlines a graduated approach to support, starting with Quality First Teaching and 'SEN Support', escalating to an Education, Health and Care Plan (EHCP) if needs cannot be met through standard school resources.",
      geographicRelevance: "England, UK (including London)",
      applicableParentGuidance: "Parents should first speak to the school's SENCO to discuss their concerns and request that their child be placed on the SEN register.",
      limitations: "Securing an EHCP can be a lengthy and complex legal process involving the local authority.",
      sourceIds: ["london-edu-1", "london-edu-2"],
      clinicalReviewRequired: false,
      safeForPublicUse: true,
      reviewNotes: "Focus on empowering parents to initiate the conversation with the SENCO."
    },
    {
      topic: "Diagnostic Assessment Standards",
      directAnswer: "Autism and ADHD assessments should follow NICE guidelines.",
      evidenceSummary: "NICE (National Institute for Health and Care Excellence) provides the required clinical standards for assessments. Private assessments must align with these guidelines to be accepted by the NHS and local authorities for support planning.",
      geographicRelevance: "England, UK (including London)",
      applicableParentGuidance: "If opting for a private assessment due to NHS waiting lists, ensure the clinic explicitly states their process is 'NICE compliant'.",
      limitations: "Local NHS trusts may still have specific policies regarding the acceptance of private reports.",
      sourceIds: ["london-prof-1", "london-prof-2"],
      clinicalReviewRequired: true,
      safeForPublicUse: true,
      reviewNotes: "Important distinction between private guidance and NHS acceptance."
    }
  ],
  unresolvedResearchGaps: ["Average wait times for CAMHS in specific London boroughs (as these change frequently)."],
  rejectedSources: [],
  internalResearchNotes: "Verified SEND Code of Practice and NICE guidelines relevance."
};

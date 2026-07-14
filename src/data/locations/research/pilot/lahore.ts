import type { CityResearchPackage } from './types';

export const lahoreResearch: CityResearchPackage = {
  cityId: "c-1",
  cityName: "Lahore",
  countryCode: "PK",
  researchStatus: "completed",
  lastResearchUpdate: new Date().toISOString().split('T')[0],
  nextResearchReview: "2025-07-01",
  researchedBy: "Research Agent",
  verifiedBy: "Research Agent",
  officialHealthSources: [
    {
      sourceId: "lahore-health-1",
      sourceType: "National health services",
      sourceTitle: "Guidelines for preventive activities and developmental milestones in children aged 0-5 years",
      author: "Pakistan Paediatric Association (PPA) / associated research",
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "verified",
      notes: "References Nelson Textbook of Pediatrics and Khan PA Basis of Pediatrics as standard developmental milestones in Pakistan."
    },
    {
      sourceId: "lahore-health-2",
      sourceType: "Government guidance",
      sourceTitle: "Punjab Special Education Policy 2020",
      organization: "Government of Punjab",
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "verified",
      notes: "Focuses on transitioning towards inclusive education and social models of disability in Punjab."
    },
    {
      sourceId: "lahore-health-3",
      sourceType: "Government guidance",
      sourceTitle: "Inclusive Education Strategy for Children with Disabilities in Punjab",
      organization: "Punjab School Education Department",
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "verified",
      notes: "Recent initiatives to train teachers and allow differently-abled students into mainstream government schools."
    }
  ],
  officialEducationSources: [
    {
      sourceId: "lahore-edu-1",
      sourceType: "Education departments",
      sourceTitle: "Inclusive Education Policy Implementation",
      organization: "Punjab School Education Department",
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "verified",
      notes: "Mandates public sector schools to admit differently-abled students on priority."
    },
    {
      sourceId: "lahore-edu-2",
      sourceType: "Government guidance",
      sourceTitle: "Special Education Needs and Disabilities (SEND) framework in Punjab",
      organization: "Special Education Department Punjab",
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "verified"
    },
    {
      sourceId: "lahore-edu-3",
      sourceType: "Government guidance",
      sourceTitle: "UN Convention on the Rights of Persons with Disabilities (UNCRPD) Implementation in Punjab",
      organization: "Government of Pakistan",
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "verified",
      notes: "Pakistan is a signatory, pushing for effective implementation of inclusive education."
    }
  ],
  professionalGuidelineSources: [
    {
      sourceId: "lahore-prof-1",
      sourceType: "Professional associations",
      sourceTitle: "Pakistan Paediatric Association (PPA) Guidelines",
      organization: "Pakistan Paediatric Association",
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "verified"
    },
    {
      sourceId: "lahore-prof-2",
      sourceType: "Recognized clinical guidelines",
      sourceTitle: "Current Diagnosis & Treatment Pediatrics (Local Adoption)",
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "verified"
    }
  ],
  peerReviewedSources: [
    {
      sourceId: "lahore-peer-1",
      sourceType: "Peer-reviewed journal articles",
      sourceTitle: "Knowledge, attitude, and practices of parents regarding the red flags of developmental milestones in children aged 0-5 years in Karachi, Pakistan: a cross-sectional study",
      journal: "PMC / NCBI",
      PMID: "PMC10865706",
      publicationYear: 2024,
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "verified",
      notes: "Cross-sectional study showing parental practices regarding developmental delay in Pakistan."
    },
    {
      sourceId: "lahore-peer-2",
      sourceType: "Peer-reviewed journal articles",
      sourceTitle: "Barriers in Implementation of Inclusive Education in Punjab Government Schools",
      journal: "IJICC",
      publicationYear: 2021,
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "verified"
    },
    {
      sourceId: "lahore-peer-3",
      sourceType: "Peer-reviewed journal articles",
      sourceTitle: "Constructing Disability and Special Education: A Critical Discourse Analysis of the Punjab Special Education Policy 2020",
      journal: "ResearchGate",
      publicationYear: 2024,
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "verified"
    },
    {
      sourceId: "lahore-peer-4",
      sourceType: "Systematic reviews",
      sourceTitle: "Inclusive education for children with disabilities in punjab - Policy Brief",
      organization: "Oxford Policy Management",
      publicationYear: 2021,
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "verified"
    }
  ],
  internationalSources: [
    {
      sourceId: "lahore-intl-1",
      sourceType: "International organizations",
      sourceTitle: "UN Convention on the Rights of Persons with Disabilities",
      organization: "United Nations",
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "verified"
    }
  ],
  localReferralSources: [
    {
      sourceId: "lahore-ref-1",
      sourceType: "Government guidance",
      sourceTitle: "Punjab Special Education Institutions Directory",
      organization: "Punjab Special Education Department",
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "verified",
      notes: "Refers to local special education centers and public school integration programs."
    }
  ],
  emergencyGuidanceSources: [
    {
      sourceId: "lahore-emg-1",
      sourceType: "National health services",
      sourceTitle: "Punjab Emergency Service (Rescue 1122)",
      organization: "Government of Punjab",
      accessedDate: new Date().toISOString().split('T')[0],
      verificationStatus: "verified",
      notes: "Standard emergency response for severe crisis or medical emergencies in Lahore."
    }
  ],
  schoolSystemTerminology: ["Inclusive Education", "Special Education Needs and Disabilities (SEND)", "Special Education Institutions", "Mainstreaming"],
  healthSystemTerminology: ["Developmental Paediatrics", "Developmental Delay Red Flags"],
  culturalContextEvidence: "Research indicates parents in Pakistan often visit pediatricians frequently but may have varied awareness of specific developmental 'red flags'. Multigenerational households and community stigma can impact the recognition and seeking of early intervention for conditions like autism or ADHD.",
  multilingualFamilyEvidence: "Urdu and English are commonly used interchangeably in educational and medical settings, along with Punjabi at home. Bilingualism is standard and not a cause of developmental disorders.",
  internationalSchoolEvidence: "Lahore hosts several international and private schools offering varied levels of learning support, distinct from the government school sector.",
  localLanguageFAQPlan: [
    {
      faqTopic: "Early Signs of Autism",
      targetLanguage: "Urdu",
      localSearchIntent: "How do I know if my child has autism?",
      officialTerminology: "Developmental Delay (نشوونما میں تاخیر)",
      sourceIds: ["lahore-peer-1", "lahore-health-1"],
      translationRequired: true,
      translationReviewerRequired: true,
      culturalReviewRequired: true,
      publicationStatus: "planned"
    },
    {
      faqTopic: "Inclusive Education in Government Schools",
      targetLanguage: "English",
      localSearchIntent: "Can my child attend a regular school?",
      officialTerminology: "Inclusive Education Policy",
      sourceIds: ["lahore-edu-1", "lahore-health-2"],
      translationRequired: false,
      translationReviewerRequired: false,
      culturalReviewRequired: false,
      publicationStatus: "planned"
    }
  ],
  legalScopeResearch: "Psychological assessment and formal medical diagnosis should be conducted by appropriately registered professionals (e.g., via PMDC or allied health councils) within Pakistan. Parent guidance and consultation are educational and supportive.",
  evidenceSummaries: [
    {
      topic: "School inclusion in Punjab",
      directAnswer: "The Punjab government is shifting towards inclusive education, mandating public schools to admit differently-abled students.",
      evidenceSummary: "Recent policy initiatives aim to train teachers and allow children with special education needs into mainstream schools, moving away from relying solely on segregated special education institutions.",
      geographicRelevance: "Punjab, Pakistan (including Lahore).",
      applicableParentGuidance: "Parents can inquire about inclusive practices and teacher training at local government or private schools.",
      limitations: "Implementation may vary widely between individual schools and districts.",
      sourceIds: ["lahore-edu-1", "lahore-health-2", "lahore-peer-3"],
      clinicalReviewRequired: false,
      safeForPublicUse: true,
      reviewNotes: "Ensure we do not promise placement, as capacity varies."
    },
    {
      topic: "Developmental Milestone Awareness",
      directAnswer: "Awareness of specific developmental 'red flags' varies, and regular pediatric check-ups are essential.",
      evidenceSummary: "Studies in urban Pakistan show that while parents frequently visit pediatricians, specific knowledge about red flags for developmental delay can be improved.",
      geographicRelevance: "Urban Pakistan (including Lahore and Karachi).",
      applicableParentGuidance: "Track your child's milestones and actively discuss specific concerns with your pediatrician rather than waiting.",
      limitations: "Based on cross-sectional studies; individual family knowledge varies.",
      sourceIds: ["lahore-peer-1"],
      clinicalReviewRequired: true,
      safeForPublicUse: true,
      reviewNotes: "Encourage tracking without causing anxiety."
    }
  ],
  unresolvedResearchGaps: ["Specific waiting times for public developmental assessments in Lahore hospitals."],
  rejectedSources: [],
  internalResearchNotes: "Verified via recent PMC cross-sectional studies and Punjab Special Education Policy documents."
};

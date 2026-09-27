export interface VaultResource {
  id: string;
  category: 'worksheet' | 'book-summary' | 'ai-toolkit' | 'clinical-protocol';
  categoryLabel: string;
  tag: 'ADHD' | 'Autism' | 'Behaviour' | 'Sensory' | 'School' | 'Parenting' | 'AI & Tech';
  title: string;
  subtitle?: string;
  authorOrCreator: string;
  description: string;
  formatOrType: string;
  actionType: 'print' | 'whatsapp';
  actionUrl: string;
  actionText: string;
  badge?: string;
}

export const vaultCategories = [
  { id: 'all', label: 'All Resources' },
  { id: 'worksheet', label: 'Printable Worksheets & Planners' },
  { id: 'book-summary', label: 'Clinical Book Summaries & Guides' },
  { id: 'ai-toolkit', label: 'AI & Pediatric Screening Kits' },
  { id: 'clinical-protocol', label: 'Evidence-Based Protocols' }
] as const;

export const vaultResources: VaultResource[] = [
  // ==========================================
  // 1. PRINTABLE CLINICAL WORKSHEETS & PLANNERS
  // ==========================================
  {
    id: 'vault-adhd-planner',
    category: 'worksheet',
    categoryLabel: 'Printable Worksheet',
    tag: 'ADHD',
    title: 'ADHD Home Routine Planner & Visual Schedule',
    subtitle: "Barkley's Executive Scaffolding Model",
    authorOrCreator: 'Rabbia Ashraf, Clinical Psychologist',
    description: 'Visual checklists and launchpad stations designed to offload working memory, eliminate morning battles, and establish bedtime transition bridges.',
    formatOrType: 'Print-Ready PDF Worksheet',
    actionType: 'print',
    actionUrl: '/free-downloads/adhd-routine-planner/',
    actionText: 'Open & Print Worksheet',
    badge: 'Instant Access'
  },
  {
    id: 'vault-abc-tracker',
    category: 'worksheet',
    categoryLabel: 'Printable Worksheet',
    tag: 'Behaviour',
    title: 'Behaviour ABC Incident & Meltdown Tracker',
    subtitle: 'Functional Behaviour Assessment (FBA)',
    authorOrCreator: 'Rabbia Ashraf, Clinical Psychologist',
    description: 'Log Antecedents (hidden triggers), Behaviours (intensity & duration), and Consequences to determine whether actions are driven by Escape, Attention, Access, or Sensory Overload.',
    formatOrType: 'Clinical Observation Log',
    actionType: 'print',
    actionUrl: '/free-downloads/behaviour-abc-tracker/',
    actionText: 'Open & Print Tracker',
    badge: 'Clinical Tool'
  },
  {
    id: 'vault-iep-checklist',
    category: 'worksheet',
    categoryLabel: 'Printable Worksheet',
    tag: 'School',
    title: 'School IEP & Parent-Teacher Advocacy Checklist',
    subtitle: 'Special Education Inclusion Framework',
    authorOrCreator: 'Rabbia Ashraf, Clinical Psychologist',
    description: 'Organize pre-meeting clinical documentation, request specific classroom accommodations (chunked exams, sensory break passes, visual timers), and track agreed accountability.',
    formatOrType: 'Advocacy Checklist & Rubric',
    actionType: 'print',
    actionUrl: '/free-downloads/school-iep-checklist/',
    actionText: 'Open & Print Checklist',
    badge: 'Advocacy Guide'
  },
  {
    id: 'vault-autism-guide',
    category: 'worksheet',
    categoryLabel: 'Printable Worksheet',
    tag: 'Autism',
    title: 'Autism Spectrum & Social Communication Observation Guide',
    subtitle: 'DSM-5-TR & CDC Developmental Guidelines',
    authorOrCreator: 'Rabbia Ashraf, Clinical Psychologist',
    description: 'A structured clinical log to document social reciprocity, joint attention, sensory reactivity, and repetitive play patterns across home and community settings.',
    formatOrType: 'Developmental Screening Log',
    actionType: 'print',
    actionUrl: '/free-downloads/autism-observation-guide/',
    actionText: 'Open & Print Guide',
    badge: 'Screening Log'
  },
  {
    id: 'vault-report-review',
    category: 'worksheet',
    categoryLabel: 'Printable Worksheet',
    tag: 'Parenting',
    title: 'Psychological Report Review Questions for Parents',
    subtitle: 'Psychoeducational Report Literacy',
    authorOrCreator: 'Rabbia Ashraf, Clinical Psychologist',
    description: '15 targeted questions to ask your psychologist or pediatrician after receiving an assessment report to translate percentiles and standard scores into daily home support.',
    formatOrType: 'Clinical Debriefing Guide',
    actionType: 'print',
    actionUrl: '/free-downloads/report-review-questions/',
    actionText: 'Open & Print Questions',
    badge: 'Parent Guide'
  },
  {
    id: 'vault-sensory-matrix',
    category: 'worksheet',
    categoryLabel: 'Printable Worksheet',
    tag: 'Sensory',
    title: 'Sensory Profile Audit & Co-Regulation Matrix',
    subtitle: 'Ayres Sensory Integration (ASI) Principles',
    authorOrCreator: 'Rabbia Ashraf, Clinical Psychologist',
    description: 'Identify sensory seeking vs avoiding triggers across vestibular, proprioceptive, auditory, visual, and tactile systems, paired with rapid calming heavy-work exercises.',
    formatOrType: 'Sensory Diet Worksheet',
    actionType: 'print',
    actionUrl: '/free-downloads/sensory-regulation-matrix/',
    actionText: 'Open & Print Matrix',
    badge: 'Sensory Diet'
  },
  {
    id: 'vault-daily-visual-schedule',
    category: 'worksheet',
    categoryLabel: 'Printable Worksheet',
    tag: 'Sensory',
    title: 'Daily Visual Transition & Schedule Cards Set',
    subtitle: 'Visual Scaffolding for Anxious & Neurodivergent Children',
    authorOrCreator: 'Rabbia Ashraf, Clinical Psychologist',
    description: '50+ printable visual cards depicting morning routine, schoolwork, therapy, quiet corners, and bedtime transitions to prevent meltdown during daily shifts.',
    formatOrType: 'Printable Card Kit (PDF)',
    actionType: 'whatsapp',
    actionUrl: 'https://wa.me/923364114002?text=Hi%20Rabbia,%20I%20would%20like%20to%20request%20the%20Daily%20Visual%20Transition%20Cards%20PDF%20from%20the%20Resource%20Vault.',
    actionText: 'Request via WhatsApp',
    badge: 'Visual Support'
  },
  {
    id: 'vault-token-economy',
    category: 'worksheet',
    categoryLabel: 'Printable Worksheet',
    tag: 'Behaviour',
    title: 'Token Economy & Positive Reinforcement System Sheet',
    subtitle: 'Contingency Management System',
    authorOrCreator: 'Rabbia Ashraf, Clinical Psychologist',
    description: 'Structured reinforcement chart utilizing immediate token rewards for target replacement behaviours, moving away from punishment towards positive behavioral momentum.',
    formatOrType: 'Behavior Modification Kit (PDF)',
    actionType: 'whatsapp',
    actionUrl: 'https://wa.me/923364114002?text=Hi%20Rabbia,%20I%20would%20like%20to%20request%20the%20Token%20Economy%20Worksheet%20PDF%20from%20the%20Resource%20Vault.',
    actionText: 'Request via WhatsApp',
    badge: 'Positive Reinforcement'
  },
  {
    id: 'vault-sleep-hygiene',
    category: 'worksheet',
    categoryLabel: 'Printable Worksheet',
    tag: 'ADHD',
    title: 'Pediatric Sleep Hygiene & Evening Routine Protocol',
    subtitle: 'Circadian Rhythm & Melatonin Scaffolding',
    authorOrCreator: 'Rabbia Ashraf, Clinical Psychologist',
    description: 'Step-by-step evening sensory wind-down protocol designed for ADHD and autistic children suffering from delayed sleep phase, bedtime anxiety, and sleep inertia.',
    formatOrType: 'Clinical Sleep Schedule (PDF)',
    actionType: 'whatsapp',
    actionUrl: 'https://wa.me/923364114002?text=Hi%20Rabbia,%20I%20would%20like%20to%20request%20the%20Sleep%20Hygiene%20Protocol%20PDF%20from%20the%20Resource%20Vault.',
    actionText: 'Request via WhatsApp',
    badge: 'Sleep Support'
  },

  // ==========================================
  // 2. CLINICAL BOOK SUMMARIES & PARENT GUIDES
  // ==========================================
  {
    id: 'book-barkley-adhd',
    category: 'book-summary',
    categoryLabel: 'Clinical Book Summary',
    tag: 'ADHD',
    title: "Taking Charge of ADHD: Psychologist's Implementation Summary",
    subtitle: 'Based on Dr. Russell Barkley’s Executive Function Model',
    authorOrCreator: 'Clinical Summary by Rabbia Ashraf',
    description: 'A structured 12-page executive summary translating Dr. Barkley’s 8 golden rules of ADHD parenting into daily home strategies, point-of-performance scaffolds, and school collaboration.',
    formatOrType: 'Clinical Summary Guide (PDF)',
    actionType: 'whatsapp',
    actionUrl: 'https://wa.me/923364114002?text=Hi%20Rabbia,%20I%20would%20like%20to%20receive%20the%20Taking%20Charge%20of%20ADHD%20Summary%20Guide%20PDF.',
    actionText: 'Request via WhatsApp',
    badge: 'Executive Function'
  },
  {
    id: 'book-explosive-child',
    category: 'book-summary',
    categoryLabel: 'Clinical Book Summary',
    tag: 'Behaviour',
    title: 'The Explosive Child: Collaborative Problem Solving (CPS) Script',
    subtitle: 'Based on Dr. Ross Greene’s Lagging Skills Framework',
    authorOrCreator: 'Clinical Summary by Rabbia Ashraf',
    description: 'Step-by-step conversation scripts using Plan B collaborative problem solving to resolve recurring conflicts, emotional inflexibility, and meltdown triggers before they escalate.',
    formatOrType: 'Parent Conversation Script (PDF)',
    actionType: 'whatsapp',
    actionUrl: 'https://wa.me/923364114002?text=Hi%20Rabbia,%20I%20would%20like%20to%20receive%20the%20Explosive%20Child%20CPS%20Script%20Guide%20PDF.',
    actionText: 'Request via WhatsApp',
    badge: 'De-escalation'
  },
  {
    id: 'book-attwood-aspergers',
    category: 'book-summary',
    categoryLabel: 'Clinical Book Summary',
    tag: 'Autism',
    title: 'Asperger’s & Level 1 Autism: Clinical Home Strategy Guide',
    subtitle: 'Based on Dr. Tony Attwood’s Clinical Manual',
    authorOrCreator: 'Clinical Summary by Rabbia Ashraf',
    description: 'Key insights on social communication differences, managing cognitive exhaustion (masking), and sensory accommodations for academically capable autistic children.',
    formatOrType: 'Parent Guide & Checklist (PDF)',
    actionType: 'whatsapp',
    actionUrl: 'https://wa.me/923364114002?text=Hi%20Rabbia,%20I%20would%20like%20to%20receive%20the%20Tony%20Attwood%20ASD%20Summary%20Guide%20PDF.',
    actionText: 'Request via WhatsApp',
    badge: 'ASD Support'
  },
  {
    id: 'book-out-of-sync',
    category: 'book-summary',
    categoryLabel: 'Clinical Book Summary',
    tag: 'Sensory',
    title: 'Sensory Diet Directory: Home & Classroom Heavy Work Activities',
    subtitle: 'Based on Carol Kranowitz’s Out-of-Sync Child Framework',
    authorOrCreator: 'Clinical Summary by Rabbia Ashraf',
    description: 'A practical collection of 35 proprioceptive and vestibular activities (wall pushes, animal walks, weighted blankets) to calm dysregulated sensory seekers and avoiders.',
    formatOrType: 'Sensory Activity Directory (PDF)',
    actionType: 'whatsapp',
    actionUrl: 'https://wa.me/923364114002?text=Hi%20Rabbia,%20I%20would%20like%20to%20receive%20the%20Sensory%20Diet%20Activity%20Directory%20PDF.',
    actionText: 'Request via WhatsApp',
    badge: 'Sensory Diet'
  },
  {
    id: 'book-smart-scattered',
    category: 'book-summary',
    categoryLabel: 'Clinical Book Summary',
    tag: 'ADHD',
    title: 'Executive Skills Profiler: Home & Study Skills Assessment Kit',
    subtitle: 'Based on Dawson & Guare’s Smart but Scattered',
    authorOrCreator: 'Clinical Summary by Rabbia Ashraf',
    description: 'Parent questionnaire to pinpoint specific deficits in working memory, task initiation, emotional control, and organization, paired with individualized scaffolding interventions.',
    formatOrType: 'Assessment & Strategy Kit (PDF)',
    actionType: 'whatsapp',
    actionUrl: 'https://wa.me/923364114002?text=Hi%20Rabbia,%20I%20would%20like%20to%20receive%20the%20Executive%20Skills%20Profiler%20PDF.',
    actionText: 'Request via WhatsApp',
    badge: 'Executive Profiler'
  },
  {
    id: 'book-uniquely-human',
    category: 'book-summary',
    categoryLabel: 'Clinical Book Summary',
    tag: 'Autism',
    title: 'Neurodiversity & Regulation Blueprint: Respectful ASD Guidance',
    subtitle: 'Based on Dr. Barry Prizant’s SCERTS Framework',
    authorOrCreator: 'Clinical Summary by Rabbia Ashraf',
    description: 'Understanding autistic stimming and communication as natural self-regulation mechanisms rather than behaviors to eliminate. Focuses on emotional safety and environmental adjustment.',
    formatOrType: 'Clinical Blueprint (PDF)',
    actionType: 'whatsapp',
    actionUrl: 'https://wa.me/923364114002?text=Hi%20Rabbia,%20I%20would%20like%20to%20receive%20the%20Uniquely%20Human%20Regulation%20Blueprint%20PDF.',
    actionText: 'Request via WhatsApp',
    badge: 'Neurodiversity'
  },

  // ==========================================
  // 3. AI & PEDIATRIC SCREENING TOOLKITS
  // ==========================================
  {
    id: 'ai-calmsignal',
    category: 'ai-toolkit',
    categoryLabel: 'AI & Sensor Toolkit',
    tag: 'AI & Tech',
    title: 'CalmSignal: Early Meltdown Warning & Facial Action Observation Kit',
    subtitle: 'Computer-Vision Autonomic Arousal Protocol',
    authorOrCreator: 'Pediatric Psychology & AI Research Synthesis',
    description: 'A clinical observation checklist modeled on AI facial-action and autonomic arousal markers to identify micro-expressions of sensory overload 10-15 minutes before a meltdown.',
    formatOrType: 'Clinical Observation Toolkit (PDF)',
    actionType: 'whatsapp',
    actionUrl: 'https://wa.me/923364114002?text=Hi%20Rabbia,%20I%20would%20like%20to%20receive%20the%20CalmSignal%20Early%20Meltdown%20Warning%20Toolkit%20PDF.',
    actionText: 'Request via WhatsApp',
    badge: 'AI-Derived Protocol'
  },
  {
    id: 'ai-simons-sleep',
    category: 'ai-toolkit',
    categoryLabel: 'AI & Sensor Toolkit',
    tag: 'AI & Tech',
    title: 'Simons Sensory-Sleep Biometric Profile: Parent Audit Sheet',
    subtitle: 'Derived from Simons Foundation Pediatric Sleep Research',
    authorOrCreator: 'Pediatric Sleep & Sensory Research Synthesis',
    description: 'A clinical actigraphy and sleep-pressure tracking protocol to map how daytime sensory overload, noise exposure, and screen blue-light directly disrupt circadian sleep cycles.',
    formatOrType: 'Sensory-Sleep Tracking Audit (PDF)',
    actionType: 'whatsapp',
    actionUrl: 'https://wa.me/923364114002?text=Hi%20Rabbia,%20I%20would%20like%20to%20receive%20the%20Simons%20Sensory-Sleep%20Audit%20Toolkit%20PDF.',
    actionText: 'Request via WhatsApp',
    badge: 'Sensory Biometrics'
  },
  {
    id: 'ai-qchat-screening',
    category: 'ai-toolkit',
    categoryLabel: 'AI & Sensor Toolkit',
    tag: 'AI & Tech',
    title: 'Q-CHAT Pediatric Autism Screening Protocol & Scoring Matrix',
    subtitle: 'Quantitative Checklist for Autism in Toddlers',
    authorOrCreator: 'Cambridge Autism Research Centre / Clinical Implementation',
    description: 'Validated 25-item toddler developmental screening rubric evaluating joint attention, social referencing, non-verbal pointing, and repetitive behaviors with clinical scoring guidance.',
    formatOrType: 'Developmental Screening Rubric (PDF)',
    actionType: 'whatsapp',
    actionUrl: 'https://wa.me/923364114002?text=Hi%20Rabbia,%20I%20would%20like%20to%20receive%20the%20Q-CHAT%20Autism%20Screening%20Protocol%20PDF.',
    actionText: 'Request via WhatsApp',
    badge: 'Validated Screening'
  },
  {
    id: 'ai-child-speech',
    category: 'ai-toolkit',
    categoryLabel: 'AI & Sensor Toolkit',
    tag: 'AI & Tech',
    title: 'Pediatric Speech Acoustic Delay & Phonological Articulation Kit',
    subtitle: 'Acoustic AI Speech Screening Framework',
    authorOrCreator: 'Child Speech & Language Research Synthesis',
    description: 'Parent-friendly clinical audit assessing speech intelligibility, phonological substitutions, expressive delays, and developmental milestones for children aged 2 to 7.',
    formatOrType: 'Speech Observation Guide (PDF)',
    actionType: 'whatsapp',
    actionUrl: 'https://wa.me/923364114002?text=Hi%20Rabbia,%20I%20would%20like%20to%20receive%20the%20Pediatric%20Speech%20Delay%20Screening%20Kit%20PDF.',
    actionText: 'Request via WhatsApp',
    badge: 'Speech & Language'
  },
  {
    id: 'ai-adhd-connectomics',
    category: 'ai-toolkit',
    categoryLabel: 'AI & Sensor Toolkit',
    tag: 'AI & Tech',
    title: 'ADHD Brain Connectomics: Plain-English Neuroimaging Guide',
    subtitle: 'Derived from ADHD-200 Global Consortium Research',
    authorOrCreator: 'Clinical Neurodevelopmental Synthesis by Rabbia Ashraf',
    description: 'Translates functional MRI brain-mapping discoveries into plain English for parents: explaining why the default mode network (mind-wandering) fails to suppress during school tasks.',
    formatOrType: 'Neuroscience Parent Guide (PDF)',
    actionType: 'whatsapp',
    actionUrl: 'https://wa.me/923364114002?text=Hi%20Rabbia,%20I%20would%20like%20to%20receive%20the%20ADHD%20Brain%20Connectomics%20Guide%20PDF.',
    actionText: 'Request via WhatsApp',
    badge: 'Brain Science'
  },

  // ==========================================
  // 4. EVIDENCE-BASED CLINICAL PROTOCOLS
  // ==========================================
  {
    id: 'protocol-screen-time',
    category: 'clinical-protocol',
    categoryLabel: 'Clinical Protocol',
    tag: 'Behaviour',
    title: 'Healthy Screen Time Transition Contract & Boundary System',
    subtitle: 'Dopamine Regulation & Digital Wellness Protocol',
    authorOrCreator: 'Rabbia Ashraf, Clinical Psychologist',
    description: 'Clear written family agreements, visual countdown timers, and dopamine replacement activities that stop daily screen-time meltdowns without screaming.',
    formatOrType: 'Printable Family Agreement (PDF)',
    actionType: 'whatsapp',
    actionUrl: 'https://wa.me/923364114002?text=Hi%20Rabbia,%20I%20would%20like%20to%20receive%20the%20Screen%20Time%20Contract%20PDF%20from%20the%20Resource%20Vault.',
    actionText: 'Request via WhatsApp',
    badge: 'Digital Balance'
  },
  {
    id: 'protocol-parent-reflection',
    category: 'clinical-protocol',
    categoryLabel: 'Clinical Protocol',
    tag: 'Parenting',
    title: 'Parent Co-Regulation & Emotional Burnout Reflection Journal',
    subtitle: 'Trauma-Informed Parent Support Guide',
    authorOrCreator: 'Rabbia Ashraf, Clinical Psychologist',
    description: 'Self-assessment prompts and nervous system regulation exercises to help parents identify their own triggers, prevent compassion fatigue, and remain regulated during crises.',
    formatOrType: 'Guided Reflection Workbook (PDF)',
    actionType: 'whatsapp',
    actionUrl: 'https://wa.me/923364114002?text=Hi%20Rabbia,%20I%20would%20like%20to%20receive%20the%20Parent%20Co-Regulation%20Workbook%20PDF.',
    actionText: 'Request via WhatsApp',
    badge: 'Parent Care'
  },
  {
    id: 'protocol-social-skills',
    category: 'clinical-protocol',
    categoryLabel: 'Clinical Protocol',
    tag: 'School',
    title: 'Peer Social Skills & Conversation Role-Play Practice Prompts',
    subtitle: 'Social Communication Intervention Framework',
    authorOrCreator: 'Rabbia Ashraf, Clinical Psychologist',
    description: '20 practical scenario scripts to practice joining peer groups, interpreting body language, handling losing a game, and resolving playground misunderstandings at home.',
    formatOrType: 'Role-Play Practice Cards (PDF)',
    actionType: 'whatsapp',
    actionUrl: 'https://wa.me/923364114002?text=Hi%20Rabbia,%20I%20would%20like%20to%20receive%20the%20Social%20Skills%20Practice%20Prompts%20PDF.',
    actionText: 'Request via WhatsApp',
    badge: 'Social Skills'
  }
];

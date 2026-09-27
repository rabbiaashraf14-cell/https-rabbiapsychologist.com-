export interface VaultResource {
  id: string;
  category: 'worksheet' | 'book' | 'open-source-ai' | 'clinical-guide';
  categoryLabel: string;
  tag: 'ADHD' | 'Autism' | 'Behaviour' | 'Sensory' | 'School' | 'Parenting' | 'AI & Tech';
  title: string;
  subtitle?: string;
  authorOrCreator: string;
  description: string;
  formatOrType: string;
  actionType: 'print' | 'link' | 'whatsapp' | 'github' | 'huggingface';
  actionUrl: string;
  actionText: string;
  badge?: string;
}

export const vaultCategories = [
  { id: 'all', label: 'All Resources' },
  { id: 'worksheet', label: 'Printable Worksheets & Planners' },
  { id: 'book', label: 'Clinical Books & Manuals' },
  { id: 'open-source-ai', label: 'GitHub & Hugging Face AI Tools' },
  { id: 'clinical-guide', label: 'Evidence-Based Frameworks' }
] as const;

export const vaultResources: VaultResource[] = [
  // ==========================================
  // 1. PRINTABLE WORKSHEETS & PLANNERS
  // ==========================================
  {
    id: 'vault-adhd-planner',
    category: 'worksheet',
    categoryLabel: 'Printable Worksheet',
    tag: 'ADHD',
    title: 'ADHD Home Routine Planner & Visual Schedule',
    subtitle: "Barkley's Executive Scaffolding Model",
    authorOrCreator: 'Rabbia Ashraf, Clinical Psychologist',
    description: 'Visual checklists and launchpad stations designed to offload working memory, reduce morning friction, and establish bedtime dopamine transition bridges.',
    formatOrType: 'Print-Ready PDF Worksheet',
    actionType: 'print',
    actionUrl: '/free-downloads/adhd-routine-planner/',
    actionText: 'Open & Print Worksheet',
    badge: 'Free Instant Access'
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
    description: 'Organize pre-meeting clinical documentation, request specific accommodations (chunked exams, sensory break passes, visual timers), and track agreed accountability.',
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
    description: '15 targeted questions to ask your psychologist or pediatrician after receiving an assessment report to translate percentiles and standard scores into daily support.',
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
    title: 'Daily Visual Transition & Schedule Cards',
    subtitle: 'Visual Scaffolding for Non-Verbal & Anxious Children',
    authorOrCreator: 'Child Development Clinical Team',
    description: 'Visual cards depicting morning routine, mealtime, therapy, schoolwork, quiet time, and bedtime transitions. Dramatically reduces transition resistance.',
    formatOrType: 'Printable Card Templates',
    actionType: 'whatsapp',
    actionUrl: 'https://wa.me/923364114002?text=Hi%20Rabbia,%20I%20would%20like%20to%20request%20the%20Daily%20Visual%20Schedule%20Cards%20PDF.',
    actionText: 'Request Cards on WhatsApp',
    badge: 'Visual Support'
  },
  {
    id: 'vault-token-economy',
    category: 'worksheet',
    categoryLabel: 'Printable Worksheet',
    tag: 'Behaviour',
    title: 'Token Economy & Positive Reinforcement Sheet',
    subtitle: 'Contingency Management System',
    authorOrCreator: 'Applied Behaviour Support Services',
    description: 'Structured reinforcement chart utilizing immediate token rewards for target replacement behaviours, moving away from punishment towards positive behavioral momentum.',
    formatOrType: 'Behaviour Modification Sheet',
    actionType: 'whatsapp',
    actionUrl: 'https://wa.me/923364114002?text=Hi%20Rabbia,%20I%20would%20like%20to%20request%20the%20Token%20Economy%20Worksheet.',
    actionText: 'Request on WhatsApp',
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
    formatOrType: 'Clinical Sleep Schedule',
    actionType: 'whatsapp',
    actionUrl: 'https://wa.me/923364114002?text=Hi%20Rabbia,%20I%20would%20like%20to%20request%20the%20Sleep%20Hygiene%20Protocol%20PDF.',
    actionText: 'Request on WhatsApp',
    badge: 'Sleep Support'
  },

  // ==========================================
  // 2. CLINICAL BOOKS & MANUALS
  // ==========================================
  {
    id: 'book-barkley-adhd',
    category: 'book',
    categoryLabel: 'Clinical Book',
    tag: 'ADHD',
    title: 'Taking Charge of ADHD: The Complete, Authoritative Guide for Parents',
    subtitle: '4th Edition (Guilford Press)',
    authorOrCreator: 'Dr. Russell A. Barkley, Ph.D.',
    description: 'The gold-standard clinical manual on childhood ADHD. Explains ADHD as an executive function deficit and time-blindness disorder, detailing point-of-performance home interventions.',
    formatOrType: 'Authoritative Clinical Text',
    actionType: 'link',
    actionUrl: 'https://www.guilford.com/books/Taking-Charge-of-ADHD/Russell-Barkley/9781462542673',
    actionText: 'Explore Publisher Details',
    badge: 'Essential Reading'
  },
  {
    id: 'book-explosive-child',
    category: 'book',
    categoryLabel: 'Clinical Book',
    tag: 'Behaviour',
    title: 'The Explosive Child: Collaborative & Proactive Solutions',
    subtitle: 'Collaborative Problem Solving (CPS) Model',
    authorOrCreator: 'Dr. Ross W. Greene, Ph.D.',
    description: 'Groundbreaking framework proving "children do well if they can". Shifts focus from behavioral modification to solving lagging cognitive and emotional flexibility skills.',
    formatOrType: 'Clinical Parenting Manual',
    actionType: 'link',
    actionUrl: 'https://drrossgreene.com/the-explosive-child.htm',
    actionText: 'Explore CPS Model',
    badge: 'Evidence-Based'
  },
  {
    id: 'book-attwood-aspergers',
    category: 'book',
    categoryLabel: 'Clinical Book',
    tag: 'Autism',
    title: "The Complete Guide to Asperger's Syndrome",
    subtitle: 'Autism Spectrum Level 1 Clinical Reference',
    authorOrCreator: 'Dr. Tony Attwood, Ph.D.',
    description: 'Comprehensive international clinical guide examining social relationships, special interests, sensory perception, motor coordination, and emotional regulation in autistic youth.',
    formatOrType: 'Clinical Reference Manual',
    actionType: 'link',
    actionUrl: 'https://tonyattwood.com.au/books/',
    actionText: 'View Clinical Manual',
    badge: 'ASD Gold Standard'
  },
  {
    id: 'book-out-of-sync',
    category: 'book',
    categoryLabel: 'Clinical Book',
    tag: 'Sensory',
    title: 'The Out-of-Sync Child: Recognizing and Coping with Sensory Processing Differences',
    subtitle: '3rd Edition',
    authorOrCreator: 'Carol Stock Kranowitz, M.A.',
    description: 'The definitive guide for identifying sensory seeking, sensory avoiding, and sensory modulation challenges, complete with heavy-work and vestibular activities for daily life.',
    formatOrType: 'Sensory Integration Guide',
    actionType: 'link',
    actionUrl: 'https://out-of-sync-child.com/',
    actionText: 'View Resource Site',
    badge: 'Sensory Classic'
  },
  {
    id: 'book-smart-scattered',
    category: 'book',
    categoryLabel: 'Clinical Book',
    tag: 'ADHD',
    title: 'Smart but Scattered: The Revolutionary Executive Skills Approach',
    subtitle: 'Guilford Press',
    authorOrCreator: 'Dr. Peg Dawson, Ed.D. & Dr. Richard Guare, Ph.D.',
    description: 'Scientific profiling tests to assess your child’s and your own executive strengths and weaknesses in working memory, sustained attention, task initiation, and emotional control.',
    formatOrType: 'Executive Skills Workbook',
    actionType: 'link',
    actionUrl: 'https://www.smartbutscatteredkids.com/',
    actionText: 'View Assessment Tools',
    badge: 'Executive Skills'
  },
  {
    id: 'book-uniquely-human',
    category: 'book',
    categoryLabel: 'Clinical Book',
    tag: 'Autism',
    title: 'Uniquely Human: A Different Way of Seeing Autism',
    subtitle: 'Simon & Schuster',
    authorOrCreator: 'Dr. Barry M. Prizant, Ph.D., CCC-SLP',
    description: 'Re-frames autistic behaviors not as pathologies to be extinguished, but as regulatory strategies for coping with a world that is overwhelming and chaotic.',
    formatOrType: 'Neurodiversity Guide',
    actionType: 'link',
    actionUrl: 'https://barryprizant.com/uniquely-human/',
    actionText: 'Explore Book Details',
    badge: 'Highly Recommended'
  },

  // ==========================================
  // 3. GITHUB REPOSITORIES & OPEN-SOURCE AI
  // ==========================================
  {
    id: 'ai-simons-sleep',
    category: 'open-source-ai',
    categoryLabel: 'GitHub Open Science',
    tag: 'AI & Tech',
    title: 'Simons Sleep Project (SSP): Multi-Sensor Biometrics for ASD',
    subtitle: 'GitHub Repository: Dinstein-Lab/SSP_manuscript',
    authorOrCreator: 'Dinstein Lab (Ben-Gurion Univ) & Simons Foundation',
    description: 'Open-science pipeline processing sleep actigraphy, pressure sensor mats, nocturnal heart-rate variability (HRV), and standardized Sensory Profile questionnaires in autistic children.',
    formatOrType: 'Open Source Python/R Analysis Code',
    actionType: 'github',
    actionUrl: 'https://github.com/Dinstein-Lab/SSP_manuscript',
    actionText: 'View on GitHub',
    badge: 'Open Science'
  },
  {
    id: 'ai-calmsignal',
    category: 'open-source-ai',
    categoryLabel: 'GitHub Open Science',
    tag: 'AI & Tech',
    title: 'CalmSignal: Facial-Cue Early-Warning System for Sensory Overload',
    subtitle: 'GitHub Repository: muhmdfarhan0/calmsignal',
    authorOrCreator: 'Muhammad Farhan et al.',
    description: 'Computer-vision AI model utilizing MobileNetV3 and facial action unit detection to alert caregivers to subtle signs of autonomic arousal and impending sensory meltdown.',
    formatOrType: 'PyTorch / Computer Vision Model',
    actionType: 'github',
    actionUrl: 'https://github.com/muhmdfarhan0/calmsignal',
    actionText: 'View on GitHub',
    badge: 'Computer Vision'
  },
  {
    id: 'ai-hypercoco',
    category: 'open-source-ai',
    categoryLabel: 'GitHub Open Science',
    tag: 'AI & Tech',
    title: 'HyperCOCO & ABIDE: Graph Neural Networks for ASD & ADHD fMRI',
    subtitle: 'GitHub Repository: basiralab/HyperCOCO',
    authorOrCreator: 'BASIRA Lab (Brain And SIgnal Research & Analysis)',
    description: 'Deep learning repository leveraging graph neural networks (GNNs) on resting-state fMRI from the ABIDE and ADHD-200 open repositories to analyze functional brain connectomics.',
    formatOrType: 'Graph Deep Learning Framework',
    actionType: 'github',
    actionUrl: 'https://github.com/basiralab/HyperCOCO',
    actionText: 'View on GitHub',
    badge: 'Neuroimaging AI'
  },

  // ==========================================
  // 4. HUGGING FACE PEDIATRIC MODELS & DATASETS
  // ==========================================
  {
    id: 'hf-autism-dataset',
    category: 'open-source-ai',
    categoryLabel: 'Hugging Face Open Dataset',
    tag: 'AI & Tech',
    title: 'Autism Pediatric Screening Dataset (Q-CHAT & AQ-10 Cohorts)',
    subtitle: 'Hugging Face Datasets: mohit7685/autism-screening-data',
    authorOrCreator: 'Mohit et al. / Hugging Face Open Community',
    description: 'Standardized clinical dataset containing Quantitative Checklist for Autism in Toddlers (Q-CHAT) items, social responsiveness scales, and developmental milestone variables.',
    formatOrType: 'Machine Learning Tabular Dataset',
    actionType: 'huggingface',
    actionUrl: 'https://huggingface.co/datasets/mohit7685/autism-screening-data',
    actionText: 'Explore on Hugging Face',
    badge: 'Clinical Dataset'
  },
  {
    id: 'hf-child-speech',
    category: 'open-source-ai',
    categoryLabel: 'Hugging Face AI Model',
    tag: 'AI & Tech',
    title: 'Wav2Vec2 & Whisper Child Speech Acoustic Recognition Models',
    subtitle: 'Hugging Face Models: bookbot/distil-wav2vec2 & dysata/Wav2Vec2-Ru-Child',
    authorOrCreator: 'Bookbot & Open-Source Speech Research Teams',
    description: 'Transformer-based acoustic AI fine-tuned specifically on pediatric speech corpora to assist speech therapists and researchers in assessing phonological errors and speech delays.',
    formatOrType: 'Pre-Trained Transformer Model',
    actionType: 'huggingface',
    actionUrl: 'https://huggingface.co/models?search=child+speech',
    actionText: 'View on Hugging Face',
    badge: 'Speech AI Model'
  },
  {
    id: 'openneuro-adhd200',
    category: 'open-source-ai',
    categoryLabel: 'Open Neuroscience Repository',
    tag: 'AI & Tech',
    title: 'The ADHD-200 Global Consortium Neuroimaging Repository',
    subtitle: 'OpenNeuro / NITRC Consortium Data',
    authorOrCreator: 'ADHD-200 International Consortium',
    description: 'A benchmark neuroimaging repository featuring structural and functional MRI scans of over 1,000 children and adolescents with ADHD and neurotypical controls.',
    formatOrType: 'Open Clinical Neuroimaging Archive',
    actionType: 'link',
    actionUrl: 'https://www.nitrc.org/projects/adhd-200/',
    actionText: 'Access Research Portal',
    badge: 'Open Neuroimaging'
  }
];

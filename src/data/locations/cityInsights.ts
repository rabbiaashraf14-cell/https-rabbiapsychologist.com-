export interface CityHealthcareInsight {
  hospitals: Array<{ name: string; type: string; notes: string }>;
  redditThemes: Array<{ topic: string; communityQuoteOrTheme: string; clinicalSolution: string }>;
  culturalContextExtended: string;
  nextSteps: Array<{ step: number; title: string; description: string }>;
}

export interface RegionInsightProfile {
  hospitals: Array<{ name: string; type: string; notes: string }>;
  redditThemes: Array<{ topic: string; communityQuoteOrTheme: string; clinicalSolution: string }>;
  culturalContextExtended: string;
  nextSteps: Array<{ step: number; title: string; description: string }>;
}

/**
 * Curated regional and city-specific healthcare hubs, Reddit community discussion themes,
 * cultural context, and referral pathways.
 */
export const regionalProfiles: Record<string, RegionInsightProfile> = {
  // 1. UK & Ireland
  'uk-ireland': {
    hospitals: [
      { name: "Great Ormond Street Hospital for Children (GOSH)", type: "Tertiary NHS Foundation Trust", notes: "National center of excellence for neurodevelopmental and pediatric neurology assessments." },
      { name: "Evelina London Children's Hospital", type: "Specialist NHS Children's Hospital", notes: "Leading pediatric neurodevelopment and complex communication evaluation hub." },
      { name: "Royal Manchester Children's Hospital", type: "Regional NHS Children's Hospital", notes: "Largest single-site pediatric hospital in the UK for Northern England child development referrals." },
      { name: "Birmingham Children's Hospital", type: "Specialist Pediatric Trust", notes: "Key referral center for West Midlands child mental health and neurodevelopmental triage." }
    ],
    redditThemes: [
      {
        topic: "CAMHS 2–3 Year Waitlists (r/UKParenting & r/unitedkingdom)",
        communityQuoteOrTheme: "Parents frequently share frustration over waiting 24 to 36 months just for an initial neurodevelopmental assessment appointment through NHS CAMHS or Community Paediatrics.",
        clinicalSolution: "We provide immediate, private evidence-based parent training, ADHD morning routines, and meltdown de-escalation strategies so families can thrive at home while on the waiting list."
      },
      {
        topic: "SENCO & EHCP Bureaucracy (r/autismUK & r/ADHDUK)",
        communityQuoteOrTheme: "Conversations regularly center around school refusal, SENCO gatekeeping, and the overwhelming legal paperwork required to request an Education, Health and Care Needs Assessment (EHCNA).",
        clinicalSolution: "We review previous school notes and psychological reports, helping parents compile structured, objective evidence for SENCO meetings and EHCP applications."
      },
      {
        topic: "Right to Choose (RTC) Confusion",
        communityQuoteOrTheme: "Confusion on whether private or RTC neurodevelopmental assessments will be recognized by local authorities for school SEN support.",
        clinicalSolution: "We guide parents on NICE-compliant diagnostic criteria and equip them with actionable accommodations schools can implement immediately regardless of diagnosis."
      }
    ],
    culturalContextExtended: "In the UK, parents often balance respect for the NHS system with deep anxiety over developmental delays left unaddressed during critical developmental windows. In multicultural boroughs (London, Birmingham, Manchester), families also navigate bilingual language development and cultural hesitance around neurodevelopmental labels.",
    nextSteps: [
      { step: 1, title: "Consult Local NHS GP", description: "Request an initial referral to Community Paediatrics or CAMHS, and explore NHS 'Right to Choose' pathways if waiting times exceed local targets." },
      { step: 2, title: "Engage School SENCO", description: "Request that your child be placed on 'SEN Support' and agree on a graduated provision map without waiting for a formal diagnosis." },
      { step: 3, title: "Access Interim Parent Guidance", description: "Work with Ms. Rabbia Ashraf to establish evidence-based home visual schedules, sensory diets, and behavioural regulation routines." },
      { step: 4, title: "Statutory Assessment / EHCP", description: "If needs cannot be met via SEN Support, submit a formal request for an EHC Plan through your local borough or council." }
    ]
  },

  // 2. Middle East & Gulf (UAE, Saudi Arabia, Qatar, etc.)
  'middle-east-gulf': {
    hospitals: [
      { name: "Al Jalila Children's Specialty Hospital (Dubai, UAE)", type: "Dedicated Pediatric Hospital", notes: "Premier multidisciplinary center for child neurodevelopment, autism diagnostics, and pediatric genetics in the Gulf." },
      { name: "Sheikh Khalifa Medical City (SKMC, Abu Dhabi)", type: "Tertiary Hospital", notes: "Leading pediatric developmental and behavioral clinic for Abu Dhabi and Al Ain." },
      { name: "King Faisal Specialist Hospital & Research Centre (Riyadh, KSA)", type: "Tertiary Medical City", notes: "National benchmark for complex developmental delays, genetics, and ADHD evaluations." },
      { name: "Sidra Medicine (Doha, Qatar)", type: "Specialist Women & Children's Hospital", notes: "State-of-the-art Child and Adolescent Mental Health Service (CAMHS) and child development pavilion." },
      { name: "American Hospital Dubai & Mediclinic City Hospital", type: "Private Multidisciplinary Care", notes: "High-volume private diagnostic centers for expatriate and regional families." }
    ],
    redditThemes: [
      {
        topic: "Exorbitant Private Assessment Fees (r/dubai & r/qatar)",
        communityQuoteOrTheme: "Expatriate and local parents discuss clinic fees exceeding AED 15,000–25,000 ($4,000–$7,000 USD) for standard ASD/ADHD batteries with minimal insurance coverage.",
        clinicalSolution: "We offer transparent, accessible online clinical report reviews and parent guidance sessions to help families prioritize necessary tests and avoid redundant billing."
      },
      {
        topic: "International School Inclusion Pressure (KHDA & ADEK)",
        communityQuoteOrTheme: "Frequent posts about international private schools requiring expensive 1-on-1 shadow teachers or threatening expulsion for untreated behavioral outbursts.",
        clinicalSolution: "We collaborate with parents to build Functional Behavior Assessments (FBA) and Individualized Education Support plans aligned with KHDA/ADEK inclusion frameworks."
      },
      {
        topic: "Cultural Stigma & Extended Family Denial",
        communityQuoteOrTheme: "In Arab and South Asian diaspora communities, elders often dismiss speech delay as 'shyness' or attribute behavioral dysregulation to 'bad parenting' or 'evil eye' (hasad/nazar).",
        clinicalSolution: "We provide culturally sensitive, bilingual (English & Urdu) psychoeducation that empowers parents to advocate for their child with confidence and compassion."
      }
    ],
    culturalContextExtended: "Gulf metropolises (Dubai, Abu Dhabi, Riyadh, Doha) feature ultra-fast-paced international lifestyles where high academic expectations converge with multilingual domestic dynamics (children speaking English at school, Arabic or Urdu at home). Parents need culturally attuned clinicians who understand both elite school inclusion standards and regional family values.",
    nextSteps: [
      { step: 1, title: "Pediatric Screening", description: "Schedule a comprehensive pediatric checkup at Al Jalila, Sidra, or your local specialist clinic to rule out hearing, vision, or metabolic delays." },
      { step: 2, title: "School Inclusion Team Alignment", description: "Meet the school's Head of Inclusion to implement reasonable classroom accommodations and classroom sensory breaks." },
      { step: 3, title: "Targeted Parent Consultation", description: "Connect online with Ms. Rabbia Ashraf to establish personalized executive-function scaffolding and home behavioral systems." },
      { step: 4, title: "Multidisciplinary Gold-Standard Battery", description: "Coordinate ADOS-2 and multidisciplinary speech-language evaluations when formal diagnosis is mandated for school exam provisions." }
    ]
  },

  // 3. South Asia (Pakistan, India, Bangladesh)
  'south-asia': {
    hospitals: [
      { name: "The Children's Hospital & Institute of Child Health (ICH, Lahore)", type: "Premier Pediatric Hospital", notes: "Largest dedicated public tertiary child hospital in Pakistan with specialized neurodevelopment and neurology units." },
      { name: "Aga Khan University Hospital (AKUH, Karachi)", type: "JCI-Accredited University Medical Center", notes: "Gold standard for pediatric neurology, child psychiatry, and early childhood developmental screening in Pakistan." },
      { name: "Shifa International Hospital (Islamabad)", type: "Tertiary Care Center", notes: "Multidisciplinary rehabilitation and child developmental psychology unit serving the capital region." },
      { name: "Mayo Hospital & King Edward Medical University (Lahore)", type: "Tertiary Teaching Hospital", notes: "Major pediatric medicine, child psychiatry, and speech therapy clinical department." }
    ],
    redditThemes: [
      {
        topic: "Severe Shortage of Certified Practitioners (r/pakistan & r/lahore)",
        communityQuoteOrTheme: "Parents discuss the acute scarcity of certified ADOS-2 practitioners and developmental psychologists, frequently encountering untrained centres pushing unscientific therapies.",
        clinicalSolution: "Ms. Rabbia Ashraf brings certified ADOS-2 practitioner credentials and MS Clinical Psychology training, delivering evidence-based clinical guidance directly to local and overseas families."
      },
      {
        topic: "Screen Time Dependency & Urban Isolation",
        communityQuoteOrTheme: "Posts highlight intense toddler screen time (YouTube/tablets) due to limited outdoor parks, resulting in delayed speech and poor social eye contact.",
        clinicalSolution: "We construct step-by-step screen de-escalation schedules, sensory home circuits, and parent-child interaction routines (PCIT-grounded) to ignite spontaneous spoken language."
      },
      {
        topic: "Academic Rote Pressure in Private Schools",
        communityQuoteOrTheme: "Children facing severe penalties, shaming, or expulsion in traditional schooling systems because of untreated ADHD hyperactivity or learning difficulties.",
        clinicalSolution: "We guide parents on how to interface with Pakistani school heads to secure classroom adaptations, positive reinforcement charts, and homework accommodations."
      }
    ],
    culturalContextExtended: "In Pakistan and South Asia, mental health terminology is frequently stigmatized or misunderstood. Families often face immense pressure from in-laws and relatives, who may equate neurodivergence with personal weakness. Ms. Rabbia Ashraf provides compassionate, deeply respectful guidance in Urdu and English that honors family traditions while implementing world-class scientific interventions.",
    nextSteps: [
      { step: 1, title: "Pediatric & Hearing Evaluation", description: "Visit a qualified pediatrician at The Children's Hospital Lahore, AKUH Karachi, or Shifa Islamabad to rule out physical or hearing impairments." },
      { step: 2, title: "Comprehensive Home Behavioral Plan", description: "Consult with Ms. Rabbia Ashraf to establish an individualized behavioral and communication foundation tailored to your household." },
      { step: 3, title: "Targeted Allied Therapies", description: "Enroll in reputable speech and occupational therapy with evidence-based milestones rather than unproven commercial packages." },
      { step: 4, title: "School Collaboration", description: "Establish structured teacher communication to ensure your child receives constructive classroom support rather than punitive discipline." }
    ]
  },

  // 4. Australia & New Zealand
  'australia-new-zealand': {
    hospitals: [
      { name: "The Royal Children's Hospital (Melbourne, VIC)", type: "Premier Pediatric Hospital", notes: "Internationally renowned child development, autism assessment, and neurodevelopmental research center." },
      { name: "Sydney Children's Hospital, Randwick (Sydney, NSW)", type: "Tertiary Pediatric Hospital", notes: "Comprehensive developmental assessment service and pediatric neurodevelopmental clinics." },
      { name: "Queensland Children's Hospital (Brisbane, QLD)", type: "State Children's Hospital", notes: "Major pediatric tertiary referral center for Queensland child development and complex behavior." },
      { name: "Perth Children's Hospital (Perth, WA)", type: "State Specialist Center", notes: "Dedicated state hub for developmental pediatrics, autism diagnostic services, and school inclusion." }
    ],
    redditThemes: [
      {
        topic: "NDIS Navigational Fatigue (r/ausents, r/melbourne & r/sydney)",
        communityQuoteOrTheme: "Australian parents frequently discuss the complex bureaucratic hurdles of NDIS Early Childhood Early Intervention (ECEI) and 12-month private waitlists.",
        clinicalSolution: "We help parents structure their child's functional capacity documentation, functional goals, and behavioral tracking to align clearly with allied health planning."
      },
      {
        topic: "Private Assessment Costs vs Medicare Rebates",
        communityQuoteOrTheme: "Parents sharing that developmental pediatrician appointments cost upwards of $2,500 AUD out-of-pocket with minimal Medicare rebates.",
        clinicalSolution: "We provide cost-effective, immediate parent coaching to establish behavioral stability and sensory accommodations while waiting for specialist medical appointments."
      },
      {
        topic: "School Adjustments under NCCD",
        communityQuoteOrTheme: "Navigating Nationally Consistent Collection of Data on School Students with Disability (NCCD) and obtaining school adjustments for ADHD/ASD.",
        clinicalSolution: "We equip parents with actionable recommendations tailored for Australian classroom teachers and IEP meetings."
      }
    ],
    culturalContextExtended: "Australia emphasizes neurodiversity-affirming care and functional capacity support. Many diaspora and multicultural families (including large South Asian, Chinese, and Middle Eastern communities in Western Sydney and Melbourne) seek bilingual clinicians who can navigate both Australian educational expectations and cultural family values.",
    nextSteps: [
      { step: 1, title: "GP & Pediatrician Referral", description: "Obtain a referral from your GP to a developmental pediatrician under Medicare Item 135/289." },
      { step: 2, title: "NDIS Early Childhood Partner", description: "Connect with your local NDIS partner (EACH, Benevolent Society, etc.) for early childhood developmental funding." },
      { step: 3, title: "Specialist Parent Consultation", description: "Schedule an online strategy session with Ms. Rabbia Ashraf to establish evidence-based home routines and sensory regulation plans." },
      { step: 4, title: "School NCCD Collaboration", description: "Provide documented home strategies to your child's primary school to ensure tailored classroom adjustments under the NCCD framework." }
    ]
  },

  // 5. North America (USA & Canada)
  'north-america': {
    hospitals: [
      { name: "Children's Hospital of Philadelphia (CHOP, USA)", type: "Top-Ranked Pediatric Medical Center", notes: "World-renowned Center for Autism Research (CAR) and developmental pediatrics department." },
      { name: "Boston Children's Hospital / Harvard Medical School (USA)", type: "Pediatric Teaching Hospital", notes: "Gold standard research and clinical center for pediatric neurology, ADHD, and autism." },
      { name: "The Hospital for Sick Children (SickKids, Toronto, Canada)", type: "World-Leading Pediatric Academic Hospital", notes: "Canada's foremost pediatric hospital for neurodevelopment, genetics, and complex child psychology." },
      { name: "Child Mind Institute (New York City, USA)", type: "Specialized Pediatric Psychology Clinic", notes: "National authority on child mental health, ADHD executive function, and pediatric anxiety." },
      { name: "BC Children's Hospital (Vancouver, BC, Canada)", type: "Provincial Pediatric Hospital", notes: "Lead provincial center for Sunny Hill Health Centre child development evaluations." }
    ],
    redditThemes: [
      {
        topic: "Developmental Pediatrician Bottlenecks (r/Parenting & r/ADHD)",
        communityQuoteOrTheme: "Parents across US and Canadian cities post about 12-to-18 month waiting lists just to see a Developmental-Behavioral Pediatrician (DBP) or get an ADOS-2 evaluation.",
        clinicalSolution: "We deliver immediate, actionable behavioral and sensory roadmaps so parents do not lose a crucial year of neuroplasticity while stuck in waiting list queues."
      },
      {
        topic: "IEP vs 504 Plan School Friction",
        communityQuoteOrTheme: "Frustration when schools insist a child is 'too smart for an IEP' despite frequent emotional dysregulation, sensory overload, and executive function breakdowns.",
        clinicalSolution: "We review psychoeducational and neuropsychological evaluations, translating test scores into concrete classroom accommodations and measurable IEP goals."
      },
      {
        topic: "Out-of-Network Private Neuropsych Costs",
        communityQuoteOrTheme: "Private neuropsychological evaluations costing $3,500 to $6,000 USD out-of-pocket, with health insurance denying prior authorizations.",
        clinicalSolution: "We offer affordable clinical report reviews and parent strategy sessions to help parents determine whether a full neuropsych is necessary or if targeted parent guidance suffices."
      }
    ],
    culturalContextExtended: "In North America, parents navigate intricate legal frameworks (IDEA, Section 504, Canadian provincial education acts). Expatriate and immigrant families often face additional hurdles balancing North American clinical terminology with their home cultural heritage, needing clinicians who respect their unique family identity.",
    nextSteps: [
      { step: 1, title: "Pediatric Primary Care Visit", description: "Schedule a comprehensive wellness visit with your pediatrician to obtain formal referrals to a Developmental-Behavioral Pediatrician." },
      { step: 2, title: "Formal School Evaluation Request", description: "Submit a written request to your school district for a comprehensive multi-disciplinary psychoeducational evaluation (Child Find)." },
      { step: 3, title: "Online Parent Support & Roadmap", description: "Engage with Ms. Rabbia Ashraf for immediate behavioral de-escalation, visual structure, and home executive function support." },
      { step: 4, title: "IEP / 504 Plan Implementation", description: "Utilize clinical recommendations during school meetings to secure legally binding accommodations (sensory breaks, preferential seating, extended time)." }
    ]
  },

  // 6. Global & Western Europe / Asia default profile
  'global': {
    hospitals: [
      { name: "Leading Regional University Pediatric Hospital", type: "Tertiary Pediatric Academic Center", notes: "Public regional teaching hospital providing specialized child neurology and neurodevelopmental diagnostics." },
      { name: "Accredited International Pediatric Health Clinic", type: "Private Multidisciplinary Center", notes: "English-speaking international health clinic catering to expatriate and local families." }
    ],
    redditThemes: [
      {
        topic: "Finding English-Speaking Neurodevelopmental Experts",
        communityQuoteOrTheme: "International and expatriate parents sharing challenges finding accredited, English-speaking child psychologists in non-English speaking host countries.",
        clinicalSolution: "We provide globally accessible, secure online parent consultations across international time zones without geographical boundaries."
      },
      {
        topic: "Navigating International School SEN Support",
        communityQuoteOrTheme: "Discussions regarding international school learning support fees and requirements for external psychological evaluations.",
        clinicalSolution: "We review existing diagnostic reports and design practical IEP recommendations recognized by international British and American schools."
      }
    ],
    culturalContextExtended: "Expatriate and globally mobile families experience unique cross-cultural challenges, including multiple relocations, third-culture-kid dynamics, and fragmented healthcare histories. Our service provides consistent, ongoing developmental guidance wherever your family is stationed.",
    nextSteps: [
      { step: 1, title: "Local Medical Checkup", description: "Consult your regional pediatrician or international health clinic for initial baseline physical and sensory screenings." },
      { step: 2, title: "International Telehealth Strategy", description: "Connect with Ms. Rabbia Ashraf to establish personalized home routines and evidence-based behavioral strategies." },
      { step: 3, title: "International School Engagement", description: "Coordinate with your school's learning diversity team to implement targeted classroom modifications." }
    ]
  }
};

/**
 * Returns the insight profile for a given city based on its publicationRegion, countrySlug, or citySlug.
 */
export function getCityInsights(countrySlug?: string, publicationRegion?: string, citySlug?: string): RegionInsightProfile {
  const cSlug = countrySlug?.toLowerCase() || '';
  const pReg = publicationRegion?.toLowerCase() || '';

  if (cSlug === 'united-kingdom' || cSlug === 'ireland' || pReg.includes('uk') || pReg.includes('ireland')) {
    return regionalProfiles['uk-ireland'];
  }
  if (cSlug === 'united-arab-emirates' || cSlug === 'saudi-arabia' || cSlug === 'qatar' || cSlug === 'kuwait' || cSlug === 'bahrain' || cSlug === 'oman' || pReg.includes('middle east')) {
    return regionalProfiles['middle-east-gulf'];
  }
  if (cSlug === 'pakistan' || cSlug === 'india' || cSlug === 'bangladesh' || pReg.includes('south asia')) {
    return regionalProfiles['south-asia'];
  }
  if (cSlug === 'australia' || cSlug === 'new-zealand' || pReg.includes('australia') || pReg.includes('oceania')) {
    return regionalProfiles['australia-new-zealand'];
  }
  if (cSlug === 'united-states' || cSlug === 'canada' || pReg.includes('north america')) {
    return regionalProfiles['north-america'];
  }

  return regionalProfiles['global'];
}

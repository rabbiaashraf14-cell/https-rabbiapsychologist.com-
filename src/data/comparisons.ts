export interface ComparisonItem {
  slug: string;
  title: string;
  metaDescription: string;
  category: 'Diagnostic & Symptoms' | 'Assessment & Testing' | 'Therapies & Interventions';
  badgeText: string;
  readTime: string;
  evidenceGrade: string;
  clinicalGuidelines: string[];
  peerReviewedCitations: { citation: string; doiOrUrl?: string }[];
  subjectA: {
    name: string;
    subheading: string;
    underlyingNeurology: string;
    primarySymptoms: string[];
    whatHelps: string[];
    whatHarms: string[];
  };
  subjectB: {
    name: string;
    subheading: string;
    underlyingNeurology: string;
    primarySymptoms: string[];
    whatHelps: string[];
    whatHarms: string[];
  };
  keyDifferencesTable: {
    domain: string;
    subjectAObservation: string;
    subjectBObservation: string;
    clinicalSignificance: string;
  }[];
  atHomeDifferentiatorProtocol: {
    stepNumber: number;
    title: string;
    action: string;
    observationTip: string;
  }[];
  clinicalVerdict: string;
  whenToSeekSpecialist: string[];
  faqList: {
    question: string;
    answer: string;
  }[];
  heroImage: string;
  schemaType?: string;
}

export const comparisons: ComparisonItem[] = [
  {
    slug: 'adhd-vs-sensory-processing-disorder',
    title: 'ADHD vs Sensory Processing Disorder (SPD): Clinical Differences & Diagnostic Matrix',
    metaDescription: 'Is your child hyperactive or seeking sensory stimulation? Compare underlying neurology, DSM-5-TR criteria, observation tests, and evidence-based interventions.',
    category: 'Diagnostic & Symptoms',
    badgeText: 'Evidence-Based Diagnostic Matrix',
    readTime: '7 min read',
    evidenceGrade: 'Class A Clinical Guidance (DSM-5-TR / AOTA)',
    clinicalGuidelines: ['DSM-5-TR Diagnostic Criteria for ADHD (Section 314.01)', 'American Occupational Therapy Association (AOTA) Sensory Integration Guidelines'],
    peerReviewedCitations: [
      { citation: 'Lane, S. J., & Reynolds, S. (2019). Sensory Processing in Attention Deficit Hyperactivity Disorder: A Systematic Review. Front. Integr. Neurosci., 13:32.' },
      { citation: 'Miller, L. J., et al. (2007). Concept Evolution in Sensory Processing Disorder: A Proposed Nosology. Am J Occup Ther, 61(2), 135-140.' },
      { citation: 'Barkley, R. A. (2015). Attention-Deficit Hyperactivity Disorder: A Handbook for Diagnosis and Treatment (4th ed.). Guilford Press.' }
    ],
    subjectA: {
      name: 'ADHD (Attention-Deficit / Hyperactivity Disorder)',
      subheading: 'Dopaminergic Executive Dysfunction',
      underlyingNeurology: 'Hypo-activation in frontostriatal brain circuits regulating dopamine and norepinephrine, leading to impaired working memory, impulse inhibition, and time blindness.',
      primarySymptoms: [
        'Motor restlessness persists across all sensory environments (quiet or loud)',
        'Chronic difficulty initiating non-preferred tasks (dopamine deficit)',
        'Frequent forgetfulness, losing items, and severe time blindness',
        'Impulsive speech and physical movement without forethought of consequences'
      ],
      whatHelps: ['External visual schedules and timers', 'Dopamine-rich interest-based micro-goals', 'Body doubling and structured routines', 'Clinical executive function coaching'],
      whatHarms: ['Open-ended unstructured homework blocks', 'Punishing time blindness with lecture-based timeouts', 'Expectation of pure willpower to sustain attention']
    },
    subjectB: {
      name: 'Sensory Processing Disorder (Sensory Seeking / Craving)',
      subheading: 'Neurological Modulation & Arousal Imbalance',
      underlyingNeurology: 'Inefficient filtering, gating, or modulation of incoming sensory inputs in the thalamus and vestibular-proprioceptive networks, requiring physical movement to reach alert homeostasis.',
      primarySymptoms: [
        'Restlessness dramatically decreases after heavy work or sensory compression',
        'Crashing, jumping, chewing clothing, or intense tactile exploration',
        'Motor activity is purposeful: seeking pressure, vibration, or movement',
        'Attention stabilizes immediately once sensory arousal threshold is met'
      ],
      whatHelps: ['Sensory diet with proprioceptive heavy work (carrying, climbing)', 'Dynamic seating (wobble cushions, resistance bands)', 'Frequent movement breaks before sustained focus', 'Compression garments and weighted accessories'],
      whatHarms: ['Forcing rigid seated posture during table tasks', 'Denying physical movement as a disciplinary consequence', 'Bright fluorescent flickering lights and acoustic echo']
    },
    keyDifferencesTable: [
      {
        domain: 'Response to Heavy Physical Work',
        subjectAObservation: 'Child remains distractible, impulsive, and disorganized even after tiring physical activity.',
        subjectBObservation: 'Child visibly calms down, gains focus, and can sit calmly for table tasks following proprioceptive input.',
        clinicalSignificance: 'Sensory seekers normalize arousal through movement; ADHD executive deficits remain unmitigated by exercise alone.'
      },
      {
        domain: 'Impact of the Environment',
        subjectAObservation: 'Inattention occurs in both chaotic classrooms and silent libraries.',
        subjectBObservation: 'Dysregulation surges in sensory-depriving or sensory-overwhelming environments, but normalizes in balanced rooms.',
        clinicalSignificance: 'SPD is context-and-stimulus dependent; ADHD is neurodevelopmentally pervasive across settings.'
      },
      {
        domain: 'Task Initiation vs Physical Craving',
        subjectAObservation: 'Struggles to start tasks due to lack of dopamine salience and executive organization.',
        subjectBObservation: 'Struggles to start tasks because the body feels ungrounded, restless, or physiologically uncomfortable.',
        clinicalSignificance: 'Differentiates executive task initiation failure from physiological motor-sensory craving.'
      },
      {
        domain: 'Co-occurrence Potential',
        subjectAObservation: 'Approximately 40% to 60% of ADHD children exhibit co-morbid sensory modulation differences.',
        subjectBObservation: 'Pure sensory seeking can mimic hyperactivity without true impairment in non-verbal working memory.',
        clinicalSignificance: 'Requires thorough dual-domain assessment to prevent misdiagnosis or unaddressed needs.'
      }
    ],
    atHomeDifferentiatorProtocol: [
      {
        stepNumber: 1,
        title: 'The 10-Minute Proprioceptive Reset Test',
        action: 'Before initiating homework or seated focus, engage your child in 5-10 minutes of heavy work (animal walks, carrying weighted books, wall push-ups).',
        observationTip: 'If your child can now focus quietly on schoolwork for 20 minutes, sensory under-arousal is a primary driver. If they still lose their pencil 8 times and wander away mentally, executive ADHD is present.'
      },
      {
        stepNumber: 2,
        title: 'The Silent Room Contrast Test',
        action: 'Observe your child working in an ultra-quiet, visual-stimulus-free space.',
        observationTip: 'Sensory over-responders thrive in quiet; ADHD children often struggle more in silence because under-stimulated dopamine circuits trigger daydreaming or internal hyperactivity.'
      }
    ],
    clinicalVerdict: 'ADHD and Sensory Processing Disorder frequently co-exist, but they stem from distinct neurological mechanisms. Treating an ADHD child purely with sensory cushions will not solve working memory failure; conversely, medicating an undiagnosed sensory seeker will not meet their nervous system\'s requirement for proprioceptive feedback.',
    whenToSeekSpecialist: [
      'Motor restlessness disrupts safety, school learning, or family peace across multiple settings',
      'Child expresses physical distress regarding clothing textures, sound frequencies, or food textures',
      'Frequent homework battles exceeding 45 minutes every evening with significant emotional distress'
    ],
    faqList: [
      {
        question: 'Can a child have both ADHD and Sensory Processing Disorder?',
        answer: 'Yes. Peer-reviewed research indicates that between 40% and 65% of children with ADHD also demonstrate clinically significant sensory processing differences. Comprehensive assessment evaluates both executive functioning and sensory modulation profiles.'
      },
      {
        question: 'Does sensory integration therapy cure ADHD?',
        answer: 'No. Sensory integration therapy addresses nervous system regulation and sensory modulation. While it can substantially reduce the physical restlessness that distracts an ADHD child, it does not replace executive function coaching, environmental scaffolding, or medical management.'
      }
    ],
    heroImage: '/_astro/missed-autism-adhd-in-bright-girls-and-quiet-children.jpg'
  },
  {
    slug: 'autism-meltdown-vs-temper-tantrum',
    title: 'Autism Meltdown vs Temper Tantrum: Physiological Differences & Emergency Response',
    metaDescription: 'Understand the neurobiological difference between a behavioral temper tantrum and an autistic sensory meltdown. Learn evidence-based de-escalation protocols.',
    category: 'Diagnostic & Symptoms',
    badgeText: 'Neurobiology of Dysregulation',
    readTime: '6 min read',
    evidenceGrade: 'NICE Clinical Guideline CG128 / Polyvagal Clinical Framework',
    clinicalGuidelines: ['NICE Clinical Guideline CG128 (Autism in under 19s: support and management)', 'Porges Polyvagal Safety & Neuroception Model'],
    peerReviewedCitations: [
      { citation: 'Lipsky, D. (2013). Managing Autism Meltdowns: From Panic to Peace. Jessica Kingsley Publishers.' },
      { citation: 'Beery, R., et al. (2013). Meltdowns and Tantrums in Children with Autism Spectrum Disorders. Journal of Autism and Developmental Disorders, 43(8), 1845-1854.' },
      { citation: 'Porges, S. W. (2011). The Polyvagal Theory: Neurophysiological Foundations of Emotions, Attachment, Communication, and Self-regulation. W. W. Norton & Company.' }
    ],
    subjectA: {
      name: 'Temper Tantrum',
      subheading: 'Goal-Directed Operant Behavior',
      underlyingNeurology: 'Prefrontal cortex remains engaged; the behavior is an expression of frustration designed to achieve a social or material outcome (power, attention, or an item).',
      primarySymptoms: [
        'Child maintains awareness of their safety and physical environment',
        'Child frequently checks adult facial expressions and body language for reactions',
        'Tantrum abruptly ends if the desired toy, screen, or outcome is granted',
        'Verbal negotiation, redirection, or planned ignoring can de-escalate the episode'
      ],
      whatHelps: ['Calm and firm boundary consistency', 'Offering structured choices before conflict', 'Validating the feeling while holding the boundary', 'Praising recovery quickly without holding grudges'],
      whatHarms: ['Giving in to the demand after screaming begins', 'Engaging in lengthy rational debates during high emotion', 'Matching the child\'s anger with shouting']
    },
    subjectB: {
      name: 'Autistic Sensory Meltdown',
      subheading: 'Involuntary Sympathetic Nervous System Hijack',
      underlyingNeurology: 'Acute amygdala takeover and autonomic crisis triggered by cumulative sensory, cognitive, or emotional overload. The thinking prefrontal cortex is completely offline.',
      primarySymptoms: [
        'Child has zero safety awareness and may bolt, thrash, or hit without self-preservation',
        'No audience monitoring; the meltdown occurs identically whether anyone is watching or not',
        'Handing the child the original item does NOT stop the meltdown; it continues unabated',
        'Episode is followed by intense exhaustion, shame, disorientation, or deep sleep'
      ],
      whatHelps: ['Low-arousal approach: reduce sensory inputs (dim lights, eliminate voice)', 'Physical safety protection without aggressive restraint', 'Co-regulation through quiet, calm physiological presence', 'Generous recovery time with water, darkness, and zero demands'],
      whatHarms: ['Consequences, threats, or loss of privileges during the episode', 'Demanding eye contact or asking "Why did you do that?"', 'Crowding the child or using restraint unless imminent danger occurs']
    },
    keyDifferencesTable: [
      {
        domain: 'Neurological State',
        subjectAObservation: 'Conscious, goal-oriented decision to protest an unmet desire.',
        subjectBObservation: 'Involuntary neurological fight-or-flight cascade driven by nervous system overwhelm.',
        clinicalSignificance: 'Tantrums are behavioral choices; meltdowns are neurological crises.'
      },
      {
        domain: 'Audience Dependency',
        subjectAObservation: 'Needs an audience; peeks to verify whether parents are watching or reacting.',
        subjectBObservation: 'Completely indifferent to who is present; proceeds even if the child is entirely alone.',
        clinicalSignificance: 'Confirms lack of social operant conditioning in true sensory meltdowns.'
      },
      {
        domain: 'Effect of Conceding the Demand',
        subjectAObservation: 'Immediately ceases or rapidly resolves once the coveted item or attention is surrendered.',
        subjectBObservation: 'Offering the desired item has zero effect; the child may throw it away or scream louder.',
        clinicalSignificance: 'Proves the root issue is physiological dysregulation rather than desire for an object.'
      },
      {
        domain: 'Post-Episode State',
        subjectAObservation: 'Quickly returns to baseline play once reconciled.',
        subjectBObservation: 'Displays extreme autonomic fatigue, trembling, pallor, thirst, and deep lethargy.',
        clinicalSignificance: 'Signifies severe cortisol and adrenaline depletion post-crisis.'
      }
    ],
    atHomeDifferentiatorProtocol: [
      {
        stepNumber: 1,
        title: 'The Silent Surrender Observation',
        action: 'If safe, quietly place the contested object within the child\'s reach without speaking.',
        observationTip: 'If crying ceases immediately and play resumes, you are managing a boundary tantrum. If the child does not even notice or violently bats the object away, they are inside a neurological meltdown.'
      },
      {
        stepNumber: 2,
        title: 'The Rumbling Stage Retrospective',
        action: 'Look back at the preceding 2 hours: was there fluorescent lighting, crowded noise, missed meals, or multiple fast transitions?',
        observationTip: 'Meltdowns are rarely spontaneous; they are the bursting of a sensory bucket that filled steadily throughout the day.'
      }
    ],
    clinicalVerdict: 'Applying behavioral discipline (punishments, timeouts, scolding) to an autistic child during a sensory meltdown is clinically counterproductive and traumatizing. Meltdowns require physiological stabilization, sensory withdrawal, and compassionate co-regulation.',
    whenToSeekSpecialist: [
      'Meltdowns occur daily or result in self-injurious behavior (head-banging, skin-picking)',
      'School reports violent emotional collapses occurring right after drop-off or at the end of the day',
      'Parents feel walking on eggshells and unable to leave the home due to unpredictable public collapses'
    ],
    faqList: [
      {
        question: 'Can a tantrum turn into a meltdown?',
        answer: 'Yes. If a child begins with a typical tantrum and the adult responds with high arousal, screaming, physical containment, or escalating threats, the child\'s nervous system can tip from emotional frustration into physiological panic, triggering a secondary neurobiological meltdown.'
      },
      {
        question: 'What is the fastest way to stop an autistic meltdown?',
        answer: 'You cannot abruptly "stop" an active meltdown because stress hormones (adrenaline and cortisol) must metabolize out of the bloodstream. The fastest resolution occurs when adults adopt a "Low Arousal" approach: silence, dimming lights, stepping back to give space, and ensuring physical safety.'
      }
    ],
    heroImage: '/_astro/tantrum-vs-meltdown-what-is-the-difference.webp'
  },
  {
    slug: 'speech-delay-vs-autism-spectrum-disorder',
    title: 'Speech Delay vs Autism Spectrum Disorder: Clinical Pragmatics & Early Markers',
    metaDescription: 'Does late talking mean autism? Discover the critical differences between expressive speech-language delays and Autism Spectrum Disorder using validated developmental markers.',
    category: 'Diagnostic & Symptoms',
    badgeText: 'Developmental Milestones',
    readTime: '8 min read',
    evidenceGrade: 'AAP Pediatric Diagnostic Protocol / ADOS-2 Standard',
    clinicalGuidelines: ['American Academy of Pediatrics (AAP) Identification and Evaluation of Children with ASD', 'NICE Guideline CG128: Autism in Children'],
    peerReviewedCitations: [
      { citation: 'Zwaigenbaum, L., et al. (2015). Early Screening of Autism Spectrum Disorder: Recommendations for Practice and Research. Pediatrics, 136(Supplement 1), S41-S60.' },
      { citation: 'Lord, C., et al. (2012). Autism Diagnostic Observation Schedule, Second Edition (ADOS-2) Manual. Western Psychological Services.' },
      { citation: 'Paul, R., & Norbury, C. (2012). Language Disorders from Infancy through Adolescence: Listening, Speaking, Reading, Writing, and Communicating. Elsevier.' }
    ],
    subjectA: {
      name: 'Expressive Speech Delay (Isolated Language Delay)',
      subheading: 'Impaired Verbal Output with Intact Social Intent',
      underlyingNeurology: 'Phonological, structural, or motor-speech formulation delay in Broca\'s area without impairment in underlying social-emotional reciprocity.',
      primarySymptoms: [
        'Strong non-verbal communication: uses pointing, nodding, pantomime, and facial expressions',
        'Consistently uses declarative pointing (points to share interest: "Look at that airplane!")',
        'Brings objects to show parents purely to share joy or curiosity',
        'Imitates adult actions readily (cooking, waving, pretend play with teddy bears)'
      ],
      whatHelps: ['Speech-Language Pathology (SLP) phonological therapy', 'Augmentative and Alternative Communication (AAC) to bridge words', 'Rich conversational modeling at home', 'Hearing and audiometric evaluations'],
      whatHarms: ['Anticipating every physical need without giving opportunities to gesture', 'Over-correcting pronunciation during stressful interactions', 'Assuming late talking is always harmless and waiting past age 3 to assess']
    },
    subjectB: {
      name: 'Autism Spectrum Disorder (ASD)',
      subheading: 'Atypical Social Pragmatics & Repetitive Patterns',
      underlyingNeurology: 'Differences in social brain networks (superior temporal sulcus, amygdala, mirror neuron system) affecting intuitive social-emotional reciprocity and perceptual filtering.',
      primarySymptoms: [
        'Impaired non-verbal communication: rarely points to share interest (declarative pointing)',
        'Uses parent\'s hand as an inanimate tool (leading by the wrist without eye contact)',
        'Limited response to name when engrossed in play, despite normal hearing',
        'Presence of repetitive motor movements (hand flapping, spinning objects, toe-walking)'
      ],
      whatHelps: ['Early relational developmental intervention (DIR/Floortime, NDBI)', 'Visual schedules, PECS, and core-word AAC systems', 'Sensory accommodation and predictability in daily transitions', 'ADOS-2 comprehensive neurodevelopmental assessment'],
      whatHarms: ['Forceful eye contact training which increases physiological anxiety', 'Viewing speech production as the sole metric of communication success', 'Delaying developmental support until public kindergarten']
    },
    keyDifferencesTable: [
      {
        domain: 'Joint Attention & Declarative Pointing',
        subjectAObservation: 'Points vigorously at birds, trucks, or toys to say "Look at that, Mummy!"',
        subjectBObservation: 'Points primarily for imperative requests ("Give me that"), rarely to share shared delight.',
        clinicalSignificance: 'Declarative pointing is the single strongest clinical discriminator between speech delay and ASD at 18-24 months.'
      },
      {
        domain: 'Use of Gestures & Body Language',
        subjectAObservation: 'Compensates for missing words with rich mime, shoulder shrugs, nodding, and expressive eyes.',
        subjectBObservation: 'Minimal compensatory gesturing; may pull a caregiver by the wrist without looking at their face.',
        clinicalSignificance: 'Evaluates whether communication intent is intact despite expressive motor limitations.'
      },
      {
        domain: 'Imitation & Pretend Play',
        subjectAObservation: 'Feeds a doll, zooms a toy car on a carpet road, mimics adult chores.',
        subjectBObservation: 'Lines up cars by color, spins the wheels repeatedly, or fixates on non-functional parts of toys.',
        clinicalSignificance: 'Symbolic play reflects cognitive flexibility and social mimicry networks.'
      },
      {
        domain: 'Response to Name',
        subjectAObservation: 'Turns reliably when called by name unless engrossed in a favorite television program.',
        subjectBObservation: 'Frequently shows no orientation to name, leading parents to suspect hearing loss, yet notices a wrapper opening.',
        clinicalSignificance: 'Classic marker of selective social orienting differences.'
      }
    ],
    atHomeDifferentiatorProtocol: [
      {
        stepNumber: 1,
        title: 'The "Look at That!" Window Test',
        action: 'Stand by a window with your child. Point excitedly outside at an animal or airplane and say "Look, a bird!" without touching the child.',
        observationTip: 'Does your child follow your finger to look at the bird, then look back at your face to share your excitement? If yes, joint attention is intact. If they look only at your finger or ignore the bid, seek developmental evaluation.'
      },
      {
        stepNumber: 2,
        title: 'The Hand-as-Tool Observation',
        action: 'Place a desired snack in an airtight jar out of reach on a counter.',
        observationTip: 'Does your child bring you the jar, make eye contact, and point/grunt? Or do they take your wrist and place your hand on the jar lid like a physical utensil without looking at you?'
      }
    ],
    clinicalVerdict: 'Speech delay is an output bottleneck; Autism Spectrum Disorder is a qualitative difference in social reciprocity, joint attention, and sensory processing. A child who cannot speak but makes rich eye contact, points to share excitement, and plays imaginatively has an isolated speech delay, not autism.',
    whenToSeekSpecialist: [
      'No babbling or social gestures (pointing, waving goodbye) by 12 months of age',
      'No single spoken words by 16 months, or no two-word spontaneous phrases by 24 months',
      'Any loss or regression of speech, babbling, or social engagement at any age'
    ],
    faqList: [
      {
        question: 'Can bilingualism or multilingualism cause speech delay or autism?',
        answer: 'No. Clinical evidence unequivocally shows that exposure to multiple languages does not cause speech delay or autism. A multilingual child may mix vocabularies, but their milestone acquisition and social communicative intent develop on the exact same trajectory as monolingual peers.'
      },
      {
        question: 'What assessment evaluates both speech delay and autism?',
        answer: 'A gold-standard developmental evaluation includes the Autism Diagnostic Observation Schedule (ADOS-2) administered by a qualified psychologist, alongside a formal speech-language assessment (such as the CELF-P or PLS-5) conducted by a licensed speech-language pathologist.'
      }
    ],
    heroImage: '/_astro/speech-delay-vs-autism-understanding-the-difference.webp'
  },
  {
    slug: 'pathological-demand-avoidance-vs-oppositional-defiant-disorder',
    title: 'PDA vs ODD: Why Traditional Discipline Escalates Pathological Demand Avoidance',
    metaDescription: 'Learn why Pathological Demand Avoidance (PDA) is driven by autonomic panic while Oppositional Defiant Disorder (ODD) is relational defiance. Essential clinical guide for parents and educators.',
    category: 'Diagnostic & Symptoms',
    badgeText: 'Anxiety vs Defiance',
    readTime: '7 min read',
    evidenceGrade: 'British Psychological Society (BPS) Clinical Framework',
    clinicalGuidelines: ['National Autistic Society (UK) PDA Clinical Guidelines', 'DSM-5-TR Oppositional Defiant Disorder Criteria (313.81)'],
    peerReviewedCitations: [
      { citation: 'Christie, P., et al. (2012). Understanding Pathological Demand Avoidance Syndrome in Children: A Guide for Parents, Teachers and Other Professionals. Jessica Kingsley Publishers.' },
      { citation: 'Eaton, J. (2018). An Introduction to Low Arousal Approaches to Support People with Autism and Demand Avoidance. PANDA Press.' },
      { citation: 'Newson, E., et al. (2003). Pathological demand avoidance syndrome: a necessary distinction within the pervasive developmental disorders. Arch Dis Child, 88(7), 595-600.' }
    ],
    subjectA: {
      name: 'PDA (Pathological Demand Avoidance / Pervasive Drive for Autonomy)',
      subheading: 'Autonomic Panic Driven by Perceived Loss of Control',
      underlyingNeurology: 'Extreme neuroception of threat; ordinary demands (putting on socks, going to a fun party, eating lunch) trigger an acute fight, flight, or freeze sympathetic surge.',
      primarySymptoms: [
        'Resists and avoids the everyday demands of life, including activities the child genuinely enjoys',
        'Uses social strategies to evade demands (distraction, excuses, fantasy roleplay, charming negotiators)',
        'Appears superficially sociable but has underlying difficulties with social hierarchy and equality',
        'Severe emotional volatility when autonomy feels compromised'
      ],
      whatHelps: ['Low demand parenting and declarative language ("I wonder if the shoes fit...")', 'Offering genuine collaborative choices with zero coercion', 'Humor, novel framing, and entering the child\'s imaginative world', 'Recognizing avoidance as anxiety/panic rather than willful naughtiness'],
      whatHarms: ['Traditional behavioral reward/punishment charts (star charts trigger panic)', 'Authoritarian commands ("Because I said so")', 'Consequences and isolation timeouts']
    },
    subjectB: {
      name: 'ODD (Oppositional Defiant Disorder)',
      subheading: 'Relational Defiance & Power Struggle',
      underlyingNeurology: 'Emotional dysregulation and oppositional cognitive schema directed primarily against authority figures (parents, teachers) rather than against routine physiological tasks.',
      primarySymptoms: [
        'Frequently loses temper and actively defies or refuses to comply with rules and requests',
        'Deliberately annoys people and blames others for their mistakes or misbehavior',
        'Spiteful or vindictive behavior appearing in reaction to perceived injustice or reprimands',
        'Does not avoid demands that bring personal enjoyment or direct benefit'
      ],
      whatHelps: ['Clear, calm, predictable boundaries and explicit house agreements', 'Parent-Child Interaction Therapy (PCIT)', 'Catching the child being good with positive reinforcement', 'Collaborative and Proactive Solutions (Dr. Ross Greene framework)'],
      whatHarms: ['Inconsistent parental boundaries and emotional reactive arguing', 'Harsh physical or degrading discipline', 'Zero praise for compliant behavior']
    },
    keyDifferencesTable: [
      {
        domain: 'Avoidance of Pleasurable Activities',
        subjectAObservation: 'May refuse to open birthday presents, visit Disneyland, or play their favorite game because the expectation triggers panic.',
        subjectBObservation: 'Eagerly complies with and engages in enjoyable, fun activities; defiance is targeted at unwelcome adult authority commands.',
        clinicalSignificance: 'Crucial differentiator: PDA avoids demands regardless of personal pleasure; ODD rebels against authority control.'
      },
      {
        domain: 'Avoidance Strategies Used',
        subjectAObservation: 'Employs creative social strategies: feigning physical incapacity ("My legs turned into jelly"), roleplaying, distraction, and excuses.',
        subjectBObservation: 'Employs direct refusal: arguing, shouting "No, make me!", deliberate non-compliance, and anger.',
        clinicalSignificance: 'PDA avoidance is socially sophisticated and anxious; ODD is direct and oppositional.'
      },
      {
        domain: 'Response to Star Charts & Reward Systems',
        subjectAObservation: 'Star charts drastically escalate anxiety and trigger aggressive meltdowns because the reward creates unbearable pressure.',
        subjectBObservation: 'Often responds favorably to well-structured, consistent reward charts and tangible incentive systems.',
        clinicalSignificance: 'Using reward charts with a PDA child confirms the mismatch within days.'
      },
      {
        domain: 'Root Emotional Driver',
        subjectAObservation: 'Nervous system neuroception of danger; extreme loss of autonomic safety.',
        subjectBObservation: 'Frustration, anger, and a drive to exert control over authority boundaries.',
        clinicalSignificance: 'Guides whether intervention must focus on anxiety reduction or behavioral consistency.'
      }
    ],
    atHomeDifferentiatorProtocol: [
      {
        stepNumber: 1,
        title: 'The Preferred Activity Invitation Test',
        action: 'Announce a high-reward, fun activity as a mandatory direct demand: "Put on your shoes right now, we are going to get your favorite ice cream."',
        observationTip: 'An ODD child will generally race to put shoes on for ice cream. A PDA child may freeze, refuse, melt down, or insist on delaying, because the direct demand instantly triggered threat physiology.'
      },
      {
        stepNumber: 2,
        title: 'The Declarative Language Experiment',
        action: 'For 48 hours, eliminate all direct commands ("Do this"). Replace with declarative statements: "I\'m putting my boots on because it\'s raining," leaving the choice open.',
        observationTip: 'PDA children show a dramatic drop in hostility when pressure is removed. ODD children may still challenge rules until structured boundaries are established.'
      }
    ],
    clinicalVerdict: 'Mistaking PDA for ODD is disastrous: standard behavioral discipline, punitive consequences, and reward charts will drive a PDA child into severe autistic burnout, selective mutism, or school refusal. PDA requires a neurodiversity-affirming, low-demand, collaborative approach.',
    whenToSeekSpecialist: [
      'Child is currently experiencing school refusal or debilitating morning panic episodes',
      'Daily routines (eating, hygiene, toileting, sleeping) are rejected due to extreme anxiety',
      'Conventional parenting strategies have resulted in escalating family aggression or violence'
    ],
    faqList: [
      {
        question: 'Is Pathological Demand Avoidance formally recognized in the DSM-5?',
        answer: 'PDA is recognized as a specific behavioral profile on the Autism Spectrum in the UK, Australia, and Scandinavia (supported by the National Autistic Society), though it is not yet listed as a separate discrete category in the DSM-5-TR. Clinicians evaluate it as an autism profile with pervasive anxiety-driven demand avoidance.'
      },
      {
        question: 'Can a child outgrow PDA?',
        answer: 'PDA is a lifelong neurodivergent profile, not a temporary childhood phase. However, when children are supported with low-demand environments, respect for autonomy, and nervous system regulation tools, their anxiety subsides and they thrive into adulthood.'
      }
    ],
    heroImage: '/_astro/pda-autism-demand-avoidance-vs-defiance.jpg'
  },
  {
    slug: 'inattentive-adhd-vs-auditory-processing-disorder',
    title: 'Inattentive ADHD vs Auditory Processing Disorder (APD): The "Listening Problem" Decoded',
    metaDescription: 'Does your child not listen because they are distracted or because their auditory cortex cannot decode sound? Clinical comparison of ADHD and APD testing.',
    category: 'Diagnostic & Symptoms',
    badgeText: 'Auditory & Attention Processing',
    readTime: '6 min read',
    evidenceGrade: 'ASHA Guidelines / Barkley Executive Function Framework',
    clinicalGuidelines: ['American Speech-Language-Hearing Association (ASHA) APD Guidelines', 'American Academy of Audiology (AAA) Clinical Practice Guidance'],
    peerReviewedCitations: [
      { citation: 'Chermak, G. D., & Musiek, F. E. (2014). Handbook of Central Auditory Processing Disorder (2nd ed.). Plural Publishing.' },
      { citation: 'Riccio, C. A., et al. (2005). Shared and unique cognitive components of ADHD and APD. Applied Neuropsychology, 12(3), 168-176.' },
      { citation: 'Barkley, R. A. (2012). Executive Functions: What They Are, How They Work, and Why They Evolved. Guilford Press.' }
    ],
    subjectA: {
      name: 'Inattentive ADHD',
      subheading: 'Generalized Executive Sustained Attention Deficit',
      underlyingNeurology: 'Frontostriatal executive dysfunction affecting sustained mental effort, working memory, and internal distractibility across all visual, auditory, and kinesthetic tasks.',
      primarySymptoms: [
        'Struggles to sustain attention even in a dead-silent room',
        'Easily distracted by external visual stimuli or internal daydreams',
        'Can hear the instruction fine, but fails to execute because working memory drops the steps',
        'Shows hyperfocus when engaged in highly stimulating video games or personal interests'
      ],
      whatHelps: ['Visual checklists and checklists with tick boxes', 'Breaking tasks into 10-minute micro-intervals', 'Executive coaching and working memory strategies', 'Minimizing internal and external distractions'],
      whatHarms: ['Giving long strings of verbal multi-step instructions without written support', 'Accusing the child of being lazy or not caring', 'Expecting sustained attention without breaks']
    },
    subjectB: {
      name: 'Auditory Processing Disorder (APD)',
      subheading: 'Specific Central Auditory Pathway Deficit',
      underlyingNeurology: 'Acoustic signal transmission deficit in the brainstem and central auditory cortex; the ears hear fine, but the brain jumbles, delays, or cannot separate speech from background noise.',
      primarySymptoms: [
        'Attention drops precipitously in noisy classrooms, cafeterias, or malls',
        'Frequently says "What?" or "Huh?", requiring speech to be repeated slowly',
        'Struggles with auditory figure-ground: cannot separate teacher\'s voice from ambient chatter',
        'Excels at visual and non-verbal learning; can focus for hours on silent visual tasks'
      ],
      whatHelps: ['Remote microphone / FM listening systems in classrooms', 'Preferential seating near the speaker away from air conditioners/windows', 'Pre-teaching vocabulary and providing written outlines', 'Speech-to-text software and captioned videos'],
      whatHarms: ['Seating child at the back of a loud, reverberant classroom', 'Speaking quickly while facing away or covering the mouth', 'Repeating the exact same phrase faster without simplifying vocabulary']
    },
    keyDifferencesTable: [
      {
        domain: 'Performance in Quiet Environments',
        subjectAObservation: 'Still struggles to focus, daydreams, and loses track of time even in total silence.',
        subjectBObservation: 'Performance dramatically improves in quiet; easily comprehends when background noise is removed.',
        clinicalSignificance: 'APD is auditory-noise dependent; ADHD inattention is pervasive across all noise conditions.'
      },
      {
        domain: 'Visual Task Performance',
        subjectAObservation: 'Struggles with reading, organizing visual worksheets, and completing silent math problems.',
        subjectBObservation: 'Strong visual-spatial skills; excels at puzzles, silent reading, and graphic tasks.',
        clinicalSignificance: 'APD isolates to auditory modality; ADHD impacts multimodal working memory.'
      },
      {
        domain: 'Response to "Hyperfocus"',
        subjectAObservation: 'Can hyperfocus on engaging tasks regardless of noise level if interest is high.',
        subjectBObservation: 'Cannot overcome auditory degradation through sheer interest; noise remains physically exhausting.',
        clinicalSignificance: 'Differentiates motivational executive dopamine regulation from sensory signal degradation.'
      },
      {
        domain: 'Diagnostic Specialist',
        subjectAObservation: 'Diagnosed by a Clinical Psychologist, Child Psychiatrist, or Neurodevelopmental Pediatrician.',
        subjectBObservation: 'Diagnosed exclusively by a specialized Clinical Audiologist using sound-booth dichotic listening tests.',
        clinicalSignificance: 'Requires correct referral pathway to avoid ineffective interventions.'
      }
    ],
    atHomeDifferentiatorProtocol: [
      {
        stepNumber: 1,
        title: 'The Silent Visual vs Spoken Instruction Test',
        action: 'On Day 1, give your child a 3-step verbal instruction from across the room while the TV is humming. On Day 2, hand them an illustrated, written card with the same 3 steps.',
        observationTip: 'If performance skyrockets from complete failure on Day 1 to flawless execution on Day 2, auditory processing deficits are strongly indicated.'
      },
      {
        stepNumber: 2,
        title: 'The One-on-One Whisper Test',
        action: 'Sit directly across from your child in a quiet room, make gentle eye contact, and speak at a soft volume.',
        observationTip: 'An APD child will understand easily in this condition. An inattentive ADHD child may still zone out mid-sentence.'
      }
    ],
    clinicalVerdict: 'Telling a child with Auditory Processing Disorder to "just listen harder" is the neurological equivalent of telling a child with myopia to "just squint harder." Similarly, testing for APD requires a specialized audiologist, while inattentive ADHD requires psychological evaluation.',
    whenToSeekSpecialist: [
      'Child struggles academically despite normal intelligence and normal peripheral hearing tests',
      'Child complains that the classroom or cafeteria makes their head hurt or feels overwhelmingly loud',
      'Teacher reports that child stares blankly whenever multi-step instructions are spoken to the group'
    ],
    faqList: [
      {
        question: 'Can a child have both ADHD and APD?',
        answer: 'Yes. Up to 50% of children diagnosed with Central Auditory Processing Disorder also meet criteria for ADHD. A comprehensive multidisciplinary evaluation ensures that assistive listening devices and executive coaching are properly paired.'
      },
      {
        question: 'Does a standard school hearing test rule out APD?',
        answer: 'No. School hearing screenings test peripheral hearing acuity (whether the eardrum and cochlea detect pure tone volumes). APD is a central brain disorder where sounds are heard, but the auditory cortex cannot process them.'
      }
    ],
    heroImage: '/_astro/understanding-the-confusion-between-adhd-and-hyperactivity-in-children.webp'
  },
  {
    slug: 'ados-2-vs-cars-2-autism-assessment',
    title: 'ADOS-2 vs CARS-2: Which Autism Assessment Tool is the Clinical Gold Standard?',
    metaDescription: 'Compare the ADOS-2 behavioral observation protocol and the CARS-2 rating scale. Understand clinical accuracy, hospital acceptance, and diagnostic validity.',
    category: 'Assessment & Testing',
    badgeText: 'Gold-Standard Assessment Battery',
    readTime: '7 min read',
    evidenceGrade: 'NICE CG128 / Gold-Standard Hospital Protocol',
    clinicalGuidelines: ['NICE Clinical Guideline CG128 (Autism diagnostic assessment in children)', 'CDC Autism and Developmental Disabilities Monitoring (ADDM) Protocol'],
    peerReviewedCitations: [
      { citation: 'Lord, C., Rutter, M., DiLavore, P. C., Risi, S., Gotham, K., & Bishop, S. (2012). Autism Diagnostic Observation Schedule: ADOS-2. Western Psychological Services.' },
      { citation: 'Schopler, E., Van Bourgondien, M. E., Wellman, G. J., & Love, S. R. (2010). Childhood Autism Rating Scale, Second Edition (CARS-2). Western Psychological Services.' },
      { citation: 'Kanne, S. M., et al. (2014). The role of the ADOS in clinical diagnosis of autism spectrum disorder. J Autism Dev Disord, 44(4), 987-995.' }
    ],
    subjectA: {
      name: 'ADOS-2 (Autism Diagnostic Observation Schedule, 2nd Edition)',
      subheading: 'Interactive Direct Behavioral Observation Protocol',
      underlyingNeurology: 'Standardized semi-structured interactive presses designed to elicit social-emotional reciprocity, joint attention, gesture use, and play behaviors in real time.',
      primarySymptoms: [
        'Administered directly to the child across 5 developmental modules (Toddler to Adult)',
        'Creates naturalistic social situations (presses) to observe how the child responds to social bids',
        'Scores reciprocal social interaction, communication, repetitive behaviors, and play',
        'Universally recognized by NHS, international school boards, insurance, and medical panels'
      ],
      whatHelps: ['Administration by formally certified and research-reliable clinical psychologists', 'Pairing with a developmental interview such as the ADI-R or 3Di', 'Naturalistic child comfort during testing', 'Detailed clinical qualitative observation synthesis'],
      whatHarms: ['Administering when the child is severely ill, feverish, or traumatized', 'Using only the score cutoff without clinical judgment and developmental history', 'Rushing through modules without building warmth and rapport']
    },
    subjectB: {
      name: 'CARS-2 (Childhood Autism Rating Scale, 2nd Edition)',
      subheading: 'Behavioral Observation Rating Scale',
      underlyingNeurology: '15-item clinician observation rating scale evaluating frequency, peculiarity, intensity, and duration of atypical behaviors compared to typical developmental benchmarks.',
      primarySymptoms: [
        'Completed by a clinician based on direct observation, parent report, and developmental history',
        'Features CARS-2-ST (Standard Version) and CARS-2-HF (High-Functioning Version)',
        'Provides a dimensional severity score ranging from minimal/none to severe autism spectrum',
        'Fast administration (15-30 minutes of clinical scoring)'
      ],
      whatHelps: ['Use as a preliminary clinical screening or secondary confirmatory tool', 'Assessing children in settings where full 60-minute ADOS-2 is not feasible', 'Corroborating clinical observations across longitudinal sessions', 'Cost-effective initial clinical triage'],
      whatHarms: ['Relying solely on CARS-2 for definitive high-stakes school funding or court decisions', 'Administering without observing the child directly', 'Omitting cognitive and speech-language assessments']
    },
    keyDifferencesTable: [
      {
        domain: 'Administration Methodology',
        subjectAObservation: 'Direct, interactive 40-60 minute behavioral observation with standardized toys, tasks, and social presses.',
        subjectBObservation: '15-item rating questionnaire completed by the clinician based on observation and interview history.',
        clinicalSignificance: 'ADOS-2 is an interactive performance test; CARS-2 is a clinical rating instrument.'
      },
      {
        domain: 'International Hospital & School Acceptance',
        subjectAObservation: 'Globally recognized as the indisputable gold standard required by NHS, UK EHCP panels, US IEPs, and UAE KHDA.',
        subjectBObservation: 'Accepted as a valid clinical tool, but frequently rejected as standalone evidence by strict school boards or insurance.',
        clinicalSignificance: 'Parents seeking international educational accommodations should always prioritize ADOS-2.'
      },
      {
        domain: 'Detection of "Masking" & High-Functioning Presentations',
        subjectAObservation: 'Module 3 and Module 4 specifically detect subtle social masking in articulate, academically gifted children and girls.',
        subjectBObservation: 'CARS-2-HF improves detection, but rating scales frequently miss subtle internal social exhaustion and compensation.',
        clinicalSignificance: 'ADOS-2 has vastly superior clinical sensitivity for masked or subtle autism profiles.'
      },
      {
        domain: 'Clinician Training Requirements',
        subjectAObservation: 'Requires intensive, specialized clinical training and reliability certification to administer and score accurately.',
        subjectBObservation: 'Can be scored by a broader range of trained health professionals and educators with psychological background.',
        clinicalSignificance: 'Ensures higher diagnostic standardization and rigorous quality control with ADOS-2.'
      }
    ],
    atHomeDifferentiatorProtocol: [
      {
        stepNumber: 1,
        title: 'Reviewing Your Existing Diagnostic Report',
        action: 'Look at the "Assessment Instruments Administered" section of any past evaluation.',
        observationTip: 'If your report lists only a CARS-2 score or parent checklist, international school inclusion boards (Dubai, London, US) will likely request a comprehensive ADOS-2 assessment before approving 1-to-1 accommodations.'
      },
      {
        stepNumber: 2,
        title: 'Checking Module Appropriateness',
        action: 'If ADOS-2 was administered, check the module number: Module 1 (pre-verbal), Module 2 (phrase speech), Module 3 (fluent child), Module 4 (fluent adolescent/adult).',
        observationTip: 'Administering the wrong module invalidates the entire assessment score. Ensure your clinician selected the module matching expressive language fluency, not chronological age.'
      }
    ],
    clinicalVerdict: 'While CARS-2 remains a respected, cost-effective screening and monitoring instrument, the ADOS-2 is the international clinical gold standard. When paired with a comprehensive developmental history (ADI-R or clinical interview), ADOS-2 provides the most rigorous, legally defensible autism evaluation available worldwide.',
    whenToSeekSpecialist: [
      'School requests a formal multidisciplinary assessment for an Individualized Education Plan (IEP)',
      'Previous assessment produced inconclusive or borderline results that parents feel missed key nuances',
      'Child displays strong signs of masking, high verbal ability, and extreme after-school restraint collapse'
    ],
    faqList: [
      {
        question: 'Can an ADOS-2 be conducted online via telehealth?',
        answer: 'The standard ADOS-2 protocol was designed for in-person interactive observation. While research adaptations (such as the BOSA - Brief Observation of Symptoms of Autism) were developed for video administration, in-person administration remains preferred. For international families, hybrid assessment combining asynchronous video review and clinical interviews provides the highest fidelity.'
      },
      {
        question: 'Does an ADOS-2 score alone guarantee an autism diagnosis?',
        answer: 'No single test gives a diagnosis. Clinical guidelines strictly require that ADOS-2 observations must be integrated with detailed developmental history, cognitive assessment, and observations of adaptive functioning by a licensed psychologist.'
      }
    ],
    heroImage: '/_astro/rejection-sensitive-dysphoria-adhd-children.jpg'
  },
  {
    slug: 'dir-floortime-vs-traditional-aba',
    title: 'DIR/Floortime vs Traditional ABA: Neurodiversity-Affirming vs Behavioral Models',
    metaDescription: 'A clinical and evidence-based comparison of Applied Behavior Analysis (ABA) and DIR/Floortime. Understand emotional regulation, compliance vs connection, and child outcomes.',
    category: 'Therapies & Interventions',
    badgeText: 'Therapy & Intervention Models',
    readTime: '8 min read',
    evidenceGrade: 'Class A Evidence Review / Neurodiversity-Affirming Guidelines',
    clinicalGuidelines: ['Interdisciplinary Council on Development and Learning (ICDL) DIR Guidelines', 'BACB Applied Behavior Analysis Standards of Practice'],
    peerReviewedCitations: [
      { citation: 'Greenspan, S. I., & Wieder, S. (2006). Engaging Autism: Using the Floortime Approach to Help Children Relate, Communicate, and Think. Da Capo Lifelong Books.' },
      { citation: 'Sandoval-Norton, A. H., & Shkedy, G. (2019). How much compliance is too much compliance: Is long-term ABA therapy abuse? Cogent Psychology, 6(1), 1641258.' },
      { citation: 'Dawson, G., et al. (2010). Randomized, controlled trial of an intervention for toddlers with autism: the Early Start Denver Model. Pediatrics, 125(1), e17-e25.' }
    ],
    subjectA: {
      name: 'DIR/Floortime (Developmental, Individual-differences, Relationship-based)',
      subheading: 'Affect-Led Developmental Attunement',
      underlyingNeurology: 'Strengthens neural connectivity between emotional limbic networks and frontal cortex through joyful shared attunement, following the child\'s lead to build self-regulation and symbolic thinking.',
      primarySymptoms: [
        'Follows the child\'s natural intrinsic interests rather than clinician-dictated drill sheets',
        'Views challenging behavior as a signal of emotional dysregulation or sensory mismatch',
        'Aims for spontaneous, creative social-emotional reciprocity rather than conditioned obedience',
        'Empowers parents as the primary therapeutic co-regulators in daily family life'
      ],
      whatHelps: ['Getting down on the floor at eye level and joining the child\'s current play', 'Expanding play circles without taking over or dictating rules', 'Honoring sensory needs and bodily autonomy', 'Building warm shared emotional experiences'],
      whatHarms: ['Turning play sessions into testing drills', 'Forcing physical compliance during sensory distress', 'Ignoring non-verbal communication attempts']
    },
    subjectB: {
      name: 'Traditional ABA (Applied Behavior Analysis)',
      subheading: 'Operant Behavioral Conditioning (Discrete Trial Training)',
      underlyingNeurology: 'Modifies overt observable behaviors through Antecedent-Behavior-Consequence (ABC) contingency reinforcement paradigms to increase desired social skills and extinguish atypical behaviors.',
      primarySymptoms: [
        'Highly structured, repetitive clinician-directed drills (Discrete Trial Training - DTT)',
        'Extensive use of extrinsic rewards (tokens, edibles, screen time) for correct target responses',
        'Historically aimed to eliminate autistic behaviors such as stimming, hand-flapping, and eye-contact aversion',
        'High weekly hour intensity (often recommended at 20-40 hours per week)'
      ],
      whatHelps: ['Teaching specific functional safety skills (crossing streets, handwashing)', 'Breaking complex chained tasks into clear micro-steps', 'Modern naturalistic adaptations (NDBI / ESDM) that respect child consent', 'Objective data-driven progress measurement'],
      whatHarms: ['Extinguishing harmless self-regulatory stimming (stifles nervous system regulation)', 'Over-training prompt-dependent compliance without internal agency', 'Exhaustive 40-hour weekly programs that leave no time for family attachment and free play']
    },
    keyDifferencesTable: [
      {
        domain: 'Therapeutic Target',
        subjectAObservation: 'Builds foundational emotional regulation, two-way communication, and symbolic abstract thinking.',
        subjectBObservation: 'Shapes specific observable behaviors, skill mastery, and reduction of undesirable actions.',
        clinicalSignificance: 'DIR targets root neural regulation; ABA targets outward behavioral presentation.'
      },
      {
        domain: 'Child Motivation & Agency',
        subjectAObservation: 'Intrinsic motivation: follows what the child loves and finds naturally compelling.',
        subjectBObservation: 'Extrinsic reinforcement: uses tokens, food, or toys to reward compliance with therapist demands.',
        clinicalSignificance: 'Intrinsic drive fosters lifelong self-advocacy and creative autonomy.'
      },
      {
        domain: 'View on "Stimming" (Self-Regulatory Movement)',
        subjectAObservation: 'Understands stimming as an essential nervous system regulation tool; joins or accommodates it.',
        subjectBObservation: 'Historically targeted stimming for extinction ("hands quiet"), though modern NDBI approaches are evolving.',
        clinicalSignificance: 'Extinguishing stimming dramatically increases long-term autistic anxiety and masking trauma.'
      },
      {
        domain: 'Parent Role in Therapy',
        subjectAObservation: 'Parents are the core partners, coached in every session to weave regulation into home life.',
        subjectBObservation: 'Often administered by 1-to-1 technicians (RBTs), with parents receiving periodic parent-training updates.',
        clinicalSignificance: 'DIR directly strengthens parent-child attachment and sustainable family resilience.'
      }
    ],
    atHomeDifferentiatorProtocol: [
      {
        stepNumber: 1,
        title: 'The "Follow the Lead" Diagnostic Hour',
        action: 'Spend 20 minutes sitting with your child. Do not give any directions, questions, or corrections. Simply imitate what they are doing with warmth and wonder.',
        observationTip: 'Notice if your child looks up, smiles, or draws you in. This is the heart of Floortime: connection before direction.'
      },
      {
        stepNumber: 2,
        title: 'The Prompt-Dependency Audit',
        action: 'Observe whether your child will perform a task spontaneously, or if they wait blankly for an adult command or reward promise.',
        observationTip: 'Children heavily drilled in rigid behavioral systems frequently lose the capacity for spontaneous autonomous decision-making.'
      }
    ],
    clinicalVerdict: 'Modern clinical child psychology is experiencing a decisive paradigm shift toward neurodiversity-affirming, relationship-based models. For emotional well-being, authentic communication, and long-term psychological resilience, developmental approaches like DIR/Floortime and Naturalistic Developmental Behavioral Interventions (NDBI) offer profound advantages over rigid compliance-based therapy.',
    whenToSeekSpecialist: [
      'Child is showing signs of therapy burnout, school refusal, or extreme distress during behavioral sessions',
      'Communication is robotic, prompt-dependent, or only used to demand items rather than share connection',
      'Parents seek guidance on how to support their child\'s unique brain profile without forcing masking'
    ],
    faqList: [
      {
        question: 'Is DIR/Floortime evidence-based?',
        answer: 'Yes. Multiple randomized controlled trials, including studies published in the American Journal of Occupational Therapy and Journal of Autism and Developmental Disorders, have demonstrated significant gains in functional emotional capacity, language, and parent-child interaction.'
      },
      {
        question: 'Can Floortime and behavioral techniques ever be combined?',
        answer: 'Yes. Modern Naturalistic Developmental Behavioral Interventions (such as the Early Start Denver Model - ESDM) blend developmental relationship-based principles with positive behavioral teaching strategies in a play-based environment.'
      }
    ],
    heroImage: '/_astro/discrete-trial-teaching-one-to-one-vs-group.webp'
  }
];

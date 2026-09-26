export interface ResearchItem {
  id: string;
  category: 
    | 'autism-medicine'
    | 'autism-stem-cell'
    | 'autism-aba'
    | 'adhd-medication'
    | 'adhd-behavioral'
    | 'sensory-issues'
    | 'sensory-normal-child'
    | 'hyperactivity-inattention'
    | 'speech-delay-disorders'
    | 'open-source-ai';
  categoryLabel: string;
  title: string;
  authors: string;
  journalOrPlatform: string;
  year: string;
  type: 'RCT' | 'Meta-Analysis' | 'Systematic Review' | 'Clinical Guideline' | 'Open Source Tool' | 'Dataset' | 'AI Model';
  doiOrUrl: string;
  parentTakeaway: string;
  clinicalTakeaway: string;
  tags: string[];
}

export const researchCategories = [
  { id: 'all', label: 'All Resources' },
  { id: 'autism-medicine', label: 'Autism & Medicine' },
  { id: 'autism-stem-cell', label: 'Stem Cell Research' },
  { id: 'autism-aba', label: 'Autism & ABA / NDBIs' },
  { id: 'adhd-medication', label: 'ADHD & Medication' },
  { id: 'adhd-behavioral', label: 'ADHD & Behavioral Therapy' },
  { id: 'sensory-issues', label: 'Sensory in ASD & ADHD' },
  { id: 'sensory-normal-child', label: 'Sensory in Typical Children' },
  { id: 'hyperactivity-inattention', label: 'Hyperactivity & Inattention' },
  { id: 'speech-delay-disorders', label: 'Speech Delay & Language' },
  { id: 'open-source-ai', label: 'GitHub & Hugging Face AI' },
] as const;

export const researchPapers: ResearchItem[] = [
  // 1. Autism & Medicine
  {
    id: 'asd-med-1',
    category: 'autism-medicine',
    categoryLabel: 'Autism & Medicine',
    title: 'Risperidone in Children with Autism and Serious Behavioral Problems',
    authors: 'Research Units on Pediatric Psychopharmacology (RUPP) Autism Network: McCracken, J. T., et al.',
    journalOrPlatform: 'New England Journal of Medicine (NEJM)',
    year: '2002',
    type: 'RCT',
    doiOrUrl: 'https://doi.org/10.1056/NEJMoa013171',
    parentTakeaway: 'Medications like risperidone do not "cure" autism or teach communication, but they can significantly lower intense irritability, aggression, and self-harm when behavioral supports alone are insufficient.',
    clinicalTakeaway: '8-week double-blind RCT (n=101) demonstrated a 57% reduction on the ABC Irritability Subscale with risperidone vs. 14% with placebo (P < 0.001). Weight gain and metabolic monitoring are clinically essential.',
    tags: ['Autism', 'Risperidone', 'Pharmacotherapy', 'FDA-Approved', 'Irritability']
  },
  {
    id: 'asd-med-2',
    category: 'autism-medicine',
    categoryLabel: 'Autism & Medicine',
    title: 'A Placebo-Controlled, Fixed-Dose Study of Aripiprazole in Children and Adolescents with Irritability in Autistic Disorder',
    authors: 'Marcus, R. N., Owen, R., Kamen, L., Manos, G., McQuade, R. D., et al.',
    journalOrPlatform: 'Journal of the American Academy of Child & Adolescent Psychiatry (JAACAP)',
    year: '2009',
    type: 'RCT',
    doiOrUrl: 'https://doi.org/10.1097/CHI.0b013e3181b76658',
    parentTakeaway: 'Aripiprazole is FDA-approved for severe irritability in autism. It can help calm explosive outbursts with a somewhat different side-effect profile than older medications, though appetite changes still require monitoring.',
    clinicalTakeaway: '8-week randomized trial (n=218, ages 5–17) established efficacy at 5mg, 10mg, and 15mg doses. Mean ABC-I improvements were clinically significant vs placebo. Lower incidence of hyperprolactinemia relative to risperidone.',
    tags: ['Autism', 'Aripiprazole', 'Pharmacotherapy', 'FDA-Approved']
  },
  {
    id: 'asd-med-3',
    category: 'autism-medicine',
    categoryLabel: 'Autism & Medicine',
    title: 'Autism Spectrum Disorder: Consensus Guidelines on Assessment, Treatment and Research',
    authors: 'Howes, O. D., Rogdaki, M., Findon, J. L., Wichers, R. H., Charman, T., et al.',
    journalOrPlatform: 'Journal of Psychopharmacology (British Association for Psychopharmacology)',
    year: '2018',
    type: 'Clinical Guideline',
    doiOrUrl: 'https://doi.org/10.1177/0269881117741766',
    parentTakeaway: 'International clinical guidelines emphasize that behavioral interventions and environmental adaptations must be the primary foundation. Medication should target specific co-occurring conditions (sleep, anxiety, severe aggression) rather than autism itself.',
    clinicalTakeaway: 'Comprehensive evidence-based synthesis. Pharmacotherapy should only be considered when psychosocial interventions are insufficient or in acute crises. High emphasis on routine monitoring for metabolic and extrapyramidal effects.',
    tags: ['Clinical Guidelines', 'Autism', 'Pharmacotherapy', 'Best Practices']
  },

  // 2. Autism & Stem Cell Therapy
  {
    id: 'asd-stem-1',
    category: 'autism-stem-cell',
    categoryLabel: 'Stem Cell Research',
    title: 'A Phase II Randomized Clinical Trial of the Safety and Efficacy of Intravenous Umbilical Cord Blood Infusion for Children with Autism Spectrum Disorder',
    authors: 'Dawson, G., Sun, J. M., Davlantis, K. S., Murias, M., Franz, L., Troy, J., Kurtzberg, J., et al.',
    journalOrPlatform: 'The Journal of Pediatrics (Duke University Medical Center)',
    year: '2020',
    type: 'RCT',
    doiOrUrl: 'https://doi.org/10.1016/j.jpeds.2020.03.011',
    parentTakeaway: 'In the most rigorous, placebo-controlled clinical trial conducted to date on cord blood stem cell infusions, the treatment was safe but DID NOT show significant overall improvement in social communication or core autism symptoms over a placebo.',
    clinicalTakeaway: 'Double-blind, placebo-controlled crossover Phase II trial (n=180, ages 2–7). A single infusion of autologous or allogeneic cord blood yielded no statistically significant difference from placebo on the primary outcome (VABS-3 Socialization). Post-hoc subgroup signals in IQ > 70 require further validation.',
    tags: ['Autism', 'Stem Cells', 'Cord Blood', 'Duke Trial', 'Clinical Trials']
  },
  {
    id: 'asd-stem-2',
    category: 'autism-stem-cell',
    categoryLabel: 'Stem Cell Research',
    title: 'Efficacy and Safety of Stem Cell Therapy in Children with Autism Spectrum Disorder: A Systematic Review and Meta-Analysis',
    authors: 'Qu, J., Liu, Z., Meng, X., Wang, L., et al.',
    journalOrPlatform: 'Frontiers in Pediatrics / Psychiatry',
    year: '2022',
    type: 'Meta-Analysis',
    doiOrUrl: 'https://doi.org/10.3389/fped.2022.897398',
    parentTakeaway: 'Major medical reviews conclude there is currently NO conclusive proof that stem cell therapy works for autism. Because unregulated clinics charge tens of thousands of dollars for unproven treatments, parents are advised to rely on validated behavioral and developmental therapies.',
    clinicalTakeaway: 'Meta-analysis of available trials highlighted severe heterogeneity, small sample sizes, publication bias, and strong placebo effects. The International Society for Stem Cell Research (ISSCR) and FDA caution against commercial, unproven stem cell therapies for ASD.',
    tags: ['Stem Cells', 'Meta-Analysis', 'Evidence-Based', 'Safety Warning']
  },

  // 3. Autism & ABA / Behavioral Interventions
  {
    id: 'asd-aba-1',
    category: 'autism-aba',
    categoryLabel: 'Autism & ABA / NDBIs',
    title: 'Early Intensive Behavioral Intervention (EIBI) for Young Children with Autism Spectrum Disorders (ASD)',
    authors: 'Reichow, B., Hume, K., Barton, E. E., & Boyd, B. A.',
    journalOrPlatform: 'Cochrane Database of Systematic Reviews',
    year: '2018',
    type: 'Systematic Review',
    doiOrUrl: 'https://doi.org/10.1002/14651858.CD009260.pub3',
    parentTakeaway: 'Early intensive behavioral programs help many children make measurable gains in adaptive daily living skills, expressive language, and cognitive scores, especially when started during toddlerhood.',
    clinicalTakeaway: 'Cochrane review synthesizing 5 RCTs and non-randomized studies (n=219). Found moderate-to-low quality evidence that EIBI increases adaptive behavior, IQ, and receptive/expressive language compared to treatment-as-usual.',
    tags: ['Autism', 'ABA', 'EIBI', 'Cochrane Review', 'Early Intervention']
  },
  {
    id: 'asd-aba-2',
    category: 'autism-aba',
    categoryLabel: 'Autism & ABA / NDBIs',
    title: 'Randomized, Controlled Trial of an Intervention for Toddlers with Autism: The Early Start Denver Model (ESDM)',
    authors: 'Dawson, G., Rogers, S., Munson, J., Smith, M., Winter, J., Greenson, J., & Varley, J.',
    journalOrPlatform: 'Pediatrics (American Academy of Pediatrics)',
    year: '2010',
    type: 'RCT',
    doiOrUrl: 'https://doi.org/10.1542/peds.2009-0958',
    parentTakeaway: 'Modern behavioral interventions have evolved beyond rigid table drills. Naturalistic, play-based approaches like ESDM combine behavioral science with warm, relationship-focused interactions in the child\'s everyday routines.',
    clinicalTakeaway: 'RCT of toddlers (aged 18–30 months, n=48). Children receiving ESDM demonstrated significant improvements in IQ (mean gain 17.6 points vs 7.0 points in community group), receptive/expressive language, and adaptive behavior, representing the emergence of NDBIs.',
    tags: ['Autism', 'ESDM', 'NDBI', 'Naturalistic Intervention', 'Play-Based']
  },

  // 4. ADHD & Medication
  {
    id: 'adhd-med-1',
    category: 'adhd-medication',
    categoryLabel: 'ADHD & Medication',
    title: 'Comparative Efficacy and Tolerability of Medications for ADHD in Children, Adolescents, and Adults: A Systematic Review and Network Meta-Analysis',
    authors: 'Cortese, S., Adamo, N., Del Giovane, C., Mohr-Jensen, C., Hayes, A. J., Carucci, S., et al.',
    journalOrPlatform: 'The Lancet Psychiatry',
    year: '2018',
    type: 'Meta-Analysis',
    doiOrUrl: 'https://doi.org/10.1016/S2215-0366(18)30269-4',
    parentTakeaway: 'The largest comparative medication review found that stimulant medications (specifically methylphenidate for children) have the highest evidence of effectiveness for reducing core ADHD symptoms, with good overall safety under medical supervision.',
    clinicalTakeaway: 'Comprehensive network meta-analysis of 133 double-blind RCTs in children/adolescents (n=14,346). Methylphenidate was identified as the preferred first-line pharmacological treatment for children and adolescents when considering both efficacy (SMD -0.78) and tolerability.',
    tags: ['ADHD', 'Methylphenidate', 'Stimulants', 'Meta-Analysis', 'Lancet Psychiatry']
  },
  {
    id: 'adhd-med-2',
    category: 'adhd-medication',
    categoryLabel: 'ADHD & Medication',
    title: 'A 14-Month Randomized Clinical Trial of Treatment Strategies for Attention-Deficit/Hyperactivity Disorder (The MTA Study)',
    authors: 'The MTA Cooperative Group',
    journalOrPlatform: 'Archives of General Psychiatry (JAMA Psychiatry)',
    year: '1999',
    type: 'RCT',
    doiOrUrl: 'https://doi.org/10.1001/archpsyc.56.12.1073',
    parentTakeaway: 'The landmark MTA study showed that while medication was most potent at reducing inattention and restlessness, combining medication with behavioral therapy achieved better results for family relationships, social skills, and school satisfaction at lower medication doses.',
    clinicalTakeaway: 'Gold-standard multicenter trial (n=579, ages 7–9.9). Compared medication management, intensive behavioral treatment, combined treatment, and community care. Combined treatment yielded superior consumer satisfaction and required 20% lower stimulant dosages.',
    tags: ['ADHD', 'MTA Study', 'Multimodal Treatment', 'Behavioral Therapy', 'Stimulants']
  },

  // 5. ADHD & Behavioral Interventions
  {
    id: 'adhd-beh-1',
    category: 'adhd-behavioral',
    categoryLabel: 'ADHD & Behavioral Therapy',
    title: 'Treatment Sequencing in Children with ADHD: A Comparison of Behavioral, Pharmacological, and Combined Approaches',
    authors: 'Pelham, W. E., Fabiano, G. A., Waxmonsky, J. G., Greiner, A. R., Coles, E. K., et al.',
    journalOrPlatform: 'Journal of Clinical Child & Adolescent Psychology',
    year: '2016',
    type: 'RCT',
    doiOrUrl: 'https://doi.org/10.1080/15374416.2015.1055859',
    parentTakeaway: 'Starting with behavioral parent training and classroom support BEFORE introducing medication produces better long-term behavior, fewer teacher complaints, and allows children to thrive on much smaller doses if medication is ever needed.',
    clinicalTakeaway: 'Sequential multiple assignment randomized trial (SMART design, n=146). Initiating intervention with behavioral parent training and school accommodations resulted in fewer classroom rule violations, lower medication requirements, and superior cost-effectiveness compared to starting with medication first.',
    tags: ['ADHD', 'Parent Training', 'Behavioral Therapy', 'Sequencing', 'Pelham Study']
  },
  {
    id: 'adhd-beh-2',
    category: 'adhd-behavioral',
    categoryLabel: 'ADHD & Behavioral Therapy',
    title: 'Clinical Practice Guideline for the Diagnosis, Evaluation, and Treatment of ADHD in Children and Adolescents',
    authors: 'Wolraich, M. L., Hagan, J. F., Allan, C., Chan, E., et al. (Subcommittee on ADHD)',
    journalOrPlatform: 'Pediatrics (American Academy of Pediatrics)',
    year: '2019',
    type: 'Clinical Guideline',
    doiOrUrl: 'https://doi.org/10.1542/peds.2019-2528',
    parentTakeaway: 'Official pediatric guidelines mandate behavioral parent training as the very first step for preschool children (ages 4–6), and recommend combining behavioral interventions with school accommodations and medication for older children.',
    clinicalTakeaway: 'AAP Clinical Practice Guideline. Explicitly designates Parent Training in Behavior Management (PTBM) and behavioral classroom interventions as primary first-line for preschool-aged children before psychopharmacology is considered.',
    tags: ['AAP Guidelines', 'ADHD', 'Pediatrics', 'Parent Training', 'School Support']
  },

  // 6. Sensory Issues in ASD & ADHD
  {
    id: 'sensory-1',
    category: 'sensory-issues',
    categoryLabel: 'Sensory in ASD & ADHD',
    title: 'Sensory Processing in Autism Spectrum Disorders: A Review of Neurophysiologic Findings',
    authors: 'Marco, E. J., Hinkley, L. B., Hill, S. S., & Nagarajan, S. S.',
    journalOrPlatform: 'Pediatric Research',
    year: '2011',
    type: 'Systematic Review',
    doiOrUrl: 'https://doi.org/10.1203/PDR.0b013e31821893a7',
    parentTakeaway: 'Sensory sensitivities (such as pain from loud sounds or distress at clothing seams) are rooted in biological differences in brain processing. Understanding your child\'s sensory triggers prevents misinterpreting sensory overload as "bad behavior."',
    clinicalTakeaway: 'Neuroimaging and MEG studies confirm atypical temporal auditory cortical processing and thalamocortical filtering deficits in ASD, formally integrated into DSM-5 Criterion B.4 (hyper/hyporeactivity to sensory input).',
    tags: ['Sensory Processing', 'Autism', 'Neuroimaging', 'DSM-5', 'Thalamocortical']
  },
  {
    id: 'sensory-2',
    category: 'sensory-issues',
    categoryLabel: 'Sensory in ASD & ADHD',
    title: 'Neural Foundations of Play: Sensory Processing Differences in ADHD and ASD',
    authors: 'Lane, S. J., Reynolds, S., & Thacker, L.',
    journalOrPlatform: 'Neuroscience & Biobehavioral Reviews / AJOT',
    year: '2014',
    type: 'Systematic Review',
    doiOrUrl: 'https://doi.org/10.1016/j.neubiorev.2014.07.014',
    parentTakeaway: 'Children with ADHD often seek intense movement and touch to "wake up" their brain\'s focus, whereas autistic children more commonly experience painful sensory overload or seek specific repetitive sensory sensations to calm themselves.',
    clinicalTakeaway: 'Comparative analysis of sensory modulation across cohorts. ADHD sensory seeking is linked to central hypo-arousal and executive regulation needs, while ASD sensory patterns show distinct bimodal distributions of extreme avoidance and under-responsiveness.',
    tags: ['Sensory Processing', 'ADHD', 'Autism', 'Differential Diagnosis']
  },

  // 7. Sensory Issues in Typically Developing Children
  {
    id: 'sensory-typical-1',
    category: 'sensory-normal-child',
    categoryLabel: 'Sensory in Typical Children',
    title: 'Sensory Integration Therapies for Children with Developmental and Behavioral Disorders',
    authors: 'Section on Complementary and Integrative Medicine, Council on Children with Disabilities',
    journalOrPlatform: 'Pediatrics (American Academy of Pediatrics Policy Statement)',
    year: '2012',
    type: 'Clinical Guideline',
    doiOrUrl: 'https://doi.org/10.1542/peds.2012-0876',
    parentTakeaway: 'Many typically developing children have mild sensory preferences (e.g. disliking certain textures or loud hand dryers). Pediatricians advise that sensory issues should be addressed through practical home adaptations rather than viewing every sensory dislike as a disorder.',
    clinicalTakeaway: 'AAP formal policy statement. Concluded that Sensory Processing Disorder (SPD) should not be diagnosed as an isolated standalone medical condition; sensory symptoms must be evaluated within the context of comprehensive developmental and behavioral assessments.',
    tags: ['Sensory', 'Typical Development', 'AAP Policy', 'Pediatrics']
  },
  {
    id: 'sensory-typical-2',
    category: 'sensory-normal-child',
    categoryLabel: 'Sensory in Typical Children',
    title: 'The Sensory Profile 2: Understanding Everyday Sensory Experiences in All Children',
    authors: 'Dunn, W.',
    journalOrPlatform: 'Pearson Clinical Assessment',
    year: '2014',
    type: 'Clinical Guideline',
    doiOrUrl: 'https://www.pearsonassessments.com/store/usassessments/en/Store/Professional-Assessments/Motor-Sensory/Sensory-Profile-2/p/100000822.html',
    parentTakeaway: 'Sensory processing exists along a normal spectrum across all human beings. Everyone falls into quadrants of sensory seeking, avoiding, sensitivity, or registration without it being an automatic medical disability.',
    clinicalTakeaway: 'Dunn\'s ecological sensory model establishes neurological thresholds (high vs. low) crossed with behavioral self-regulation (passive vs. active), providing a normative continuum for assessing sensory styles in typical and neurodivergent children.',
    tags: ['Sensory Profile 2', 'Winnie Dunn', 'Child Development', 'Assessment']
  },

  // 8. Hyperactivity & Inattention
  {
    id: 'hyp-inatt-1',
    category: 'hyperactivity-inattention',
    categoryLabel: 'Hyperactivity & Inattention',
    title: 'Behavioral Inhibition, Sustained Attention, and Executive Functions: Constructing a Unifying Theory of ADHD',
    authors: 'Barkley, R. A.',
    journalOrPlatform: 'Psychological Bulletin (American Psychological Association)',
    year: '1997',
    type: 'Systematic Review',
    doiOrUrl: 'https://doi.org/10.1037/0033-2909.121.1.65',
    parentTakeaway: 'Hyperactivity and inattention are not caused by willful disobedience; they result from delayed brain executive control—especially working memory, time awareness, and the ability to pause before reacting.',
    clinicalTakeaway: 'Barkley’s theoretical model posits behavioral inhibition as the primary deficit that impacts four second-order executive functions: nonverbal working memory, internalization of speech, self-regulation of affect/arousal, and reconstitution.',
    tags: ['ADHD', 'Executive Function', 'Barkley Theory', 'Neuropsychology', 'Inhibition']
  },
  {
    id: 'hyp-inatt-2',
    category: 'hyperactivity-inattention',
    categoryLabel: 'Hyperactivity & Inattention',
    title: 'The Dual Pathway Model of ADHD: An Elaboration of Neuro-Developmental Characteristics',
    authors: 'Sonuga-Barke, E. J. S.',
    journalOrPlatform: 'Neuroscience & Biobehavioral Reviews',
    year: '2003',
    type: 'Systematic Review',
    doiOrUrl: 'https://doi.org/10.1016/j.neubiorev.2003.08.005',
    parentTakeaway: 'ADHD presents in two distinct neurological ways: one group struggles with planning and memory (executive pathway), while another feels an unbearable psychological discomfort waiting for rewards (delay-aversion pathway).',
    clinicalTakeaway: 'Dual-pathway model dissociates the dorsal meso-cortical circuit (mediating executive inhibitory dysregulation) from the ventral meso-limbic dopamine circuit (mediating motivational delay aversion and altered reward processing).',
    tags: ['ADHD', 'Dual-Pathway', 'Dopamine', 'Delay Aversion', 'Neurobiology']
  },

  // 9. Speech Delay & Disorders
  {
    id: 'speech-1',
    category: 'speech-delay-disorders',
    categoryLabel: 'Speech Delay & Language',
    title: 'Phase 2 of CATALISE: A Multinational and Multidisciplinary Delphi Consensus Study of Language Problems in Children',
    authors: 'Bishop, D. V. M., Snowling, M. J., Thompson, P. A., Greenhalgh, T., & The CATALISE Consortium',
    journalOrPlatform: 'Journal of Child Psychology and Psychiatry',
    year: '2017',
    type: 'Clinical Guideline',
    doiOrUrl: 'https://doi.org/10.1111/jcpp.12721',
    parentTakeaway: 'International experts agreed on standard terms: "Developmental Language Disorder" (DLD) is diagnosed when children struggle to understand or use language without another diagnosis like autism, hearing loss, or intellectual disability.',
    clinicalTakeaway: 'Delphi consensus with 59 international experts established clinical criteria for DLD, retiring misleading terms such as "Specific Language Impairment (SLI)" and clarifying boundaries with ASD and social communication disorders.',
    tags: ['Speech Delay', 'DLD', 'Language Disorder', 'CATALISE', 'Consensus']
  },
  {
    id: 'speech-2',
    category: 'speech-delay-disorders',
    categoryLabel: 'Speech Delay & Language',
    title: 'Speech and Language Therapy Interventions for Children with Primary Speech and Language Delay or Disorder',
    authors: 'Law, J., Garrett, Z., & Nye, C.',
    journalOrPlatform: 'Cochrane Database of Systematic Reviews',
    year: '2017',
    type: 'Systematic Review',
    doiOrUrl: 'https://doi.org/10.1002/14651858.CD004110.pub2',
    parentTakeaway: 'Speech therapy is highly effective for expressive language problems and speech clarity. Waiting out a significant speech delay ("he will outgrow it") can delay vital development—early targeted support is always best.',
    clinicalTakeaway: 'Cochrane review synthesizing 33 RCTs. Demonstrated that targeted speech-language therapy yields large positive effect sizes for expressive phonology and syntax; parent-implemented language training showed comparable efficacy to clinician-delivered therapy in early intervention.',
    tags: ['Speech Therapy', 'Cochrane Review', 'Early Intervention', 'Phonology']
  },

  // 10. Open Source AI, GitHub & Hugging Face Resources
  {
    id: 'ai-gh-1',
    category: 'open-source-ai',
    categoryLabel: 'GitHub & Hugging Face AI',
    title: 'Simons Sleep Project (SSP): Multi-Sensor Pediatric Biometrics & Sensory Profiles',
    authors: 'Dinstein Lab, Ben-Gurion University & Simons Foundation',
    journalOrPlatform: 'GitHub: Dinstein-Lab/SSP_manuscript',
    year: '2023',
    type: 'Open Source Tool',
    doiOrUrl: 'https://github.com/Dinstein-Lab/SSP_manuscript',
    parentTakeaway: 'An open-science initiative connecting sleep, sensory sensitivity, and smartwatch biometrics to understand how sensory distress affects children with autism during daily life.',
    clinicalTakeaway: 'Open codebase and research pipeline integrating actigraphy, sleep mat pressure arrays, EEG, and standardized Sensory Profile questionnaires for autistic vs neurotypical sibling cohorts.',
    tags: ['GitHub', 'Open Science', 'Sleep', 'Sensory Profile', 'EEG']
  },
  {
    id: 'ai-gh-2',
    category: 'open-source-ai',
    categoryLabel: 'GitHub & Hugging Face AI',
    title: 'CalmSignal: Facial-Cue Early-Warning System for Autistic Sensory Overload',
    authors: 'Farhan, M., et al.',
    journalOrPlatform: 'GitHub: muhmdfarhan0/calmsignal',
    year: '2024',
    type: 'Open Source Tool',
    doiOrUrl: 'https://github.com/muhmdfarhan0/calmsignal',
    parentTakeaway: 'A computer-vision project utilizing mobile AI to recognize micro-expressions of sensory distress and anxiety in autistic children before a full meltdown occurs.',
    clinicalTakeaway: 'PyTorch and MobileNetV3 architecture trained on facial action units to detect prodromal autonomic arousal and sensory overload, allowing parents/educators to initiate co-regulation early.',
    tags: ['GitHub', 'Computer Vision', 'PyTorch', 'Sensory Distress', 'Autism']
  },
  {
    id: 'ai-gh-3',
    category: 'open-source-ai',
    categoryLabel: 'GitHub & Hugging Face AI',
    title: 'HyperCOCO & ABIDE: Graph Neural Networks for ASD & ADHD fMRI Connectomics',
    authors: 'BASIRA Lab (Brain And SIgnal Research & Analysis)',
    journalOrPlatform: 'GitHub: basiralab/HyperCOCO',
    year: '2023',
    type: 'Open Source Tool',
    doiOrUrl: 'https://github.com/basiralab/HyperCOCO',
    parentTakeaway: 'Cutting-edge neuroimaging research repository using deep learning to map differences in brain connectivity between autism and ADHD.',
    clinicalTakeaway: 'Graph neural network (GNN) implementation trained on resting-state fMRI from the ABIDE and ADHD-200 open repositories, modeling whole-brain functional connectivity fingerprints.',
    tags: ['GitHub', 'fMRI', 'Graph Neural Networks', 'ABIDE', 'ADHD-200']
  },
  {
    id: 'ai-hf-1',
    category: 'open-source-ai',
    categoryLabel: 'GitHub & Hugging Face AI',
    title: 'Autism Pediatric Screening Dataset (Q-CHAT & AQ-10 Clinical Cohorts)',
    authors: 'Mohit et al. / Hugging Face Open Datasets',
    journalOrPlatform: 'Hugging Face Datasets: mohit7685/autism-screening-data',
    year: '2023',
    type: 'Dataset',
    doiOrUrl: 'https://huggingface.co/datasets/mohit7685/autism-screening-data',
    parentTakeaway: 'A standardized dataset used by health informatics researchers to benchmark machine learning algorithms for pediatric autism screening tools.',
    clinicalTakeaway: 'Tabular dataset featuring standardized Q-CHAT (Quantitative Checklist for Autism in Toddlers) items, social responsiveness indicators, and developmental milestone variables.',
    tags: ['Hugging Face', 'Dataset', 'Autism Screening', 'Q-CHAT', 'Machine Learning']
  },
  {
    id: 'ai-hf-2',
    category: 'open-source-ai',
    categoryLabel: 'GitHub & Hugging Face AI',
    title: 'Wav2Vec2 & Whisper Child Speech Acoustic Models for Pediatric Delay Analysis',
    authors: 'Dysata & Open-Source Speech Researchers',
    journalOrPlatform: 'Hugging Face Models: dysata/Wav2Vec2-Ru-Child & bookbot/distil-wav2vec2',
    year: '2024',
    type: 'AI Model',
    doiOrUrl: 'https://huggingface.co/models?search=child+speech',
    parentTakeaway: 'Specialized speech-recognition artificial intelligence fine-tuned specifically on children\'s voices to assist clinicians in transcribing and evaluating speech delays and articulation differences.',
    clinicalTakeaway: 'Acoustic models trained on pediatric speech corpora addressing high fundamental frequency (F0), formant dispersion shifts, and developmental phonological reductions compared to adult speech models.',
    tags: ['Hugging Face', 'Speech Recognition', 'Child Speech', 'Acoustic AI', 'Wav2Vec2']
  }
];

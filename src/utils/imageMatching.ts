export function getCategoryFallbackSvg(categories: string[]) {
  const cats = categories ? categories.map(c => c.toLowerCase()) : [];

  // Default base SVG with a soft background glow
  let svgContent = `<rect width="100%" height="100%" fill="#F3F0E8" />`;
  let icon = `<circle cx="50%" cy="50%" r="20" fill="#062B4F" opacity="0.1" />`;

  if (cats.includes('adhd') || cats.includes('attention')) {
    icon = `<circle cx="30%" cy="50%" r="15" fill="#062B4F" opacity="0.1" /><circle cx="50%" cy="40%" r="20" fill="#7C9988" opacity="0.15" /><circle cx="70%" cy="60%" r="10" fill="#C8A15A" opacity="0.2" />`;
  } else if (cats.includes('autism') || cats.includes('asd')) {
    icon = `<path d="M 30 50 Q 50 20 70 50 T 110 50" stroke="#7C9988" stroke-width="4" fill="none" opacity="0.3" transform="scale(3) translate(0, -10)" />`;
  } else if (cats.includes('behaviour') || cats.includes('behavior')) {
    icon = `<rect x="35%" y="40%" width="30%" height="20%" rx="10" fill="#062B4F" opacity="0.1" /><rect x="45%" y="30%" width="10%" height="40%" rx="5" fill="#C8A15A" opacity="0.2" />`;
  } else if (cats.includes('emotional regulation') || cats.includes('anxiety')) {
    icon = `<path d="M 20 50 C 40 10, 60 90, 80 50 S 120 10, 140 50" stroke="#C8A15A" stroke-width="5" fill="none" opacity="0.2" transform="scale(2) translate(10, 0)" />`;
  } else if (cats.includes('school support') || cats.includes('learning')) {
    icon = `<polygon points="50,20 80,40 80,80 20,80 20,40" fill="#7C9988" opacity="0.15" transform="scale(1.5) translate(20, -5)" />`;
  } else if (cats.includes('sensory') || cats.includes('sensory processing')) {
    icon = `<circle cx="50%" cy="50%" r="30" fill="none" stroke="#062B4F" stroke-width="2" stroke-dasharray="5,5" opacity="0.2" /><circle cx="50%" cy="50%" r="15" fill="#7C9988" opacity="0.15" />`;
  } else if (cats.includes('parenting') || cats.includes('parent guidance')) {
    icon = `<circle cx="45%" cy="50%" r="25" fill="#062B4F" opacity="0.1" /><circle cx="55%" cy="55%" r="15" fill="#C8A15A" opacity="0.2" />`;
  }

  const svgString = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="225" viewBox="0 0 400 225">${svgContent}${icon}</svg>`;

  // Base64 encode the SVG to ensure it works correctly as a data URI across all browsers without hex color parsing issues.
  let encodedSvg = "";
  if (typeof Buffer !== 'undefined') {
    encodedSvg = Buffer.from(svgString).toString('base64');
  } else if (typeof btoa !== 'undefined') {
    encodedSvg = btoa(unescape(encodeURIComponent(svgString)));
  } else {
    // Fallback for unexpected environments
    return `data:image/svg+xml;utf8,${encodeURIComponent(svgString)}`;
  }

  return `data:image/svg+xml;base64,${encodedSvg}`;
}

// Canonical alias map connecting article slugs to their dedicated illustrations in src/assets/blog/
export const SLUG_IMAGE_MAP: Record<string, string> = {
  // Flagship clinical pillars
  'pda-autism-demand-avoidance-vs-defiance': 'pda-autism-demand-avoidance-vs-defiance',
  'rejection-sensitive-dysphoria-adhd-children': 'rejection-sensitive-dysphoria-adhd-children',
  'selective-mutism-vs-shyness-when-child-freezes': 'selective-mutism-vs-shyness-when-child-freezes',
  'public-meltdowns-and-defiance-how-to-deescalate': 'parent-guidance-for-behaviour-concerns',
  'adhd-morning-routine-and-executive-dysfunction': 'morning-routine-problems-in-adhd',
  'child-assessment-waitlist-home-strategies': 'when-to-seek-a-developmental-assessment-for-your-child',
  'how-to-read-child-psychological-assessment-report': 'understanding-psychological-reports-a-guide-for-parents',
  'parent-teacher-meeting-neurodivergent-child-script': 'school-meeting-checklist',
  'multilingual-children-speech-delay-myths-vs-red-flags': 'social-communication-concerns',
  'explaining-adhd-to-grandparents-joint-family': 'understanding-the-confusion-between-adhd-and-hyperactivity-in-children',
  'homework-meltdowns-adhd-task-initiation': 'homework-battles-and-attention-difficulties',
  'adhd-hyperactivity-and-meltdowns-what-to-do': 'adhd-hyperactivity-and-meltdowns-what-to-do',
  'discrete-trial-teaching-one-to-one-vs-group': 'discrete-trial-teaching-one-to-one-vs-group',

  // Foundational clinical articles with file naming variations
  'understanding-adhd-and-hyperactivity-in-children': 'understanding-the-confusion-between-adhd-and-hyperactivity-in-children',
  'why-screen-time-is-hard-for-children-to-stop': 'the-science-of-screen-time-why-it-is-so-hard-for-children-to-unplug',
  'how-to-support-executive-function-at-home': 'how-to-support-executive-function-at-home',
  'tantrum-vs-meltdown': 'tantrum-vs-meltdown-what-is-the-difference',
  'autism-early-signs': 'autism-early-signs-parents-should-notice',
  'when-to-seek-developmental-assessment': 'when-to-seek-a-developmental-assessment-for-your-child',
  'parent-guidance-after-an-autism-diagnosis': 'parent-guidance-after-an-autism-diagnosis-what-next',
  'understanding-psychological-reports': 'understanding-psychological-reports-a-guide-for-parents',
  'how-to-prepare-for-child-assessment': 'how-to-prepare-your-child-for-a-psychological-assessment',
  'behaviour-is-communication': 'behaviour-is-communication-decoding-what-your-child-needs',
  'speech-delay-vs-autism': 'speech-delay-vs-autism-understanding-the-difference',
  'emotional-regulation-in-children': 'emotional-regulation-in-children-teaching-kids-to-handle-big-feelings',
  'learning-difficulties-early-signs': 'learning-difficulties-early-signs',
  'school-refusal-and-school-anxiety': 'school-refusal-and-school-anxiety',
  'sensory-processing-difficulties': 'sensory-processing-difficulties-when-the-world-is-too-loud',
  'school-meeting-checklist': 'school-meeting-checklist',
  'iep-and-school-support-planning': 'iep-and-school-support-planning-a-parents-guide',
  'parent-burnout-child-development-support': 'parent-burnout-in-child-development-support',
  'sleep-routine-and-child-behaviour': 'sleep-routine-and-child-behaviour',
  'social-communication-concerns': 'social-communication-concerns',
  'homework-battles-and-attention-difficulties': 'homework-battles-and-attention-difficulties',
  'morning-routine-problems-in-adhd': 'morning-routine-problems-in-adhd',
  'parent-guidance-for-behaviour-concerns': 'parent-guidance-for-behaviour-concerns',
  'screen-time-and-emotional-regulation': 'screen-time-and-emotional-regulation-in-children',
};

export function getArticleImage(article: any, localImages: Record<string, { default: ImageMetadata }>) {
  if (article.sanityImage) {
    return { type: 'remote', src: article.sanityImage };
  }

  const slug = article.href.replace('/blog/', '').replace(/\/$/, '');
  const kebabTitle = article.title ? article.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') : '';

  // 1. Check explicit canonical alias map first
  const mappedFilename = SLUG_IMAGE_MAP[slug];
  if (mappedFilename) {
    const matchedPath = Object.keys(localImages).find(path => {
      const parts = path.split('/');
      const filename = parts[parts.length - 1].split('.')[0];
      return filename === mappedFilename;
    });
    if (matchedPath && localImages[matchedPath]) {
      return { type: 'local', src: localImages[matchedPath].default };
    }
  }

  // 2. Dynamic discovery: exact match or bidirectional substring
  const imagePath = Object.keys(localImages).find(path => {
    const parts = path.split('/');
    const filename = parts[parts.length - 1].split('.')[0];

    return (
      filename === slug ||
      filename === kebabTitle ||
      filename.includes(slug) ||
      slug.includes(filename) ||
      filename.includes(kebabTitle)
    );
  });

  if (imagePath && localImages[imagePath]) {
    return { type: 'local', src: localImages[imagePath].default };
  }

  if (article.imageUrl) {
    return { type: 'remote', src: article.imageUrl };
  }

  return { type: 'fallback', src: getCategoryFallbackSvg(article.categories) };
}

/**
 * Retrieves a list of category-relevant images for interactive slideshows and visual previews.
 */
export function getCategoryThemedImages(
  categories: string[] = [],
  localImages: Record<string, { default: ImageMetadata }>,
  maxCount: number = 4
): ImageMetadata[] {
  const cats = categories.map(c => c.toLowerCase());
  const allPaths = Object.keys(localImages);

  const matchedPaths = allPaths.filter(path => {
    const lowerPath = path.toLowerCase();
    return cats.some(cat => {
      if (cat.includes('adhd') || cat.includes('attention')) return lowerPath.includes('adhd') || lowerPath.includes('attention');
      if (cat.includes('autism') || cat.includes('asd')) return lowerPath.includes('autism') || lowerPath.includes('asd') || lowerPath.includes('pda');
      if (cat.includes('behaviour') || cat.includes('behavior')) return lowerPath.includes('behaviour') || lowerPath.includes('behavior') || lowerPath.includes('meltdown');
      if (cat.includes('emotional') || cat.includes('regulation') || cat.includes('anxiety')) return lowerPath.includes('emotional') || lowerPath.includes('regulation') || lowerPath.includes('anxiety') || lowerPath.includes('rsd') || lowerPath.includes('mutism');
      if (cat.includes('school') || cat.includes('learning')) return lowerPath.includes('school') || lowerPath.includes('iep') || lowerPath.includes('learning');
      if (cat.includes('assessment') || cat.includes('report')) return lowerPath.includes('assessment') || lowerPath.includes('report');
      if (cat.includes('sensory')) return lowerPath.includes('sensory');
      return false;
    });
  });

  // If we matched enough category images, return them
  if (matchedPaths.length >= 2) {
    return matchedPaths.slice(0, maxCount).map(p => localImages[p].default);
  }

  // Otherwise pick the newest high-resolution clinical pillar images
  const fallbackPriorityFilenames = [
    'pda-autism-demand-avoidance-vs-defiance',
    'rejection-sensitive-dysphoria-adhd-children',
    'selective-mutism-vs-shyness-when-child-freezes',
    'adhd-hyperactivity-and-meltdowns-what-to-do',
    'emotional-regulation-in-children-teaching-kids-to-handle-big-feelings',
    'autism-early-signs-parents-should-notice'
  ];

  const fallbackImages: ImageMetadata[] = [];
  for (const name of fallbackPriorityFilenames) {
    const found = allPaths.find(p => p.includes(name));
    if (found && localImages[found]) {
      fallbackImages.push(localImages[found].default);
      if (fallbackImages.length >= maxCount) break;
    }
  }

  return fallbackImages.length > 0 ? fallbackImages : allPaths.slice(0, maxCount).map(p => localImages[p].default);
}

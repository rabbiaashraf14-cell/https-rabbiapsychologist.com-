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

export function getArticleImage(article: any, localImages: Record<string, { default: ImageMetadata }>) {
  if (article.sanityImage) {
    return { type: 'remote', src: article.sanityImage };
  }

  const slug = article.href.replace('/blog/', '').replace(/\/$/, '');
  const kebabTitle = article.title ? article.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') : '';

  const imagePath = Object.keys(localImages).find(path => {
    const parts = path.split('/');
    const filename = parts[parts.length - 1].split('.')[0];

    return filename === slug || filename === kebabTitle || filename.includes(slug) || filename.includes(kebabTitle);
  });

  if (imagePath && localImages[imagePath]) {
    return { type: 'local', src: localImages[imagePath].default };
  }

  if (article.imageUrl) {
    return { type: 'remote', src: article.imageUrl };
  }

  return { type: 'fallback', src: getCategoryFallbackSvg(article.categories) };
}

import type { CityLocation } from './locationTypes';

export function getCityPath(location: CityLocation): string {
  if (location.primaryLocale && location.primaryLocale !== 'en-US' && location.primaryLocale !== 'en-GB' && location.primaryLocale !== 'en-AU' && location.primaryLocale !== 'en-PK') {
      const lang = location.primaryLocale.split('-')[0];
      return `/${lang}/locations/${location.countrySlug}/${location.citySlug}`;
  }
  return `/locations/${location.countrySlug}/${location.citySlug}`;
}

export function generateHreflangTags(location: CityLocation, domain: string = 'https://www.rabbiapsychologist.com'): Array<{ href: string, hreflang: string }> {
  const tags: Array<{ href: string, hreflang: string }> = [];

  tags.push({
    href: `${domain}${getCityPath(location)}`,
    hreflang: location.primaryLocale
  });

  return tags;
}

export function generateCityFAQSchema(location: CityLocation) {
  if (!location.frequentlyAskedQuestions || location.frequentlyAskedQuestions.length === 0) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": location.frequentlyAskedQuestions.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

export function generateCityBreadcrumbSchema(location: CityLocation, domain: string = 'https://www.rabbiapsychologist.com') {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": domain
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Locations",
        "item": `${domain}/locations`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": location.countryName,
        "item": `${domain}/locations/${location.countrySlug}`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": location.cityName,
        "item": `${domain}${getCityPath(location)}`
      }
    ]
  };
}

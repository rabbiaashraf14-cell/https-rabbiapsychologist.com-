import type { CityLocation } from './locationTypes';
import { cities } from './cities';
import { featuredLocations } from './featuredLocations';
import { countries } from './countries';

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

export interface PublicCityProjection {
  cityName: string;
  citySlug: string;
  countryName: string;
  countrySlug: string;
  regionName: string;
  regionSlug: string;
  publicLanguages: string[];
  destinationUrl: string;
  featured: boolean;
}

export function getRegionSlug(countrySlug?: string, publicationRegion?: string): string {
  if (publicationRegion) {
     const rawRegion = publicationRegion.toLowerCase();
     if (rawRegion.includes('north america')) return 'north-america';
     if (rawRegion.includes('latin america')) return 'latin-america-caribbean';
     if (rawRegion.includes('uk') || rawRegion.includes('ireland')) return 'uk-ireland';
     if (rawRegion.includes('western europe')) return 'western-europe';
     if (rawRegion.includes('northern europe')) return 'northern-europe';
     if (rawRegion.includes('southern europe')) return 'southern-europe';
     if (rawRegion.includes('eastern europe')) return 'central-eastern-europe';
     if (rawRegion.includes('middle east')) return 'middle-east-gulf';
     if (rawRegion.includes('south asia')) return 'south-asia';
     if (rawRegion.includes('southeast asia')) return 'southeast-asia';
     if (rawRegion.includes('east asia')) return 'east-asia';
     if (rawRegion.includes('central asia')) return 'central-asia';
     if (rawRegion.includes('africa')) return 'africa';
     if (rawRegion.includes('australia') || rawRegion.includes('oceania')) return 'australia-new-zealand';
     if (rawRegion.includes('pacific')) return 'pacific-islands';
  }
  return 'global';
}

function getRegionName(city: CityLocation): string {
  const country = countries.find(c => c.countrySlug === city.countrySlug);
  return country?.publicationRegion || city.geographicRegion || 'Global';
}

export function getPublicCityProjection(city: CityLocation): PublicCityProjection {
  // Since city pages are not published, the destination URL should be the country page or region page
  const country = countries.find(c => c.countrySlug === city.countrySlug);
  const regionSlug = getRegionSlug(city.countrySlug, country?.publicationRegion);
  const destinationUrl = `/locations/${city.countrySlug}`; // Direct to country page.

  return {
    cityName: city.cityName,
    citySlug: city.citySlug,
    countryName: city.countryName,
    countrySlug: city.countrySlug,
    regionName: getRegionName(city),
    regionSlug,
    publicLanguages: city.localLanguages || ['English'],
    destinationUrl,
    featured: city.featured || featuredLocations.globalCities.includes(city.citySlug)
  };
}

export function getFeaturedLocationsByGroup(group: string = 'globalCities', limit: number = 20): PublicCityProjection[] {
  let slugs: string[] = [];
  if (group === 'globalCities') slugs = featuredLocations.globalCities;
  else if (featuredLocations.regionalGroups[group as keyof typeof featuredLocations.regionalGroups]) slugs = featuredLocations.regionalGroups[group as keyof typeof featuredLocations.regionalGroups];

  return cities.filter(c => slugs.includes(c.citySlug)).map(getPublicCityProjection).slice(0, limit);
}

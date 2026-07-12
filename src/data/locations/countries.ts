import type { Country } from './locationTypes';

export const countries: Country[] = [
  // Examples of some countries (to be expanded in phase 1, part 2)
  {
    id: 'co-pakistan',
    countryName: 'Pakistan',
    countrySlug: 'pakistan',
    countryCode: 'PK',
    continentSlug: 'asia',
    primaryLocale: 'en-PK'
  },
  {
    id: 'co-uae',
    countryName: 'United Arab Emirates',
    countrySlug: 'united-arab-emirates',
    countryCode: 'AE',
    continentSlug: 'middle-east',
    primaryLocale: 'en-AE'
  },
  {
    id: 'co-uk',
    countryName: 'United Kingdom',
    countrySlug: 'united-kingdom',
    countryCode: 'GB',
    continentSlug: 'europe',
    primaryLocale: 'en-GB'
  },
  {
    id: 'co-usa',
    countryName: 'United States',
    countrySlug: 'united-states',
    countryCode: 'US',
    continentSlug: 'north-america',
    primaryLocale: 'en-US'
  }
];

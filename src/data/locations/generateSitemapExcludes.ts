import fs from 'fs';
import { cities } from './src/data/locations/cities';
import { getSoftLaunchCity } from './src/data/locations/citySoftLaunchManifest';
import { isLocationEligibleForPublicRoute } from './src/data/locations/locationValidation';

const excludedPaths: string[] = [];
for (const city of cities) {
  if (isLocationEligibleForPublicRoute(city)) {
     const softLaunch = getSoftLaunchCity(city.citySlug);
     if (!city.indexable || (softLaunch && softLaunch.approvalStatus === 'approved-for-noindex-soft-launch')) {
        excludedPaths.push(`/locations/${city.countrySlug}/${city.citySlug}`);
     }
  }
}

fs.writeFileSync('sitemap-excludes.json', JSON.stringify(excludedPaths));

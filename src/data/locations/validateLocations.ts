import { validateAllLocations } from './locationValidation';
import { cities } from './cities';

function run() {
  console.log('Starting location validation...');
  let hasErrors = false;

  const total = cities.length;
  const tier1 = cities.filter(c => c.priorityTier === 1).length;
  const tier2 = cities.filter(c => c.priorityTier === 2).length;
  const tier3 = cities.filter(c => c.priorityTier === 3).length;

  console.log(`Total cities: ${total}`);
  console.log(`Tier 1: ${tier1}`);
  console.log(`Tier 2: ${tier2}`);
  console.log(`Tier 3: ${tier3}`);

  if (total < 490 || total > 510) {
     console.error('Total city count is not approximately 500');
     hasErrors = true;
  }
  if (tier1 < 45 || tier1 > 55) {
     console.error('Tier 1 count is not approximately 50');
     hasErrors = true;
  }
  if (tier2 < 140 || tier2 > 160) {
     console.error('Tier 2 count is not approximately 150');
     hasErrors = true;
  }
  if (tier3 < 280 || tier3 > 320) {
     console.error('Tier 3 count is not approximately 300');
     hasErrors = true;
  }

  const results = validateAllLocations(cities);

  for (const [cityId, result] of Object.entries(results)) {
    if (!result.valid || result.errors.length > 0) {
      console.error(`\nLocation validation failed for ${cityId}:`);
      for (const error of result.errors) {
        console.error(`- ${error}`);
      }
      hasErrors = true;
    }

    if (result.warnings.length > 0) {
      console.warn(`\nWarnings for ${cityId}:`);
      for (const warning of result.warnings) {
        console.warn(`- ${warning}`);
      }
    }
  }

  if (hasErrors) {
    console.error('\nLocation validation failed. Please fix the errors above.');
    process.exit(1);
  } else {
    console.log('\nLocation validation passed successfully.');
    process.exit(0);
  }
}

run();

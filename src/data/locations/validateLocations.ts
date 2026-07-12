import { validateAllLocations } from './locationValidation';
import { cities } from './cities';

function run() {
  console.log('Starting location validation...');
  const results = validateAllLocations(cities);
  let hasErrors = false;

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

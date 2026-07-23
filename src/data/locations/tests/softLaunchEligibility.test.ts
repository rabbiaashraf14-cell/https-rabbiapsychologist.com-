import { cities } from '../cities';
import { isLocationEligibleForPublicRoute } from '../locationValidation';
import { getSoftLaunchCity, citySoftLaunchManifest } from '../citySoftLaunchManifest';

const lahore = cities.find(c => c.citySlug === 'lahore')!;
const softLaunchObj = getSoftLaunchCity('lahore')!;

// Helper to reset state
const resetObj = () => {
   softLaunchObj.routeEnabled = true;
   softLaunchObj.approvalStatus = 'approved-for-noindex-soft-launch';
   softLaunchObj.approvedBy = 'Real Human';
   softLaunchObj.reviewerRole = 'QA';
   softLaunchObj.approvalDate = '2023-01-01';
   softLaunchObj.reviewExpiryDate = '2099-01-01';
   softLaunchObj.contentVersion = lahore.contentVersion || '1.0';
   softLaunchObj.robotsDirective = 'noindex, follow';
   softLaunchObj.sitemapEligible = false;
   softLaunchObj.hreflangEligible = false;
   softLaunchObj.footerEligible = false;
   softLaunchObj.directoryLinkEligible = false;
   softLaunchObj.indexNowEligible = false;
   softLaunchObj.llmsEligible = false;
   lahore.published = true;
   lahore.indexable = false;
};

const runTests = () => {
   let allPassed = true;

   console.log('--- Running Soft Launch Eligibility Tests ---');

   try {
       resetObj();
       softLaunchObj.approvedBy = 'Placeholder';
       if (isLocationEligibleForPublicRoute(lahore)) {
           console.error('❌ FAILED: Placeholder reviewer should be rejected');
           allPassed = false;
       } else {
           console.log('✅ PASSED: Placeholder reviewer rejected');
       }
   } catch (e) {
       console.error('❌ FAILED: Test threw error', e);
       allPassed = false;
   }

   try {
       resetObj();
       softLaunchObj.reviewerRole = undefined;
       if (isLocationEligibleForPublicRoute(lahore)) {
           console.error('❌ FAILED: Missing reviewer role should be rejected');
           allPassed = false;
       } else {
           console.log('✅ PASSED: Missing reviewer role rejected');
       }
   } catch (e) {
       console.error('❌ FAILED: Test threw error', e);
       allPassed = false;
   }

   try {
       resetObj();
       softLaunchObj.reviewExpiryDate = '2000-01-01';
       if (isLocationEligibleForPublicRoute(lahore)) {
           console.error('❌ FAILED: Expired approval should be rejected');
           allPassed = false;
       } else {
           console.log('✅ PASSED: Expired approval rejected');
       }
   } catch (e) {
       console.error('❌ FAILED: Test threw error', e);
       allPassed = false;
   }

   try {
       resetObj();
       softLaunchObj.contentVersion = '999.9';
       if (isLocationEligibleForPublicRoute(lahore)) {
           console.error('❌ FAILED: Mismatched content version should be rejected');
           allPassed = false;
       } else {
           console.log('✅ PASSED: Mismatched content version rejected');
       }
   } catch (e) {
       console.error('❌ FAILED: Test threw error', e);
       allPassed = false;
   }

   console.log('--- Soft Launch Eligibility Tests Complete ---');

   if (!allPassed) {
       process.exit(1);
   }
};

runTests();

// @ts-check
import { defineConfig } from 'astro/config';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.rabbiapsychologist.com',
  trailingSlash: 'always',
  redirects: {
    '/services/local-assessment': '/services/#local-assessment',
    '/child-psychologist-lahore': '/about/',
    '/parent-training-lahore': '/parent-support/',
    '/adhd-child-psychologist-lahore': '/services/adhd-support/',
    '/autism-assessment-lahore': '/services/asd-support/',

    '/school-iep-help': '/services/school-consultation/',
    '/services/behavior-support-planning': '/services/behaviour-planning/',
    '/online-parent-consultation-mena-gulf': '/international-families/middle-east-gulf/',
    '/parent-training': '/parent-support/',

    '/services/school-iep-consultation': '/services/school-consultation/',
    '/services/school-partnership': '/school-partnerships/',
    '/online-parent-consultation-pakistan': '/international-families/pakistan/',
    '/online-parent-consultation-australia': '/international-families/australia/',
    '/providers': '/about/',
    '/providers/rabbia-ashraf': '/about/',
    '/rabbia-ashraf': '/about/',
    '/provider': '/about/',
    '/find-support': '/start-here/',
    '/join-as-provider': '/about/',
    '/provider-scope-boundaries': '/terms-and-disclaimer/',
    '/global-consultation': '/parent-support/',
    '/resources-vault': '/resource-vault/',
    '/free-resource': '/free-downloads/',
    '/nri-families': '/international-families/overseas-pakistani-families/',
    '/non-resident-pakistani-families': '/international-families/overseas-pakistani-families/',
    '/expat-pakistani-families': '/international-families/overseas-pakistani-families/',
    '/gulf-families': '/international-families/middle-east-gulf/',
    '/middle-east-families': '/international-families/middle-east-gulf/',
    '/overseas-pakistani-families': '/international-families/overseas-pakistani-families/',

    // New service page redirects
    '/services/global-parent-consultation': '/parent-support/',
    '/services/autism-parent-guidance': '/services/asd-support/',
    '/services/adhd-executive-function-support': '/services/adhd-support/',
    '/services/psychological-assessment-local': '/services/#local-assessment',
    '/services/parent-consultation': '/parent-support/',

    // Legacy redirects
    '/asd-support': '/services/asd-support/',
    '/autism-support': '/services/asd-support/',
    '/adhd-support': '/services/adhd-support/',
    '/school-consultation': '/services/school-consultation/',
    '/behaviour-planning': '/services/behaviour-planning/',
    '/behavior-planning': '/services/behaviour-planning/',
    '/local-assessment': '/services/#local-assessment',
    '/psychological-assessment': '/services/#local-assessment',
    '/parent-guidance-consultations': '/services/',
    '/between-session-support-programs': '/between-session-programs/',
    '/resources/free-downloads': '/free-downloads/',
    '/resources/resource-vault': '/resource-vault/'
  },
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    sitemap(),
    {
      name: 'sitemap-compatibility-alias',
      hooks: {
        'astro:build:done': ({ dir }) => {
          const outDir = fileURLToPath(dir);
          const indexFile = path.join(outDir, 'sitemap-index.xml');
          const legacyFile = path.join(outDir, 'sitemap.xml');
          if (fs.existsSync(indexFile)) {
            fs.copyFileSync(indexFile, legacyFile);
            console.log('Created sitemap.xml compatibility alias from sitemap-index.xml');
          }
        }
      }
    }
  ]
});

// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.rabbiapsychologist.com',
  redirects: {
    '/providers': '/about',
    '/providers/rabbia-ashraf': '/about',
    '/rabbia-ashraf': '/about',
    '/provider': '/about',
    '/find-support': '/start-here',
    '/join-as-provider': '/about',
    '/provider-scope-boundaries': '/terms-and-disclaimer',
    '/global-consultation': '/parent-support',
    '/resources-vault': '/resource-vault',
    '/free-resource': '/free-downloads',
    '/nri-families': '/overseas-pakistani-families',
    '/non-resident-pakistani-families': '/overseas-pakistani-families',
    '/expat-pakistani-families': '/overseas-pakistani-families',
    '/gulf-families': '/online-parent-consultation-mena-gulf',
    '/middle-east-families': '/online-parent-consultation-mena-gulf',

    // New service page redirects
    '/asd-support': '/services/asd-support',
    '/autism-support': '/services/asd-support',
    '/adhd-support': '/services/adhd-support',
    '/school-consultation': '/services/school-consultation',
    '/school-iep-consultation': '/services/school-consultation',
    '/school-iep-help': '/services/school-consultation',
    '/behaviour-planning': '/services/behaviour-planning',
    '/behavior-planning': '/services/behaviour-planning',
    '/behavior-support-planning': '/services/behaviour-planning',
    '/local-assessment': '/services/local-assessment',
    '/psychological-assessment': '/services/local-assessment',
    '/parent-guidance-consultations': '/services',
    '/between-session-support-programs': '/between-session-programs'
  },
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [sitemap()]
});

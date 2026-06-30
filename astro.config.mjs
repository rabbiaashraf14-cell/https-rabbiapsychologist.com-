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
    '/autism-support': '/parent-support',
    '/adhd-support': '/parent-support',
    '/psychological-assessment': '/report-review',
    '/school-iep-consultation': '/school-iep-help',
    '/resources-vault': '/resource-vault',
    '/free-resource': '/free-downloads',
    '/nri-families': '/overseas-pakistani-families',
    '/non-resident-pakistani-families': '/overseas-pakistani-families',
    '/expat-pakistani-families': '/overseas-pakistani-families',
    '/gulf-families': '/online-parent-consultation-mena-gulf',
    '/middle-east-families': '/online-parent-consultation-mena-gulf'
  },
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [sitemap()]
});

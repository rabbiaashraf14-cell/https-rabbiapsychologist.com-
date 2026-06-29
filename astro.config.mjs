// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.rabbiapsychologist.com',
  redirects: {
    '/global-consultation': '/services/global-parent-consultation',
    '/autism-support': '/services/autism-parent-guidance',
    '/adhd-support': '/services/adhd-executive-function-support',
    '/psychological-assessment': '/services/psychological-assessment-local',
    '/school-iep-consultation': '/services/school-iep-consultation',
    '/rabbia-ashraf': '/providers/rabbia-ashraf',
    '/provider': '/providers',
    '/resources-vault': '/resource-vault',
    '/free-resource': '/free-downloads'
  },
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [sitemap()]
});

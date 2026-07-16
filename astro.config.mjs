// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import fs from 'fs';
let excludes = [];
try {
  if (fs.existsSync('sitemap-excludes.json')) {
    excludes = JSON.parse(fs.readFileSync('sitemap-excludes.json', 'utf-8'));
  }
} catch (e) {}

// https://astro.build/config
export default defineConfig({
  site: 'https://www.rabbiapsychologist.com',
  redirects: {
    "/school-iep-help": "/services/school-consultation",
    "/services/behavior-support-planning": "/services/behaviour-planning",
    "/online-parent-consultation-mena-gulf": "/international-families/middle-east-gulf",
    "/parent-training": "/parent-support",

    "/services/school-iep-consultation": "/services/school-consultation",
    "/online-parent-consultation-pakistan": "/international-families/pakistan",
    "/online-parent-consultation-australia": "/international-families/australia",
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
    '/nri-families': '/international-families/overseas-pakistani-families',
    '/non-resident-pakistani-families': '/international-families/overseas-pakistani-families',
    '/expat-pakistani-families': '/international-families/overseas-pakistani-families',
    '/gulf-families': '/international-families/middle-east-gulf',
    '/middle-east-families': '/international-families/middle-east-gulf',
    '/overseas-pakistani-families': '/international-families/overseas-pakistani-families',
    '/online-parent-consultation-mena-gulf': '/international-families/middle-east-gulf',

    // New service page redirects from issue description
    '/services/global-parent-consultation': '/parent-support',
    '/services/autism-parent-guidance': '/services/asd-support',
    '/services/adhd-executive-function-support': '/services/adhd-support',
    '/services/school-iep-consultation': '/services/school-consultation',
    '/services/behavior-support-planning': '/services/behaviour-planning',
    '/services/psychological-assessment-local': '/services/local-assessment',
    '/services/parent-consultation': '/parent-support',

    // Legacy redirects
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
  integrations: [
    sitemap({
      filter: (page) => {
        const url = new URL(page);
        const path = url.pathname;
        for (const exclude of excludes) {
           if (path.includes(exclude)) return false;
        }
        return true;
      }
    })
  ]
});

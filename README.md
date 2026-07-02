# Rabbia Ashraf & Associates

A premium global multidisciplinary platform for child development, parent guidance, provider discovery, and specialist consultation.

## Project Stack
- Framework: Astro
- Styling: Tailwind CSS v4
- Hosting: Firebase Hosting
- Languages: TypeScript, HTML/CSS

## Deployment
This project is configured to deploy the generated static files located in `dist/` to Vercel.

**Note on Firebase:** Firebase was the previous hosting setup. The `firebase.json` and `.firebaserc` files have been kept for rollback safety. Vercel is now the preferred production deployment target. Firebase should not be deployed again unless rollback is needed.

### A. Deploy through Vercel dashboard:
1. Go to Vercel dashboard
2. Add New Project
3. Import GitHub repository: `rabbiaashraf14-cell/https-rabbiapsychologist.com-`
4. Select Astro framework
5. Build command: `npm run build`
6. Output directory: `dist`
7. Root directory: project root
8. Deploy

### B. Custom domain setup:
1. Add `rabbiapsychologist.com` in Vercel project settings
2. Add `www.rabbiapsychologist.com` as well
3. Set one version as primary
4. Make sure non-primary version redirects to the primary version
5. After Vercel gives DNS records, update DNS where the domain is managed
6. Do not remove Firebase DNS until Vercel deployment is verified

### C. Post migration checks:
- Homepage opens
- All service pages open
- Blog/resources pages open
- About page opens
- Pricing page opens
- Booking buttons work
- WhatsApp or contact buttons work
- Tawk.to chat appears
- Logo loads
- Images load
- Sitemap opens
- Robots.txt opens
- Canonical URLs use `https://rabbiapsychologist.com`
- No Firebase URL appears in metadata
- No 404 pages on internal links

### Post-Launch Monitoring
- Monitor Google Search Console and Bing Webmaster Tools using the provided XML sitemaps.
- Ensure Tawk.to live chat displays correctly and captures only appropriate inquiries.
- Verify analytics integration and error logs in Firebase console.

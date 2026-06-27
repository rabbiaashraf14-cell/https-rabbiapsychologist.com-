# Rabbia Ashraf & Associates

A premium global multidisciplinary platform for child development, parent guidance, provider discovery, and specialist consultation.

## Project Stack
- Framework: Astro
- Styling: Tailwind CSS v4
- Hosting: Firebase Hosting
- Languages: TypeScript, HTML/CSS

## Deployment
This project is configured to deploy the generated static files located in `dist/` to Firebase Hosting.

### Deployment Steps
1. Run `npm install` to install dependencies.
2. Run `npm run build` to generate the production build in the `dist` directory.
3. Verify build artifacts and ensure sitemaps and robots.txt exist in the root of the output.
4. Run `npx firebase deploy --only hosting` to deploy to production.

### Post-Launch Monitoring
- Monitor Google Search Console and Bing Webmaster Tools using the provided XML sitemaps.
- Ensure Tawk.to live chat displays correctly and captures only appropriate inquiries.
- Verify analytics integration and error logs in Firebase console.

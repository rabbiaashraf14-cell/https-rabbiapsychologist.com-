# Vercel Migration Checklist

Follow these steps to safely migrate the deployment to Vercel.

## Before deployment:
- [ ] Pull latest main branch
- [ ] Confirm `npm install` works
- [ ] Confirm `npm run build` works
- [ ] Confirm `dist` folder is generated
- [ ] Confirm no TypeScript or Astro build errors

## Vercel dashboard:
- [ ] Import GitHub repo (`rabbiaashraf14-cell/https-rabbiapsychologist.com-`)
- [ ] Select correct framework (Astro)
- [ ] Confirm build settings (`npm run build`, `dist` output)
- [ ] Deploy preview
- [ ] Open preview URL
- [ ] Check homepage and major routes

## Domain:
- [ ] Add `rabbiapsychologist.com` in Vercel project settings
- [ ] Add `www.rabbiapsychologist.com`
- [ ] Choose primary domain
- [ ] Copy DNS records from Vercel
- [ ] Update DNS provider
- [ ] Wait for verification
- [ ] Test HTTPS
- [ ] Test www and non-www redirects

## After going live:
- [ ] Submit sitemap in Google Search Console
- [ ] Inspect homepage URL
- [ ] Inspect important service pages
- [ ] Check mobile view
- [ ] Check page speed
- [ ] Check 404 issues
- [ ] Keep Firebase as rollback for a short time
- [ ] Remove Firebase only after everything is stable

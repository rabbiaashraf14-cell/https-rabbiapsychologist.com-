export const regionalPricing = {
  parentGuidance: {
    pakistan: { currency: "PKR", price: 5000 },
    international: { currency: "USD", price: 85 }
  },
  adhdSupport: {
    pakistan: { currency: "PKR", price: 5000 },
    international: { currency: "USD", price: 85 }
  },
  asdParentGuidance: {
    pakistan: { currency: "PKR", price: 5000 },
    international: { currency: "USD", price: 85 }
  },
  behaviourPlanning: {
    pakistan: { currency: "PKR", price: 6500 },
    international: { currency: "USD", price: 85 }
  },
  reportReview: {
    pakistan: { currency: "PKR", price: 8500 },
    international: { currency: "USD", price: 125 }
  },
  schoolIEP: {
    pakistan: { currency: "PKR", price: 10000, prefix: "From " },
    international: { currency: "USD", price: 140, prefix: "From " }
  },
  fourSessionPackage: {
    pakistan: { currency: "PKR", price: 20000 },
    international: { currency: "USD", price: 320 }
  },
  workshopTraining: {
    pakistan: { currency: "PKR", min: 15000, max: 25000 },
    international: { currency: "USD", min: 150, max: 200 }
  },
  digitalResources: {
    pakistan: { currency: "PKR", min: 0, max: 2500, prefix: "Free–" },
    international: { currency: "USD", min: 0, max: 29, prefix: "Free–" }
  },
  waitlistBridge: {
    pakistan: { currency: "PKR", price: 5000 },
    international: { currency: "USD", price: 85 }
  }
} as const;

export type ServiceKey = keyof typeof regionalPricing;

export const pricing = [
  { name: '50-Minute Clinical Consultation (Parent Guidance / ADHD / ASD)', price: 'USD 85 / £65 / PKR 5,000' },
  { name: 'Pre-Assessment Waitlist Bridge & Action Plan', price: 'USD 85 / £65 / PKR 5,000' },
  { name: 'Behaviour Planning Session', price: 'USD 85 / £65 / PKR 6,500' },
  { name: 'Clinical Report Review & Parent Explanation', price: 'USD 125 / £95 / PKR 8,500' },
  { name: 'School / IEP Consultation & Advocacy Letter', price: 'From USD 140 / £110 / PKR 10,000' },
  { name: 'Four-Session Intensive Parent Guidance Package', price: 'USD 320 / £245 / PKR 20,000' },
  { name: 'Workshop / Parent Training', price: 'USD 150–200 / PKR 15,000–25,000' },
  { name: 'Digital Resources & Screening Guides', price: 'Free to USD 29' }
];

export const pricingNote = "All consultations require upfront fee confirmation prior to calendar appointment locking. English is our primary medium of consultation.";
export const pricingServiceScope = "Pricing applies to parent education, developmental guidance, ASD/ADHD support planning, school communication preparation, and consultation services.";

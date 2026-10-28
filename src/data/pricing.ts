export const regionalPricing = {
  discoveryCall: {
    pakistan: { currency: "PKR", price: 0 },
    international: { currency: "USD", price: 0 }
  },
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
  { name: 'Initial Discovery & Triage Call (15 Mins)', price: 'Free / Zero Risk' },
  { name: 'Online Parent Guidance Consultation', price: 'USD 85 / £65 / AUD 130' },
  { name: 'Pre-Assessment Waitlist Bridge & Action Plan', price: 'USD 85 / £65 / AUD 130' },
  { name: 'ADHD Support Consultation', price: 'USD 85 / £65 / AUD 130' },
  { name: 'ASD Parent Guidance Consultation', price: 'USD 85 / £65 / AUD 130' },
  { name: 'Behaviour Planning Session', price: 'USD 85 / £65 / AUD 130' },
  { name: 'Report Review & Parent Explanation', price: 'USD 125 / £95 / AUD 190' },
  { name: 'School / IEP Consultation', price: 'From USD 140 / £110 / AUD 215' },
  { name: 'Four-Session Parent Guidance Package', price: 'USD 320 / £245 / AUD 490' },
  { name: 'Workshop / Parent Training', price: 'USD 150–200 / AUD 230–305' },
  { name: 'Digital Resources', price: 'Free to USD 29 / AUD 45' }
];

export const pricingNote = "Assessment, screening, and payment details are confirmed at the time of booking.";
export const pricingServiceScope = "Pricing applies to parent education, developmental guidance, ASD/ADHD support planning, school communication preparation, and consultation services.";

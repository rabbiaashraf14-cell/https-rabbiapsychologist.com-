pricing_data = """export const pricingPakistan = "Pakistan-based families may receive local pricing or booking-stage discounts. Final pricing is confirmed during booking or consultation coordination.";

export const pricingInternational = [
  { name: 'Online Parent Consultation', price: 'USD 50 / AUD 75' },
  { name: 'Developmental Guidance Session', price: 'USD 50 / AUD 75' },
  { name: 'Behaviour & Parenting Support', price: 'USD 50 / AUD 75' },
  { name: 'Report Review / Second Opinion', price: 'USD 60–80 / AUD 90–120' },
  { name: 'School Guidance Session', price: 'USD 60–80 / AUD 90–120' },
  { name: 'Provider Consultation', price: 'Provider-specific' },
  { name: 'Multidisciplinary Case Review', price: 'Custom quote' },
  { name: 'School / Clinic Training', price: 'Custom quote' },
  { name: 'Digital Resources', price: 'Free to USD 29' },
  { name: 'Workshops / Webinars', price: 'USD 10–50' }
];

export const pricingNote = "Prices vary by provider, region, session type, currency conversion, payment method, and scope of service. Parents can review provider profiles and select the option that fits their needs before booking. Pakistan-based families may receive local pricing or booking-stage discounts.";
export const pricingServiceScope = "International pricing applies to parent education, developmental guidance, ASD/ADHD support planning, school communication preparation, and consultation services. Regulated therapy, diagnosis, or assessment is provided only where legally and ethically permitted.";
"""

with open('src/data/pricing.ts', 'w') as f:
    f.write(pricing_data)

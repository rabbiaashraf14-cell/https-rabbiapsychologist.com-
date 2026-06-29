import re

with open('src/components/home/PricingPreview.astro', 'r') as f:
    content = f.read()
content = re.sub(r'<span class="text-gray-700">Pakistan \(PKR\)</span>', '', content)
content = re.sub(r'<span class="font-bold text-brand-navy">Pakistan-based families may receive local pricing or booking-stage discounts. Final pricing is confirmed during booking or consultation coordination.</span>', '', content)
with open('src/components/home/PricingPreview.astro', 'w') as f:
    f.write(content)


with open('src/components/PricingCard.astro', 'r') as f:
    content = f.read()
content = re.sub(r'\bpricePKR\b\?: string;', '', content)
content = re.sub(r'pricePKR, ', '', content)
content = re.sub(r'\{pricePKR && <div class="text-lg text-gray-700">\{pricePKR\} <span class="text-sm text-gray-500">PKR</span></div>\}', '', content)
with open('src/components/PricingCard.astro', 'w') as f:
    f.write(content)

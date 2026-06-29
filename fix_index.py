import re

with open('src/pages/index.astro', 'r') as f:
    content = f.read()

# Update hero section according to the user request
content = re.sub(
    r'<AnimatedHero />',
    '''<section class="bg-brand-sky py-20 text-center">
    <div class="container mx-auto px-4">
      <h1 class="text-4xl md:text-6xl font-bold text-brand-navy mb-6">Multidisciplinary Child Development Support for Growing Minds</h1>
      <p class="text-xl text-gray-700 max-w-3xl mx-auto mb-8">NeuroNest Child Development Centre helps families understand developmental, behavioural, emotional, learning, speech, sensory, and school-related concerns through parent guidance, specialist consultation pathways, and evidence-informed resources.</p>
      <div class="flex flex-wrap justify-center gap-3 mt-8">
        <span class="px-4 py-2 bg-white rounded-full text-sm font-medium text-brand-navy shadow-sm">Multidisciplinary Care</span>
        <span class="px-4 py-2 bg-white rounded-full text-sm font-medium text-brand-navy shadow-sm">Parent Guidance</span>
        <span class="px-4 py-2 bg-white rounded-full text-sm font-medium text-brand-navy shadow-sm">ASD & ADHD Support</span>
        <span class="px-4 py-2 bg-white rounded-full text-sm font-medium text-brand-navy shadow-sm">School Support</span>
        <span class="px-4 py-2 bg-white rounded-full text-sm font-medium text-brand-navy shadow-sm">Developmental Pathways</span>
        <span class="px-4 py-2 bg-white rounded-full text-sm font-medium text-brand-navy shadow-sm">Provider Choice</span>
        <span class="px-4 py-2 bg-white rounded-full text-sm font-medium text-brand-navy shadow-sm">Evidence-Informed Resources</span>
      </div>
    </div>
  </section>''',
    content
)

with open('src/pages/index.astro', 'w') as f:
    f.write(content)

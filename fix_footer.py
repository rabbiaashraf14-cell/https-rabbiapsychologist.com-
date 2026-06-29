import re

with open('src/components/global/Footer.astro', 'r') as f:
    content = f.read()

# Update Footer copyright
content = re.sub(r'© 2026 Rabbia Ashraf & Associates. All rights reserved.', '© 2026 NeuroNest Child Development Centre. All rights reserved.', content)
content = re.sub(r'© 2026 NeuroNest Child Development Centre. All rights reserved.', '© 2026 NeuroNest Child Development Centre. All rights reserved.', content)

# Update Footer tagline and clinical director if not already replaced globally
if 'Growing Minds. Guided Families. Multidisciplinary Care.' not in content:
    # Need to find the existing tagline and replace it
    content = re.sub(r'Global Parent Guidance, Child Development Support, and Specialist Consultation', 'Growing Minds. Guided Families. Multidisciplinary Care.', content)

if 'Led by Rabbia Ashraf, Clinical Psychologist licensed in Pakistan, as Clinical Director.' not in content:
    content = re.sub(r'Clinical Director: Rabbia Ashraf, Clinical Psychologist', 'Led by Rabbia Ashraf, Clinical Psychologist licensed in Pakistan, as Clinical Director.', content)

with open('src/components/global/Footer.astro', 'w') as f:
    f.write(content)

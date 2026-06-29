import re

with open('src/data/site.ts', 'r') as f:
    content = f.read()

content = re.sub(r'siteName: "NeuroNest Child Development Centre"', 'siteName: "NeuroNest Child Development Centre"', content)
content = re.sub(r'tagline: "Growing Minds. Guided Families. Multidisciplinary Care."', 'tagline: "Growing Minds. Guided Families. Multidisciplinary Care."', content)
content = re.sub(r'tagline: ".*?"', 'tagline: "Growing Minds. Guided Families. Multidisciplinary Care."', content)
content = re.sub(r'descriptor: "Multidisciplinary Child Development, Parent Guidance, and Specialist Consultation Centre"', 'descriptor: "Multidisciplinary Child Development, Parent Guidance, and Specialist Consultation Centre"', content)
content = re.sub(r'descriptor: ".*?"', 'descriptor: "Multidisciplinary Child Development, Parent Guidance, and Specialist Consultation Centre"', content)

with open('src/data/site.ts', 'w') as f:
    f.write(content)

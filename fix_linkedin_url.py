import re
with open('src/data/site.ts', 'r') as f:
    content = f.read()

content = content.replace('linkedin.com/in/NeuroNest Child Development Centre', 'linkedin.com/in/rabbiapsychologist')

with open('src/data/site.ts', 'w') as f:
    f.write(content)

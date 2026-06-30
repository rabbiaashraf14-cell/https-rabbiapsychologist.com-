import os
import re

dirs_to_search = ['src', 'public']
files_to_skip = ['google81efdd6e049c95bb.html']

replacements = [
    (r'Rabbia Psychologist — NeuroCare Child Development Services \| Child Development Services & IEP Help', 'Rabbia Psychologist | NeuroCare Child Development Services'),
    (r'title="School & IEP Help \| Rabbia Psychologist — NeuroCare Child Development Services"', 'title="IEP Help at Home | Rabbia Psychologist NeuroCare"'),
    (r'title="Between-Session Support Programs \| Rabbia Psychologist — NeuroCare Child Development Services"', 'title="Between-Session Support | Rabbia Psychologist NeuroCare"'),
    (r'title="Pricing \| Parent Guidance, Between-Session Support & Resources"', 'title="Pricing | Rabbia Psychologist NeuroCare"'),
    (r'title="Terms of Service & Medical Disclaimer"', 'title="Terms of Service & Professional Disclaimer | Rabbia Psychologist"'),
    (r'title="Terms & Medical Disclaimer"', 'title="Terms of Service & Professional Disclaimer | Rabbia Psychologist"'),

    (r'description="Rabbia Psychologist — NeuroCare Child Development Services provides parent guidance, IEP help, report review, between-session support, and child development resources for families in Pakistan and abroad."', 'description="Rabbia Psychologist — NeuroCare Child Development Services provides parent guidance, IEP help, report review, between-session support, and child development resources for families in Pakistan and abroad."'),
    (r'description="Important legal, ethical, and clinical service disclaimers regarding international online consultations."', 'description="Read the terms, service boundaries, professional disclaimer, payment notes, privacy limits, and international family guidance for Rabbia Psychologist — NeuroCare Child Development Services."')
]

for d in dirs_to_search:
    for root, dirs, files in os.walk(d):
        for file in files:
            if file in files_to_skip or file.endswith(('.png', '.jpg', '.jpeg', '.webp', '.ico', '.pdf', '.mp4', '.webm')):
                continue

            filepath = os.path.join(root, file)
            try:
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()

                original_content = content

                # Update page titles based on prompt Part 11
                if 'src/pages/school-iep-help.astro' in filepath:
                    content = re.sub(r'title="School & IEP Help \| Rabbia Psychologist — NeuroCare Child Development Services"', 'title="IEP Help at Home | Rabbia Psychologist NeuroCare"', content)
                    content = re.sub(r'description="[^"]+"', 'description="Get IEP assistance at home, prepare for school meetings, understand teacher concerns, and turn school confusion into practical support steps for your child."', content)

                if 'src/pages/between-session-programs.astro' in filepath:
                    content = re.sub(r'title="Between-Session Support Programs \| Rabbia Psychologist — NeuroCare Child Development Services"', 'title="Between-Session Support | Rabbia Psychologist NeuroCare"', content)
                    content = re.sub(r'description="[^"]+"', 'description="Continue support after therapy, assessments, or school meetings with structured parent guidance, home routines, behaviour support, and practical between-session plans."', content)

                if 'src/pages/pricing.astro' in filepath:
                    content = re.sub(r'title="Pricing \| Parent Guidance, Between-Session Support & Resources"', 'title="Pricing | Rabbia Psychologist NeuroCare"', content)
                    content = re.sub(r'description="[^"]+"', 'description="View international pricing for parent guidance, IEP and school support, report review, between-session support planning, structured parent programs, resources, workshops, and webinars."', content)

                if 'src/pages/terms-and-disclaimer.astro' in filepath:
                    content = re.sub(r'title="Terms of Service & Medical Disclaimer"', 'title="Terms of Service & Professional Disclaimer | Rabbia Psychologist"', content)
                    content = re.sub(r'title="Terms & Medical Disclaimer"', 'title="Terms of Service & Professional Disclaimer | Rabbia Psychologist"', content)
                    content = re.sub(r'description="Important legal, ethical, and clinical service disclaimers regarding international online consultations."', 'description="Read the terms, service boundaries, professional disclaimer, payment notes, privacy limits, and international family guidance for Rabbia Psychologist — NeuroCare Child Development Services."', content)

                if 'src/pages/index.astro' in filepath:
                    content = re.sub(r'const title = "Rabbia Psychologist — NeuroCare Child Development Services \| Child Development Services & IEP Help";', 'const title = "Rabbia Psychologist | NeuroCare Child Development Services";', content)


                if content != original_content:
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(content)
                    print(f"Updated metadata in {filepath}")
            except Exception as e:
                print(f"Error processing {filepath}: {e}")

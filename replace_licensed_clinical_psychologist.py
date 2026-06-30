import os
import re

dirs_to_search = ['src', 'public']
files_to_skip = ['google81efdd6e049c95bb.html']

replacements = [
    (r'Licensed Clinical Psychologist', 'Clinical Psychologist licensed in Pakistan'),
    (r'clinical lead of Rabbia Psychologist — NeuroCare Child Development Services\.', 'Clinical Psychologist licensed in Pakistan.')
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

                for old, new in replacements:
                    content = re.sub(old, new, content)

                if content != original_content:
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(content)
                    print(f"Updated metadata in {filepath}")
            except Exception as e:
                print(f"Error processing {filepath}: {e}")

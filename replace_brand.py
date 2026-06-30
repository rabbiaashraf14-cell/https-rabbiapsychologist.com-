import os
import re

dirs_to_search = ['src', 'public']
files_to_skip = ['google81efdd6e049c95bb.html']

replacements = [
    (r'Rabbia Ashraf NeuroCare Child Development Services', 'Rabbia Psychologist — NeuroCare Child Development Services'),
    (r'Rabbia Ashraf NeuroCare', 'Rabbia Psychologist — NeuroCare Child Development Services'),
    (r'NeuroNest Child Development Centre', 'Rabbia Psychologist — NeuroCare Child Development Services'),
    (r'NeuroNest', 'NeuroCare Child Development Services'),
    (r'Rabbia Ashraf & Associates', 'Rabbia Psychologist — NeuroCare Child Development Services'),
    (r'Rabbia Psychologist - Clinical Child Psychologist', 'Rabbia Psychologist'),
    # Note: avoid URLs like rabbiapsychologist.com, so we look for Rabbiapsychologist but not followed by .com
    (r'Rabbiapsychologist(?!\.com)', 'Rabbia Psychologist')
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
                    print(f"Updated {filepath}")
            except Exception as e:
                print(f"Error processing {filepath}: {e}")

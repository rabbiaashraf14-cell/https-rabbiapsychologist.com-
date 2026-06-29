import os
import re

def process_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        return

    original_content = content

    # --- Part 2: Brand replacement ---
    content = content.replace("Rabbia Ashraf & Associates", "NeuroNest Child Development Centre")
    content = content.replace("rabbia ashraf and associates", "NeuroNest Child Development Centre")
    content = re.sub(r'(?<![a-zA-Z0-9\-\.])Rabbiapsychologist(?![\.\w])', 'NeuroNest Child Development Centre', content, flags=re.IGNORECASE)
    content = content.replace("Global Parent Guidance, Child Development Support, and Specialist Consultation", "Multidisciplinary Child Development, Parent Guidance, and Specialist Consultation Centre")
    content = content.replace("global parent guidance, child development support, and specialist consultation", "multidisciplinary child development, parent guidance, and specialist consultation centre")
    content = content.replace("Trusted Guidance for Growing Minds and Families", "Growing Minds. Guided Families. Multidisciplinary Care.")

    # --- Part 3: Remove public Pakistan/PKR pricing ---
    # Generic replacements for common PKR strings
    content = re.sub(r'Pakistan \(PKR\)\s*<[^>]+>\s*Rs\. 7,000\s*<[^>]+>', 'Pakistan-based families may receive local pricing or booking-stage discounts. Final pricing is confirmed during booking or consultation coordination.', content)
    content = re.sub(r'From PKR 7,000(?: / USD [0-9]+(?: / AUD [0-9]+)?)?', 'Pakistan-based families may receive local pricing or booking-stage discounts. Final pricing is confirmed during booking or consultation coordination.', content)
    content = re.sub(r'PKR 7,000(?: / USD [0-9]+(?: / AUD [0-9]+)?)?', 'Pakistan-based families may receive local pricing or booking-stage discounts. Final pricing is confirmed during booking or consultation coordination.', content)
    content = re.sub(r'PKR 15,000\+', 'Pakistan-based families may receive local pricing or booking-stage discounts. Final pricing is confirmed during booking or consultation coordination.', content)
    content = re.sub(r'PKR 25,000\+', 'Pakistan-based families may receive local pricing or booking-stage discounts. Final pricing is confirmed during booking or consultation coordination.', content)
    content = re.sub(r'Rs\. 7,000', 'Pakistan-based families may receive local pricing or booking-stage discounts. Final pricing is confirmed during booking or consultation coordination.', content)
    content = re.sub(r'PKR [0-9,]+\+', 'Pakistan-based families may receive local pricing or booking-stage discounts. Final pricing is confirmed during booking or consultation coordination.', content)

    # --- Part 5: Remove PMDC Wording ---
    content = re.sub(r'PMDC Registered', 'Licensed in Pakistan', content)
    content = re.sub(r'Registered with PMDC', 'Licensed in Pakistan', content)
    content = re.sub(r'PMDC Licensed', 'Licensed in Pakistan', content)
    content = re.sub(r'PMDC', 'Licensed in Pakistan', content)

    # Clean up double "Licensed in Pakistan Licensed in Pakistan" if any
    content = content.replace('Licensed in Pakistan Licensed in Pakistan', 'Licensed in Pakistan')

    # Remove PKR references in JSON/LLM text files
    content = re.sub(r'- Local Pakistan Consultation: PKR 7,000\+', '- Local Pakistan Consultation: Pakistan-based families may receive local pricing or booking-stage discounts.', content)
    content = re.sub(r'- Local Psychological Assessments \(Lahore\): PKR 25,000\+', '- Local Psychological Assessments: Final pricing is confirmed during booking or consultation coordination.', content)

    if content != original_content:
        try:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
        except Exception as e:
            pass

# Process all text files in src and public
for root_dir in ['src', 'public']:
    for dirpath, _, filenames in os.walk(root_dir):
        for filename in filenames:
            if not filename.endswith(('.png', '.svg', '.ico', '.jpg', '.jpeg', '.webp', '.woff2')):
                process_file(os.path.join(dirpath, filename))

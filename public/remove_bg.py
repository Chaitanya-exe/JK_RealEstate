import os
from rembg import remove
from PIL import Image

input_dir = "public/brandLogos"
output_dir = "public/output_brandLogos"

# Create output folder if not exists
os.makedirs(output_dir, exist_ok=True)

for file_name in os.listdir(input_dir):
    input_path = os.path.join(input_dir, file_name)
    
    # Skip non-image files
    if not file_name.lower().endswith((".png", ".jpg", ".jpeg")):
        continue

    output_path = os.path.join(output_dir, f"no-bg-{file_name}")

    with Image.open(input_path) as img:
        no_bg = remove(img)
        no_bg.save(output_path)

    print(f"Processed: {file_name} -> {output_path}")


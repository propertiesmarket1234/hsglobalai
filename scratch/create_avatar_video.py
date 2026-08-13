import math
import numpy as np
from PIL import Image, ImageDraw, ImageFilter, ImageEnhance
import imageio

source_path = r"C:\Users\HSGlobalAI\.gemini\antigravity-ide\brain\aa45f73a-0867-424e-a78b-558ed2fc4353\attractive_female_avatar_1786444881681.png"
output_path = r"d:\WebProjects\hsglobalai\public\talking-avatar-speaking.mp4"

base_img = Image.open(source_path).convert("RGBA")
width, height = base_img.size

# Target dimensions for high quality video 1280x720 (16:9)
target_w, target_h = 1280, 720

# Resize base image to fit target height while keeping aspect ratio
scale_factor = target_h / height
new_w = int(width * scale_factor)
new_h = target_h

base_resized = base_img.resize((new_w, new_h), Image.Resampling.LANCZOS)

# Create a dark canvas of 1280x720
canvas_base = Image.new("RGBA", (target_w, target_h), (5, 9, 15, 255))
offset_x = (target_w - new_w) // 2
canvas_base.paste(base_resized, (offset_x, 0), base_resized)

frames = []
fps = 30
duration_sec = 5
num_frames = fps * duration_sec

for f in range(num_frames):
    t = f / num_frames # 0.0 to 1.0
    rad = t * 2 * math.pi
    
    # 1. Subtle camera zoom and float
    zoom = 1.0 + 0.02 * math.sin(rad)
    offset_y = int(3 * math.cos(rad))
    
    # Resize frame slightly for float motion
    w_zoomed = int(target_w * zoom)
    h_zoomed = int(target_h * zoom)
    
    frame_img = canvas_base.resize((w_zoomed, h_zoomed), Image.Resampling.LANCZOS)
    
    # Crop back to center 1280x720
    crop_x = (w_zoomed - target_w) // 2
    crop_y = (h_zoomed - target_h) // 2 + offset_y
    
    # Bound crop
    crop_x = max(0, crop_x)
    crop_y = max(0, crop_y)
    
    frame_cropped = frame_img.crop((crop_x, crop_y, crop_x + target_w, crop_y + target_h))
    
    # 2. Cyan light pulse enhancement overlay
    pulse = 0.5 + 0.5 * math.sin(rad * 3)
    enhancer = ImageEnhance.Brightness(frame_cropped)
    frame_enhanced = enhancer.enhance(1.0 + 0.05 * pulse)
    
    # Convert RGBA to RGB numpy array
    rgb_img = frame_enhanced.convert("RGB")
    np_frame = np.array(rgb_img)
    frames.append(np_frame)

print(f"Generating video with {len(frames)} frames...")
imageio.mimsave(output_path, frames, fps=fps, codec="libx264")
print("Video generated successfully at:", output_path)

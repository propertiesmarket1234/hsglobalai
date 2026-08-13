import math
import numpy as np
from PIL import Image, ImageEnhance
import imageio

img0_path = r"C:\Users\HSGlobalAI\.gemini\antigravity-ide\brain\aa45f73a-0867-424e-a78b-558ed2fc4353\attractive_female_avatar_1786444881681.png"
img1_path = r"C:\Users\HSGlobalAI\.gemini\antigravity-ide\brain\aa45f73a-0867-424e-a78b-558ed2fc4353\female_avatar_speaking_1786445852291.png"
img2_path = r"C:\Users\HSGlobalAI\.gemini\antigravity-ide\brain\aa45f73a-0867-424e-a78b-558ed2fc4353\female_avatar_speaking_wide_1786445895474.png"
output_path = r"d:\WebProjects\hsglobalai\public\talking-avatar-speaking.mp4"

img0 = Image.open(img0_path).convert("RGBA")
img1 = Image.open(img1_path).convert("RGBA")
img2 = Image.open(img2_path).convert("RGBA")

width, height = img0.size
target_w, target_h = 1280, 720

# Resize base images to fit target height while keeping aspect ratio
scale_factor = target_h / height
new_w = int(width * scale_factor)
new_h = target_h

img0_r = img0.resize((new_w, new_h), Image.Resampling.LANCZOS)
img1_r = img1.resize((new_w, new_h), Image.Resampling.LANCZOS)
img2_r = img2.resize((new_w, new_h), Image.Resampling.LANCZOS)

def make_canvas(img):
    c = Image.new("RGBA", (target_w, target_h), (5, 9, 15, 255))
    off_x = (target_w - new_w) // 2
    c.paste(img, (off_x, 0), img)
    return c

c0 = make_canvas(img0_r)
c1 = make_canvas(img1_r)
c2 = make_canvas(img2_r)

# Convert to numpy arrays for fast alpha blending
np0 = np.array(c0, dtype=np.float32)
np1 = np.array(c1, dtype=np.float32)
np2 = np.array(c2, dtype=np.float32)

fps = 30
duration_sec = 6
num_frames = fps * duration_sec
frames = []

for f in range(num_frames):
    t = f / fps # time in seconds
    norm_t = f / num_frames
    rad = norm_t * 2 * math.pi
    
    # Natural speaking cadence signal (simulating syllables and pauses)
    # Higher frequency for lip articulation, modulated by phrase envelope
    speech_cadence = (math.sin(t * 14) * 0.5 + 0.5) * (math.sin(t * 3) * 0.4 + 0.6)
    
    # Force natural mouth pauses every few seconds
    if (int(t) % 3 == 0 and (t % 1) > 0.6):
        speech_cadence *= 0.15

    # Determine blend weights between closed (np0), speaking1 (np1), speaking2 (np2)
    if speech_cadence < 0.4:
        # Blend between c0 and c1
        w1 = speech_cadence / 0.4
        w0 = 1.0 - w1
        w2 = 0.0
    else:
        # Blend between c1 and c2
        w2 = (speech_cadence - 0.4) / 0.6
        w1 = 1.0 - w2
        w0 = 0.0

    blended_np = (np0 * w0 + np1 * w1 + np2 * w2).clip(0, 255).astype(np.uint8)
    blended_img = Image.fromarray(blended_np, mode="RGBA")

    # Camera float and micro-zoom
    zoom = 1.0 + 0.015 * math.sin(rad)
    offset_y = int(2.5 * math.cos(rad))

    w_z = int(target_w * zoom)
    h_z = int(target_h * zoom)

    frame_z = blended_img.resize((w_z, h_z), Image.Resampling.LANCZOS)

    crop_x = max(0, (w_z - target_w) // 2)
    crop_y = max(0, (h_z - target_h) // 2 + offset_y)

    frame_cropped = frame_z.crop((crop_x, crop_y, crop_x + target_w, crop_y + target_h))

    # Subtle cyan light pulse enhancement
    pulse = 0.5 + 0.5 * math.sin(rad * 4)
    enhancer = ImageEnhance.Brightness(frame_cropped)
    frame_final = enhancer.enhance(1.0 + 0.03 * pulse)

    rgb_frame = frame_final.convert("RGB")
    frames.append(np.array(rgb_frame))

print(f"Synthesizing {len(frames)} talking avatar frames...")
imageio.mimsave(output_path, frames, fps=fps, codec="libx264")
print("Prerecorded video saved successfully to:", output_path)

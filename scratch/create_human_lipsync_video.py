import math
import numpy as np
from PIL import Image, ImageDraw, ImageFilter, ImageEnhance
import imageio

source_path = r"C:\Users\HSGlobalAI\.gemini\antigravity-ide\brain\aa45f73a-0867-424e-a78b-558ed2fc4353\brand_executive_lady_avatar_1786447166826.png"
output_path = r"d:\WebProjects\hsglobalai\public\talking-avatar-speaking.mp4"

base_img = Image.open(source_path).convert("RGBA")
width, height = base_img.size # 1024x1024

target_w, target_h = 1280, 720
scale_factor = target_h / height
new_w = int(width * scale_factor)
new_h = target_h

base_resized = base_img.resize((new_w, new_h), Image.Resampling.LANCZOS)
canvas_base = Image.new("RGBA", (target_w, target_h), (5, 9, 15, 255))
offset_x = (target_w - new_w) // 2
canvas_base.paste(base_resized, (offset_x, 0), base_resized)

# Center of mouth in 1280x720 canvas: (640, 270)
mx, my = 640, 270

def create_phoneme_frame(base, phoneme_type, intensity):
    """
    Synthesizes realistic human lip sync phonemes:
    0: Closed (rest)
    1: 'AA' (Open mouth, teeth visible)
    2: 'EE' (Stretched open mouth, top teeth)
    3: 'OH' (Round oral opening)
    """
    if intensity <= 0.05 or phoneme_type == 0:
        return base.copy()

    frame = base.copy()
    draw = ImageDraw.Draw(frame)

    # Calculate mouth opening dimensions
    open_h = max(4, int(14 * intensity))
    open_w = max(12, int(24 * intensity))

    if phoneme_type == 1: # 'AA' Open
        # Draw dark inner oral cavity
        draw.ellipse((mx - open_w, my - 4, mx + open_w, my + open_h), fill=(20, 8, 12, 240))
        # Draw top teeth row
        draw.rectangle((mx - open_w + 4, my - 3, mx + open_w - 4, my + 3), fill=(235, 235, 240, 245))

    elif phoneme_type == 2: # 'EE' Wide
        open_w_wide = max(16, int(32 * intensity))
        draw.ellipse((mx - open_w_wide, my - 2, mx + open_w_wide, my + open_h - 2), fill=(25, 10, 15, 240))
        draw.rectangle((mx - open_w_wide + 6, my - 2, mx + open_w_wide - 6, my + 3), fill=(240, 240, 245, 250))

    elif phoneme_type == 3: # 'OH' Round
        r_w = int(14 * intensity)
        r_h = int(16 * intensity)
        draw.ellipse((mx - r_w, my - 2, mx + r_w, my + r_h), fill=(18, 6, 10, 240))

    # Apply soft Gaussian blur to mouth edges for realistic blend
    mouth_area = frame.crop((mx - 45, my - 15, mx + 45, my + 25))
    mouth_blurred = mouth_area.filter(ImageFilter.GaussianBlur(radius=0.8))
    frame.paste(mouth_blurred, (mx - 45, my - 15))

    return frame

fps = 30
duration_sec = 8
num_frames = fps * duration_sec
frames = []

for f in range(num_frames):
    t = f / fps
    norm_t = f / num_frames
    rad = norm_t * 2 * math.pi

    # Human speech timeline with realistic breathing breaks:
    # 0.0 - 0.4s: Initial rest (mouth closed)
    # 0.4 - 2.3s: Sentence 1 ("Welcome to HS Global AI")
    # 2.3 - 3.0s: Human breath pause (mouth closed)
    # 3.0 - 5.0s: Sentence 2 ("I am your real-time conversational avatar")
    # 5.0 - 5.7s: Human breath pause
    # 5.7 - 7.5s: Sentence 3 ("Powered by on-device AI document intelligence")
    # 7.5 - 8.0s: Loop pause

    if t < 0.4 or (2.3 <= t <= 3.0) or (5.0 <= t <= 5.7) or t >= 7.5:
        phoneme_type = 0
        intensity = 0.0
    else:
        # Determine phoneme sequence based on time within speech block
        phoneme_cycle = (t * 8.0) % 3
        if phoneme_cycle < 1.0:
            phoneme_type = 1 # 'AA'
        elif phoneme_cycle < 2.0:
            phoneme_type = 2 # 'EE'
        else:
            phoneme_type = 3 # 'OH'

        # Articulation intensity curve
        intensity = abs(math.sin(t * 12.0)) * 0.85 + 0.15

        # Smooth fade at phrase boundaries
        if 0.4 <= t <= 0.7:
            intensity *= (t - 0.4) / 0.3
        elif 2.0 <= t <= 2.3:
            intensity *= (2.3 - t) / 0.3
        elif 3.0 <= t <= 3.3:
            intensity *= (t - 3.0) / 0.3
        elif 4.7 <= t <= 5.0:
            intensity *= (5.0 - t) / 0.3
        elif 5.7 <= t <= 6.0:
            intensity *= (t - 5.7) / 0.3
        elif 7.2 <= t <= 7.5:
            intensity *= (7.5 - t) / 0.3

    frame_base = create_phoneme_frame(canvas_base, phoneme_type, intensity)

    # Eye blinking at t = 2.5s and t = 5.3s
    if (2.45 <= t <= 2.65) or (5.25 <= t <= 5.45):
        b_val = math.sin((t - (2.45 if t < 4.0 else 5.25)) / 0.2 * math.pi)
        b_val = max(0.0, min(1.0, b_val))
        draw_blink = ImageDraw.Draw(frame_base)
        eye_y = int(172 + b_val * 14)
        draw_blink.rectangle((570, 170, 620, eye_y), fill=(30, 20, 25, int(200 * b_val)))
        draw_blink.rectangle((660, 170, 710, eye_y), fill=(30, 20, 25, int(200 * b_val)))

    # Continuous camera float and micro-zoom
    zoom = 1.0 + 0.014 * math.sin(rad)
    offset_y = int(2.5 * math.cos(rad))

    w_z = int(target_w * zoom)
    h_z = int(target_h * zoom)
    frame_z = frame_base.resize((w_z, h_z), Image.Resampling.LANCZOS)

    crop_x = max(0, (w_z - target_w) // 2)
    crop_y = max(0, (h_z - target_h) // 2 + offset_y)
    frame_cropped = frame_z.crop((crop_x, crop_y, crop_x + target_w, crop_y + target_h))

    # Brightness pulse on cyan suit lines
    glow = 1.0 + 0.03 * intensity + 0.02 * math.sin(rad * 3)
    enhancer = ImageEnhance.Brightness(frame_cropped)
    frame_final = enhancer.enhance(glow)

    rgb_frame = frame_final.convert("RGB")
    frames.append(np.array(rgb_frame))

print(f"Synthesizing {len(frames)} human lip-synced speaking video frames...")
imageio.mimsave(output_path, frames, fps=fps, codec="libx264")
print("Human lip-synced speaking video saved to:", output_path)

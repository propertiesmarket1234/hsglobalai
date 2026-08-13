import math
import numpy as np
from PIL import Image, ImageEnhance, ImageFilter, ImageDraw
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

np_base = np.array(canvas_base, dtype=np.float32)
y_grid, x_grid = np.ogrid[:target_h, :target_w]

# Mouth center coordinates in 1280x720 canvas: (635, 197)
mx, my = 635, 197
sig_x, sig_y = 35.0, 24.0

dist_sq = ((x_grid - mx) / sig_x)**2 + ((y_grid - my) / sig_y)**2
mouth_weight = np.exp(-dist_sq)

fps = 30
duration_sec = 8
num_frames = fps * duration_sec
frames = []

def get_speech_cadence(t):
    # Human speech timeline with realistic breathing breaks:
    # 0.0 - 0.4s: Initial rest (mouth closed)
    # 0.4 - 2.4s: Phrase 1
    # 2.4 - 3.1s: Human breath pause (mouth closes naturally)
    # 3.1 - 5.2s: Phrase 2
    # 5.2 - 5.9s: Human breath pause
    # 5.9 - 7.6s: Phrase 3
    # 7.6 - 8.0s: Loop pause

    if t < 0.4 or (2.4 <= t <= 3.1) or (5.2 <= t <= 5.9) or t >= 7.6:
        return 0.0

    # Multi-frequency sine for realistic human syllable articulation
    val = (math.sin(t * 16.0) * 0.45 + math.sin(t * 9.5) * 0.35 + 0.5)

    # Smooth fade in/out at sentence boundaries
    if 0.4 <= t <= 0.7:
        val *= (t - 0.4) / 0.3
    elif 2.1 <= t <= 2.4:
        val *= (2.4 - t) / 0.3
    elif 3.1 <= t <= 3.4:
        val *= (t - 3.1) / 0.3
    elif 4.9 <= t <= 5.2:
        val *= (5.2 - t) / 0.3
    elif 5.9 <= t <= 6.2:
        val *= (t - 5.9) / 0.3
    elif 7.3 <= t <= 7.6:
        val *= (7.6 - t) / 0.3

    return max(0.0, min(1.0, val))

for f in range(num_frames):
    t = f / fps
    norm_t = f / num_frames
    rad = norm_t * 2 * math.pi

    speech = get_speech_cadence(t)

    # Calculate 2D Organic Lip Displacement Grid
    # Vertical displacement: below mouth center shifts down, above mouth center shifts up slightly
    v_disp = np.where(y_grid >= my, mouth_weight * (speech * 8.5), -mouth_weight * (speech * 1.8))

    # Horizontal lip stretch/contract for vowel articulation
    u_disp = mouth_weight * (math.sin(t * 18.0) * 2.2 * speech)

    map_x = np.clip(x_grid - u_disp, 0, target_w - 1).astype(np.float32)
    map_y = np.clip(y_grid - v_disp, 0, target_h - 1).astype(np.float32)

    map_x_i = map_x.astype(int)
    map_y_i = map_y.astype(int)

    frame_np = np.zeros_like(np_base)
    for c in range(4):
        frame_np[:, :, c] = np_base[map_y_i, map_x_i, c]

    frame_img = Image.fromarray(frame_np.astype(np.uint8), mode="RGBA")

    # Eye blinking animation at t = 2.6s and t = 5.5s
    if (2.5 <= t <= 2.7) or (5.4 <= t <= 5.6):
        b_val = math.sin((t - (2.5 if t < 4.0 else 5.4)) / 0.2 * math.pi)
        b_val = max(0.0, min(1.0, b_val))
        draw_blink = ImageDraw.Draw(frame_img)
        eye_y = int(145 + b_val * 9)
        draw_blink.rectangle((590, 142, 620, eye_y), fill=(35, 22, 28, int(210 * b_val)))
        draw_blink.rectangle((650, 142, 680, eye_y), fill=(35, 22, 28, int(210 * b_val)))

    # Continuous camera float & breathing micro-zoom
    zoom = 1.0 + 0.012 * math.sin(rad)
    offset_y = int(2.0 * math.cos(rad))

    w_z = int(target_w * zoom)
    h_z = int(target_h * zoom)
    frame_z = frame_img.resize((w_z, h_z), Image.Resampling.LANCZOS)

    crop_x = max(0, (w_z - target_w) // 2)
    crop_y = max(0, (h_z - target_h) // 2 + offset_y)
    frame_cropped = frame_z.crop((crop_x, crop_y, crop_x + target_w, crop_y + target_h))

    # Brightness pulse on cyan suit lines during active speech
    glow = 1.0 + 0.03 * speech + 0.02 * math.sin(rad * 3)
    enhancer = ImageEnhance.Brightness(frame_cropped)
    frame_final = enhancer.enhance(glow)

    rgb_frame = frame_final.convert("RGB")
    frames.append(np.array(rgb_frame))

print(f"Synthesizing {len(frames)} organic 30fps human lip-synced video frames...")
imageio.mimsave(output_path, frames, fps=fps, codec="libx264")
print("Organic human lip-synced video saved to:", output_path)

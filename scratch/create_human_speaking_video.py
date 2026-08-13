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

np0 = np.array(make_canvas(img0_r), dtype=np.float32)
np1 = np.array(make_canvas(img1_r), dtype=np.float32)
np2 = np.array(make_canvas(img2_r), dtype=np.float32)

fps = 30
duration_sec = 7
num_frames = fps * duration_sec
frames = []

def get_speech_envelope(t):
    # Human speech timeline with natural breathing breaks:
    # 0.0 - 0.3s: Initial pause (mouth closed)
    # 0.3 - 2.0s: Phrase 1 (speaking with syllable articulation)
    # 2.0 - 2.7s: Pause / Break 1 (human breath pause, mouth closes naturally)
    # 2.7 - 4.5s: Phrase 2 (speaking with syllable articulation)
    # 4.5 - 5.2s: Pause / Break 2 (human breath pause)
    # 5.2 - 6.6s: Phrase 3 (speaking with syllable articulation)
    # 6.6 - 7.0s: Loop pause (closed mouth)

    if t < 0.3 or (2.0 <= t <= 2.7) or (4.5 <= t <= 5.2) or t >= 6.6:
        return 0.0

    syllable = (math.sin(t * 15.0) * 0.45 + math.sin(t * 8.5) * 0.35 + 0.5)

    if 0.3 <= t <= 0.6:
        syllable *= (t - 0.3) / 0.3
    elif 1.7 <= t <= 2.0:
        syllable *= (2.0 - t) / 0.3
    elif 2.7 <= t <= 3.0:
        syllable *= (t - 2.7) / 0.3
    elif 4.2 <= t <= 4.5:
        syllable *= (4.5 - t) / 0.3
    elif 5.2 <= t <= 5.5:
        syllable *= (t - 5.2) / 0.3
    elif 6.3 <= t <= 6.6:
        syllable *= (6.6 - t) / 0.3

    return max(0.0, min(1.0, syllable))

for f in range(num_frames):
    t = f / fps
    norm_t = f / num_frames
    rad = norm_t * 2 * math.pi

    speech_val = get_speech_envelope(t)

    if speech_val < 0.45:
        w1 = speech_val / 0.45
        w0 = 1.0 - w1
        w2 = 0.0
    else:
        w2 = (speech_val - 0.45) / 0.55
        w1 = 1.0 - w2
        w0 = 0.0

    blended_np = (np0 * w0 + np1 * w1 + np2 * w2).clip(0, 255).astype(np.uint8)
    blended_img = Image.fromarray(blended_np, mode="RGBA")

    # Natural camera breathing float
    zoom = 1.0 + 0.012 * math.sin(rad)
    offset_y = int(2.0 * math.cos(rad))

    w_z = int(target_w * zoom)
    h_z = int(target_h * zoom)
    frame_z = blended_img.resize((w_z, h_z), Image.Resampling.LANCZOS)

    crop_x = max(0, (w_z - target_w) // 2)
    crop_y = max(0, (h_z - target_h) // 2 + offset_y)
    frame_cropped = frame_z.crop((crop_x, crop_y, crop_x + target_w, crop_y + target_h))

    # Glow enhancement synced with speech activity
    speech_glow = 1.0 + 0.04 * speech_val + 0.02 * math.sin(rad * 3)
    enhancer = ImageEnhance.Brightness(frame_cropped)
    frame_final = enhancer.enhance(speech_glow)

    rgb_frame = frame_final.convert("RGB")
    frames.append(np.array(rgb_frame))

print(f"Generating {len(frames)} human speaking frames with natural breaks...")
imageio.mimsave(output_path, frames, fps=fps, codec="libx264")
print("Human-like speaking video generated at:", output_path)

import math
import numpy as np
from PIL import Image, ImageEnhance, ImageFilter, ImageDraw
import imageio

img0_path = r"C:\Users\HSGlobalAI\.gemini\antigravity-ide\brain\aa45f73a-0867-424e-a78b-558ed2fc4353\brand_executive_lady_avatar_1786447166826.png"
img1_path = r"C:\Users\HSGlobalAI\.gemini\antigravity-ide\brain\aa45f73a-0867-424e-a78b-558ed2fc4353\executive_avatar_speaking_1_1786447234756.png"
img2_path = r"C:\Users\HSGlobalAI\.gemini\antigravity-ide\brain\aa45f73a-0867-424e-a78b-558ed2fc4353\executive_avatar_speaking_2_1786447284074.png"
output_path = r"d:\WebProjects\hsglobalai\public\talking-avatar-speaking.mp4"

img0 = Image.open(img0_path).convert("RGBA")
img1 = Image.open(img1_path).convert("RGBA")
img2 = Image.open(img2_path).convert("RGBA")

width, height = img0.size # 1024x1024
target_w, target_h = 1280, 720

scale_factor = target_h / height
new_w = int(width * scale_factor)
new_h = target_h

def make_canvas(img):
    c = Image.new("RGBA", (target_w, target_h), (5, 9, 15, 255))
    off_x = (target_w - new_w) // 2
    c.paste(img.resize((new_w, new_h), Image.Resampling.LANCZOS), (off_x, 0))
    return c

c0 = make_canvas(img0)
c1 = make_canvas(img1)
c2 = make_canvas(img2)

np0 = np.array(c0, dtype=np.float32)
np1 = np.array(c1, dtype=np.float32)
np2 = np.array(c2, dtype=np.float32)

# Mouth mask centered around mouth (635, 197 in 1280x720 canvas)
y_grid, x_grid = np.ogrid[:target_h, :target_w]
dist_sq = ((x_grid - 635) / 60.0)**2 + ((y_grid - 197) / 45.0)**2
mouth_mask = np.exp(-dist_sq * 2.0)[:, :, np.newaxis] # Shape (720, 1280, 1)

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
    # 0.4 - 2.4s: Sentence 1 ("Welcome to HS Global AI")
    # 2.4 - 3.1s: Human breath pause (mouth closed)
    # 3.1 - 5.2s: Sentence 2 ("I am your real-time conversational avatar")
    # 5.2 - 5.9s: Human breath pause
    # 5.9 - 7.6s: Sentence 3 ("Powered by on-device AI document intelligence")
    # 7.6 - 8.0s: Loop pause

    if t < 0.4 or (2.4 <= t <= 3.1) or (5.2 <= t <= 5.9) or t >= 7.6:
        speech = 0.0
    else:
        # Multi-frequency sine wave simulating human syllables
        speech = (math.sin(t * 15.0) * 0.45 + math.sin(t * 8.5) * 0.35 + 0.5)

        # Smooth fade at boundaries
        if 0.4 <= t <= 0.7:
            speech *= (t - 0.4) / 0.3
        elif 2.1 <= t <= 2.4:
            speech *= (2.4 - t) / 0.3
        elif 3.1 <= t <= 3.4:
            speech *= (t - 3.1) / 0.3
        elif 4.9 <= t <= 5.2:
            speech *= (5.2 - t) / 0.3
        elif 5.9 <= t <= 6.2:
            speech *= (t - 5.9) / 0.3
        elif 7.3 <= t <= 7.6:
            speech *= (7.6 - t) / 0.3

    speech = max(0.0, min(1.0, speech))

    # Calculate lip-sync weights
    if speech < 0.45:
        w1 = speech / 0.45
        w0 = 1.0 - w1
        w2 = 0.0
    else:
        w2 = (speech - 0.45) / 0.55
        w1 = 1.0 - w2
        w0 = 0.0

    # Blend mouth region dynamically for seamless lip sync
    mouth_blended = np0 * w0 + np1 * w1 + np2 * w2
    frame_np = np0 * (1.0 - mouth_mask) + mouth_blended * mouth_mask
    frame_np = frame_np.clip(0, 255).astype(np.uint8)

    frame_img = Image.fromarray(frame_np, mode="RGBA")

    # Eye blinking animation at t = 2.6s and t = 5.5s
    if (2.5 <= t <= 2.7) or (5.4 <= t <= 5.6):
        b_val = math.sin((t - (2.5 if t < 4.0 else 5.4)) / 0.2 * math.pi)
        b_val = max(0.0, min(1.0, b_val))
        draw_blink = ImageDraw.Draw(frame_img)
        # Eye y level in 1280x720: y = 145
        eye_y = int(145 + b_val * 10)
        draw_blink.rectangle((590, 142, 620, eye_y), fill=(35, 22, 28, int(210 * b_val)))
        draw_blink.rectangle((650, 142, 680, eye_y), fill=(35, 22, 28, int(210 * b_val)))

    # Continuous camera float & micro-zoom
    zoom = 1.0 + 0.012 * math.sin(rad)
    offset_y = int(2.0 * math.cos(rad))

    w_z = int(target_w * zoom)
    h_z = int(target_h * zoom)
    frame_z = frame_img.resize((w_z, h_z), Image.Resampling.LANCZOS)

    crop_x = max(0, (w_z - target_w) // 2)
    crop_y = max(0, (h_z - target_h) // 2 + offset_y)
    frame_cropped = frame_z.crop((crop_x, crop_y, crop_x + target_w, crop_y + target_h))

    # Brightness enhancement on cyan suit lines during speech
    glow = 1.0 + 0.03 * speech + 0.02 * math.sin(rad * 3)
    enhancer = ImageEnhance.Brightness(frame_cropped)
    frame_final = enhancer.enhance(glow)

    rgb_frame = frame_final.convert("RGB")
    frames.append(np.array(rgb_frame))

print(f"Synthesizing {len(frames)} photorealistic lip-synced video frames...")
imageio.mimsave(output_path, frames, fps=fps, codec="libx264")
print("Photorealistic lip-synced video saved to:", output_path)

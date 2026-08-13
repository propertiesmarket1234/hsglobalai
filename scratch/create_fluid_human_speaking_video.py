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

base_np = np.array(canvas_base, dtype=np.float32)

# Mouth center coordinates in 1280x720 canvas:
# image center offset_x = (1280 - 720) // 2 = 280
# Mouth center in original 1024x1024: (512, 385)
# Mouth center in 1280x720 canvas: x_c = 280 + 512*720/1024 = 640, y_c = 385*720/1024 = 270
center_x = 640
center_y = 270

# Create coordinate grid for continuous deformation warping
y_grid, x_grid = np.ogrid[:target_h, :target_w]

fps = 30
duration_sec = 8
num_frames = fps * duration_sec
frames = []

def get_speech_signal(t):
    # Realistic human speech timeline with natural breaks:
    # 0.0 - 0.4s: Init breath (mouth closed)
    # 0.4 - 2.4s: Phrase 1 ("Hello! Welcome to HS Global AI...")
    # 2.4 - 3.1s: Human breath pause (lips rest naturally)
    # 3.1 - 5.2s: Phrase 2 ("I am your real-time conversational avatar with memory...")
    # 5.2 - 5.9s: Human breath pause
    # 5.9 - 7.6s: Phrase 3 ("Extract insights from every customer interaction.")
    # 7.6 - 8.0s: Seamless loop pause

    if t < 0.4 or (2.4 <= t <= 3.1) or (5.2 <= t <= 5.9) or t >= 7.6:
        return 0.0

    # Multi-frequency sine for fluid lip articulation
    val = math.sin(t * 14.0) * 0.4 + math.sin(t * 9.5) * 0.35 + math.cos(t * 22.0) * 0.25
    return max(0.0, min(1.0, val))

for f in range(num_frames):
    t = f / fps
    norm_t = f / num_frames
    rad = norm_t * 2 * math.pi

    speech = get_speech_signal(t)

    # Calculate spatial weight mask for mouth displacement
    dist_sq = (x_grid - center_x)**2 / (50**2) + (y_grid - center_y)**2 / (35**2)
    mouth_weight = np.exp(-dist_sq * 2.5)

    # Vertical displacement for mouth opening (0 to 9 pixels)
    disp_y = mouth_weight * (speech * 8.5)

    # Horizontal lip stretch/contract
    disp_x = mouth_weight * (math.sin(t * 18.0) * 2.5 * speech)

    # Distort coordinates
    map_x = (x_grid - disp_x).astype(np.float32)
    map_y = (y_grid - disp_y).astype(np.float32)

    # Clip map to image bounds
    map_x = np.clip(map_x, 0, target_w - 1)
    map_y = np.clip(map_y, 0, target_h - 1)

    # Interpolate frame channels
    frame_np = np.zeros_like(base_np)
    map_x_int = map_x.astype(int)
    map_y_int = map_y.astype(int)

    for c in range(4):
        frame_np[:, :, c] = base_np[map_y_int, map_x_int, c]

    frame_img = Image.fromarray(frame_np.astype(np.uint8), mode="RGBA")

    # Eyelid blink animation at t = 2.6s and t = 5.5s
    if (2.5 <= t <= 2.7) or (5.4 <= t <= 5.6):
        blink_ratio = math.sin((t - 2.5) / 0.2 * math.pi) if (2.5 <= t <= 2.7) else math.sin((t - 5.4) / 0.2 * math.pi)
        blink_ratio = max(0.0, min(1.0, blink_ratio))
        # Draw subtle eyelid shade overlay at eye level (y: 170 to 195)
        draw = ImageDraw.Draw(frame_img)
        eye_y_top = int(175 + blink_ratio * 12)
        draw.rectangle((570, 172, 620, eye_y_top), fill=(30, 20, 25, int(180 * blink_ratio)))
        draw.rectangle((660, 172, 710, eye_y_top), fill=(30, 20, 25, int(180 * blink_ratio)))

    # Continuous camera float and micro-zoom
    zoom = 1.0 + 0.015 * math.sin(rad)
    offset_y = int(2.5 * math.cos(rad))

    w_z = int(target_w * zoom)
    h_z = int(target_h * zoom)
    frame_z = frame_img.resize((w_z, h_z), Image.Resampling.LANCZOS)

    crop_x = max(0, (w_z - target_w) // 2)
    crop_y = max(0, (h_z - target_h) // 2 + offset_y)
    frame_cropped = frame_z.crop((crop_x, crop_y, crop_x + target_w, crop_y + target_h))

    # Brightness pulse on cyan suit lines
    glow = 1.0 + 0.03 * speech + 0.02 * math.sin(rad * 3)
    enhancer = ImageEnhance.Brightness(frame_cropped)
    frame_final = enhancer.enhance(glow)

    rgb_frame = frame_final.convert("RGB")
    frames.append(np.array(rgb_frame))

print(f"Generating {len(frames)} fluid human speaking video frames...")
imageio.mimsave(output_path, frames, fps=fps, codec="libx264")
print("Fluid human speaking avatar video saved to:", output_path)

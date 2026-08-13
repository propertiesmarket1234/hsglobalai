import imageio
import numpy as np
from PIL import Image

video_path = r"C:\Users\HSGlobalAI\Videos\Screen Recordings\Screen Recording 2026-08-11 155118.mp4"
output_path = r"d:\WebProjects\hsglobalai\public\talking-avatar-speaking.mp4"

reader = imageio.get_reader(video_path)
meta = reader.get_meta_data()
fps = meta.get("fps", 30.0)

print(f"Reading video: {meta['size']} at {fps} fps")

# Bounding box for avatar video area: x: 360 to 930, y: 38 to 702
crop_box = (360, 38, 930, 702)
# Target output resolution: 1280x720
target_w, target_h = 1280, 720

cropped_frames = []

for idx, frame in enumerate(reader):
    img = Image.fromarray(frame)
    avatar_part = img.crop(crop_box)
    
    # Resize cropped avatar video to fill 1280x720 cleanly
    avatar_resized = avatar_part.resize((target_w, target_h), Image.Resampling.LANCZOS)
    cropped_frames.append(np.array(avatar_resized))

reader.close()

print(f"Writing {len(cropped_frames)} cropped high-quality speaking avatar frames to {output_path}...")
imageio.mimsave(output_path, cropped_frames, fps=fps, codec="libx264")
print("Successfully generated high quality avatar video at:", output_path)

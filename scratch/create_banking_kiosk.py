from PIL import Image, ImageDraw, ImageFilter, ImageFont, ImageEnhance
import numpy as np

# 1. Load Kiosk and Executive Lady Advisor
kiosk = Image.open('d:/WebProjects/hsglobalai/public/images/use-cases/jewellery_hologram_kiosk.png').convert('RGBA')
lady = Image.open('d:/WebProjects/hsglobalai/public/images/avatars/executive_lady.png').convert('RGBA')

W, H = kiosk.size

# 2. Create the inner 3D hologram room box for Banking (x: 96 to 523, y: 115 to 670)
room_x1, room_y1, room_x2, room_y2 = 96, 115, 523, 670
room_w = room_x2 - room_x1
room_h = room_y2 - room_y1

# Create a clean white/cyan illuminated 3D room background
room_bg = Image.new('RGBA', (room_w, room_h), (245, 248, 252, 255))
draw_room = ImageDraw.Draw(room_bg)

# Draw 3D room perspective shadows & ambient top light
for opacity in range(100, 0, -2):
    draw_room.line([(0, opacity), (room_w, opacity)], fill=(220, 240, 250, int(opacity * 0.7)))

# Add subtle cyan grid & perspective lines for 3D hologram box effect
for x in range(0, room_w, 40):
    draw_room.line([(x, 0), (x, room_h)], fill=(200, 230, 245, 80))
for y in range(0, room_h, 40):
    draw_room.line([(0, y), (room_w, y)], fill=(200, 230, 245, 80))

# 3. Process Lady Advisor to fit centered in the 3D room
# Scale lady avatar
lady_h = int(room_h * 0.88)
lady_w = int(lady.width * (lady_h / lady.height))
lady_resized = lady.resize((lady_w, lady_h), Image.Resampling.LANCZOS)

# Position centered in room
lady_x = (room_w - lady_w) // 2
lady_y = room_h - lady_h - 10

# Paste lady onto room_bg
room_bg.paste(lady_resized, (lady_x, lady_y), lady_resized)

# 4. Add Glowing Cyan Financial Charts & Wealth Holograms around the Lady
draw_holo = ImageDraw.Draw(room_bg)

# Left floating chart box
draw_holo.rounded_rectangle([20, 80, 110, 200], radius=8, fill=(10, 25, 45, 200), outline=(6, 182, 212, 220), width=2)
# Draw mini line graph inside chart box
points = [(30, 170), (45, 150), (60, 160), (75, 120), (95, 100)]
draw_holo.line(points, fill=(6, 182, 212, 255), width=3)
draw_holo.text((30, 88), "WEALTH +42%", fill=(56, 189, 248, 255))
draw_holo.text((30, 178), "AIR-GAPPED", fill=(148, 163, 184, 255))

# Right floating security & portfolio box
draw_holo.rounded_rectangle([room_w - 115, 90, room_w - 20, 210], radius=8, fill=(10, 25, 45, 200), outline=(6, 182, 212, 220), width=2)
draw_holo.text((room_w - 105, 98), "PORTFOLIO", fill=(56, 189, 248, 255))
draw_holo.text((room_w - 105, 115), "RISK: 0.0%", fill=(52, 211, 153, 255))
# Mini bar chart
for i, h in enumerate([25, 45, 35, 60, 75]):
    bx = room_w - 105 + i * 16
    draw_holo.rectangle([bx, 190 - h, bx + 10, 190], fill=(6, 182, 212, 220))

# 5. Composite room_bg back onto kiosk
kiosk.paste(room_bg, (room_x1, room_y1), room_bg)

# 6. Update bottom UI overlay text area (y: 670 to 815)
draw_ui = ImageDraw.Draw(kiosk)

# Dark UI backdrop for bottom screen section
draw_ui.rectangle([room_x1, 670, room_x2, 815], fill=(12, 16, 24, 240))

# Top cyan badge inside UI
draw_ui.rounded_rectangle([room_x1 + 15, 678, room_x1 + 220, 698], radius=10, fill=(6, 182, 212, 40), outline=(6, 182, 212, 180))
draw_ui.text((room_x1 + 25, 683), "BANKING & WEALTH ADVISOR", fill=(6, 182, 212, 255))

# Chat message bubble 1 (User)
draw_ui.rounded_rectangle([room_x1 + 15, 706, room_x1 + 280, 736], radius=12, fill=(6, 182, 212, 220))
draw_ui.text((room_x1 + 25, 715), "What is the portfolio risk analysis?", fill=(255, 255, 255, 255))

# Chat message bubble 2 (Avatar Response)
draw_ui.rounded_rectangle([room_x1 + 15, 742, room_x1 + 395, 788], radius=12, fill=(24, 32, 47, 240), outline=(255, 255, 255, 40))
draw_ui.text((room_x1 + 25, 750), "All financial calculations run 100% air-gapped on-device", fill=(226, 232, 240, 255))
draw_ui.text((room_x1 + 25, 767), "with bank-grade compliance and sub-3000ms latency.", fill=(148, 163, 184, 255))

# Bottom control status line
draw_ui.line([(room_x1, 795), (room_x2, 795)], fill=(255, 255, 255, 30))
draw_ui.text((room_x1 + 20, 800), "LIVE VOICE ADVISOR ON", fill=(6, 182, 212, 255))
draw_ui.text((room_x2 - 130, 800), "100% AIR-GAPPED", fill=(52, 211, 153, 255))

# 7. Save output image to public/images/use-cases/banking_hologram_kiosk.png
out_path = 'd:/WebProjects/hsglobalai/public/images/use-cases/banking_hologram_kiosk.png'
kiosk.save(out_path, 'PNG')
print("Successfully created banking hologram kiosk image:", out_path)

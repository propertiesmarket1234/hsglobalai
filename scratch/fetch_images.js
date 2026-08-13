const fs = require('fs');
const path = require('path');

async function main() {
  const res = await fetch('https://hsglobalai.com/events/');
  const html = await res.text();
  
  // Find image urls
  const regex = /https:\/\/hsglobalai\.com\/wp-content\/uploads\/[^\s"'>]+\.(jpg|jpeg|png|webp)/gi;
  const matches = Array.from(new Set(html.match(regex) || []));
  console.log('Found image URLs:', matches);

  const destDir = path.join(__dirname, '..', 'public', 'images', 'events');
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  for (let i = 0; i < matches.length; i++) {
    const imgUrl = matches[i];
    try {
      const imgRes = await fetch(imgUrl);
      if (imgRes.ok) {
        const buffer = Buffer.from(await imgRes.arrayBuffer());
        const filename = `event_img_${i + 1}${path.extname(imgUrl.split('?')[0])}`;
        const filePath = path.join(destDir, filename);
        fs.writeFileSync(filePath, buffer);
        console.log(`Saved ${imgUrl} -> ${filePath} (${buffer.length} bytes)`);
      }
    } catch (err) {
      console.error(`Failed to download ${imgUrl}:`, err);
    }
  }
}

main();

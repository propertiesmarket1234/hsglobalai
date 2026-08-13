const fs = require('fs');

async function main() {
  const res = await fetch('https://hsglobalai.com/events/');
  const html = await res.text();
  
  const regex = /https:\/\/hsglobalai\.com\/wp-content\/uploads\/[^\s"'>]+\.(jpg|jpeg|png|webp)/gi;
  const matches = Array.from(new Set(html.match(regex) || []));

  matches.forEach((url, i) => {
    console.log(`event_img_${i + 1}: ${url}`);
  });
}

main();

const fs = require('fs');

async function main() {
  const res = await fetch('https://hsglobalai.com/events/');
  const html = await res.text();

  // Find all img tags or background image declarations
  const allImgs = html.match(/<img[^>]+src=["']([^"']+)["']/gi);
  console.log('--- All IMG tags ---');
  allImgs?.forEach(img => console.log(img));
}

main();

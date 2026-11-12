const fs = require('fs');

console.log('=== VERIFYING HOLOGRAPHIC & SPATIAL DISPLAY LINKS ===\n');

function inspectLinks(filename, pageName) {
  const html = fs.readFileSync(filename, 'utf8');
  console.log(`[${pageName}] (${filename})`);
  
  // Find all <a> tags with href containing ai-digital-human
  const regex = /<a[^>]*href=["']([^"']*ai-digital-human[^"']*)["'][^>]*>([\s\S]*?)<\/a>/gi;
  let match;
  let count = 0;
  while ((match = regex.exec(html)) !== null) {
    count++;
    const href = match[1];
    const rawAnchor = match[2];
    const cleanAnchor = rawAnchor.replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ');
    console.log(`  Link #${count}:`);
    console.log(`    Target URL:  ${href}`);
    console.log(`    Anchor Text: "${cleanAnchor}"`);
  }
  console.log(`  Total Inbound DIHUAVA Links: ${count}\n`);
}

inspectLinks('.next/server/app/products/holographic-display.html', 'HOLOGRAPHIC DISPLAY');
inspectLinks('.next/server/app/products/spatial-display.html', 'SPATIAL DISPLAY');

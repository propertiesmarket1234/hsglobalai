const fs = require('fs');

const htmlPath = '.next/server/app/products/ai-digital-human.html';
if (!fs.existsSync(htmlPath)) {
  console.error('HTML file not found:', htmlPath);
  process.exit(1);
}

const html = fs.readFileSync(htmlPath, 'utf8');

const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
console.log('Title in HTML:', titleMatch ? titleMatch[1] : 'NOT FOUND');

const metaDescMatch = html.match(/name="description"\s+content="([^"]+)"/i);
console.log('Meta Description in HTML:', metaDescMatch ? metaDescMatch[1] : 'NOT FOUND');

const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
console.log('H1 in HTML:', h1Match ? h1Match[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim() : 'NOT FOUND');

const questionMatches = html.match(/"@type":"Question"/g);
console.log('FAQ Schema count in HTML:', questionMatches ? questionMatches.length : 0);

const softwareAppMatch = html.match(/"@type":"SoftwareApplication"[\s\S]*?"alternateName":\[([^\]]+)\]/);
console.log('SoftwareApplication alternateNames in HTML:', softwareAppMatch ? softwareAppMatch[1] : 'NOT FOUND');

const canonicalMatch = html.match(/rel="canonical"\s+href="([^"]+)"/i);
console.log('Canonical in HTML:', canonicalMatch ? canonicalMatch[1] : 'NOT FOUND');


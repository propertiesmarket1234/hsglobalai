const fs = require('fs');

console.log('=== VERIFYING COMPILED HTML IN .next/server/app/ ===');

// Check /products/ai-digital-human.html
const dihuavaHtmlPath = 'D:/WebProjects/hsglobalai/.next/server/app/products/ai-digital-human.html';
if (fs.existsSync(dihuavaHtmlPath)) {
  const html = fs.readFileSync(dihuavaHtmlPath, 'utf8');
  console.log('[OK] /products/ai-digital-human.html exists');
  
  // Title
  const titleMatch = html.match(/<title>([^<]+)<\/title>/);
  console.log('  Title:', titleMatch ? titleMatch[1] : 'NONE');
  
  // Meta description
  const descMatch = html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["']/);
  console.log('  Description:', descMatch ? descMatch[1] : 'NONE');
  
  // Canonical
  const canonMatch = html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/);
  console.log('  Canonical:', canonMatch ? canonMatch[1] : 'NONE');

  // H1
  const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  console.log('  H1 text:', h1Match ? h1Match[1].replace(/<[^>]+>/g, '').trim() : 'NONE');

  // FAQ schema count
  const faqSchemaCount = (html.match(/"@type":"Question"/g) || []).length;
  console.log('  FAQ schema questions count:', faqSchemaCount);
} else {
  console.log('[FAIL] /products/ai-digital-human.html NOT FOUND');
}

// Check retail HTML for the internal link
const retailHtmlPath = 'D:/WebProjects/hsglobalai/.next/server/app/industries/retail.html';
if (fs.existsSync(retailHtmlPath)) {
  const html = fs.readFileSync(retailHtmlPath, 'utf8');
  console.log('\n[OK] /industries/retail.html exists');
  const hasLink = html.includes('/products/ai-digital-human') && html.includes('offline AI digital human software platform');
  console.log('  Has [offline AI digital human software platform](/products/ai-digital-human)?', hasLink);
}

// Check blog posts for the internal links
const blogCheck = [
  { slug: 'how-ai-in-retail', anchor: 'AI digital human software for retail kiosks' },
  { slug: 'ai-digital-human-fleet-management', anchor: 'enterprise digital human software' },
  { slug: 'why-100-offline-ai', anchor: 'on-device AI digital human platform' }
];

blogCheck.forEach(b => {
  const blogHtmlPath = `D:/WebProjects/hsglobalai/.next/server/app/blog/${b.slug}.html`;
  if (fs.existsSync(blogHtmlPath)) {
    const html = fs.readFileSync(blogHtmlPath, 'utf8');
    const hasLink = html.includes('/products/ai-digital-human') && html.includes(b.anchor);
    console.log(`\n[OK] /blog/${b.slug}.html exists. Has anchor "${b.anchor}"? ${hasLink}`);
  } else {
    console.log(`\n[FAIL] /blog/${b.slug}.html NOT FOUND`);
  }
});

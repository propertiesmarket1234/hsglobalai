const fs = require('fs');

const htmlPath = 'D:/WebProjects/hsglobalai/.next/server/app/products/ai-digital-human.html';
if (fs.existsSync(htmlPath)) {
  const html = fs.readFileSync(htmlPath, 'utf8');
  console.log('HTML size:', html.length);
  
  // Check title
  const titleMatch = html.match(/<title>([^<]+)<\/title>/);
  console.log('Title:', titleMatch ? titleMatch[1] : 'NONE');
  
  // Check description
  const descMatch = html.match(/<meta name="description" content="([^"]+)"/);
  console.log('Meta description:', descMatch ? descMatch[1] : 'NONE');
  
  // Check canonical
  const canonicalMatch = html.match(/<link rel="canonical" href="([^"]+)"/);
  console.log('Canonical:', canonicalMatch ? canonicalMatch[1] : 'NONE');
  
  // Check schemas
  const schemas = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(m => m[1]);
  console.log('JSON-LD schemas count:', schemas.length);
  schemas.forEach((s, idx) => {
    try {
      const parsed = JSON.parse(s);
      console.log(`  Schema ${idx + 1}: @type=${parsed['@type'] || (parsed['@graph'] ? 'Graph' : 'unknown')}, name=${parsed.name || (parsed.itemListElement ? 'BreadcrumbList' : 'N/A')}`);
    } catch (e) {
      console.log(`  Schema ${idx + 1} parse error:`, e.message);
    }
  });

  // Check target keyword presences in HTML
  const targetTerms = [
    'offline AI digital human software',
    'digital human software',
    'AI digital human platform',
    'on-device AI digital human',
    'enterprise digital human software',
    'AI digital human teacher'
  ];
  console.log('\nTarget term presences in HTML:');
  targetTerms.forEach(t => {
    const occurrences = (html.match(new RegExp(t, 'gi')) || []).length;
    console.log(`  "${t}": ${occurrences} occurrences in compiled HTML`);
  });
} else {
  console.log('Static HTML file not found at:', htmlPath);
}


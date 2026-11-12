const https = require('https');

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, body: data }));
    }).on('error', reject);
  });
}

async function run() {
  const target = await fetchUrl('https://www.hsglobalai.com/products/ai-digital-human?_cb=' + Date.now());
  const body = target.body;

  // Extract all JSON-LD blocks
  const jsonLdBlocks = [...body.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(m => m[1]);
  console.log(`Found ${jsonLdBlocks.length} JSON-LD blocks on live page:\n`);

  jsonLdBlocks.forEach((block, idx) => {
    try {
      const parsed = JSON.parse(block);
      const type = parsed['@type'] || (parsed['@graph'] ? 'Graph' : 'Unknown');
      console.log(`Block ${idx + 1}: @type = ${type}`);
      if (type === 'SoftwareApplication') {
        console.log('  name:', parsed.name);
        console.log('  alternateName:', parsed.alternateName);
        console.log('  brand:', parsed.brand);
        console.log('  manufacturer:', parsed.manufacturer);
        console.log('  creator:', parsed.creator);
        console.log('  offers:', parsed.offers || 'NONE (Correctly omitted)');
      }
      if (type === 'FAQPage') {
        console.log('  FAQ count:', parsed.mainEntity ? parsed.mainEntity.length : 0);
        if (parsed.mainEntity && parsed.mainEntity.length >= 8) {
          console.log('  FAQ #8 Question:', parsed.mainEntity[7].name);
          console.log('  FAQ #8 Answer:', parsed.mainEntity[7].acceptedAnswer.text);
        }
      }
    } catch (e) {
      console.log(`Block ${idx + 1} parse error:`, e.message);
    }
  });

  // Check positioning text occurrences on live page
  console.log('\n--- Positioning Text Search on Live Page ---');
  const searchSnippets = [
    '100% offline',
    'on-device',
    'cloud-management',
    '29+ global languages',
    '7 specialized Indian languages',
    'HS Global AI'
  ];
  searchSnippets.forEach(snip => {
    const count = (body.match(new RegExp(snip, 'gi')) || []).length;
    console.log(`Snippet "${snip}": ${count} matches found`);
  });

  // Check robots.txt and sitemap.xml
  console.log('\n--- Technical SEO Checks ---');
  const robots = await fetchUrl('https://www.hsglobalai.com/robots.txt');
  console.log('robots.txt status:', robots.status);
  console.log('robots.txt snippet:\n', robots.body.trim());

  const sitemap = await fetchUrl('https://www.hsglobalai.com/sitemap.xml');
  console.log('\nsitemap.xml status:', sitemap.status);
  console.log('sitemap.xml includes /products/ai-digital-human?:', sitemap.body.includes('https://www.hsglobalai.com/products/ai-digital-human'));
  console.log('sitemap URL count:', (sitemap.body.match(/<loc>/g) || []).length);
}

run();


const https = require('https');

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    const parsed = new URL(url);
    const req = https.request({
      hostname: parsed.hostname,
      path: parsed.pathname + parsed.search,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache'
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, body: data }));
    });
    req.on('error', reject);
    req.end();
  });
}

async function verifyDetails() {
  const ts = Date.now();
  const targetRes = await fetchUrl('https://www.hsglobalai.com/products/ai-digital-human?_t=' + ts);
  const html = targetRes.body;

  console.log('=== LIVE HREFLANG TAGS ===');
  const hreflangs = [...html.matchAll(/<link[^>]+rel=["']alternate["'][^>]+hreflang=["']([^"']+)["'][^>]+href=["']([^"']+)["']/gi)]
    .map(m => `hreflang="${m[1]}" -> ${m[2]}`);
  hreflangs.forEach(h => console.log(' ', h));

  console.log('\n=== LIVE JSON-LD SCHEMAS ===');
  const jsonLdBlocks = [...html.matchAll(/<script\s+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  console.log(`Found ${jsonLdBlocks.length} JSON-LD blocks:`);
  jsonLdBlocks.forEach((b, i) => {
    try {
      const parsed = JSON.parse(b[1]);
      console.log(`  [Block ${i + 1}] Type: ${parsed['@type'] || 'N/A'} | @id: ${parsed['@id'] || 'N/A'}`);
    } catch (err) {
      console.log(`  [Block ${i + 1}] Error: ${err.message}`);
    }
  });

  console.log('\n=== LIVE FAQ ITEMS ===');
  const faqQuestions = [...html.matchAll(/<button[^>]*class=["'][^"']*text-left[^"']*["'][^>]*>([\s\S]*?)<\/button>/gi)]
    .map(m => m[1].replace(/<[^>]+>/g, '').trim())
    .filter(t => t.length > 10 && t.endsWith('?'));
  console.log(`Found ${faqQuestions.length} visible FAQ questions:`);
  faqQuestions.forEach((q, i) => console.log(`  Q${i + 1}: ${q}`));
}

verifyDetails().catch(console.error);

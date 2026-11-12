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

function parseJsonLd(html) {
  const scripts = [];
  const regex = /<script\s+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let match;
  while ((match = regex.exec(html)) !== null) {
    try {
      scripts.push(JSON.parse(match[1]));
    } catch (e) {
      scripts.push({ parseError: e.message, raw: match[1].slice(0, 100) });
    }
  }
  return scripts;
}

async function detailedSchemaCheck() {
  const ts = Date.now();
  const prodRes = await fetchUrl(`https://www.hsglobalai.com/products/ai-digital-human?t=${ts}`);
  const homeRes = await fetchUrl(`https://www.hsglobalai.com/?t=${ts}`);

  console.log('--- HOMEPAGE SCHEMAS ---');
  const homeSchemas = parseJsonLd(homeRes.body);
  homeSchemas.forEach((s, idx) => {
    console.log(`Schema #${idx+1} [@type: ${s['@type']} | @id: ${s['@id']}]:`);
    console.log(JSON.stringify(s, null, 2));
  });

  console.log('\n--- PRODUCT PAGE SCHEMAS ---');
  const prodSchemas = parseJsonLd(prodRes.body);
  prodSchemas.forEach((s, idx) => {
    console.log(`Schema #${idx+1} [@type: ${s['@type']} | @id: ${s['@id']}]:`);
    console.log(JSON.stringify(s, null, 2));
  });
}

detailedSchemaCheck().catch(console.error);


const https = require('https');

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    const parsed = new URL(url);
    const req = https.request({
      hostname: parsed.hostname,
      path: parsed.pathname + parsed.search,
      headers: {
        'User-Agent': 'Mozilla/5.0',
        'Cache-Control': 'no-cache'
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    });
    req.on('error', reject);
    req.end();
  });
}

async function run() {
  const html = await fetchUrl('https://www.hsglobalai.com/products/ai-digital-human?t=' + Date.now());
  const regex = /<script\s+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let match;
  let idx = 1;
  while ((match = regex.exec(html)) !== null) {
    const json = JSON.parse(match[1]);
    console.log(`\n=== Product Page Schema #${idx} (@type: ${json['@type']}, @id: ${json['@id']}) ===`);
    if (json['@type'] === 'SoftwareApplication' || json['@type'] === 'Product') {
      console.log(JSON.stringify(json, null, 2));
    } else {
      console.log(`Summary: @type=${json['@type'] || (json['@graph'] ? 'Graph' : 'other')}`);
    }
    idx++;
  }
}

run().catch(console.error);


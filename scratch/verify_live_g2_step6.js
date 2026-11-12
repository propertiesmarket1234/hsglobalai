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

async function verify() {
  const ts = Date.now();
  console.log(`=== LIVE VERIFICATION RUN (${new Date().toISOString()}) ===\n`);

  // 1. Check Homepage
  console.log('1. Checking Homepage: https://www.hsglobalai.com/ ...');
  const homeRes = await fetchUrl(`https://www.hsglobalai.com/?t=${ts}`);
  console.log(`   HTTP Status: ${homeRes.status}`);
  console.log(`   x-vercel-id: ${homeRes.headers['x-vercel-id'] || 'N/A'}`);
  console.log(`   x-vercel-cache: ${homeRes.headers['x-vercel-cache'] || 'N/A'}`);
  console.log(`   date: ${homeRes.headers['date'] || 'N/A'}`);
  console.log(`   age: ${homeRes.headers['age'] || 'N/A'}`);

  // Check footer link on homepage
  const homeFooterHasG2 = homeRes.body.includes('https://www.g2.com/products/dihuava/reviews');
  const homeFooterLinkMatch = homeRes.body.match(/<a[^>]+href=["']https:\/\/www\.g2\.com\/products\/dihuava\/reviews["'][^>]*>([\s\S]*?)<\/a>/i);
  console.log(`   G2 URL in Homepage HTML: ${homeFooterHasG2}`);
  if (homeFooterLinkMatch) {
    console.log(`   G2 Link Tag: ${homeFooterLinkMatch[0]}`);
  }

  // Check homepage JSON-LD
  const homeSchemas = parseJsonLd(homeRes.body);
  console.log(`   Found ${homeSchemas.length} JSON-LD blocks on homepage`);
  let homeSoftwareSameAs = null;
  let homeOrgSameAs = null;
  for (const s of homeSchemas) {
    if (s['@type'] === 'SoftwareApplication' || s.name === 'DIHUAVA') {
      homeSoftwareSameAs = s.sameAs;
    }
    if (s['@type'] === 'Organization') {
      homeOrgSameAs = s.sameAs;
    }
  }
  console.log(`   Homepage SoftwareApplication sameAs:`, homeSoftwareSameAs);
  console.log(`   Homepage Organization sameAs:`, homeOrgSameAs);

  // 2. Check Product Page
  console.log('\n2. Checking Product Page: https://www.hsglobalai.com/products/ai-digital-human ...');
  const prodRes = await fetchUrl(`https://www.hsglobalai.com/products/ai-digital-human?t=${ts}`);
  console.log(`   HTTP Status: ${prodRes.status}`);
  console.log(`   x-vercel-id: ${prodRes.headers['x-vercel-id'] || 'N/A'}`);
  console.log(`   x-vercel-cache: ${prodRes.headers['x-vercel-cache'] || 'N/A'}`);
  console.log(`   date: ${prodRes.headers['date'] || 'N/A'}`);
  console.log(`   age: ${prodRes.headers['age'] || 'N/A'}`);

  // Check all occurrences of G2 on product page
  const prodMatches = [...prodRes.body.matchAll(/<a[^>]+href=["']https:\/\/www\.g2\.com\/products\/dihuava\/reviews["'][^>]*>([\s\S]*?)<\/a>/gi)];
  console.log(`   Found ${prodMatches.length} G2 <a> links on product page:`);
  prodMatches.forEach((m, idx) => {
    console.log(`     [${idx + 1}] ${m[0]}`);
  });

  // Check product page JSON-LD
  const prodSchemas = parseJsonLd(prodRes.body);
  console.log(`   Found ${prodSchemas.length} JSON-LD blocks on product page`);
  let prodSoftwareSameAs = null;
  let prodOrgSameAs = null;
  for (const s of prodSchemas) {
    if (s['@type'] === 'SoftwareApplication' || (s['@id'] && s['@id'].includes('#software'))) {
      prodSoftwareSameAs = s.sameAs;
    }
    if (s['@type'] === 'Organization' || (s['@id'] && s['@id'].includes('#organization'))) {
      prodOrgSameAs = s.sameAs;
    }
  }
  console.log(`   Product Page SoftwareApplication sameAs:`, prodSoftwareSameAs);
  console.log(`   Product Page Organization sameAs:`, prodOrgSameAs);

  // 3. Extract Build ID / Deployment asset hashes
  const buildIdMatch = prodRes.body.match(/\/_next\/static\/([a-zA-Z0-9_-]+)\/_buildManifest\.js/);
  console.log(`\n3. Build ID / Manifest hash from HTML: ${buildIdMatch ? buildIdMatch[1] : 'N/A'}`);
}

verify().catch(console.error);


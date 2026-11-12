const https = require('https');

function fetchUrl(url, customHeaders = {}) {
  return new Promise((resolve, reject) => {
    const u = new URL(url);
    const options = {
      hostname: u.hostname,
      path: u.pathname + u.search,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36',
        ...customHeaders
      }
    };
    https.get(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({
        status: res.statusCode,
        headers: res.headers,
        body: data
      }));
    }).on('error', reject);
  });
}

async function run() {
  console.log('=== PHASE 1 & 2: LIVE PRODUCTION VERIFICATION ===');
  // Fetch with cache-buster or pragma to ensure we see the latest edge deploy
  const target = await fetchUrl('https://www.hsglobalai.com/products/ai-digital-human?_cb=' + Date.now());
  console.log('URL: https://www.hsglobalai.com/products/ai-digital-human');
  console.log('Status:', target.status);
  console.log('x-vercel-id:', target.headers['x-vercel-id']);
  console.log('x-vercel-cache:', target.headers['x-vercel-cache']);
  console.log('date:', target.headers['date']);

  const body = target.body;

  // Title & Meta
  const titleMatch = body.match(/<title>([^<]+)<\/title>/);
  console.log('Title:', titleMatch ? titleMatch[1] : 'NONE');

  const descMatch = body.match(/<meta name="description" content="([^"]+)"/);
  console.log('Meta Description:', descMatch ? descMatch[1] : 'NONE');

  const canonicalMatch = body.match(/<link rel="canonical" href="([^"]+)"/);
  console.log('Canonical:', canonicalMatch ? canonicalMatch[1] : 'NONE');

  // Headings
  const h1Match = body.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  console.log('H1:', h1Match ? h1Match[1].replace(/<[^>]+>/g, '').trim() : 'NONE');

  const h2Matches = [...body.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
  console.log('H2s (' + h2Matches.length + '):');
  h2Matches.forEach((h, i) => console.log(`  ${i+1}. ${h}`));

  // Check specific Step 25 content changes
  console.log('\n--- Specific Content Checks ---');
  const hasOffers = body.includes('"offers"') || body.includes('priceCurrency');
  console.log('Has "offers" or priceCurrency in HTML?:', hasOffers);

  const hasNewFaq8 = body.includes('DIHUAVA is designed for deployment across universities, K-12 schools, and corporate academies');
  console.log('Has approved FAQ #8 ("DIHUAVA is designed for deployment")?:', hasNewFaq8);

  const hasOldFaq8 = body.includes('Universities, K-12 schools, and corporate academies deploy DIHUAVA');
  console.log('Has old unverified FAQ #8 wording?:', hasOldFaq8);

  const hasManufacturer = body.includes('"manufacturer"') && body.includes('"HS Global AI"');
  console.log('Has manufacturer JSON-LD?:', hasManufacturer);

  const hasCreator = body.includes('"creator"') && body.includes('"HS Global AI"');
  console.log('Has creator JSON-LD?:', hasCreator);

  // Check positioning
  const offlineDefault = body.includes('100% offline on-device by default, with optional cloud-management configurations available');
  console.log('100% offline on-device positioning accurate?:', offlineDefault);

  const languages29 = body.includes('29+ global languages') || body.includes('29+ Global Languages');
  console.log('29+ languages mentioned?:', languages29);

  const indianLanguages7 = body.includes('7 Indian regional languages') || body.includes('7 specialized Indian languages');
  console.log('7 Indian languages mentioned?:', indianLanguages7);

  // Dubai check
  const dubaiCheck = body.toLowerCase().includes('dubai') || body.toLowerCase().includes('dmcc') || body.includes('DMCC32589');
  console.log('Any Dubai/DMCC references on target page?:', dubaiCheck);

  // Healthcare page check
  console.log('\n--- Healthcare Page Check ---');
  const health = await fetchUrl('https://www.hsglobalai.com/industries/healthcare?_cb=' + Date.now());
  console.log('Healthcare Status:', health.status);
  const healthTriage = health.body.includes('triage support');
  const healthZeroLeakage = health.body.includes('zero cloud data leakage');
  const healthNewOverview = health.body.includes('maintaining patient data privacy without transmitting data to public cloud servers');
  console.log('Healthcare has "triage support"?:', healthTriage);
  console.log('Healthcare has "zero cloud data leakage"?:', healthZeroLeakage);
  console.log('Healthcare has new approved wording?:', healthNewOverview);

  // Education page check
  console.log('\n--- Education Page Check ---');
  const edu = await fetchUrl('https://www.hsglobalai.com/industries/education?_cb=' + Date.now());
  console.log('Education Status:', edu.status);
  const eduLink = edu.body.includes('href="/products/ai-digital-human"') || edu.body.includes('href="https://www.hsglobalai.com/products/ai-digital-human"');
  console.log('Education links to /products/ai-digital-human?:', eduLink);
}

run();


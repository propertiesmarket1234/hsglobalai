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

async function run() {
  const targetUrl = 'https://www.hsglobalai.com/products/ai-digital-human?t=' + Date.now();
  console.log(`Fetching ${targetUrl}...`);
  const res = await fetchUrl(targetUrl);
  console.log(`Status: ${res.status}`);
  console.log(`x-vercel-id: ${res.headers['x-vercel-id'] || 'N/A'}`);
  console.log(`age: ${res.headers['age'] || 'N/A'}`);
  console.log(`cache-control: ${res.headers['cache-control'] || 'N/A'}`);

  const html = res.body;

  // Title
  const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
  console.log(`Title: ${titleMatch ? titleMatch[1] : 'NOT FOUND'}`);

  // Meta description
  const metaDescMatch = html.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i);
  console.log(`Meta Description: ${metaDescMatch ? metaDescMatch[1] : 'NOT FOUND'}`);

  // Canonical
  const canonicalMatch = html.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i);
  console.log(`Canonical: ${canonicalMatch ? canonicalMatch[1] : 'NOT FOUND'}`);

  // H1
  const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  console.log(`H1: ${h1Match ? h1Match[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim() : 'NOT FOUND'}`);

  // Check definition
  const hasNewDefinition = html.includes("Offline AI digital human software is an on-premise application that runs conversational 3D avatars locally");
  console.log(`Has New Definition: ${hasNewDefinition}`);

  // Check FAQ Q6
  const hasFaqQ6 = html.includes("How does DIHUAVA handle enterprise document search and prevent hallucinations?");
  console.log(`Has FAQ Q6: ${hasFaqQ6}`);

  // Check JSON-LD
  const jsonLdMatches = [...html.matchAll(/<script\s+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  console.log(`Found ${jsonLdMatches.length} JSON-LD blocks`);
  let softwareAppFound = false;
  let faqPageFound = false;
  let faqQuestionsCount = 0;

  for (const match of jsonLdMatches) {
    try {
      const parsed = JSON.parse(match[1]);
      if (parsed['@type'] === 'SoftwareApplication') {
        softwareAppFound = true;
        console.log(`JSON-LD SoftwareApplication: name=${parsed.name}, alternateName=${JSON.stringify(parsed.alternateName)}`);
      }
      if (parsed['@type'] === 'FAQPage') {
        faqPageFound = true;
        faqQuestionsCount = parsed.mainEntity ? parsed.mainEntity.length : 0;
        console.log(`JSON-LD FAQPage: questionCount=${faqQuestionsCount}`);
      }
    } catch (e) {
      console.log(`Failed to parse JSON-LD block: ${e.message}`);
    }
  }

  console.log(`\nDeployment State Check:`);
  if (hasNewDefinition && hasFaqQ6 && faqQuestionsCount === 8) {
    console.log(`>>> SUCCESS: Production deployment is LIVE with commit 1b0973b updates! <<<`);
  } else {
    console.log(`>>> PENDING: Production deployment might still be building or updating cache. <<<`);
  }
}

run().catch(console.error);

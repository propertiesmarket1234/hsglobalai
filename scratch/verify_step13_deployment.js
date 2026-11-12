const https = require('https');

function fetchLive(urlPath) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'www.hsglobalai.com',
      path: urlPath + '?_v=' + Date.now(),
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache'
      }
    };
    https.get(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          data
        });
      });
    }).on('error', reject);
  });
}

async function verify() {
  console.log('--- Probing live production https://www.hsglobalai.com/products/ai-digital-human ---');
  const res = await fetchLive('/products/ai-digital-human');
  console.log('HTTP Status:', res.statusCode);
  console.log('Vercel ID:', res.headers['x-vercel-id']);
  console.log('Age header:', res.headers['age']);

  const titleMatch = res.data.match(/<title>([^<]+)<\/title>/i);
  console.log('Live Title:', titleMatch ? titleMatch[1] : 'NOT FOUND');

  const metaDescMatch = res.data.match(/name="description"\s+content="([^"]+)"/i);
  console.log('Live Description:', metaDescMatch ? metaDescMatch[1] : 'NOT FOUND');

  const h1Match = res.data.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  console.log('Live H1:', h1Match ? h1Match[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim() : 'NOT FOUND');

  const defH2Match = res.data.match(/<h2[^>]*>([\s\S]*?What Is Digital Human Software[\s\S]*?)<\/h2>/i);
  console.log('Live Definition H2:', defH2Match ? defH2Match[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim() : 'NOT FOUND');

  const siddharthMatch = res.data.includes('Siddhartha Industries Private Limited');
  console.log('Contains Siddhartha Industries hardware attribution:', siddharthMatch);

  const questionMatches = res.data.match(/"@type":"Question"/g);
  console.log('FAQ Schema count in Live HTML:', questionMatches ? questionMatches.length : 0);

  const isUpdated = titleMatch && titleMatch[1].includes('Platform') && questionMatches && questionMatches.length === 11;
  console.log('\nDeployment update verified on live HTML:', isUpdated);

  // Check localized routes
  console.log('\n--- Checking Localized Routes ---');
  for (const lang of ['zh', 'ru', 'es', 'fr']) {
    try {
      const locRes = await fetchLive(`/${lang}/products/ai-digital-human`);
      console.log(`/${lang}/products/ai-digital-human Status:`, locRes.statusCode, '| Vercel ID:', locRes.headers['x-vercel-id']);
    } catch (e) {
      console.error(`Error fetching /${lang}/products/ai-digital-human:`, e.message);
    }
  }

  process.exit(isUpdated ? 0 : 1);
}

verify().catch(e => {
  console.error('Verification error:', e);
  process.exit(1);
});


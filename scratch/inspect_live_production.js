const https = require('https');

function getLive(path) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'www.hsglobalai.com',
      path: path + '?_t=' + Date.now(),
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache'
      }
    };
    https.get(options, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => resolve({
        status: res.statusCode,
        headers: res.headers,
        body
      }));
    }).on('error', reject);
  });
}

async function run() {
  console.log('=== FETCHING LIVE PRODUCTION: https://www.hsglobalai.com/products/ai-digital-human ===');
  const res = await getLive('/products/ai-digital-human');

  console.log('HTTP Status:', res.status);
  console.log('x-vercel-id:', res.headers['x-vercel-id']);
  console.log('x-vercel-cache:', res.headers['x-vercel-cache']);
  console.log('age:', res.headers['age']);
  console.log('date:', res.headers['date']);

  const html = res.body;

  // 1. Page Title
  const title = html.match(/<title>([^<]+)<\/title>/i)?.[1];
  console.log('\n1. Page Title:\n  ', title);

  // 2. Meta Description
  const desc = html.match(/name="description"\s+content="([^"]+)"/i)?.[1];
  console.log('\n2. Meta Description:\n  ', desc);

  // 3. H1
  const h1 = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  console.log('\n3. H1:\n  ', h1);

  // 4. Canonical URL
  const canonical = html.match(/rel="canonical"\s+href="([^"]+)"/i)?.[1];
  console.log('\n4. Canonical URL:\n  ', canonical);

  // 5. Hero lead paragraph (Offline/On-Device Positioning)
  const heroLead = html.match(/DIHUAVA is HS Global AI[\s\S]*?fleet administration\./i)?.[0].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  console.log('\n5. Updated Offline/On-Device Hero Lead:\n  ', heroLead);

  // 6. Direct Definition H2 & Body
  const defH2 = html.match(/What Is Digital Human Software and What Is DIHUAVA\?/i)?.[0];
  console.log('\n6. Direct Definition H2:\n  ', defH2);

  // 7. Hardware Partner Attribution
  const hwAttribution = html.includes('Siddhartha Industries Private Limited');
  console.log('\n7. Siddhartha Industries Hardware Attribution present in HTML:\n  ', hwAttribution);

  // 8. SoftwareApplication JSON-LD
  const appSchemaMatch = html.match(/"@type":"SoftwareApplication"[\s\S]*?"alternateName":\[([^\]]+)\]/);
  console.log('\n8. SoftwareApplication alternateName in JSON-LD:\n  ', appSchemaMatch ? appSchemaMatch[1] : 'NOT FOUND');

  // 9. FAQPage JSON-LD
  const faqSchemaMatches = [];
  const qRegex = /"@type":"Question","name":"([^"]+)"/g;
  let match;
  while ((match = qRegex.exec(html)) !== null) {
    faqSchemaMatches.push(match[1]);
  }
  console.log('\n9. FAQPage JSON-LD Questions Count:', faqSchemaMatches.length);
  faqSchemaMatches.forEach((q, idx) => console.log(`   Q${idx+1}: ${q}`));

  // 10. Visible FAQ Count in Accordion
  const visibleFaqButtons = [];
  const buttonRegex = /<button[^>]*>[\s\S]*?<span[^>]*class="[^"]*font-semibold[^"]*"[^>]*>([\s\S]*?)<\/span>/g;
  let btnMatch;
  while ((btnMatch = buttonRegex.exec(html)) !== null) {
    const text = btnMatch[1].replace(/<[^>]+>/g, '').trim();
    if (text && (text.includes('?') || text.startsWith('What') || text.startsWith('Can') || text.startsWith('How') || text.startsWith('Which'))) {
      visibleFaqButtons.push(text);
    }
  }
  console.log('\n10. Visible FAQ Questions in Accordion HTML Count:', visibleFaqButtons.length);
  visibleFaqButtons.forEach((q, idx) => console.log(`   Visible Q${idx+1}: ${q}`));
}

run().catch(console.error);


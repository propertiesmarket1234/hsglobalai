const https = require('https');

function fetch(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0 Safari/537.36' } }, res => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function verifyLive() {
  console.log('Fetching live https://www.hsglobalai.com/products/ai-digital-human ...');
  const html = await fetch('https://www.hsglobalai.com/products/ai-digital-human');

  console.log('\n--- LIVE KEYWORD OCCURRENCES ---');
  const keywords = [
    'offline AI digital human software',
    'digital human software',
    'AI digital human platform',
    'offline digital human platform',
    'on-device AI digital human',
    'enterprise digital human software',
    'multilingual AI avatar software',
    'AI digital human for kiosks',
    'offline conversational AI avatar',
    'What Is Offline AI Digital Human Software?'
  ];
  keywords.forEach(kw => {
    const count = (html.match(new RegExp(kw, 'gi')) || []).length;
    console.log(`  "${kw}": ${count} match(es)`);
  });

  console.log('\n--- DEFINITION COPY ---');
  const defExists = html.includes('What Is Offline AI Digital Human Software?') &&
                    html.includes('Offline AI digital human software enables a digital human or conversational avatar');
  console.log('Definition block found:', defExists);

  console.log('\n--- 7 FAQ VERIFICATION & PARITY ---');
  const jsonLdMatch = html.match(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi);
  let faqSchema = null;
  for (const block of jsonLdMatch || []) {
    const content = block.replace(/<script[^>]*>|<\/script>/gi, '');
    try {
      const parsed = JSON.parse(content);
      if (parsed['@type'] === 'FAQPage') faqSchema = parsed;
    } catch(e) {}
  }

  if (faqSchema && faqSchema.mainEntity) {
    console.log(`Found FAQPage schema with ${faqSchema.mainEntity.length} questions:`);
    faqSchema.mainEntity.forEach((item, idx) => {
      const q = item.name;
      const a = item.acceptedAnswer?.text || '';
      const qInDom = html.includes(q);
      const aSnippetInDom = html.includes(a.slice(0, 40));
      console.log(`  FAQ ${idx + 1}: "${q}"`);
      console.log(`    Visible in DOM: Question = ${qInDom}, Answer = ${aSnippetInDom}`);
    });
  } else {
    console.log('FAQPage schema NOT FOUND!');
  }

  console.log('\n--- TITLE & BRANDING AUDIT ---');
  const title = (html.match(/<title>([^<]+)<\/title>/i) || [])[1];
  console.log(`Live Title: "${title}"`);
  const brandCount = (title.match(/HS Global AI/gi) || []).length;
  console.log(`Brand count in title: ${brandCount} (Duplicate: ${brandCount > 1})`);

  console.log('\n--- CANONICAL & HREFLANG ---');
  const canon = (html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i) || [])[1];
  console.log(`Canonical: ${canon}`);
  const hreflangs = [...html.matchAll(/hreflang=["']([^"']+)["'][^>]*href=["']([^"']+)["']/gi)].map(m => `${m[1]} -> ${m[2]}`);
  console.log(`Hreflangs (${hreflangs.length}):`, hreflangs);

  console.log('\n--- INTERNAL LINKS AUDIT ---');
  const hrefs = [...html.matchAll(/href=["'](\/[^"'#?]+)["']/gi)].map(m => m[1]);
  const uniqueHrefs = [...new Set(hrefs)];
  console.log(`Found ${uniqueHrefs.length} unique internal links. Testing top 15 links...`);
  for (const h of uniqueHrefs.slice(0, 15)) {
    try {
      const status = await new Promise((res) => {
        https.get('https://www.hsglobalai.com' + h, r => res(r.statusCode)).on('error', () => res('ERR'));
      });
      console.log(`  ${h} -> HTTP ${status}`);
    } catch(e) {
      console.log(`  ${h} -> ERROR: ${e.message}`);
    }
  }
}

verifyLive();

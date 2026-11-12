const https = require('https');

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0 Safari/537.36', 'Cache-Control': 'no-cache' } }, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({
          url,
          statusCode: res.statusCode,
          headers: res.headers,
          body: data
        });
      });
    }).on('error', reject);
  });
}

async function audit() {
  console.log('====================================================');
  console.log('TESTING LIVE PRODUCTION URLS: https://www.hsglobalai.com');
  console.log('====================================================\n');

  const urls = [
    'https://www.hsglobalai.com/',
    'https://www.hsglobalai.com/products/ai-digital-human',
    'https://www.hsglobalai.com/products',
    'https://www.hsglobalai.com/robots.txt',
    'https://www.hsglobalai.com/sitemap.xml'
  ];

  for (const url of urls) {
    console.log(`\n----------------------------------------------------`);
    console.log(`FETCHING: ${url}`);
    console.log(`----------------------------------------------------`);
    try {
      const res = await fetchUrl(url);
      console.log(`HTTP Status: ${res.statusCode} ${res.statusCode === 200 ? 'OK' : 'FAIL'}`);
      console.log(`Content-Type: ${res.headers['content-type']}`);
      console.log(`Content-Length: ${res.body.length} bytes`);
      console.log(`Server: ${res.headers['server']}`);
      console.log(`Age / Cache: Age=${res.headers['age'] || '0'}, X-Vercel-Cache=${res.headers['x-vercel-cache'] || 'NONE'}`);

      if (url.endsWith('.txt')) {
        console.log(`\nROBOTS.TXT CONTENT:`);
        console.log(res.body);
        continue;
      }

      if (url.endsWith('.xml')) {
        console.log(`\nSITEMAP.XML SUMMARY:`);
        const locMatches = [...res.body.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
        console.log(`Total URLs in sitemap: ${locMatches.length}`);
        const hasDihuava = locMatches.some(l => l.includes('/products/ai-digital-human'));
        console.log(`Includes /products/ai-digital-human: ${hasDihuava}`);
        console.log(`Sample URLs:`);
        locMatches.slice(0, 5).forEach(l => console.log(`  - ${l}`));
        continue;
      }

      // Title
      const titleMatch = res.body.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
      const title = titleMatch ? titleMatch[1].trim() : 'NONE';
      console.log(`\nTitle (${title.length} chars): "${title}"`);

      // Description
      const descMatch = res.body.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i) ||
                        res.body.match(/<meta[^>]*content=["']([^"']*)["'][^>]*name=["']description["']/i);
      const desc = descMatch ? descMatch[1].trim() : 'NONE';
      console.log(`Meta Description (${desc.length} chars): "${desc}"`);

      // Canonical
      const canonMatch = res.body.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["']/i) ||
                         res.body.match(/<link[^>]*href=["']([^"']*)["'][^>]*rel=["']canonical["']/i);
      const canonical = canonMatch ? canonMatch[1] : 'NONE';
      console.log(`Canonical: ${canonical}`);

      // H1
      const h1Matches = [...res.body.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)];
      console.log(`H1 Count: ${h1Matches.length}`);
      h1Matches.forEach((m, idx) => {
        console.log(`  H1 [${idx + 1}]: "${m[1].replace(/<[^>]+>/g, '').trim()}"`);
      });

      // Hreflang
      const hreflangs = [];
      const linkMatches = [...res.body.matchAll(/<link\s+([^>]+)>/gi)];
      for (const m of linkMatches) {
        const tag = m[1];
        if (tag.includes('rel="alternate"') || tag.includes("rel='alternate'")) {
          const hMatch = tag.match(/hreflang=["']([^"']+)["']/i);
          const uMatch = tag.match(/href=["']([^"']+)["']/i);
          if (hMatch && uMatch) {
            hreflangs.push(`${hMatch[1]} -> ${uMatch[1]}`);
          }
        }
      }
      console.log(`Hreflang count: ${hreflangs.length}`);
      hreflangs.forEach(h => console.log(`  ${h}`));

      // JSON-LD
      const jsonLdMatches = [...res.body.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
      console.log(`JSON-LD Blocks: ${jsonLdMatches.length}`);
      jsonLdMatches.forEach((m, idx) => {
        try {
          const parsed = JSON.parse(m[1]);
          const type = parsed['@type'] || (parsed['@graph'] ? `Graph [${parsed['@graph'].map(g => g['@type']).join(', ')}]` : 'Unknown');
          console.log(`  Block ${idx + 1}: @type = ${type}`);
          if (type === 'FAQPage') {
            console.log(`    FAQ Entities: ${parsed.mainEntity?.length || 0}`);
            parsed.mainEntity?.forEach((q, qIdx) => {
              console.log(`      ${qIdx + 1}. Q: ${q.name}`);
              console.log(`         A: ${q.acceptedAnswer?.text?.slice(0, 75)}...`);
            });
          }
        } catch (e) {
          console.log(`  Block ${idx + 1}: JSON parse error: ${e.message}`);
        }
      });

    } catch (e) {
      console.error(`Error fetching ${url}:`, e.message);
    }
  }
}

audit();

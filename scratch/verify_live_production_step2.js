const https = require('https');

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      // Follow redirects if any
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(fetchUrl(res.headers.location));
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ statusCode: res.statusCode, headers: res.headers, body: data }));
    });
    req.on('error', reject);
    req.setTimeout(15000, () => {
      req.abort();
      reject(new Error('Timeout'));
    });
  });
}

async function run() {
  const urls = [
    'https://www.hsglobalai.com/',
    'https://www.hsglobalai.com/products/ai-digital-human',
    'https://www.hsglobalai.com/blog/what-is-a-digital-human-avatar',
    'https://www.hsglobalai.com/robots.txt',
    'https://www.hsglobalai.com/sitemap.xml'
  ];

  for (const u of urls) {
    try {
      const res = await fetchUrl(u);
      console.log(`URL: ${u} -> Status: ${res.statusCode}`);
      if (u.includes('what-is-a-digital-human-avatar')) {
        console.log('\n--- AUDITING BLOG POST HTML ---');
        // Check for the 2 contextual links
        const link1 = res.body.includes('href="/products/ai-digital-human"') || res.body.includes('href="https://www.hsglobalai.com/products/ai-digital-human"');
        console.log('Contains link to /products/ai-digital-human:', link1);

        const dLinks = [...res.body.matchAll(/<a [^>]*href=["'](?:https:\/\/www\.hsglobalai\.com)?\/products\/ai-digital-human["'][^>]*>(.*?)<\/a>/g)];
        console.log(`Found ${dLinks.length} total links to /products/ai-digital-human:`);
        dLinks.forEach((m, idx) => console.log(`  ${idx + 1}: ${m[0]}`));

        // Check footer label
        const hasFooterText = res.body.includes('AI Digital Human Software');
        console.log('Footer contains "AI Digital Human Software":', hasFooterText);

        // Check metadata
        const titleMatch = res.body.match(/<title>(.*?)<\/title>/);
        console.log('Title:', titleMatch ? titleMatch[1] : 'NOT FOUND');

        const metaDesc = res.body.match(/<meta [^>]*name=["']description["'][^>]*content=["'](.*?)["']/);
        console.log('Meta description:', metaDesc ? metaDesc[1] : 'NOT FOUND');

        const canonical = res.body.match(/<link [^>]*rel=["']canonical["'][^>]*href=["'](.*?)["']/);
        console.log('Canonical:', canonical ? canonical[1] : 'NOT FOUND');

        const h1 = res.body.match(/<h1[^>]*>(.*?)<\/h1>/);
        console.log('H1:', h1 ? h1[1].replace(/<[^>]+>/g, '') : 'NOT FOUND');

        const robots = res.body.match(/<meta [^>]*name=["']robots["'][^>]*content=["'](.*?)["']/);
        console.log('Robots meta:', robots ? robots[1] : 'NONE (defaults to index, follow)');

        // Check bullets
        console.log('Bullet 1 present:', res.body.includes('100% offline on-device processing by default'));
        console.log('Bullet 2 present:', res.body.includes('Cloud-independent daily visitor interactions'));
        console.log('Bullet 3 present:', res.body.includes('Optional cloud-management configurations for fleets'));
        console.log('Bullet 4 present:', res.body.includes('High data privacy through on-device processing'));
      }

      if (u.includes('/products/ai-digital-human') && !u.includes('blog')) {
        console.log('\n--- AUDITING DIHUAVA PRODUCT PAGE HTML ---');
        const titleMatch = res.body.match(/<title>(.*?)<\/title>/);
        console.log('Product Title:', titleMatch ? titleMatch[1] : 'NOT FOUND');

        const metaDesc = res.body.match(/<meta [^>]*name=["']description["'][^>]*content=["'](.*?)["']/);
        console.log('Product Meta description:', metaDesc ? metaDesc[1] : 'NOT FOUND');

        const canonical = res.body.match(/<link [^>]*rel=["']canonical["'][^>]*href=["'](.*?)["']/);
        console.log('Product Canonical:', canonical ? canonical[1] : 'NOT FOUND');

        const h1 = res.body.match(/<h1[^>]*>(.*?)<\/h1>/);
        console.log('Product H1:', h1 ? h1[1].replace(/<[^>]+>/g, '') : 'NOT FOUND');

        const robots = res.body.match(/<meta [^>]*name=["']robots["'][^>]*content=["'](.*?)["']/);
        console.log('Product Robots meta:', robots ? robots[1] : 'NONE (defaults to index, follow)');

        console.log('Product page footer has "AI Digital Human Software":', res.body.includes('AI Digital Human Software'));
      }
    } catch (e) {
      console.log(`URL: ${u} -> Error: ${e.message}`);
    }
  }
}

run();


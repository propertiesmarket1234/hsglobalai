const https = require('https');

console.log('=== PHASE 5: LIVE PRODUCTION VERIFICATION ===\n');

function fetchLive(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0 Safari/537.36' } }, res => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => resolve({ status: res.statusCode, html: data }));
    }).on('error', reject);
  });
}

async function verifyAll() {
  const pages = [
    { name: 'DIHUAVA Root Product', path: '/products/ai-digital-human', checkKiosk: true },
    { name: 'Multilingual Capability', path: '/products/ai-digital-human/multilingual-support', checkMulti: true },
    { name: 'Holographic Display', path: '/products/holographic-display', checkHoloLinks: true },
    { name: 'Spatial Display', path: '/products/spatial-display', checkSpatialLinks: true },
    { name: 'Industry: Banking', path: '/industries/banking', checkIndustry: true },
    { name: 'Industry: Retail', path: '/industries/retail', checkIndustry: true },
    { name: 'Industry: Corporate', path: '/industries/corporate', checkIndustry: true },
    { name: 'Industry: Healthcare', path: '/industries/healthcare', checkIndustry: true },
    { name: 'Industry: Tourism', path: '/industries/tourism', checkIndustry: true },
    { name: 'Industry: Education', path: '/industries/education', checkIndustry: true },
  ];

  for (const p of pages) {
    const fullUrl = `https://www.hsglobalai.com${p.path}`;
    try {
      const res = await fetchLive(fullUrl);
      const title = (res.html.match(/<title>([^<]+)<\/title>/i) || [])[1];
      const h1Matches = [...res.html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' '));
      const canon = (res.html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i) || [])[1];
      
      console.log(`[${p.name}] ${fullUrl}`);
      console.log(`  HTTP Status: ${res.status}`);
      console.log(`  Title:       ${title}`);
      console.log(`  H1:          ${h1Matches.join(' | ')}`);
      console.log(`  Canonical:   ${canon}`);

      if (p.checkKiosk) {
        const hasKioskArch = res.html.includes('Physical Kiosk Architecture');
        const hasDualNav = res.html.includes('Touch &amp; Voice Dual Navigation');
        console.log(`  Kiosk Architecture Block: ${hasKioskArch ? 'PASS' : 'FAIL'}`);
        console.log(`  Dual Nav Card:            ${hasDualNav ? 'PASS' : 'FAIL'}`);
      }

      if (p.checkMulti) {
        const hasSoftwareTitle = title && title.includes('Multilingual AI Avatar Software');
        const hasSoftwareH1 = h1Matches[0] && h1Matches[0].includes('Multilingual AI Avatar Software');
        console.log(`  Title has Avatar Software: ${hasSoftwareTitle ? 'PASS' : 'FAIL'}`);
        console.log(`  H1 has Avatar Software:    ${hasSoftwareH1 ? 'PASS' : 'FAIL'}`);
      }

      if (p.checkHoloLinks) {
        const hasHeroLink = res.html.includes('Software Engine:') && res.html.includes('/products/ai-digital-human');
        const hasSpecLink = res.html.includes('DIHUAVA AI Digital Human Platform (100% Offline Edge)');
        console.log(`  Hero Software Engine Link: ${hasHeroLink ? 'PASS' : 'FAIL'}`);
        console.log(`  Specs Compatibility Link:  ${hasSpecLink ? 'PASS' : 'FAIL'}`);
      }

      if (p.checkSpatialLinks) {
        const hasArchLink = res.html.includes('Learn how DIHUAVA powers interactive 3D digital humans');
        const hasEdgeLink = res.html.includes('Explore DIHUAVA offline AI digital human software');
        console.log(`  Architecture Anchor Text:  ${hasArchLink ? 'PASS' : 'FAIL'}`);
        console.log(`  Edge Software Anchor Text: ${hasEdgeLink ? 'PASS' : 'FAIL'}`);
      }

      if (p.checkIndustry) {
        const hasBanner = res.html.includes('Powered by DIHUAVA Offline AI Digital Human Software');
        const hasLink = res.html.includes('href="/products/ai-digital-human"');
        console.log(`  DIHUAVA Callout Banner:    ${hasBanner ? 'PASS' : 'FAIL'}`);
        console.log(`  Link to DIHUAVA:           ${hasLink ? 'PASS' : 'FAIL'}`);
      }

      console.log('');
    } catch(err) {
      console.error(`ERROR fetching ${fullUrl}:`, err.message);
    }
  }
}

verifyAll();

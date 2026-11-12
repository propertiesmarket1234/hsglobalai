const fs = require('fs');

// Check compiled HTML for /products/ai-digital-human
const dihuavaHtmlPath = 'D:/WebProjects/hsglobalai/.next/server/app/products/ai-digital-human.html';
if (fs.existsSync(dihuavaHtmlPath)) {
  const html = fs.readFileSync(dihuavaHtmlPath, 'utf8');
  console.log('=== DIHUAVA COMPILED HTML CHECKS ===');
  console.log('Contains G2 review URL:', html.includes('https://www.g2.com/products/dihuava/reviews'));
  console.log('Contains DIHUAVA on G2 link text:', html.includes('DIHUAVA on G2'));
  console.log('Contains target="_blank":', html.includes('target="_blank"'));
  console.log('Contains rel="noopener noreferrer":', html.includes('rel="noopener noreferrer"'));
  
  // Extract json-ld scripts
  const matches = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g);
  if (matches) {
    console.log('Found', matches.length, 'JSON-LD blocks in DIHUAVA page');
    matches.forEach((m, idx) => {
      const jsonStr = m.replace(/<script type="application\/ld\+json">/, '').replace(/<\/script>/, '');
      try {
        const parsed = JSON.parse(jsonStr);
        if (parsed['@type'] === 'SoftwareApplication' || (parsed['@graph'] && parsed['@graph'].some(e => e['@type'] === 'SoftwareApplication'))) {
          console.log(`Block ${idx+1} is SoftwareApplication:`, JSON.stringify(parsed.sameAs || (parsed['@graph'] && parsed['@graph'].find(e => e['@type'] === 'SoftwareApplication')?.sameAs)));
        }
      } catch (e) {
        console.error('Error parsing JSON-LD:', e.message);
      }
    });
  }
} else {
  console.error('dihuavaHtmlPath does not exist');
}

// Check compiled HTML for homepage /
const homeHtmlPath = 'D:/WebProjects/hsglobalai/.next/server/app/index.html';
if (fs.existsSync(homeHtmlPath)) {
  const html = fs.readFileSync(homeHtmlPath, 'utf8');
  console.log('=== HOMEPAGE COMPILED HTML CHECKS ===');
  console.log('Contains G2 review URL in footer:', html.includes('https://www.g2.com/products/dihuava/reviews'));
  console.log('Contains sameAs in home JSON-LD:', html.includes('https://www.g2.com/products/dihuava/reviews'));
} else {
  console.error('homeHtmlPath does not exist');
}


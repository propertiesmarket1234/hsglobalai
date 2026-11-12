const fs = require('fs');

function searchCompliance(path) {
  if (!fs.existsSync(path)) return;
  const c = fs.readFileSync(path, 'utf8');
  const lines = c.split('\n');
  lines.forEach((l, i) => {
    if (/GDPR|HIPAA|leakage|compliance|certified|certification/i.test(l)) {
      console.log(path + ' [' + (i+1) + ']: ' + l.trim().slice(0, 140));
    }
  });
}

searchCompliance('D:/WebProjects/hsglobalai/src/app/products/ai-digital-human/DihuavaClient.tsx');
searchCompliance('D:/WebProjects/hsglobalai/src/app/products/ai-digital-human/page.tsx');
searchCompliance('D:/WebProjects/hsglobalai/src/app/privacy/PrivacyClient.tsx');
searchCompliance('D:/WebProjects/hsglobalai/src/data/blogPosts.ts');


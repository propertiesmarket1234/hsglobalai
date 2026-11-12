const fs = require('fs');

const eduPath = 'D:/WebProjects/hsglobalai/.next/server/app/industries/education.html';
if (fs.existsSync(eduPath)) {
  const html = fs.readFileSync(eduPath, 'utf8');
  console.log('Education HTML size:', html.length);
  const links = [...html.matchAll(/<a[^>]+href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g)]
    .filter(m => m[1].includes('ai-digital-human'))
    .map(m => ({ href: m[1], anchorText: m[2].replace(/<[^>]+>/g, '').trim() }));
  console.log('Links to ai-digital-human on education page:', links);
} else {
  console.log('Education HTML not found at:', eduPath);
}


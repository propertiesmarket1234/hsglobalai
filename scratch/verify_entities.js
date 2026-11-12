const fs = require('fs');

const files = [
  'D:/WebProjects/hsglobalai/src/components/Footer.tsx',
  'D:/WebProjects/hsglobalai/src/app/contact/page.tsx',
  'D:/WebProjects/hsglobalai/src/app/terms/TermsClient.tsx',
  'D:/WebProjects/hsglobalai/src/app/privacy/PrivacyClient.tsx',
  'D:/WebProjects/hsglobalai/src/i18n/dictionaries/en.ts'
];

files.forEach(f => {
  if (fs.existsSync(f)) {
    const content = fs.readFileSync(f, 'utf8');
    console.log(`\n=== ${f} ===`);
    const lines = content.split('\n');
    lines.forEach((line, idx) => {
      if (
        line.toLowerCase().includes('singapore') ||
        line.toLowerCase().includes('india') ||
        line.toLowerCase().includes('china') ||
        line.toLowerCase().includes('uae') ||
        line.toLowerCase().includes('dubai') ||
        line.toLowerCase().includes('dmcc') ||
        line.toLowerCase().includes('paya lebar') ||
        line.toLowerCase().includes('gunadala') ||
        line.toLowerCase().includes('siddhartha')
      ) {
        console.log(`L${idx + 1}: ${line.trim()}`);
      }
    });
  }
});


const fs = require('fs');

// Check src/app/products/ai-digital-human/page.tsx
const pPage = fs.readFileSync('D:/WebProjects/hsglobalai/src/app/products/ai-digital-human/page.tsx', 'utf8');
const pMatch = pPage.match(/const jsonLd = (\{[\s\S]*?\n\};)/);
if (pMatch) {
  try {
    const fn = new Function('return ' + pMatch[1].replace(/;\s*$/, ''));
    const obj = fn();
    console.log('Product page jsonLd parsed successfully!');
    console.log('@id:', obj['@id']);
    console.log('sameAs:', obj.sameAs);
    console.log('brand:', obj.brand);
  } catch (e) {
    console.error('Error parsing product page jsonLd:', e.message);
  }
} else {
  console.error('Could not find jsonLd in page.tsx');
}

// Check src/app/page.tsx
const homePage = fs.readFileSync('D:/WebProjects/hsglobalai/src/app/page.tsx', 'utf8');
const hMatch = homePage.match(/const dihuavaSoftwareSchema = (\{[\s\S]*?\n\};)/);
if (hMatch) {
  try {
    const fn = new Function('return ' + hMatch[1].replace(/;\s*$/, ''));
    const obj = fn();
    console.log('Home page dihuavaSoftwareSchema parsed successfully!');
    console.log('@id:', obj['@id']);
    console.log('sameAs:', obj.sameAs);
  } catch (e) {
    console.error('Error parsing home page schema:', e.message);
  }
} else {
  console.error('Could not find dihuavaSoftwareSchema in page.tsx');
}


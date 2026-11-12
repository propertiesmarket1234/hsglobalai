const fs = require('fs');

const pageContent = fs.readFileSync('D:/WebProjects/hsglobalai/src/app/products/ai-digital-human/page.tsx', 'utf8');

// Function to safely extract JS object by finding the matching braces
function extractObj(src, varName) {
  const startIdx = src.indexOf(`const ${varName} = {`);
  if (startIdx === -1) return null;
  const braceStart = src.indexOf('{', startIdx);
  let depth = 0, braceEnd = -1;
  for (let i = braceStart; i < src.length; i++) {
    if (src[i] === '{') depth++;
    else if (src[i] === '}') {
      depth--;
      if (depth === 0) {
        braceEnd = i;
        break;
      }
    }
  }
  if (braceEnd !== -1) {
    const raw = src.substring(braceStart, braceEnd + 1);
    return eval(`(${raw})`);
  }
  return null;
}

const schemas = ['webPageJsonLd', 'jsonLd', 'breadcrumbJsonLd', 'faqJsonLd'];
schemas.forEach(name => {
  try {
    const obj = extractObj(pageContent, name);
    if (obj) {
      console.log(`PASS: ${name} is valid JSON-LD! @type: ${obj['@type']}, name: ${obj.name || '(array/list)'}`);
      if (name === 'jsonLd') {
        console.log('  Offers present in jsonLd?:', !!obj.offers);
        console.log('  Manufacturer present?:', !!obj.manufacturer);
        console.log('  Creator present?:', !!obj.creator);
      }
      if (name === 'faqJsonLd') {
        console.log('  Total FAQs in faqJsonLd:', obj.mainEntity.length);
        console.log('  FAQ #8 Question:', obj.mainEntity[7].name);
        console.log('  FAQ #8 Answer snippet:', obj.mainEntity[7].acceptedAnswer.text.slice(0, 80));
      }
    } else {
      console.log(`FAIL: Could not extract ${name}`);
    }
  } catch (e) {
    console.log(`ERROR parsing ${name}:`, e.message);
  }
});


const fs = require('fs');
let s = fs.readFileSync('src/components/ProductShowcase.tsx', 'utf8');

const headMarker = '<<<<<<< HEAD';
const originMarker = '>>>>>>> origin/main';
const headIdx = s.indexOf(headMarker);
const origIdx = s.indexOf(originMarker);

if (headIdx !== -1 && origIdx !== -1) {
  const lineEnd = s.indexOf('\n', origIdx) + 1;
  const replacement = `      "Enable customers to visualize products digitally before making a purchase, creating interactive shopping experiences with product visualization and 29+ global language voice guidance (apparel outfit previewing on active R&D roadmap).",
    tags: ["29+ Global Languages", "AI Smart Mirror", "Product Visualization", "Retail Experience"],
`;
  s = s.substring(0, headIdx) + replacement + s.substring(lineEnd);
}

s = s.replace('badge: "Active Retail Capability"', 'badge: "Interactive Retail (Active R&D)"');
s = s.replace('imageAlt: "Virtual Try-On Smart Mirror Interactive Kiosk"', 'imageAlt: "Virtual Try-On Smart Mirror Interactive Kiosk (Active R&D)"');

fs.writeFileSync('src/components/ProductShowcase.tsx', s, 'utf8');
console.log('Successfully resolved ProductShowcase.tsx');

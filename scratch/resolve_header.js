const fs = require('fs');
let s = fs.readFileSync('src/components/Header.tsx', 'utf8');
const headMarker = '<<<<<<< HEAD';
const originMarker = '>>>>>>> origin/main';
const headIdx = s.indexOf(headMarker);
const origIdx = s.indexOf(originMarker);

if (headIdx !== -1 && origIdx !== -1) {
  const lineEnd = s.indexOf('\n', origIdx);
  const endIdx = lineEnd !== -1 ? lineEnd + 1 : origIdx + originMarker.length;
  const replacement = `            {/* PRODUCTS DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setProductsDropdownOpen(true)}
              onMouseLeave={() => setProductsDropdownOpen(false)}
`;
  s = s.substring(0, headIdx) + replacement + s.substring(endIdx);
  fs.writeFileSync('src/components/Header.tsx', s, 'utf8');
  console.log('Successfully resolved Header.tsx conflict');
} else {
  console.log('Markers not found');
}

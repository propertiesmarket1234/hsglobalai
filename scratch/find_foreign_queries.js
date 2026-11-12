const fs = require('fs');

function parseProperCSV(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const rows = [];
  let currentRow = [];
  let currentField = '';
  let inQuotes = false;

  for (let i = 0; i < content.length; i++) {
    const char = content[i];
    const nextChar = content[i + 1];

    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        currentField += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      currentRow.push(currentField);
      currentField = '';
    } else if ((char === '\r' || char === '\n') && !inQuotes) {
      if (char === '\r' && nextChar === '\n') i++;
      currentRow.push(currentField);
      currentField = '';
      if (currentRow.length > 0 && currentRow.some(c => c.trim().length > 0)) rows.push(currentRow);
      currentRow = [];
    } else {
      currentField += char;
    }
  }
  if (currentField || currentRow.length > 0) {
    currentRow.push(currentField);
    if (currentRow.some(c => c.trim().length > 0)) rows.push(currentRow);
  }

  if (rows.length === 0) return [];
  const header = rows[0].map(h => h.trim());
  return rows.slice(1).map(row => {
    const obj = {};
    header.forEach((h, idx) => {
      obj[h] = row[idx] ? row[idx].trim() : '';
    });
    return obj;
  });
}

const queries = parseProperCSV('D:/WebProjects/hsglobalai/docs/seo-sitewide/Queries.csv');

// Identify non-English queries by characters or common foreign terms
const foreignQueries = queries.filter(q => {
  const t = q['Top queries'];
  // Russian / Cyrillic
  if (/[\u0400-\u04FF]/.test(t)) return true;
  // Chinese
  if (/[\u4E00-\u9FFF]/.test(t)) return true;
  // Arabic
  if (/[\u0600-\u06FF]/.test(t)) return true;
  // Spanish / French / German words
  const lower = t.toLowerCase();
  const foreignMarkers = ['caja', 'cajas', 'holografica', 'holográfica', 'holograma', 'tiene', 'página', 'fotos', 'pesquisa', 'vente', 'borne', 'santé', 'avec', 'chizadigan', 'rasm', 'bessere', 'bitte', 'selbst', 'erstellen', 'como', 'se llama'];
  return foreignMarkers.some(m => lower.includes(m));
});

console.log(`Found ${foreignQueries.length} foreign language / localized queries in GSC:`);
foreignQueries.forEach(q => {
  console.log(`- "${q['Top queries']}": Imp=${q.Impressions}, Clicks=${q.Clicks}, Pos=${q.Position}, CTR=${q.CTR}`);
});


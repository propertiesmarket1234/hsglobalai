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

const eduQueries = queries.filter(q => {
  const lower = q['Top queries'].toLowerCase();
  return lower.includes('education') || lower.includes('teacher') || lower.includes('campus') || lower.includes('school') || lower.includes('university') || lower.includes('wayfinding') || lower.includes('tutor') || lower.includes('virtual');
});

console.log(`Found ${eduQueries.length} Education/Teacher/Campus related queries:`);
eduQueries.forEach(q => {
  console.log(`- "${q['Top queries']}": Imp=${q.Impressions}, Clicks=${q.Clicks}, Pos=${q.Position}, CTR=${q.CTR}`);
});


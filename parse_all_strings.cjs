const fs = require('fs');
const js = fs.readFileSync('C:/Users/dhia/CODING/Terrabyte/figma_js.txt', 'utf8');

// Search for single quoted strings and backtick strings
const singleQuotes = js.match(/'([^'\\]{4,150})'/g) || [];
const backticks = js.match(/([^\\]{4,150})/g) || [];
const all = [...singleQuotes, ...backticks].map(s => s.slice(1, -1));
const unique = [...new Set(all)].filter(s => 
  s.length > 8 && 
  !s.includes('function') && 
  !s.includes('var ') && 
  !s.includes('const ') &&
  !s.includes('return ') &&
  !s.includes('class') &&
  !s.includes('style') &&
  !s.includes('react')
);

console.log('Unique strings found (' + unique.length + '):');
unique.slice(0, 100).forEach((s, i) => console.log((i+1) + '. ' + s));
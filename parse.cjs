const fs = require('fs');
const js = fs.readFileSync('C:/Users/dhia/CODING/Terrabyte/figma_js.txt', 'utf8');

// Find all string literals longer than 15 characters
const regex = /"([^"\\]{15,150})"/g;
let m;
const set = new Set();
while ((m = regex.exec(js)) !== null) {
  set.add(m[1]);
}
console.log('Total strings found:', set.size);
const arr = Array.from(set).filter(s => !s.includes('http') && !s.includes('class') && !s.includes('M0 ') && !s.includes('transform') && !s.includes('flex'));
fs.writeFileSync('C:/Users/dhia/CODING/Terrabyte/figma_strings.txt', arr.join('\n'));
console.log('Saved', arr.length, 'readable strings');
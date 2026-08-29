const fs = require('fs');
const js = fs.readFileSync('C:/Users/dhia/CODING/Terrabyte/figma_js.txt', 'utf8');

// Find all strings containing letters, spaces, numbers, punctuation
const regex = /\"([A-Za-z0-9\s\.\,\-\:\'\!\?\&]{6,120})\"/g;
let m;
const list = [];
while ((m = regex.exec(js)) !== null) {
  const s = m[1].trim();
  if (s.length > 8 && !s.includes('React') && !s.includes('warning') && !s.includes('error') && !s.includes('component') && !s.includes('props')) {
    list.push(s);
  }
}

const unique = [...new Set(list)];
console.log('Found ' + unique.length + ' application strings:');
unique.slice(0, 100).forEach((str, i) => console.log((i+1) + '. ' + str));
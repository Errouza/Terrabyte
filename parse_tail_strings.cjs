const fs = require('fs');
const tail = fs.readFileSync('C:/Users/dhia/CODING/Terrabyte/figma_tail.txt', 'utf8');

// Find all strings in quotes longer than 4 chars
const matches = tail.match(/\"([^\"]{4,150})\"/g) || [];
const unique = [...new Set(matches.map(m => m.slice(1, -1)))];
console.log('Unique strings in app tail:', unique.length);
unique.forEach((s, i) => console.log((i+1) + '. ' + s));
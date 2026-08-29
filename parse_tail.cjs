const fs = require('fs');
const js = fs.readFileSync('C:/Users/dhia/CODING/Terrabyte/figma_js.txt', 'utf8');

// Find the last 20,000 characters of the file where application components typically reside
const tail = js.slice(-40000);
fs.writeFileSync('C:/Users/dhia/CODING/Terrabyte/figma_tail.txt', tail);
console.log('Saved tail size:', tail.length);
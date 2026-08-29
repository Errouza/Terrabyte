const fs = require('fs');
const src = fs.readFileSync('C:/Users/dhia/CODING/Terrabyte/figma_app_source.txt', 'utf8');

// Let's dump all data arrays and objects declared in the source
fs.writeFileSync('C:/Users/dhia/CODING/Terrabyte/decompiled_app.js', src);
console.log('Saved decompiled_app.js');
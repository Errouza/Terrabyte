const fs = require('fs');
const src = fs.readFileSync('C:/Users/dhia/CODING/Terrabyte/decompiled_app.js', 'utf8');

// Print functions re, ie, C, ae, w, oe, se
['re', 'ie', 'C', 'ae', 'w', 'oe', 'se'].forEach(fn => {
  const start = src.indexOf('function ' + fn + '(');
  if (start !== -1) {
    console.log('====================================');
    console.log('FUNCTION: ' + fn);
    console.log(src.slice(start, start + 3000));
  }
});
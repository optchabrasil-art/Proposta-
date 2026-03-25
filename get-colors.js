const https = require('https');

https.get('https://google-meu-negocio.optcha.com.br/', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    const bgMatches = data.match(/bg-[a-z]+-[0-9]+/g) || [];
    const textMatches = data.match(/text-[a-z]+-[0-9]+/g) || [];
    const hexMatches = data.match(/#[0-9a-fA-F]{6}/g) || [];
    
    const count = (arr) => arr.reduce((acc, val) => { acc[val] = (acc[val] || 0) + 1; return acc; }, {});
    console.log("BGs:", count(bgMatches));
    console.log("Texts:", count(textMatches));
    console.log("Hex:", count(hexMatches));
  });
});

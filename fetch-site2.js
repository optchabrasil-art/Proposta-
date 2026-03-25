const https = require('https');

https.get('https://google-meu-negocio.optcha.com.br/', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    const cheerio = require('cheerio');
    const $ = cheerio.load(data);
    
    // Extract text from the page
    const text = $('body').text();
    console.log(text.replace(/\s+/g, ' ').substring(0, 3000));
  });
});

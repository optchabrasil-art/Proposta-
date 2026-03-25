const https = require('https');

https.get('https://google-meu-negocio.optcha.com.br/', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    console.log(data.substring(0, 2000)); // Just to see if it's a React app or static HTML
    
    // Let's try to find package names
    const matches = data.match(/Pacote[^\<]+/gi);
    console.log("Package mentions:", matches);
  });
});

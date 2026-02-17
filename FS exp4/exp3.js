const url = require('url');

let address = 'https://www.example.com:8080/path/page.html?id=10';

let parsed = url.parse(address, true);

console.log('Host:', parsed.host);
console.log('Pathname:', parsed.pathname);
console.log('Search:', parsed.search);
console.log('Query:', parsed.query);

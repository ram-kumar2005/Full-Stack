const url = require('url');

let address = 'https://www.example.com:8080/path/page.html?id=10';

let parsed = url.parse(address, true);

console.log('Host:', parsed.host);
console.log('Pathname:', parsed.pathname);
console.log('Search:', parsed.search);
console.log('Query:', parsed.query);
console.log('Protocol:', parsed.protocol);
console.log('Port:', parsed.port);
console.log('Slash:', parsed.slash);
console.log('Auth:', parsed.auth);
console.log('Hostname:', parsed.hostname);
console.log('Path:', parsed.path);
console.log('Hash:', parsed.hash);

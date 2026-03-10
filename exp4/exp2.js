process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const https = require('https');

https.get('https://jsonplaceholder.typicode.com/posts/1', (res) => {
    let data = '';

    res.on('data', chunk => {
        data += chunk;
    });

    res.on('end', () => {
        console.log(data);
    });
}).on('error', err => {
    console.log(err.message);
});

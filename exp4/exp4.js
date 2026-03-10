const http = require('http');

http.createServer((req, res) => {
    console.log('Cookies:', req.headers.cookie);

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("cookies: "+req.headers.cookie);
    res.end('\nCheck console for cookies');
}).listen(3000);

console.log('Server running at http://localhost:3000');

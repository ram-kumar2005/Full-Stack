// Import required core modules
const http = require('http');
const fs = require('fs');
const path = require('path');

// Create an HTTP server
const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    // Read index.html from public folder
    fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  } else if (req.method === 'POST' && req.url === '/submit') {
    // Store user input into a file
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const userData = body.split('=')[1] + '\n';
      fs.appendFile('data.txt', userData, () => {
        res.writeHead(302, { 'Location': '/' });
        res.end();
      });
    });
  } else if (req.method === 'GET' && req.url === '/view') {
    // Read data using file system operations
    fs.readFile('data.txt', 'utf8', (err, data) => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(data);
    });
  }
});

// Start the server
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
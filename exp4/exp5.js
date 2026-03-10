const http = require('http');
const querystring = require('querystring');

const server = http.createServer((req, res) => {

    if (req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`
            <h3>Replace two or more 'a' with 'b'</h3>
            <form method="POST">
                <input type="text" name="input" required>
                <br><br>
                <button type="submit">Submit</button>
            </form>
        `);
        res.end();
    }

    if (req.method === 'POST') {
        let body = '';

        req.on('data', chunk => {
            body += chunk;
        });

        req.on('end', () => {
            let data = querystring.parse(body);
            let str = data.input;

            let result = str.replace(/a{2,}/g, 'b');

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(`
                <h3>Result</h3>
                <p><b>Input:</b> ${str}</p>
                <p><b>Output:</b> ${result}</p>
                <a href="/">Try Again</a>
            `);
        });
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});

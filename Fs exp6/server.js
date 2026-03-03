var net = require('net');

var server = net.createServer(function(connection) {
    console.log('--- Client connected ---');

    // Handle incoming data from the client
    connection.on('data', function(data) {
        console.log('Client says: ' + data.toString().trim());
    });

    // Read from Terminal (stdin) and send to client
    process.stdin.on('data', function(input) {
        connection.write(input);
    });

    connection.on('end', function() {
        console.log('--- Client disconnected ---');
        process.exit();
    });

    connection.on('error', function(err) {
        console.log('Error: ' + err.message);
    });
});

server.listen(8080, '127.0.0.1', function() {
    console.log('Server is listening on port 8080. Waiting for client...');
});

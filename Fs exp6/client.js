var net = require('net');

var client = net.connect({port: 8080, host: 'localhost'}, function() {
    console.log('--- Connected to Server ---');
    console.log('Type your message and press Enter to send.');
});

// Handle incoming data from the server
client.on('data', function(data) {
    console.log('Server says: ' + data.toString().trim());
});

// Read from Terminal (stdin) and send to server
process.stdin.on('data', function(input) {
    client.write(input);
});

client.on('end', function() {
    console.log('--- Disconnected from server ---');
    process.exit();
});

client.on('error', function(err) {
    console.log('Error: ' + err.message);
});

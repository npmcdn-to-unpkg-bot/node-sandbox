/*
 * A very simple HTTP server.
 */

var http = require('http');

var server = http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    
    res.end('Hello World\n');
});

// Capture the target host and port from environment variables.
var host = process.env.IP;
var port = process.env.PORT;

server.listen(port, host);

console.log('Server running on ' + port);
const http = require('http');
const net = require('net');
const url = require('url');

var homeserver = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end('ok');
});

homeserver.listen(8081);
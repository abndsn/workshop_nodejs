var http = require('http');
const server = http.createServer( (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.write('Hello World');
    res.end('Hello la formation!\n');
});


server.listen(3000, '127.0.0.1',(port, hostname) => {
    console.log( ' port: ' );
});
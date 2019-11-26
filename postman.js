var http = require('http');
const server = http.createServer( (req, res) =>{
    const url = req.url;
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
   // res.write('Hello World \n');
    //res.end('Hello la formation!\n');

    /*if(req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', ()=> {
            console.log(body);
            res.end('ok');
        });
    }*/

    if( url === '/about') {
        res.write('<h1>about us page</h1>');
        res.end();
    } else if (url === '/contact') {
        res.write('<h1>contact page</h1>');
        res.end();
    } else {
        res.write('Page index');
        res.end();
    }

    });

server.listen(3000);
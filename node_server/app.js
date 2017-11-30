// myServer
const http = require('http');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 6789;

let server = http.createServer(function (req, res){
    console.log('client request URL: ', req.url);

    if(req.url === '/') {   
        fs.readFile('index.html', 'utf8', function (errors, contents){
            if (errors) throw errors;
            console.log(contents);
            res.writeHead(200, {'Content-Type': 'text/html'}); 
            res.write(contents);  
            res.end();
        });
    } else {
    if(req.url === '/ninjas') {   
        fs.readFile('ninjas/ninjas.html', 'utf8', function (errors, contents){
            if (errors) throw errors;
            console.log(contents);
            res.writeHead(200, {'Content-Type': 'text/html'}); 
            res.write(contents);  
            res.end();
        });
    } else {
    if(req.url === '/dojos/new') {   
        fs.readFile('dojos/new/dojos.html', 'utf8', function (errors, contents){
            if (errors) throw errors;
            console.log(contents);
            res.writeHead(200, {'Content-Type': 'text/html'}); 
            res.write(contents);  
            res.end();
        });
    } else {
        res.writeHead(404);
        res.end('<h1>File not found!!!</h1>');

    }
}}
}).listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });

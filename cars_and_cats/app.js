//* myServer cars_and_cats *//
const http = require('http');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 7077;

let server = http.createServer(function (req, res){
    console.log('client request URL: ', req.url);

    if(req.url === '/cars') {   
        fs.readFile('views/cars.html', 'utf8', function (errors, contents){
            if (errors) throw errors;
            console.log(contents);
            res.writeHead(200, {'Content-Type': 'text/html'}); 
            res.write(contents);  
            res.end();
        });
    } else if(req.url === '/cats') {   
        fs.readFile('views/cats.html', 'utf8', function (errors, contents){
            if (errors) throw errors;
            console.log(contents);
            res.writeHead(200, {'Content-Type': 'text/html'}); 
            res.write(contents);  
            res.end();
        });
    } else if(req.url === '/cars/new') {   
        fs.readFile('views/cars_new.html', 'utf8', function (errors, contents){
            if (errors) throw errors;
            console.log(contents);
            res.writeHead(200, {'Content-Type': 'text/html'}); 
            res.write(contents);  
            res.end();
        });
    } else if(req.url === '/car1.jpeg') {   
        fs.readFile('images/car1.jpeg', function (errors, contents){
            if (errors) throw errors;
            res.writeHead(200, {'Content-type': 'image/jpeg'});
            res.write(contents);  
            res.end();
        });  
    } else if(req.url === '/car2.jpeg') { 
        fs.readFile('images/car2.jpeg', function (errors, contents){
            if (errors) throw errors;
            res.writeHead(200, {'Content-type': 'image/jpeg'});
            res.write(contents);  
            res.end();
        });  
    } else if(req.url === '/car3.jpeg') {   
        fs.readFile('images/car3.jpeg', function (errors, contents){
            if (errors) throw errors;
            res.writeHead(200, {'Content-type': 'image/jpeg'});
            res.write(contents);  
            res.end();
        });  
    } else if(req.url === '/car4.jpeg') {   
        fs.readFile('images/car4.jpeg', function (errors, contents){
            if (errors) throw errors;
            res.writeHead(200, {'Content-type': 'image/jpeg'});
            res.write(contents);  
            res.end();
        });  
    } else if(req.url === '/cat1.jpeg') {   
        fs.readFile('images/cat1.jpeg', function (errors, contents){
            if (errors) throw errors;
            res.writeHead(200, {'Content-type': 'image/jpeg'});
            res.write(contents);  
            res.end();
        }); 
    } else if(req.url === '/cat2.jpeg') {   
        fs.readFile('images/cat2.jpeg', function (errors, contents){
            if (errors) throw errors;
            res.writeHead(200, {'Content-type': 'image/jpeg'});
            res.write(contents);  
            res.end();
        }); 
    } else if(req.url === '/cat3.jpeg') {   
        fs.readFile('images/cat3.jpeg', function (errors, contents){
            if (errors) throw errors;
            res.writeHead(200, {'Content-type': 'image/jpeg'});
            res.write(contents);  
            res.end();
        }); 
    } else if(req.url === '/cat4.jpeg') {   
        fs.readFile('images/cat4.jpeg', function (errors, contents){
            if (errors) throw errors;
            res.writeHead(200, {'Content-type': 'image/jpeg'});
            res.write(contents);  
            res.end();
        });  
    } else if(req.url === '/stylesheets/style.css'){
            fs.readFile('stylesheets/style.css', 'utf8', function(errors, contents){
             res.writeHead(200, {'Content-type': 'text/css'});
             res.write(contents);
             res.end();
            })
     } else {
        res.writeHead(404);
        res.end('<h1>File not found!!!</h1>');
    }
}).listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });

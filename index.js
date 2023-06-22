const http = require('node:http');
const fs = require('node:fs');
const url = require('node:url');

const hostname = 'localhost';
const port = 8080;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    //TODO check URL path and serve associated file if it exists, else serve 404.html, maybe use if else statements using method that checks URL to serve the proper page
    if (req.url == '/index.html') {
        //retrieve associated file and serve it
        fs.readFile('./routes/index.html', (err, data) => {
            if (err) {
                throw err
            }
            res.write('data')
        });
    } else if (req.url == '/about.html') {
        //retrieve associated file and serve it
        fs.readFile('./routes/about.html', (err, data) => {
            if (err) {
                throw err
            }
            res.write(data)
        });
    } else if (req.url == '/contact.html') {
        //retrieve associated file and serve it
        fs.readFile('./routes/contact.html', (err, data) => {
            if (err) {
                throw err
            }
            res.write(data)
        });
    } else {
        //retrieve associated file and serve it
        fs.readFile('./routes/404.html', (err, data) => {
            if (err) {
                throw err
            }
            res.write(data)
        });
    }
    res.end();
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
const http = require('node:http');
const fs = require('node:fs');
const url = require('node:url');

const hostname = 'localhost';
const port = 8080;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    if (req.url == '/' || req.url == '/index.html') {
        fs.readFile('./routes/index.html', (err, data) => {
            if (err) {
                throw err
            }
            res.write(data)
            res.end();
        });
    } else if (req.url == '/about.html') {
        fs.readFile('./routes/about.html', (err, data) => {
            if (err) {
                throw err
            }
            res.write(data)
            res.end();
        });
    } else if (req.url == '/contact.html') {
        fs.readFile('./routes/contact-me.html', (err, data) => {
            if (err) {
                throw err
            }
            res.write(data)
            res.end();
        });
    } else {
        fs.readFile('./routes/404.html', (err, data) => {
            if (err) {
                throw err
            }
            res.write(data)
            res.end();
        });
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
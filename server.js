// server.js
const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '0.0.0.0'; // Luistert op alle IP's
const port = 8080;

const server = http.createServer((req, res) => {
    console.log('Request voor:', req.url);
    if (req.url === '/' || req.url === '/index.html') {
        // Lees de HTML-bestand en stuur het terug
        const filePath = path.join(__dirname, 'index.html');
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end('Fout bij het laden van de pagina.');
            } else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                res.end(data);
            }
        });
    } else {
        // Voor andere URL's, geef 404
        res.statusCode = 404;
        res.end('Pagina niet gevonden.');
    }
});

server.listen(port, hostname, () => {
    console.log(`Server draait op http://${hostname}:${port}/`);
});
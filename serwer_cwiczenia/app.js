const http = require('http');
const fs = require('fs');
const path = require('path');

const portoslaw = process.env.PORT || 2006;

http.createServer((zapyt, odp) => {
    // Obsługa pliku CSS w folderze 'motywacja_artykul'
    if (zapyt.url === 'motywacja_artykul/styl_sukces.css') {
        const cssPath = path.join(__dirname, 'motywacja_artykul', 'styl_sukces.css');
        fs.readFile(cssPath, (err, css) => {
            if (err) {
                odp.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});
                odp.end('<h1>Nie znaleziono pliku CSS</h1>');
            } else {
                odp.writeHead(200, {'Content-Type': 'text/css; charset=utf-8'});
                odp.end(css);
            }
        });
        return; // Zatrzymujemy dalsze przetwarzanie
    }

    // Obsługa stron HTML
    switch (zapyt.url) {
        case '/':
            odp.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
            odp.write(`<h2>Witaj ziomo na serwerze Bartolomea</h2>`);
            odp.end('Wysyłam dane... (funkcja end())');
            break;

        case '/jakOsiagnacSukces':
            const filePath = path.join(__dirname, "motywacja_artykul", "jak_sukces.html");
            fs.readFile(filePath, (err, page) => {
                if (err) {
                    odp.writeHead(500, {'Content-Type': 'text/html; charset=utf-8'});
                    odp.end('<h1>Nie udało się pobrać pliku</h1>');
                    console.log('Błąd przy odczycie pliku:', err);
                } else {
                    odp.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
                    odp.end(page);
                }
            });
            break;

        default:
            odp.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});
            odp.write('<h1>Nie znaleziono strony</h1>');
            odp.end();
            break;
    }
}).listen(portoslaw, '127.0.0.1', () => {
    console.log(`Nasłuchiwanie na porcie ${portoslaw}`);
});

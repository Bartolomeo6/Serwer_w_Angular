//npm i nodemon -g -> aktualizacja danych na serwerze
// nodemon app.js

const http = require('http');
const server = http.createServer(
    (req,res) => {
        console.log(req.statusCode);
        res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'})
        res.write("<h2>Que tal amigo, soy Bartolomeo!</h2>")
        res.end("To już jest koniec") // zakończ i wyślij, bez end() nie zadziała
    }
)

// port i IP (to też jest ważne)
server.listen(3000, '127.0.0.1')

// PUT - aktualizacja
// DELETE - usuwanie

const http = require('http');

http.createServer((req, res) => {
if (req.url === '/html') {
res.writeHead(200, {'Content-Type': 'text/html'});
res.end('<h1>Hello HTML</h1>');
} else if (req.url === '/json') {
res.writeHead(200, {'Content-Type': 'application/json'});
res.end(JSON.stringify({message: 'Hello JSON'}));
} else {
res.writeHead(200, {'Content-Type': 'text/plain'});
console.log("Text is Aayega Bhai")
res.end('Hello Text');

}
}).listen(3000);
let http = require('http');
let hostname = '127.0.0.1';
let port = 3000;

http.createServer((request, response) => {

}).listen(port, hostname);
console.log(`Server running at ${hostname}:${port}`);
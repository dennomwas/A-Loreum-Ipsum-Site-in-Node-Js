const http = require('http');

// local imports
const route = require('./routes.js');

//variables
const hostname = '127.0.0.1';
const port = '3000';

http.createServer((request, response) => {
    route.home(request, response);
}).listen(port, hostname);
console.log(`Server running at ${hostname}:${port}`);
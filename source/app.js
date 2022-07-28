const http = require('http');

const server = http.createServer();

const httpRequestListener = function(request, response) {
    console.log(`request object : ${request}`)
    response.writeHead(200, {"Content-Type": "application/json"});
    response.end(JSON.stringify({message: "Hello World!"}));
}

server.on("request", httpRequestListener);

server.listen(3000, 'node', function() {
    console.log('Listening to request on port 3000');
});
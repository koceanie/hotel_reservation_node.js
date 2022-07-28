const http = require('http');

const server = http.createServer();

const users = [
  {
    id: 1,
    name: "Rebekah Johnson",
    email: "Glover12345@gmail.com",
    password: "123qwe",
  },
  {
    id: 2,
    name: "Fabian Predovic",
    email: "Connell29@gmail.com",
    password: "password",
  },
]

const httpRequestListener = function(request, response) {
    console.log(`request object : ${request}`)
    const { url, method } = request
    if (method === 'GET') {
        if (url === '/api/ping') {
            response.writeHead(200, {"Content-Type": "application/json"});
            response.end(JSON.stringify({message: "pong pong"}));
        }
    } 
    
    else if (method === 'POST') {
        if (url === '/api/users') {
            let body = '';
            console.log("body1", body)
            request.on('data', (data) => {body += data});

            request.on('end', () => {
                console.log("body2", body)
                const user = JSON.parse(body);

                users.push({
                    id : user.id,
                    name : user.name,
                    email : user.email,
                    password : user.password
                })
                console.log(users)
            response.end(JSON.stringify({message : 'ADDED'}));
            })
        }
    }
};

server.on("request", httpRequestListener);

server.listen(3000, 'node', function() {
    console.log('Listening to request on port 3000');
});

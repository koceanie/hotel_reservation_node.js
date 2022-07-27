require("dotenv").config();

const http = require("http");
const server = http.createServer((request, response) => {
  const _url = request.url;
  const fullUrl = new URL("http://localhost:3000" + _url);
  const pathName = fullUrl.pathname;
  
  if (pathName === "/") {
    response.writeHead(200, { "Content-Type": "text/html;charset= utf-8" });
    response.end(`<h1>NIENIENIENIENIENIENIE</<h1>`);
  }
});

server.listen(3000, () => {

  console.log("Node.js is running now");
});
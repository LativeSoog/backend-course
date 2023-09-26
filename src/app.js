const http = require("http");
const getUsers = require("./modules/users-module");

const server = http.createServer((request, response) => {
  const url = new URL(request.url, "http://127.0.0.1");
  const params = url.searchParams;

  if (params.toString() !== "") {
    if (params.has("hello")) {
      const name = params.get("hello");

      if (name) {
        response.writeHead(200, { "Content-Type": "text/plain" });
        response.end(`Hello, ${name}!`);
        return;
      } else {
        response.writeHead(400, { "Content-Type": "text/plain" });
        response.end("Enter a name");
        return;
      }
    } else {
      response.writeHead(500);
      response.end();
      return;
    }
  }

  if (url.pathname === "/users") {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(getUsers());
    return;
  }

  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Hello, World!");
  return;
});

server.listen(3003, () => console.log("Server is running - http://127.0.01:3003"));

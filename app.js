const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-type", "text/html");
  res.end("Hello World!");
});

server.listen(8080, () => {
  console.log("Server running at 8080");
});

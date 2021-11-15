const http = require("http");

const server = http.createServer();

server.on("response", (req, res) => {
  res.end("Welcome");
});

const port = 5000;
server.listen(port);

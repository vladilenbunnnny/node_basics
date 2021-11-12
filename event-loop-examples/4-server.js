const http = require("http");

const server = http.createServer((req, res) => {
  console.log("New request");
  res.end("Hello World");
});

const port = 5000;
server.listen(port, () => {
  console.log(`Server is listening on Port: ${port}`);
});

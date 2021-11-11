const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page!!!");
  } else if (req.url === "/about") {
    res.end("This is out ABOUT page");
  } else {
    res.end(`
  <h1>Opps!!</h1>
  <p>This page doesn't exist</p>
  <a href="/">Home</a>
  `);
  }
});

server.listen(7000);

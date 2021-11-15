const http = require("http");

const server = http.createServer((req, res) => {
  console.log("User hit the server");
  const url = req.url;
  if (url == "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>Hey</h1>");
    res.end();
    console.log(req.statusCode);
  } else if (url === "/amina") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>Amina</h1>");
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>Oops!</h1>");
    res.end();
  }
});

const port = 5000;
server.listen(port);

const http = require("http");
const { readFileSync } = require("fs");

// get all files
const homePage = readFileSync("./navbar-app/index.html");
const homeStyles = readFileSync("./navbar-app/styles.css");
const homeImage = readFileSync("./navbar-app/logo.svg");
const homeLogic = readFileSync("./navbar-app/browser-app.js");

const server = http.createServer((req, res) => {
  console.log("User hit the server");
  const url = req.url;
  if (url == "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  }
  //STYLES
  else if (url === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(homeStyles);
    res.end();
  }
  //LOGO
  else if (url === "/logo.svg") {
    res.writeHead(200, { "content-type": "svg+xml" });
    res.write(homeImage);
    res.end();
  }
  //LOGIC
  else if (url === "/browser-app.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(homeLogic);
    res.end();
  }
  //AMINA
  else if (url === "/amina") {
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

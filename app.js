const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home Page");
  } else if (req.url === "/about") {
    ///Blocking code (nested for loop)
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        console.log(`Var "i" is ${i} and var "j" is ${j}`);
      }
    }
    res.end("About Us");
  } else {
    res.end(`
    <h1 style="color:red;">Ooops</h1>
    <h3>This page doesn't seem to exist...</h3>
    `);
  }
});

const port = 5000;
server.listen(port, () => {
  console.log(`Server is listening on Port: ${port}`);
});

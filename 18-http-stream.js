const http = require("http");
const { readFileSync, createReadStream } = require("fs");

console.log("stream example");

const server = http.createServer((req, res) => {
  // const text = readFileSync("./content/big.txt", "utf8");
  // res.end(text);

  const fileStream = createReadStream("./content/big.txt", "utf8");
  fileStream.on("open", () => {
    fileStream.pipe(res);
  });
  fileStream.on("error", err => {
    res.end(err);
  });
});

server.listen(5000);

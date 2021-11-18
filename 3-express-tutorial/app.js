const express = require("express");
const app = express();
const logger = require("./logger");
const auth = require("./authorize");

// req => middleware => res

//app.use(logger);
app.use([logger, auth]);

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/api/products", (req, res) => {
  res.send("Products");
});

app.get("/api/items", (req, res) => {
  res.send("Items");
});
const port = 5000;
app.listen(port, () => {
  console.log(`Server on ${port}`);
});

const express = require("express");

const app = express();
const { products, people } = require("./data");

app.get("/", (req, res) => {
  res.status(200).send(`<h1>Home page</h1><a style="margin-right: 4rem" href="/api/products">Products</a><a href="/api/people">People</a>`);
});

app.get("/api/products", (req, res) => {
  const productsFiltered = products.map(product => {
    const { id, name, image } = product;
    return { id, name, image };
  });

  res.json(productsFiltered);
});

app.get("/api/products/:productID", (req, res) => {
  console.log(req.params);
  const { productID } = req.params;
  const singleProducts = products.find(product => product.id === Number(productID));

  res.json(singleProducts);
});

app.get("/api/people", (req, res) => {
  res.status(200).json(people);
});
const port = 5000;
app.listen(port, () => {
  console.log(`Server is on port ${port}`);
});

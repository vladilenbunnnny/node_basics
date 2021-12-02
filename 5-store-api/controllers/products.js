const ProductsModel = require("../models/products");

const getAllProducts = async (req, res) => {
  // throw new Error("testing errors");
  console.log(";;;;;;;;;;;;;;----;;;;;;;;;;");
  const { featured, company, name, sort, select } = req.query;

  const queryObject = {};
  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }
  if (company) {
    queryObject.company = company;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }
  //console.log(queryObject);
  let results = ProductsModel.find(queryObject);
  if (sort) {
    console.log(sort);
    const sortList = sort.split(",").join(" ");
    results = results.sort(sortList);
  } else {
    result = result.sort("createdAt");
  }
  if (select) {
    const selectList = select.split(",").join(" ");
    results = results.select(selectList);
  }
  const products = await results;

  res.status(200).json({ products, ngHits: products.length });
};

const getSingleProduct = async (req, res) => {
  res.status(200).json({ msg: "One products" });
};

const createSingleProduct = async (req, res) => {
  res.status(200).json({ msg: "Single prouct created" });
};
const updateSingleProduct = async (req, res) => {
  res.status(200).json({ msg: "update product" });
};

const deleteSingleProduct = async (req, res) => {
  res.status(200).json({ msg: "Delete single product" });
};

module.exports = { getAllProducts, createSingleProduct, getSingleProduct, updateSingleProduct, deleteSingleProduct };

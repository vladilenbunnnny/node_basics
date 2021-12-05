const ProductsModel = require("../models/products");

const getAllProducts = async (req, res) => {
  // throw new Error("testing errors");
  console.log(";;;;;;;;;;;;;;----;;;;;;;;;;");

  const { featured, company, name, sort, select, numericFilters } = req.query;

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

  let results = ProductsModel.find(queryObject);

  ////SORTING
  if (sort) {
    //console.log(sort);
    const sortList = sort.split(",").join(" ");
    results = results.sort(sortList);
  } else {
    results = results.sort("createdAt");
  }
  ////SELECTING FIELDS
  if (select) {
    const selectList = select.split(",").join(" ");
    results = results.select(selectList);
  }
  ////LIMIT and PAGE and SKIP
  const limit = Number(req.query.limit) || 7;
  const page = Number(req.query.page) || 1;
  const skip = (page - 1) * limit;
  results = results.skip(skip).limit(limit);

  //RANGE
  if (numericFilters) {
    console.log(numericFilters);
    const operatorMap = {
      ">": "$gt",
      ">=": "$gte",
      "=": "$eq",
      "<": "$lt",
      "<=": "$lte",
    };
    const options = ["price", "rating"];
    const regEx = /\b(>|>=|=|<|<=)\b/g;
    let filters = numericFilters.replace(regEx, match => `-${operatorMap[match]}-`);
    console.log(filters);

    filters = filters.split(",").forEach(item => {
      const [filterName, filterOperator, filterNumber] = item.split("-");
      if (options.includes(filterName)) {
        queryObject[filterName] = { [filterOperator]: Number(filterNumber) };

        results = ProductsModel.find(queryObject);
      }
    });
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

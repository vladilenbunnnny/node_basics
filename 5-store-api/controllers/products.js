const getAllProducts = async (req, res) => {
  // throw new Error("testing errors");
  res.status(200).json({ msg: "proucts" });
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

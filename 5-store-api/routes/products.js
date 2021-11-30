const express = require("express");

const router = express.Router();

const { getAllProducts, getSingleProduct, updateSingleProduct, deleteSingleProduct, createSingleProduct } = require("../controllers/products");

router.route("/").get(getAllProducts).post(createSingleProduct);
router.route("/:id").get(getSingleProduct).patch(updateSingleProduct).delete(deleteSingleProduct);

module.exports = router;

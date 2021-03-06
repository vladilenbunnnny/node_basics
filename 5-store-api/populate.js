require("dotenv").config();
const connectDB = require("./db/connect");
const productsModel = require("./models/products");

jsonProducts = require("./products.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await productsModel.deleteMany();
    await productsModel.create(jsonProducts);
    console.log("Success");
    process.exit(0);
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};

start();

require("dotenv").config();
require("express-async-errors");
//async error candler

const express = require("express");
const connectDB = require("./db/connect");
const router = require("./routes/products");

const app = express();

const errorHandlerMiddleware = require("./middleware/errorMiddleware");
const notFound = require("./middleware/not-found");

//Middleware
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send("<h1>Store API</h1><a href='/api/v1/products'>products route</a>");
});

app.use("/api/v1/products", router);
//products routes

//Error middleware
app.use(notFound);
app.use(errorHandlerMiddleware);

//server

port = process.env.PORT || 8080;

const start = async () => {
  try {
    //connect DB
    await connectDB(process.env.MONGO_URI);
    console.log("DB CONNECTED");
    app.listen(port, () => {
      console.log(`Port on ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();

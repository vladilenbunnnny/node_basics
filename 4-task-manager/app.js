const express = require("express");
const app = express();
////DB
const connectDB = require("./db/connect");
///ENV
require("dotenv").config();
//My middleware exports
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

//Import routes
const taskRoutes = require("./routes/tasks");

//Middleware
app.use(express.static("./public"));
app.use(express.json());

//ROUTES

app.use("/api/v1/tasks", taskRoutes);

app.use(notFound);

app.use(errorHandlerMiddleware);

//SERVER
const port = 8080;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI).then(() => {
      console.log("Connected to MongoDB...");
    });
    app.listen(port, () => {
      console.log(`Server on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();

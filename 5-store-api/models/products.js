const mongoose = require("mongoose");
const productsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name must be provided"],
    maxLength: 20,
    trim: true,
  },
  price: {
    type: Number,
    required: [true, "price must be provided"],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    enum: { values: ["Ikea", "liddy", "caressa", "marcos"], message: `{VALUE} is not supported` },
  },
});

const productsModel = mongoose.model("Products", productsSchema);

module.exports = productsModel;

const mongoose = require("mongoose");

const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide name"],
    minlenght: 3,
    maxlength: 50,
  },
  email: {
    type: String,
    required: [true, "Please provide email"],
    match: [regEx, "Please provide valid email"],
    minlenght: 6,
    maxlength: 50,
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please, provide your password"],
    minlenght: 4,
  },
});

module.exports = mongoose.model("User", UserSchema);

const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError } = require("../errors");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const register = async (req, res) => {
  try {
    const user = await User.create({ ...req.body });
    //const token = jwt.sign({ userID: user._id, name: user.name }, process.env.JWT_SECRET, { expiresIn: "30d" });
    //console.log(token);
    const token = user.createJWT();
    res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token });
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
  res.send("Register login");
};

module.exports = { register, login };

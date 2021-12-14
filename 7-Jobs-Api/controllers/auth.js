const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError } = require("../errors");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  try {
    const user = await User.create({ ...req.body });
    res.status(StatusCodes.CREATED).json({ user });
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
  res.send("Register login");
};

module.exports = { register, login };

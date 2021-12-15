const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../errors");

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
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("Please, provide email and password");
  }

  const user = await User.findOne({ email });
  if (!user) {
    throw new UnauthenticatedError("Invalid email or password");
  }
  const isPasswordCorrect = await user.comparePasswords(password);
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError("Please, provide correct password");
  }
  console.log("success");
  const token = user.createJWT();
  res.status(StatusCodes.OK).json({ user: { name: user.name }, token });

  //res.send("Register login");
};

module.exports = { register, login };

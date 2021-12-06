const jwt = require("jsonwebtoken");
require("dotenv").config();
const { BadRequest, UnathenticatedError } = require("../errors");

const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new BadRequest("Please provide email and password");
  }
  //Just for demo purposes (normally we get ID from DB):
  const id = new Date().getDate();

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, { expiresIn: "30d" });

  //To see if the value are presented
  //1. Mongoose checks is the value is not present
  //2. Set up addditional layer of validation with Joi package
  //3. Checking for this values over here
  console.log(username, password);
  res.status(200).json({ msg: "user created", token });
};

const dashboard = async (req, res) => {
  try {
    const luckyNumber = Math.floor(Math.random() * 100);
    //console.log(`${JSON.stringify(req.user)}`);
    res.status(200).json({ msg: `Hello, ${req.user.username}`, secret: `Here is your authorized data, your lucky number is ${luckyNumber}` });
  } catch (error) {
    throw new UnathenticatedError("Prohibited");
  }
};

module.exports = { login, dashboard };

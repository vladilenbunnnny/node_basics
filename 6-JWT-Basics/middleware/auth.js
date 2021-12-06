const jwt = require("jsonwebtoken");
require("dotenv").config();
const { UnathenticatedError } = require("../errors");

const authenticationMiddleWare = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new UnathenticatedError("Not authorized!");
  }

  const token = authHeader.split(" ")[1];
  console.log(`-----  ${token}  =====`);
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id, username } = decoded;

    req.user = { id, username };
    //console.log(`-----  ${JSON.stringify(req.user)}  =====`);
    next();
  } catch (error) {
    throw new UnathenticatedError("Prohibited", 401);
  }
};

module.exports = authenticationMiddleWare;

const express = require("express");
const router = express.Router();

////////LOGIN
router.post("/", (req, res) => {
  const { name } = req.body;
  const nameFormatted = name.charAt(0).toUpperCase() + name.slice(1);
  if (!name) {
    res.status(401).send("No data entered");
  } else {
    res.status(200).send(`Welcome ${nameFormatted}`);
  }
  console.log(name);
});

module.exports = router;

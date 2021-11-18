const authorize = (req, res, next) => {
  console.log("authorize");
  console.log(req.query);
  const { user } = req.query;
  console.log(user);
  if (user === "vlad") {
    console.log("Yes");
    req.user = { name: "vlad", id: 7 };
    next();
  } else {
    res.status(401).send("Nope");
  }
};

module.exports = authorize;

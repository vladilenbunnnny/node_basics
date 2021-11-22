const express = require("express");
const router = express.Router();

////////LOGIN
router.post("/", (req, res) => {
  const { name } = req.body;
  const nameFormatted = name.charAt(0).toUpperCase() + name.slice(1);

  if (name) {
    console.log(nameFormatted);
    return res.status(200).send(`Welcome ${nameFormatted}`);
  }

  res.status(401).send("No data entered");
});

module.exports = router;

/////////------APP JS NOW LOOKS LIKE THIS:::::::--------//////////
// const express = require("express");
// const app = express();
// const morgan = require("morgan");

// const peopleRoutes = require("./routes/people");
// const authRoutes = require("./routes/auth");

// //static assets
// app.use(morgan("tiny"));
// app.use(express.static("./methods-public"));

// //parse from data
// app.use(express.urlencoded({ extended: false }));
// //parse json
// app.use(express.json());

// /////////------ROUTES--------//////////
// //1) people router:
// app.use("/api/people", peopleRoutes);

// //2) auth router:
// app.use("/login", authRoutes);

// /////////------SERVER LISTEN--------//////////
// port = 5000;
// app.listen(port, () => {
//   console.log(`Server on ${port}`);
// });

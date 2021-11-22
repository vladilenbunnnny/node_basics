const express = require("express");
const app = express();
const morgan = require("morgan");
let { people } = require("./data");

//static assets
app.use(morgan("tiny"));
app.use(express.static("./methods-public"));

//parse from data
app.use(express.urlencoded({ extended: false }));
//parse json
app.use(express.json());

//GETS
app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

//POSTS
app.post("/api/people", (req, res) => {
  const { name } = req.body;

  if (!name) {
    res.status(401).json({ success: false, msg: "Empty" });
  }

  res.status(201).json({ success: true, person: name, msg: "Created" });
});

app.post("/api/postman/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    res.status(401).json({ sucess: false, msg: "no input" });
  }
  res.status(200).send({ sucess: true, data: [...people, name] });
});

app.post("/login", (req, res) => {
  const { name } = req.body;
  const nameFormatted = name.charAt(0).toUpperCase() + name.slice(1);
  if (!name) {
    res.status(401).send("No data entered");
  } else {
    res.status(200).send(`Welcome ${nameFormatted}`);
  }
  console.log(name);
});
//PUTS
app.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const person = people.find(person => person.id === Number(id));

  if (!person) {
    return res.status(404).json({ sucess: true, msg: `No person with id ${id}` });
  }

  const newPeople = people.map(person => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });

  res.status(200).json({ success: true, data: newPeople });
});

//DELETE
app.delete("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const person = people.find(person => person.id === Number(id));

  if (!person) {
    return res.status(404).json({ sunccess: false, msg: `No person with id ${id}` });
  }

  const newPeople = people.filter(person => person.id !== Number(id));

  res.status(200).json({ success: true, data: newPeople });
});
port = 5000;
app.listen(port, () => {
  console.log(`Server on ${port}`);
});

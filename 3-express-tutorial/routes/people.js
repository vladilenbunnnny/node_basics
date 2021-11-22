const express = require("express");
const router = express.Router();
let { people } = require("../data");

//GETS
router.get("/", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

//POSTS
router.post("/", (req, res) => {
  const { name } = req.body;

  if (!name) {
    res.status(401).json({ success: false, msg: "Empty" });
  }

  res.status(201).json({ success: true, person: name, msg: "Created" });
});

router.post("/postman", (req, res) => {
  const { name } = req.body;
  if (!name) {
    res.status(401).json({ sucess: false, msg: "no input" });
  }
  res.status(200).send({ sucess: true, data: [...people, name] });
});

//PUTS
router.put("/:id", (req, res) => {
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
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  const person = people.find(person => person.id === Number(id));

  if (!person) {
    return res.status(404).json({ sunccess: false, msg: `No person with id ${id}` });
  }

  const newPeople = people.filter(person => person.id !== Number(id));

  res.status(200).json({ success: true, data: newPeople });
});

module.exports = router;

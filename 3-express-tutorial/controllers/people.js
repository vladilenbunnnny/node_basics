let { people } = require("../data");

const getPeople = (req, res) => {
  res.status(200).json({ success: true, data: people });
};

const createPerson = (req, res) => {
  const { name } = req.body;

  if (!name) {
    res.status(401).json({ success: false, msg: "Empty" });
  }

  res.status(201).json({ success: true, person: name, msg: "Created" });
};

const createPostman = (req, res) => {
  const { name } = req.body;
  if (!name) {
    res.status(401).json({ sucess: false, msg: "no input" });
  }
  res.status(200).send({ sucess: true, data: [...people, name] });
};

const editPerson = (req, res) => {
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
};

const deletePerson = (req, res) => {
  const { id } = req.params;

  const person = people.find(person => person.id === Number(id));

  if (!person) {
    return res.status(404).json({ sunccess: false, msg: `No person with id ${id}` });
  }

  const newPeople = people.filter(person => person.id !== Number(id));

  res.status(200).json({ success: true, data: newPeople });
};

module.exports = {
  getPeople,
  createPerson,
  createPostman,
  editPerson,
  deletePerson,
};

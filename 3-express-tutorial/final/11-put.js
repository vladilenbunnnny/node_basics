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

port = 5000;
app.listen(port, () => {
  console.log(`Server on ${port}`);
});

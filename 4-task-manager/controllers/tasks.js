//Schema model
const Task = require("../models/Task");

//Write controllers functions
const getTasks = (req, res) => {
  res.status(200).send("All tasks");
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
    //console.log(`Start---: ${res}  :---End`);
  } catch (error) {
    res.status(400).send(error.errors.name.message);
    console.log(error.message);
  }
};

const getSingleTask = (req, res) => {
  res.status(200).json({ id: req.params.id });
};

const updateTask = (req, res) => {
  res.status(200).json({
    id: req.params.id,
  });
};

const deleteTask = (req, res) => {
  res.status(200).send(`Task ${req.params.id} deleted`);
};

//Export controllers
module.exports = {
  getTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};

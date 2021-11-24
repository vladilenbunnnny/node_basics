//Import data

//Write controllers functions
const getTasks = (req, res) => {
  res.status(200).send("All tasks");
};

const createTask = (req, res) => {
  res.status(200).json(req.body);
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

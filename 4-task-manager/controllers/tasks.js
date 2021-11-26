//Schema model
const Task = require("../models/Task");

//Write controllers functions
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
    //Options:
    //res.status(200).json({ tasks, amount: tasks.length });
    //res.status(200).json({ success: true, data: { tasks, bnHits: tasks.length } });
    //res.status(200).json({ status: "success", data: { tasks, bnHits: tasks.length } });
  } catch (e) {
    res.status(404).json({ msg: e });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
    //console.log(`Start---: ${res}  :---End`);
  } catch (error) {
    res.status(500).json({ msg: error.errors.name.message });
    console.log(error.message);
  }
};

const getSingleTask = async (req, res) => {
  try {
    //const receivedTask = await Task.findById(req.params.id);
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
      return res.status(404).json({ msg: `No task with ID ${taskID}` });
    } else {
      res.status(200).json({ task });
    }
    //res.status(200).json({ id: req.params.id });
    //console.log({ id: req.params.id });
  } catch (e) {
    res.status(500).json({ msg: e.message });
  }
};

const updateTask = async (req, res) => {
  console.log(req.body);
  try {
    const { id: taskID } = req.params;
    const query = { _id: taskID };
    const data = req.body;
    const task = await Task.findOneAndUpdate(query, data, { new: true, runValidators: true });
    res.status(200).json({ task });

    // console.log({ taskUpdated });
  } catch (e) {}
  res.status(200).json({
    id: req.params.id,
  });
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
      return res.status(404).json({ msg: `No task to delete with ID: ${taskID}` });
    }

    //res.status(200).json({ taskDeleted });
    // or
    //res.status(200).send()
    // or
    res.status(200).json({ task: null, status: "success" });
  } catch (e) {
    res.status(500).json({ msg: e });
  }
};

//Export controllers
module.exports = {
  getTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};

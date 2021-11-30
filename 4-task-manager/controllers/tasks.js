//Schema model
const Task = require("../models/Task");
//async Wrapper
const asyncWrapper = require("../middleware/async");
//Custom error
const { createCustomError } = require("../errors/custom-error");
//Write controllers functions

// const getTasks = async (req, res) => {
//   try {
//     const tasks = await Task.find({});
//     res.status(200).json({ tasks });
//     //Options:
//     //res.status(200).json({ tasks, amount: tasks.length });
//     //res.status(200).json({ success: true, data: { tasks, bnHits: tasks.length } });
//     //res.status(200).json({ status: "success", data: { tasks, bnHits: tasks.length } });
//   } catch (e) {
//     res.status(404).json({ msg: e });
//   }
// };

const getTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

// const createTask = async (req, res) => {
//   try {
//     const task = await Task.create(req.body);
//     res.status(201).json({ task });
//     //console.log(`Start---: ${res}  :---End`);
//   } catch (error) {
//     res.status(500).json({ msg: error.errors.name.message });
//     console.log(error.message);
//   }
// };

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

// const getSingleTask = async (req, res) => {
//   try {
//     //const receivedTask = await Task.findById(req.params.id);
//     const { id: taskID } = req.params;
//     const task = await Task.findOne({ _id: taskID });
//     if (!task) {
//       return res.status(404).json({ msg: `No task with ID ${taskID}` });
//     } else {
//       res.status(200).json({ task });
//     }
//     //res.status(200).json({ id: req.params.id });
//     //console.log({ id: req.params.id });
//   } catch (e) {
//     res.status(500).json({ msg: e.message });
//   }
// };

const getSingleTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });
  if (!task) {
    // const error = new Error("not Found");
    // error.status = 404;
    // return next(error);
    //// or
    //return res.status(404).json({ msg: `No task with ID ${taskID}` });
    // or:
    return next(createCustomError(`No task with ID ${taskID}`, 404));
  } else {
    res.status(200).json({ task });
  }
});

// const updateTask = async (req, res) => {
//   console.log(req.body);
//   try {
//     const { id: taskID } = req.params;
//     const query = { _id: taskID };
//     const data = req.body;
//     const task = await Task.findOneAndUpdate(query, data, { new: true, runValidators: true });
//     res.status(200).json({ task });

//     // console.log({ taskUpdated });
//   } catch (e) {}
//   res.status(200).json({
//     id: req.params.id,
//   });
// };

const updateTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const query = { _id: taskID };
  const data = req.body;
  const task = await Task.findOneAndUpdate(query, data, { new: true, runValidators: true });
  if (!task) {
    return next(createCustomError(`No task with id ${taskID}`, 404));
  }
  res.status(200).json({ task });
});

// const deleteTask = async (req, res) => {
//   try {
//     const { id: taskID } = req.params;
//     const task = await Task.findOneAndDelete({ _id: taskID });
//     if (!task) {
//       return res.status(404).json({ msg: `No task to delete with ID: ${taskID}` });
//     }

//     //res.status(200).json({ taskDeleted });
//     // or
//     //res.status(200).send()
//     // or
//     res.status(200).json({ task: null, status: "success" });
//   } catch (e) {
//     res.status(500).json({ msg: e });
//   }
// };

const deleteTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });
  if (!task) {
    return next(createCustomError(`No task to delete with ID: ${taskID}`, 404));
  }
  res.status(200).json({ task: null, status: "success" });
});

//Export controllers
module.exports = {
  getTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};

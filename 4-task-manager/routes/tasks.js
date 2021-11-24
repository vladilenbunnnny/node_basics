const express = require("express");
const router = express.Router();
const { getTasks, createTask, getSingleTask, updateTask, deleteTask } = require("../controllers/tasks");

//REQUIRE THE CONTROLLES FUNCTIONS

//SET ROUTER.ROUTE() for different urls
router.route("/").get(getTasks).post(createTask);
router.route("/:id").get(getSingleTask).patch(updateTask).delete(deleteTask);

//export the router
module.exports = router;

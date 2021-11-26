const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    // required:true
    required: [true, "must provide a name"],
    trim: true,
    // uppercase: true,
    maxlength: [20, "name can not be more that 20 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Task", TaskSchema);

const Task = require("../models/Task");

// Get All Tasks
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create Task
exports.createTask = async (req, res) => {
  try {
    const task = await Task.create({
      title: req.body.title,
    });

    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update Task
exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(task);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete Task
exports.deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);

    res.json({
      message: "Task deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
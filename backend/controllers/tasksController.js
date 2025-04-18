import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { readData, writeData } from "../utils/fileHandler.js";


const filePath = path.join(__dirname, "../data/tasks.json");

exports.getAllTasks = async (req, res) => {
  const tasks = await readData(filePath);
  res.json(tasks);
};

exports.createTask = async (req, res) => {
  const { id, title, description, status } = req.body;
  const tasks = await readData(filePath);
  tasks[status].push({ id, title, description, status });
  await writeData(filePath, tasks);
  res.status(201).json({ message: "Task created" });
};

exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const { from, to } = req.body;

  const tasks = await readData(filePath);
  const taskIndex = tasks[from].findIndex((t) => t.id.toString() === id);
  if (taskIndex === -1) return res.status(404).json({ message: "Not found" });

  const task = tasks[from].splice(taskIndex, 1)[0];
  task.status = to;
  tasks[to].push(task);
  await writeData(filePath, tasks);
  res.json({ message: "Task moved" });
};

exports.deleteTask = async (req, res) => {
  const { id } = req.params;
  const tasks = await readData(filePath);
  let deleted = false;

  for (let key in tasks) {
    const index = tasks[key].findIndex((t) => t.id.toString() === id);
    if (index !== -1) {
      tasks[key].splice(index, 1);
      deleted = true;
      break;
    }
  }

  if (!deleted) return res.status(404).json({ message: "Not found" });

  await writeData(filePath, tasks);
  res.json({ message: "Task deleted" });
};
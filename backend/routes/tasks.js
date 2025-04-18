import express from "express";
import { readData, writeData } from "../utils/fileHandler.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const data = await readData();
  if (!data) return res.status(500).json({ message: "Failed to load tasks" });
  res.json(data);
});

router.post("/", async (req, res) => {
  const { id, title, description, status } = req.body;

  const data = await readData();
  if (!data) return res.status(500).json({ message: "Failed to load tasks" });

  const newTask = { id, title, description, status };
  data[status].push(newTask);

  await writeData(data);
  res.status(201).json(newTask);
});

router.put("/:id", async (req, res) => {
  const { from, to } = req.body;
  const { id } = req.params;

  const data = await readData();
  if (!data) return res.status(500).json({ message: "Failed to load tasks" });

  const taskIndex = data[from].findIndex((task) => String(task.id) === id);
  if (taskIndex === -1) {
    return res.status(404).json({ message: "Task not found" });
  }

  const [task] = data[from].splice(taskIndex, 1);
  task.status = to;
  data[to].push(task);

  await writeData(data);
  res.status(200).json(task);
});
export default router;

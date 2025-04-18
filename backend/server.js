import express from "express";
import tasksRoutes from "./routes/tasks.js";
import cors from "cors";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use("/api/tasks", tasksRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
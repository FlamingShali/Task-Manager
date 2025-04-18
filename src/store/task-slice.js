// tasksSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialTaskState = {
  tasks: {
    toDo: [],
    inProgress: [],
    done: [],
  },
  selectedTask: null,
  activeTask: null,
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState: initialTaskState,
  reducers: {
    createTask(state, action) {
      state.tasks.inProgress.push(action.payload);
    },
    setActiveTask(state, action) {
      state.activeTask = action.payload;
    },
    setSelectedTask(state, action) {
      state.selectedTask = action.payload;
    },
    moveTask(state, action) {
      const { id, from, to } = action.payload;

      const sourceList = state.tasks[from];
      const targetList = state.tasks[to];

      const taskIndex = sourceList.findIndex((task) => task.id === id);

      if (taskIndex !== -1) {
        const task = sourceList.splice(taskIndex, 1)[0];
        task.status = to;
        targetList.push(task);
      }
    },
    setTasks(state, action) {
      state.tasks = action.payload; // Zaktualizowanie stanu z API
    },
  },
});

export const tasksActions = tasksSlice.actions;
export default tasksSlice;

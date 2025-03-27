import { createSlice } from "@reduxjs/toolkit";

const initialTaskState = {
  tasks: [
    { id: "1", title: "Task 1", status: "to do" },
    { id: "2", title: "Task 2", status: "done" },
    { id: "3", title: "Task 3", status: "in progress" },
  ],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState: initialTaskState,
  reducers: {
    addTask(state, action) {
      state.tasks.push(action.payload);
    },
    updateTaskStatus(state, action) {
      const { id, status } = action.payload;
      const task = state.tasks.find((task) => task.id === id);
      if (task) {
        task.status = status;
      }
    },
    removeTask(state, action) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTask, updateTaskStatus, removeTask } = tasksSlice.actions;
export default tasksSlice;

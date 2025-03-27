import { createSlice } from "@reduxjs/toolkit";

const initialTaskState = {
  tasks: [{ id: "1", title: "Task 1", status: "todo" }],
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
    removeTask(state,action){
      state.tasks = state.tasks.filter((task)=>task.id !== action.payload)
    }
  },
});

export const tasksActions = tasksSlice.actions;
export default tasksSlice;

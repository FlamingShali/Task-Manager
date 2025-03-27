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
  },
});

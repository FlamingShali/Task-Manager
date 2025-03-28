import { createSlice } from "@reduxjs/toolkit";

const initialTaskState = {
  tasks: {
    toDo: [
      {
        id: 1,
        title: "Task 1",
        description: "Description of the task",
        status: "toDo",
      },
    ],
    inProgress: [
      {
        id: 2,
        title: "Task 2",
        description: "Description of the 2 task",
        status: "inProgress",
      },
    ],
    done: [
      {
        id: 3,
        title: "Task 3",
        description: "Description of the 3rd task",
        status: "done",
      },
    ],
  },
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState: initialTaskState,
  reducers: {
    createTask(state, action) {
      state.tasks.inProgress.push(action.payload);
    },
    updateTaskStatus(state, action) {},
    removeTask(state, action) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export const tasksActions = tasksSlice.actions;
export default tasksSlice;

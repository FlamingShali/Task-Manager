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
    removeTask(state, action) {
      const { id, array } = action.payload;
      const targetList = state.tasks[array];
      let removedTask = targetList.findIndex((task) => task.id === id);

      const task = targetList.splice(taskIndex, 1)[0];
    },
  },
});

export const tasksActions = tasksSlice.actions;
export default tasksSlice;

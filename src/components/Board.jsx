import { useSelector, useDispatch } from "react-redux";
import { tasksActions } from "../store/task-slice";
import { DndContext, closestCorners } from "@dnd-kit/core";

import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import TaskColumn from "./TaskColumn";
import Task from "./Task";
import Button from "./Button";
import { useState } from "react";

const statuses = ["toDo", "inProgress", "done"];
const toDo = statuses[0];
const inProgress = statuses[1];
const done = statuses[2];

const Board = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();
  const [activeTask, setActiveTask] = useState(null);

  const taskId = (Math.random() * 500).toFixed(2);
  console.log(taskId);
  function handleNewTask() {
    dispatch(
      tasksActions.createTask({
        id: taskId,
        title: "Added Task",
        status: "in progress",
      })
    );
  }

  function handleSwitchStatus() {
    dispatch(tasksActions.moveTask({ id: 1, from: toDo, to: inProgress }));
  }

  function handleActiveTask(task) {
    setActiveTask(task.id);
  }

  console.log(tasks);

  const onDragEnd = (event) => {};

  //   const year = new Date().getFullYear();
  //   const month = new Date().getMonth();
  //   const data = new Date().getDate();
  //   console.log(`${year}:${month}:${data}`);

  return (
    <>
      <DndContext collisionDetection={closestCorners} onDragEnd={onDragEnd}>
        <div className="w-full h-full flex justify-between self-center flex-col">
          <h1 className="w-full text-[2rem] 0 m-10 border-b-[2px] border-gray-300 ">
            Tasks
          </h1>
          <div className="flex h-full w-full">
            <TaskColumn status={toDo}>
              {tasks.toDo.map((task) => (
                <Task task={task} key={task.id} taskType={toDo} />
              ))}
            </TaskColumn>
            <TaskColumn status={inProgress}>
              {tasks.inProgress.map((task) => (
                <Task task={task} key={task.id} taskType={inProgress} onClick={handleActiveTask}/>
              ))}
            </TaskColumn>
            <TaskColumn status={done}>
              {tasks.done.map((task) => (
                <Task task={task} key={task.id} taskType={done} />
              ))}
            </TaskColumn>
          </div>
          <Button clickHandler={handleNewTask}>Test create</Button>
          <Button clickHandler={handleSwitchStatus}>Test switch</Button>
          <Button clickHandler={handleSwitchStatus}>Test switch</Button>
        </div>
      </DndContext>
    </>
  );
};

export default Board;

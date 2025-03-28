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

const statuses = ["To Do", "In Progress", "Done"];

const Board = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  const taskId = (Math.random() * 500).toFixed(2);
  console.log(taskId);
  function handleNewTask() {
    dispatch(
      tasksActions.createTask({
        id: taskId,
        title: "Added Task",
        status: "to do",
      })
    );
  }

  const onDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;

    const taskId = active.id;
    const newStatus = over.id;

    dispatch(tasksActions.updateTaskStatus({ id: taskId, status: newStatus }));
  };

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
            {statuses.map((status) => (
              <TaskColumn key={status}>
                <h1>{status}</h1>
                <ul>
                  {status === "To Do" &&
                    tasks.toDo.map((task) => (
                      <Task taskType={status} task={task} key={task.id} />
                    ))}
                  {status === "In Progress" &&
                    tasks.inProgress.map((task) => (
                      <Task taskType={status} task={task} key={task.id} />
                    ))}
                  {status === "Done" &&
                    tasks.done.map((task) => (
                      <Task taskType={status} task={task} key={task.id} />
                    ))}
                </ul>
              </TaskColumn>
            ))}
          </div>
          <Button clickHandler={handleNewTask}>Test button</Button>
        </div>
      </DndContext>
    </>
  );
};

export default Board;

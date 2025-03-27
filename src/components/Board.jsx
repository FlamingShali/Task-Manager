import { useSelector, useDispatch } from "react-redux";
import { tasksActions } from "../store/task-slice";
import { DndContext, closestCorners } from "@dnd-kit/core";

import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import TaskColumn from "./TaskColumn";
import Task from "./Task";

const statuses = ["To Do", "In Progress", "Done"];
const toDo = statuses[0];
const inProgress = statuses[1];
const done = statuses[2];

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

  return (
    <>
      <DndContext collisionDetection={closestCorners} onDragEnd={onDragEnd}>
        <div className="w-full h-full flex justify-between self-center flex-col">
          <h1 className="w-full text-[2rem] bg-red-300 m-10">Tasks</h1>
          <div className="flex h-full w-full">
            {statuses.map((status) => (
              <TaskColumn>
                <h1>{status}</h1>
                <ul>
                  {tasks.toDo.map((task) => (
                    <Task taskType={toDo} task={task} />
                  ))}
                </ul>
              </TaskColumn>
            ))}
          </div>
          <button onClick={handleNewTask}>Test button</button>
        </div>
      </DndContext>
    </>
  );
};

export default Board;

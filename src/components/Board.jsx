import { useSelector, useDispatch } from "react-redux";
import { tasksActions } from "../store/task-slice";
import { DndContext, closestCorners } from "@dnd-kit/core";

import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import TaskColumn from "./TaskColumn";

const statuses = ["To Do", "In Progress", "Done"];

const Board = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  function handleNewTask() {
    dispatch(
      tasksActions.createTask({
        id: "5",
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
      <button onClick={handleNewTask}>Test button</button>
      <DndContext collisionDetection={closestCorners} onDragEnd={onDragEnd}>
        <div className="w-2/5 h-2/5 flex justify-between bg-amber-100">
          {statuses.map((status) => (
            <TaskColumn key={status} type={status}>
              <h1>{status}</h1>
              <ul>
                {tasks.map((task) => (
                  <li key={task.id}>
                    {task.status === status.toLocaleLowerCase() && task.title}
                  </li>
                ))}
              </ul>
            </TaskColumn>
          ))}
        </div>
      </DndContext>
    </>
  );
};

export default Board;

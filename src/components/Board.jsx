import { useSelector, useDispatch } from "react-redux";
import { updateTaskStatus } from "../store/task-slice";
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

  const onDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;

    const taskId = active.id;
    const newStatus = over.id;

    dispatch(updateTaskStatus({ id: taskId, status: newStatus }));
  };

  return (
    <DndContext collisionDetection={closestCorners} onDragEnd={onDragEnd}>
      <div className="w-2/5 h-2/5 flex justify-between bg-amber-100">
        {statuses.map((status) => (
          <TaskColumn key={status} type={status}>
            <h1>{status}</h1>
            {tasks.map((task) => (
              <p>{task.status === status.toLocaleLowerCase() && task.title}</p>
            ))}
          </TaskColumn>
        ))}
        {/* {tasks.map((task) => (
          <div key={task.id}>
            <p>{task.title}</p>
          </div>
        ))} */}
      </div>
    </DndContext>
  );
};

export default Board;

import { useSelector, useDispatch } from "react-redux";
import { updateTaskStatus } from "../store/task-slice";
import { DndContext, closestCorners } from "@dnd-kit/core";

import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

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
      <div className="w-2/5 h-2/5 bg-amber-100">
        {tasks.map((task) => (
          <div key={task.id}>
            <p>{task.title}</p>
          </div>
        ))}
      </div>
    </DndContext>
  );
};

export default Board;

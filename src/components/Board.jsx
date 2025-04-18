import { useSelector, useDispatch } from "react-redux";
import { tasksActions } from "../store/task-slice";

import TaskColumn from "./TaskColumn";
import Task from "./Task";
import Button from "./Button";
import useFetchInitialState from "../customHooks/fetchInitialState";

const statuses = ["toDo", "inProgress", "done"];
const toDo = statuses[0];
const inProgress = statuses[1];
const done = statuses[2];

const Board = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const activeTask = useSelector((state) => state.tasks.activeTask);
  const dispatch = useDispatch();

  const taskId = (Math.random() * 500).toFixed(2);
  function handleNewTask() {
    dispatch(
      tasksActions.createTask({
        id: taskId,
        title: "Added Task",
        status: toDo,
      })
    );
  }
  useFetchInitialState();

  function handleActiveTask(task) {
    dispatch(tasksActions.setActiveTask(task));
  }

  //   const year = new Date().getFullYear();
  //   const month = new Date().getMonth();
  //   const data = new Date().getDate();
  //   console.log(`${year}:${month}:${data}`);

  return (
    <>
      <div className="w-full h-full flex justify-between self-center flex-col">
        <h1 className="w-full text-[2rem] 0 m-10 border-b-[2px] border-gray-300 ">
          Tasks
        </h1>
        <div className="flex h-full w-full">
          <TaskColumn status={toDo}>
            {tasks.toDo.map((task) => (
              <Task
                task={task}
                key={task.id}
                taskType={toDo}
                onActiveTask={handleActiveTask}
                activeTask={activeTask}
              />
            ))}
          </TaskColumn>
          <TaskColumn status={inProgress}>
            {tasks.inProgress.map((task) => (
              <Task
                task={task}
                key={task.id}
                taskType={inProgress}
                onActiveTask={handleActiveTask}
                activeTask={activeTask}
              />
            ))}
          </TaskColumn>
          <TaskColumn status={done}>
            {tasks.done.map((task) => (
              <Task
                task={task}
                key={task.id}
                taskType={done}
                onActiveTask={handleActiveTask}
                activeTask={activeTask}
              />
            ))}
          </TaskColumn>
        </div>
        <div className="flex flex-col justify-center items-center w-full h-1/12">
          <Button>Create new Task </Button>
          <input
            className="border-[1px] w-11/12 text-center rounded-[10px]"
            type="text"
            placeholder="Task Title"
          />
        </div>
      </div>
    </>
  );
};

export default Board;

const Task = ({ task, onActiveTask, activeTask }) => {
  return (
    <>
      <li
        key={task.id}
        onClick={() => onActiveTask(task)}
        className={`border-[2px] m-5 rounded-[5px] border-gray-300 text-center list-none transition-all ${
          activeTask?.id === task.id ? "bg-gray-800" : ""
        } cursor-pointer`}
        draggable="true"
      >
        <p>{task.title}</p>
        <p>{task.description}</p>
        <div className="flex "></div>
      </li>
    </>
  );
};

export default Task;

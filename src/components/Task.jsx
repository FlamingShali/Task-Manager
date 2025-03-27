const Task = ({ task, taskType }) => {
  return (
    <>
      {task.status === taskType.toLocaleLowerCase() && (
        <li
          key={task.id}
          className="border-[2px] m-5 rounded-[5px] border-gray-300 "
        >
          <p>{task.title}</p>
          <p>{task.description}</p>
        </li>
      )}
    </>
  );
};

export default Task;

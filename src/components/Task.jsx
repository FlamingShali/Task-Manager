const Task = ({ task, taskType }) => {
  return (
    <li key={task.id} className="border-[2px] m-5">
      {task.status === taskType.toLocaleLowerCase() && <p>{task.title}</p>}
    </li>
  );
};

export default Task;

const Task = ({ task, taskType }) => {
  return (
    <>
      <li
        key={task.id}
        className="border-[2px] m-5 rounded-[5px] border-gray-300 text-center list-none"
      >
        <p>{task.title}</p>
        <p>{task.description}</p>
      </li>
    </>
  );
};

export default Task;

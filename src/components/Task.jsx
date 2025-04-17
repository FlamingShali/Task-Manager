const Task = ({ task }) => {
  return (
    <>
      <li
        key={task.id}
        className="border-[2px] m-5 rounded-[5px] border-gray-300 text-center list-none"
      >
        <p>{task.title}</p>
        <p>{task.description}</p>
        <div className="flex "></div>
      </li>
    </>
  );
};

export default Task;

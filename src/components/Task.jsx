const Task = ({ task, taskType }) => {
  return (
    <>
      <li
        key={task.id}
        className="border-[2px] m-5 rounded-[5px] border-gray-300 text-center list-none"
      >
        <p>{task.title}</p>
        <p>{task.description}</p>
        <div className="flex ">
          <label>Task's status:</label>
          <select className="text-center border-2">
            <option>ToDo</option>
            <option>In Progress</option>
            <option>Done</option>
          </select>
        </div>
      </li>
    </>
  );
};

export default Task;

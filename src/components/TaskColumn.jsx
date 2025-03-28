const TaskColumn = ({ status, children }) => {
  const convertedStatus = function (status) {
    let upperStatus = status.charAt(0).toUpperCase() + status.slice(1);

    return upperStatus;
  };

  const toDoStyles = "shadow-red-300 shadow-xl bg-red-50";
  const inProgressStyles = "shadow-amber-300 shadow-xl bg-amber-50";
  const doneStyles = "shadow-green-300 shadow-xl bg-green-50";

  const additionalStyles = {
    toDo: toDoStyles,
    inProgress: inProgressStyles,
    done: doneStyles,
  };

  return (
    <div
      className={`w-1/3 mx-30 my-5 border-[2px] border-gray-200 rounded-[20px] ${additionalStyles[status]}`}
    >
      <h1 className="text-center font-bold text-[2rem] mt-5">
        {convertedStatus(status)}
      </h1>
      {children}
    </div>
  );
};

export default TaskColumn;

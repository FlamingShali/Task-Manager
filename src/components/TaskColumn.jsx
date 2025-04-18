const TaskColumn = ({ status, children }) => {
  const convertedStatus = function (status) {
    let upperStatus = status.charAt(0).toUpperCase() + status.slice(1);

    return upperStatus;
  };

  const toDoStyles = "bg-[#1e1e2f] border-[#9f7aea]";
  const inProgressStyles = "bg-[#2a2a40] border-[#f6ad55]";
  const doneStyles = "bg-[#1f2d1f] border-[#68d391]";

  const additionalStyles = {
    toDo: toDoStyles,
    inProgress: inProgressStyles,
    done: doneStyles,
  };

  return (
    <div
      className={`w-1/3 sm:mx-5 2xl:mx-20 my-5 border-[2px] rounded-[20px] ${additionalStyles[status]}`}
    >
      <h1 className="text-center font-bold text-[2rem] mt-5">
        {convertedStatus(status)}
      </h1>
      {children}
    </div>
  );
};

export default TaskColumn;

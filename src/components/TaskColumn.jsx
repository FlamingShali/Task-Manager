const TaskColumn = ({ status, children }) => {
  return (
    <div className="w-1/3 mx-30 my-5">
      <h1>{status}</h1>
      {children}
    </div>
  );
};

export default TaskColumn;

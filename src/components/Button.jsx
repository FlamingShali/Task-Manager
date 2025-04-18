const Button = ({ children, clickHandler, additionalStyles }) => {
  return (
    <button
      onClick={clickHandler}
      className={`border-[1px] hover:bg-gray-200 transition-all my-1 w-11/12 rounded-[10px] ${
        !additionalStyles ? "cursor-pointer" : ""
      }`}
    >
      {children}
    </button>
  );
};

export default Button;

const Button = ({ children, clickHandler, additionalStyles }) => {
  return (
    <button
      onClick={clickHandler}
      className={`border-[1px] hover:bg-gray-200 transition-all my-1 ${
        !additionalStyles ? "cursor-pointer" : ""
      }`}
    >
      {children}
    </button>
  );
};

export default Button;

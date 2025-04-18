import Button from "./Button";

const SideBar = () => {
  return (
    <aside className="h-screen w-1/6 border-r-[2px] border-r-gray-300 flex flex-col ">
      <h1 className="my-3 text-center font-bold text-xl border-b-[2px] border-gray-300 h-[3rem] ">
        Dashboard
      </h1>
      <div className="flex flex-col items-center justify-start h-1/2 w-full">
        <Button>Tasks</Button>
        <Button>Members</Button>
        <Button>Reports</Button>
        <Button>Payments</Button>
        <Button>Integration</Button>
      </div>
    </aside>
  );
};

export default SideBar;

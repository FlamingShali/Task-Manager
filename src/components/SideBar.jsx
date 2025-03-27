const SideBar = () => {
  return (
    <aside className="h-screen w-1/6 border-r-[2px] border-r-gray-300 flex flex-col ">
      <button className="my-3 h-[3rem] bg-red-500">Dashboard</button>
      <button className=" bg-green-500 ">Tasks</button>
      <button>Members</button>
      <button>Reports</button>
      <button>Payments</button>
      <button>Integration</button>
    </aside>
  );
};

export default SideBar;

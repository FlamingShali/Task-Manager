import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import { tasksActions } from "../store/task-slice";

const SideBar = () => {
  const activeTask = useSelector((state) => state.tasks.activeTask);
  const dispatch = useDispatch();
  function handleSwitchStatus(to) {
    dispatch(
      tasksActions.moveTask({ id: activeTask.id, from: activeTask.status, to })
    );
    dispatch(tasksActions.setActiveTask(null));
  }
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
      <div className="flex flex-col items-center justify-start h-1/2 w-full">
        <h1 className="border-y-[2px] border-gray-300 w-full text-center">
          Task Actions
        </h1>
        {activeTask && (
          <div className="flex my-5 items-center w-full h-full flex-col transition-all duration-500">
            {activeTask.status !== "toDo" && (
              <Button clickHandler={() => handleSwitchStatus("toDo")}>
                Move to ToDo
              </Button>
            )}
            {activeTask.status !== "inProgress" && (
              <Button clickHandler={() => handleSwitchStatus("inProgress")}>
                Move to In progress
              </Button>
            )}
            {activeTask.status !== "done" && (
              <Button clickHandler={() => handleSwitchStatus("done")}>
                Mark as Done
              </Button>
            )}
          </div>
        )}
      </div>
    </aside>
  );
};

export default SideBar;

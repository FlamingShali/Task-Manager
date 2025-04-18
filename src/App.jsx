import Board from "./components/Board";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <div className="h-screen flex flex-col text-gray-50 bg-gray-900">
        <Header />
        <div className="flex h-11/12">
          <SideBar />
          <Board />
        </div>
      </div>
    </>
  );
}

export default App;

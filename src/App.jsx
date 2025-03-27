import Board from "./components/Board";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <div className="h-screen flex flex-col bg-gray-100">
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

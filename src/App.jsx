import "./styles.css";

// components
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Sidebar />
        <div>
          <h1>Getting Started with React</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
            facilis impedit laudantium cupiditate debitis consequatur est
            pariatur atque eum maxime, deleniti odio officiis, dignissimos
            ratione, molestiae repellat minima itaque veritatis.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;

/*const App = () => {
  return (
    <div className="App">
      <h1>DevTown</h1>
    </div>
  );
};*/

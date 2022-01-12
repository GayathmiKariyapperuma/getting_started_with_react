import "./styles.css";
import { Router, Route } from "react-router-dom";

// components
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Sidebar />
        <div className="mainContent">
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

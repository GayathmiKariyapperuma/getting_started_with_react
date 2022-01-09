import "./styles.css";
// component
import Navigation from "./components/Navigation";

function App() {
  const name = "Devtown";
  const para =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat. Duis aute irure dolor in reprehenderit in voluptatevelit esse cillum dolore eu fugiat nulla pariatur. Excepteur sintoccaecat cupidatat non proident, sunt in culpa qui officia deseruntmollit anim id est laborum";

  return (
    <>
      {/* react fragment */}
      <h1 className="title" style={{ fontSize: "20px" }}>
        {name}
      </h1>
      <span>{para}</span>
      <Navigation></Navigation>
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

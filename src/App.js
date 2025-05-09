import "./App.css";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="App">
      <Todos />
      <footer>
        <div className="footer">
          <p className="made_by"> Made By: Karan Shah </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
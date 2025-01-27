import "./App.css";
import Attributes from "./components/attributes";
import Class from "./components/class";
import AttributesProvider from "./context/attributesProvider";

function App() {
  return (
    <AttributesProvider>
      <div className="App">
        <header className="App-header">
          <h1>DnD Character Sheet</h1>
        </header>
        <div className="App-section-container">
          <Attributes />
          <Class />
        </div>
      </div>
    </AttributesProvider>
  );
}

export default App;

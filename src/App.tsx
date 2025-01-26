import "./App.css";
import Attributes from "./components/attributes/list";
import Class from "./components/class/list";
import AttributesProvider from "./context/attributesContext";

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

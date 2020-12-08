import logo from './logo.svg';
import './App.css';
import Province from "./province";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Pakistan</h1>
          <Province provinces={["KPK", "Punjab", "Sindh", "Balochistan"]} />
        </div>
      </header>
    </div>
  );
}

export default App;

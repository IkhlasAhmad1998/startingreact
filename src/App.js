import logo from './logo.svg';
import './App.css';
import Province from "./province";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Pakistan</h1>
          <Province provinces="KPK" />
          <Province provinces="Balochistan" />
          <Province provinces="Sindh" />
          <Province provinces="Punjab" />
        </div>
      </header>
    </div>
  );
}

export default App;

import './App.css';
import Province from "./province";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Pakistan</h1>
          <h2>There are four Provinces of Pakistan </h2>
          <Province province_name="KPK" />
          <Province province_name="Balochistan" />
          <Province province_name="Sindh" />
          <Province province_name="Punjab" />
        </div>
      </header>
    </div>
  );
}

export default App;

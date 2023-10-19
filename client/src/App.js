import "./App.css";
import ListaVoluntari from "./ListaVoluntari";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div className="titlu">Voluntari Departament IT 2023-2024</div>
        <div className="scrollable-div">
          <h1 className="titlu-div">Nume Prenume - Nume GitHub</h1>
          <ListaVoluntari />
        </div>
      </div>
    </div>
  );
}

export default App;

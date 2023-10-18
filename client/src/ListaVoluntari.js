import "./App.css";

function ListaVoluntari() {
  return (
    <div className="scrollable-div">
      <h1 class=" cursor-s-resize">Nume Prenume - Nume GitHub</h1>
      <h1>
        Dulgheriu Bogdan Gabriel -
        <a
          href="https://github.com/dulgheriubogdan"
          target="_blank"
          rel="noopener noreferrer"
        >
          dulgheriubogdan
        </a>
      </h1>

      <h1>
        Calin Silvian Petre -
        <a
          href="https://github.com/xRankk"
          target="_blank"
          rel="noopener noreferrer"
        >
          xRankk
        </a>
      </h1>
    </div>
  );
}

export default ListaVoluntari;

import React from "react";
import Rutas from "./rutas";

import PeliculaState from "./Context/Pelicula/PeliculaState";
import TurnoState from "./Context/Turno/TurnoState";

function App() {
  return (
    <>
      <TurnoState>
        <PeliculaState>
          <Rutas />
        </PeliculaState>
      </TurnoState>
    </>
  );
}

export default App;

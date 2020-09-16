import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

/**RUTAS */
import RutaPrivada from "./RutaPrivada";
import RutaPublica from "./RutaPublica";

/**VISTAS PUBLICAS */
import Login from "../views/Login";

/**VISTAS PRIVADAS */
import Dashboard from "../views/Dashboard";
import Peliculas from "../views/Peliculas";
import PeliculaTurno from "../views/PeliculaTurno";
import Turnos from "../views/Turnos";
import Administradores from "../views/Administradores";
import Perfil from "../views/Perfil";

const isAutenticated = true;

const Rutas = () => {
  // const [isAutenticated, setIsAutenticated] = useState(true);

  return (
    <Router>
      <Switch>
        <RutaPublica
          exact
          isAutenticated={isAutenticated}
          path="/"
          component={Login}
        />
        <RutaPrivada
          isAutenticated={isAutenticated}
          exact
          path="/dashboard"
          component={Dashboard}
        />
        <RutaPrivada
          isAutenticated={isAutenticated}
          exact
          path="/peliculas"
          component={Peliculas}
        />
        <RutaPrivada
          isAutenticated={isAutenticated}
          exact
          path="/turnos"
          component={Turnos}
        />
        <RutaPrivada
          isAutenticated={isAutenticated}
          exact
          path="/administradores"
          component={Administradores}
        />
        <RutaPrivada
          isAutenticated={isAutenticated}
          exact
          path="/perfil"
          component={Perfil}
        />
        <RutaPrivada
          isAutenticated={isAutenticated}
          exact
          path="/agregar-turno/:id"
          component={PeliculaTurno}
        />
      </Switch>
    </Router>
  );
};

export default Rutas;

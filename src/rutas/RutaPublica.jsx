import React from "react";
import { Route, Redirect } from "react-router-dom";

const RutaPublica = ({ isAutenticated, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        isAutenticated ? (
          <Redirect to="/peliculas" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default RutaPublica;

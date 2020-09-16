import React from "react";
import { Route, Redirect } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const RutaPrivada = ({ isAutenticated, component: Component, ...rest }) => {
  return (
    <>
      <Header />
      <main className="container-fluid">
        <section className="row">
          <Sidebar />
          <section className="col-sm-9 col-md-8 container pt-2">
            <Route
              {...rest}
              component={(props) =>
                isAutenticated ? <Component {...props} /> : <Redirect to="/" />
              }
            />
          </section>
        </section>
      </main>
    </>
  );
};

export default RutaPrivada;

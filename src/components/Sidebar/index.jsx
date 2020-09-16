import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      className="col-sm-3 col-md-2 d-none d-sm-block bg-light sidebar pt-2"
      style={{ height: "100vh" }}
    >
      <ul className="nav nav-pills flex-column">
        <li className="nav-item">
          <NavLink
            className="nav-link "
            activeClassName="active"
            to="/dashboard"
          >
            Dashboard
          </NavLink>
        </li>
        <li className="nav-item"></li>
        <li className="nav-item">
          <NavLink
            className="nav-link "
            activeClassName="active"
            to="/peliculas"
          >
            Peliculas
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " activeClassName="active" to="/turnos">
            Turnos
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link "
            activeClassName="active"
            to="/administradores"
          >
            Administradores
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " activeClassName="active" to="/perfil">
            Perfil
          </NavLink>
        </li>
        <li className="nav-item">
          <button className="btn btn-link">
            Cerrar Sesión <i className="fa fa-sign-out" aria-hidden="true"></i>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

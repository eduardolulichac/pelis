import React from "react";
import { Link } from "react-router-dom";

const Row = ({ film, deleteFilm, editFilm }) => {
  return (
    <tr>
      <th scope="row">{film.id}</th>
      <td>{film.nombre}</td>
      <td>{film.fecha.toDate().toLocaleDateString("es-PE")}</td>
      <td>{film.estado}</td>
      <td>
        <div className="d-flex justify-content-around">
          <button className="btn btn-link" onClick={() => editFilm()}>
            <i className="fa fa-pencil-square" aria-hidden="true"></i>
          </button>
          <Link className="btn btn-link" to={`/agregar-turno/${film.id}`}>
            <i className="fa fa-clock-o" aria-hidden="true"></i>
          </Link>
          <button className="btn btn-link">
            <i
              className={
                film.estado === "Activo" ? "fa fa-lock" : "fa fa-unlock-alt"
              }
              aria-hidden="true"
            ></i>
          </button>
          <button className="btn btn-link" onClick={() => deleteFilm()}>
            <i className="fa fa-trash" aria-hidden="true"></i>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default Row;

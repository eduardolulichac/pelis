import React from "react";
import Row from "./Row";
const Table = ({ films, deleteFilm, editFilm }) => {
  return (
    <table className="table table-striped mt-2">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Nombre</th>
          <th scope="col">Fecha Publicación</th>
          <th scope="col">Estado</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {films.map((film) => (
          <Row
            key={film.id}
            film={film}
            editFilm={() => editFilm(film.id)}
            deleteFilm={() => deleteFilm(film.id)}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;

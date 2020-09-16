import React from "react";
import Row from "./Row";
const Table = ({ turns, deleteTurn, editTurn }) => {
  return (
    <table className="table table-striped mt-2">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Turno</th>
          <th scope="col">Estado</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {turns.map((turn) => (
          <Row
            key={turn.id}
            turn={turn}
            editTurn={() => editTurn(turn.id)}
            deleteTurn={() => deleteTurn(turn.id)}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;

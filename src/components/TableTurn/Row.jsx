import React from "react";

const Row = ({ turn, deleteTurn, editTurn }) => {
  return (
    <tr>
      <th scope="row">{turn.id}</th>
      <td>{turn.hora}</td>
      <td>{turn.estado}</td>
      <td>
        <div className="d-flex justify-content-around">
          <button className="btn btn-link" onClick={() => editTurn()}>
            <i className="fa fa-pencil-square" aria-hidden="true"></i>
          </button>
          <button className="btn btn-link">
            <i className={
                turn.estado === "Activo" ? "fa fa-lock" : "fa fa-unlock-alt"
              } aria-hidden="true"></i>
          </button>
          <button className="btn btn-link" onClick={() => deleteTurn()}>
            <i className="fa fa-trash" aria-hidden="true"></i>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default Row;

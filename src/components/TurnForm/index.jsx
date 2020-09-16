import React from "react";
import useValidacion from "../../hooks/useValidacion";
import { validarCrearTurno } from "../../utils/validaciones";

const initialState = {
  hora: "",
  estado: "Activo",
};

const TurnForm = ({
  titleForm,
  loading,
  type,
  actionEvent,
  errorMessage,
  turn,
}) => {
  const {
    valores,
    errores,
    handleChange,
    handleSubmit,
  } = useValidacion(initialState, "turn", type, turn, validarCrearTurno, () =>
    formAction()
  );

  const { hora, estado } = valores;

  const formAction = () => {
    if (type === "add") {
      actionEvent({ ...valores });
    } else {
      actionEvent({ ...valores });
    }
  };

  return (
    <div className="container" style={{ width: "100%" }}>
      <h2 className="text-center mb-4">{titleForm}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <label htmlFor="hora" className="col-md-3 col-form-label">
            Turno
          </label>
          <div className="col-md-9">
            <input
              type="time"
              className="form-control"
              placeholder="Nombre de la película ..."
              name="hora"
              value={hora}
              onChange={handleChange}
            />
            {errores.hora && (
              <span style={{ fontSize: "14px", color: "red" }}>
                {errores.hora}
              </span>
            )}
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputPassword3" className="col-sm-3 col-form-label">
            Estado
          </label>
          <div className="col-sm-9">
            <select
              className="custom-select mr-sm-2"
              name="estado"
              value={estado}
              onChange={handleChange}
            >
              <option value="Activo">Activo</option>
              <option value="Inactivo">Inactivo</option>
            </select>
            {errores.estado && (
              <span style={{ fontSize: "14px", color: "red" }}>
                {errores.estado}
              </span>
            )}
          </div>
        </div>
        {errorMessage && (
          <div className="alert alert-warning text-center">{errorMessage}</div>
        )}

        <div className="row">
          <div className="col-auto m-auto">
            <button type="submit" className="btn btn-primary">
              <span>Guardar</span>{" "}
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TurnForm;

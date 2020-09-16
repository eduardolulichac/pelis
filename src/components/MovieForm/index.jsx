import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";
import useValidacion from "../../hooks/useValidacion";
import { validarCrearPelicula } from "../../utils/validaciones";

registerLocale("es", es);

const initialState = {
  nombre: "",
  fecha: null,
  estado: "Activo",
};

const MoviForm = ({
  titleForm,
  loading,
  type,
  actionEvent,
  errorMessage,
  film,
}) => {
  const {
    valores,
    errores,
    handleChange,
    handleChangeDate,
    handleSubmit,
  } = useValidacion(initialState, "film", type, film, validarCrearPelicula, () =>
    formAction()
  );

  const { nombre, fecha, estado } = valores;

  const formAction = () => {
    if (type === "add") {
      actionEvent({ ...valores, turno: null });
    } else {
      actionEvent({ ...valores });
    }
  };

  return (
    <div className="container" style={{ width: "100%" }}>
      <h2 className="text-center mb-4">{titleForm}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <label htmlFor="nombre" className="col-md-3 col-form-label">
            Nombre de Película
          </label>
          <div className="col-md-9">
            <input
              type="text"
              className="form-control"
              placeholder="Nombre de la película ..."
              name="nombre"
              value={nombre}
              onChange={handleChange}
            />
            {errores.nombre && (
              <span style={{ fontSize: "14px", color: "red" }}>
                {errores.nombre}
              </span>
            )}
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputPassword3" className="col-sm-3 col-form-label">
            Fecha de Publicación
          </label>
          <div className="col-sm-9">
            <DatePicker
              selected={fecha}
              onChange={handleChangeDate}
              className="form-control"
              minDate={new Date()}
              name="fecha"
              value={fecha}
              dateFormat={"dd/MM/yyyy"}
              style={{ width: "100%" }}
              locale="es"
            />
            {errores.fecha && (
              <span style={{ fontSize: "14px", color: "red" }}>
                {errores.fecha}
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

export default MoviForm;

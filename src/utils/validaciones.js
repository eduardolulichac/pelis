export const validarCrearPelicula = (valores) => {
  let errores = {};
  validarNombre(valores.nombre, errores);
  validarFecha(valores.fecha, errores);
  validarEstado(valores.estado, errores);
  return errores;
};
export const validarCrearTurno = (valores) => {
  let errores = {};
  validarHora(valores.hora, errores);
  validarEstado(valores.estado, errores);
  return errores;
};

const validarNombre = (nombre, errores) => {
  if (!nombre) {
    errores.nombre = "El nombre es obligatorio";
  }
};

const validarFecha = (fecha, errores) => {
  if (!fecha) {
    errores.fecha = "La fecha es obligatoria";
  }
};

const validarEstado = (estado, errores) => {
  if (!estado) {
    errores.estado = "El estado es obligatorio";
  }
};

const validarHora = (hora, errores) => {
  if (!hora) {
    errores.hora = "La hora es obligatoria";
  }
};

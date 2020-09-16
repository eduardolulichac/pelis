import { useState, useEffect } from "react";

const useValidacion = (initialState, formName, type, data, validar, fn) => {
  const [valores, setValores] = useState(initialState);
  const [errores, setErrores] = useState({});
  const [solicitud, setSolicitud] = useState(false);

  useEffect(() => {
    if (type === "edit") {
      if (formName === "film") {
        if (data) {
          setValores({
            ...data,
            fecha: data?.fecha.toDate(),
          });
        }
      } else {
        if (data) {
          setValores({
            ...data,
          });
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, data]);

  useEffect(() => {
    if (solicitud) {
      const noHayHerrores = Object.keys(errores).length === 0;
      if (noHayHerrores) {
        fn();
      }
      setSolicitud(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errores]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const erroresValidacion = validar(valores);
    setErrores(erroresValidacion);
    setSolicitud(true);
  };

  const handleChange = (e) => {
    setValores({
      ...valores,
      [e.target.name]: e.target.value,
    });
    setErrores({});
  };

  const handleChangeDate = (date) => {
    setValores({
      ...valores,
      fecha: date,
    });
    setErrores({});
  };

  return { valores, errores, handleChange, handleChangeDate, handleSubmit };
};

export default useValidacion;

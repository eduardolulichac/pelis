import React, { useState, useContext, useEffect } from "react";
import TableMovies from "../../components/TableMovies";
import HeaderView from "../../components/Shared/HeaderView";
import MovieForm from "../../components/MovieForm";

import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

import peliculaContext from "../../Context/Pelicula/peliculaContext";

const Films = () => {
  const [open, setOpen] = useState(false);
  const [addModalForm, setAddModalForm] = useState(true);

  const {
    loadingAddFilm,
    loadingEditFilm,
    addFilmOk,
    editFilmOk,
    errorAddFilm,
    errorEditFilm,
    films,
    film,
    getAllFilmsContext,
    getFilmContext,
    addFilmContext,
    editFilmContext,
    deleteFilmContext,
  } = useContext(peliculaContext);

  useEffect(() => {
    getAllFilmsContext();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (addFilmOk || editFilmOk) {
      onCloseModal();
    }
  }, [addFilmOk, editFilmOk]);

  const addFilm = () => {
    setAddModalForm(true);
    setOpen(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  };

  const editFilm = (id) => {
    getFilmContext(id);
    setAddModalForm(false);
    setOpen(true);
  };

  const deleteFilm = (id) => {
    deleteFilmContext(id);
  };

  const onCloseModal = () => {
    setOpen(false);
  };

  if (!films) return <p>Cargando ...</p>;

  return (
    <>
      <HeaderView
        title="Películas"
        buttonName="Nueva Película"
        actionBtn={addFilm}
      />
      <div className="row">
        <TableMovies
          films={films}
          deleteFilm={deleteFilm}
          editFilm={editFilm}
        />
      </div>
      <Modal
        open={open}
        onClose={onCloseModal}
        center
        style={{ width: "100%" }}
      >
        <MovieForm
          titleForm={addModalForm ? "Nueva Película" : "Editar Película"}
          type={addModalForm ? "add" : "edit"}
          loading={addModalForm ? loadingAddFilm : loadingEditFilm}
          actionEvent={addModalForm ? addFilmContext : editFilmContext}
          errorMessage={addModalForm ? errorAddFilm : errorEditFilm}
          film={film}
        />
      </Modal>
    </>
  );
};

export default Films;

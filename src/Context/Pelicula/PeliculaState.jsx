import React, { useReducer } from "react";
import firebase from "../../firebase";

import PeliculaContext from "./peliculaContext";

import PeliculaReducer from "./peliculaReducer";

const PeliculaState = (props) => {
  const initialState = {
    /**Agregar una film */
    loadingAddFilm: false,
    addFilmOk: false,
    errorAddFilm: null,
    /**Listar las Peliculas */
    films: null,
    loadingGetFilms: false,
    errorGetFilms: null,
    /** Eliminar Pelicula */
    loadingDeleteFilm: false,
    deleteFilmOk: false,
    errorDeleteFilm: null,
    /** Obtener Pelicula */
    film: null,
    /**Editar una film */
    loadingEditFilm: false,
    editFilmOk: false,
    errorEditFilm: null,
  };

  const getAllFilmsContext = async () => {
    dispatch({
      type: "LOADING_GET_ALL_FILMS",
    });
    try {
      const doc = await firebase.db
        .collection("peliculas")
        .orderBy("fecha", "desc")
        .get();
      const films = [];
      doc.forEach((item) => films.push({ id: item.id, ...item.data() }));
      dispatch({
        type: "GET_ALL_FILMS_OK",
        payload: films,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: "GET_ALL_FILMS_ERROR",
      });
    }
  };
  const addFilmContext = async (film) => {
    dispatch({
      type: "LOADING_ADD_FILM",
    });
    try {
      await firebase.db.collection("peliculas").add(film);
      getAllFilmsContext();
      dispatch({
        type: "ADD_FILM_OK",
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: "ADD_FILM_ERROR",
      });
    }
  };

  const deleteFilmContext = async (id) => {
    dispatch({
      type: "LOADING_DELETE_FILM",
    });
    try {
      await firebase.db.collection("peliculas").doc(id).delete();
      getAllFilmsContext();
    } catch (error) {
      console.log(error);
      dispatch({
        type: "DELETE_FILM_ERROR",
      });
    }
  };

  const getFilmContext = async (id) => {
    try {
      const doc = await firebase.db.collection(`peliculas`).doc(id).get();
      let film = {
        id: id,
        ...doc.data(),
      };
      dispatch({
        type: "GET_FILM",
        payload: film,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const editFilmContext = async (film) => {
    dispatch({
      type: "LOADING_EDIT_FILM",
    });
    try {
      const productoUpdate = { ...film };
      delete productoUpdate.id;

      await firebase.db
        .collection(`peliculas`)
        .doc(film.id)
        .update(productoUpdate);
      getAllFilmsContext();
      dispatch({
        type: "EDIT_FILM_OK",
        payload: true,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: "EDIT_FILM_ERROR",
      });
    }
  };

  const [state, dispatch] = useReducer(PeliculaReducer, initialState);

  return (
    <PeliculaContext.Provider
      value={{
        loadingAddFilm: state.loadingAddFilm,
        addFilmOk: state.addFilmOk,
        errorAddFilm: state.errorAddFilm,
        films: state.films,
        loadingGetFilms: state.loadingGetFilms,
        errorGetFilms: state.errorGetFilms,
        loadingDeleteFilm: state.loadingDeleteFilm,
        deleteFilmOk: state.deleteFilmOk,
        errorDeleteFilm: state.errorDeleteFilm,
        film: state.film,
        loadingEditFilm: state.loadingEditFilm,
        editFilmOk: state.editFilmOk,
        errorEditFilm: state.errorEditFilm,
        addFilmContext,
        getAllFilmsContext,
        deleteFilmContext,
        getFilmContext,
        editFilmContext,
      }}
    >
      {props.children}
    </PeliculaContext.Provider>
  );
};

export default PeliculaState;

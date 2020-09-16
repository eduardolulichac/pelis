export default (state, action) => {
  switch (action.type) {
    case "LOADING_ADD_FILM":
      return {
        ...state,
        loadingAddFilm: true,
        addFilmOk: false,
        errorAddFilm: null,
      };
    case "ADD_FILM_OK":
      return {
        ...state,
        loadingAddFilm: false,
        addFilmOk: true,
        errorAddFilm: null,
      };
    case "ADD_FILM_ERROR":
      return {
        ...state,
        loadingAddFilm: false,
        addFilmOk: false,
        errorAddFilm: "Hubo un error al crear la pelicula",
      };

    case "LOADING_GET_ALL_FILMS":
      return {
        ...state,
        // addFilmOk: false,
        loadingGetFilms: true,
      };
    case "GET_ALL_FILMS_OK":
      return {
        ...state,
        films: action.payload,
        loadingGetFilms: false,
        errorGetFilms: null,
      };
    case "GET_ALL_FILMS_ERROR":
      return {
        ...state,
        films: null,
        loadingGetFilms: false,
        errorGetFilms: "Hubo un error al obtener la lista de films",
      };

    case "LOADING_DELETE_FILM":
      return {
        ...state,
        loadingDeleteFilm: true,
      };
    case "DELETE_FILM_OK":
      return {
        ...state,
        loadingDeleteFilm: false,
        deleteFilmOk: true,
        errorDeleteFilm: null,
      };
    case "DELETE_FILM_ERROR":
      return {
        ...state,
        loadingDeleteFilm: false,
        deleteFilmOk: false,
        errorDeleteFilm: "Hubo un error al obtener la lista de films",
      };
    case "GET_FILM":
      return {
        ...state,
        film: action.payload,
      };

    case "LOADING_EDIT_FILM":
      return {
        ...state,
        loadingEditFilm: true,
        addFilmOk: false,
        errorAddFilm: null,
      };
    case "EDIT_FILM_OK":
      return {
        ...state,
        loadingEditFilm: false,
        editFilmOk: true,
        errorEditFilm: null,
      };
    case "EDIT_FILM_ERROR":
      return {
        ...state,
        loadingEditFilm: false,
        editFilmOk: false,
        errorAddFilm: "Hubo un error al editar la pelicula",
      };

    default:
      return {
        ...state,
      };
  }
};

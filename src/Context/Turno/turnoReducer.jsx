export default (state, action) => {
  switch (action.type) {
    case "LOADING_ADD_TURN":
      return {
        ...state,
        loadingAddTurn: true,
        addTurnOk: false,
        errorAddTurn: null,
      };
    case "ADD_TURN_OK":
      return {
        ...state,
        loadingAddTurn: false,
        addTurnOk: true,
        errorAddTurn: null,
      };
    case "ADD_TURN_ERROR":
      return {
        ...state,
        loadingAddTurn: false,
        addTurnOk: false,
        errorAddTurn: "Hubo un error al crear el Turno",
      };

    case "LOADING_GET_ALL_TURNS":
      return {
        ...state,
        // addTurnOk: false,
        loadingGetTurns: true,
      };
    case "GET_ALL_TURNS_OK":
      return {
        ...state,
        turns: action.payload,
        loadingGetTurns: false,
        errorGetTurns: null,
      };
    case "GET_ALL_TURNS_ERROR":
      return {
        ...state,
        turns: null,
        loadingGetTurns: false,
        errorGetTurns: "Hubo un error al obtener la lista de turnos",
      };

    case "LOADING_DELETE_TURN":
      return {
        ...state,
        loadingDeleteTurn: true,
      };
    case "DELETE_TURN_OK":
      return {
        ...state,
        loadingDeleteTurn: false,
        deleteTurnOk: true,
        errorDeleteTurn: null,
      };
    case "DELETE_TURN_ERROR":
      return {
        ...state,
        loadingDeleteTurn: false,
        deleteTurnOk: false,
        errorDeleteTurn: "Hubo un error al obtener la lista de turnos",
      };
    case "GET_TURN":
      return {
        ...state,
        turn: action.payload,
      };

    case "LOADING_EDIT_TURN":
      return {
        ...state,
        loadingEditTurn: true,
        addTurnOk: false,
        errorAddTurn: null,
      };
    case "EDIT_TURN_OK":
      return {
        ...state,
        loadingEditTurn: false,
        editTurnOk: true,
        errorEditTurn: null,
      };
    case "EDIT_TURN_ERROR":
      return {
        ...state,
        loadingEditTurn: false,
        editTurnOk: false,
        errorAddTurn: "Hubo un error al editar el turno",
      };

    default:
      return {
        ...state,
      };
  }
};

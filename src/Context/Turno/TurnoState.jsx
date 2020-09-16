import React, { useReducer } from "react";
import firebase from "../../firebase";

import TurnoContext from "./turnoContext";

import TurnoReducer from "./turnoReducer";

const TurnoState = (props) => {
  const initialState = {
    /**Agregar una turn */
    loadingAddTurn: false,
    addTurnOk: false,
    errorAddTurn: null,
    /**Listar las Peliculas */
    turns: null,
    loadingGetTurns: false,
    errorGetTurns: null,
    /** Eliminar Pelicula */
    loadingDeleteTurn: false,
    deleteTurnOk: false,
    errorDeleteTurn: null,
    /** Obtener Pelicula */
    turn: null,
    /**Editar una turn */
    loadingEditTurn: false,
    editTurnOk: false,
    errorEditTurn: null,
  };

  const getAllTurnsContext = async () => {
    dispatch({
      type: "LOADING_GET_ALL_TURNS",
    });
    try {
      const doc = await firebase.db
        .collection("turnos")
        .orderBy("hora", "desc")
        .get();
      const turns = [];
      doc.forEach((item) => turns.push({ id: item.id, ...item.data() }));
      dispatch({
        type: "GET_ALL_TURNS_OK",
        payload: turns,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: "GET_ALL_TURNS_ERROR",
      });
    }
  };
  const addTurnContext = async (turn) => {
    dispatch({
      type: "LOADING_ADD_TURN",
    });
    try {
      await firebase.db.collection("turnos").add(turn);
      getAllTurnsContext();
      dispatch({
        type: "ADD_TURN_OK",
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: "ADD_TURN_ERROR",
      });
    }
  };

  const deleteTurnContext = async (id) => {
    dispatch({
      type: "LOADING_DELETE_TURN",
    });
    try {
      await firebase.db.collection("turnos").doc(id).delete();
      getAllTurnsContext();
    } catch (error) {
      console.log(error);
      dispatch({
        type: "DELETE_TURN_ERROR",
      });
    }
  };

  const getTurnContext = async (id) => {
    try {
      const doc = await firebase.db.collection(`turnos`).doc(id).get();
      let turn = {
        id: id,
        ...doc.data(),
      };
      dispatch({
        type: "GET_TURN",
        payload: turn,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const editTurnContext = async (turn) => {
    dispatch({
      type: "LOADING_EDIT_TURN",
    });
    try {
      const productoUpdate = { ...turn };
      delete productoUpdate.id;

      await firebase.db
        .collection(`turnos`)
        .doc(turn.id)
        .update(productoUpdate);
      getAllTurnsContext();
      dispatch({
        type: "EDIT_TURN_OK",
        payload: true,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: "EDIT_TURN_ERROR",
      });
    }
  };

  const [state, dispatch] = useReducer(TurnoReducer, initialState);

  return (
    <TurnoContext.Provider
      value={{
        loadingAddTurn: state.loadingAddTurn,
        addTurnOk: state.addTurnOk,
        errorAddTurn: state.errorAddTurn,
        turns: state.turns,
        loadingGetTurns: state.loadingGetTurns,
        errorGetTurns: state.errorGetTurns,
        loadingDeleteTurn: state.loadingDeleteTurn,
        deleteTurnOk: state.deleteTurnOk,
        errorDeleteTurn: state.errorDeleteTurn,
        turn: state.turn,
        loadingEditTurn: state.loadingEditTurn,
        editTurnOk: state.editTurnOk,
        errorEditTurn: state.errorEditTurn,
        addTurnContext,
        getAllTurnsContext,
        deleteTurnContext,
        getTurnContext,
        editTurnContext,
      }}
    >
      {props.children}
    </TurnoContext.Provider>
  );
};

export default TurnoState;

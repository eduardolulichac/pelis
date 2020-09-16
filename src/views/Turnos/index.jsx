import React, { useState, useContext, useEffect } from "react";
import TableTurn from "../../components/TableTurn";
import HeaderView from "../../components/Shared/HeaderView";
import TurnForm from "../../components/TurnForm";

import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

import turnoContext from "../../Context/Turno/turnoContext";

const Turns = () => {
  const [open, setOpen] = useState(false);
  const [addModalForm, setAddModalForm] = useState(true);

  const {
    loadingAddTurn,
    loadingEditTurn,
    addTurnOk,
    editTurnOk,
    errorAddTurn,
    errorEditTurn,
    turns,
    turn,
    getAllTurnsContext,
    getTurnContext,
    addTurnContext,
    editTurnContext,
    deleteTurnContext,
  } = useContext(turnoContext);

  useEffect(() => {
    getAllTurnsContext();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (addTurnOk || editTurnOk) {
      onCloseModal();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addTurnOk, editTurnOk]);

  const addTurn = () => {
    setAddModalForm(true);
    setOpen(true);
  };

  const editTurn = (id) => {
    getTurnContext(id);
    setAddModalForm(false);
    setOpen(true);
  };

  const deleteTurn = (id) => {
    deleteTurnContext(id);
  };

  const onCloseModal = () => {
    setOpen(false);
  };

  if (!turns) return <p>Cargando ...</p>;

  return (
    <>
      <HeaderView title="Turnos" buttonName="Nuevo Turno" actionBtn={addTurn} />
      <div className="row">
        <TableTurn turns={turns} deleteTurn={deleteTurn} editTurn={editTurn} />
      </div>
      <Modal
        open={open}
        onClose={onCloseModal}
        center
        style={{ width: "100%" }}
      >
        <TurnForm
          titleForm={addModalForm ? "Nuevo Turno" : "Editar Turno"}
          type={addModalForm ? "add" : "edit"}
          loading={addModalForm ? loadingAddTurn : loadingEditTurn}
          actionEvent={addModalForm ? addTurnContext : editTurnContext}
          errorMessage={addModalForm ? errorAddTurn : errorEditTurn}
          turn={turn}
        />
      </Modal>
    </>
  );
};

export default Turns;

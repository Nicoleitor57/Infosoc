import React, { useState } from 'react';
import OpenNameList from '../OpenNameList/OpenNameList';
import Modify from '../Modify/Modify';
import s from './NameList.module.css';

function NameList(NameListProps) {
  const { name, tipoTutor, rol, rut, turnos } = NameListProps;

  const [ventanaAbierta, setVentanaAbierta] = useState(false);
  const [ventanaModifyAbierta, setVentanaModifyAbierta] = useState(false);

  const [modifiedAttributes, setModifiedAttributes] = useState({
    name: name,
    tipoTutor: tipoTutor,
    rol: rol,
    rut: rut,
    turnos: turnos.join(', '), // Convert turnos array to string
  });

  const toggleVentana = () => {
    setVentanaAbierta(!ventanaAbierta);
  };

  const toggleVentanaModify = () => {
    setVentanaModifyAbierta(!ventanaModifyAbierta);
  };

  const handleAttributeChange = (attribute, value) => {
    setModifiedAttributes((prevAttributes) => ({ ...prevAttributes, [attribute]: value }));
  };

  const handleModifyClick = () => {
    toggleVentanaModify();
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add logic to update the tutor's attributes with modifiedAttributes
    console.log('Modified attributes:', modifiedAttributes);
    // Close the modification window
    toggleVentanaModify();
  };

  return (
    <section className={s.open}>
      <div className={`${s.list} ${ventanaAbierta ? s.listAbierta : ''}`}>
        <div className={s.rotulo}>
          <text className={s.name}>{name}</text>
          <text className={s.type}>{tipoTutor}</text>
        </div>
        {!ventanaModifyAbierta && (
          <button className={s.icon} onClick={toggleVentanaModify}>
            <img src="Pencil.png" alt="Lapiz" />
          </button>
        )}
        {!ventanaAbierta && (
          <button className={s.icon} onClick={toggleVentana}>
            <img src="Arroy-Down.svg" alt="Flecha hacia abajo" />
          </button>
        )}
        {ventanaAbierta && (
          <button className={s.icon} onClick={toggleVentana}>
            <img src="Arroy-Up.svg" alt="Flecha hacia arriba" />
          </button>
        )}
      </div>
      {ventanaModifyAbierta && (
        <Modify
          {...modifiedAttributes}
          onAttributeChange={handleAttributeChange}
          onSubmit={handleFormSubmit}
        />
      )}
      {ventanaAbierta && <OpenNameList nombre={name} cargo={tipoTutor} rol={rol} rut={rut} turnos={turnos} />}
    </section>
  );
}

export default NameList;

import React, { useState } from 'react';
import OpenNameList from '../OpenNameList/OpenNameList';
import s from './NameList.module.css';

function NameList(NameListProps) {

  const { name, tipoTutor, rol , rut, turnos } = NameListProps;

  const [ventanaAbierta, setVentanaAbierta] = useState(false);

  const toggleVentana = () => {
    setVentanaAbierta(!ventanaAbierta);
  };

  const handleModifyClick = () => {
    // Add logic to handle modification here
    console.log('Modify button clicked for:', name);
  };

  return (
    <section className={s.open}>
        <div className={`${s.list} ${ventanaAbierta ? s.listAbierta : ''}`}>
          <div className={s.rotulo}>
            <text className={s.name}>{name}</text>
            <text className={s.type}>{tipoTutor}</text>
          </div>
          <button className={s.modifyButton} onClick={handleModifyClick}>
              Modificar
          </button>
          {!ventanaAbierta && (
            <button className={s.icon} onClick={toggleVentana}>
              <img src="Arroy-Down.svg" alt="Flecha hacia abajo"/>
            </button>
          )}
          {ventanaAbierta && (
            <button className={s.icon} onClick={toggleVentana}>
              <img src="Arroy-Up.svg" alt="Flecha hacia abajo"/>
            </button>
          )}
        </div>
          {ventanaAbierta && (
            <OpenNameList nombre={name} cargo={tipoTutor} rol={rol} rut={rut} turnos={turnos}/>
          )}
    </section>
  );
}


export default NameList;
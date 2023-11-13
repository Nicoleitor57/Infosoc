import React, { useState } from 'react';
import OpenNameList from '../OpenNameList/OpenNameList';
import s from './NameList.module.css';

function NameList(NameListProps) {

  const { name, tipoTutor } = NameListProps;

  const [ventanaAbierta, setVentanaAbierta] = useState(false);

  const toggleVentana = () => {
    setVentanaAbierta(!ventanaAbierta);
  };

  return (
    <section className={s.open}>
        <div className={`${s.list} ${ventanaAbierta ? s.listAbierta : ''}`}>
          <div className={s.rotulo}>
            <text className={s.name}>{name}</text>
            <text className={s.type}>{tipoTutor}</text>
          </div>
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
            <OpenNameList nombre={name} cargo={tipoTutor} />
          )}
    </section>
  );
}

export default NameList;
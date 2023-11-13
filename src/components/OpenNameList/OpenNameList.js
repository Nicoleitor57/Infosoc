import React from 'react';
import s from './OpenNameList.module.css';

function OpenNameList(OpenNameListProps) {

  const { nombre, cargo } = OpenNameListProps;

  return (
      <div className={s.info}>
        <div className={s.text}>
          <text className={s.textbold}>Nombre: </text>
          <text>{nombre}</text>
        </div>
        <div className={s.text}>
          <text className={s.textbold}>Cargo: </text>
          <text>{cargo}</text>
        </div>
    </div>
  );
}

export default OpenNameList;
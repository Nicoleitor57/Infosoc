import React from 'react';
import s from './NameList.module.css';

function NameList(NameListProps) {

  const { name, tipoTutor } = NameListProps;

  return (
    <section className={s.list}>
      <div className={s.rotulo}>
        <text>{name}</text>
        <text className={s.type}>{tipoTutor}</text>
      </div>
      <button></button>

    </section>
  );
}

export default NameList;
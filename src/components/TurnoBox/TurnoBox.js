import React from 'react';
import s from './TurnoBox.module.css';

function TurnoBox(TurnoBoxprops) {

  const { name, tipoTutor } = TurnoBoxprops;

  return (
    <section className={s.box}>
       <text className={s.name}>{name}</text>
       <text className={s.type}>{tipoTutor}</text>
    </section>
  );
}

export default TurnoBox;

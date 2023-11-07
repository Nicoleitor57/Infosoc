import React from 'react';
import s from './Turno.module.css';

function Turno(Turnoprops) {

  const { name, tipoTutor, state } = Turnoprops;

  return (
    <section className={s.turno}>
        <div className={s.info}>
          <div className={s.image}>C</div>
          <div className={s.text}>
            <text className={s.name}>{name}</text>
            <text className={s.type}>{tipoTutor}</text>
          </div>
        </div>
        <div className={state === "En turno" ? s.state1 : state === "Ausente" ? s.state2 : s.state3 }>{state}</div>
      </section>
  );
}

export default Turno;

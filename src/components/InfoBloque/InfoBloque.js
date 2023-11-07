import React from 'react';
import s from './InfoBloque.module.css';

function InfoBloque(InfoProps) {

  const { name, bloque } = InfoProps;

  return (
    <section className={s.info}>
      <h2>Información turno actual</h2>
      <div className={s.box}>
        <h2>Administrador:</h2>
        <text>{name}</text>
      </div>
      <div className={s.box}>
        <h2>Bloque:</h2>
        <text>{bloque}</text>
      </div>
    </section>
  );
}

export default InfoBloque;
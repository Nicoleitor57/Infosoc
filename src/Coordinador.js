import React from 'react';
import s from './Coordinador.module.css';
import NameList from './components/NameList/NameList';

function Coordinador() {

  return (
    <section className={s.wrapper}>
      <h1>¡Bienvenido/a</h1>
      <div className={s.list}>
        <text>Lista de tutores y administradores</text>
        <NameList name="Vicente Luongo" tipoTutor="Tutor/a Programación"/>
        <NameList name="Christian Barrios" tipoTutor="Tutor/a Programación"/>
        <NameList name="Sofía Ríos" tipoTutor="Tutor/a Programación"/>
        <button className={s.button}>Ingresar turno</button>
      </div>
      
    </section>
  );
}

export default Coordinador;
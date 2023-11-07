import React from "react";
import s from './Admin.module.css';
import Header from "./components/Header/Header";
import InfoBloque from "./components/InfoBloque/InfoBloque";
import Turno from "./components/Turno/Turno";
import './styles.css';

function Admin() {
  return(
    <>
    <Header/>
    <article className={s.wrapper}>
      <h1>Turnos actuales</h1>
      <div className={s.box}>
        <div className={s.turnos}>
          <Turno name="Christian Barrios" tipoTutor="Tutor/a Mat/Fis" state="En turno"/>
          <Turno name="Sofía Ríos" tipoTutor="Tutor/a Programación" state="Ausente"/>
          <Turno name="Grabiel Venegas" tipoTutor="Tutor/a Programación" state="En reemplazo"/>
          <Turno name="Vicente Luongo" tipoTutor="Tutor/a Mate/Fis" state="Reemplazado"/>
        </div>
        <div className={s.block}>
          <InfoBloque name="Axel Kaempffer" bloque="3-4"/>
          <button className={s.button}>Ingresar turno</button>
          <button className={s.button}>Ingresar reemplazo</button>
        </div>
      </div>
    </article>
    </>
  );
}

export default Admin;
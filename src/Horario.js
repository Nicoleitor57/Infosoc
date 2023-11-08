import React from 'react';
import s from './Horario.module.css';
import TurnoBox from './components/TurnoBox/TurnoBox';

function Horario() {

  return (
    <section className={s.wrapper}>
      <h1>Turnos del semestre</h1>
      <div className={s.horario}>
        <div className={s.days}>
          <div className={s.day}>Lunes</div>
          <div className={s.day}>Martes</div>
          <div className={s.day}>Miércoles</div>
          <div className={s.day}>Jueves</div>
          <div className={s.day}>Viernes</div>
        </div>
        <div className={s.materia}>
          <TurnoBox name="Christian Barrios" tipoTutor="Tutor/a Mat/Fis"/>
        </div>
      </div>
    </section>
  );
}

export default Horario;
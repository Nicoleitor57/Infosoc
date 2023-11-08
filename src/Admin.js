import React, { useState } from 'react';
import s from './Admin.module.css';
import Header from "./components/Header/Header";
import InfoBloque from "./components/InfoBloque/InfoBloque";
import Modal from "./components/Modal/Modal";
import Turno from "./components/Turno/Turno";
import './styles.css';

const Arreglo = [{"nombre":"Christian Barrios", "estado": "En turno", "tipoTutor" : "Tutor/a de Mat/Fis"}, {"nombre":"Sofia Rios", "estado": "Ausente", "tipoTutor" : "Tutor/a de Mat/Fis"}];


function Admin() {
  const [mostrarModal, setMostrarModal] = useState(false);

  const abrirModal = () => {
    setMostrarModal(true);
  };

  const cerrarModal = () => {
    setMostrarModal(false);
  };

  return(
    <>
    <Header/>
    <article className={s.wrapper}>
      <h1>Turnos actuales</h1>
      <div className={s.box}>
        <div className={s.turnos}>
          {Arreglo.map((item) => (         
            <Turno name={item.nombre} tipoTutor={item.tipoTutor} state={item.estado}/>
          ))};
        </div>
        <div className={s.block}>
          <InfoBloque name="Axel Kaempffer" bloque="3-4"/>
          <button className={s.button} onClick={abrirModal}>Ingresar turno</button>
          <button className={s.button}>Ingresar reemplazo</button>
        </div>
      </div>
      <div>
    </div>
    <Modal show={mostrarModal} cerrarModal={cerrarModal} className={s.modal}/>
    </article>
    </>
  );
}

export default Admin;
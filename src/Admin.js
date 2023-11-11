import React, { useState } from 'react';
import s from './Admin.module.css';
import Header from "./components/Header/Header";
import InfoBloque from "./components/InfoBloque/InfoBloque";
import Modal from "./components/Modal/Modal";
import ModalReem from "./components/Modal/ModalReemp.css";
import Turno from "./components/Turno/Turno";
import './styles.css';

const Arreglo = [{"nombre":"Christian Barrios", "estado": "En turno", "tipoTutor" : "Tutor/a de Mat/Fis"}, {"nombre":"Sofia Rios", "estado": "Ausente", "tipoTutor" : "Tutor/a de Mat/Fis"}];


function Admin() {
  
  const [editing, setEditing] = useState(false);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [ModalR, setModal] = useState(false);
  const [textoEditable, setTextoEditable] = useState("Ingresa tu texto aquí...");


  const changeModal = () => {
    setModal(!ModalR);
  }

  const abrirModal = () => {
    setMostrarModal(true);
  };

  const cerrarModal = () => {
    setModal(false);
  };
  const handleContentEditableClick = (e) => {
    // Detener la propagación del evento para evitar cerrar el modal
    setTextoEditable("");
    e.stopPropagation();
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
          <button className={s.button} onClick={changeModal}>Ingresar reemplazo</button>
          
        </div>
      </div>
      <div>
    </div>
    <Modal show={mostrarModal} cerrarModal={cerrarModal} className={s.modal}/>
    {ModalR && (
      <div className={`overlay ${ModalR ? 'show' : 'hide'}`} onClick={changeModal}>
      <div className={`modal ${ModalR ? 'show' : 'hide'}`}>
        <div className='modal-content'>
          <h2>Información de reemplazo</h2>
          <p>ROL de quién se reemplaza</p>
          <div
            className={`editable-div ${editing ? 'editing' : ''}`}
            contentEditable="true"
            onClick={handleContentEditableClick}
        >
            {textoEditable}
        </div>
          <button className='close-modal' onClick={changeModal}>X</button>
        </div>
      </div>
    </div>
    )}
    </article>
    
    </>
    
  );
}

export default Admin;
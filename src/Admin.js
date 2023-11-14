import React, { useState } from 'react';
import s from './Admin.module.css';
import './ModalReemp.css';
import Header from "./components/Header/Header";
import InfoBloque from "./components/InfoBloque/InfoBloque";
import Turno from "./components/Turno/Turno";
import './styles.css';

// const Arreglo = [{"nombre":"Christian Barrios", "estado": "En turno", "tipoTutor" : "Tutor/a de Mat/Fis"}, {"nombre":"Sofia Rios", "estado": "Ausente", "tipoTutor" : "Tutor/a de Mat/Fis"}];


function Admin() {
  const [editing] = useState(false);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [data] = useState([]);
  const [id, setId] = useState('');
  const [accessError, setAccessError] = useState(false);
  const [accessSuccess, setAccessSuccess] = useState(false);

  const [ModalR, setModal] = useState(false);
  const [textoEditable, setTextoEditable] = useState("Ingresa tu texto aquí...");
  //axios.get('http://localhost:9000/api/tutores') 

  const changeModal = () => {
    setModal(!ModalR);
  };

  //Abre la modal de ingresar turno
  const abrirModal = () => {
    setMostrarModal(true);
  };

  //Cierra la modal de ingresar turno
  const cerrarModal = () => {
    setMostrarModal(false);
    setModal(false);
    setAccessError(false);
    setAccessSuccess(false);
  };

  const handleContentEditableClick = (e) => {
    // Detener la propagación del evento para evitar cerrar el modal
    setTextoEditable("");
    e.stopPropagation();
  };


  //Comprueba que el ID exista en la base de datos de los tutores.
  const comprobarId = () => {
    console.log('ID ingresado:', id);

    const comprobacion = true;

    if (comprobacion){
      setAccessSuccess(true);
    }
    else{setAccessError(true)} 
  };

  //Recupera el ID del input
  const recuperarId = (event) => {
    setId(event.target.value);
  };
  
  
  return(
    <>
    <Header/>
    <article className={s.wrapper}>
      <h1>Turnos actuales</h1>
      <div className={s.box}>
        <div className={s.turnos}>
        {data.map((item) => (         
          <Turno
            name={item.name}
            tipoTutor={item.tipoTutor}
            state={
              item.Estado === 0 ? 'Ausente' :
              item.Estado === 1 ? 'En turno' :
              item.Estado === 2 ? 'Reemplazado' :
              'Estado desconocido'
            }
          />
        ))}
        </div>
        <div className={s.block}>
          <InfoBloque name="Axel Kaempffer" bloque="3-4"/>
          <button className={s.button3} onClick={abrirModal}>Ingresar turno</button>
          <button className={s.button3} onClick={changeModal}>Ingresar reemplazo</button>
        </div>
      </div>
      <div>
    </div>
    {mostrarModal && (
      <div className={`overlay ${mostrarModal ? 'show' : 'hide'}`}>
        <div className={`modal ${mostrarModal ? 'show' : 'hide'}`}>
          <div className='modal-content'>
              <section className={s.modal}>
                <div className={s.title}>
            <h2>Ingresar turno</h2>
            <button onClick={cerrarModal} className={s.icon}>
              <img src="/close.svg" alt="Icono cerrar"/>
            </button>
          </div>
          <div className={s.box2}>
            <text className={s.subtitle}>Lee el código QR del tutor/a</text>
            <div className={s.codigoQR}>
              <img src="/codigoQR.png" alt="Imagen de un código QR" className={s.image}/>
              <input type="text" name="id" value={id} onChange={recuperarId} className={s.input}/>
            </div>
            <div className={s.buttons}>
              <button className={s.button} onClick={comprobarId} >Ingresar</button>
              <button className={s.button2}>Ingresar de forma manual</button>
              {accessSuccess && (
                <div className={s.success}>
                  Fue ingresado correctamente
                </div>
              )}
              {accessError && (
                <div className={s.error}>
                  No existe este tutor en nuestra base de datos
                </div>
              )}
            </div>
          </div>
        </section>
          </div>
       </div>
      </div>
    )}
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
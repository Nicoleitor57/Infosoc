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

  const [ModalR, setModal] = useState(false);
  const [textoEditable, setTextoEditable] = useState("Ingresa tu texto aquí...");

  //axios.get('http://localhost:9000/api/tutores') 

  const changeModal = () => {
    setModal(!ModalR);
  };

  const abrirModal = (onUpdateTutores) => {
    //logica para recuperar el id de un tutor que se igresa -> consultar base de datos.
    onUpdateTutores(id, 1);

    setMostrarModal(true);
  };

  const cerrarModal = () => {
    setMostrarModal(false);
    setModal(false);
  };
  const handleContentEditableClick = (e) => {
    // Detener la propagación del evento para evitar cerrar el modal
    setTextoEditable("");
    e.stopPropagation();
  };

  const desplegarTutores = ({data}) => {
    const [states, setStates] = useState([]);
    
  
    useEffect(() => {
  
      const initialStates = data.map(()=>0);
      setStates(initialStates);
  
    },[data]);
  
    const updateStates = (idTutor, newState) => {
      setStates((previousStates) => {
        const index = data.findIndex((item)=> item.id === idTutor);
        const newStates = [...previousStates];
  
        newStates[index] = newState;
        
        return newStates;
      })
    };
  
    return (
      data.map((item, index) => (         
        <Turno
          name={item.name}
          tipoTutor={item.tipoTutor}
          state={
            states[index] === 0 ? 'Ausente' :
            states[index] === 1 ? 'En turno' :
            states[index] === 2 ? 'Reemplazado' :
            'Estado desconocido'
          }
        />
      ))
    );
  };







  
  return(
    <>
    <Header/>
    <article className={s.wrapper}>
      <h1>Turnos actuales</h1>
      <div className={s.box}>
        <div className={s.turnos}>
        {desplegarTutores(data)}
        </div>
        <div className={s.block}>
          <InfoBloque name="Axel Kaempffer" bloque="3-4"/>
          <button className={s.button3} onClick={abrirModal(updateStates)}>Ingresar turno</button>
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
              <img src="/codigoQR (1).png" alt="Imagen de un código QR" className={s.image}/>
              <input className={s.input}/>
            </div>
            <div className={s.buttons}>
              <button className={s.button}>Ingresar</button>
              <button className={s.button2}>Ingresar de forma manual</button>
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
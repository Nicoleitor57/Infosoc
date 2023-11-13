import React, { useState, useEffect } from 'react';
import s from './Admin.module.css';
import Header from "./components/Header/Header";
import InfoBloque from "./components/InfoBloque/InfoBloque";
import Modal from "./components/Modal/Modal";
import Turno from "./components/Turno/Turno";
import './styles.css';
import ModalReem from "./components/Modal/ModalReemp.css";
import axios from 'axios';

// const Arreglo = [{"nombre":"Christian Barrios", "estado": "En turno", "tipoTutor" : "Tutor/a de Mat/Fis"}, {"nombre":"Sofia Rios", "estado": "Ausente", "tipoTutor" : "Tutor/a de Mat/Fis"}];


function Admin() {
  const [editing, setEditing] = useState(false);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [ModalR, setModal] = useState(false);
  const [textoEditable, setTextoEditable] = useState("Ingresa tu texto aquí...");

  useEffect(() => {
    // Realiza una solicitud GET a la API
    axios.get('http://localhost:9000/api/tutores')
      .then(response => {
        const apiData = response.data;
        console.log('Data de la API:', apiData); // Muestra la data en la consola
        setData(apiData); // Almacena los datos en el estado del componente
      })
      .catch(error => {
        console.error('Error al obtener datos de la API', error);
      });
  }, []);

  const actualizarDatos = () => {
    const id = data._id;
    const nuevoEstado = {
      Estado: 1
    }
    const apiUrl = `http://localhost:9000/api/tutores/state/654be25c63b825b26dcf8642`;

    const requestOptions = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(nuevoEstado),
    };

    return fetch(apiUrl, requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error al actualizar datos: ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        window.location.reload();
        console.log('Datos actualizados con éxito', data);
        return data;
      })
      .catch(error => {
        console.error('Error en la solicitud:', error);
        throw error;
      });
  };

  

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
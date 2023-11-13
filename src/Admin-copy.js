import React, { useState, useEffect } from 'react';
import s from './Admin.module.css';
import Header from "./components/Header/Header";
import InfoBloque from "./components/InfoBloque/InfoBloque";
import Modal from "./components/Modal/Modal";
import Turno from "./components/Turno/Turno";
import './styles.css';
import axios from 'axios';

// const Arreglo = [{"nombre":"Christian Barrios", "estado": "En turno", "tipoTutor" : "Tutor/a de Mat/Fis"}, {"nombre":"Sofia Rios", "estado": "Ausente", "tipoTutor" : "Tutor/a de Mat/Fis"}];


function Admin() {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [data, setData] = useState([]);
  
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

  

  const abrirModal = () => {
    setMostrarModal(true);
  };

  const cerrarModal = () => {
    setMostrarModal(false);
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
          <button className={s.button} onClick={abrirModal}>Ingresar turno</button>
          <button className={s.button} onClick={actualizarDatos}>Ingresar reemplazo</button>
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
import React from 'react';
import s from './Coordinador.module.css';
import NameList from './components/NameList/NameList';

function Coordinador() {
  //const [mostrarModal, setMostrarModal] = useState(false);


  const abrirModal = () => {
    
  }


  return (

    <section className={s.wrapper}>
      <h1>¡Bienvenido/a</h1>
      <div className={s.list}>
        <text>Lista de tutores y administradores</text>
        <NameList name="Vicente Wofwofwof" tipoTutor="Tutor/a sex"/>
        <NameList name="Christian Barrios" tipoTutor="Tutor/a Programación"/>
        <NameList name="Sofía Ríos" tipoTutor="Tutor/a Programación"/>
        <button onClick={abrirModal} className={s.button}>Ingresar tutor</button>
      </div>
      
    </section>
  );
}

export default Coordinador;
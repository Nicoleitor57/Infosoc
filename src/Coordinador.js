import React from 'react';
import s from './Coordinador.module.css';
import NameList from './components/NameList/NameList';
import Header from "./components/Header/Header";

function Coordinador() {
  //const [mostrarModal, setMostrarModal] = useState(false);


  const abrirModal = () => {
    
  }


  return (
    <>
    <Header/>
    <section className={s.wrapper}>
      <h1>¡Bienvenido/a</h1>
      <div className={s.list}>
        <text>Lista de tutores y administradores</text>
        <NameList name="Vicente Wofwofwof" tipoTutor="Tutor/a sex"/>
        <NameList name="Christian Barrios" tipoTutor="full stack developer"/>
        <NameList name="Sofía Ríos" tipoTutor="Delegada de genero"/>
        <button onClick={abrirModal} className={s.button}>Ingresar tutor</button>
      </div>
      
    </section>
    </>
  );
}

export default Coordinador;
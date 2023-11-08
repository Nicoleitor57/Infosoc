import React from 'react';
import s from './Modal.module.css';

function Modal(Modalprops) {

  if (!Modalprops.show) {
    return null;
  }

  return (
    <section className={s.modal}>
      <div className={s.title}>
        <h2>Ingresar turno</h2>
        <button onClick={Modalprops.cerrarModal} className={s.icon}>
          <img src="/close.svg" alt="Icono cerrar"/>
        </button>
      </div>
      <div className={s.box}>
        <text>Lee el código QR del tutor/a</text>
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
  );
}

export default Modal;

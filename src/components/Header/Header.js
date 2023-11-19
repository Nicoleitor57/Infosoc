import React from 'react';
import { Link } from 'react-router-dom';
import s from './Header.module.css';

function Header() {

  return (
    <section className={s.header}>
      <img src="/Logo.svg" alt="Logo" className={s.logo}/>
      <div className={s.links}>
        <Link to="/">
          <button className={s.button}>Home</button>
        </Link>
        <Link to="/">
          <button className={s.button}>Cerrar sesión</button>
        </Link>
      </div>
    </section>
  );
}

export default Header;
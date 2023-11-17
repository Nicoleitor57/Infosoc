
import s from './Coordinador.module.css';
import NameList from './components/NameList/NameList';
import Header from "./components/Header/Header";
import React, { useState } from 'react';


function Coordinador() {

  const tutores = [
    {
      nombre: "Vicente Luongo",
      tipoTutor: "Tutor/a Programación",
      rol : "202111555-5",
      rut : "12345678-9",
      turnos : ["Miercoles 3-4", "Jueves 5-6"],
    },
    {
      nombre: "Christian Barrios",
      tipoTutor: "Tutor/a Programación",
      rol : "202022555-6",
      rut : "11223344-9",
      turnos : ["Miercoles 3-4", "Miercoles 5-6", "Jueves 5-6"],
    },
    {
      nombre: "Sofía Ríos",
      tipoTutor: "Tutor/a Programación",
      rol : "202123456-7",
      rut : "55667788-9",
      turnos : ["lunes 1-2", "viernes 7-8"],
    },
<<<<<<< Updated upstream
  ];
=======
  ]);

  const [isAddingTutor, setIsAddingTutor] = useState(false);

  const handleAddTutorClick = () => {
    setIsAddingTutor(true);
  };

  const handleSaveTutor = (tutorAttributes) => {
    setTurores((prevTutores) => [...prevTutores, tutorAttributes]);
    console.log('Tutor attributes:', tutorAttributes);
    setIsAddingTutor(false);
  };

  const handleCancelAddTutor = () => {
    setIsAddingTutor(false);
  };
>>>>>>> Stashed changes

  return (
    <>
      <Header />
      <section className={s.wrapper}>
        <h1>¡Bienvenido/a</h1>
        <div className={s.list}>
          <p>Lista de tutores y administradores</p>
          {tutores.map((tutor, index) => (
            <NameList
              key={index}
              name={tutor.nombre}
              tipoTutor={tutor.tipoTutor}
              rol={tutor.rol}
              rut={tutor.rut}
              turnos={tutor.turnos}

            />
          ))}
<<<<<<< Updated upstream
          <button className={s.button}>Añadir tutor</button>
        </div>
      </section>
=======
          <button className={s.button} onClick={handleAddTutorClick} >
            Añadir tutor
          </button>
        </div>
      </section>
      {isAddingTutor && (
        <TutorForm onClose={handleCancelAddTutor} onSave={handleSaveTutor} />
      )}
>>>>>>> Stashed changes
    </>
  );
}

export default Coordinador;
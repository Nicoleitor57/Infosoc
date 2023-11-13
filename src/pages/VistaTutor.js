import { Link } from "react-router-dom";
import styles from "./VistaTutor.module.css";

const VistaTutor = () => {
  return (
    <div className={styles.vistaTutor}>
      <div className={styles.holaSkelia}>Hola, Skelia!</div>
      <div className={styles.estadsticasDelMes}>
        Estadísticas del mes de Octubre:
      </div>
      <div className={styles.ciac}>
        <img className={styles.ciacChild} alt="" src="/group-221.svg" />
        <div className={styles.homeParent}>
          <div className={styles.home}>Home</div>
          <div className={styles.home}>Cerrar Sesión</div>
        </div>
      </div>
      <Link className={styles.turnos} to="/ventana-turnos">
        <div className={styles.turnosInner}>
          <div className={styles.turnosInner}>
            <div className={styles.turnosInner}>
              <div className={styles.groupChild} />
              <div className={styles.turnos1}>Turnos</div>
              <div className={styles.div}>8</div>
              <div className={styles.enElMes}>En el mes</div>
              <div className={styles.div1}>50%</div>
            </div>
            <div className={styles.groupItem} />
            <img className={styles.groupInner} alt="" src="/ellipse-23.svg" />
          </div>
        </div>
      </Link>
      <Link className={styles.horas} to="/ventana-de-horas">
        <div className={styles.rectangleGroup}>
          <div className={styles.rectangleDiv} />
          <div className={styles.horas1}>Horas</div>
          <div className={styles.div2}>9</div>
          <div className={styles.enElMes1}>En el mes</div>
        </div>
        <div className={styles.parent}>
          <div className={styles.div3}>50%</div>
          <div className={styles.ellipseDiv} />
          <div className={styles.ellipseDiv} />
          <img className={styles.ellipseIcon} alt="" src="/ellipse-22.svg" />
        </div>
      </Link>
      <Link className={styles.reemplazos} to="/ventana-de-reemplazos">
        <div className={styles.rectangleGroup}>
          <div className={styles.rectangleGroup}>
            <div className={styles.groupChild2} />
            <div className={styles.reemplazos1}>Reemplazos</div>
            <div className={styles.div4}>2</div>
            <div className={styles.enElMes2}>En el mes</div>
            <div className={styles.div5}>50%</div>
          </div>
          <div className={styles.groupChild3} />
          <img className={styles.groupChild4} alt="" src="/ellipse-21.svg" />
        </div>
      </Link>
      <Link className={styles.ausencias} to="/ventana-de-ausencias">
        <div className={styles.rectangleGroup}>
          <div className={styles.rectangleGroup}>
            <div className={styles.groupChild2} />
            <div className={styles.reemplazos1}>Ausencias</div>
            <div className={styles.div6}>1</div>
            <div className={styles.enElMes2}>En el mes</div>
            <div className={styles.div5}>50%</div>
          </div>
          <div className={styles.groupChild3} />
          <img className={styles.groupChild4} alt="" src="/ellipse-2.svg" />
        </div>
      </Link>
      <button className={styles.filtro}>
        <div className={styles.filtroPorMes}>Filtro por mes: Octubre</div>
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      </button>
      <div className={styles.historial}>
        <div className={styles.frame}>
          <div className={styles.frameInner}>
            <div className={styles.frameChild} />
          </div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.frame1}>
            <div className={styles.fecha}>Fecha</div>
            <div className={styles.bloque}>Bloque</div>
            <div className={styles.asisiti}>Asisitió</div>
            <div className={styles.reemplazo}>Reemplazo</div>
          </div>
          <div className={styles.group}>
            <div className={styles.div8}>10/10/2023</div>
            <div className={styles.div9}>1-2</div>
            <div className={styles.s}>Sí</div>
            <div className={styles.noAplica}>No aplica</div>
          </div>
          <div className={styles.group}>
            <div className={styles.div8}>12/10/2023</div>
            <div className={styles.div9}>11-12</div>
            <div className={styles.s}>Sí</div>
            <div className={styles.noAplica}>No aplica</div>
          </div>
          <div className={styles.group}>
            <div className={styles.div8}>17/10/2023</div>
            <div className={styles.div9}>1-2</div>
            <div className={styles.s}>Sí</div>
            <div className={styles.noAplica}>No aplica</div>
          </div>
          <div className={styles.group}>
            <div className={styles.div8}>19/10/2023</div>
            <div className={styles.div9}>11-12</div>
            <div className={styles.s}>No</div>
            <div className={styles.noAplica}>Sofía Ríos</div>
          </div>
          <div className={styles.group}>
            <div className={styles.div8}>24/10/2023</div>
            <div className={styles.div9}>11-12</div>
            <div className={styles.s}>No</div>
            <div className={styles.noAplica}>Sofía Ríos</div>
          </div>
        </div>
        <div className={styles.frame2}>
          <div className={styles.frame3}>
            <div className={styles.home}>Historial</div>
          </div>
        </div>
        <img className={styles.historialChild} alt="" src="/vector-9.svg" />
        <img className={styles.historialItem} alt="" src="/vector-9.svg" />
      </div>
    </div>
  );
};

export default VistaTutor;

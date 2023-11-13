import { Link } from "react-router-dom";
import styles from "./VentanaTurnos.module.css";

const VentanaTurnos = () => {
  return (
    <div className={styles.ventanaTurnos}>
      <div className={styles.holaSkelia}>Hola, Skelia!</div>
      <div className={styles.estadsticasDelMes}>
        Estadísticas del mes de Octubre:
      </div>
      <div className={styles.horas}>
        <div className={styles.horasParent}>
          <div className={styles.horas1}>Horas</div>
          <div className={styles.div}>9</div>
          <div className={styles.enElMes}>En el mes</div>
        </div>
        <div className={styles.parent}>
          <div className={styles.div1}>50%</div>
          <div className={styles.frameChild} />
          <div className={styles.frameChild} />
          <img className={styles.frameInner} alt="" src="/ellipse-22.svg" />
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.reemplazosParent}>
          <div className={styles.reemplazos}>Reemplazos</div>
          <div className={styles.div2}>2</div>
          <div className={styles.enElMes1}>En el mes</div>
          <div className={styles.div3}>50%</div>
        </div>
        <div className={styles.ellipseDiv} />
        <img className={styles.ellipseIcon} alt="" src="/ellipse-21.svg" />
      </div>
      <div className={styles.historial}>
        <div className={styles.frameGroup}>
          <div className={styles.group}>
            <div className={styles.div4}>10/10/2023</div>
            <div className={styles.div5}>1-2</div>
            <div className={styles.s}>Sí</div>
            <div className={styles.noAplica}>No aplica</div>
          </div>
          <div className={styles.container}>
            <div className={styles.div4}>12/10/2023</div>
            <div className={styles.div5}>11-12</div>
            <div className={styles.s}>Sí</div>
            <div className={styles.noAplica}>No aplica</div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.div4}>17/10/2023</div>
            <div className={styles.div5}>1-2</div>
            <div className={styles.s}>Sí</div>
            <div className={styles.noAplica}>No aplica</div>
          </div>
          <div className={styles.parent1}>
            <div className={styles.div4}>19/10/2023</div>
            <div className={styles.div5}>11-12</div>
            <div className={styles.s}>No</div>
            <div className={styles.noAplica}>Sofía Ríos</div>
          </div>
          <div className={styles.parent2}>
            <div className={styles.div4}>24/10/2023</div>
            <div className={styles.div5}>11-12</div>
            <div className={styles.s}>No</div>
            <div className={styles.noAplica}>Sofía Ríos</div>
          </div>
          <div className={styles.fecha}>Fecha</div>
          <div className={styles.bloque}>Bloque</div>
          <div className={styles.asisiti}>Asisitió</div>
          <div className={styles.reemplazo}>Reemplazo</div>
        </div>
        <div className={styles.historial1}>Historial</div>
        <img className={styles.historialChild} alt="" src="/vector-9.svg" />
        <img className={styles.historialItem} alt="" src="/vector-9.svg" />
        <div className={styles.historialInner}>
          <div className={styles.rectangleDiv} />
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.reemplazosParent}>
          <div className={styles.reemplazos}>Ausencias</div>
          <div className={styles.div14}>1</div>
          <div className={styles.enElMes1}>En el mes</div>
          <div className={styles.div3}>50%</div>
        </div>
        <div className={styles.ellipseDiv} />
        <img className={styles.ellipseIcon} alt="" src="/ellipse-2.svg" />
      </div>
      <div className={styles.ciac}>
        <img className={styles.ciacChild} alt="" src="/group-221.svg" />
        <div className={styles.homeParent}>
          <div className={styles.home}>Home</div>
          <div className={styles.home}>Cerrar Sesión</div>
        </div>
      </div>
      <div className={styles.frameParent1}>
        <div className={styles.frameParent2}>
          <div className={styles.reemplazosParent}>
            <div className={styles.reemplazos}>Turnos</div>
            <div className={styles.div2}>8</div>
            <div className={styles.enElMes1}>En el mes</div>
            <div className={styles.div3}>50%</div>
          </div>
          <div className={styles.ellipseDiv} />
          <img className={styles.ellipseIcon} alt="" src="/ellipse-23.svg" />
        </div>
        <div className={styles.frameParent3}>
          <div className={styles.turnosGroup}>
            <div className={styles.reemplazos}>Turnos</div>
            <div className={styles.div2}>8</div>
            <div className={styles.enElMes1}>En el mes</div>
            <div className={styles.div3}>50%</div>
          </div>
          <div className={styles.ellipseDiv} />
          <img className={styles.ellipseIcon} alt="" src="/ellipse-23.svg" />
        </div>
      </div>
      <div className={styles.filtro}>
        <div className={styles.home}>Filtro por mes: Octubre</div>
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      </div>
      <div className={styles.tablaDeAsistencia}>
        <div className={styles.fechaDeTurnoParent}>
          <div className={styles.fechaDeTurno}>Fecha de Turno</div>
          <div className={styles.bloque1}>Bloque</div>
          <div className={styles.div20}>
            <p className={styles.p}>10/10/2023</p>
            <p className={styles.p}>12/10/2023</p>
            <p className={styles.p}>17/10/2023</p>
            <p className={styles.p}>31/10/2023</p>
            <p className={styles.p}>&nbsp;</p>
            <p className={styles.blankLine1}>&nbsp;</p>
          </div>
          <div className={styles.div21}>
            <p className={styles.p}>1-2</p>
            <p className={styles.p}>11-12</p>
            <p className={styles.p}>1-2</p>
            <p className={styles.p}>1-2</p>
            <p className={styles.p}>&nbsp;</p>
            <p className={styles.p}>&nbsp;</p>
            <p className={styles.p}>&nbsp;</p>
            <p className={styles.p}>&nbsp;</p>
            <p className={styles.blankLine1}>&nbsp;</p>
          </div>
          <img className={styles.lineIcon} alt="" src="/line-11.svg" />
          <div className={styles.lineDiv} />
          <div className={styles.groupParent}>
            <img className={styles.groupIcon} alt="" src="/group-5.svg" />
            <div className={styles.div22}>50%</div>
          </div>
          <div className={styles.turnosAsistidosDe}>
            Turnos Asistidos de Skelia:
          </div>
        </div>
      </div>
      <Link className={styles.out} id="Out" to="/vista-tutor" muted>
        <img className={styles.vectorIcon1} alt="" src="/vector2.svg" />
        <img className={styles.vectorIcon2} alt="" src="/vector3.svg" />
      </Link>
    </div>
  );
};

export default VentanaTurnos;

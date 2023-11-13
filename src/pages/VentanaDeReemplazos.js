import { Link } from "react-router-dom";
import styles from "./VentanaDeReemplazos.module.css";

const VentanaDeReemplazos = () => {
  return (
    <div className={styles.ventanaDeReemplazos}>
      <div className={styles.holaSkelia}>Hola, Skelia!</div>
      <div className={styles.estadsticasDelMes}>
        Estadísticas del mes de Octubre:
      </div>
      <div className={styles.frameParent}>
        <div className={styles.turnosParent}>
          <div className={styles.turnos}>Turnos</div>
          <div className={styles.div}>8</div>
          <div className={styles.enElMes}>En el mes</div>
          <div className={styles.div1}>50%</div>
        </div>
        <div className={styles.frameChild} />
        <img className={styles.frameItem} alt="" src="/ellipse-23.svg" />
      </div>
      <div className={styles.reemplazos}>
        <div className={styles.frameGroup}>
          <div className={styles.turnosParent}>
            <div className={styles.turnos}>Reemplazos</div>
            <div className={styles.div}>2</div>
            <div className={styles.enElMes}>En el mes</div>
            <div className={styles.div1}>50%</div>
          </div>
          <div className={styles.frameChild} />
          <img className={styles.frameItem} alt="" src="/ellipse-21.svg" />
        </div>
      </div>
      <div className={styles.historial}>
        <div className={styles.frameContainer}>
          <div className={styles.frame}>
            <div className={styles.fecha}>Fecha</div>
            <div className={styles.bloque}>Bloque</div>
            <div className={styles.asisiti}>Asisitió</div>
            <div className={styles.reemplazo}>Reemplazo</div>
          </div>
          <div className={styles.parent}>
            <div className={styles.div4}>10/10/2023</div>
            <div className={styles.div5}>1-2</div>
            <div className={styles.s}>Sí</div>
            <div className={styles.noAplica}>No aplica</div>
          </div>
          <div className={styles.parent}>
            <div className={styles.div4}>12/10/2023</div>
            <div className={styles.div5}>11-12</div>
            <div className={styles.s}>Sí</div>
            <div className={styles.noAplica}>No aplica</div>
          </div>
          <div className={styles.parent}>
            <div className={styles.div4}>17/10/2023</div>
            <div className={styles.div5}>1-2</div>
            <div className={styles.s}>Sí</div>
            <div className={styles.noAplica}>No aplica</div>
          </div>
          <div className={styles.parent}>
            <div className={styles.div4}>19/10/2023</div>
            <div className={styles.div5}>11-12</div>
            <div className={styles.s}>No</div>
            <div className={styles.noAplica}>Sofía Ríos</div>
          </div>
          <div className={styles.parent}>
            <div className={styles.div4}>24/10/2023</div>
            <div className={styles.div5}>11-12</div>
            <div className={styles.s}>No</div>
            <div className={styles.noAplica}>Sofía Ríos</div>
          </div>
        </div>
        <div className={styles.historial1}>Historial</div>
        <img className={styles.historialChild} alt="" src="/vector-9.svg" />
        <img className={styles.historialItem} alt="" src="/vector-9.svg" />
      </div>
      <div className={styles.frameParent1}>
        <div className={styles.turnosParent}>
          <div className={styles.turnos}>Ausencias</div>
          <div className={styles.div14}>1</div>
          <div className={styles.enElMes}>En el mes</div>
          <div className={styles.div1}>50%</div>
        </div>
        <div className={styles.frameChild} />
        <img className={styles.frameItem} alt="" src="/ellipse-2.svg" />
      </div>
      <div className={styles.ciac}>
        <img className={styles.ciacChild} alt="" src="/group-221.svg" />
        <div className={styles.homeParent}>
          <div className={styles.home}>Home</div>
          <div className={styles.home}>Cerrar Sesión</div>
        </div>
      </div>
      <div className={styles.historial2}>
        <div className={styles.home}>Filtro: Octubre</div>
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      </div>
      <div className={styles.botonTurnos}>
        <div className={styles.horasParent}>
          <div className={styles.horas}>Horas</div>
          <div className={styles.div16}>9</div>
          <div className={styles.enElMes3}>En el mes</div>
        </div>
        <div className={styles.parent2}>
          <div className={styles.div17}>50%</div>
          <div className={styles.frameChild2} />
          <div className={styles.frameChild2} />
          <img className={styles.frameChild4} alt="" src="/ellipse-22.svg" />
        </div>
      </div>
      <div className={styles.tablaReemplazos}>
        <div className={styles.turnosDeReemplazoDeSkeliaParent}>
          <div className={styles.turnosDeReemplazo}>
            Turnos de Reemplazo de Skelia:
          </div>
          <img className={styles.lineIcon} alt="" src="/line-11.svg" />
          <div className={styles.tutorAlQue}>Tutor al que reemplazo</div>
          <div className={styles.fechaDeTurno}>Fecha de Turno</div>
          <div className={styles.bloque1}>Bloque</div>
          <div className={styles.div18}>
            <p className={styles.p}>10/10/2023</p>
            <p className={styles.p}>12/10/2023</p>
            <p className={styles.p}>17/10/2023</p>
            <p className={styles.p}>31/10/2023</p>
            <p className={styles.p}>&nbsp;</p>
            <p className={styles.blankLine1}>&nbsp;</p>
          </div>
          <div className={styles.diegoDebarcaFranciscaContainer}>
            <p className={styles.p}>Diego Debarca</p>
            <p className={styles.p}>Francisca Figeroa</p>
            <p className={styles.p}>Carolina Muñoz</p>
            <p className={styles.p}>Gabriel Venegas</p>
            <p className={styles.p}>&nbsp;</p>
            <p className={styles.blankLine1}>&nbsp;</p>
          </div>
          <div className={styles.div19}>
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
          <img className={styles.frameChild5} alt="" src="/line-11.svg" />
        </div>
        <div className={styles.ellipseParent}>
          <div className={styles.frameChild6} />
          <img className={styles.frameChild7} alt="" src="/ellipse-25.svg" />
          <div className={styles.div20}>50%</div>
        </div>
      </div>
      <Link className={styles.out} to="/vista-tutor">
        <img className={styles.vectorIcon1} alt="" src="/vector2.svg" />
        <img className={styles.vectorIcon2} alt="" src="/vector3.svg" />
      </Link>
    </div>
  );
};

export default VentanaDeReemplazos;

import { Link } from "react-router-dom";
import styles from "./VentanaDeHoras.module.css";

const VentanaDeHoras = () => {
  return (
    <div className={styles.ventanaDeHoras}>
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
      <div className={styles.historial}>
        <div className={styles.frameContainer}>
          <div className={styles.parent}>
            <div className={styles.div4}>10/10/2023</div>
            <div className={styles.div5}>1-2</div>
            <div className={styles.s}>Sí</div>
            <div className={styles.noAplica}>No aplica</div>
          </div>
          <div className={styles.group}>
            <div className={styles.div4}>12/10/2023</div>
            <div className={styles.div5}>11-12</div>
            <div className={styles.s}>Sí</div>
            <div className={styles.noAplica}>No aplica</div>
          </div>
          <div className={styles.container}>
            <div className={styles.div4}>17/10/2023</div>
            <div className={styles.div5}>1-2</div>
            <div className={styles.s}>Sí</div>
            <div className={styles.noAplica}>No aplica</div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.div4}>19/10/2023</div>
            <div className={styles.div5}>11-12</div>
            <div className={styles.s}>No</div>
            <div className={styles.noAplica}>Sofía Ríos</div>
          </div>
          <div className={styles.parent1}>
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
      <div className={styles.filtro}>
        <div className={styles.home}>Filtro: Octubre</div>
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      </div>
      <div className={styles.horas}>
        <div className={styles.horasParent}>
          <div className={styles.horas1}>Horas</div>
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
      <div className={styles.tablaDeHorasWrapper}>
        <div className={styles.tablaDeHoras}>
          <div className={styles.pagoMensualPor}>
            Pago Mensual por Hora: 1[hr] = $Paga
          </div>
          <div className={styles.tablaDeIngreso}>
            <div className={styles.pagoMensualTotal}>Pago Mensual: $total</div>
            <div className={styles.horasTotales250minContainer}>
              <span>Horas Totales: 250</span>
              <span className={styles.min}>[min]</span>
              <span> = 4,17</span>
              <span className={styles.min}>[hr]</span>
            </div>
            <div className={styles.horas2}>Horas</div>
            <div className={styles.horaDeSalida}>Hora de Salida</div>
            <div className={styles.horaDeIngreso}>Hora de Ingreso</div>
            <div className={styles.fecha1}>Fecha</div>
            <img
              className={styles.tablaDeIngresoChild}
              alt=""
              src="/line-11.svg"
            />
            <img
              className={styles.tablaDeIngresoItem}
              alt=""
              src="/line-11.svg"
            />
            <img
              className={styles.tablaDeIngresoInner}
              alt=""
              src="/line-11.svg"
            />
            <img className={styles.lineIcon} alt="" src="/line-11.svg" />
            <div className={styles.lineDiv} />
            <div className={styles.tablaDeIngresoChild1} />
            <div className={styles.tablaDeIngresoChild2} />
            <div className={styles.dependeSiSon}>
              depende si son horas cronológicas o horas pedagógicas
            </div>
            <div className={styles.div18}>
              <p className={styles.p}>9:26</p>
              <p className={styles.p}>{`17:10  `}</p>
              <p className={styles.p2}>{`9:30 `}</p>
            </div>
            <div className={styles.div19}>
              <p className={styles.p}>8:00</p>
              <p className={styles.p}>15:46</p>
              <p className={styles.p2}>8:10</p>
            </div>
            <div className={styles.div20}>
              <p className={styles.p}>10/10/2023</p>
              <p className={styles.p}>12/10/2023</p>
              <p className={styles.p2}>17/10/2023</p>
            </div>
          </div>
          <div className={styles.tablaDeHorasChild} />
          <div className={styles.horasTotalesDe}>Horas totales de Skelia:</div>
        </div>
      </div>
      <Link className={styles.out} to="/vista-tutor">
        <img className={styles.vectorIcon1} alt="" src="/vector2.svg" />
        <img className={styles.vectorIcon2} alt="" src="/vector3.svg" />
      </Link>
    </div>
  );
};

export default VentanaDeHoras;

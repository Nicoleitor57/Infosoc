import { Link } from "react-router-dom";
import styles from "./VentanaDeAusencias.module.css";

const VentanaDeAusencias = () => {
  return (
    <div className={styles.ventanaDeAusencias}>
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
            <div className={styles.div6}>12/10/2023</div>
            <div className={styles.div7}>11-12</div>
            <div className={styles.no}>Sí</div>
            <div className={styles.sofaRos}>No aplica</div>
          </div>
          <div className={styles.container}>
            <div className={styles.div6}>17/10/2023</div>
            <div className={styles.div7}>1-2</div>
            <div className={styles.no}>Sí</div>
            <div className={styles.sofaRos}>No aplica</div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.div6}>19/10/2023</div>
            <div className={styles.div7}>11-12</div>
            <div className={styles.no}>No</div>
            <div className={styles.sofaRos}>Sofía Ríos</div>
          </div>
          <div className={styles.parent1}>
            <div className={styles.div6}>24/10/2023</div>
            <div className={styles.div7}>11-12</div>
            <div className={styles.no}>No</div>
            <div className={styles.sofaRos}>Sofía Ríos</div>
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
      <div className={styles.horas}>
        <div className={styles.horasParent}>
          <div className={styles.horas1}>Horas</div>
          <div className={styles.div14}>9</div>
          <div className={styles.enElMes2}>En el mes</div>
        </div>
        <div className={styles.parent2}>
          <div className={styles.div15}>50%</div>
          <div className={styles.ellipseDiv} />
          <div className={styles.ellipseDiv} />
          <img className={styles.frameChild2} alt="" src="/ellipse-22.svg" />
        </div>
      </div>
      <div className={styles.ausencias}>
        <div className={styles.frameParent1}>
          <div className={styles.turnosParent}>
            <div className={styles.turnos}>Ausencias</div>
            <div className={styles.div16}>1</div>
            <div className={styles.enElMes}>En el mes</div>
            <div className={styles.div1}>50%</div>
          </div>
          <div className={styles.frameChild} />
          <img className={styles.frameItem} alt="" src="/ellipse-2.svg" />
        </div>
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
      <div className={styles.tablaDeAusencias}>
        <div className={styles.tablaParent}>
          <div className={styles.tabla}>
            <div className={styles.reemplazo1}>Reemplazo</div>
            <div className={styles.razn}>Razón</div>
            <div className={styles.bloque1}>Bloque</div>
            <div className={styles.fecha1}>Fecha</div>
            <div className={styles.sofaRosSofaContainer}>
              <p className={styles.certificadoMdico}>Sofía Ríos</p>
              <p className={styles.certificadoMdico}>Sofía Ríos</p>
              <p className={styles.no2}>No</p>
            </div>
            <div className={styles.certificadoMdicoTopeContainer}>
              <p className={styles.certificadoMdico}>Certificado Médico</p>
              <p className={styles.certificadoMdico}>Tope Certamen</p>
              <p className={styles.no2}>Tope Certamen</p>
            </div>
            <div className={styles.div18}>
              <p className={styles.certificadoMdico}>11-12</p>
              <p className={styles.certificadoMdico}>11-12</p>
              <p className={styles.no2}>1-2</p>
            </div>
            <div className={styles.div19}>
              <p className={styles.certificadoMdico}>19/10/2023</p>
              <p className={styles.certificadoMdico}>24/10/2023</p>
              <p className={styles.no2}>31/10/2023</p>
            </div>
            <div className={styles.tablaChild} />
            <div className={styles.tablaItem} />
            <div className={styles.tablaInner} />
            <div className={styles.lineDiv} />
          </div>
          <div className={styles.grafico}>
            <div className={styles.div20}>50%</div>
            <div className={styles.graficoChild} />
            <img className={styles.graficoItem} alt="" src="/ellipse-24.svg" />
          </div>
          <div className={styles.turnosAusentadosDe}>
            Turnos Ausentados de Skelia:
          </div>
          <div className={styles.frameChild5} />
        </div>
      </div>
      <Link className={styles.out} to="/vista-tutor">
        <img className={styles.vectorIcon1} alt="" src="/vector2.svg" />
        <img className={styles.vectorIcon2} alt="" src="/vector3.svg" />
      </Link>
    </div>
  );
};

export default VentanaDeAusencias;

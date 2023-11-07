import React from 'react';
import { Link } from 'react-router-dom';
import frame_2 from './images/Frame_2.png';
import './css_files/text.css';
import ciacpng from './images/Ciac.png';

function RoleSelectionPage() {

  const roleSelectionStyle = {
    backgroundImage: `url(${frame_2})`,
    backgroundSize: '100% 100%',
    // backgroundPosition: 'center',
    // backgroundRepeat: 'no-repeat',
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const constentStyle = {
    background: 'white',
    paddingTop: '50px',
    paddingBottom: '50px',
    paddingLeft: '100px',
    paddingRight: '100px',
    borderRadius: '25px',
  };

  const roleOptionsStyle = {
    background: '#2F2D38',
    paddingTop: '10px',
    paddingBottom: '10px',
    paddingLeft: '50px',
    paddingRight: '50px',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',

  };

  const smallerTextStyle = {
    fontSize: '14px', 
    textalign: 'center',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'white',
    textalign: 'center',
    linkStyle: 'center'
  };

  const CiacStyle = {
    position: 'absolute',
    top: '10px',
    left: '25px',
    width: '40px',
    height: '40px',
    cursor: 'pointer',
  };
  
  return (
    <div className="role-selection" style={roleSelectionStyle}>
      <div style={constentStyle}>
        <a href="/" alt="Image Button" style={CiacStyle}> {/*agregar link del logo*/}
          <img src={ciacpng} alt="Image Button" style={CiacStyle} />
        </a>
        <h2>¡Bienvenido!</h2>
        <p style={{...smallerTextStyle,  textalign: 'center'}}>
          ¿Que eres?
        </p>
        <div className="role-options">
          <p style={roleOptionsStyle}>
            {/* <a href="/AdminLoginPage" className="link">Administrador</a> */}
            <Link to="/AdminLoginPage" style={linkStyle} >Administrador</Link>
          </p>
          <p style={roleOptionsStyle}>
          <Link to="/TutorLoginPage" style={linkStyle}>Tutor</Link>
          </p>
          <p style={roleOptionsStyle}>
          <Link to="/CoordinadorLoginPage" style={linkStyle} >Coordinador</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RoleSelectionPage;

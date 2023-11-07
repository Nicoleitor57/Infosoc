import React from 'react';
import { Link } from 'react-router-dom';

function RoleSelectionPage() {
  return (
    <div className="role-selection">
      <h2>Choose Your Role</h2>
      <div className="role-options">
        <Link to="/AdminLoginPage">Administrador</Link>
        <br />
        <Link to="/TutorLoginPage">Tutor</Link>
        <br />
        <Link to="/CoordinadorLoginPage">Coordinador</Link>
      </div>
    </div>
  );
}

export default RoleSelectionPage;

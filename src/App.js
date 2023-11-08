import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Admin from './Admin';
import AdminLoginPage from './AdminLoginPage';
import Coordinador from './Coordinador';
import CoordinadorLoginPage from './CoordinadorLoginPage';
import Horario from './Horario';
import RoleSelectionPage from './RoleSelectionPage';
import TutorLoginPage from './TutorLoginPage';
import Login from './Login';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/yourRoute/:URLvariable" element={<Login />} />
          <Route path="/" element={<RoleSelectionPage />} />
          <Route path="/AdminLoginPage" element={<AdminLoginPage />} />
          <Route path="/TutorLoginPage" element={<TutorLoginPage />} />
          <Route path="/CoordinadorLoginPage" element={<CoordinadorLoginPage />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Horario" element={<Horario />} />
          <Route path="/Coordinador" element={<Coordinador />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Admin from './Admin';
import AdminLoginPage from './AdminLoginPage';
import CoordinadorLoginPage from './CoordinadorLoginPage';
import RoleSelectionPage from './RoleSelectionPage';
import TutorLoginPage from './TutorLoginPage';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<RoleSelectionPage />} />
          <Route path="/AdminLoginPage" element={<AdminLoginPage />} />
          <Route path="/TutorLoginPage" element={<TutorLoginPage />} />
          <Route path="/CoordinadorLoginPage" element={<CoordinadorLoginPage />} />
          <Route path="/Admin" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

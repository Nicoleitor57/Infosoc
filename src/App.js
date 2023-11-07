import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RoleSelectionPage from './RoleSelectionPage';
import AdminLoginPage from './AdminLoginPage';
import TutorLoginPage from './TutorLoginPage';
import CoordinadorLoginPage from './CoordinadorLoginPage';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<RoleSelectionPage />} />
          <Route path="/AdminLoginPage" element={<AdminLoginPage />} />
          <Route path="/TutorLoginPage" element={<TutorLoginPage />} />
          <Route path="/CoordinadorLoginPage" element={<CoordinadorLoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

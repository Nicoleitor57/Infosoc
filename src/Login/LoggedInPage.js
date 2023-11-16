import React from 'react';

function LoggedInPage({ role, onLogout }) {
  return (
    <div className="logged-in-page">
      <h2>Logged In as {role}</h2>
      <p>You are now logged in.</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default LoggedInPage;

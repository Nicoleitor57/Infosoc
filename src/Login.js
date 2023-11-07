import React, { useState } from 'react';
import testUser from './testUser';

function Login({ role }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIN, setLoggedIN] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault(); // previene el refresh de la pagina

    // implementar login real
    if (username === testUser.username && password === testUser.password) {
      console.log(`Logged in as ${role} with username: ${username}`);
      // realizar autenficicacion real con el servidor
    } else {
      console.log('Invalid credentials');
      // hay que manejar credenciales invalidas
    }
  };

  return (
    <div className="login-page">
      <h2>Login as {role}</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;

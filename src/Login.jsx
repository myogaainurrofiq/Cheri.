import React, { useState } from 'react';
import { useAuth } from './components/AuthContext';
import './css/Login.css'; 

const Login = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Simulate user authentication with hardcoded credentials
    const validUsername = '19';
    const validPassword = '1234';

    if (username === validUsername && password === validPassword) {
      const user = { username: validUsername };
      login(user);
      setError('');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <div className='j'>
            <j>Welcome to Chèri! 👋🏻</j>
        </div>
        <div className='l'>
            <l>Please sign in to your makeup account and begin your beauty journey.</l>
        </div>
        <input
          type="text"
          placeholder="Username"
          className="login-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="login-error">{error}</p>}
        <button onClick={handleLogin} className="login-button">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;

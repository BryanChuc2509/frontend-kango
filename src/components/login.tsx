import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { Link } from 'react-router-dom';
import '../styles/login.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const allowedCharsRegex = /^[a-zA-Z0-9.@*]+$/;

  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) => 
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.value === '' || allowedCharsRegex.test(event.target.value)) {
        setter(event.target.value);
        setError('');
      } else {
        setError('No están permitidos caracteres especiales, intente de nuevo.');
      }
    };

  const handleGoogleSuccess = (credentialResponse: any) => {
    console.log('Google Login Successful:', credentialResponse);
  };

  const handleGoogleError = () => {
    console.log('Error en el inicio de sesión con Google');
  };

  return (
    <div className="login-container">
      <div className="left-panel">
        <h1 className="titleLogin">Inicia sesión y disfruta del viaje</h1>
        <form className="register-form">
          <input
            type="email"
            placeholder="Correo electrónico"
            className="input-field"
            value={email}
            onChange={handleInputChange(setEmail)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="input-field"
            value={password}
            onChange={handleInputChange(setPassword)}
          />
          {error && <div className="error-notification" style={{ color: 'red', marginTop: '2px' }}>{error}</div>}
          <button type="submit" className="btn-continue">Continuar</button>
        </form>
        <GoogleLogin onSuccess={handleGoogleSuccess} onError={handleGoogleError} />
        <p className="already-account">
          ¿Aún no tienes una cuenta? <Link to="/register">Regístrate</Link>
        </p>
      </div>
      <div className="right-panel"></div>
    </div>
  );
};

export default Login;

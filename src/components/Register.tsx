import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../services/api"; 
import "../styles/register.css";

const Register: React.FC = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [numeroTelefonico, setNumeroTelefonico] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [qrCode, setQrCode] = useState(""); 
  const navigate = useNavigate();

  const allowedCharsRegex = /^[a-zA-Z0-9.@* ]+$/;

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setter(event.target.value);
      setError("");
    };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Validar que todos los campos estén llenos
    if (!nombre || !apellido || !email || !numeroTelefonico || !password) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    try {
      // Llamada al backend para registrar al usuario
      const data = await register(nombre, apellido, email, numeroTelefonico, password);
      
      if (data.qr) {
        // Registro exitoso: se recibe el QR para configurar el 2FA
        setQrCode(data.qr);
      } else {
        alert("Registro exitoso, por favor inicia sesión.");
        navigate("/login");
      }
    } catch (error) {
      setError("Error en el registro. Verifica los datos.");
    }
  };

  // Si tenemosd el QR, mostramos únicamente esa seccion
  if (qrCode) {
    return (
      <div className="register-container">
        <div className="left-panel">
          <h1 className="title">Configura tu 2FA</h1>
          <h2 className="subtitle">Escanea el siguiente código QR con Google Authenticator</h2>
          <div className="qr-container" style={{ textAlign: "center", marginTop: "20px" }}>
            <img src={`data:image/png;base64,${qrCode}`} alt="QR Code para 2FA" style={{ maxWidth: "250px", margin: "0 auto" }} />
          </div>
          <button 
            className="btn-continue" 
            onClick={() => navigate("/login")}
            style={{ marginTop: "20px" }}
          >
            Inicia sesión
          </button>
        </div>
        <div className="right-panel"></div>
      </div>
    );
  }

  // Sino, se muestra el formulario de registro
  return (
    <div className="register-container">
      <div className="left-panel">
        <h1 className="title">Regístrate</h1>
        <h2 className="subtitle">y reserva un nuevo viaje hoy</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre"
            className="input-field"
            value={nombre}
            onChange={handleInputChange(setNombre)}
          />
          <input
            type="text"
            placeholder="Apellido"
            className="input-field"
            value={apellido}
            onChange={handleInputChange(setApellido)}
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            className="input-field"
            value={email}
            onChange={handleInputChange(setEmail)}
          />
          <input
            type="text"
            placeholder="Número de teléfono"
            className="input-field"
            value={numeroTelefonico}
            onChange={handleInputChange(setNumeroTelefonico)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="input-field"
            value={password}
            onChange={handleInputChange(setPassword)}
          />
          {error && (
            <div className="error-notification" style={{ color: "red", marginTop: "2px" }}>
              {error}
            </div>
          )}
          <button type="submit" className="btn-continue">Continuar</button>
        </form>
        <p className="already-account">
          ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link>
        </p>
      </div>
      <div className="right-panel"></div>
    </div>
  );
};

export default Register;

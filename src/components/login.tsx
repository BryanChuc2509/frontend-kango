import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { Link } from "react-router-dom";
import "../styles/login.css";

const GOOGLE_CLIENT_ID = "973428652330-pf4rncidpkqktjhnfr12vmf63h9l3rrg.apps.googleusercontent.com"; // clientid de google

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setter(event.target.value);
      setError(""); 
    };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!email || !password || !otp) {
      setError("Todos los campos son obligatorios");
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:5000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          correo_electronico: email,
          password: password,
          otp_code: otp,
        }),
        credentials: "include",
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Error en el inicio de sesión");
      }

      const data = await response.json();
      alert("Inicio de sesión exitoso 🎉");
      localStorage.setItem("token", data.token);
      navigate("/dashboard");
    } catch (error: any) {
      setError(error.message || "Error al conectar con el servidor");
    }
  };

  const handleGoogleSuccess = async (credentialResponse: any) => {
    console.log("Google Login Successful:", credentialResponse);
    const googleToken = credentialResponse.credential;

    try {
      const response = await fetch("http://127.0.0.1:5000/auth/google-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: googleToken }),
        credentials: "include",
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Error en Google Login");
      }

      const data = await response.json();
      alert("Inicio de sesión exitoso con Google 🎉");
      localStorage.setItem("token", data.token);
      navigate("/dashboard");
    } catch (error: any) {
      alert(error.message || "Error al conectar con el servidor");
    }
  };

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <div className="login-container">
        <div className="left-panel">
          <h1 className="titleLogin">Inicia sesión y disfruta del viaje</h1>
          <form className="register-form" onSubmit={handleSubmit}>
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
            <input
              type="text"
              placeholder="Código 2FA"
              className="input-field"
              value={otp}
              onChange={handleInputChange(setOtp)}
            />
            {error && (
              <div className="error-notification" style={{ color: "red", marginTop: "2px" }}>
                {error}
              </div>
            )}
            <button type="submit" className="btn-continue">Continuar</button>
          </form>

          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={() => alert("Error en Google Login")}
          />

          <p className="already-account">
            ¿Aún no tienes una cuenta? <Link to="/register">Regístrate</Link>
          </p>
        </div>
        <div className="right-panel"></div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default Login;

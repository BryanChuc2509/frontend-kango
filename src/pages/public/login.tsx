import React, { useState, useEffect } from "react";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { Link, useNavigate } from "react-router-dom";
import DOMPurify from 'dompurify';

const GOOGLE_CLIENT_ID =
  "973428652330-pf4rncidpkqktjhnfr12vmf63h9l3rrg.apps.googleusercontent.com";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const validateInput = (input: string): boolean => {
    const regex = /^[a-zA-Z0-9!#$'*+-=?^_`~@.]*$/;
    return regex.test(input);
  };

  const handleGoogleError = () => {
    setError('Error en el inicio de sesión con Google.');
  };

  const handleInputChange =
        (setter: React.Dispatch<React.SetStateAction<string>>) =>
        (event: React.ChangeEvent<HTMLInputElement>) => {
          const sanitizedValue = DOMPurify.sanitize(event.target.value);
          if (validateInput(sanitizedValue)) {
            setter(sanitizedValue);
            setError('');
          } else {
            setError('Entrada inválida. Por favor, revisa los datos ingresados.');
          }
        };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

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

      const data = await response.json();
      if (!email || !password) {
        setError('Todos los campos son obligatorios.');
        return;
      }
  
      console.log('Inicio de sesión exitoso con:', { email});

      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("rol", data.rol);
        setRole(data.rol);
        setLoginSuccess(true);
      } else {
        setError(data.error || "Error en el inicio de sesión");
      }
    } catch (error: any) {
      setError("Error al conectar con el servidor");
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

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("rol", data.rol);
        setRole(data.rol);
        setLoginSuccess(true);
      } else {
        alert(data.error || "Error al iniciar sesión con Google");
      }
    } catch (error: any) {
      alert("Error al conectar con el servidor");
    }
  };

  useEffect(() => {
    if (loginSuccess) {
      const timer = setTimeout(() => {
        if (role === "admin") {
          navigate("/admin/dashboard");
        } else {
          navigate("/landing");
        }
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [loginSuccess, role, navigate]);

  if (loginSuccess) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-200">
        <div className="text-center">
          <div className="text-9xl text-green-500 animate-[pop_0.5s_ease-in-out]">
            &#10004;
          </div>
          <h2 className="text-2xl font-bold mt-4">Inicio de sesión exitoso</h2>
          <p className="mt-2">Redirigiendo...</p>
        </div>
      </div>
    );
  }

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <div className="flex min-h-screen font-sans bg-gray-100">
        <div className="flex-1 flex flex-col justify-center items-center px-10 bg-white">
          <h1 className="text-green-700 text-4xl font-bold text-center mb-5">
            Inicia sesión y disfruta del viaje
          </h1>
          <form
            className="flex flex-col w-full max-w-xs"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              placeholder="Correo electrónico"
              className="p-3.5 text-base border-2 border-green-500 rounded-lg mb-5 outline-none focus:border-green-700"
              value={email}
              onChange={handleInputChange(setEmail)}
            />
            <input
              type="password"
              placeholder="Contraseña"
              className="p-3.5 text-base border-2 border-green-500 rounded-lg mb-5 outline-none focus:border-green-700"
              value={password}
              onChange={handleInputChange(setPassword)}
            />
            <input
              type="text"
              placeholder="Código 2FA"
              className="p-3.5 text-base border-2 border-green-500 rounded-lg mb-5 outline-none focus:border-green-700"
              value={otp}
              onChange={handleInputChange(setOtp)}
            />
            {error && <div className="text-red-500 mt-0.5 mb-5">{error}</div>}
            <button
              type="submit"
              className="flex justify-center items-center w-full max-w-[150px] mx-auto p-3.5 text-lg font-bold text-white bg-green-700 rounded-lg cursor-pointer transition-colors duration-300 hover:bg-green-800 mb-6"
            >
              Continuar
            </button>
          </form>
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleError}
          />
          <p className="mt-6 text-base text-green-700 text-center cursor-pointer hover:underline">
            ¿Aún no tienes una cuenta? <Link to="/register">Regístrate</Link>
          </p>
        </div>
        <div className="flex-1 bg-[url('./assets/ola.jpg')] bg-center bg-cover"></div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default Login;

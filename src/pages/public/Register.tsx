import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../services/api";
import DOMPurify from 'dompurify';


const Register: React.FC = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [numeroTelefonico, setNumeroTelefonico] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [qrCode, setQrCode] = useState("");
  const navigate = useNavigate();


  const validateInput = (input: string): boolean => {
    const regex = /^[a-zA-Z0-9!#$'*+-=?^_`~@.]*$/;
    return regex.test(input);
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

    if (!nombre || !apellido || !email || !numeroTelefonico || !password) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    try {
      const data = await register(
        nombre,
        apellido,
        email,
        numeroTelefonico,
        password,
      );

      if (data.qr) {
        setQrCode(data.qr);
      } else {
        alert("Registro exitoso, por favor inicia sesión.");
        navigate("/login");
      }
    } catch (error) {
      setError("Error en el registro. Verifica los datos.");
    }
  };

  if (qrCode) {
    return (
      <div className="flex min-h-screen font-sans bg-gray-100">
        <div className="flex-1 flex flex-col justify-center items-center px-10 bg-white">
          <h1 className="text-green-700 text-4xl font-bold text-center mb-0">
            Configura tu 2FA
          </h1>
          <h2 className="text-green-700 text-4xl font-bold text-center mb-8">
            Escanea el siguiente código QR con Google Authenticator
          </h2>
          <div className="text-center mt-5">
            <img
              src={`data:image/png;base64,${qrCode}`}
              alt="QR Code para 2FA"
              className="max-w-[250px] mx-auto"
            />
          </div>
          <button
            className="mt-5 px-4 py-3 text-lg font-bold text-white bg-green-700 rounded-lg cursor-pointer transition-colors duration-300 hover:bg-green-800"
            onClick={() => navigate("/login")}
          >
            Inicia sesión
          </button>
        </div>
        <div className="flex-1 bg-[url('../assets/ola.jpg')] bg-center bg-cover"></div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen font-sans bg-gray-100">
      <div className="flex-1 flex flex-col justify-center items-center px-10 bg-white">
        <h1 className="text-green-700 text-4xl font-bold text-center mb-0">
          Regístrate
        </h1>
        <h2 className="text-green-700 text-4xl font-bold text-center mb-8">
          y reserva un nuevo viaje hoy
        </h2>
        <form
          className="flex flex-col w-full max-w-[320px]"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Nombre"
            className="px-4 py-3 text-base border-2 border-green-700 rounded-lg mb-5 outline-none transition-colors duration-200 focus:border-green-700"
            value={nombre}
            onChange={handleInputChange(setNombre)}
          />
          <input
            type="text"
            placeholder="Apellido"
            className="px-4 py-3 text-base border-2 border-green-700 rounded-lg mb-5 outline-none transition-colors duration-200 focus:border-green-700"
            value={apellido}
            onChange={handleInputChange(setApellido)}
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            className="px-4 py-3 text-base border-2 border-green-700 rounded-lg mb-5 outline-none transition-colors duration-200 focus:border-green-700"
            value={email}
            onChange={handleInputChange(setEmail)}
          />
          <input
            type="text"
            placeholder="Número de teléfono"
            className="px-4 py-3 text-base border-2 border-green-700 rounded-lg mb-5 outline-none transition-colors duration-200 focus:border-green-700"
            value={numeroTelefonico}
            onChange={handleInputChange(setNumeroTelefonico)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="px-4 py-3 text-base border-2 border-green-700 rounded-lg mb-5 outline-none transition-colors duration-200 focus:border-green-700"
            value={password}
            onChange={handleInputChange(setPassword)}
          />
          {error && <div className="text-red-500 mt-2">{error}</div>}
          <button
            type="submit"
            className="mx-auto px-4 py-3 text-lg font-bold text-white bg-green-700 rounded-lg cursor-pointer transition-colors duration-300 hover:bg-green-800 mb-6 w-[150px]"
          >
            Continuar
          </button>
        </form>
        <p className="mt-6 text-base text-green-700 text-center cursor-pointer hover:underline">
          ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link>
        </p>
      </div>
      <div className="flex-1 bg-[url('./assets/ola.jpg')] bg-center bg-cover"></div>
    </div>
  );
};

export default Register;

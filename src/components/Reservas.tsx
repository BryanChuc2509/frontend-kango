import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/Reservas.css";
import CarroImage from "../assets/carro.png";
import CarritoImage from "../assets/carrito.png";

const transportOptions = [
  {
    id: 1,
    image: CarroImage,
    type: "Van Toyota Aventure",
    passengers: 3,
    price: 240,
  },
  {
    id: 2,
    image: CarritoImage,
    type: "SUV Toyota Aventure",
    passengers: 3,
    price: 240,
  },
  {
    id: 3,
    image: CarroImage,
    type: "Van Toyota Aventure",
    passengers: 3,
    price: 240,
  },
];

const Reservas: React.FC = () => {
  return (
    <div className="reservas-container">
        <header className="header">
          <h1 className="logo">
            KAN <br /> KUN
          </h1>
          <nav className="nav">
            <button className="logout-button">Cerrar Sesión</button>
          </nav>
        </header>

      {/* Filtros (ahora ocupa más espacio y mantiene la estética) */}
      <div className="filters">
        <div className="filter">Punto de partida: <span>Aeropuerto de Cancún</span></div>
        <div className="filter">Destino: <span>Zona Hotelera</span></div>
        <div className="filter">Fecha de salida: <span>17 de Feb, 2025</span></div>
        <div className="filter">Pasajeros: <span>3 Personas</span></div>
      </div>

{/* Título */}
  <div className="title-container">
    <div className="title-section">
      <Link to="#" className="back-button">
        <FaArrowLeft className="back-icon" />
      </Link>
      <h2 className="title">Escoge el medio de transporte</h2>
    </div>
    <div className="title-underline"></div> {/* Línea debajo del título */}
  </div>


      {/* Lista de opciones de transporte */}
      <div className="transport-list">
  {transportOptions.map((option) => (
    <div key={option.id} className="transport-card">
      <div className="card-content">
        {/* Imagen del vehículo */}
        <div className="image-container">
          <img src={option.image} alt="Transporte" className="transport-image" />
        </div>
        
        {/* Detalles del transporte */}
        <div className="transport-details">
          <h3 className="transport-title">Estándar</h3>
          <p><strong>Transporte:</strong> {option.type}</p>
          <p><strong>Pasajeros:</strong> {option.passengers} Personas</p>
          <p><strong>Salida:</strong> Aeropuerto Internacional de Cancún</p>
          <p><strong>Destino:</strong> Zona Hotelera</p>
          <p className="transport-price">${option.price} MXN</p>
        </div>
        
        {/* Botón de selección */}
        <button className="select-button">Seleccionar</button>
      </div>
    </div>
  ))}
</div>


      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Turismo KanKun, la experiencia del viaje</p>
        <div className="footer-links">
          <Link to="#" className="footer-button">Iniciar</Link>
          <Link to="#" className="footer-button">Registro</Link>
        </div>
      </footer>
    </div>
  );
};

export default Reservas;

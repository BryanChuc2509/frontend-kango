import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/Reservas.css";
import CarroImage from "../assets/camioneta.jpg";
import CarritoImage from "../assets/nissan.jpg";

const transportOptions = [
  {
    id: 1,
    title: "Camion", 
    image: CarroImage,
    type: "Van Toyota Aventure",
    passengers: 30,
    price: 240,
  },
  {
    id: 2,
    title: "Taxi", // 
    image: CarritoImage,
    type: "Nissan Tsuru 1.6 ",
    passengers: 4,
    price: 240,
  },
  {
    id: 3,
    title: "Van", // 
    image: CarroImage,
    type: "Van Toyota Aventure",
    passengers: 10,
    price: 240,
  },
];

const Reservas: React.FC = () => {
  return (
    <div className="reservas-container">
      <header className="header">
        <h1 className="header-title">KAN KUN</h1>
        <nav className="header-nav">
          <a href="#" className="header-link">Destinos</a>
          <a href="#" className="header-link">Vehículos</a>
          <button className="header-button">Cerrar Sesión</button>
        </nav>
      </header>

      <div style={{ marginTop: "20px" }}> 
        <div className="progress-container">
          <div className="progress-step active">
            <div className="step-square active"></div>
            <p>Reservar</p>
          </div>
          <div className="progress-line"></div>
          <div className="progress-step">
            <div className="step-square inactive"></div>
            <p>Pago</p>
          </div>
        </div>
      </div>

      <div className="title-container">
        <div className="title-section">
          <Link to="#" className="back-button">
            <FaArrowLeft className="back-icon" />
          </Link>
          <h2 className="title">Escoge el medio de transporte</h2>
        </div>
      </div>
      
      {/* Lista de transportes */}
      <div className="transport-list">
        {transportOptions.map((option) => (
          <div key={option.id} className="transport-card">
            <div className="card-content">
              <div className="image-container">
                <img src={option.image} alt="Transporte" className="transport-image" />
              </div>
              <div className="divider"></div>

              <div className="transport-details">
                <h3 className="transport-title">{option.title}</h3> 
                <p><strong>Vehículo:</strong> <span className="highlight">{option.type}</span></p>
                <p><strong>Pasajeros:</strong> <span className="highlight">{option.passengers} Personas</span></p>
                <p><strong>Calidad:</strong> <span className="highlight">Estándar</span></p>
              </div>
              <div className="divider"></div>

              <div className="price-container">
                <p className="transport-price">${option.price} MXN</p>
                <button className="select-button">Seleccionar</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-links">
            <a href="#" className="footer-link">Kan Kun</a>
            <a href="#" className="footer-link">Destinos</a>
            <a href="#" className="footer-link">Reservas</a>
            <a href="#" className="footer-link">Iniciar</a>
            <a href="#" className="footer-link">Registro</a>
          </div>
          <p className="footer-copyright">
            © 2025 Turismo KanKun, la experiencia del viaje
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Reservas;

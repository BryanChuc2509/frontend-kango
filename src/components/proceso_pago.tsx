import React, { useState } from "react";
import "../styles/ProcesoPago.css";

const PaymentProcess = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    cardHolder: "",
    cardNumber: "",
    expDate: "",
    cvv: "",
  });
  const [errors, setErrors] = useState({});

  // Validación de formulario
  const validateForm = () => {
    let newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Nombre requerido";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email))
      newErrors.email = "Correo inválido";
    if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Número inválido (10 dígitos)";
    if (!formData.cardHolder.trim()) newErrors.cardHolder = "Titular requerido";
    if (!/^\d{16}$/.test(formData.cardNumber))
      newErrors.cardNumber = "Número de tarjeta inválido (16 dígitos)";
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expDate))
      newErrors.expDate = "Formato MM/YY requerido";
    if (!/^\d{3}$/.test(formData.cvv))
      newErrors.cvv = "CVV inválido (3 dígitos)";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Manejador de cambios en los inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  // Manejo de clic en el botón "Pagar con PayPal"
  const handlePayPalClick = () => {
    if (validateForm()) {
      // Solo se muestra el modal si el formulario es válido
      setShowModal(true);
    }
  };

  // Cerrar el modal
  const closeModal = () => {
    setShowModal(false);
  };

  // Función para manejar el input de la fecha de expiración (MM/YY)
  const handleExpDateChange = (e) => {
    let value = e.target.value;
    // Limitar a dos dígitos para el mes y año y agregar "/" automáticamente
    if (value.length === 2 && !value.includes("/")) {
      value = value + "/";
    }
    setFormData({
      ...formData,
      expDate: value,
    });
  };

  return (
    <div className="container">
      <header>
        <div className="logo">
          KAN <br /> KUN
        </div>
        <nav>
          <a href="#">Destinos</a>
          <a href="#">Vehículos</a>
          <a href="#" className="nav-button">
            Cerrar Sesión
          </a>
        </nav>
      </header>

      <div className="trip-details">
        <div className="detail">
          <label>Punto de partida</label>
          <span>Aeropuerto de Cancún</span>
        </div>
        <div className="detail">
          <label>Destino</label>
          <span>Zona Hotelera</span>
        </div>
        <div className="detail">
          <label>Fecha de salida</label>
          <span>17 de Feb, 2025</span>
        </div>
        <div className="detail">
          <label>Pasajeros</label>
          <span>3 Personas</span>
        </div>
      </div>

      <main>
        <a href="#" className="back-button">
          ←
        </a>
        <h1>Proceso de pago</h1>

        <div className="form-container">
          <form>
            <section className="reservation-details">
              <h2>Datos del titular de la reserva</h2>
              <input
                type="text"
                name="fullName"
                placeholder="Nombre Completo"
                onChange={handleChange}
              />
              {errors.fullName && <span className="error">{errors.fullName}</span>}
              <input
                type="email"
                name="email"
                placeholder="Correo electrónico"
                onChange={handleChange}
              />
              {errors.email && <span className="error">{errors.email}</span>}
              <input
                type="tel"
                name="phone"
                placeholder="Número telefónico"
                onChange={handleChange}
              />
              {errors.phone && <span className="error">{errors.phone}</span>}
            </section>

            <section className="payment-details">
              <h2>Datos de la tarjeta</h2>
              <input
                type="text"
                name="cardHolder"
                placeholder="Titular de la tarjeta"
                onChange={handleChange}
              />
              {errors.cardHolder && <span className="error">{errors.cardHolder}</span>}
              <input
                type="text"
                name="cardNumber"
                placeholder="Número de cuenta"
                onChange={handleChange}
              />
              {errors.cardNumber && <span className="error">{errors.cardNumber}</span>}
              <input
                type="text"
                name="expDate"
                placeholder="Fecha de expiración (MM/YY)"
                value={formData.expDate}
                maxLength="5"
                onChange={handleExpDateChange}
              />
              {errors.expDate && <span className="error">{errors.expDate}</span>}
              <input
                type="text"
                name="cvv"
                placeholder="CVV"
                maxLength="3"
                onChange={handleChange}
              />
              {errors.cvv && <span className="error">{errors.cvv}</span>}
            </section>

            <div className="button-group">
              <button type="button" className="cancel-btn">
                Cancelar
              </button>
              <button
                type="button"
                className="paypal-btn"
                onClick={handlePayPalClick}
              >
                Pagar con PayPal <span className="price">$240 MXN</span>
              </button>
            </div>
          </form>

          <div className="side-content">
            <img
              src="https://rentacamionetasdf.com/wp-content/uploads/2019/06/Sprinter_transparente-1-e1468386277126.png"
              alt="Vehículo"
              className="vehicle-image"
            />
            <img src="palm-leaf.png" alt="" className="palm-leaf" />
          </div>
        </div>
      </main>

      <footer>
        <nav>
          <a href="#">Destinos</a>
          <a href="#">Reservas</a>
          <a href="#">Iniciar</a>
          <a href="#">Registro</a>
        </nav>
        <p>© 2025 Turismo KanKun, la experiencia del viaje</p>
      </footer>

      {/* MODAL DE RESERVA EXITOSA */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={closeModal}>
              ✖
            </button>
            <h2>✅ Reserva exitosa</h2>
            <p>QR válido para la reserva.</p>
            <div className="qr-placeholder">[Aquí va el QR]</div>
            <button className="continue-btn" onClick={closeModal}>
              Continuar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentProcess;

import React from "react";
import "../../styles/VistaPrincipal.css";
// import Footer from "../components/Footer"

const VistaPrincipal: React.FC = () => {
  return (
    <div className="container-fluid p-0">
      {" "}
      {/* Asegurar que no haya padding */}
      {/* Header */}
      <header className="header">
        <h1 className="header-title">KAN KUN</h1>
        <nav className="header-nav">
          <a href="#" className="header-link">
            Destinos
          </a>
          <a href="#" className="header-link">
            Vehículos
          </a>
          <button className="header-button">Cerrar Sesión</button>
        </nav>
      </header>
      {/* Buscador */}
      <section className="bg-success p-4 text-white text-center mb-4">
        <div className="row g-3">
          {/* Punto de partida */}
          <div className="col-md-3">
            <label className="d-block text-start text-white mb-2">
              Punto de partida
            </label>
            <div className="input-group">
              <select className="form-control rounded border-success">
                <option value="">Selecciona</option>
                <option value="playa-del-carmen">Playa del Carmen</option>
                <option value="cancun">Cancún</option>
                <option value="tulum">Tulum</option>
              </select>
              <span className="input-group-text bg-white border-success">
                <i className="fas fa-chevron-down text-success"></i>
              </span>
            </div>
          </div>

          {/* Destino */}
          <div className="col-md-3">
            <label className="d-block text-start text-white mb-2">
              Destino
            </label>
            <div className="input-group">
              <select className="form-control rounded border-success">
                <option value="">Selecciona</option>
                <option value="xcaret">Xcaret</option>
                <option value="xel-ha">Xel-Há</option>
                <option value="chichen-itza">Chichén Itzá</option>
              </select>
              <span className="input-group-text bg-white border-success">
                <i className="fas fa-chevron-down text-success"></i>
              </span>
            </div>
          </div>

          {/* Fecha de salida */}
          <div className="col-md-3">
            <label className="d-block text-start text-white mb-2">
              Fecha de salida
            </label>
            <div className="input-group">
              <input
                type="date"
                className="form-control rounded border-success"
              />
              <span className="input-group-text bg-white border-success">
                <i className="fas fa-calendar text-success"></i>
              </span>
            </div>
          </div>

          {/* Pasajeros */}
          <div className="col-md-3">
            <label className="d-block text-start text-white mb-2">
              Pasajeros
            </label>
            <div className="input-group">
              <input
                type="number"
                className="form-control rounded border-success"
                placeholder="0"
                min="1"
                max="10"
              />
              <span className="input-group-text bg-white border-success">
                <i className="fas fa-user text-success"></i>
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* Banner de imágenes */}
      <section className="row p-4">
        <div className="col-12">
          <h2 className="text-success fw-bold text-center mb-4">
            Reserva y Disfruta
          </h2>{" "}
          {/* Título agregado */}
        </div>
        <div className="col-md-4">
          <div className="image-container">
            <img
              src="/img/Chichen-Itza.jpg"
              alt="Destino 1"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
        <div className="col-md-4">
          <div className="image-container">
            <img
              src="/img/cenote.jpg"
              alt="Destino 2"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
        <div className="col-md-4">
          <div className="image-container">
            <img
              src="/img/rivera.jpg"
              alt="Destino 3"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </section>
      {/* Lo más pedido */}
      <div className="vista-principal">
        <section className="lo-mas-pedido">
          <h2>Lo más pedido</h2>
          <p>Mira los vehículos más solicitados por nuestros clientes.</p>
          <div className="contenedor-tarjetas">
            {/* Tarjeta 1 */}
            <div className="tarjeta">
              <img
                src="/img/camioneta.jpg"
                alt="Camioneta Vans Mercedes"
                className="tarjeta-imagen"
              />
              <div className="tarjeta-contenido">
                <h3>Toyota Aventure</h3>
                <p>Capacidad: 10 personas</p>
                <p>Calidad: Estándar</p>
              </div>
            </div>

            {/* Tarjeta 2 */}
            <div className="tarjeta">
              <img
                src="/img/nissan.jpg"
                alt="Urvan Nissan"
                className="tarjeta-imagen"
              />
              <div className="tarjeta-contenido">
                <h3>Urvan Nissan</h3>
                <p>Capacidad: 4 personas</p>
                <p>Calidad: Estándar</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Te puede interesar */}
      <div className="container mt-5">
        <h2 className="text-success fw-bold text-center">Te puede interesar</h2>
        <p className="text-muted text-center">
          Destinos turísticos de todo el estado de Quintana Roo
        </p>

        <div className="row justify-content-center">
          <div className="col-md-5 mx-2 border border-success rounded p-3">
            <img
              src="/img/xcaret.jpg"
              alt="Viaje a Xcaret"
              className="img-fluid rounded"
            />
            <h4 className="text-success mt-3">Viaje a Xcaret</h4>
            <p className="fw-bold">Cancún, Quintana Roo</p>
            <p className="text-muted">
              Escápese por el día a Xcaret, el parque ecológico y arqueológico
              de México ubicado en la Riviera Maya. En este viaje de un día
              completo desde Cancún a Xcaret, nade en una laguna, practique
              snorkel en las aguas cristalinas del Caribe y descubra una red de
              ríos subterráneos. Esté atento a los monos, aves y mariposas
              mientras pasea por la selva en Xcaret y recorra los antiguos
              sitios arqueológicos mayas.
            </p>
          </div>
          <div className="col-md-5 mx-2 border border-success rounded p-3">
            <img
              src="/img/xel-ha.jpg"
              alt="Viaje a Xel-Ha"
              className="img-fluid rounded"
            />
            <h4 className="text-success mt-3">Viaje a Xel-Ha</h4>
            <p className="fw-bold">Cancún, Quintana Roo</p>
            <p className="text-muted">
              Explore el Parque Xel-Ha, el impresionante acuario natural de la
              Riviera Maya, en este viaje de un día desde Cancún. Relájese en la
              playa oculta de Xel Ha, nade en cenotes y lagunas, practique
              snorkel y diviértase en cuevas.
            </p>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-links">
            <a href="#" className="footer-link">
              Kan Kun
            </a>
            <a href="#" className="footer-link">
              Destinos
            </a>
            <a href="#" className="footer-link">
              Reservas
            </a>
            <a href="#" className="footer-link">
              Iniciar
            </a>
            <a href="#" className="footer-link">
              Registro
            </a>
          </div>
          <p className="footer-copyright">
            © 2025 Turismo KanKun, la experiencia del viaje
          </p>
        </div>
      </footer>
    </div>
  );
};

export default VistaPrincipal;

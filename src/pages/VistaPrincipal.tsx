import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/VistaPrincipal.css";
import React, { useState, useEffect } from "react";

const VistaPrincipal: React.FC = () => {
  const navigate = useNavigate();
  const [indice, setIndice] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  // Función para manejar el cierre de sesión y redirigir
  const handleLogout = () => {
    navigate("/login");
  };

  // Tarjetas para la sección "Te puede interesar"
  const tarjetas = [
    {
      imagen: "/img/xcaret.jpg",
      titulo: "viaje a Xcaret",
      descripcion: "Escápese por el día a Xcaret, el parque ecológico y arqueológico de México ubicado en la Riviera Maya. En este viaje de un día completo desde Cancún a Xcaret, nade en una laguna, practique snorkel en las aguas cristalinas del Caribe y descubra una red de ríos subterráneos. Esté atento a los monos, aves y mariposas mientras pasea por la selva en Xcaret y recorra los antiguos sitios arqueológicos mayas.",
    },
    {
      imagen: "/img/xel-ha.jpg",
      titulo: "Viaje a Xel-ha",
      descripcion: "Explore el Parque Xel-Ha, el impresionante acuario natural de la Riviera Maya, en este viaje de un día desde Cancún. Relájese en la playa oculta de Xel Ha, nade en cenotes y lagunas, practique snorkel y diviértase en cuevas.",
    },
    // Añade más tarjetas si es necesario
  ];

  // Función para avanzar al siguiente slide
  const siguiente = () => {
    setIndice((prev) => (prev + 1) % tarjetas.length);
  };

  // Función para retroceder al slide anterior
  const anterior = () => {
    setIndice((prev) => (prev - 1 + tarjetas.length) % tarjetas.length);
  };

  // Función para el cambio automático del carrusel
  useEffect(() => {
    const interval = setInterval(() => {
      siguiente(); // Cambia al siguiente slide cada 5 segundos
    }, 5000);
    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, [indice]); // Dependencia: indice

  // Datos del carrusel de "Lo más pedido"
  const items = [
    {
      imgSrc: "/img/camioneta.jpg", // Ruta de la primera imagen
      title: "Toyota Aventure",
      description: "Capacidad: 10 personas|Calidad: Estándar",
    },
    {
      imgSrc: "/img/nissan.jpg", // Ruta de la segunda imagen
      title: "Urvan Nissan",
      description: "Capacidad: 4 personas|Calidad: Estándar",
    },
    // Puedes añadir más tarjetas si es necesario
  ];

  // Función para el cambio automático de "Lo más pedido"
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % items.length); // Cambia la imagen cada 3 segundos
    }, 3000);

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, [items.length]);

  return (
    <div className="container-fluid p-0">
      {/* Header */}
      <header className="header">
        <h1 className="header-title">KAN KUN</h1>
        <nav className="header-nav">
          <button className="header-button" onClick={handleLogout}>
            Cerrar Sesión
          </button>
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
            </div>
          </div>

          {/* Destino */}
          <div className="col-md-3">
            <label className="d-block text-start text-white mb-2">Destino</label>
            <div className="input-group">
              <select className="form-control rounded border-success">
                <option value="">Selecciona</option>
                <option value="xcaret">Xcaret</option>
                <option value="xel-ha">Xel-Há</option>
                <option value="chichen-itza">Chichén Itzá</option>
              </select>
            </div>
          </div>

          {/* Fecha de salida */}
          <div className="col-md-3">
            <label className="d-block text-start text-white mb-2">
              Fecha de salida
            </label>
            <input type="date" className="form-control rounded border-success" />
          </div>

          {/* Pasajeros */}
          <div className="col-md-3">
            <label className="d-block text-start text-white mb-2">Pasajeros</label>
            <input
              type="number"
              className="form-control rounded border-success"
              placeholder="0"
              min="1"
              max="10"
            />
          </div>
        </div>
      </section>

      {/* Banner de imágenes */}
      <section className="row p-4">
        <div className="col-12">
          <h2 className="text-success fw-bold text-center mb-4">
            Reserva y Disfruta
          </h2>
        </div>
        <div className="col-md-4">
          <img
            src="/img/Chichen-Itza.jpg"
            alt="Destino 1"
            className="img-fluid rounded shadow img-zoom"
          />
        </div>
        <div className="col-md-4">
          <img
            src="/img/cenote.jpg"
            alt="Destino 2"
            className="img-fluid rounded shadow img-zoom"
          />
        </div>
        <div className="col-md-4">
          <img
            src="/img/rivera.jpg"
            alt="Destino 3"
            className="img-fluid rounded shadow img-zoom"
          />
        </div>
      </section>

      {/* Lo más pedido */}
      <section className="lo-mas-pedido">
        <h2>Lo más pedido</h2>
        <p>Mira los vehículos más solicitados por nuestros clientes.</p>
        <div className="contenedor-tarjetas">
          <div className="tarjeta">
            <img
              src={items[activeIndex].imgSrc}
              alt={items[activeIndex].title}
              className="tarjeta-imagen"
            />
            <div className="tarjeta-contenido">
              <h3>{items[activeIndex].title}</h3>
              <p>{items[activeIndex].description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Te puede interesar */}
      <section className="te-puede-interesar text-center">
        <h2 className="text-success fw-bold">Te puede interesar</h2>
        <p className="text-muted">Destinos turísticos de todo el estado de Quintana Roo</p>
        <div className="contenedor-carrusel position-relative d-flex justify-content-center align-items-center">
          {/* Botón de navegación izquierdo */}
          <button
            className="btn btn-light position-absolute start-0"
            onClick={anterior}
          >
            ❮
          </button>

          {/* Tarjeta actual del carrusel */}
          <div className="carrusel-tarjeta d-flex align-items-center">
            {/* Imagen */}
            <div className="carrusel-imagen">
              <h3 className="text-success mb-3">{tarjetas[indice].titulo}</h3>
              <img
                src={tarjetas[indice].imagen}
                alt={tarjetas[indice].titulo}
                className="img-fluid img-zoom rounded"
              />
            </div>

            {/* Información */}
            <div className="carrusel-info">
              <p className="text-muted">{tarjetas[indice].descripcion}</p>
            </div>
          </div>

          {/* Botón de navegación derecho */}
          <button
            className="btn btn-light position-absolute end-0"
            onClick={siguiente}
          >
            ❯
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-links">
            <a href="#" className="footer-link">
              Kan Kun
            </a>
            <a href="/login" className="footer-link">
              Iniciar
            </a>
            <a href="/register" className="footer-link">
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

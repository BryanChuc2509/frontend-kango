import { Link } from "react-router-dom";
import { FaBell } from "react-icons/fa"; // Se usa react-icons para un mejor diseño
import "../../styles/Dashboard.css";


function Header() {
  return (
    <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      {/* Nombre centrado */}
      <h2 className="text-green-700 font-bold text-4xl">Bienvenido Juan Pérez</h2>

      {/* Contenedor de Administrador y campana */}
      <div className="flex items-center gap-6">
        <span className="text-green-700 text-xl font-semibold">Administrador</span>

        {/* Ícono de campana con Link */}
        <Link to="/admin/notificaciones" className="text-green-700 hover:text-green-900 transition duration-300">
          <FaBell className="text-2xl" />
        </Link>
      </div>
    </header>
  );
}

export default Header;

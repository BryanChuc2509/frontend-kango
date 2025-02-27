import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaTachometerAlt, FaCar, FaUsers, FaMapMarkedAlt, FaRoute, FaSignOutAlt } from "react-icons/fa";
import "../../styles/Dashboard.css";

const menuItems = [
  { name: "Dashboard", path: "/admin/dashboard", icon: <FaTachometerAlt className="text-xl" /> },
  { name: "Vehículos", path: "/admin/vehiculos", icon: <FaCar className="text-xl" /> },
  { name: "Conductores", path: "/admin/conductores", icon: <FaUsers className="text-xl" /> },
  { name: "Destinos", path: "/admin/destinos", icon: <FaMapMarkedAlt className="text-xl" /> },
  { name: "Rutas", path: "/admin/rutas", icon: <FaRoute className="text-xl" /> },
];

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate(); // Para redirigir al login

  // Función para cerrar sesión
  const handleLogout = () => {
    localStorage.removeItem("token"); // Elimina el token del localStorage
    navigate("/login"); // Redirige al login
  };

  return (
    <aside className="w-64 bg-white shadow-md p-6 flex flex-col justify-between h-screen">
      <div>
        <h1 className="text-green-900 font-bold text-5xl leading-none mb-6">
          Kan <br /> Go!
        </h1>

        <nav>
          <ul className="space-y-4">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-3 text-lg rounded-md font-bold transition-all duration-300 ${
                    location.pathname === item.path
                      ? "bg-green-500 text-white shadow-md"
                      : "text-green-700 hover:text-green-900 hover:bg-green-100"
                  }`}
                >
                  {item.icon}
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Botón de Cerrar Sesión con evento onClick */}
      <button
        onClick={handleLogout}
        className="flex items-center justify-center gap-3 bg-green-700 text-green px-4 py-3 text-lg rounded-md w-full hover:bg-green-800 transition-all duration-300"
      >
        <FaSignOutAlt className="text-xl" />
        Cerrar Sesión
      </button>
    </aside>
  );
}

export default Sidebar;

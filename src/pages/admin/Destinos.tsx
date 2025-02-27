import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Dashboard.css";


function Destinos() {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [destinoSeleccionado, setDestinoSeleccionado] = useState<string | null>(null);

  // 🔹 Lista de destinos de ejemplo (ESTO DEBERÍA VENIR DE LA BASE DE DATOS)
  const destinos = [
    { nombre: "Zona Hotelera", municipio: "Benito Juárez", latitud: "21.17429", longitud: "-86.84656" },
    { nombre: "Playa Delfines", municipio: "Cancún", latitud: "21.05934", longitud: "-86.77696" },
    { nombre: "Isla Mujeres", municipio: "Isla Mujeres", latitud: "21.23287", longitud: "-86.73108" },
  ];

  // 🔹 Función para abrir el modal y seleccionar el destino
  const handleDeleteClick = (nombre: string) => {
    setDestinoSeleccionado(nombre);
    setModalOpen(true);
  };

  // 🔹 Función para confirmar la eliminación (AQUÍ DEBERÍAS HACER LA PETICIÓN A LA BASE DE DATOS)
  const handleConfirmDelete = () => {
    console.log(`Destino ${destinoSeleccionado} eliminado de la base de datos.`);
    setModalOpen(false);
    setDestinoSeleccionado(null);
  };

  return (
    <div className="p-6 relative">
      {/* 🔹 Título y Botón */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-green-700 font-bold text-3xl">Destinos</h2>
        <button
          onClick={() => navigate("/admin/registrar-destino")}
          className="bg-green-700 text-green px-4 py-2 rounded-md hover:bg-green-800"
        >
          Nuevo +
        </button>
      </div>

      {/* 🔹 Tabla de Destinos */}
      <div className="bg-white shadow-md rounded-lg p-4 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-green-100 text-green-700">
              <th className="px-4 py-2">Destino</th>
              <th className="px-4 py-2">Municipio</th>
              <th className="px-4 py-2">Latitud</th>
              <th className="px-4 py-2">Longitud</th>
              <th className="px-4 py-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {destinos.map((destino) => (
              <tr className="border-t" key={destino.nombre}>
                <td className="px-4 py-2">{destino.nombre}</td>
                <td className="px-4 py-2">{destino.municipio}</td>
                <td className="px-4 py-2">{destino.latitud}</td>
                <td className="px-4 py-2">{destino.longitud}</td>
                <td className="px-4 py-2 flex space-x-2">
                  <span className="cursor-pointer">👁️</span>
                  <span className="cursor-pointer">✏️</span>
                  <span
                    className="cursor-pointer text-red-500"
                    onClick={() => handleDeleteClick(destino.nombre)}
                  >
                    🗑️
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 🔹 Modal de Confirmación SIN FONDO NEGRO */}
      {modalOpen && (
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 bg-white p-6 rounded-lg shadow-lg text-center w-96 border border-green-300">
          <h3 className="text-xl font-bold text-green-700 mb-4">Confirmar Eliminación</h3>
          <p className="text-gray-700 mb-6">
            ¿Estás seguro de que quieres eliminar el destino <strong>{destinoSeleccionado}</strong>?
          </p>
          <div className="flex justify-between gap-4">
            <button
              onClick={() => setModalOpen(false)}
              className="bg-gray-400 text-green px-4 py-2 rounded-md hover:bg-gray-500"
            >
              Cancelar
            </button>
            <button
              onClick={handleConfirmDelete}
              className="bg-red-600 text-green px-4 py-2 rounded-md hover:bg-red-700"
            >
              Eliminar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Destinos;

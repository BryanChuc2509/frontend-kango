import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Dashboard.css";


function Vehiculos() {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [vehiculoSeleccionado, setVehiculoSeleccionado] = useState<string | null>(null);

  // 🔹 Lista de vehículos de ejemplo (ESTO DEBERÍA VENIR DE LA BASE DE DATOS)
  const vehiculos = [
    { placa: "ABC-123-D", marca: "Cadillac", modelo: "Escalade", calidad: "VIP", estado: "Reservado" },
    { placa: "XYZ-456-E", marca: "Toyota", modelo: "Hilux", calidad: "Premium", estado: "Libre" },
    { placa: "LMN-789-F", marca: "Ford", modelo: "Ranger", calidad: "Estándar", estado: "Mantenimiento" },
  ];

  // 🔹 Función para abrir el modal y seleccionar el vehículo
  const handleDeleteClick = (placa: string) => {
    setVehiculoSeleccionado(placa);
    setModalOpen(true);
  };

  // 🔹 Función para confirmar la eliminación (AQUÍ DEBERÍAS HACER LA PETICIÓN A LA BASE DE DATOS)
  const handleConfirmDelete = () => {
    console.log(`Vehículo con placa ${vehiculoSeleccionado} eliminado de la base de datos.`);
    // 🔻 Aquí deberías hacer la petición a la API para eliminar el vehículo en la base de datos
    // fetch(`/api/vehiculos/${vehiculoSeleccionado}`, { method: "DELETE" })
    setModalOpen(false);
    setVehiculoSeleccionado(null);
  };

  return (
    <div className="p-6 relative">
      {/* 🔹 Título y Botón */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-green-700 font-bold text-3xl">Vehículos</h2>
        <button
          onClick={() => navigate("/admin/registrar-vehiculo")}
          className="bg-green-700 text-green px-4 py-2 rounded-md hover:bg-green-800"
        >
          Nuevo +
        </button>
      </div>

      {/* 🔹 Tabla de Vehículos */}
      <div className="bg-white shadow-md rounded-lg p-4 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-green-100 text-green-700">
              <th className="px-4 py-2">Placa</th>
              <th className="px-4 py-2">Marca</th>
              <th className="px-4 py-2">Modelo</th>
              <th className="px-4 py-2">Calidad</th>
              <th className="px-4 py-2">Estado</th>
              <th className="px-4 py-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {vehiculos.map((vehiculo) => (
              <tr className="border-t" key={vehiculo.placa}>
                <td className="px-4 py-2">{vehiculo.placa}</td>
                <td className="px-4 py-2">{vehiculo.marca}</td>
                <td className="px-4 py-2">{vehiculo.modelo}</td>
                <td className="px-4 py-2">{vehiculo.calidad}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded-md ${
                      vehiculo.estado === "Libre"
                        ? "bg-green-200 text-green-700"
                        : vehiculo.estado === "Reservado"
                        ? "bg-yellow-200 text-yellow-700"
                        : "bg-red-200 text-red-700"
                    }`}
                  >
                    {vehiculo.estado}
                  </span>
                </td>
                <td className="px-4 py-2 flex space-x-2">
                  <span className="cursor-pointer">👁️</span>
                  <span className="cursor-pointer">✏️</span>
                  <span
                    className="cursor-pointer text-red-500"
                    onClick={() => handleDeleteClick(vehiculo.placa)}
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
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 bg-white p-6 rounded-lg shadow-lg text-center w-96">
          <h3 className="text-xl font-bold text-green-700 mb-4">Confirmar Eliminación</h3>
          <p className="text-gray-700 mb-6">
            ¿Estás seguro de que quieres eliminar el vehículo con placa <strong>{vehiculoSeleccionado}</strong>?
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

export default Vehiculos;

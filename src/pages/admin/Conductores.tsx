import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Dashboard.css";


function Conductores() {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [conductorSeleccionado, setConductorSeleccionado] = useState<string | null>(null);

  // 🔹 Lista de conductores de ejemplo (ESTO DEBERÍA VENIR DE LA BASE DE DATOS)
  const conductores = [
    { correo: "eh4@gmail.com", nombre: "Emiliano", apellido: "Hernández", telefono: "9987654321", estado: "Reservado" },
    { correo: "eg4@gmail.com", nombre: "Carlos", apellido: "López", telefono: "9987656789", estado: "Libre" },
    { correo: "mg3@gmail.com", nombre: "Fernanda", apellido: "García", telefono: "9987643210", estado: "Ocupado" },
  ];

  // 🔹 Función para abrir el modal y seleccionar el conductor
  const handleDeleteClick = (correo: string) => {
    setConductorSeleccionado(correo);
    setModalOpen(true);
  };

  // 🔹 Función para confirmar la eliminación (AQUÍ DEBERÍAS HACER LA PETICIÓN A LA BASE DE DATOS)
  const handleConfirmDelete = () => {
    console.log(`Conductor ${conductorSeleccionado} eliminado de la base de datos.`);
    // 🔻 Aquí deberías hacer la petición a la API para eliminar el conductor en la base de datos
    // fetch(`/api/conductores/${conductorSeleccionado}`, { method: "DELETE" })
    setModalOpen(false);
    setConductorSeleccionado(null);
  };

  return (
    <div className="p-6 relative">
      {/* 🔹 Título y Botón */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-green-700 font-bold text-3xl">Conductores</h2>
        <button
          onClick={() => navigate("/admin/registrar-conductor")}
          className="bg-green-700 text-green px-4 py-2 rounded-md hover:bg-green-800"
        >
          Nuevo +
        </button>
      </div>

      {/* 🔹 Tabla de Conductores */}
      <div className="bg-white shadow-md rounded-lg p-4 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-green-100 text-green-700">
              <th className="px-4 py-2">Correo</th>
              <th className="px-4 py-2">Nombre</th>
              <th className="px-4 py-2">Apellido</th>
              <th className="px-4 py-2">Teléfono</th>
              <th className="px-4 py-2">Estado</th>
              <th className="px-4 py-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {conductores.map((conductor) => (
              <tr className="border-t" key={conductor.correo}>
                <td className="px-4 py-2">{conductor.correo}</td>
                <td className="px-4 py-2">{conductor.nombre}</td>
                <td className="px-4 py-2">{conductor.apellido}</td>
                <td className="px-4 py-2">{conductor.telefono}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded-md ${
                      conductor.estado === "Libre"
                        ? "bg-green-200 text-green-700"
                        : conductor.estado === "Reservado"
                        ? "bg-yellow-200 text-yellow-700"
                        : "bg-red-200 text-red-700"
                    }`}
                  >
                    {conductor.estado}
                  </span>
                </td>
                <td className="px-4 py-2 flex space-x-2">
                  <span className="cursor-pointer">👁️</span>
                  <span className="cursor-pointer">✏️</span>
                  <span
                    className="cursor-pointer text-red-500"
                    onClick={() => handleDeleteClick(conductor.correo)}
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
            ¿Estás seguro de que quieres eliminar el conductor con correo <strong>{conductorSeleccionado}</strong>?
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

export default Conductores;

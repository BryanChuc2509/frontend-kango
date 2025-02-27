import { useState } from "react";
import { FaCar, FaMapMarkerAlt, FaPlaneDeparture, FaClock, FaUsers, FaTimes } from "react-icons/fa";
import "../../styles/Dashboard.css";


function Notificaciones() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedReserva, setSelectedReserva] = useState<any>(null);

  const notificaciones = [
    { id: "0925", destino: "Zona Hotelera de Cancún", puntoPartida: "Aeropuerto Internacional de Cancún", horario: "17 de Febrero de 2025", vehiculo: "Toyota Adventure", pasajeros: "2 Pasajeros" },
    { id: "0923", destino: "Zona Hotelera de Cancún", puntoPartida: "Aeropuerto Internacional de Cancún", horario: "17 de Febrero de 2025", vehiculo: "Toyota Adventure", pasajeros: "2 Pasajeros" },
    { id: "0925", destino: "Zona Hotelera de Cancún", puntoPartida: "Aeropuerto Internacional de Cancún", horario: "17 de Febrero de 2025", vehiculo: "Toyota Adventure", pasajeros: "2 Pasajeros" },
  ];

  const conductores = [
    "Emiliano Hernández",
    "Carlos López",
    "Fernanda García",
    "Juan Pérez",
    "Alejandro Ramírez",
  ];

  const openModal = (reserva: any) => {
    setSelectedReserva(reserva);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="p-6 relative">
      <h2 className="text-green-700 font-bold text-3xl mb-4">📢 Notificaciones</h2>
      <div className="bg-white shadow-md rounded-lg p-4">
        {notificaciones.map((reserva, index) => (
          <div
            key={index}
            className="flex items-center gap-4 border-b last:border-b-0 py-4 hover:bg-gray-100 transition-all duration-200 rounded-lg px-4 cursor-pointer"
            onClick={() => openModal(reserva)}
          >
            <div className="flex items-center justify-center bg-green-200 text-green-700 rounded-full w-12 h-12">
              <FaCar className="text-2xl" />
            </div>
            <div>
              <p className="text-green-700 font-semibold text-lg">Reserva {reserva.id}</p>
              <p className="text-gray-600 text-sm">De {reserva.puntoPartida} a {reserva.destino}...</p>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {modalOpen && selectedReserva && (
        <div className="absolute inset-0 flex justify-center items-start mt-10">
          <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl border border-green-500">
            <div className="flex justify-between items-center border-b pb-3">
              <h2 className="text-green-700 font-bold text-3xl">Asignar conductor</h2>
              <button onClick={closeModal} className="text-green-700 text-2xl">
                <FaTimes />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 my-6">
              <div className="bg-green-100 p-4 rounded-md">
                <span className="text-green-700 font-bold flex items-center"><FaMapMarkerAlt className="mr-2" /> Destino</span>
                <p className="text-gray-700">{selectedReserva.destino}</p>
              </div>
              <div className="bg-green-100 p-4 rounded-md">
                <span className="text-green-700 font-bold flex items-center"><FaPlaneDeparture className="mr-2" /> Punto de partida</span>
                <p className="text-gray-700">{selectedReserva.puntoPartida}</p>
              </div>
              <div className="bg-green-100 p-4 rounded-md">
                <span className="text-green-700 font-bold flex items-center"><FaClock className="mr-2" /> Horario</span>
                <p className="text-gray-700">{selectedReserva.horario}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-100 p-4 rounded-md">
                <span className="text-green-700 font-bold flex items-center"><FaCar className="mr-2" /> Vehículo asignado</span>
                <p className="text-gray-700">{selectedReserva.vehiculo}</p>
              </div>
              <div className="bg-green-100 p-4 rounded-md">
                <span className="text-green-700 font-bold flex items-center"><FaUsers className="mr-2" /> Pasajeros</span>
                <p className="text-gray-700">{selectedReserva.pasajeros}</p>
              </div>
            </div>

            <div className="mt-6">
              <label className="text-green-700 font-bold block mb-2">Conductor Asignado</label>
              <select className="w-full p-3 border rounded-md bg-green-50 text-green-700">
                <option value="">Seleccione un conductor</option>
                {conductores.map((conductor, index) => (
                  <option key={index} value={conductor}>{conductor}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-3 gap-2 mt-6">
              {conductores.map((conductor, index) => (
                <button key={index} className="bg-green-200 text-green-700 py-3 px-6 rounded-md hover:bg-green-300 transition">
                  {conductor}
                </button>
              ))}
            </div>

            <div className="flex justify-end mt-6">
              <button className="bg-green-700 text-green px-8 py-3 rounded-md hover:bg-green-800 text-lg transition">
                Asignar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Notificaciones;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCar, FaTag, FaPalette, FaUserFriends, FaIdBadge, FaListAlt, FaKey } from "react-icons/fa";
import "../../styles/Dashboard.css";


function FormularioVehiculo() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    marca: "",
    modelo: "",
    tipo: "",
    color: "",
    capacidad: "",
    placa: "",
    numeroSerie: "",
    estado: "En circulación",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Vehículo registrado:", formData);
    navigate("/admin/vehiculos");
  };

  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-50 mt-6">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-3xl p-6">
        <h2 className="text-green-700 font-bold text-3xl mb-4 text-center">Registrar Vehículo</h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          {[
            { name: "marca", placeholder: "Marca del vehículo", icon: FaTag },
            { name: "modelo", placeholder: "Modelo del vehículo", icon: FaCar },
            { name: "tipo", placeholder: "Tipo de vehículo", icon: FaListAlt },
            { name: "color", placeholder: "Color", icon: FaPalette },
            { name: "capacidad", placeholder: "Capacidad de pasajeros", icon: FaUserFriends, type: "number" },
            { name: "placa", placeholder: "Placa", icon: FaIdBadge },
            { name: "numeroSerie", placeholder: "Número de serie", icon: FaKey },
          ].map(({ name, placeholder, icon: Icon, type = "text" }) => (
            <div key={name} className="flex items-center bg-green-50 p-2 rounded-lg border border-green-300">
              <Icon className="text-green-700 text-xl mr-2" />
              <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={formData[name as keyof typeof formData]}
                onChange={handleChange}
                required
                className="w-full bg-green-50 focus:outline-none placeholder-green-700 text-lg"
              />
            </div>
          ))}

          {/* Estado del Vehículo - Ahora está alineado correctamente */}
          <div className="flex items-center bg-green-50 p-2 rounded-lg border border-green-300 col-span-1">
            <FaListAlt className="text-green-700 text-xl mr-2" />
            <select
              name="estado"
              value={formData.estado}
              onChange={handleChange}
              required
              className="w-full bg-green-50 focus:outline-none appearance-none text-lg"
            >
              <option value="En circulación">En circulación</option>
              <option value="Por partir">Por partir</option>
              <option value="Inactivo">Inactivo</option>
              <option value="En espera">En espera</option>
            </select>
          </div>

          {/* Botones */}
          <div className="col-span-2 flex justify-between mt-4">
            <button
              type="button"
              onClick={() => navigate("/vehiculos")}
              className="bg-gray-500 text-green px-5 py-2 rounded-lg hover:bg-gray-700 transition text-lg"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-green-700 text-green px-5 py-2 rounded-lg hover:bg-green-800 transition text-lg"
            >
              Guardar Vehículo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormularioVehiculo;

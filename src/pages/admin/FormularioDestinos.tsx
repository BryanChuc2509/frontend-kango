import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaMapMarkerAlt, FaCity, FaGlobe, FaLocationArrow } from "react-icons/fa";
import "../../styles/Dashboard.css";


function FormularioDestinos() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    destino: "",
    municipio: "",
    latitud: "",
    longitud: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Destino registrado:", formData);
    navigate("/admin/destinos");
  };

  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-50 mt-6">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-3xl p-6">
        <h2 className="text-green-700 font-bold text-3xl mb-4 text-center">Registrar Destino</h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          {[
            { name: "destino", placeholder: "Destino", icon: FaMapMarkerAlt },
            { name: "municipio", placeholder: "Municipio", icon: FaCity },
            { name: "latitud", placeholder: "Latitud", icon: FaGlobe },
            { name: "longitud", placeholder: "Longitud", icon: FaLocationArrow },
          ].map(({ name, placeholder, icon: Icon }) => (
            <div key={name} className="flex items-center bg-green-50 p-2 rounded-lg border border-green-300">
              <Icon className="text-green-700 text-xl mr-2" />
              <input
                type="text"
                name={name}
                placeholder={placeholder}
                value={formData[name as keyof typeof formData]}
                onChange={handleChange}
                required
                className="w-full bg-green-50 focus:outline-none placeholder-green-700 text-lg"
              />
            </div>
          ))}

          {/* Botones */}
          <div className="col-span-2 flex justify-between mt-4">
            <button
              type="button"
              onClick={() => navigate("/destinos")}
              className="bg-gray-500 text-green px-5 py-2 rounded-lg hover:bg-gray-700 transition text-lg"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-green-700 text-green px-5 py-2 rounded-lg hover:bg-green-800 transition text-lg"
            >
              Guardar Destino
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormularioDestinos;

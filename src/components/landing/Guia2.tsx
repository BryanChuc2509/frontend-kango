import { ReactNode, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; 

const puntoPartida = ["Punto 1", "Punto 2", "Punto 3", "Punto 4"];
const destinos = ["Destino 1", "Destino 2", "Destino 3", "Destino 4"];





export default function Guia() {
  const navigate = useNavigate(); 
  const [fecha, setFecha] = useState("");
  const [pasajeros, setPasajeros] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/elegir-vehiculo"); 
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        scale: { type: "spring", stiffness: 100, damping: 15 },
      }}
      className="w-full mx-4 sm:mx-6 md:mx-10 lg:mx-14 bg-[#05843D] shadow-lg shadow-black/25 rounded-xl p-4 sm:p-6 md:p-8"
    >
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <FormField label="Punto de partida">
            <select className="w-full px-3 py-2 rounded-lg border-2 border-transparent hover:border-green-300 focus:border-green-500 focus:outline-none transition-colors" name="puntoPartida" aria-readonly>
              {puntoPartida.map((punto) => (
                <option key={punto} value={punto}>{punto}</option>
              ))}
            </select>
          </FormField>

          <FormField label="Destino">
            <select className="w-full px-3 py-2 rounded-lg border-2 border-transparent hover:border-green-300 focus:border-green-500 focus:outline-none transition-colors" name="destinos"aria-readonly>
              {destinos.map((punto) => (
                <option key={punto} value={punto}>{punto}</option>
              ))}
            </select>
          </FormField>

          <FormField label="Fecha de salida">
            <input className="w-full px-3 py-2 rounded-lg border-2 border-transparent hover:border-green-300 focus:border-green-500 focus:outline-none transition-colors" aria-readonly
              type="date" name="fecha" value={fecha} onChange={(e) => setFecha(e.target.value)} />
          </FormField>

          <FormField label="Pasajeros">
            <input className="w-full px-3 py-2 rounded-lg border-2 border-transparent hover:border-green-300 focus:border-green-500 focus:outline-none transition-colors" aria-readonly
              type="number" min={1} name="pasajeros" value={pasajeros} onChange={(e) => setPasajeros(Number(e.target.value))} />
          </FormField>
        </div>

        <div className="flex justify-end mt-4">
          <button type="submit" className="px-6 py-2 rounded-lg font-bold text-lg bg-white text-black hover:bg-gray-100 transition-colors" aria-readonly>
            Inicia sesion para reservar
          </button>
        </div>
      </form>
    </motion.div>
  );
}

function FormField({ label, children }: { label: ReactNode; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-lg sm:text-xl lg:text-2xl text-white text-center font-bold">{label}</label>
      {children}
    </div>
  );
}

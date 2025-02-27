function VehicleTable() {
  
    const vehicles = [
      { placa: "ABC - 123 - D", marca: "Cadillac", modelo: "Escalade", viajes: 3, km: 62.7, capacidad: "75%" },
      { placa: "ABC - 123 - D", marca: "Cadillac", modelo: "Escalade", viajes: 3, km: 62.7, capacidad: "75%" },
      { placa: "ABC - 123 - D", marca: "Cadillac", modelo: "Escalade", viajes: 3, km: 62.7, capacidad: "75%" },
      { placa: "ABC - 123 - D", marca: "Cadillac", modelo: "Escalade", viajes: 3, km: 62.7, capacidad: "75%" },
    ];
  
    return (
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-green-100 text-green-700">
              <th className="px-4 py-2">Placa</th>
              <th className="px-4 py-2">Marca</th>
              <th className="px-4 py-2">Modelo</th>
              <th className="px-4 py-2">Viajes</th>
              <th className="px-4 py-2">Km. Recorridos</th>
              <th className="px-4 py-2">Capacidad</th>
            </tr>
          </thead>
          <tbody>
            {vehicles.map((vehicle, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-2">{vehicle.placa}</td>
                <td className="px-4 py-2">{vehicle.marca}</td>
                <td className="px-4 py-2">{vehicle.modelo}</td>
                <td className="px-4 py-2">{vehicle.viajes}</td>
                <td className="px-4 py-2">{vehicle.km}</td>
                <td className="px-4 py-2">{vehicle.capacidad}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default VehicleTable;
  
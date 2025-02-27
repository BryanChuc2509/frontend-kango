import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "../../styles/Dashboard.css";

ChartJS.register(ArcElement, Tooltip, Legend);

function ConductorsChart() {
  const data = {
    labels: ["Disponible", "Ocupado"],
    datasets: [
      {
        data: [44.4, 55.6],
        backgroundColor: ["#4CAF50", "#2E7D32"],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-green-700 font-bold mb-4">Conductores</h3>
      <div className="w-70 h-70 mx-auto">
        <Pie data={data} options={options} />
      </div>
      <div className="flex justify-center gap-4 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-green-500 rounded-full"></div>
          <span>Disponible</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-green-800 rounded-full"></div>
          <span>Ocupado</span>
        </div>
      </div>
    </div>
  );
}

export default ConductorsChart;

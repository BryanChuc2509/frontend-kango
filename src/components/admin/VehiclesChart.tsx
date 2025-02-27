import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import "../../styles/Dashboard.css";


ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function VehiclesChart() {
  const data = {
    labels: ["Toyota", "Cadillac", "Bus Mercedez", "Cadillac Escalade"],
    datasets: [
      {
        label: "Viajes",
        data: [4, 3, 10, 9],
        backgroundColor: "#2E7D32",
      },
      {
        label: "Capacidad",
        data: [6, 5, 10, 10],
        backgroundColor: "#4CAF50",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-green-700 font-bold mb-4">Viajes y Capacidad</h3>
      <Bar data={data} options={options} />
    </div>
  );
}

export default VehiclesChart;

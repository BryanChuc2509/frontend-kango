import VehicleTable from "../../components/admin/VehicleTable";
import ConductorsChart from "../../components/admin/ConductorsChart";
import VehiclesChart from "../../components/admin/VehiclesChart";
import "../../styles/Dashboard.css";


function Dashboard() {
  return (
    <div className="p-6">
      <div className="bg-white shadow-md rounded-lg p-4">
        <VehicleTable />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <ConductorsChart />
        <VehiclesChart />
      </div>
    </div>
  );
}

export default Dashboard;

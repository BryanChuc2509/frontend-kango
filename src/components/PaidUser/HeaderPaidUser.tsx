import LogoGreen from "../public/LogoGreen"
import { LogOut } from "lucide-react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="flex flex-row absolute top-0 items-center justify-between w-full h-24 px-12 z-10">
      <LogoGreen variant="green" />
      <div className="flex flex-row gap-4">
      <Link to="/login">
          <div className="flex items-center justify-center text-xl font-semibold text-[#04843c] border-[#04843c] border-2 rounded-lg px-4 sm:px-2 h-10 transition-all duration-200 ease hover:scale-105">
            <p className="hidden sm:block">Cerrar Sesión</p>
            <LogOut className="block sm:hidden" />
          </div>
        </Link>
      </div>
    </div>
  );
}
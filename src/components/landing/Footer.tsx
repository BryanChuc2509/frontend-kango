import Logo from "./Logo";
import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="flex relative flex-col items-center justify-center w-screen h-36 gap-5 px-8 md:px-52 bg-[#05843D]">
      <div className="absolute top-4 left-4 hidden md:block">
        <Logo variant="white" />
      </div>
      <div className="flex flex-row gap-4 md:gap-24 items-center justify-center">
        <Link className="text-white font-bold text-sm md:text-xl" to="/login">
          Iniciar
        </Link>
        <Link
          className="text-white font-bold text-sm md:text-xl"
          to="/register"
        >
          Registro
        </Link>
        <div className="hidden md:flex flex-row text-white gap-6">
          <Link to="https://www.instagram.com">
            <Instagram color="#fff" />
          </Link>
          <Link to="https://www.instagram.com">
            <Instagram color="#fff" />
          </Link>
          <Link to="https://www.instagram.com">
            <Instagram color="#fff" />
          </Link>
        </div>
      </div>
      <div className="w-full h-[1px] bg-white" />
      <p className="font-bold text-xs md:text-xl text-white text-center">
        © 2025 Turismo KanGo!, La experiencia de viaje
      </p>
    </div>
  );
}

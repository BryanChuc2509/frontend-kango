import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
    const navigate = useNavigate();
    const [seconds, setSeconds] = useState(3); // Estado de cuenta regresiva

    useEffect(() => {
        const countdown = setInterval(() => {
            setSeconds((prev) => prev - 1);
        }, 1000);

        const timer = setTimeout(() => {
            navigate("/landing");
        }, 3000);

        return () => {
            clearInterval(countdown);
            clearTimeout(timer);
        };
    }, [navigate]);

    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen gap-12 py-8">
            <div className="flex flex-col items-center gap-4">
                <h1 className="text-[70px] text-center font-bold">
                    ERROR 404 - NOT FOUND
                </h1>
                <h2 className="text-[40px] font-medium text-center">
                    ¡Oops, Parece que este lugar no existe!
                </h2>
                <p className="text-xl text-center">
                    Intentas acceder a un lugar que nadie conoce, regresa a la página principal.
                </p>
                <p className="text-xl text-center">
                    Regresando en {seconds}...
                </p>
                <button onClick={() => navigate("/landing")} className="px-4 py-2 bg-[#208445] text-white rounded">
                    Regresar ahora
                </button>
            </div>
        </div>
    );
}

import Logo from "../components/Logo";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const carData = [
  {
    type: "Camión",
    vehicle: "Van Toyota Adventure",
    passengers: 3,
    quality: "Estándar",
    price: 240,
    img: "https://assets.stickpng.com/thumbs/5860ef6f4fc7f3474eb80d90.png",
  },
  {
    type: "Camión",
    vehicle: "Van Toyota Adventure",
    passengers: 3,
    quality: "Estándar",
    price: 240,
    img: "https://assets.stickpng.com/thumbs/5860ef6f4fc7f3474eb80d90.png",
  },
  {
    type: "Camión",
    vehicle: "Van Toyota Adventure",
    passengers: 3,
    quality: "Estándar",
    price: 240,
    img: "https://assets.stickpng.com/thumbs/5860ef6f4fc7f3474eb80d90.png",
  },
];

export default function Root() {
  return (
    <div className="relative flex flex-col w-screen min-h-screen">
      <Header />
      <Link className="absolute left-16 top-32 text-[#05843D]" to="/">
        <ArrowLeft className="w-10 h-10" />
      </Link>
      <Indicator />
      <div className="flex flex-1 flex-col gap-8 mt-10 items-center justify-center">
        <p className="text-5xl font-bold text-center">
          Escoge el medio de transporte
        </p>
        <div className="bg-[#05843d] w-[80%] h-1" />
        <div className="flex flex-col items-center justify-center gap-6 w-full h-full">
          {carData.map((car, index) => (
            <CarDetails
              key={index}
              img={car.img}
              type={car.type}
              vehicle={car.vehicle}
              passengers={car.passengers}
              quality={car.quality}
              price={car.price}
            />
          ))}
        </div>
      </div>
      <div className="h-12" />
      <Footer />
    </div>
  );
}

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row items-center border-b-2 border-green-800 justify-between w-full h-24 px-12">
      <Logo />
      <div className="flex flex-row items-center gap-10 text-green-500">
        <Link className="font-bold text-xl" to="destinos">
          
        </Link>
        <Link className="font-bold text-xl" to="vehiculos">
          
        </Link>
        <div
          onClick={() => navigate("/")}
          className="rounded-full cursor-pointer select-none border-4 border-green-800 text-green-800 font-bold px-4 py-2"
        >
          Cerrar sesión
        </div>
      </div>
    </div>
  );
};

const Indicator = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center gap-4 mt-14">
      <div className="flex flex-row items-center justify-center w-full">
        <div className="bg-[#05843d] w-12 h-12" />
        <div className="bg-gray-300 w-80 h-4" />
        <div className="bg-gray-300 w-12 h-12" />
      </div>
      <div className="flex flex-row w-[460px] pr-5 font-bold text-center text-xl items-center justify-between">
        <p>Vehículo</p>
        <p>Pago</p>
      </div>
    </div>
  );
};

const CarDetails = ({
  img,
  type,
  vehicle,
  passengers,
  quality,
  price,
}: {
  img: string;
  type: string;
  vehicle: string;
  passengers: number;
  quality: string;
  price: number;
}) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-row items-center justify-center w-[60%] shadow-md shadow-black/15 h-64 rounded-lg bg-[#f2f6f0]">
      <div className="flex items-center justify-center w-1/3 h-full">
        <img src={img} className="w-60 h-auto object-fit" />
      </div>
      <div className="w-[2px] h-[80%] mx-4 bg-gray-300" />
      <div className="flex flex-col text-xl w-1/3 gap-2">
        <p className="text-3xl font-bold">{type}</p>
        <div className="flex flex-row gap-2 font-bold">
          <p className="text-black">Vehiculo:</p>
          <p className="text-[#05843d]">{vehicle}</p>
        </div>
        <div className="flex flex-row gap-2 font-bold">
          <p className="text-black">Pasajeros:</p>
          <p className="text-[#05843d]">{passengers} personas</p>
        </div>
        <div className="flex flex-row gap-2 font-bold">
          <p className="text-black">Calidad:</p>
          <p className="text-[#05843d]">{quality}</p>
        </div>
      </div>
      <div className="w-[2px] h-[80%] mx-4 bg-gray-300" />
      <div className="flex flex-col justify-center w-1/3 items-center gap-4">
        <p className="text-2xl font-bold">${price} MXN</p>
        <button
          onClick={() => navigate("/PaidUser")}
          className="bg-[#05843d] p-3 cursor-pointer select-none rounded-lg text-white font-bold text-xl"
        >
          Seleccionar
        </button>
      </div>
    </div>
  );
};

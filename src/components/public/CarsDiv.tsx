import Cars from "../user/CarsCarousel";
import { cars as carsData } from "../lib/carsCarouselData";
import road from "../assets/images/carretera.jpeg";

export default function CarsDiv() {
  return (
    <div className="relative -translate-y-8 md:-translate-y-24 flex flex-col gap-12 mt-6 items-center justify-center px-2 w-full">
      <div className="bg-[#05843D] w-[70%] mt-8 h-1" />
      <p className="text-4xl md:text-6xl text-[#05843d] text-center font-bold">
        Escoge tu transporte
      </p>
      <div className="w-full sm:w-[70%]">
        <Cars cars={carsData} />
      </div>
      <img src={road} className="-z-10 absolute -bottom-32 left-0 w-[640px]" />
    </div>
  );
}

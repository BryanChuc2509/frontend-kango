import Destinies from "../user/DestiniesCarousel";
import { destinies as destiniesData } from "../lib/homeDestiniesData";

export default function DestiniesDiv() {
  return (
    <div className="-translate-y-8 md:-translate-y-24 flex flex-col gap-12 mt-6 items-center justify-center px-2 w-full">
      <div className="bg-[#05843D] w-[70%] h-1" />
      <p className="text-4xl md:text-6xl text-[#05843d] text-center font-bold">
        Destinos Populares
      </p>
      <p className="text-md md:text-2xl text-center text-[#05843d]">
        Visita los destinos turísticos más llamativos del Mar Caribe en Quintana
        Roo, México
      </p>
      <div className="w-full sm:w-[70%] my-4">
        <Destinies destinies={destiniesData} />
      </div>
    </div>
  );
}

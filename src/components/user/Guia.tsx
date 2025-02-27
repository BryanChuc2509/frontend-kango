import { LucideIcon, Pointer, Car, PersonStanding, Check } from "lucide-react";
import * as motion from "motion/react-client";

export default function Guia() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
      }}
      className="w-[90%] md:w-[80%] h-[124px] md:h-[340px] flex flex-col items-center justify-center bg-[#05843D] shadow-lg shadow-black/25 gap-2 md:gap-4 rounded-xl"
    >
      <div className="flex flex-row justify-between w-[95%] md:w-[70%]">
        <Descripcion Icon={Pointer} description="Elige" />
        <Descripcion Icon={Car} description="Reserva" />
        <Descripcion Icon={PersonStanding} description="Disfruta" />
      </div>
      <div className="flex relative flex-row justify-between w-[95%] md:w-[70%]">
        <div className="absolute top-1/2 w-full flex items-center justify-center px-12">
          <div className="w-full h-[2px] bg-[#f2f6f0]" />
        </div>
        <Bolita />
        <Bolita />
        <Bolita />
      </div>
    </motion.div>
  );
}

function Descripcion({
  Icon,
  description,
}: {
  Icon: LucideIcon;
  description: string;
}) {
  return (
    <div className="flex flex-col w-24 gap-1 items-center justify-center text-[#f2f6f0]">
      <Icon
        className="w-6 h-6 md:w-12 md:h-12 xl:w-20 xl:h-20"
        fill="#f2f6f0"
      />
      <p className="text-sm md:text-xl xl:text-2xl text-center font-bold">
        {description}
      </p>
    </div>
  );
}

function Bolita() {
  return (
    <div className="flex justify-center w-24 z-[1]">
      <div className="flex items-center justify-center rounded-full bg-[#f2f6f0] text-[#05843D] w-8 h-8 md:w-10 md:h-10">
        <Check className="w-2.5 h-2.5 md:w-4 md:h-4" strokeWidth={4} />
      </div>
    </div>
  );
}

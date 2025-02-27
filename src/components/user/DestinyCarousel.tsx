import { Link } from "react-router-dom";
export default function Item({
  img,
  title,
  description,
  tours,
  href,
}: {
  img: string;
  title: string;
  description: string;
  tours: number;
  href: string;
}) {
  return (
    <div className="w-96 h-96 rounded-md shadow-lg shadow-black/15 my-5 bg-[#f2f6f0] text-[#253916] hover:scale-105 transition-all duration-200 ease-in-out">
      <img
        src={img}
        alt={title}
        className="w-full h-44 object-cover rounded-md"
      />
      <div className="w-full h-[9.5rem] space-y-1 px-4 py-2 overflow-hidden">
        <p className="text-[#05843D] font-bold text-2xl">{title}</p>
        <p>{description}</p>
      </div>
      <div className="flex flex-row items-center justify-between px-4">
        <p className="text-lg font-bold text-[#253916]">
          {tours} Tours diarios
        </p>
        <Link to={href}>
          <div className="flex items-center justify-center text-center font-bold select-none cursor-pointer bg-[#05843d] px-2 text-[#f2f6f0] h-10 rounded-lg transition-all duration-200 ease hover:scale-105">
            Reservar
          </div>
        </Link>
      </div>
    </div>
  );
}

export default function Item({
  img,
  title,
  description,
  tours,
}: {
  img: string;
  title: string;
  description: string;
  tours: number;
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
      <div className="flex flex-row items-center px-4">
        <p className="text-lg font-bold text-[#253916]">
          {tours} Tours diarios
        </p>
      </div>
    </div>
  );
}

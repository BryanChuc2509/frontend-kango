export default function Item({
  img,
  name,
  quantity,
  onClick,
}: {
  img: string;
  name: string;
  quantity: number;
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="w-[80%] h-56 rounded-md bg-[#f2f6f0] shadow-lg shadow-black/15 my-5 text-[#253916] hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer"
    >
      <img
        src={img}
        alt={name}
        className="w-full h-[180px] object-contain rounded-md"
      />
      <div className="flex flex-row items-center justify-between w-full px-4">
        <div className="flex flex-row items-center gap-2">
          <div className="rounded-full bg-gray-500 w-4 h-4" />
          <p className="text-gray-500">{name}</p>
        </div>
        <div className="bg-gray-300 rounded-md px-4 py-1">{quantity}</div>
      </div>
    </div>
  );
}

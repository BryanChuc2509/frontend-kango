export default function Logo({
  variant = "default",
}: {
  variant?: "default" | "white";
}) {
  return (
    <div
      className={`select-none flex flex-col items-center justify-center text-2xl leading-none font-black ${variant == "default" ? "text-[#253916]" : variant == "white" ? "text-[#f2f6f0]" : ""}`}
    >
      <p>Kan</p>
      <p>Go!</p>
    </div>
  );
}

import { useNavigate } from "react-router-dom";

export default function Logo({
    variant = "default",
  }: {
    variant?: "default" | "green";
  }) {
    
    const navigate = useNavigate(); 
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        navigate("/landing"); 
      };
      
    return (
      <div
        className={`select-none flex flex-col items-center justify-center text-2xl leading-none font-black ${variant == "default" ? "text-[#04843c]" : variant == "green" ? "text-[#04843c]" : ""}`}
        onClick={handleSubmit}
      >
        <p>Kan</p>
        <p>Go!</p>
      </div>
    );
  }
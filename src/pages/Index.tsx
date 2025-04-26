
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#1A1F2C] to-[#0D1117] text-white">
      <div className="text-center max-w-2xl px-4">
        <h1 className="text-5xl font-bold mb-6 text-[#D6BCFA]">Люкс Казино</h1>
        <p className="text-xl text-[#8E9196] mb-8">
          Добро пожаловать в самое роскошное казино! Испытайте удачу в наших слотах и выиграйте джекпот!
        </p>
        
        <Button 
          onClick={() => navigate("/casino")} 
          className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white px-8 py-6 text-xl rounded-full shadow-lg transition-all hover:shadow-[0_0_20px_rgba(155,135,245,0.5)] transform hover:scale-105"
        >
          Играть сейчас 🎰
        </Button>
      </div>
    </div>
  );
};

export default Index;

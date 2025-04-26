
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface SlotMachineProps {
  spinning: boolean;
  result: string[];
  onPull: () => void;
  win: number;
  showWinAnimation: boolean;
}

const SlotMachine = ({ spinning, result, onPull, win, showWinAnimation }: SlotMachineProps) => {
  const [leverPulled, setLeverPulled] = useState(false);
  const [slots, setSlots] = useState<string[]>(["❓", "❓", "❓"]);
  
  // Обработка рычага
  const handleLeverPull = () => {
    if (spinning) return;
    
    setLeverPulled(true);
    onPull();
    
    setTimeout(() => {
      setLeverPulled(false);
    }, 500);
  };
  
  // Обновление слотов после окончания вращения
  useEffect(() => {
    if (!spinning && result.length === 3) {
      setSlots(result);
    }
  }, [spinning, result]);
  
  // Рандомное обновление символов во время вращения
  useEffect(() => {
    if (spinning) {
      const symbols = ["🍒", "🍑", "🍋", "7️⃣", "💎", "🍇", "🔔"];
      const interval = setInterval(() => {
        setSlots(slots.map(() => symbols[Math.floor(Math.random() * symbols.length)]));
      }, 100);
      
      return () => clearInterval(interval);
    }
  }, [spinning]);
  
  return (
    <div className="relative">
      {/* Корпус автомата */}
      <div className="relative w-full h-[420px] bg-gradient-to-b from-[#6E59A5] to-[#1A1F2C] rounded-lg p-4 border-8 border-[#8B5CF6] shadow-[0_0_30px_rgba(139,92,246,0.5)]">
        
        {/* Верхняя часть с огнями */}
        <div className="absolute top-[-20px] left-0 right-0 mx-auto w-[80%] h-[40px] bg-[#333] rounded-t-full flex justify-around items-center px-8 overflow-hidden">
          {[1, 2, 3, 4, 5].map((i) => (
            <div 
              key={i} 
              className={cn(
                "w-3 h-3 rounded-full",
                spinning ? "animate-pulse" : "",
                i % 2 === 0 ? "bg-[#F97316]" : "bg-[#D946EF]"
              )}
            />
          ))}
        </div>
        
        {/* Слоты */}
        <div className="mt-8 bg-black w-full h-[180px] rounded-lg flex justify-center items-center p-3 overflow-hidden">
          <div className="flex gap-2 w-full h-full">
            {slots.map((symbol, index) => (
              <div 
                key={index} 
                className={cn(
                  "flex-1 bg-white rounded-md flex items-center justify-center text-6xl",
                  spinning ? "animate-[spin_0.2s_ease-in-out_infinite]" : "",
                  showWinAnimation && result[0] === result[1] && result[1] === result[2] 
                    ? "animate-pulse bg-[#FEF7CD]" : ""
                )}
              >
                {symbol}
              </div>
            ))}
          </div>
        </div>
        
        {/* Результат */}
        <div className={cn(
          "mt-4 text-center text-2xl font-bold h-12 transition-opacity duration-500",
          showWinAnimation ? "opacity-100" : "opacity-0"
        )}>
          {win > 0 && (
            <div className="text-[#FEF7CD] animate-bounce">Выигрыш: ${win}!</div>
          )}
        </div>
        
        {/* Нижняя панель с кнопками */}
        <div className="absolute bottom-6 left-0 right-0 mx-auto flex items-center justify-center">
          <div className="bg-[#333] w-[70%] h-16 rounded-lg flex items-center justify-center gap-12">
            <div className="w-12 h-12 rounded-full bg-[#F97316] shadow-[0_0_10px_rgba(249,115,22,0.5)] flex items-center justify-center text-2xl">
              $
            </div>
            <div className="w-12 h-12 rounded-full bg-[#0EA5E9] shadow-[0_0_10px_rgba(14,165,233,0.5)] flex items-center justify-center text-2xl">
              ⚙️
            </div>
          </div>
        </div>
      </div>
      
      {/* Рычаг */}
      <div 
        className="absolute right-[-60px] top-[60px] h-[280px] cursor-pointer group"
        onClick={handleLeverPull}
      >
        <div className={cn(
          "w-8 h-8 rounded-full bg-[#D946EF] shadow-[0_0_10px_rgba(217,70,239,0.5)] transition-all duration-300",
          leverPulled ? "translate-y-[160px]" : "group-hover:translate-y-3"
        )} />
        <div className={cn(
          "w-6 h-[200px] bg-gradient-to-b from-[#D946EF] to-[#8B5CF6] rounded-full mx-auto transition-all duration-300",
          leverPulled ? "h-[100px] translate-y-[60px]" : "group-hover:h-[180px] group-hover:translate-y-3"
        )} />
        <div className="w-16 h-16 rounded-full bg-[#F97316] shadow-[0_0_15px_rgba(249,115,22,0.7)] flex items-center justify-center text-2xl mx-auto mt-2 border-4 border-[#D946EF]">
          {spinning ? "⏳" : "🎮"}
        </div>
      </div>
    </div>
  );
};

export default SlotMachine;

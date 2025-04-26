
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SlotMachine from "@/components/SlotMachine";
import PayoutTable from "@/components/PayoutTable";

const Casino = () => {
  const [balance, setBalance] = useState(1000);
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState<string[]>([]);
  const [win, setWin] = useState(0);
  const [showWinAnimation, setShowWinAnimation] = useState(false);
  const navigate = useNavigate();

  const handleSpin = () => {
    if (balance < 100) return;
    
    setBalance(prev => prev - 100);
    setSpinning(true);
    setWin(0);
    
    // Имитация вращения слотов
    setTimeout(() => {
      const spinResult = spinSlots();
      setResult(spinResult);
      
      // Расчет выигрыша
      const winAmount = calculateWin(spinResult);
      
      if (winAmount > 0) {
        setShowWinAnimation(true);
        setWin(winAmount);
        setBalance(prev => prev + winAmount);
        
        setTimeout(() => {
          setShowWinAnimation(false);
        }, 3000);
      }
      
      setSpinning(false);
    }, 2000);
  };

  // Расчет выигрыша
  const calculateWin = (slots: string[]) => {
    if (slots[0] === slots[1] && slots[1] === slots[2]) {
      switch (slots[0]) {
        case "🍒": return 1000; // x1
        case "🍑": return 5000; // x5
        case "🍋": return 15000; // x15
        case "7️⃣": return 100000; // x100
        default: return 0;
      }
    }
    return 0;
  };

  // Генерация результатов с разными вероятностями
  const spinSlots = () => {
    const symbols = ["🍒", "🍑", "🍋", "7️⃣", "💎", "🍇", "🔔"];
    const weights = [15, 10, 5, 1, 10, 10, 10]; // Вероятности выпадения
    
    const result = [];
    
    for (let i = 0; i < 3; i++) {
      const randomNum = Math.random() * weights.reduce((a, b) => a + b, 0);
      let weightSum = 0;
      
      for (let j = 0; j < symbols.length; j++) {
        weightSum += weights[j];
        if (randomNum <= weightSum) {
          result.push(symbols[j]);
          break;
        }
      }
    }
    
    return result;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1F2C] to-[#0D1117] text-white p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-[#D6BCFA]">Люкс Казино</h1>
          <div className="text-2xl font-bold bg-[#9b87f5] px-6 py-2 rounded-lg shadow-lg">
            Баланс: ${balance}
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Слот-машина */}
          <div className="bg-[#222939] rounded-xl shadow-2xl p-6 overflow-hidden">
            <SlotMachine 
              spinning={spinning} 
              result={result} 
              onPull={handleSpin}
              win={win}
              showWinAnimation={showWinAnimation}
            />
            
            <div className="mt-6 text-center">
              <Button
                onClick={handleSpin}
                disabled={spinning || balance < 100}
                className="bg-[#F97316] hover:bg-[#F59E0B] text-white font-bold py-3 px-8 text-xl rounded-full shadow-lg transform hover:scale-105 transition-all disabled:opacity-50"
              >
                {spinning ? "Крутится..." : "Крутить за $100"}
              </Button>
            </div>
          </div>
          
          {/* Таблица выплат */}
          <div className="bg-[#222939] rounded-xl shadow-2xl overflow-hidden">
            <PayoutTable />
          </div>
        </div>
        
        <div className="text-center mt-8">
          <Button
            onClick={() => navigate("/")}
            variant="outline"
            className="text-[#9b87f5] border-[#9b87f5] hover:bg-[#9b87f5] hover:text-white"
          >
            Вернуться на главную
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Casino;


import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SlotMachine from "@/components/SlotMachine";
import PayoutTable from "@/components/PayoutTable";

const Casino = () => {
  const [balance, setBalance] = useState(1000);
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState<string[]>(["❓", "❓", "❓"]);
  const [win, setWin] = useState(0);
  const [showWinAnimation, setShowWinAnimation] = useState(false);
  const [spinCount, setSpinCount] = useState(0);
  const [lastWin, setLastWin] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const navigate = useNavigate();

  // Инициализация фонового звука
  useEffect(() => {
    audioRef.current = new Audio("https://assets.mixkit.co/sfx/preview/mixkit-casino-ambience-1109.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;
    audioRef.current.play().catch(e => console.log("Autoplay prevented:", e));
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const handleSpin = () => {
    if (balance < 100 || spinning) return;
    
    // Звук нажатия кнопки
    const buttonSound = new Audio("https://assets.mixkit.co/sfx/preview/mixkit-arcade-game-jump-coin-216.mp3");
    buttonSound.volume = 0.5;
    buttonSound.play();
    
    setBalance(prev => prev - 100);
    setSpinning(true);
    setWin(0);
    setSpinCount(prev => prev + 1);
    
    // Имитация вращения слотов с реалистичной задержкой
    const spinTime = 2000 + Math.random() * 1000;
    
    setTimeout(() => {
      const spinResult = spinSlots();
      setResult(spinResult);
      
      // Расчет выигрыша
      const winAmount = calculateWin(spinResult);
      
      if (winAmount > 0) {
        setShowWinAnimation(true);
        setWin(winAmount);
        setLastWin(winAmount);
        setBalance(prev => prev + winAmount);
        
        setTimeout(() => {
          setShowWinAnimation(false);
        }, 4000);
      }
      
      setSpinning(false);
    }, spinTime);
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
    // Настраиваем вероятности
    // Более редкие символы имеют меньшую вероятность выпадения
    const symbols = ["🍒", "🍑", "🍋", "7️⃣", "💎", "🍇", "🔔"];
    const weights = [15, 10, 5, 1, 10, 10, 10]; // Вероятности выпадения
    
    // Для более сбалансированной игровой механики
    // Увеличиваем шансы на интересный результат каждые 5 прокруток
    const luckyMod = spinCount % 10 === 0 ? 2 : 1;
    const adjustedWeights = [...weights];
    
    // Если баланс стал критически низким, повышаем шансы на выигрыш
    if (balance < 300) {
      adjustedWeights[0] *= 1.5; // Вишни
      adjustedWeights[1] *= 1.3; // Сливы
    }
    
    // Если игрок проиграл много подряд, немного увеличиваем шансы
    if (spinCount > 5 && lastWin === 0) {
      adjustedWeights[0] *= 1.2;
    }
    
    // Добавляем элемент случайности для семерок
    adjustedWeights[3] *= luckyMod;
    
    const result = [];
    
    for (let i = 0; i < 3; i++) {
      const randomNum = Math.random() * adjustedWeights.reduce((a, b) => a + b, 0);
      let weightSum = 0;
      
      for (let j = 0; j < symbols.length; j++) {
        weightSum += adjustedWeights[j];
        if (randomNum <= weightSum) {
          result.push(symbols[j]);
          break;
        }
      }
    }
    
    return result;
  };

  // Звуковые эффекты для кнопок
  const playButtonHoverSound = () => {
    const hoverSound = new Audio("https://assets.mixkit.co/sfx/preview/mixkit-gaming-lock-sound-2844.mp3");
    hoverSound.volume = 0.2;
    hoverSound.play();
  };

  return (
    <div 
      className="min-h-screen text-white relative overflow-hidden"
      style={{
        background: "radial-gradient(circle at center, #261c3a 0%, #1A1F2C 40%, #0D1117 100%)"
      }}
    >
      {/* Фоновые декоративные элементы */}
      <div 
        className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%239b87f5' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      ></div>
      
      {/* Светящиеся декоративные шары */}
      {[...Array(5)].map((_, i) => (
        <div 
          key={i}
          className="absolute rounded-full"
          style={{
            width: 100 + Math.random() * 200 + "px",
            height: 100 + Math.random() * 200 + "px",
            background: `radial-gradient(circle, ${
              ["rgba(139, 92, 246, 0.1)", "rgba(249, 115, 22, 0.1)", "rgba(217, 70, 239, 0.1)"][i % 3]
            } 0%, transparent 70%)`,
            top: Math.random() * 100 + "vh",
            left: Math.random() * 100 + "vw",
            transform: "translate(-50%, -50%)",
            animation: `float ${10 + Math.random() * 10}s infinite ease-in-out`
          }}
        ></div>
      ))}
      
      <div className="max-w-7xl mx-auto px-4 py-8 relative z-10">
        {/* Верхняя панель с лого и балансом */}
        <div 
          className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4"
          style={{
            background: "linear-gradient(90deg, rgba(0,0,0,0.3) 0%, rgba(139, 92, 246, 0.2) 50%, rgba(0,0,0,0.3) 100%)",
            borderRadius: "16px",
            padding: "16px 24px",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3), inset 0 0 15px rgba(139, 92, 246, 0.1)",
            border: "1px solid rgba(139, 92, 246, 0.2)"
          }}
        >
          {/* Логотип казино */}
          <div className="flex items-center gap-4">
            <div 
              className="w-12 h-12 rounded-full relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #9b87f5 0%, #6E42C1 100%)",
                boxShadow: "0 0 20px rgba(139, 92, 246, 0.7)"
              }}
            >
              <div 
                className="absolute inset-2 rounded-full"
                style={{
                  background: "linear-gradient(135deg, #F97316 0%, #C2410C 100%)"
                }}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center text-xl">♠️</div>
            </div>
            
            <h1 
              className="text-4xl font-bold"
              style={{
                background: "linear-gradient(to right, #D6BCFA, #FEF7CD, #D6BCFA)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 0 20px rgba(214, 188, 250, 0.3)",
                fontFamily: "'Arial Black', sans-serif"
              }}
            >
              ULTRA CASINO
            </h1>
          </div>
          
          {/* Баланс */}
          <div 
            className="flex items-center gap-3 px-8 py-3 rounded-xl relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(139, 92, 246, 0.3) 0%, rgba(155, 135, 245, 0.1) 100%)",
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.4), inset 0 0 15px rgba(139, 92, 246, 0.1)",
              border: "1px solid rgba(139, 92, 246, 0.3)"
            }}
          >
            <span 
              className="text-2xl"
              style={{
                color: "#F97316", 
                textShadow: "0 0 10px rgba(249, 115, 22, 0.7)"
              }}
            >
              💰
            </span>
            <span 
              className="text-2xl font-bold"
              style={{
                color: "#FEF7CD", 
                textShadow: "0 0 10px rgba(254, 247, 205, 0.5)"
              }}
            >
              ${balance.toLocaleString()}
            </span>
            
            {/* Декоративный блик */}
            <div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10"
              style={{
                transform: "skewX(-45deg) translateX(-150%)",
                animation: "shine 3s infinite"
              }}
            ></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Левая часть - Слот-машина */}
          <div 
            className="rounded-2xl p-8 overflow-hidden relative"
            style={{
              background: "linear-gradient(135deg, rgba(38, 28, 58, 0.8) 0%, rgba(26, 31, 44, 0.8) 100%)",
              boxShadow: "0 20px 50px rgba(0, 0, 0, 0.5), inset 0 0 30px rgba(139, 92, 246, 0.1)",
              border: "1px solid rgba(139, 92, 246, 0.2)"
            }}
          >
            {/* Декоративные элементы */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#9b87f5] to-transparent opacity-30"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#9b87f5] to-transparent opacity-20"></div>
            
            <SlotMachine 
              spinning={spinning} 
              result={result} 
              onPull={handleSpin}
              win={win}
              showWinAnimation={showWinAnimation}
            />
            
            <div 
              className="mt-10 text-center"
              style={{
                background: "linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.5) 100%)",
                borderRadius: "16px",
                padding: "20px",
                boxShadow: "inset 0 0 15px rgba(0, 0, 0, 0.5)"
              }}
            >
              <Button
                onClick={handleSpin}
                onMouseEnter={playButtonHoverSound}
                disabled={spinning || balance < 100}
                className={cn(
                  "relative overflow-hidden",
                  "transform hover:scale-105 transition-all duration-300",
                  "disabled:opacity-50 disabled:cursor-not-allowed"
                )}
                style={{
                  background: "linear-gradient(135deg, #F97316 0%, #C2410C 100%)",
                  color: "white",
                  border: "none",
                  padding: "16px 32px",
                  fontSize: "1.25rem",
                  fontWeight: "bold",
                  borderRadius: "999px",
                  boxShadow: "0 10px 20px rgba(249, 115, 22, 0.3), inset 0 0 10px rgba(0, 0, 0, 0.3)"
                }}
              >
                {spinning ? (
                  <span className="flex items-center gap-2">
                    <span className="animate-spin">⏳</span> Крутится...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <span>🎰</span> Крутить за $100
                  </span>
                )}
                
                {/* Декоративный блик на кнопке */}
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
                  style={{
                    transform: "skewX(-45deg) translateX(-150%)",
                    animation: spinning ? "none" : "shine 2s infinite"
                  }}
                ></div>
              </Button>
              
              {balance < 100 && (
                <p 
                  className="mt-4 text-sm animate-pulse"
                  style={{
                    color: "#FF6B6B",
                    textShadow: "0 0 10px rgba(255, 107, 107, 0.5)"
                  }}
                >
                  У вас недостаточно средств для игры
                </p>
              )}
            </div>
          </div>
          
          {/* Правая часть - Таблица выплат */}
          <div 
            className="rounded-2xl overflow-hidden relative"
            style={{
              boxShadow: "0 20px 50px rgba(0, 0, 0, 0.5), inset 0 0 30px rgba(139, 92, 246, 0.1)",
              border: "1px solid rgba(139, 92, 246, 0.2)",
              minHeight: "680px"
            }}
          >
            <PayoutTable />
          </div>
        </div>
        
        {/* Нижняя панель */}
        <div 
          className="text-center mt-8 py-4"
          style={{
            background: "linear-gradient(90deg, rgba(0,0,0,0.2) 0%, rgba(139, 92, 246, 0.1) 50%, rgba(0,0,0,0.2) 100%)",
            borderRadius: "12px",
            backdropFilter: "blur(10px)"
          }}
        >
          <Button
            onClick={() => navigate("/")}
            onMouseEnter={playButtonHoverSound}
            className="transform hover:scale-105 transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(155, 135, 245, 0.1) 100%)",
              border: "1px solid rgba(139, 92, 246, 0.3)",
              color: "#D6BCFA",
              padding: "12px 24px",
              borderRadius: "12px",
              boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3), inset 0 0 10px rgba(139, 92, 246, 0.1)"
            }}
          >
            Вернуться на главную
          </Button>
          
          <p 
            className="mt-4 text-xs opacity-50"
            style={{
              color: "#8E9196",
              maxWidth: "600px",
              margin: "0 auto"
            }}
          >
            © 2025 Ультра Казино. Это виртуальное казино предназначено только для развлечения.
            Играйте ответственно и помните, что реальные азартные игры могут вызывать зависимость.
          </p>
        </div>
      </div>
      
      {/* CSS анимации */}
      <style jsx="true">{`
        @keyframes shine {
          0% { transform: skewX(-45deg) translateX(-150%); }
          100% { transform: skewX(-45deg) translateX(150%); }
        }
        
        @keyframes float {
          0%, 100% { transform: translate(-50%, -50%) translateY(0); }
          50% { transform: translate(-50%, -50%) translateY(-30px); }
        }
      `}</style>
    </div>
  );
};

export default Casino;

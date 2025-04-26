
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface SlotMachineProps {
  spinning: boolean;
  result: string[];
  onPull: () => void;
  win: number;
  showWinAnimation: boolean;
}

// Создаем детализированные изображения вместо emoji
const slotSymbols = {
  cherry: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
  plum: "https://images.unsplash.com/photo-1591286867766-67d1c56bea53?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
  lemon: "https://images.unsplash.com/photo-1590502593747-42a996133562?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
  seven: "https://images.unsplash.com/photo-1635514569156-c7d7500e5eab?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
  diamond: "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
  grape: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
  bell: "https://images.unsplash.com/photo-1577128786751-0976da3e1f7a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
  question: "https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80"
};

// Функция для перевода emoji в изображения
const getSymbolImage = (symbol: string) => {
  switch (symbol) {
    case "🍒": return slotSymbols.cherry;
    case "🍑": return slotSymbols.plum;
    case "🍋": return slotSymbols.lemon;
    case "7️⃣": return slotSymbols.seven;
    case "💎": return slotSymbols.diamond;
    case "🍇": return slotSymbols.grape;
    case "🔔": return slotSymbols.bell;
    case "❓": return slotSymbols.question;
    default: return slotSymbols.question;
  }
};

const SlotMachine = ({ spinning, result, onPull, win, showWinAnimation }: SlotMachineProps) => {
  const [leverPulled, setLeverPulled] = useState(false);
  const [slots, setSlots] = useState<string[]>(["❓", "❓", "❓"]);
  const [reelPositions, setReelPositions] = useState([0, 0, 0]); // Позиции катушек для реалистичного вращения
  const reelsRef = useRef<HTMLDivElement[]>([]);
  
  // Обработка рычага
  const handleLeverPull = () => {
    if (spinning) return;
    
    setLeverPulled(true);
    onPull();
    
    // Звук рычага
    const leverSound = new Audio("https://assets.mixkit.co/sfx/preview/mixkit-metal-handle-sliding-2108.mp3");
    leverSound.volume = 0.5;
    leverSound.play();
    
    setTimeout(() => {
      setLeverPulled(false);
    }, 500);
  };
  
  // Обновление слотов после окончания вращения
  useEffect(() => {
    if (!spinning && result.length === 3) {
      setSlots(result);
      
      // Звук остановки катушек
      const stopSound = new Audio("https://assets.mixkit.co/sfx/preview/mixkit-slot-machine-wheel-1932.mp3");
      stopSound.volume = 0.7;
      stopSound.play();
      
      if (win > 0) {
        // Звук выигрыша
        setTimeout(() => {
          const winSound = new Audio("https://assets.mixkit.co/sfx/preview/mixkit-winning-chimes-2015.mp3");
          winSound.volume = 0.7;
          winSound.play();
        }, 500);
      }
    }
  }, [spinning, result, win]);
  
  // Реалистичная анимация вращения слотов
  useEffect(() => {
    if (spinning) {
      // Звук вращения
      const spinSound = new Audio("https://assets.mixkit.co/sfx/preview/mixkit-slot-machine-spin-1931.mp3");
      spinSound.volume = 0.3;
      spinSound.play();
      
      const symbols = ["🍒", "🍑", "🍋", "7️⃣", "💎", "🍇", "🔔"];
      
      // Эффект различной скорости вращения для каждой катушки
      const intervals = [
        setInterval(() => {
          setReelPositions(prev => {
            const newPos = [...prev];
            newPos[0] = (newPos[0] + 40) % 1000;
            return newPos;
          });
          setSlots(prev => {
            const newSlots = [...prev];
            newSlots[0] = symbols[Math.floor(Math.random() * symbols.length)];
            return newSlots;
          });
        }, 50),
        
        setInterval(() => {
          setReelPositions(prev => {
            const newPos = [...prev];
            newPos[1] = (newPos[1] + 40) % 1000;
            return newPos;
          });
          setSlots(prev => {
            const newSlots = [...prev];
            newSlots[1] = symbols[Math.floor(Math.random() * symbols.length)];
            return newSlots;
          });
        }, 60),
        
        setInterval(() => {
          setReelPositions(prev => {
            const newPos = [...prev];
            newPos[2] = (newPos[2] + 40) % 1000;
            return newPos;
          });
          setSlots(prev => {
            const newSlots = [...prev];
            newSlots[2] = symbols[Math.floor(Math.random() * symbols.length)];
            return newSlots;
          });
        }, 70)
      ];
      
      return () => intervals.forEach(interval => clearInterval(interval));
    } else {
      // Сбросить позиции катушек при остановке
      setReelPositions([0, 0, 0]);
    }
  }, [spinning]);
  
  return (
    <div className="relative">
      {/* Корпус автомата - более реалистичный */}
      <div 
        className="relative w-full h-[520px] rounded-xl p-6 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #3c2a5d 0%, #261c3a 50%, #1a1625 100%)",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.8), inset 0 2px 10px rgba(255, 255, 255, 0.2), inset 0 -2px 10px rgba(0, 0, 0, 0.8)",
          border: "12px solid",
          borderImage: "linear-gradient(135deg, #8B5CF6 0%, #6E42C1 50%, #522DA8 100%) 1"
        }}
      >
        {/* Металлическое обрамление верхней части */}
        <div 
          className="absolute top-[-20px] left-0 right-0 mx-auto w-[90%] h-[40px] flex justify-around items-center px-8 overflow-hidden rounded-t-2xl"
          style={{
            background: "linear-gradient(to bottom, #666666 0%, #333333 100%)",
            boxShadow: "inset 0 -2px 5px rgba(0,0,0,0.7), 0 2px 8px rgba(0,0,0,0.5)"
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
            <div 
              key={i} 
              className={cn(
                "w-4 h-4 rounded-full transition-all duration-300",
                spinning ? "animate-pulse" : "",
                i % 2 === 0 
                  ? "bg-gradient-to-r from-orange-500 to-orange-600" 
                  : "bg-gradient-to-r from-purple-500 to-purple-600"
              )}
              style={{
                boxShadow: spinning 
                  ? `0 0 15px 2px ${i % 2 === 0 ? 'rgba(249, 115, 22, 0.7)' : 'rgba(168, 85, 247, 0.7)'}`
                  : `0 0 5px 1px ${i % 2 === 0 ? 'rgba(249, 115, 22, 0.3)' : 'rgba(168, 85, 247, 0.3)'}`
              }}
            />
          ))}
        </div>
        
        {/* Название слот-машины */}
        <div className="mt-4 text-center">
          <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-amber-500 to-yellow-300 tracking-wider">FORTUNE SPINNER</h3>
        </div>
        
        {/* Корпус слотов с металлическими деталями */}
        <div 
          className="mt-6 w-full h-[220px] rounded-lg flex justify-center items-center p-4 overflow-hidden relative"
          style={{
            background: "linear-gradient(to bottom, #222 0%, #111 100%)",
            boxShadow: "inset 0 0 20px rgba(0,0,0,0.9), 0 0 10px rgba(0,0,0,0.5)"
          }}
        >
          {/* Металлические заклепки по углам */}
          {[
            "top-2 left-2", "top-2 right-2", 
            "bottom-2 left-2", "bottom-2 right-2"
          ].map((position, idx) => (
            <div 
              key={idx} 
              className={`absolute ${position} w-4 h-4 rounded-full`}
              style={{
                background: "linear-gradient(135deg, #aaa 0%, #666 100%)",
                boxShadow: "inset -1px -1px 2px rgba(0,0,0,0.5)"
              }}
            />
          ))}
          
          {/* Реалистичные катушки слотов */}
          <div className="flex gap-3 w-full h-full relative">
            {slots.map((symbol, index) => (
              <div 
                key={index}
                ref={el => { if (el) reelsRef.current[index] = el; }}
                className="flex-1 bg-gradient-to-b from-gray-100 to-gray-300 rounded-md overflow-hidden relative"
                style={{
                  boxShadow: "inset 0 0 10px rgba(0,0,0,0.5)",
                  perspective: "1000px"
                }}
              >
                {/* Катушка с символами */}
                <div 
                  className={cn(
                    "w-full h-full flex items-center justify-center transition-all relative",
                    spinning 
                      ? "transform-gpu" 
                      : showWinAnimation && result[0] === result[1] && result[1] === result[2] 
                        ? "animate-pulse bg-gradient-to-b from-yellow-200 to-yellow-100" 
                        : "bg-gradient-to-b from-gray-100 to-gray-300"
                  )}
                  style={{
                    transform: spinning ? `translateY(${reelPositions[index]}px)` : "translateY(0px)",
                    transition: spinning ? "none" : "transform 0.5s ease-out"
                  }}
                >
                  <div 
                    className="w-full h-full p-2"
                    style={{
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundImage: `url(${getSymbolImage(symbol)})`,
                      boxShadow: showWinAnimation && result[0] === result[1] && result[1] === result[2]
                        ? "0 0 20px 5px rgba(255, 215, 0, 0.7)" 
                        : "none"
                    }}
                  />
                </div>
                
                {/* Горизонтальные линии катушки */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-80"></div>
                
                {/* Блик на катушке */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white to-transparent opacity-20"
                  style={{pointerEvents: "none"}}
                ></div>
              </div>
            ))}
            
            {/* Линия выигрыша */}
            <div className="absolute left-0 right-0 top-1/2 h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent transform -translate-y-1/2 opacity-70"></div>
          </div>
        </div>
        
        {/* Металлическая панель результатов */}
        <div 
          className={cn(
            "mt-6 text-center h-16 flex items-center justify-center rounded-lg transition-all duration-500 overflow-hidden",
            showWinAnimation ? "opacity-100" : "opacity-80"
          )}
          style={{
            background: "linear-gradient(135deg, #2c2c2c 0%, #1a1a1a 100%)",
            boxShadow: "inset 0 0 10px rgba(0,0,0,0.8), 0 0 5px rgba(0,0,0,0.5)"
          }}
        >
          {win > 0 ? (
            <div 
              className="text-3xl font-bold animate-bounce"
              style={{
                color: "#FFC107",
                textShadow: "0 0 10px rgba(255, 193, 7, 0.7), 0 0 20px rgba(255, 193, 7, 0.5)",
                fontFamily: "'Arial Black', sans-serif"
              }}
            >
              ВЫИГРЫШ: ${win.toLocaleString()}!
            </div>
          ) : (
            <div className="text-lg text-gray-400 font-medium">
              ВСТАВЬТЕ МОНЕТУ И ПОТЯНИТЕ РЫЧАГ
            </div>
          )}
        </div>
        
        {/* Нижняя панель с кнопками */}
        <div className="absolute bottom-8 left-0 right-0 mx-auto flex items-center justify-center">
          <div 
            className="w-[80%] h-20 rounded-lg flex items-center justify-center gap-12"
            style={{
              background: "linear-gradient(to bottom, #333 0%, #222 100%)",
              boxShadow: "inset 0 0 10px rgba(0,0,0,0.8), 0 2px 5px rgba(0,0,0,0.5)"
            }}
          >
            {/* Кнопка вставки монеты */}
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center text-2xl relative cursor-pointer transform hover:scale-105 transition-all"
              style={{
                background: "linear-gradient(135deg, #F97316 0%, #C2410C 100%)",
                boxShadow: "0 0 15px rgba(249,115,22,0.7), inset 0 0 10px rgba(0,0,0,0.3)"
              }}
            >
              <span style={{color: "#fff", textShadow: "0 1px 2px rgba(0,0,0,0.5)"}}>$</span>
              <div 
                className="absolute inset-0 rounded-full"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 50%)",
                  pointerEvents: "none"
                }}
              ></div>
            </div>
            
            {/* Кнопка настроек */}
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center text-2xl relative cursor-pointer transform hover:scale-105 transition-all"
              style={{
                background: "linear-gradient(135deg, #0EA5E9 0%, #0369A1 100%)",
                boxShadow: "0 0 15px rgba(14,165,233,0.7), inset 0 0 10px rgba(0,0,0,0.3)"
              }}
            >
              <span style={{color: "#fff", textShadow: "0 1px 2px rgba(0,0,0,0.5)"}}>⚙️</span>
              <div 
                className="absolute inset-0 rounded-full"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 50%)",
                  pointerEvents: "none"
                }}
              ></div>
            </div>
            
            {/* Монетоприемник */}
            <div 
              className="w-24 h-12 rounded-md relative cursor-pointer"
              style={{
                background: "linear-gradient(to bottom, #222 0%, #111 100%)",
                boxShadow: "inset 0 0 5px rgba(0,0,0,0.8), 0 1px 3px rgba(0,0,0,0.5)"
              }}
            >
              <div 
                className="absolute inset-[2px] rounded-sm"
                style={{
                  background: "linear-gradient(to bottom, #444 0%, #333 100%)",
                  borderTop: "1px solid rgba(255,255,255,0.1)"
                }}
              ></div>
              <div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-[3px]"
                style={{
                  background: "linear-gradient(to bottom, #222 0%, #111 100%)",
                  boxShadow: "0 1px 2px rgba(0,0,0,0.8)"
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Рычаг с металлическими деталями */}
      <div 
        className="absolute right-[-80px] top-[100px] h-[280px] cursor-pointer group"
        onClick={handleLeverPull}
      >
        {/* Верхняя точка крепления рычага */}
        <div 
          className="w-12 h-12 rounded-full mx-auto"
          style={{
            background: "radial-gradient(circle at 30% 30%, #444, #222)",
            boxShadow: "inset 0 0 5px rgba(0,0,0,0.8), 0 0 10px rgba(0,0,0,0.5)"
          }}
        >
          {/* Центральный болт */}
          <div 
            className="w-6 h-6 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style={{
              background: "linear-gradient(135deg, #888 0%, #555 100%)",
              boxShadow: "inset -1px -1px 2px rgba(0,0,0,0.5)"
            }}
          ></div>
        </div>
      
        {/* Шарик рычага */}
        <div 
          className={cn(
            "w-10 h-10 rounded-full mx-auto transition-all duration-300",
            leverPulled ? "translate-y-[160px]" : "group-hover:translate-y-3"
          )}
          style={{
            background: "linear-gradient(135deg, #D946EF 0%, #A21CAF 100%)",
            boxShadow: "0 0 20px rgba(217,70,239,0.7), inset 0 0 10px rgba(0,0,0,0.3)"
          }}
        />
        
        {/* Металлический стержень рычага */}
        <div 
          className={cn(
            "w-6 h-[200px] mx-auto transition-all duration-300",
            leverPulled ? "h-[100px] translate-y-[60px]" : "group-hover:h-[180px] group-hover:translate-y-3"
          )}
          style={{
            background: "linear-gradient(to right, #888 0%, #ccc 49%, #888 50%, #ccc 100%)",
            boxShadow: "0 0 15px rgba(0,0,0,0.3), inset 0 0 5px rgba(0,0,0,0.2)",
            borderRadius: "3px"
          }}
        />
        
        {/* Ручка рычага */}
        <div 
          className="w-24 h-24 rounded-full flex items-center justify-center text-2xl mx-auto mt-2 relative"
          style={{
            background: "linear-gradient(135deg, #F97316 0%, #C2410C 100%)",
            boxShadow: "0 0 25px rgba(249,115,22,0.8), inset 0 0 15px rgba(0,0,0,0.4), 0 5px 10px rgba(0,0,0,0.6)",
            border: "4px solid",
            borderImage: "linear-gradient(135deg, #D946EF 0%, #A21CAF 100%) 1"
          }}
        >
          {/* Иконка на ручке */}
          <span 
            className="relative z-10"
            style={{
              color: "#fff", 
              textShadow: "0 2px 5px rgba(0,0,0,0.7)",
              fontSize: "32px"
            }}
          >
            {spinning ? "⏳" : "🎮"}
          </span>
          
          {/* Блик на ручке */}
          <div 
            className="absolute top-0 left-0 right-0 h-1/2 rounded-t-full"
            style={{
              background: "linear-gradient(to bottom, rgba(255,255,255,0.3), rgba(255,255,255,0))",
              pointerEvents: "none"
            }}
          ></div>
        </div>
      </div>
      
      {/* Боковые декоративные элементы автомата */}
      {["-left-3", "-right-3"].map((position, idx) => (
        <div 
          key={idx}
          className={`absolute ${position} top-1/4 bottom-1/4 w-6`}
          style={{
            background: "linear-gradient(to bottom, #8B5CF6 0%, #522DA8 100%)",
            borderRadius: idx === 0 ? "6px 0 0 6px" : "0 6px 6px 0",
            boxShadow: idx === 0 
              ? "-5px 0 10px rgba(0,0,0,0.5)" 
              : "5px 0 10px rgba(0,0,0,0.5)"
          }}
        >
          {/* Декоративные заклепки */}
          {[1, 2, 3].map((n) => (
            <div 
              key={n}
              className={`absolute ${position === "-left-3" ? "right-1" : "left-1"} w-3 h-3 rounded-full`}
              style={{
                top: `${n * 25}%`,
                background: "linear-gradient(135deg, #aaa 0%, #666 100%)",
                boxShadow: "inset -1px -1px 2px rgba(0,0,0,0.5)"
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default SlotMachine;

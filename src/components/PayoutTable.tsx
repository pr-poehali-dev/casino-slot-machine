
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const PayoutTable = () => {
  const [glowIndex, setGlowIndex] = useState(-1);
  
  // Анимация случайного свечения элементов в таблице
  useEffect(() => {
    const interval = setInterval(() => {
      setGlowIndex(Math.floor(Math.random() * 4));
      
      setTimeout(() => {
        setGlowIndex(-1);
      }, 1500);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  const payouts = [
    { 
      symbols: ["seven", "seven", "seven"], 
      name: "Тройка Семерок", 
      multiplier: "x100", 
      amount: 100000, 
      color: "#FEF7CD", 
      images: [
        "https://images.unsplash.com/photo-1635514569156-c7d7500e5eab?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
        "https://images.unsplash.com/photo-1635514569156-c7d7500e5eab?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
        "https://images.unsplash.com/photo-1635514569156-c7d7500e5eab?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80"
      ]
    },
    { 
      symbols: ["lemon", "lemon", "lemon"], 
      name: "Тройка Лимонов", 
      multiplier: "x15", 
      amount: 15000, 
      color: "#FEC6A1",
      images: [
        "https://images.unsplash.com/photo-1590502593747-42a996133562?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
        "https://images.unsplash.com/photo-1590502593747-42a996133562?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
        "https://images.unsplash.com/photo-1590502593747-42a996133562?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80"
      ]
    },
    { 
      symbols: ["plum", "plum", "plum"], 
      name: "Тройка Слив", 
      multiplier: "x5", 
      amount: 5000, 
      color: "#E5DEFF",
      images: [
        "https://images.unsplash.com/photo-1591286867766-67d1c56bea53?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
        "https://images.unsplash.com/photo-1591286867766-67d1c56bea53?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
        "https://images.unsplash.com/photo-1591286867766-67d1c56bea53?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80"
      ]
    },
    { 
      symbols: ["cherry", "cherry", "cherry"], 
      name: "Тройка Вишен", 
      multiplier: "x1", 
      amount: 1000, 
      color: "#FFDEE2",
      images: [
        "https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
        "https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
        "https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80"
      ]
    },
  ];

  return (
    <div className="h-full">
      {/* Стилизованный заголовок таблицы */}
      <div 
        className="p-6 border-b-2 border-[#9b87f5] relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #261c3a 0%, #1a1625 100%)",
          boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)"
        }}
      >
        {/* Декоративные элементы */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#9b87f5] to-transparent opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#9b87f5] to-transparent opacity-30"></div>
        
        <h2 
          className="text-3xl font-bold text-center tracking-wider relative z-10"
          style={{
            color: "#D6BCFA",
            textShadow: "0 0 15px rgba(214, 188, 250, 0.5), 0 0 30px rgba(214, 188, 250, 0.3)"
          }}
        >
          ТАБЛИЦА ВЫПЛАТ
        </h2>
        
        {/* Декоративные элементы */}
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
          <div 
            className="w-6 h-6 rounded-full"
            style={{
              background: "radial-gradient(circle at 30% 30%, #8B5CF6, #6E42C1)",
              boxShadow: "0 0 10px rgba(139, 92, 246, 0.7)"
            }}
          ></div>
        </div>
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
          <div 
            className="w-6 h-6 rounded-full"
            style={{
              background: "radial-gradient(circle at 30% 30%, #8B5CF6, #6E42C1)",
              boxShadow: "0 0 10px rgba(139, 92, 246, 0.7)"
            }}
          ></div>
        </div>
      </div>
      
      <div 
        className="p-6"
        style={{
          background: "linear-gradient(135deg, rgba(26, 31, 44, 0.9) 0%, rgba(13, 17, 23, 0.9) 100%)",
          backdropFilter: "blur(5px)",
          height: "calc(100% - 80px)",
          overflowY: "auto"
        }}
      >
        {/* Информация о стоимости */}
        <div 
          className="mb-8 p-4 rounded-lg text-center relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.6) 100%)",
            boxShadow: "inset 0 0 15px rgba(0, 0, 0, 0.5), 0 5px 15px rgba(0, 0, 0, 0.3)",
            border: "1px solid rgba(255, 255, 255, 0.1)"
          }}
        >
          {/* Декоративные элементы */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"></div>
          
          <p 
            className="text-lg mb-2"
            style={{
              color: "#8E9196",
              textShadow: "0 1px 3px rgba(0, 0, 0, 0.8)"
            }}
          >
            Стоимость одного вращения: 
            <span 
              className="ml-2 font-bold"
              style={{
                color: "white",
                textShadow: "0 0 10px rgba(255, 255, 255, 0.5)"
              }}
            >
              $100
            </span>
          </p>
          <p 
            className="text-lg"
            style={{
              color: "#8E9196",
              textShadow: "0 1px 3px rgba(0, 0, 0, 0.8)"
            }}
          >
            Базовый выигрыш: 
            <span 
              className="ml-2 font-bold"
              style={{
                color: "white",
                textShadow: "0 0 10px rgba(255, 255, 255, 0.5)"
              }}
            >
              $1,000
            </span>
          </p>
          
          {/* Декоративные монеты */}
          <div className="absolute -bottom-2 right-4 transform rotate-12">
            <div 
              className="w-8 h-8 rounded-full"
              style={{
                background: "linear-gradient(135deg, #FFC107 0%, #FF8F00 100%)",
                boxShadow: "0 0 10px rgba(255, 193, 7, 0.5)"
              }}
            ></div>
          </div>
          <div className="absolute -top-2 left-4 transform -rotate-12">
            <div 
              className="w-6 h-6 rounded-full"
              style={{
                background: "linear-gradient(135deg, #E6E6E6 0%, #B3B3B3 100%)",
                boxShadow: "0 0 10px rgba(255, 255, 255, 0.3)"
              }}
            ></div>
          </div>
        </div>
        
        {/* Список выплат */}
        <div className="space-y-6">
          {payouts.map((payout, index) => (
            <div 
              key={index} 
              className={cn(
                "rounded-lg p-5 transition-all duration-500",
                glowIndex === index ? "scale-[1.03]" : "hover:scale-[1.02]"
              )}
              style={{ 
                background: `linear-gradient(135deg, ${payout.color}15 0%, ${payout.color}05 100%)`,
                boxShadow: glowIndex === index 
                  ? `0 0 30px ${payout.color}50, inset 0 0 20px ${payout.color}20` 
                  : `0 5px 20px rgba(0, 0, 0, 0.3), inset 0 0 10px rgba(0, 0, 0, 0.5)`,
                border: `1px solid ${payout.color}30`
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-5">
                  {/* Реалистичные изображения символов */}
                  <div className="flex space-x-1">
                    {payout.images.map((img, imgIndex) => (
                      <div 
                        key={imgIndex}
                        className="w-16 h-16 rounded-md overflow-hidden relative"
                        style={{
                          boxShadow: glowIndex === index 
                            ? `0 0 15px ${payout.color}70` 
                            : "0 5px 10px rgba(0, 0, 0, 0.4)"
                        }}
                      >
                        <img 
                          src={img} 
                          alt={payout.symbols[imgIndex]} 
                          className="w-full h-full object-cover"
                        />
                        
                        {/* Блеск на изображении */}
                        <div 
                          className={cn(
                            "absolute inset-0 bg-gradient-to-br from-white to-transparent opacity-30",
                            glowIndex === index ? "animate-pulse" : ""
                          )}
                        ></div>
                      </div>
                    ))}
                  </div>
                  
                  <div>
                    <h3 
                      className="font-bold text-xl mb-1"
                      style={{
                        color: "white",
                        textShadow: `0 0 10px ${payout.color}50`
                      }}
                    >
                      {payout.name}
                    </h3>
                    <p 
                      className="text-sm"
                      style={{
                        color: "#8E9196",
                        textShadow: "0 1px 3px rgba(0, 0, 0, 0.8)"
                      }}
                    >
                      Выигрыш <span style={{color: "#ccc"}}>${payout.amount.toLocaleString()}</span>
                    </p>
                  </div>
                </div>
                
                <div 
                  className="text-3xl font-bold px-5 py-3 rounded-lg"
                  style={{
                    color: payout.color,
                    textShadow: `0 0 15px ${payout.color}80`,
                    background: "rgba(0, 0, 0, 0.3)",
                    border: `1px solid ${payout.color}30`,
                    boxShadow: glowIndex === index 
                      ? `0 0 20px ${payout.color}40, inset 0 0 10px ${payout.color}20` 
                      : "inset 0 0 10px rgba(0, 0, 0, 0.5)"
                  }}
                >
                  {payout.multiplier}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Правила игры */}
        <div 
          className="mt-8 rounded-lg p-5 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(26, 31, 44, 0.8) 0%, rgba(13, 17, 23, 0.8) 100%)",
            boxShadow: "inset 0 0 20px rgba(0, 0, 0, 0.7), 0 5px 15px rgba(0, 0, 0, 0.3)",
            border: "1px solid rgba(139, 92, 246, 0.3)"
          }}
        >
          {/* Декоративные элементы */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D6BCFA] to-transparent opacity-20"></div>
          <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full" style={{background: "radial-gradient(circle, rgba(214, 188, 250, 0.05) 0%, transparent 70%)"}}></div>
          
          <h3 
            className="font-bold text-xl mb-4 relative"
            style={{
              color: "#D6BCFA",
              textShadow: "0 0 10px rgba(214, 188, 250, 0.5)"
            }}
          >
            Правила игры:
            <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#D6BCFA]" style={{boxShadow: "0 0 10px rgba(214, 188, 250, 0.7)"}}></div>
          </h3>
          
          <ul className="space-y-3">
            {[
              "Чтобы выиграть, нужно получить три одинаковых символа в ряд",
              "Чем выше выигрыш, тем сложнее его выбить",
              "Выигрыш автоматически добавляется к вашему балансу",
              "Потяните за рычаг или нажмите кнопку \"Крутить\" для начала игры"
            ].map((rule, index) => (
              <li 
                key={index}
                className="flex items-start gap-3"
              >
                <div 
                  className="mt-0.5 min-w-[18px] h-[18px] rounded-full flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, #9b87f5 0%, #6E42C1 100%)",
                    boxShadow: "0 0 5px rgba(155, 135, 245, 0.5)"
                  }}
                >
                  <div className="w-1 h-1 rounded-full bg-white"></div>
                </div>
                <span 
                  className="text-sm leading-relaxed"
                  style={{
                    color: "#B0B5BD",
                    textShadow: "0 1px 3px rgba(0, 0, 0, 0.8)"
                  }}
                >
                  {rule}
                </span>
              </li>
            ))}
          </ul>
          
          {/* Декоративный элемент */}
          <div 
            className="mt-6 text-center text-xs" 
            style={{
              color: "#666",
              fontStyle: "italic"
            }}
          >
            *Удачи в игре! Играйте ответственно.
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayoutTable;

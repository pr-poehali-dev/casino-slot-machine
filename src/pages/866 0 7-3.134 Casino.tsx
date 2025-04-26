
import { useState-7-7-7 3.134, useEffect, useRef } from "-7 7 3.134 7react";
import { useNavigate } from 7 7zm-43- "react-router-dom";
import {7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 Button } from "@/components/ui 1.343-3 3 1/button";
import SlotMachine from "@.343 3 3 3zm63/components/SlotMachine";
import 31c1.657 0 3-1.343 3-3s- PayoutTable from "@/components/PayoutTable";
import { cn }1.343-3-3-3-3 1.343-3 3  from "@/lib/utils";1.343 3 3 3z // Добавляем импM34 90c1.657 0орт cn из utils

const Casino 3-1.343 3-3 = () => {
  const [balances-1.343-3-3-, setBalance] = useState(1000);3-3 1.343-3 
  const [spinning, setSpinning3 1.343 3 3 ] = useState(false);
  const [3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3result, setResult] = useState<string-3-3 1.343-3[]>(["❓", "❓", 3 1.343 3 3 "❓"]);
  const [ 3zM12 86c2.win, setWin] = useState(0);21 0 4-1.79 4-4s-1
  const [showWin.79-4-4-4-4Animation, setShowWin 1.79-4 4 1Animation] = useState(false);
  const.79 4 4 4zm28 [spinCount, setSpin-65c2.21 Count] = useState(0);
  const0 4-1.79 4-4s-1.79-4-4 [lastWin, setLastW-4-4 1.79-4in] = useState(0);
  const 4 1.79 4 4 audioRef = useRef<HTMLAudioElement | 4zm23-11c2.76 null>(null);
  const navigate = use 0 5-2.24 5Navigate();

  //-5s-2.24-5- Инициализация ф5-5-5 2.24-онового звука
  useEffect(() =>5 5 2.24 5  {
    audioRef.current = new5 5zm-6 60c2.21 0 4-1.79 Audio("https://assets.mix 4-4s-1.79-kit.co/sfx/preview/mix4-4-4-4 1.kit-casino-ambience-110979-4 4 1.79 .mp3");
    audioRef.current4 4 4zm29 22c.loop = true;
    audioRef.2.76 0 5-2.current.volume = 0.324 5-5s-2.24;
    audioRef.current.play().-5-5-5-5 2.24-5 5 2.24catch(e => console.log(" 5 5 5zM32 63c2.Autoplay prevented:", e));
    76 0 5-2.24 
    return () => {
      if (audio5-5s-2.24-5Ref.current) {-5-5-5 2.24
        audioRef.current.pause();
        audioRef.current-5 5 2.24 5 = null;
      } 5 5zm57-13
    };
  }, []);

  c2.76 0 5-2const handleSpin = () => {
    if.24 5-5s-2.24-5-5-5-5  (balance < 100 2.24-5 5 2.|| spinning) return;
    
    //24 5 5 5zm-9 Звук нажатия кн-21c1.105 опки
    const buttonSound = new Audio0 2-.895 2-2("https://assets.s-.895-2-2-2-mixkit.co/sfx/preview/2 .895-2 2 .mixkit-arcade-game895 2 2 2z-jump-coin-216M60 91c1.105 0.mp3");
    buttonSound.volume 2-.895 2-2s-. = 0.5;
    buttonSoun895-2-2-2-2 d.play();
    .895-2 2 .895 
    setBalance(prev => prev - 1002 2 2z);
    setSpinning(true);M35 41c1.105 
    setWin(0);
    setSpinCount0 2-.895 2-2s(prev => prev + 1-.895-2-2-2-2);
    
     .895-2 2// Имитация в .895 2 2 2zращения слотов сM12 60c1.105 0 2-.895 2-2s-. реалистичной895-2-2-2-2  задержкой.895-2 2 .895 
    const spinTime = 22 2 2z' fill='%000 + Math.random() * 1000;
    
    setTimeout(() => {239b87f5' fill-opacity
      const spinResult = spin='0.1' fill-rule='Slots();
      setevenodd'/%3E%3CResult(spinResult);
      
      ///svg%3E")`,
         Расчет выигрыша
      const}}
      ></div>
       winAmount = calculateWin
      {/* Свет(spinResult);
      
      if (winAmount > ящиеся декоративные ш0) {
        ары */}
      {setShowWinAnimation(true);
        setWin(winAmount);[...Array(5)].map((_,
        setLastWin(winAmount); i) => (
        <div 
        setBalance(prev => prev
          key={i}
          className="absolute + winAmount); rounded-full"
          style={{
        
        setTimeout(() => {
          
            width: 100setShowWinAnimation(false);
        }, 4 + Math.random() * 000);
      }
      
      setSpinning(false200 + "px",);
    }, spin
            height: 100Time);
  }; + Math.random() * 200 

  // Расчет выигр+ "px",
            backgrounыша
  const calculateWind: `radial-gradient( = (slots: string[]) => {
    circle, ${
              ["if (slots[0] === slots[1] && slots[1]rgba(139, 92 === slots[2]), 246, 0.1 {
      switch (slots[0]) {
        case ")", "rgba(249, 115, 22, 0.1)", "rgba(217, 70, 239, 0.1🍒": return 1000; // x1)"][i % 3
        case "]
            } 0🍑": return 5000; // x5%, transparent 70%)`,
            top
        case ": Math.random() * 100🍋": return 15000; // x15 + "vh",
            left:
        case "7️ Math.random() *⃣": return 100 100 + "vw",
            000; // x100
        defaulttransform: "translate(-50%, -: return 0;
      }
    50%)",
            }
    return 0;
  };

  // Генanimation: `float ${10ерация результатов с + Math.random() * 10}s infinite ease-in-out` разными вероятностями
          }}
        ></div>
  const spinSlots
      ))}
      
       = () => {
    //<div className="max-w-7xl mx-auto px Настраиваем веро-4 py-8 ятности
    // Болееrelative z-10"> редкие символы им
        {/* Верхняя панельеют меньшую вероятность выпадения
    const symbols = ["🍒 с лого и балансом */}", "🍑", "🍋
        <div 
          className="flex", "7️⃣", flex-col md:flex-row justify "💎", "-between items-center mb🍇", "🔔"];
    const weights = [15-10 gap-4, 10, 5, 1"
          style={{, 10, 10
            background: "linear-gradient(90deg, rgba(0,, 10]; // Веро0,0,0.3ятности выпадения
    ) 0%, rgba(
    // Для более139, 92, 246 сбалансированной, 0.2 игровой механики) 50%, rgba(0,0,0,0
    // Увеличиваем.3) 100%)",
            borderRadius: "16px",
            padding шансы на инт: "16px ересный результат ка24px",
            boxShaждые 5 прdow: "0 10px 30px rgbaокруток
    const luc(0, 0, 0kyMod = spinCount %, 0.3), 10 === 0 ? inset 0 0 2 : 1;
    const 15px rgba(139 adjustedWeights = [..., 92, 246, 0.weights];
    
    //1)",
            border: "1px solid rgba(139,  Если баланс ст92, 246, 0.2)"ал критически низким, пов
          }}
        >
          {ышаем шансы на выиг/* Логотипрыш
    if (balance <  казино */}
          300) {
      adjust<div className="flex items-center gap-edWeights[04">
            <div] *= 1.5; // 
              className="w-12 h-12 rounded-full relative Вишни
      adjustedWe overflow-hidden"
              style={{
                ights[1] *= 1.3background: "linear-gradient(135; // Сливы
    }
    
    deg, #9b87f5 0// Если игрок проиграл много под%, #6E42Cряд, немного увеличиваем шансы1 100%)",
    if (spinCount
                boxShadow: "0 0 > 5 && last 20px rgba(139,Win === 0) { 92, 246, 0.7
      adjustedWeights[0] *= )"
              }}
            1.2;
    >
              <div 
                className="}
    
    // Добавляем элabsolute inset-2 rounded-full"
                style={{
                  емент случайности дляbackground: "linear-gradient(135deg семерок
    adjust, #F97316 0%, #edWeights[3C2410C 100%)"] *= luckyMod;
    
    const result = [];
    
    for (let i
                }}
              ></div> = 0; i
              <div className="absolute inset- < 3; i++) {
      const0 flex items-center justify- randomNum = Math.random()center text-xl"> * adjustedWeights.reduce♠️</div>((a, b) => a + b, 0
            </div>
            );
      let weight
            <h1 Sum = 0;
      
      for (
              className="text-4let j = 0xl font-bold"
              style={{; j < symbols.length; j++) {
        weightSum
                background: "linear-gradient += adjustedWeights[j];
        (to right, #Dif (randomNum <= weightSum) {6BCFA, #F
          result.push(symbols[j]);
          break;
        }
      }
    }
    
    return result;
  };

  //EF7CD, #D6BCFA)",
                WebkitBackgroundCl Звуковые эффекты дляip: "text",
                WebkitTextFillColor: "transparent",
                 кнопок
  const playtextShadow: "0 0 20ButtonHoverSound = () => {px rgba(214, 188, 250, 0.3
    const hoverSound = new Audio("https://assets.mixkit.co/)",
                fontFamily: "'sfx/preview/Arial Black', sans-serifmixkit-gaming-lock"
              }}
            >
              -sound-2ULTRA CASINO
            844.mp3");
    hoverSound.</h1>
          </div>
          volume = 0.
          {/*2;
    hoverSound.play(); Баланс */}
          <div
  };

   
            className="flexreturn (
    <div items-center gap-3 
      className="min-h-screen text px-8 py-3-white relative overflow-hidden" rounded-xl relative overflow-hidden"
            
      style={{
        backgrounstyle={{
              background: "linear-gradientd: "radial-gradient(circle(135deg, rgba(139 at center, #261, 92, 246, 0.3) 0%, rgbac3a 0%, #1(155, 135, 245, 0.A1F2C1) 100%)",
              box 40%, #0DShadow: "0 101117 100%)"
      }}
    >px 20px rgba(0
      {/* Ф, 0, 0, 0.4), inset 0оновые декоративные элемент 0 15pxы */}
       rgba(139, 92, 246,<div 
        className="absolute 0.1)",
              border: " top-0 left-0 w-full1px solid rgba(139, 92, h-full opacity- 246, 0.320 pointer-events-none")"
            }}
          >
            
        style={{
          backgroundImage: `<span 
              className="texturl("data:image/svg+-2xl"
              style={{xml,%3Csv
                color: "#F97316",g width='100' height='100' view 
                textShadow: "0Box='0 0 100 100' 0 10px rgba(249 xmlns='http://www.w3.org, 115, 22, 0./2000/svg'%3E%7)"
              }}3Cpath 
            >
              💰
            </spand='M11 18c>
            <span 
              className="3.866 0 7-3.134 7text-2xl font-7s-3.134-7--bold"
              style={{7-7-7 3.134-
                color: "#FEF7CD7 7 3.134 7 ", 
                textShadow: "7 7zm480 0 10px rgba(254, 25c3.866 0 7-3 247, 205, 0.5.134 7-)"
              }}7s-3.134-7-7
            >
              ${balance.toLocale-7-7 String()}
            </span>3.134-7 7 3.134 7
            
            {/* Декоративный 7 7zm блик */}
            -43-7c1.657 0 3-1.343 3-3s-1.343-3-<div 
              className="absolute3-3-3 1.343- inset-0 bg3 3 1.343 3 -gradient-to-3 3zm63 31c1.657 0 3-1.343 r from-transparent via-white to-transparent opacity-103-3s-1.343-3-3-3-3 1.343"
              style={{-3 3 1.343 3
                transform: "skewX(-45 3 3zM34 90cdeg) translateX(-1.657 0150%)",
                animation 3-1.343 3-3s-1.343-3-3-: "shine 3s infinite"
              3-3 1}}
            >.343-3 </div>
          3 1.343 3 3 </div>
        </div>
        3zm56-76c1.657 
        <div className="gri0 3-1d grid-cols-1.343 3-3s-1. lg:grid-cols-343-3-3-3-3 2 gap-8">1.343-3
          {/* Лев 3 1.343 3 3 3zM12 86c2.ая часть - Сл21 0 4-от-машина */}1.79 4
          <div -4s-1.79-4-
            className="rounded-2xl p4-4-4 1.79-4 4 1-8 overflow-hidden relative.79 4 4 4zm28"
            style={{
              background: "-65c2.linear-gradient(135deg, rgba(3821 0 4-1.79 4-4s-, 28, 581.79-4-4-4-4 1.79-4 4 , 0.8) 0%, rgba1.79 4(26, 31,  4 4zm44, 0.823-11c2.76) 100%)", 0 5-
              boxShadow: "0 2.24 5-5s-2.24-5-20px 50px rgba(0, 0, 05-5-5 2.24-, 0.55 5 2.24 5 ), inset 0 5 5zm-6 60c20 30px rgba(139, 92, 246, 0..21 0 4-1.79 4-4s-1.79-4-4-41)",
              border: "-4 1.1px solid rgba(139, 92,79-4 4 1.79 4 4 4 246, 0.2zm29 22c)"
            }}
          >
            {2.76 0 5-2.24 5-5/* Декоративныеs-2.24-5-5- элементы */}
            <div5-5 2.24-5 5 2.24 className="absolute top-0 5 5  left-0 w-full h-5zM32 63c2.76 0 51 bg-gradient-to-2.24 -r from-transparent via-[5-5s-2.24-5-5-5-#9b87f5] to5 2.24-5 5 -transparent opacity-302.24 5"></div>
             5 5zm<div className="absolute bottom-0 left-0 w-57-13c2.76 full h-1 0 5-2.24 5-bg-gradient-to-r from-transparent5s-2. via-[#924-5-5-5-5 b87f5] to-transparent opacity-2.24-520"></div>
             5 2.24 5 5 5zm-9
            <SlotMachine -21c1.105 0 2-.895
              spinning={spinning} 2-2s 
              result={result} -.895-2-2-2-2 .895-2 2 .895
              onPull={handleSpin} 2 2 2zM60 
              win={win}
              91c1.105 0 2-.showWinAnimation={showWinAnimation}895 2-2s-.895-2-2-2-
            />
            2 .895-2 2 .
            <div 895 2 2 2zM35
              className="mt-10 41c1.105 0 2 text-center"
              style={{-.895 2-2s-.895-
                background: "linear-gradient2-2-2-2 .895(135deg, rgba(0-2 2 .895 2 , 0, 02 2zM12 60c, 0.3) 0%, rgba1.105 0 2-.895 (0, 0, 0, 2-2s-.895-2-20.5) 100%)",-2-2 .895-2 2 .895 
                borderRadius: "16px2 2 2z' fill='%",
                padding: "20px",
                boxShadow: "inset 0 0239b87f5' fill-opacity=' 15px rgba(0, 0, 0.1' fill-rule='0, 0.5evenodd'/%3E%3C/svg%3E"))"
              }}
            >
              `,
        }}
      <Button
                onClick={handleSpin}></div>
      
                onMouseEnter={playButtonH
      {/* СветящoverSound}
                disableиеся декоративные шd={spinning || balance < 100}ары */}
      {
                className={cn(
                  "relative[...Array(5)].map((_, i) => (
         overflow-hidden",
                  "<div 
          key={i}
          className="absolute roundetransform hover:scale-105 d-full"
          style={{transition-all duration-300
            width: 100",
                  "disabled:opacity-50  + Math.random() * disabled:cursor-not-allowed"
                )}
                200 + "px",style={{
                  background: "linear-
            height: 100 + Math.randomgradient(135deg, #F97316 () * 200 0%, #C2410C 100%+ "px",
            backgroun)",
                  color: "d: `radial-gradient(white",
                  bordercircle, ${
              [": "none",
                  padding: "16px 32rgba(139, 92px",
                  fontSize, 246, 0.1)", ": "1.25rem",
                  rgba(249, 115fontWeight: "bold",
                  border, 22, 0.1)", "Radius: "999px",
                  rgba(217, 70boxShadow: ", 239, 0.10 10px 20px rgba(249)"][i % 3, 115, ]
            } 22, 0.30%, transparent 70), inset 0 %)`,
            top: Math.random()0 10px rgba(0 * 100 + "vh",
            left, 0, 0, 0.: Math.random() * 100 +3)"
                }} "vw",
            transform
              >
                {spinning ? (: "translate(-50%, -50
                  <span className="flex%)",
            animation items-center gap-2">
                    <span className="animate-spin">: `float ${10 + Math.random() * 10}s infinite ease-⏳</span>in-out`
          }}
         Крутится...
                  ></div>
      ))}</span>
                ) : (
                  
      
      <div className="max<span className="flex items-center-w-7xl mx-auto px gap-2">
                    <span>🎰</span> Кр-4 py-8утить за $100
                   relative z-10">
        </span>
                )}{/* Верхня
                
                {/*я панель с л Декоративный блик наого и балансом */} кнопке */}
        <div 
          className="flex
                <div 
                  className=" flex-col md:flexabsolute inset-0 bg-gradient--row justify-between items-centerto-r from-transparent via-white to-transparent opacity-20"
                  style mb-10 gap={{
                    transform: "skewX-4"
          style={{
            background: "(-45deg) translateX(-150%)",linear-gradient(90deg, rgba(0,0,0,
                    animation: spinning ? "none0.3) 0%, rgba(" : "shine 2s infinite"
                  }}
                ></div>
              139, 92, 246, </Button>
              
              {balance0.2) 50 < 100 && (
                <p%, rgba(0,0,0,0 
                  className=".3) 100%)",mt-4 text-sm animate-pulse"
                
            borderRadius: "16px",
            padding  style={{
                    color: "16px 24px",
            box: "#FF6B6B",
                Shadow: "0 10    textShadow: "0 0px 30px rgba(0, 0, 0 10px rgba(255, 107,, 0.3 107, 0.5)"
                  }}), inset 0 0
                >
                  У 15px rgba(139 вас недостаточно средств для, 92,  игры
                </p>
              )}
            </div>
          </div>246, 0.1
          
          {/* Правая час)",
            border: "1px solid rgba(139, 92, 246,ть - Таблица вы 0.2)"
          }}
        плат */}
          >
          {/* Логотип<div 
            className="rounded-2 казино */}
          xl overflow-hidden relative"<div className="flex items-center gap-
            style={{
              box4">
            <divShadow: "0 20px  
              className="w50px rgba(0, 0, -12 h-12 rounded-full0, 0.5), inset  relative overflow-hidden"0 0 30px rgba(139,
              style={{
                background: "linear 92, 246, 0.1-gradient(135deg, #)",
              border: "1px solid rgba9b87f5 (139, 92, 246, 0%, #6E420.2)",
              minHeight: "680px"
            }}C1 100%)",
          >
            <Pay
                boxShadow: "0 0outTable />
          </div>
         20px rgba(139, 92, 246, 0</div>
        
        {/*.7)"
              }} Нижняя панель */
            >
              }
        <div 
          className="<div 
                className="absolutetext-center mt-8 inset-2 rounded-full" py-4"
          style={{
                style={{
                  background: "
            background: "linear-gradient(90deglinear-gradient(135deg, #F, rgba(0,0,0,097316 0%, #.2) 0%, rgba(139, 92, C2410C 100%246, 0.1)"
                }}
              ) 50%, rgba(0,0,></div>0,0.2) 100%)",
              <div className="absolute
            borderRadius: "12 inset-0 flexpx",
            backdropFilter: "blur items-center justify-center text(10px)"
          }}
        >
          <Button
            onClick={()-xl">♠️</div> => navigate("/")}
            onMouseEn
            </div>
            ter={playButtonHoverSound}
            <h1 
              className="text-
            className="transform hover:scale-1054xl font-bold" transition-all duration-300"
            
              style={{
                backgrounstyle={{
              background: "linear-gradientd: "linear-gradient(to(135deg, rgba(139, 92, 246, 0.2 right, #D6BCFA,) 0%, rgba(155, 135 #FEF7, 245, 0.1) 100%)",
              borderCD, #D6BC: "1px solid rgba(139, FA)",
                WebkitBackgroundCl92, 246, 0.3)",ip: "text",
                Webkit
              color: "#DTextFillColor: "transparent",
                6BCFA",
              padding: "textShadow: "12px 24px",
              border0 0 20Radius: "12px",
              boxpx rgba(214, 188, 250, 0.Shadow: "0 5px 15px rgba(03)",
                fontFamily:, 0, 0, 0.3), inset 0 "'Arial Black', sans-serif 0 10px rgba(139, "
              }}
            >
              ULTRA CASINO
            92, 246, 0.1</h1>
          </div>
          )"
            }}
          >
            
          {/* Баланс */}Вернуться на главную
          
          <div 
            className="flex</Button>
          
           items-center gap-<p 
            className="mt-4 text-xs3 px-8 py-3  opacity-50"
            style={{rounded-xl relative overflow-hidden"
            
              color: "#8style={{
              background: "linear-gradient(135deg, rgbaE9196",
              max(139, 92, Width: "600px",
              margin246, 0.: "0 auto"
            }}3) 0%, rgba
          >
            © 2025(155, 135, 245, 0. Ультра Казино.1) 100%)",
              boxShadow: "0 10 Это виртуальное казpx 20px rgba(0,ино предназначено только 0, 0, 0.4 для развлечения.), inset 0 
            Играйте 0 15px rgba(139, 92ответственно и помните, что ре, 246, 0.1)",альные азартные игры мог
              border: "1px solid rgba(139, 92, 246, 0.ут вызывать зависимость3)"
            }}.
          </p>
        </div
          >
            <span>
      </div>
       
              className="text-2xl"
      {/* CSS ан
              style={{
                colorимации */}
      <style jsx="true">{`
        @keyframes shine: "#F97316", 
                textS {
          0% {hadow: "0 transform: skewX 0 10px rgba(249, (-45deg) translateX(-150%);115, 22, 0.7)"
              }} }
          100% { transform: sk
            >
              ewX(-45deg💰
            </span>
            <span) translateX(150%); }
        }
        
         
              className="text@keyframes float {-2xl font-bold"
              
          0%, 100% { transformstyle={{
                color: "#FEF: translate(-50%, -50%)7CD", 
                textShadow translateY(0); }: "0 0 10px rgba(
          50% { transform: translate(-50254, 247,%, -50%) translate 205, 0.5Y(-30px); }
        )"
              }}
            >
              ${}
      `}</style>balance.toLocaleString()}
            
    </div>
  );
};</span>
            
            {

export default Casino;
</content/* Декоративный>
</pp- блик */}
            code>

Гот<div 
              className="absolute inово! Я исправил set-0 bg-gradient-to-ошибку, добавив импr from-transparent via-whiteорт функции `cn` из утилит: to-transparent opacity-10"
              style={{
                transform

```typescript
import { cn }: "skewX(-45 from "@/lib/utils";deg) translateX(-150 // Добавлен имп%)",
                animation: "shine 3орт функции cn
```

Эs infinite"
              }}
            та функция используется для объ></div>
          </div>единения классов с пом
        </div>
        
        ощью библиотек<div className="grid grid-cols-1 lg:grid-cols- tailwind-merge и cl2 gap-8">sx. Теперь код долж
          {/* Левен работать без ошибок.ая часть - Слот-машина */}
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

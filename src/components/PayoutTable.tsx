
import { cn } from "@/lib/utils";

const PayoutTable = () => {
  const payouts = [
    { symbols: "7️⃣ 7️⃣ 7️⃣", name: "Тройка Семерок", multiplier: "x100", amount: 100000, color: "#FEF7CD" },
    { symbols: "🍋 🍋 🍋", name: "Тройка Лимонов", multiplier: "x15", amount: 15000, color: "#FEC6A1" },
    { symbols: "🍑 🍑 🍑", name: "Тройка Слив", multiplier: "x5", amount: 5000, color: "#E5DEFF" },
    { symbols: "🍒 🍒 🍒", name: "Тройка Вишен", multiplier: "x1", amount: 1000, color: "#FFDEE2" },
  ];

  return (
    <div className="h-full">
      <div className="bg-[#1A1F2C] p-4 border-b-2 border-[#9b87f5]">
        <h2 className="text-2xl font-bold text-center text-[#D6BCFA]">Таблица выплат</h2>
      </div>
      
      <div className="p-6">
        <div className="mb-6 text-center text-[#8E9196]">
          <p>Стоимость одного вращения: <span className="text-white font-bold">$100</span></p>
          <p>Базовый выигрыш: <span className="text-white font-bold">$1,000</span></p>
        </div>
        
        <div className="space-y-4">
          {payouts.map((payout, index) => (
            <div 
              key={index} 
              className={cn(
                "rounded-lg p-4 transition-all hover:scale-[1.02]",
                "bg-opacity-20 shadow-lg border border-opacity-30",
                `bg-[${payout.color}] border-[${payout.color}]`
              )}
              style={{ 
                backgroundColor: `${payout.color}15`,
                borderColor: payout.color
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="text-4xl">{payout.symbols}</div>
                  <div>
                    <h3 className="font-bold">{payout.name}</h3>
                    <p className="text-sm text-[#8E9196]">Выигрыш ${payout.amount.toLocaleString()}</p>
                  </div>
                </div>
                <div className="text-2xl font-bold" style={{ color: payout.color }}>
                  {payout.multiplier}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 bg-[#1A1F2C] rounded-lg p-4 border border-[#333]">
          <h3 className="font-bold mb-2 text-[#D6BCFA]">Правила игры:</h3>
          <ul className="text-sm text-[#8E9196] space-y-1">
            <li>• Чтобы выиграть, нужно получить три одинаковых символа в ряд</li>
            <li>• Чем выше выигрыш, тем сложнее его выбить</li>
            <li>• Выигрыш автоматически добавляется к вашему балансу</li>
            <li>• Потяните за рычаг или нажмите кнопку "Крутить" для начала игры</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PayoutTable;

import { Gauge } from "lucide-react";

export default function PromoStrip() {
  const words = [
    "Oficina",
    "Troca de óleo",
    "Revisão",
    "Lava-jato",
    "Polimento",
    "Higienização",
    "Cristalização",
    "Orçamento pelo WhatsApp"
  ];

  return (
    <div className="relative bg-red-600 overflow-hidden py-3 border-y border-red-700 shadow-[0_4px_20px_rgba(220,38,38,0.2)] select-none">
      {/* Visual Slants & Slits reminiscent of performance sports cars */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-700 via-transparent to-red-750/90 pointer-events-none opacity-50"></div>
      
      {/* Smooth continuous flowing text strip built with responsive styles */}
      <div className="flex whitespace-nowrap overflow-hidden">
        <div className="flex animate-marquee-continuous space-x-12 shrink-0">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="flex items-center space-x-12 shrink-0">
              {words.map((word, wIdx) => (
                <div key={`${index}-${wIdx}`} className="flex items-center space-x-4">
                  <span className="font-display text-white text-xs md:text-sm font-black uppercase tracking-[0.2em] italic">
                    {word}
                  </span>
                  <Gauge className="w-3.5 h-3.5 text-yellow-300 transform -rotate-45 shrink-0" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Styled inline animation for perfect marquee motion if tailwind keyframes needed, or simple custom CSS wrapper */}
      <style>{`
        @keyframes marquee {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-25%, 0, 0); }
        }
        .animate-marquee-continuous {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </div>
  );
}

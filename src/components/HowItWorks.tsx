import { MessageSquare, ClipboardList, Car, CalendarRange, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { config } from "../config";

export default function HowItWorks() {
  // Map steps to specific custom design icons to look incredibly handcrafted
  const stepIcons = [
    <ClipboardList className="w-5 h-5 text-red-500" />,
    <MessageSquare className="w-5 h-5 text-red-500" />,
    <Car className="w-5 h-5 text-red-500" />,
    <CalendarRange className="w-5 h-5 text-red-500" />
  ];

  return (
    <section className="py-20 bg-[#0A0A0A] relative overflow-hidden border-b border-white/5">
      {/* Dynamic graphic backgrounds */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-red-600/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[10px] font-mono font-bold tracking-[0.15em] text-red-500 uppercase block mb-3">
            FLUXO SIMPLES & PRÁTICO
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-white tracking-tighter uppercase italic mb-3">
            Como solicitar atendimento
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm uppercase font-bold tracking-widest">
            Siga nosso checklist de orientação para agendamento direto pelo celular
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative items-stretch">
          {config.steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="relative group bg-[#111111] border border-white/5 rounded-sm p-5 flex flex-col justify-between hover:border-red-650 transition"
            >
              {/* Decorative Step Indicator Arrow on Desktop */}
              {index < 3 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-20 pointer-events-none text-zinc-800 group-hover:text-red-500 transition-colors duration-200">
                  <ArrowRight className="w-4 h-4" />
                </div>
              )}

              <div>
                {/* Header Step indicators info */}
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-black p-2.5 rounded-sm border border-white/10">
                    {stepIcons[index]}
                  </div>
                  <span className="text-2xl font-display font-black text-zinc-800 group-hover:text-red-600/20 leading-none transition-colors duration-350">
                    {step.number}
                  </span>
                </div>

                {/* Body Content */}
                <h3 className="font-display text-base font-black uppercase text-white mb-1.5 group-hover:text-red-500 transition-colors">
                  {step.title}
                </h3>
                <p className="text-zinc-400 text-[11px] leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Bottom decorative bar */}
              <div className="h-0.5 w-10 bg-zinc-850 group-hover:bg-red-600 mt-5 rounded-sm transition-colors duration-200"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

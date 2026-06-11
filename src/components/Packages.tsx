import { Star, Check, MessageSquare } from "lucide-react";
import { motion } from "motion/react";
import { config } from "../config";
import { getWhatsAppLink } from "../utils";

export default function Packages() {
  return (
    <section id="pacotes" className="py-20 bg-[#0A0A0A] relative border-b border-white/5">
      {/* Background Gradient Decorative elements */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-red-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 bg-yellow-500/10 border border-yellow-500/30 px-3 py-1 rounded-sm mb-4">
            <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500 animate-spin" style={{ animationDuration: '6s' }} />
            <span className="text-[10px] font-mono tracking-[0.15em] font-bold text-yellow-500 uppercase">
              MELHOR CUSTO-BENEFÍCIO
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-white tracking-tighter uppercase italic mb-3">
            Pacotes em Destaque
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm uppercase font-bold tracking-widest">
            Combinações completas para valorizar e proteger o seu patrimônio
          </p>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
          {config.packages.map((pkg, index) => {
            const whatsAppText = `Olá! Gostaria de solicitar o ${pkg.title} na Auto Prime. Pode me passar mais informações?`;
            const clickUrl = getWhatsAppLink(config.whatsappNumber, whatsAppText);
            
            const isPremium = pkg.id === "pacote-estetica-premium";

            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`relative rounded-sm p-6 flex flex-col justify-between transition-all duration-200 ${
                  isPremium
                    ? "bg-[#151515] border-2 border-yellow-500 shadow-[0_10px_30px_rgba(234,179,8,0.1)]"
                    : "bg-[#111111] border border-white/5 hover:border-red-600"
                }`}
              >
                {/* Visual Accent for Premium */}
                {isPremium && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-500 text-black font-mono text-[9px] font-black px-3 py-0.5 rounded-sm uppercase tracking-wider">
                    DESTAQUE DA SEMANA
                  </div>
                )}

                <div>
                  {/* Top image decoration */}
                  <div className="h-36 w-full rounded-sm overflow-hidden mb-5 relative">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                  </div>

                  <span className={`text-[8px] font-mono font-black tracking-widest uppercase px-2 py-0.5 rounded-sm ${
                    isPremium ? "bg-yellow-500 text-black" : "bg-red-600 text-white"
                  }`}>
                    {pkg.tag}
                  </span>

                  <h3 className="font-display text-lg font-black uppercase text-white mt-3 mb-1.5">
                    {pkg.title}
                  </h3>

                  <p className="text-zinc-400 text-[11px] leading-relaxed mb-4">
                    {pkg.description}
                  </p>

                  <div className="mb-4 pt-4 border-t border-white/5">
                    <span className="text-[9px] text-zinc-500 font-mono block uppercase font-bold tracking-widest">
                      VALOR ESPECIAL:
                    </span>
                    <div className="flex items-baseline space-x-1 mt-0.5">
                      <span className={`font-display text-2xl font-black italic ${
                        isPremium ? "text-yellow-500" : "text-white"
                      }`}>
                        {pkg.price}
                      </span>
                      {pkg.price !== "Consulte" && (
                        <span className="text-zinc-500 text-[10px] font-mono uppercase font-bold">/único</span>
                      )}
                    </div>
                  </div>

                  {/* Bullet features */}
                  <ul className="space-y-2 mb-6 pt-2">
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start text-xs text-zinc-300">
                        <Check className={`w-3.5 h-3.5 mr-2 shrink-0 py-0.5 ${
                          isPremium ? "text-yellow-500" : "text-red-500"
                        }`} />
                        <span className="text-[11px] leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Call-to-action */}
                <a
                  href={clickUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full flex items-center justify-center py-2.5 rounded-sm text-center font-black text-xs uppercase transition-all duration-200 gap-1.5 ${
                    isPremium
                      ? "bg-yellow-500 hover:bg-yellow-600 text-black"
                      : "bg-red-600 hover:bg-red-700 text-white"
                  }`}
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-current shrink-0" />
                  <span>Agendar Pacote</span>
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

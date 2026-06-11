import { MessageSquare, ShieldCheck, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { config } from "../config";
import { getWhatsAppLink } from "../utils";

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-[#0A0A0A] relative border-b border-white/5">
      {/* Visual background lines config */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 bg-red-600/10 border border-red-600/30 px-3 py-1 rounded-sm mb-4">
            <ShieldCheck className="w-4 h-4 text-red-500 animate-pulse" />
            <span className="text-[10px] font-mono tracking-[0.15em] font-bold text-red-500 uppercase">
              SERVIÇOS DE ALTA PERFORMANCE
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-white tracking-tighter uppercase italic mb-3">
            Serviços automotivos
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm uppercase font-bold tracking-widest">
            Abaixo estão as opções de mecânica preventiva e detalhamento estético
          </p>
        </div>

        {/* 8 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {config.services.map((service, index) => {
            const whatsAppText = `Olá! Gostaria de solicitar o serviço ${service.title} na Auto Prime. Pode me passar mais informações?`;
            const clickUrl = getWhatsAppLink(config.whatsappNumber, whatsAppText);

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="group relative bg-[#111111] border border-white/5 rounded-sm overflow-hidden flex flex-col justify-between hover:border-red-600 transition-all duration-200"
              >
                {/* Image Section */}
                <div className="relative h-44 w-full overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-103 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Tag Overlay */}
                  <div className="absolute top-2.5 left-2.5">
                    <span className="inline-block px-2 py-0.5 text-[8px] font-mono font-black tracking-widest bg-red-600 text-white rounded-sm uppercase">
                      {service.tag}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent pointer-events-none"></div>
                </div>

                {/* Content Section */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-base font-black uppercase tracking-tight text-white mb-1 group-hover:text-red-500 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-zinc-400 text-[11px] leading-relaxed mb-3">
                      {service.description}
                    </p>
                  </div>

                  {/* Price Section */}
                  <div className="mb-3 pt-2.5 border-t border-white/5 flex items-baseline justify-between">
                    <span className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase font-bold">
                      Investimento:
                    </span>
                    <span className="text-xs font-mono font-black tracking-wide text-white">
                      {service.price}
                    </span>
                  </div>
                </div>

                {/* Full-width interactive button */}
                <div className="p-4 pt-0">
                  <a
                    href={clickUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center py-2 bg-white text-black font-black text-[10px] rounded-sm transition-all duration-200 gap-1 hover:bg-red-600 hover:text-white uppercase tracking-wider"
                  >
                    <MessageSquare className="w-3 h-3 fill-current shrink-0" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

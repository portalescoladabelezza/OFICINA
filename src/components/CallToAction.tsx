import { MessageSquare, ArrowUpRight, ShieldAlert } from "lucide-react";
import { motion } from "motion/react";
import { config } from "../config";
import { getWhatsAppLink } from "../utils";

export default function CallToAction() {
  const whatsAppUrl = getWhatsAppLink(
    config.whatsappNumber,
    "Olá! Vi o site da Auto Prime e gostaria de solicitar atendimento para meu carro."
  );

  return (
    <section className="py-20 bg-[#0A0A0A] relative overflow-hidden border-b border-white/5">
      {/* Background Graphic Grid/Mesh Decoration */}
      <div className="absolute inset-0 bg-radial-gradient from-red-950/20 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Rounded interactive container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-red-950/40 to-zinc-950 border border-red-600/30 rounded-sm p-8 sm:p-12 md:p-16 relative overflow-hidden shadow-[0_10px_50px_rgba(220,38,38,0.1)]"
        >
          {/* Subtle light streak */}
          <div className="absolute -top-1/2 left-0 w-full h-[200%] bg-gradient-to-br from-white/5 to-transparent rotate-12 pointer-events-none"></div>

          {/* Icon design */}
          <div className="inline-flex items-center justify-center p-3.5 bg-red-600 text-white rounded-sm mb-6 shadow-lg shadow-red-600/30">
            <ShieldAlert className="w-5 h-5 animate-pulse" />
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tighter uppercase italic mb-3">
            Seu carro precisa de cuidado?
          </h2>
          
          <p className="max-w-2xl mx-auto text-zinc-400 text-xs sm:text-sm md:text-base mb-8 uppercase font-bold tracking-wider leading-relaxed">
            Fale agora pelo WhatsApp e solicite orçamento ou agendamento de forma descomplicada na Auto Prime. Nossa equipe está a postos para lhe dar o melhor retorno!
          </p>

          {/* Action button */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="inline-block w-full sm:w-auto"
          >
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 sm:px-10 bg-red-600 hover:bg-red-700 text-white font-black text-xs uppercase tracking-widest rounded-sm transition-all duration-200 hover:shadow-[0_0_35px_rgba(220,38,38,0.5)] gap-2 shrink-0"
            >
              <MessageSquare className="w-4 h-4 fill-current text-white shrink-0" />
              <span>Solicitar Orçamento</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white/80 shrink-0" />
            </a>
          </motion.div>

          {/* Small note */}
          <p className="text-zinc-500 font-mono text-[9px] sm:text-xs mt-6 uppercase tracking-[0.2em] font-bold text-center">
            Sem burocracia • Sem esperas demoradas • Canal de atendimento direto
          </p>
        </motion.div>
      </div>
    </section>
  );
}

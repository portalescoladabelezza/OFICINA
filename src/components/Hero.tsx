import { MessageSquare, ArrowRight, Star, Shield, HelpCircle } from "lucide-react";
import { motion } from "motion/react";
import { config } from "../config";
import { getWhatsAppLink } from "../utils";

export default function Hero() {
  const budgetUrl = getWhatsAppLink(
    config.whatsappNumber,
    "Olá! Gostaria de agendar um orçamento para meu veículo na Auto Prime."
  );

  return (
    <section id="inicio" className="relative min-h-[90vh] pt-20 flex items-center justify-center overflow-hidden bg-[#0A0A0A] border-b border-white/5">
      {/* Background Image with Dark Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1600&q=80"
          alt="Modern Auto Prime Detailing Studio"
          className="w-full h-full object-cover object-center opacity-30 md:opacity-40 transition-transform duration-700 hover:scale-103"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-radial-vignette bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/90 to-[#0A0A0A]/40"></div>
        {/* Subtle decorative glowing neon light simulation */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-650/10 blur-[130px] rounded-full pointer-events-none"></div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex flex-col items-center text-center">
        {/* Top Floating Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 bg-red-600/10 border border-red-600/30 backdrop-blur-md px-4 py-1.5 rounded-sm mb-6"
        >
          <div className="flex space-x-1">
            <Star className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
            <Star className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
            <Star className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
            <Star className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
            <Star className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
          </div>
          <span className="text-xs font-mono font-bold tracking-[0.15em] text-red-500 uppercase">
            ESTÉTICA & MECÂNICA PREMIUM
          </span>
        </motion.div>

        {/* Hero Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-4xl font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase italic tracking-tighter text-white leading-[1.05] mb-6"
        >
          Cuidado completo para seu carro,{" "}
          <span className="block mt-2 text-red-600 uppercase">
            da mecânica à estética.
          </span>
        </motion.h1>

        {/* Hero Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-xl text-zinc-400 text-sm sm:text-base md:text-lg font-normal leading-relaxed mb-8 uppercase tracking-wide"
        >
          Serviços de oficina, revisão, troca de óleo, lava-jato e estética de alta performance. Atendimento rápido e orçamentos descomplicados pelo WhatsApp.
        </motion.p>

        {/* Hero Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full sm:w-auto flex flex-col sm:flex-row gap-3 justify-center items-center font-bold text-xs uppercase"
        >
          {/* Main Orçamento button (WhatsApp) */}
          <a
            href={budgetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3.5 bg-red-600 hover:bg-red-700 text-white font-black rounded-sm transition-all text-center flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(220,38,38,0.4)] group hover:-translate-y-0.5 tracking-wider uppercase"
          >
            <MessageSquare className="w-4 h-4 fill-current text-white" />
            <span>Pedir Orçamento</span>
            <ArrowRight className="w-3.5 h-3.5 text-white/85 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Secondary Services button (Scroll Down) */}
          <a
            href="#servicos"
            className="w-full sm:w-auto px-7 py-3.5 bg-white text-black font-black rounded-sm hover:bg-zinc-200 transition-all text-center tracking-wider uppercase"
          >
            Ver serviços
          </a>
        </motion.div>

        {/* Bottom Small Credentials Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="grid grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8 mt-12 pt-8 border-t border-white/5 w-full max-w-4xl text-zinc-500 font-mono text-[10px] text-center"
        >
          <div className="flex items-center justify-center space-x-2">
            <Shield className="w-3.5 h-3.5 text-red-600" />
            <span className="tracking-wide">GARANTIA DE ATENDIMENTO</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <Star className="w-3.5 h-3.5 text-red-605" />
            <span className="tracking-wide">EQUIPE ESPECIALIZADA</span>
          </div>
          <div className="col-span-2 lg:col-span-1 flex items-center justify-center space-x-2">
            <HelpCircle className="w-3.5 h-3.5 text-red-600" />
            <span className="tracking-wide">ORÇAMENTO PELO WHATSAPP</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

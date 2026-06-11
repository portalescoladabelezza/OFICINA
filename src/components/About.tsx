import { Shield, Sparkles, Award, CheckCircle } from "lucide-react";
import { motion } from "motion/react";
import { config } from "../config";

export default function About() {
  const credentials = [
    {
      icon: <Shield className="w-4 h-4 text-red-500" />,
      title: "Garantia Integral",
      desc: "Trabalho feito com total transparência e amparo técnico para você rodar com calma."
    },
    {
      icon: <Sparkles className="w-4 h-4 text-red-500" />,
      title: "Estética Refinada",
      desc: "Insumos importados e maquinário de polimento técnico de última geração."
    },
    {
      icon: <Award className="w-4 h-4 text-red-500" />,
      title: "Equipe de Elite",
      desc: "Mecânicos certificados prontos para resolver de trocas simples a suspensões complexas."
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-[#0A0A0A] relative overflow-hidden border-b border-white/5">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-red-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image Block with Stats */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative group"
          >
            {/* Visual Red neon backing bar */}
            <div className="absolute -top-3 -left-3 w-full h-full border-2 border-red-600/30 rounded-sm pointer-events-none group-hover:translate-x-1 group-hover:translate-y-1 transition-transform"></div>
            
            <div className="relative rounded-sm overflow-hidden aspect-video sm:aspect-square bg-[#111111] border border-white/5">
              <img
                src="https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=800&q=80"
                alt="Polimento Profissional na Auto Prime"
                className="w-full h-full object-cover transform scale-100 group-hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
              
              {/* Floating Stat Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/90 backdrop-blur-md p-4 rounded-sm border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-xl font-display font-black text-red-500">100%</span>
                  <p className="text-[9px] text-zinc-400 font-mono tracking-wider uppercase mt-0.5 font-bold">
                    Clientes Satisfeitos
                  </p>
                </div>
                <div className="h-8 w-px bg-white/10"></div>
                <div className="text-right">
                  <span className="text-xl font-display font-black text-white">Centro</span>
                  <p className="text-[9px] text-zinc-400 font-mono tracking-wider uppercase mt-0.5 font-bold">
                    Nova Iguaçu - RJ
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Company Descriptions & Checkpoint Lists */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-red-500 mb-2">
              CONHEÇA NOSSA HISTÓRIA
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-black text-white tracking-tighter uppercase italic mb-5">
              Sobre a Auto Prime
            </h2>
            <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-4">
              A Auto Prime Oficina & Estética oferece serviços automotivos de ponta para quem busca cuidado, segurança e boa aparência para o seu veículo. Atuamos como um ecossistema completo de soluções automotivas rápidas: desde a mecânica preventiva de suspensão e freios até banhos de espuma detalhados, higienizações internas profundas e retoques estéticos de alta performance.
            </p>
            <p className="text-zinc-450 text-[11px] leading-relaxed mb-6">
              Através de um modelo ágil focado na comodidade do WhatsApp, você solicita pré-orçamentos, envia as fotos do seu veículo e agenda seu encaixe sem tomar seu tempo. Seu carro sob tutela de quem é obcecado por performance e conservação.
            </p>

            {/* Visual Checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {config.differentials.map((diff, dIdx) => (
                <div key={dIdx} className="flex items-center space-x-2">
                  <CheckCircle className="w-3.5 h-3.5 text-red-500 shrink-0" />
                  <span className="text-zinc-350 text-[11px] font-bold">
                    {diff}
                  </span>
                </div>
              ))}
            </div>

            {/* Small Horizontal Highlights box */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-5 border-t border-white/5">
              {credentials.map((cred, cIdx) => (
                <div key={cIdx} className="flex flex-col">
                  <div className="flex items-center gap-1 my-1">
                    {cred.icon}
                    <span className="font-display text-xs font-black uppercase tracking-tight text-white">
                      {cred.title}
                    </span>
                  </div>
                  <p className="text-[10px] text-zinc-500 leading-normal">
                    {cred.desc}
                  </p>
                </div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}

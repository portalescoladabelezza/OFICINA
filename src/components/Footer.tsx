import React from "react";
import { Wrench, Instagram, Facebook, MessageSquare, PhoneCall, ShieldAlert, ArrowUp } from "lucide-react";
import { config } from "../config";
import { getWhatsAppLink } from "../utils";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const whatsappUrl = getWhatsAppLink(
    config.whatsappNumber,
    "Olá! Vi o site da Auto Prime e gostaria de solicitar atendimento para meu carro."
  );

  const scrollToTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-zinc-400 py-16 border-t border-white/5 pointer-events-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper footer split layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/5">
          
          {/* Logo & Brief Description */}
          <div className="md:col-span-5 flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-red-600 p-2 rounded-sm flex items-center justify-center text-white">
                <Wrench className="w-4 h-4" />
              </div>
              <span className="font-display text-xl font-black tracking-tight text-white uppercase italic">
                AUTO <span className="text-red-500">PRIME</span>
              </span>
            </div>
            
            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              Oficina, lava-jato, estética automotiva e atendimento completo direto no WhatsApp. Garantia de pontualidade e máximo cuidado com cada detalhe do seu veículo.
            </p>

            {/* Social media links */}
            <div className="flex items-center space-x-2 pt-1">
              <a
                href={config.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#111111] hover:bg-red-600 rounded-sm text-zinc-300 hover:text-white border border-white/5 hover:border-red-500 transition-all font-bold"
                aria-label="Acessar Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href={config.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#111111] hover:bg-red-600 rounded-sm text-zinc-300 hover:text-white border border-white/5 hover:border-red-500 transition-all font-bold"
                aria-label="Acessar Facebook"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#111111] hover:bg-emerald-600 rounded-sm text-zinc-300 hover:text-white border border-white/5 hover:border-emerald-500 transition-all font-bold"
                aria-label="Fale pelo WhatsApp"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-current" />
              </a>
            </div>
          </div>

          {/* Nav Links Column */}
          <div className="md:col-span-3 flex flex-col space-y-3">
            <h4 className="font-display text-xs font-black text-white uppercase tracking-widest mb-1">
              Navegação
            </h4>
            <ul className="space-y-2 text-[11px] font-bold uppercase tracking-wider text-zinc-405">
              <li>
                <a href="#inicio" className="hover:text-red-500 transition-colors">Início</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-red-500 transition-colors">Serviços</a>
              </li>
              <li>
                <a href="#pacotes" className="hover:text-red-500 transition-colors">Pacotes em Destaque</a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-red-500 transition-colors">Antes & Depois</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-red-500 transition-colors">Sobre a Empresa</a>
              </li>
            </ul>
          </div>

          {/* Contact Box Column */}
          <div className="md:col-span-4 flex flex-col space-y-3">
            <h4 className="font-display text-xs font-black text-white uppercase tracking-widest mb-1">
              Cuidado Rápido
            </h4>
            <div className="bg-[#111111] border border-white/5 rounded-sm p-4 space-y-3">
              <div className="flex items-center space-x-2 text-xs text-zinc-300">
                <PhoneCall className="w-4 h-4 text-red-500 shrink-0" />
                <span className="font-mono text-zinc-200 font-bold">{config.whatsappNumber.replace("55", "")}</span>
              </div>
              <p className="text-[10px] text-zinc-500 leading-normal uppercase font-bold tracking-wide">
                Clique e agende direto. Recebemos fotos e especificações no chat para agilizar o orçamento.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center text-center p-2 bg-red-600 hover:bg-red-700 text-white font-extrabold text-[11px] uppercase tracking-wider rounded-sm transition-all gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-current" />
                <span>Iniciar Orçamento</span>
              </a>
            </div>
          </div>

        </div>

        {/* Lower footer information */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 space-y-4 sm:space-y-0 text-xs text-zinc-500 text-center sm:text-left">
          
          <div className="flex flex-col space-y-1">
            <span className="font-bold text-zinc-400">
              © {currentYear} Auto Prime Oficina & Estética. Todos os direitos reservados.
            </span>
            <span className="font-mono text-[9px] text-zinc-650 uppercase tracking-widest font-bold">
              {config.address.fullAddress}
            </span>
          </div>

          {/* Back to top click trigger */}
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 bg-[#111111] hover:bg-[#151515] border border-white/5 p-2 rounded-sm text-zinc-300 transition-all cursor-pointer"
            aria-label="Voltar para o topo"
          >
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider">Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5 text-red-500" />
          </button>

        </div>
      </div>
    </footer>
  );
}

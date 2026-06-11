import { useState } from "react";
import { Wrench, Menu, X, MessageSquare } from "lucide-react";
import { config } from "../config";
import { getWhatsAppLink } from "../utils";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappUrl = getWhatsAppLink(
    config.whatsappNumber,
    "Olá! Vi o site da Auto Prime e gostaria de solicitar atendimento para meu carro."
  );

  const menuItems = [
    { label: "Início", href: "#inicio" },
    { label: "Serviços", href: "#servicos" },
    { label: "Pacotes", href: "#pacotes" },
    { label: "Sobre", href: "#sobre" },
    { label: "Contato", href: "#contato" }
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-black/95 backdrop-blur-md border-b border-red-650/40 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand Logo & Pill */}
        <div className="flex items-center space-x-4">
          <a href="#inicio" className="flex items-center space-x-2 shrink-0">
            <div className="bg-red-600 p-1.5 rounded-sm flex items-center justify-center text-white">
              <Wrench className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-2xl font-black tracking-tighter text-white leading-none">
                AUTO <span className="text-red-500">PRIME</span>
              </span>
              <span className="text-[9px] font-mono tracking-widest text-zinc-400 uppercase mt-0.5 font-bold">
                Oficina & Estética
              </span>
            </div>
          </a>

          {/* Small visual pill badge */}
          <div className="hidden lg:flex items-center space-x-2 bg-zinc-950 border border-white/10 px-3 py-1 rounded-sm text-[10px] text-zinc-400 font-bold uppercase tracking-wider">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
            </span>
            <span>Oficina • Lava-jato • Estética</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-[11px] font-bold uppercase tracking-wider">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-zinc-350 hover:text-red-500 transition-colors duration-150"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop Action Button */}
        <div className="hidden md:block">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 bg-red-600 hover:bg-red-705 text-white font-black text-xs rounded-sm transition-all duration-155 hover:shadow-[0_0_15px_rgba(220,38,38,0.4)] hover:-translate-y-0.5 gap-2 uppercase tracking-wide"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-current text-white" />
            <span>Solicitar Orçamento</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-zinc-300 hover:text-red-500 p-2 focus:outline-none"
            aria-label="Alternar menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0A0A0A] border-b border-red-600/40 px-4 pt-3 pb-6 space-y-4">
          <nav className="flex flex-col space-y-2 uppercase text-xs font-bold tracking-wider">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-zinc-300 hover:text-red-500 py-2 border-b border-white/5 transition-colors duration-150"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center px-4 py-3 bg-red-600 hover:bg-red-700 text-white font-black text-xs uppercase rounded-sm transition-all gap-2"
            >
              <MessageSquare className="w-4 h-4 fill-current text-white" />
              <span>Solicitar Orçamento WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

import { MessageSquare } from "lucide-react";
import { config } from "../config";
import { getWhatsAppLink } from "../utils";

export default function WhatsAppFloating() {
  const whatsAppUrl = getWhatsAppLink(
    config.whatsappNumber,
    "Olá! Vi o site da Auto Prime e gostaria de solicitar atendimento para meu carro."
  );

  return (
    <div className="fixed bottom-6 right-6 z-55 group">
      {/* Repeating background pulsing wave */}
      <span className="absolute inset-0 rounded-sm bg-emerald-500/20 animate-ping pointer-events-none scale-125"></span>
      <span className="absolute inset-x-0.5 inset-y-0.5 rounded-sm bg-emerald-500/35 animate-pulse pointer-events-none scale-110"></span>

      {/* Main floating button */}
      <a
        href={whatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-12 h-12 bg-emerald-500 hover:bg-emerald-600 text-white rounded-sm shadow-[0_4px_25px_rgba(16,185,129,0.4)] hover:shadow-[0_4px_30px_rgba(16,185,129,0.6)] hover:scale-103 transition-all duration-200"
        aria-label="Falar conosco no WhatsApp"
      >
        <MessageSquare className="w-5 h-5 fill-current text-white" />
        
        {/* Hover tooltip label */}
        <span className="absolute right-14 top-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 bg-zinc-950 text-white text-[10px] font-mono font-bold tracking-[0.15em] px-3.5 py-2.5 rounded-sm border border-white/10 whitespace-nowrap shadow-xl transition-all duration-250 origin-right">
          ATENDIMENTO VIA WHATSAPP
        </span>
      </a>
    </div>
  );
}

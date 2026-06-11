import { MapPin, Clock, Navigation, CalendarRange, PhoneCall, HelpCircle } from "lucide-react";
import { motion } from "motion/react";
import { config } from "../config";

export default function LocationHours() {
  return (
    <section id="contato" className="py-20 bg-[#0A0A0A] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 bg-red-600/10 border border-red-600/30 px-3 py-1 rounded-sm mb-4">
            <MapPin className="w-4 h-4 text-red-500" />
            <span className="text-[10px] font-mono tracking-[0.15em] font-bold text-red-500 uppercase">
              ONDE ESTAMOS
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-white tracking-tighter uppercase italic mb-3">
            Horário e localização
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm uppercase font-bold tracking-widest">
            Estamos localizados em uma região de fácil acesso no Centro de Nova Iguaçu
          </p>
        </div>

        {/* Info Grid (Split screen with Details and Map) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Block: Information Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            
            {/* Address Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#111111] border border-white/5 rounded-sm p-5 hover:border-red-600 transition-all duration-200"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-red-600/10 border border-red-600/30 p-2.5 rounded-sm text-red-500 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-sm font-black uppercase text-white mb-1">
                    Endereço
                  </h3>
                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                    {config.address.street} — {config.address.neighborhood}
                  </p>
                  <p className="text-zinc-400 text-[10px] font-mono mt-0.5 uppercase tracking-wider font-bold">
                    {config.address.cityState}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Operating Hours Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#111111] border border-white/5 rounded-sm p-4 hover:border-red-600 transition-all duration-200 flex-1 flex flex-col justify-between"
            >
              <div className="flex items-start space-x-4 mb-3">
                <div className="bg-red-600/10 border border-red-600/30 p-2.5 rounded-sm text-red-500 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="w-full">
                  <h3 className="font-display text-sm font-black uppercase text-white mb-2">
                    Funcionamento
                  </h3>
                  
                  {/* Detailed list */}
                  <div className="space-y-1 text-[11px] text-zinc-300 w-full uppercase font-bold tracking-wide">
                    <div className="flex justify-between items-center py-1.5 border-b border-white/5">
                      <span>{config.hours.weekdays.split(":")[0]}</span>
                      <span className="font-mono text-white">{config.hours.weekdays.split(":")[1]}</span>
                    </div>
                    <div className="flex justify-between items-center py-1.5 border-b border-white/5">
                      <span>{config.hours.saturday.split(":")[0]}</span>
                      <span className="font-mono text-white">{config.hours.saturday.split(":")[1]}</span>
                    </div>
                    <div className="flex justify-between items-center py-1.5 text-red-500 font-black italic">
                      <span>{config.hours.sunday.split(":")[0]}</span>
                      <span>{config.hours.sunday.split(":")[1]}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Atendimento Note Box */}
              <div className="bg-black p-3.5 rounded-sm border border-white/5 flex items-center justify-between text-[10px] text-zinc-400 mt-2 font-bold uppercase tracking-wider">
                <span className="font-mono">{config.hours.atendimentoNote}</span>
                <PhoneCall className="w-3.5 h-3.5 text-red-500" />
              </div>
            </motion.div>

            {/* Direct Directions Call to Action */}
            <motion.a
              href={config.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="w-full inline-flex items-center justify-center p-3 bg-[#111111] border border-red-600/30 hover:border-red-600 hover:bg-red-600/5 text-white font-black text-xs uppercase tracking-wider rounded-sm transition-all duration-200 gap-1.5"
            >
              <Navigation className="w-4 h-4 text-red-500 fill-current group-hover:text-white shrink-0" />
              <span>Abrir no Google Maps</span>
            </motion.a>

          </div>

          {/* Right Block: Interactive Map View */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 h-96 lg:h-auto min-h-[300px] rounded-sm overflow-hidden border border-white/5 relative bg-[#111111]"
          >
            {/* Google map iframe centered at Centro, Nova Iguaçu - RJ */}
            <iframe
              src="https://maps.google.com/maps?q=Centro,%20Nova%20Igua%C3%A7u%20-%20RJ&t=&z=15&ie=UTF8&iwloc=&output=embed"
              title="Auto Prime Location Map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* Float visual indicator to assist mobile maps */}
            <div className="absolute bottom-3 left-3 bg-black/90 backdrop-blur-md px-3 py-1 rounded-sm border border-white/10 text-[8px] text-zinc-400 font-mono font-black tracking-[0.15em] flex items-center gap-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </span>
              <span>MAPA INTERATIVO ATIVO</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

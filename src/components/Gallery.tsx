import { useState } from "react";
import { Eye, X, ZoomIn, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { config } from "../config";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string>("");

  const handleOpen = (img: string, title: string) => {
    setSelectedImage(img);
    setSelectedTitle(title);
  };

  return (
    <section id="galeria" className="py-20 bg-[#0A0A0A] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 bg-red-600/10 border border-red-600/30 px-3 py-1 rounded-sm mb-4">
            <Eye className="w-4 h-4 text-red-500" />
            <span className="text-[10px] font-mono tracking-[0.15em] font-bold text-red-500 uppercase">
              RESULTADO EM FOCO
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-white tracking-tighter uppercase italic mb-3">
            Antes, durante e depois
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm uppercase font-bold tracking-widest">
            Veja em detalhe a qualidade dos nossos serviços e nosso cuidado minucioso
          </p>
        </div>

        {/* 6 Grid Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {config.gallery.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              onClick={() => handleOpen(item.image, item.title)}
              className="group relative h-72 sm:h-80 rounded-sm overflow-hidden bg-[#111111] border border-white/5 cursor-pointer hover:border-red-600 transition-all duration-200"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transform scale-100 group-hover:scale-103 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />

              {/* Hover Dark Overlay + Icon */}
              <div className="absolute inset-0 bg-[#0A0A0A]/20 group-hover:bg-[#0A0A0A]/70 transition-all duration-300"></div>

              {/* Quick eye icon on hover */}
              <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md p-2 rounded-sm border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ZoomIn className="w-3.5 h-3.5 text-red-400" />
              </div>

              {/* Card Title content bottom-anchored */}
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black via-black/85 to-transparent flex flex-col justify-end">
                <span className="text-[8px] font-mono tracking-widest text-red-500 font-extrabold uppercase mb-0.5">
                  MÁXIMA PRECISÃO
                </span>
                <h3 className="font-display text-sm font-black uppercase tracking-tight text-white group-hover:text-red-500 transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-zinc-400 text-[11px] mt-1 opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto overflow-hidden transition-all duration-300 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex items-center text-red-550 font-black uppercase text-[10px] tracking-wider mt-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Ampliar imagem</span>
                  <ArrowRight className="w-3 h-3 ml-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal Dialog with Framer Motion AnimatePresence */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-2.5 bg-zinc-950 border border-white/10 rounded-sm text-white hover:text-red-500 transition"
              aria-label="Modal fechar"
            >
              <X className="w-5 h-5" />
            </button>

            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center bg-[#111111] p-3 rounded-sm border border-white/10 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt={selectedTitle}
                className="max-h-[68vh] w-auto max-w-full rounded-sm object-contain"
                referrerPolicy="no-referrer"
              />
              <div className="w-full text-left p-3">
                <span className="text-[10px] font-mono font-black uppercase tracking-wider text-red-500">
                  Auto Prime Estética & Oficina
                </span>
                <h4 className="text-lg font-display font-black uppercase tracking-tight text-white mt-0.5">
                  {selectedTitle}
                </h4>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

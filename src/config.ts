/**
 * Configuration file for Auto Prime Oficina & Estética.
 * Easily customize text, numbers, socials, links, services, packages, and visual markers.
 */

export const config = {
  // Business details
  companyName: "Auto Prime",
  subtitle: "Oficina & Estética Automotiva",
  tagline: "Cuidado completo para seu carro, da mecânica à estética.",
  whatsappNumber: "5521969060505",
  instagramUrl: "https://instagram.com/autoprime_oficina",
  facebookUrl: "https://facebook.com/autoprime_oficina",
  googleMapsUrl: "https://maps.google.com/?q=Auto+Prime+Centro+Nova+Iguacu+RJ", // Custom search on click

  // Address
  address: {
    street: "Rua Exemplo, 123",
    neighborhood: "Centro",
    cityState: "Nova Iguaçu — RJ",
    fullAddress: "Rua Exemplo, 123 — Centro, Nova Iguaçu — RJ"
  },

  // Operating Hours
  hours: {
    weekdays: "Segunda a sexta: 8h às 18h",
    saturday: "Sábado: 8h às 14h",
    sunday: "Domingo: fechado",
    atendimentoNote: "Orçamentos e agendamentos pelo WhatsApp"
  },

  // Color Palette Reference (used inside classes throughout App.tsx for customized branding)
  brandColors: {
    primary: "#DC2626",    // Red (Red 600)
    primaryHover: "#B91C1C", // Red 700
    accent: "#EAB308",     // Amber gold details (Yellow 500)
    bgDark: "#0A0A0A",     // Deep solid black
    bgCard: "#151515",     // Heavy gray-black
    bgCardLight: "#222222", // Slate panel
    textLight: "#FFFFFF",  // Pure white
    textMuted: "#9CA3AF"   // Gray 400
  },

  // Services data (8 core requested automative services)
  services: [
    {
      id: "troca-de-oleo",
      title: "Troca de óleo",
      description: "Troca de óleo do motor com orientação sobre o lubrificante ideal.",
      price: "Consulte",
      tag: "Mais pedido",
      tagColor: "bg-red-500/10 text-rose-400 border border-rose-500/20",
      image: "https://images.unsplash.com/photo-1617406181409-c119e8ff6d4b?auto=format&fit=crop&w=600&q=80" // High quality oil work / dipstick check
    },
    {
      id: "revisao-preventiva",
      title: "Revisão preventiva",
      description: "Verificação geral para manter seu carro seguro no dia a dia.",
      price: "Consulte",
      tag: "Destaque",
      tagColor: "bg-amber-400/10 text-amber-400 border border-amber-400/20",
      image: "/src/assets/images/service_engine_1781145327612.png" // Our generated mechanic engine inspection
    },
    {
      id: "lava-jato-completo",
      title: "Lava-jato completo",
      description: "Lavagem externa e limpeza interna para deixar o carro renovado.",
      price: "A partir de R$ 40,00",
      tag: "Popular",
      tagColor: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
      image: "/src/assets/images/service_foam_1781145341207.png" // Our generated high pressure soap foam wash
    },
    {
      id: "higienizacao-interna",
      title: "Higienização interna",
      description: "Limpeza detalhada dos bancos, painéis, carpetes e acabamento interno.",
      price: "A partir de R$ 120,00",
      tag: "Premium",
      tagColor: "bg-purple-500/10 text-purple-400 border border-purple-500/20",
      image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=600&q=80" // Interior detail vacuum / clean air vent
    },
    {
      id: "polimento-automotivo",
      title: "Polimento automotivo",
      description: "Serviço para recuperar brilho e melhorar a aparência da pintura.",
      price: "Consulte",
      tag: "Estética",
      tagColor: "bg-rose-500/10 text-rose-400 border border-rose-500/20",
      image: "/src/assets/images/service_polish_1781145355667.png" // Our generated dual action orbital paint polishing
    },
    {
      id: "cristalizacao",
      title: "Cristalização",
      description: "Proteção e brilho extra para valorizar a pintura do veículo.",
      price: "Consulte",
      tag: "Destaque",
      tagColor: "bg-amber-400/10 text-amber-400 border border-amber-400/20",
      image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=600&q=80" // Premium glossy car reflections
    },
    {
      id: "freios-e-suspensao",
      title: "Freios e suspensão",
      description: "Avaliação e manutenção de itens importantes para segurança.",
      price: "Consulte",
      tag: "Segurança",
      tagColor: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
      image: "https://images.unsplash.com/photo-1530047625168-4b29bb722cd7?auto=format&fit=crop&w=600&q=80" // Clean auto lift frame repair
    },
    {
      id: "diagnostico-automotivo",
      title: "Diagnóstico automotivo",
      description: "Verificação inicial para identificar falhas e orientar o serviço.",
      price: "Consulte",
      tag: "Oficina",
      tagColor: "bg-zinc-400/10 text-zinc-300 border border-zinc-400/20",
      image: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=600&q=80" // High precision OBD dashboard scan tool
    }
  ],

  // Packaged packages (3 packages)
  packages: [
    {
      id: "pacote-lava-jato",
      title: "Pacote Lava-jato",
      description: "Lavagem externa + aspiração interna + limpeza dos painéis.",
      price: "R$ 59,90",
      features: [
        "Ducha externa detalhada",
        "Aspiração completa de estofados",
        "Reforço de brilho nos pneus",
        "Limpeza de painel e console"
      ],
      tag: "Econômico",
      image: "/src/assets/images/service_foam_1781145341207.png"
    },
    {
      id: "pacote-revisao-basica",
      title: "Pacote Revisão Básica",
      description: "Verificação de óleo, fluidos, pneus, freios e itens de segurança.",
      price: "Consulte",
      features: [
        "Verificação de óleo & fluidos",
        "Inspeção de pastilhas de freio",
        "Calibragem & análise de pneus",
        "Checklist de 30 itens cruciais"
      ],
      tag: "Segurança Máxima",
      image: "/src/assets/images/service_engine_1781145327612.png"
    },
    {
      id: "pacote-estetica-premium",
      title: "Pacote Estética Premium",
      description: "Lavagem completa + higienização interna + polimento.",
      price: "Consulte",
      features: [
        "Higienização profunda interna",
        "Polimento manual de brilho",
        "Descontaminação da pintura",
        "Lavagem de motor inclusa"
      ],
      tag: "Destaque Estética",
      image: "/src/assets/images/service_polish_1781145355667.png"
    }
  ],

  // Gallery items (6 high impact images)
  gallery: [
    {
      title: "Efeito Espelhamento Tridimensional",
      description: "Carro limpo com brilho profundo sob refletores profissionais.",
      image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Banho de Espuma Detalhado",
      description: "Lavagem ativa com shampoo neutro protetor.",
      image: "/src/assets/images/service_foam_1781145341207.png"
    },
    {
      title: "Diagnóstico Motor de Performance",
      description: "Scanner ativo e checklist integral sob o capô.",
      image: "/src/assets/images/service_engine_1781145327612.png"
    },
    {
      title: "Serviço de Troca Lubrificante",
      description: "Substituição precisa de óleo e filtros recomendados pelo fabricante.",
      image: "https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Polimento Técnico Paint Correction",
      description: "Eliminação profunda de hologramas e micro-riscos.",
      image: "/src/assets/images/service_polish_1781145355667.png"
    },
    {
      title: "Cabine Interna Higienizada",
      description: "Painéis e bancos restaurados e desinfetados.",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80"
    }
  ],

  // How to request steps (4 items)
  steps: [
    {
      number: "01",
      title: "Escolha o serviço",
      description: "Veja as opções de oficina, lava-jato e estética automotiva."
    },
    {
      number: "02",
      title: "Clique no WhatsApp",
      description: "Envie sua mensagem direto para a nossa equipe ágil."
    },
    {
      number: "03",
      title: "Informe seu veículo",
      description: "Diga qual o modelo, o ano e o serviço desejado."
    },
    {
      number: "04",
      title: "Combine o atendimento",
      description: "Receba orientações, orçamento inicial ou agende já seu horário."
    }
  ],

  // Key Brand Differentials / Bullet points
  differentials: [
    "Atendimento rápido e descomplicado",
    "Serviços especializados para mecânica de suspensão e estética premium",
    "Equipe altamente qualificada e cuidadosa",
    "Orçamentos sem surpresas direto no WhatsApp",
    "Localização facilitada no Centro de Nova Iguaçu",
    "Inspeção e cuidado com cada pequeno detalhe do veículo"
  ]
};

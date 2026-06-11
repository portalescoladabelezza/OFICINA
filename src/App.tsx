import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PromoStrip from "./components/PromoStrip";
import Services from "./components/Services";
import Packages from "./components/Packages";
import Gallery from "./components/Gallery";
import HowItWorks from "./components/HowItWorks";
import About from "./components/About";
import CallToAction from "./components/CallToAction";
import LocationHours from "./components/LocationHours";
import Footer from "./components/Footer";
import WhatsAppFloating from "./components/WhatsAppFloating";

export default function App() {
  // Update browser-level SEO headers dynamically on page mount
  useEffect(() => {
    document.title = "Auto Prime — Oficina, Lava-jato e Estética Automotiva";
    
    // Manage SEO description tag
    let metaDescription = document.querySelector('meta[name="description"]');
    const descriptionText = "Serviços de oficina, troca de óleo, revisão, lava-jato, higienização e estética automotiva com atendimento pelo WhatsApp.";
    
    if (metaDescription) {
      metaDescription.setAttribute("content", descriptionText);
    } else {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      metaDescription.setAttribute("content", descriptionText);
      document.head.appendChild(metaDescription);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] font-sans antialiased text-white selection:bg-red-600 selection:text-white">
      {/* Navigation Header */}
      <Header />

      {/* Main Structural Body Sections */}
      <main className="relative">
        <Hero />
        <PromoStrip />
        <Services />
        <Packages />
        <Gallery />
        <HowItWorks />
        <About />
        <CallToAction />
        <LocationHours />
      </main>

      {/* Global Interactive Floating elements */}
      <WhatsAppFloating />

      {/* Navigation Footer */}
      <Footer />
    </div>
  );
}

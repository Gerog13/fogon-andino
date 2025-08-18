"use client";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Star, MapPin } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const contactSection = document.getElementById(sectionId);
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-light-beige overflow-hidden"
    >
      {/* Hero content */}
      <div
        ref={heroRef}
        className={`relative z-10 text-center px-4 max-w-5xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Decorative line */}
        <div
          className={`w-24 h-0.5 bg-gradient-to-r from-transparent via-fire-red to-transparent mx-auto mb-8 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
          }`}
        />

        <h1
          className={`font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-navy-blue mb-6 leading-tight transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Fogón Andino
        </h1>

        <p
          className={`font-serif text-xl md:text-2xl text-navy-blue mb-4 opacity-90 transition-all duration-1000 delay-900 ${
            isVisible ? "opacity-90 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Catering con alma mendocina
        </p>

        <p
          className={`font-sans text-lg md:text-xl text-navy-blue/80 mb-4 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-1100 ${
            isVisible ? "opacity-80 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Llevamos el calor del fogón y la fuerza de la montaña a tu evento
        </p>

        {/* Location indicator */}
        <div
          className={`flex items-center justify-center gap-2 mb-8 transition-all duration-1000 delay-1300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <MapPin className="w-4 h-4 text-fire-red" />
          <span className="text-navy-blue/70 font-medium">
            Mendoza, Argentina
          </span>
        </div>

        <Button
          size="lg"
          onClick={() => scrollToSection("contact")}
          className={`group relative overflow-hidden cursor-pointer bg-fire-red hover:bg-fire-red/90 text-white font-sans font-medium px-10 py-5 text-lg rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl transition-all duration-1000 delay-1500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="relative z-10">Solicitar Presupuesto</span>
          <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        </Button>

        {/* Scroll indicator */}
        <div
          className={`mt-24 transition-all duration-1000 delay-1700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div
            className="flex flex-col items-center gap-2 text-navy-blue/60 hover:text-navy-blue/80 transition-colors duration-300 cursor-pointer"
            onClick={() => scrollToSection("services")}
          >
            <span className="text-sm font-medium">Descubre más</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </div>
        </div>
      </div>

      {/* Enhanced background image overlay */}
      <div className="absolute inset-0">
        <img
          src="/cordillera-catering.avif"
          alt="Mesa de catering con montañas de Mendoza"
          className="w-full h-full object-cover opacity-25 transition-opacity duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-light-beige/40 to-light-beige/90" />

        {/* Subtle floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-32 right-20 w-64 h-64 bg-gradient-to-r from-orange-200/10 to-red-200/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-32 left-20 w-48 h-48 bg-gradient-to-r from-yellow-200/10 to-orange-200/10 rounded-full blur-3xl animate-pulse animation-delay-2000" />
        </div>
      </div>

      {/* Logo positioned top-left */}
      <div
        className={`absolute top-8 left-8 z-20 transition-all duration-1000 delay-200 ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
        }`}
      >
        <div className="w-16 h-16 bg-light-beige rounded-full flex items-center justify-center shadow-lg">
          <Image
            src="/simple-logo.png"
            alt="Fogón Andino"
            priority
            width={64}
            height={64}
            className="w-8 h-8 object-contain"
          />
        </div>
      </div>
    </section>
  );
}

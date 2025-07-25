import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-hero animate-gradient">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-brand-turquoise/20 rounded-full animate-float blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-brand-gold/20 rounded-full animate-float blur-xl" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-brand-navy/10 rounded-full animate-float blur-2xl" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-2 sm:px-4 md:px-6 py-10 md:py-20">
        <div className="flex flex-col items-center text-center space-y-6 md:space-y-8">
          {/* Logo mejorado con efectos premium */}
          <div className="relative animate-glow">
            <div className="absolute inset-0 bg-brand-turquoise/30 rounded-full blur-2xl animate-pulse"></div>
            <div className="relative bg-white/10 backdrop-blur-sm p-4 md:p-8 rounded-3xl border border-white/20 shadow-2xl">
              <img 
                src="/logo.jpeg" 
                alt="Mi Medallo Logo" 
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 object-contain drop-shadow-2xl"
              />
            </div>
            {/* Anillos decorativos */}
            <div className="absolute -inset-2 sm:-inset-4 border-2 border-brand-gold/30 rounded-full animate-pulse"></div>
            <div className="absolute -inset-4 sm:-inset-8 border border-brand-turquoise/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          {/* Main Title */}
          <div className="space-y-2 sm:space-y-4 max-w-2xl md:max-w-4xl">
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white hero-text-glow">
              Negocios reales, acceso directo
            </h1>
            <p className="text-base sm:text-xl md:text-2xl text-white/90 font-light leading-relaxed">
              El directorio premium de empresas y experiencias auténticas en Colombia.
            </p>
          </div>

          {/* Subtitle with gradient */}
          <div className="max-w-md sm:max-w-2xl md:max-w-3xl">
            <p className="text-sm sm:text-lg text-white/80 leading-relaxed">
              Encuentra y conecta con negocios verificados, sin intermediarios, desde cualquier dispositivo.
            </p>
          </div>

          {/* CTA Chips Premium */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 pt-6 md:pt-8 w-full max-w-2xl mx-auto">
            <span className="flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 text-white font-semibold shadow-lg text-sm sm:text-base">
              <ArrowRight className="h-4 w-4" />
              Explora negocios reales
            </span>
            <span className="flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 text-white font-semibold shadow-lg text-sm sm:text-base">
              <MapPin className="h-4 w-4" />
              Directorio turístico y empresarial
            </span>
            <span className="flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-amber-400 via-yellow-500 to-yellow-600 text-white font-semibold shadow-lg text-sm sm:text-base">
              <Sparkles className="h-4 w-4" />
              Acceso seguro y directo
            </span>
          </div>

          {/* Features highlight */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 pt-8 sm:pt-12 text-white/70">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-brand-gold" />
              <span className="text-xs sm:text-base">Directorio Premium</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-brand-gold" />
              <span className="text-xs sm:text-base">Negocios Auténticos</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-brand-gold" />
              <span className="text-xs sm:text-base">Acceso Directo y Seguro</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
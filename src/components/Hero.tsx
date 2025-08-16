import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MapPin, Sparkles, Percent, BookOpen, Instagram, Heart, GraduationCap } from "lucide-react";
import DiscountSlider from "./DiscountSlider";

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
          
          {/* Slider de Red de Descuentos */}
          <DiscountSlider />

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

          {/* NEGOCIOS DESTACADOS - Botones Premium */}
          <div className="w-full max-w-6xl mx-auto pt-8 md:pt-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-serif drop-shadow-lg">NEGOCIOS DESTACADOS</h3>
              <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto">
                Descubre nuestras ofertas exclusivas y mantente conectado con nosotros
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4 md:gap-6">
              {/* Botón Descuentos Especiales en Turismo */}
              <Card className="luxury-card border-0 p-0 overflow-hidden group hover:scale-105 transition-all duration-500 bg-gradient-to-br from-red-500 via-pink-500 to-orange-500 shadow-2xl hover:shadow-[0_20px_40px_0_rgba(255,0,100,0.3)]">
                <CardContent className="p-6 md:p-8 text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-400/20 via-pink-400/20 to-orange-400/20 animate-pulse"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Percent className="h-8 w-8 md:h-10 md:w-10 text-white animate-bounce" />
                    </div>
                    <Badge className="bg-yellow-400 text-black font-bold text-xs mb-3 md:mb-4 animate-pulse">
                      ¡OFERTA ESPECIAL!
                    </Badge>
                    <h4 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 drop-shadow-lg">
                      Descuentos Especiales
                    </h4>
                    <p className="text-white/90 text-sm mb-4 md:mb-6 leading-relaxed">
                      Ofertas exclusivas en turismo, hoteles y experiencias únicas
                    </p>
                    <Button 
                      size="lg" 
                      className="w-full bg-white text-red-600 hover:bg-yellow-400 hover:text-black font-bold py-2 md:py-3 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 border-2 border-white/30 text-sm md:text-base"
                      asChild
                    >
                      <a href="https://paraelviaje.tuguiadeturismo.com/" target="_blank" rel="noopener noreferrer">
                        Ver Descuentos
                        <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                      </a>
                    </Button>
                  </div>
                  <div className="absolute -top-4 -right-4 w-20 h-20 md:w-24 md:h-24 bg-yellow-400/30 rounded-full animate-float"></div>
                  <div className="absolute -bottom-4 -left-4 w-24 h-24 md:w-32 md:h-32 bg-white/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
                </CardContent>
              </Card>

              {/* Botón Cursos de Formación */}
              <Card className="luxury-card border-0 p-0 overflow-hidden group hover:scale-105 transition-all duration-500 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 shadow-2xl hover:shadow-[0_20px_40px_0_rgba(0,100,255,0.3)]">
                <CardContent className="p-6 md:p-8 text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-indigo-400/20 to-purple-400/20 animate-pulse"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                      <BookOpen className="h-8 w-8 md:h-10 md:w-10 text-white animate-bounce" />
                    </div>
                    <Badge className="bg-green-400 text-black font-bold text-xs mb-3 md:mb-4 animate-pulse">
                      EDUCACIÓN PREMIUM
                    </Badge>
                    <h4 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 drop-shadow-lg">
                      Cursos de Formación
                    </h4>
                    <p className="text-white/90 text-sm mb-4 md:mb-6 leading-relaxed">
                      Capacítate con nuestros cursos especializados y certificaciones
                    </p>
                    <Button 
                      size="lg" 
                      className="w-full bg-white text-blue-600 hover:bg-green-400 hover:text-black font-bold py-2 md:py-3 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 border-2 border-white/30 text-sm md:text-base"
                      asChild
                    >
                      <a href="https://app.hugex.co/p/form/bgheRWMHHS4POqApBIqc2iWoIJC-eyt8bXiLrnyDUpVb1KmRWQ0WyshDBzDUo1QjTP0kE4XEDZJYSb05ArFgSQI_-8_2t5zNN7HpR4twY_GX8AOhLwwtqZmpNdACbD_5" target="_blank" rel="noopener noreferrer">
                        Inscribirse
                        <GraduationCap className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                      </a>
                    </Button>
                  </div>
                  <div className="absolute -top-4 -right-4 w-20 h-20 md:w-24 md:h-24 bg-green-400/30 rounded-full animate-float"></div>
                  <div className="absolute -bottom-4 -left-4 w-24 h-24 md:w-32 md:h-32 bg-white/10 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
                </CardContent>
              </Card>

              {/* Botón Instagram */}
              <Card className="luxury-card border-0 p-0 overflow-hidden group hover:scale-105 transition-all duration-500 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 shadow-2xl hover:shadow-[0_20px_40px_0_rgba(255,0,150,0.3)]">
                <CardContent className="p-6 md:p-8 text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-400/20 via-purple-400/20 to-indigo-400/20 animate-pulse"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Instagram className="h-8 w-8 md:h-10 md:w-10 text-white animate-bounce" />
                    </div>
                    <Badge className="bg-pink-400 text-white font-bold text-xs mb-3 md:mb-4 animate-pulse">
                      SÍGUENOS
                    </Badge>
                    <h4 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 drop-shadow-lg">
                      @mimedallo2025
                    </h4>
                    <p className="text-white/90 text-sm mb-4 md:mb-6 leading-relaxed">
                      Mantente al día con las últimas novedades y contenido exclusivo
                    </p>
                    <Button 
                      size="lg" 
                      className="w-full bg-white text-pink-600 hover:bg-pink-400 hover:text-white font-bold py-2 md:py-3 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 border-2 border-white/30 text-sm md:text-base"
                      asChild
                    >
                      <a href="https://www.instagram.com/mimedallo2025?igsh=MXBnczJiMG0zcGkycw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
                        Seguir
                        <Heart className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                      </a>
                    </Button>
                  </div>
                  <div className="absolute -top-4 -right-4 w-20 h-20 md:w-24 md:h-24 bg-pink-400/30 rounded-full animate-float"></div>
                  <div className="absolute -bottom-4 -left-4 w-24 h-24 md:w-32 md:h-32 bg-white/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
                </CardContent>
              </Card>
            </div>
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
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MapPin, Mail, Phone, Globe, Instagram, Facebook, Linkedin, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);
  return (
    <footer className="bg-gradient-primary text-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-10 md:mb-14">
          {/* Brand */}
          <div className="lg:col-span-2 flex flex-col items-start space-y-4 sm:space-y-6">
            <div className="flex items-center gap-3 mb-2 sm:mb-4 transform hover:scale-105 transition-transform duration-300">
              <img 
                src="/logo.jpeg" 
                alt="Mi Medallo Logo" 
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
              />
              <h3 className="text-lg sm:text-2xl font-bold">Mi Medallo</h3>
            </div>
            <p className="text-white/80 leading-relaxed mb-4 sm:mb-6 max-w-md text-sm sm:text-base backdrop-blur-sm bg-black/5 p-3 rounded-lg">
              Transformamos el turismo colombiano con tecnología de vanguardia, 
              conectando viajeros con experiencias auténticas y sostenibles.
            </p>
            <div className="flex gap-3 sm:gap-5">
              {[
                { icon: Instagram, href: "#" },
                { icon: Facebook, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Globe, href: "#" }
              ].map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 hover:bg-white/20 text-white hover:scale-110 transition-all duration-300 shadow-lg"
                  asChild
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    <social.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="backdrop-blur-sm bg-black/5 p-4 rounded-lg hover:bg-black/10 transition-all duration-300">
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 border-b border-white/20 pb-2">Enlaces Rápidos</h4>
            <ul className="space-y-2 sm:space-y-3">
              {[
                "Sobre Nosotros",
                "Servicios",
                "Tecnología NFC",
                "Sostenibilidad",
                "Contacto"
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-white/70 hover:text-white transition-colors duration-200 text-sm sm:text-base flex items-center group"
                  >
                    <ChevronRight className="h-3 w-3 mr-1 text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="backdrop-blur-sm bg-black/5 p-4 rounded-lg hover:bg-black/10 transition-all duration-300">
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 border-b border-white/20 pb-2">Contacto</h4>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-2 sm:gap-3 hover:bg-white/5 p-1 rounded-md transition-colors duration-200">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-brand-gold mt-0.5" />
                <div className="text-white/70 text-xs sm:text-base">
                  <p>Medellín, Colombia</p>
                  <p>Zona Digital</p>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 hover:bg-white/5 p-1 rounded-md transition-colors duration-200">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-brand-gold" />
                <a 
                  href="mailto:info@mimedallo.com" 
                  className="text-white/70 hover:text-white transition-colors text-xs sm:text-base flex items-center"
                >
                  info@mimedallo.com
                  <span className="ml-1 text-blue-300 text-[10px] sm:text-xs">(Enviar correo)</span>
                </a>
              </div>
              <div className="flex items-start gap-2 sm:gap-3 hover:bg-white/5 p-1 rounded-md transition-colors duration-200">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-brand-gold mt-0.5" />
                <div className="text-white/70 text-xs sm:text-base">
                  <a href="https://wa.me/573162074472?text=Hola%20Samy,%20me%20interesa%20conocer%20más%20sobre%20Mi%20Medallo" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors flex items-center mb-2 hover:translate-x-1 duration-300">
                    Samy: +57 316 2074472
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    <span className="ml-1 text-green-300 text-[10px] sm:text-xs">(Chat WhatsApp)</span>
                  </a>
                  <a href="https://wa.me/573042431876?text=Hola%20Carmen,%20me%20interesa%20conocer%20más%20sobre%20Mi%20Medallo" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors flex items-center mb-2 hover:translate-x-1 duration-300">
                    Carmen: +57 304 2431876
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    <span className="ml-1 text-green-300 text-[10px] sm:text-xs">(Chat WhatsApp)</span>
                  </a>
                  <a href="https://wa.me/573174027066?text=Hola%20Jose,%20me%20interesa%20conocer%20más%20sobre%20Mi%20Medallo" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors flex items-center hover:translate-x-1 duration-300">
                    Jose: +57 317 4027066
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    <span className="ml-1 text-green-300 text-[10px] sm:text-xs">(Chat WhatsApp)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-white/20 mb-6 md:mb-8 w-full max-w-6xl mx-auto" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 backdrop-blur-sm bg-black/5 p-4 rounded-lg">
          <div className="text-white/60 text-xs sm:text-sm text-center md:text-left">
            © 2025 Mi Medallo. Todos los derechos reservados.
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-xs sm:text-sm items-center">
            <a href="#" className="text-white/60 hover:text-white transition-colors hover:underline">
              Política de Privacidad
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Términos de Uso
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute bottom-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -bottom-10 -left-10 w-40 h-40 sm:w-64 sm:h-64 bg-brand-turquoise/10 rounded-full animate-float blur-xl"></div>
        <div className="absolute top-20 right-10 w-20 h-20 sm:w-32 sm:h-32 bg-brand-gold/10 rounded-full animate-float blur-xl" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 right-0 w-48 h-48 sm:w-72 sm:h-72 bg-brand-gold/10 rounded-full animate-float blur-xl" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-10 left-1/3 w-24 h-24 bg-brand-turquoise/5 rounded-full animate-float blur-xl" style={{ animationDelay: '4s' }}></div>
      </div>
    </footer>
  );
};

export default Footer;
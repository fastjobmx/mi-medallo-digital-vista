import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MapPin, Mail, Phone, Globe, Instagram, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-primary text-white">
      <div className="container mx-auto px-2 sm:px-4 md:px-6 py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 md:mb-12">
          {/* Brand */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <img 
                src="/logo.jpeg" 
                alt="Mi Medallo Logo" 
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
              />
              <h3 className="text-lg sm:text-2xl font-bold">Mi Medallo</h3>
            </div>
            <p className="text-white/80 leading-relaxed mb-4 sm:mb-6 max-w-md text-sm sm:text-base">
              Transformamos el turismo colombiano con tecnología de vanguardia, 
              conectando viajeros con experiencias auténticas y sostenibles.
            </p>
            <div className="flex gap-3 sm:gap-4">
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
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 hover:bg-white/20 text-white"
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
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Enlaces Rápidos</h4>
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
                    className="text-white/70 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Contacto</h4>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-2 sm:gap-3">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-brand-gold mt-0.5" />
                <div className="text-white/70 text-xs sm:text-base">
                  <p>Medellín, Colombia</p>
                  <p>Zona Digital</p>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-brand-gold" />
                <a 
                  href="mailto:info@mimedallo.com" 
                  className="text-white/70 hover:text-white transition-colors text-xs sm:text-base"
                >
                  info@mimedallo.com
                </a>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-brand-gold" />
                <a 
                  href="tel:+57123456789" 
                  className="text-white/70 hover:text-white transition-colors text-xs sm:text-base"
                >
                  +57 (123) 456-7789
                </a>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-white/20 mb-6 md:mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4">
          <div className="text-white/60 text-xs sm:text-sm">
            © 2025 Mi Medallo. Todos los derechos reservados.
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-xs sm:text-sm items-center">
            <a href="#" className="text-white/60 hover:text-white transition-colors">
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
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-brand-turquoise/10 rounded-full animate-float blur-xl"></div>
      <div className="absolute bottom-32 right-32 w-40 h-40 bg-brand-gold/10 rounded-full animate-float blur-xl" style={{ animationDelay: '3s' }}></div>
    </footer>
  );
};

export default Footer;
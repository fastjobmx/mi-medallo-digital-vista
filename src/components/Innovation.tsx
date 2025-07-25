import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Smartphone, Leaf, Rocket, QrCode, Globe } from "lucide-react";

const Innovation = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Tecnología e Innovación
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
          <p className="text-xl text-muted-foreground mt-6 max-w-3xl mx-auto">
            Utilizamos tecnología de vanguardia para conectar personas con experiencias únicas y servicios profesionales excepcionales
          </p>
        </div>

        {/* Platform Technology Highlight */}
        <div className="mb-16">
          <Card className="luxury-card border-0 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center">
                      <Smartphone className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary">Plataforma Inteligente</h3>
                  </div>
                  
                  <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                    <p>
                      Nuestra plataforma utiliza inteligencia artificial y algoritmos avanzados para conectar 
                      usuarios con las mejores experiencias turísticas y servicios profesionales. Ofrecemos 
                      recomendaciones personalizadas y búsquedas inteligentes.
                    </p>
                    <p>
                      Facilitamos conexiones auténticas entre viajeros y proveedores locales, así como entre 
                      clientes y profesionales especializados, garantizando calidad y confianza en cada interacción.
                    </p>
                  </div>

                  <Button className="premium-button">
                    Conoce Nuestra Plataforma
                    <Rocket className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                <div className="bg-gradient-primary p-8 lg:p-12 text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h4 className="text-xl font-bold mb-6">Características Principales</h4>
                    <div className="space-y-4">
                      {[
                        { icon: QrCode, text: "Búsqueda inteligente y personalizada" },
                        { icon: Leaf, text: "Plataforma 100% digital" },
                        { icon: Zap, text: "Conexiones instantáneas" },
                        { icon: Globe, text: "Alcance nacional e internacional" }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <item.icon className="h-5 w-5 text-brand-gold" />
                          <span className="text-white/90">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Floating decorations */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-brand-turquoise/20 rounded-full animate-float"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-brand-gold/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Innovation Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Smartphone,
              title: "Experiencias Digitales",
              description: "Interfaces intuitivas para turismo y servicios profesionales",
              color: "bg-brand-turquoise/10"
            },
            {
              icon: Leaf,
              title: "Sostenibilidad Digital",
              description: "Plataforma eco-friendly que promueve prácticas sostenibles",
              color: "bg-brand-gold/10"
            },
            {
              icon: Zap,
              title: "Eficiencia Optimizada",
              description: "Conexiones rápidas y procesos automatizados",
              color: "bg-brand-navy/10"
            },
            {
              icon: Globe,
              title: "Conectividad Global",
              description: "Red que conecta Colombia con usuarios globales",
              color: "bg-brand-turquoise/10"
            },
            {
              icon: QrCode,
              title: "Acceso Inteligente",
              description: "Búsquedas inteligentes y recomendaciones personalizadas",
              color: "bg-brand-gold/10"
            },
            {
              icon: Rocket,
              title: "Innovación Continua",
              description: "Desarrollo continuo de nuevas funcionalidades",
              color: "bg-brand-navy/10"
            }
          ].map((feature, index) => (
            <Card key={index} className="luxury-card border-0 p-6 group hover:scale-105 transition-all duration-300">
              <CardContent className="p-0 text-center">
                <div className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-glow`}>
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-primary text-white border-0 p-8 max-w-4xl mx-auto">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold mb-4">¿Listo para Conectar con Colombia?</h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                Únete a nuestra plataforma y descubre las mejores experiencias turísticas y servicios profesionales de Colombia
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" className="premium-button">
                  Explorar Plataforma
                </Button>
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                  Registrar Servicio
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Innovation;
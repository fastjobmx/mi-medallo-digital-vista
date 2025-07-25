import { Card, CardContent } from "@/components/ui/card";
import { Target, Lightbulb, Users } from "lucide-react";

const Mission = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Nuestra Misión
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
          <p className="text-xl text-muted-foreground mt-6 max-w-3xl mx-auto">
            Conectar a Colombia con el mundo a través de experiencias auténticas y servicios profesionales de calidad
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <Card className="luxury-card border-0 p-8">
              <CardContent className="p-0">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Crecimiento Digital</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Trabajamos con pasión para conectar turistas con experiencias auténticas y usuarios con 
                      servicios profesionales confiables. Nuestra plataforma fortalece la presencia digital 
                      de empresas turísticas y profesionales independientes en Colombia.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="luxury-card border-0 p-8">
              <CardContent className="p-0">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Innovación Tecnológica</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Utilizamos tecnología de vanguardia para crear conexiones significativas entre viajeros 
                      y destinos, así como entre clientes y profesionales especializados.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="luxury-card border-0 p-8">
              <CardContent className="p-0">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Alianzas Estratégicas</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Construimos alianzas estratégicas con operadores turísticos y profesionales de diversas 
                      áreas para ofrecer un ecosistema completo de servicios de calidad.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative z-10 bg-gradient-primary rounded-3xl p-8 text-white">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-20 h-20 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-10 w-10 text-brand-gold" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Conexión y Calidad</h3>
                  <p className="text-white/80 leading-relaxed">
                    Creamos puentes digitales que conectan personas con experiencias y servicios excepcionales en Colombia.
                  </p>
                </div>
                
                <div className="grid grid-cols-3 gap-4 pt-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-brand-gold">500+</div>
                    <div className="text-sm text-white/70">Servicios</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-brand-gold">24/7</div>
                    <div className="text-sm text-white/70">Soporte</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-brand-gold">5★</div>
                    <div className="text-sm text-white/70">Calidad</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating decoration */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-turquoise/20 rounded-full animate-float blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-brand-gold/20 rounded-full animate-float blur-xl" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
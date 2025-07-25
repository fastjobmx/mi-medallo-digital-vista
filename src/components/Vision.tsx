import { Card, CardContent } from "@/components/ui/card";
import { Compass, Globe, Shield, Leaf } from "lucide-react";

const Vision = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Nuestra Visión 2030
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
          <p className="text-xl text-muted-foreground mt-6 max-w-3xl mx-auto">
            Ser la plataforma integral líder en Colombia que conecta el mundo con nuestras riquezas turísticas y servicios profesionales de excelencia
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: Globe,
              title: "Alcance Global",
              description: "Conectando Colombia con usuarios globales"
            },
            {
              icon: Shield,
              title: "Servicios Confiables",
              description: "Experiencias y servicios verificados y seguros"
            },
            {
              icon: Compass,
              title: "Tecnología Avanzada",
              description: "Impulsado por las últimas innovaciones tecnológicas"
            },
            {
              icon: Leaf,
              title: "Sostenibilidad",
              description: "Turismo responsable y desarrollo sostenible"
            }
          ].map((item, index) => (
            <Card key={index} className="luxury-card border-0 p-6 text-center group hover:scale-105 transition-all duration-300">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-glow">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Vision Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="luxury-card border-0 p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-primary mb-6">Colombia 2030: Plataforma Integral</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Para el año 2030, seremos la plataforma integral líder que conecta a Colombia con el mundo, 
                    ofreciendo tanto experiencias turísticas excepcionales como servicios profesionales de 
                    la más alta calidad.
                  </p>
                  <p>
                    Facilitamos conexiones auténticas entre viajeros y destinos, así como entre clientes y 
                    profesionales especializados, todo respaldado por tecnología de vanguardia y estándares de calidad excepcionales.
                  </p>
                  <p>
                    Nuestro compromiso con la sostenibilidad y la excelencia garantiza que tanto las experiencias 
                    turísticas como los servicios profesionales contribuyan al desarrollo positivo del país.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="bg-gradient-primary text-white border-0 p-6">
              <CardContent className="p-0 text-center">
                <div className="text-4xl font-bold text-brand-gold mb-2">2030</div>
                <div className="text-white/80">Año objetivo</div>
              </CardContent>
            </Card>

            <Card className="luxury-card border-0 p-6">
              <CardContent className="p-0">
                <h4 className="font-semibold text-primary mb-3">Impacto Esperado</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Usuarios activos</span>
                    <span className="font-semibold text-primary">1M+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Servicios disponibles</span>
                    <span className="font-semibold text-primary">500+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Satisfacción cliente</span>
                    <span className="font-semibold text-primary">98%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
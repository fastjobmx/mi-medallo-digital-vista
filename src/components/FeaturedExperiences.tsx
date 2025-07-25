import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Play, 
  Users, 
  Clock, 
  Star, 
  ArrowRight, 
  Heart,
  Shield,
  Award
} from "lucide-react";

// Import generated images
import coffeeHero from "@/assets/coffee-hero.jpg";
import whaleWatching from "@/assets/whale-watching.jpg";
import ciudadPerdida from "@/assets/ciudad-perdida.jpg";

const FeaturedExperiences = () => {
  const experiences = [
    {
      id: 1,
      title: "Coffee Tour Premium en el Eje Cafetero",
      location: "Quindío, Colombia",
      duration: "8 horas",
      rating: 4.9,
      reviews: 234,
      price: "299.000",
      image: coffeeHero,
      category: "Gastronomía",
      featured: true,
      highlights: ["Hacienda tradicional", "Cata profesional", "Transporte incluido"]
    },
    {
      id: 2,
      title: "Avistamiento de Ballenas en el Pacífico",
      location: "Chocó, Colombia",
      duration: "6 horas",
      rating: 4.8,
      reviews: 167,
      price: "450.000",
      image: whaleWatching,
      category: "Ecoturismo",
      featured: true,
      highlights: ["Temporada de ballenas", "Guía especializado", "Almuerzo incluido"]
    },
    {
      id: 3,
      title: "Trekking Ciudad Perdida",
      location: "Magdalena, Colombia",
      duration: "4 días",
      rating: 4.7,
      reviews: 89,
      price: "890.000",
      image: ciudadPerdida,
      category: "Aventura",
      featured: false,
      highlights: ["Sitio arqueológico", "Guía indígena", "Campamento incluido"]
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-accent px-6 py-2 rounded-full text-primary font-semibold mb-6">
            <Award className="h-5 w-5" />
            Experiencias Destacadas
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Experiencias Premium en Colombia
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Descubre las mejores experiencias turísticas y servicios profesionales seleccionados especialmente para ti
          </p>
        </div>

        {/* Experiences Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {experiences.map((experience, index) => (
            <Card 
              key={experience.id}
              className={`luxury-card border-0 overflow-hidden group hover:scale-[1.02] transition-all duration-500 ${
                experience.featured ? 'lg:col-span-2 lg:row-span-1' : ''
              }`}
            >
              <CardContent className="p-0">
                <div className={`relative ${experience.featured ? 'h-96' : 'h-80'} overflow-hidden`}>
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{
                      backgroundImage: `url(${experience.image})`
                    }}
                  ></div>
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Content */}
                  <div className="relative z-10 p-6 h-full flex flex-col justify-between text-white">
                    {/* Top badges */}
                    <div className="flex justify-between items-start">
                      <div className="flex gap-2">
                        {experience.featured && (
                          <Badge className="bg-brand-gold text-primary font-semibold">
                            Destacado
                          </Badge>
                        )}
                        <Badge variant="secondary" className="bg-white/20 text-white border-0">
                          {experience.category}
                        </Badge>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="icon"
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full"
                      >
                        <Heart className="h-5 w-5" />
                      </Button>
                    </div>

                    {/* Bottom content */}
                    <div>
                      {/* Rating and reviews */}
                      <div className="flex items-center gap-4 mb-3">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-sm font-semibold">{experience.rating}</span>
                          <span className="text-xs text-white/70">({experience.reviews})</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-white/70">
                          <Clock className="h-4 w-4" />
                          {experience.duration}
                        </div>
                      </div>

                      {/* Title and location */}
                      <h3 className="text-xl font-bold mb-2 line-clamp-2">{experience.title}</h3>
                      <p className="text-white/80 text-sm mb-4">{experience.location}</p>

                      {/* Highlights */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {experience.highlights.slice(0, 2).map((highlight, idx) => (
                          <span 
                            key={idx}
                            className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>

                      {/* Price and CTA */}
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-sm text-white/70">Desde</span>
                          <div className="text-xl font-bold">
                            ${experience.price}
                            <span className="text-sm text-white/70 ml-1">COP</span>
                          </div>
                        </div>
                        <Button 
                          className="premium-button"
                          size="sm"
                        >
                          Reservar
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    {/* Play button overlay for featured */}
                    {experience.featured && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button 
                          variant="ghost" 
                          size="lg"
                          className="w-16 h-16 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full"
                        >
                          <Play className="h-8 w-8 ml-1" />
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: Shield, title: "Seguro y Confiable", description: "Experiencias verificadas" },
            { icon: Users, title: "Guías Locales", description: "Expertos certificados" },
            { icon: Award, title: "Calidad Premium", description: "Experiencias de lujo" },
            { icon: Heart, title: "100% Satisfacción", description: "Garantía total" }
          ].map((item, index) => (
            <Card key={index} className="luxury-card border-0 p-4 text-center">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-3">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-primary mb-1">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedExperiences;
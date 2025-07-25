import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Mountain, 
  Camera, 
  MapPin, 
  Compass, 
  TreePine, 
  Waves, 
  Building, 
  Coffee, 
  Utensils,
  Star,
  ArrowRight,
  Filter,
  Plane,
  Car,
  Home,
  Heart,
  Users,
  Briefcase,
  GraduationCap,
  ShoppingBag,
  Gamepad2,
  Music,
  Palette,
  Dumbbell,
  Stethoscope,
  Wrench,
  Truck,
  Calculator,
  Scale,
  Scissors,
  Shirt,
  Zap,
  Shield,
  Camera as CameraIcon,
  ExternalLink,
  Phone,
  Globe,
  Mail,
  Smartphone,
  Gift,
  Search as SearchIcon,
  Percent,
  BookOpen,
  Instagram
} from "lucide-react";
import { useState } from "react";
import Masonry from "react-masonry-css";

const Categories = () => {
  // Estado para filtro de categoría
  const [activeCategory, setActiveCategory] = useState('Todas');
  const [searchTerm, setSearchTerm] = useState("");

  // Negocios reales proporcionados por el usuario
  const businesses = [
    {
      name: "Casa Hotel Venecia",
      subdomain: "casahotelvenecia",
      url: "https://casahotelvenecia.tuguiadeturismo.com/",
      category: "Hoteles y Alojamiento",
      phone: "",
      location: "Medellín, Colombia",
      description: "Hotel boutique con ambiente familiar y servicios premium en el corazón de Medellín.",
      image: "photo-1506744038136-46273834b3fb",
      icon: Home,
      rating: 4.8,
      featured: true
    },
    {
      name: "Cámara Lúcida",
      subdomain: "camaralucida",
      url: "https://camaralucida.tuguiadeturismo.com/",
      category: "Fotografía y Arte",
      phone: "",
      location: "Medellín, Colombia",
      description: "Estudio fotográfico profesional y arte visual para eventos y empresas.",
      image: "photo-1519125323398-675f0ddb6308",
      icon: Camera,
      rating: 4.9,
      featured: true
    },
    {
      name: "CV Alfonso López",
      subdomain: "cvalfonsolopez",
      url: "https://cvalfonsolopez.tuguiadeturismo.com/",
      category: "Centros Vacacionales",
      phone: "",
      location: "Colombia",
      description: "Centro vacacional con piscina, recreación y espacios para toda la familia.",
      image: "photo-1507525428034-b723cf961d3e",
      icon: Briefcase,
      rating: 4.7,
      featured: false
    },
    {
      name: "La Casona",
      subdomain: "lacasona",
      url: "https://lacasona.tuguiadeturismo.com/",
      category: "Restaurantes",
      phone: "",
      location: "Medellín, Colombia",
      description: "Restaurante de comida típica y ambiente tradicional antioqueño.",
      image: "photo-1414235077428-338989a2e8c0",
      icon: Utensils,
      rating: 4.8,
      featured: true
    },
    {
      name: "Rentas AMG",
      subdomain: "rentasamg",
      url: "https://rentasamg.tuguiadeturismo.com/",
      category: "Transporte y Alquiler",
      phone: "3014480448",
      location: "Medellín, Colombia",
      description: "Alquiler de vehículos premium y servicios de transporte ejecutivo.",
      image: "photo-1449824913935-59a10b8d2000",
      icon: Car,
      rating: 4.8,
      featured: true
    },
    {
      name: "Imperium Essence",
      subdomain: "imperiumessence",
      url: "https://imperiumessence.tuguiadeturismo.com/",
      category: "Belleza y Cuidado Personal",
      phone: "3150816169",
      location: "Colombia",
      description: "Productos de belleza y cuidado personal premium.",
      image: "photo-1517841905240-472988babdf9",
      icon: Heart,
      rating: 4.9,
      featured: true
    },
    {
      name: "Tecno Movil Tech",
      subdomain: "tecnomoviltech",
      url: "https://tecnomoviltech.tuguiadeturismo.com/",
      category: "Tecnología",
      phone: "3507503233",
      location: "Colombia",
      description: "Servicios técnicos especializados en tecnología móvil y reparación de celulares.",
      image: "photo-1519389950473-47ba0277781c",
      icon: Smartphone,
      rating: 4.7,
      featured: false
    },
    {
      name: "Soccer Star",
      subdomain: "soccerstar",
      url: "https://soccerstar.tuguiadeturismo.com/",
      category: "Deportes y Academias",
      phone: "",
      location: "Colombia",
      description: "Academia de fútbol y formación deportiva para niños y jóvenes.",
      image: "photo-1571019613454-1cb2f99b2d8b",
      icon: Users,
      rating: 4.8,
      featured: false
    },
    {
      name: "Anit Swimwear",
      subdomain: "anitswimwear",
      url: "https://anitswimwear.tuguiadeturismo.com/",
      category: "Moda y Ropa",
      phone: "",
      location: "Colombia",
      description: "Ropa de baño y moda para playa, diseños exclusivos.",
      image: "photo-1512436991641-6745cdb1723f",
      icon: Shirt,
      rating: 4.7,
      featured: false
    },
    {
      name: "Los Pits Barber",
      subdomain: "lospitsbarber",
      url: "https://lospitsbarber.tuguiadeturismo.com/",
      category: "Barbería y Estética",
      phone: "",
      location: "Colombia",
      description: "Barbería moderna y cuidado masculino profesional.",
      image: "photo-1515378791036-0648a3ef77b2",
      icon: Heart,
      rating: 4.8,
      featured: false
    },
    {
      name: "Car Dealer Imports",
      subdomain: "cardealerimports",
      url: "https://cardealerimports.tuguiadeturismo.com/",
      category: "Importación de Autos",
      phone: "",
      location: "Colombia",
      description: "Importación y venta de autos de lujo y alta gama.",
      image: "photo-1503736334956-4c8f8e92946d",
      icon: Car,
      rating: 4.9,
      featured: true
    },
    {
      name: "Mundo Sorpresa",
      subdomain: "mundosorpresa",
      url: "https://mundosorpresa.tuguiadeturismo.com/",
      category: "Regalos y Fiestas",
      phone: "",
      location: "Colombia",
      description: "Regalos, sorpresas y decoración para fiestas y eventos.",
      image: "photo-1513475382585-d06e58bcb0e0",
      icon: Gift,
      rating: 4.8,
      featured: false
    },
    {
      name: "Buenos Aires Coffee",
      subdomain: "buenosairescoffe",
      url: "https://buenosairescoffe.tuguiadeturismo.com/",
      category: "Café y Gastronomía",
      phone: "",
      location: "Colombia",
      description: "Café de especialidad y experiencias baristas únicas.",
      image: "photo-1447933601403-0c6688de566e",
      icon: Coffee,
      rating: 4.9,
      featured: true
    },
    {
      name: "Cedbos",
      subdomain: "cedbos",
      url: "https://cedbos.tuguiadeturismo.com/",
      category: "Educación y Formación",
      phone: "",
      location: "Colombia",
      description: "Centro educativo y de formación integral.",
      image: "photo-1464983953574-0892a716854b",
      icon: GraduationCap,
      rating: 4.7,
      featured: false
    },
    {
      name: "Palm Beach",
      subdomain: "palmbeach",
      url: "https://palmbeach.tuguiadeturismo.com/",
      category: "Turismo y Playa",
      phone: "",
      location: "Colombia",
      description: "Destino turístico de playa y descanso con ambiente tropical.",
      image: "photo-1507525428034-b723cf961d3e",
      icon: Waves,
      rating: 4.8,
      featured: false
    },
    {
      name: "Venturs",
      subdomain: "venturs",
      url: "https://venturs.tuguiadeturismo.com/",
      category: "Aventura y Deportes",
      phone: "",
      location: "Colombia",
      description: "Deportes extremos, aventura y experiencias únicas en Colombia.",
      image: "photo-1469474968028-56623f02e42e",
      icon: Mountain,
      rating: 4.9,
      featured: true
    }
  ];

  // Derivar categorías únicas de los negocios
  const categoriesList = Array.from(new Set(businesses.map(b => b.category)));
  const categoryIcons = {
    "Hoteles y Alojamiento": Home,
    "Fotografía y Arte": Camera,
    "Centros Vacacionales": Briefcase,
    "Restaurantes": Utensils,
    "Transporte y Alquiler": Car,
    "Belleza y Cuidado Personal": Heart,
    "Tecnología": Smartphone,
    "Deportes y Academias": Users,
    "Moda y Ropa": Shirt,
    "Barbería y Estética": Heart,
    "Importación de Autos": Car,
    "Regalos y Fiestas": Gift,
    "Café y Gastronomía": Coffee,
    "Educación y Formación": GraduationCap,
    "Turismo y Playa": Waves,
    "Aventura y Deportes": Mountain
  };
  const categoryColors = {
    "Hoteles y Alojamiento": "from-blue-400 to-blue-600",
    "Fotografía y Arte": "from-pink-400 to-pink-600",
    "Centros Vacacionales": "from-green-400 to-green-600",
    "Restaurantes": "from-yellow-400 to-yellow-600",
    "Transporte y Alquiler": "from-gray-400 to-gray-600",
    "Belleza y Cuidado Personal": "from-rose-400 to-rose-600",
    "Tecnología": "from-indigo-400 to-indigo-600",
    "Deportes y Academias": "from-emerald-400 to-emerald-600",
    "Moda y Ropa": "from-fuchsia-400 to-fuchsia-600",
    "Barbería y Estética": "from-orange-400 to-orange-600",
    "Importación de Autos": "from-gray-500 to-gray-800",
    "Regalos y Fiestas": "from-red-400 to-red-600",
    "Café y Gastronomía": "from-amber-400 to-amber-600",
    "Educación y Formación": "from-cyan-400 to-cyan-600",
    "Turismo y Playa": "from-teal-400 to-teal-600",
    "Aventura y Deportes": "from-lime-400 to-lime-600"
  };

  // Función para normalizar texto (sin tildes, minúsculas)
  function normalize(str) {
    return str
      .toLowerCase()
      .normalize('NFD')
      .replace(/\p{Diacritic}/gu, '');
  }

  // Buscador inteligente IA ultra premium con sugerencias y resaltado
  const [showSuggestions, setShowSuggestions] = useState(false);
  const normalizedTerm = normalize(searchTerm);
  const searchKeywords = normalizedTerm.split(/\s+/).filter(Boolean);

  function matchesAllKeywords(text) {
    const norm = normalize(text);
    return searchKeywords.every(kw => norm.includes(kw));
  }

  const suggestionResults = businesses.filter(business =>
    matchesAllKeywords(business.name) ||
    matchesAllKeywords(business.category) ||
    matchesAllKeywords(business.description) ||
    matchesAllKeywords(business.subdomain) ||
    matchesAllKeywords(business.location)
  ).slice(0, 5);

  // Resalta coincidencias en texto
  function highlightMatch(text) {
    let result = text;
    searchKeywords.forEach(kw => {
      if (kw.length > 0) {
        const regex = new RegExp(`(${kw})`, 'gi');
        result = result.replace(regex, '<mark class="bg-yellow-200 text-black rounded px-1">$1</mark>');
      }
    });
    return result;
  }

  const filteredBusinesses = activeCategory === 'Todas'
    ? businesses.filter(business => {
        const term = normalize(searchTerm);
        return (
          normalize(business.name).includes(term) ||
          normalize(business.category).includes(term) ||
          normalize(business.description).includes(term) ||
          normalize(business.subdomain).includes(term) ||
          normalize(business.location).includes(term)
        );
      })
    : businesses.filter(business => {
        const term = normalize(searchTerm);
        return (
          business.category === activeCategory && (
            normalize(business.name).includes(term) ||
            normalize(business.category).includes(term) ||
            normalize(business.description).includes(term) ||
            normalize(business.subdomain).includes(term) ||
            normalize(business.location).includes(term)
          )
        );
      });
  const groupedBusinesses = filteredBusinesses.reduce((acc, business) => {
    if (!acc[business.category]) {
      acc[business.category] = [];
    }
    acc[business.category].push(business);
    return acc;
  }, {});
  const sortedCategories = Object.keys(groupedBusinesses).sort();
  const allBusinessesSorted = sortedCategories.flatMap(category => groupedBusinesses[category]);

  // Chips de categorías premium
  const CategoryChip = ({cat, Icon, color, selected, onClick}) => (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r ${color} text-white font-semibold shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none border-2 border-transparent ${selected ? 'ring-2 ring-yellow-400 border-yellow-400 scale-110' : ''}`}
      style={{minWidth: 0}}
    >
      <Icon className="h-5 w-5" />
      <span className="truncate">{cat}</span>
    </button>
  );

  // Asigna imágenes de Unsplash relevantes por categoría
  const unsplashImages = {
    "Hoteles y Alojamiento": "photo-1506744038136-46273834b3fb",
    "Fotografía y Arte": "photo-1519125323398-675f0ddb6308",
    "Centros Vacacionales": "photo-1507525428034-b723cf961d3e",
    "Restaurantes": "photo-1414235077428-338989a2e8c0",
    "Transporte y Alquiler": "photo-1449824913935-59a10b8d2000",
    "Belleza y Cuidado Personal": "photo-1517841905240-472988babdf9",
    "Tecnología": "photo-1519389950473-47ba0277781c",
    "Deportes y Academias": "photo-1571019613454-1cb2f99b2d8b",
    "Moda y Ropa": "photo-1512436991641-6745cdb1723f",
    "Barbería y Estética": "photo-1515378791036-0648a3ef77b2",
    "Importación de Autos": "photo-1503736334956-4c8f8e92946d",
    "Regalos y Fiestas": "photo-1513475382585-d06e58bcb0e0",
    "Café y Gastronomía": "photo-1447933601403-0c6688de566e",
    "Educación y Formación": "photo-1464983953574-0892a716854b",
    "Turismo y Playa": "photo-1507525428034-b723cf961d3e",
    "Aventura y Deportes": "photo-1469474968028-56623f02e42e"
  };

  // Estilos premium para tarjetas y badges
  const premiumCardClass = `luxury-card border-0 overflow-hidden group hover:scale-105 transition-all duration-500 h-full bg-white/20 backdrop-blur-xl shadow-2xl rounded-3xl border border-yellow-400/30 hover:shadow-[0_8px_32px_0_rgba(255,215,0,0.25)]`;
  const premiumBadgeClass = `bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 text-primary font-semibold text-xs shadow-md animate-pulse`;
  const premiumButtonClass = `bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 text-white font-bold rounded-xl shadow-lg hover:scale-105 transition-transform duration-300`;

  // Masonry breakpoints para responsividad mejorada
  const breakpointColumnsObj = {
    default: 4,
    1200: 3,
    900: 2,
    600: 1
  };

  // Chips de categorías premium con scroll horizontal en móvil
  const CategoryChipBar = ({activeCategory, setActiveCategory, categoriesList, categoryIcons, categoryColors}) => (
    <div className="w-full overflow-x-auto pb-2 mb-6">
      <div className="flex gap-3 min-w-max md:justify-center">
        <CategoryChip
          cat="Todas"
          Icon={Globe}
          color="from-yellow-400 to-yellow-600"
          selected={activeCategory === 'Todas'}
          onClick={() => setActiveCategory('Todas')}
        />
        {categoriesList.map(cat => (
          <CategoryChip
            key={cat}
            cat={cat}
            Icon={categoryIcons[cat] || Briefcase}
            color={categoryColors[cat] || 'from-gray-400 to-gray-600'}
            selected={activeCategory === cat}
            onClick={() => setActiveCategory(cat)}
          />
        ))}
      </div>
    </div>
  );

  // Tarjeta premium responsiva
  const BusinessCard = ({ business }) => (
    <div className="relative animate-fade-in-up group">
      {/* Badge de categoría pequeño y en la esquina */}
      <span className="absolute top-3 left-3 z-20 px-2 py-1 rounded-full text-[10px] font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 text-white shadow-lg border border-yellow-200/60 opacity-90">
        {business.category}
      </span>
      <Card className={premiumCardClass + " mt-8 min-h-[320px] flex flex-col justify-between transition-all duration-300 group-hover:shadow-2xl group-hover:bg-white/40 group-hover:backdrop-blur-2xl md:min-h-[340px]"}>
        <CardContent className="p-0 h-full flex flex-col justify-between">
          <div className="relative h-32 md:h-40 overflow-hidden rounded-t-3xl">
            {/* Imagen de fondo */}
          <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{
                backgroundImage: `url(https://images.unsplash.com/${unsplashImages[business.category] || business.image}?w=600&h=400&fit=crop)`
            }}
          ></div>
            {/* Overlay glassmorphism */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent backdrop-blur-md rounded-t-3xl"></div>
            {/* Nombre del negocio grande y claro */}
            <div className="absolute bottom-2 left-0 w-full px-2 md:px-4">
              <h3 className="text-base md:text-lg font-bold font-serif drop-shadow-lg tracking-wide text-white bg-black/40 rounded-xl px-2 md:px-3 py-1 inline-block max-w-full truncate">
                {business.name}
              </h3>
            </div>
          </div>
          {/* Descripción y datos clave */}
          <div className="flex-1 flex flex-col justify-between p-2 md:p-4">
            <div className="mb-2">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-gradient-to-br from-yellow-400/60 to-yellow-200/60 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md">
                  <business.icon className="h-3 w-3 text-yellow-900" />
                </div>
                <span className="text-xs text-white/80 font-mono">{business.subdomain}</span>
              </div>
              <div className="bg-white/30 rounded-lg px-2 md:px-3 py-2 text-xs text-black/90 font-light mb-2 shadow-inner line-clamp-3">
                {business.description}
              </div>
              {business.location && (
                <div className="flex items-center gap-1 text-xs text-black/70 mb-1">
                  <MapPin className="h-3 w-3 text-yellow-700" />
                  <span className="line-clamp-1 font-light">{business.location}</span>
                </div>
              )}
                  {business.phone && (
                <div className="flex items-center gap-1 text-xs text-black/70 mb-1">
                  <Phone className="h-3 w-3 text-yellow-700" />
                  <span>{business.phone}</span>
                </div>
              )}
            </div>
            {/* Rating destacado */}
            <div className="flex items-center gap-2 mb-2">
              <Star className="h-4 w-4 text-yellow-400 fill-current animate-shine" />
              <span className="font-semibold text-black/80 text-sm">{business.rating}</span>
            </div>
            {/* Botón de acción premium */}
                <Button 
              size="lg" 
              className={premiumButtonClass + " w-full text-sm md:text-base py-2 mt-2 group-hover:scale-105 group-hover:shadow-xl transition-all duration-300"}
                  asChild
                >
                  <a href={business.url} target="_blank" rel="noopener noreferrer">
                Visitar página
                <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
        </div>
      </CardContent>
    </Card>
    </div>
  );

  return (
    <section className="py-10 md:py-20 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden min-h-screen" id="categories">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-brand-turquoise/5 rounded-full animate-float blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-brand-gold/5 rounded-full animate-float blur-3xl" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-2 md:px-6 relative z-10">
        {/* Filtro de categorías premium responsivo */}
        <CategoryChipBar
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          categoriesList={categoriesList}
          categoryIcons={categoryIcons}
          categoryColors={categoryColors}
        />
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-accent px-6 py-2 rounded-full text-primary font-semibold mb-6">
            <Globe className="h-5 w-5" />
            Directorio de Subdominios Reales
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-6 font-serif drop-shadow-lg">Negocios Verificados</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed font-light">
            Conecta directamente con negocios reales que tienen su propio subdominio. Cada enlace te lleva a una página web real y verificada.
          </p>

          {/* Search Bar Premium */}
          <div className="relative max-w-2xl mx-auto mb-8 animate-fade-in-up">
            <div className="flex items-center bg-white/30 backdrop-blur-xl rounded-2xl shadow-xl border-2 border-transparent focus-within:border-yellow-400 transition-all">
              <SearchIcon className="h-6 w-6 text-yellow-500 ml-4 animate-pulse" />
              <input
                type="text"
                placeholder="Buscar negocios, categorías, lugares..."
                value={searchTerm}
                onChange={e => { setSearchTerm(e.target.value); setShowSuggestions(true); }}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
                className="flex-1 bg-transparent border-0 outline-none px-4 py-3 text-lg text-black placeholder:text-black/40 font-medium rounded-2xl"
              />
            </div>
            {/* Sugerencias inteligentes */}
            {showSuggestions && searchTerm && (
              <div className="absolute left-0 right-0 mt-2 bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl z-20 p-2 animate-fade-in-up">
                {suggestionResults.length > 0 ? (
                  suggestionResults.map((business, idx) => (
                    <div
                      key={business.subdomain}
                      className="flex flex-col gap-1 px-4 py-2 hover:bg-yellow-100/60 rounded-xl cursor-pointer transition-all"
                      onMouseDown={() => { setSearchTerm(business.name); setShowSuggestions(false); }}
                    >
                      <span className="font-semibold text-black text-base" dangerouslySetInnerHTML={{__html: highlightMatch(business.name)}} />
                      <span className="text-xs text-black/70" dangerouslySetInnerHTML={{__html: highlightMatch(business.category)}} />
                      <span className="text-xs text-black/60" dangerouslySetInnerHTML={{__html: highlightMatch(business.location)}} />
                    </div>
                  ))
                ) : (
                  <div className="text-center text-black/60 py-4">No se encontraron coincidencias</div>
                )}
              </div>
            )}
          </div>

          {/* Stats */}
          <div className="flex justify-center gap-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-brand-turquoise">{businesses.length}</div>
              <div className="text-sm text-muted-foreground">Negocios</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-brand-gold">{allBusinessesSorted.length}</div>
              <div className="text-sm text-muted-foreground">Categorías</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-brand-navy">{allBusinessesSorted.length}</div>
              <div className="text-sm text-muted-foreground">Total</div>
            </div>
          </div>
        </div>

        {/* Businesses by Category */}
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex w-auto gap-4 md:gap-8"
          columnClassName="masonry-column"
        >
          {allBusinessesSorted.map((business, idx) => (
                <BusinessCard key={business.subdomain} business={business} />
              ))}
        </Masonry>

        {/* No results */}
        {allBusinessesSorted.length === 0 && searchTerm && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-12 w-12 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-2">No se encontraron resultados</h3>
            <p className="text-muted-foreground">
              Intenta con otros términos de búsqueda o explora todas las categorías
            </p>
          </div>
        )}

        {/* Botones Premium Destacados */}
        <div className="mt-20 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gradient mb-4 font-serif">Servicios Especiales</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Descubre nuestras ofertas exclusivas y mantente conectado con nosotros
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Botón Descuentos Especiales en Turismo */}
            <Card className="luxury-card border-0 p-0 overflow-hidden group hover:scale-105 transition-all duration-500 bg-gradient-to-br from-red-500 via-pink-500 to-orange-500 shadow-2xl hover:shadow-[0_20px_40px_0_rgba(255,0,100,0.3)]">
              <CardContent className="p-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-400/20 via-pink-400/20 to-orange-400/20 animate-pulse"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Percent className="h-10 w-10 text-white animate-bounce" />
                  </div>
                  <Badge className="bg-yellow-400 text-black font-bold text-xs mb-4 animate-pulse">
                    ¡OFERTA ESPECIAL!
                  </Badge>
                  <h4 className="text-xl font-bold text-white mb-3 drop-shadow-lg">
                    Descuentos Especiales
                  </h4>
                  <p className="text-white/90 text-sm mb-6 leading-relaxed">
                    Ofertas exclusivas en turismo, hoteles y experiencias únicas
                  </p>
                  <Button 
                    size="lg" 
                    className="w-full bg-white text-red-600 hover:bg-yellow-400 hover:text-black font-bold py-3 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 border-2 border-white/30"
                    asChild
                  >
                    <a href="https://paraelviaje.tuguiadeturismo.com/" target="_blank" rel="noopener noreferrer">
                      Ver Descuentos
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400/30 rounded-full animate-float"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-white/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
              </CardContent>
            </Card>

            {/* Botón Cursos de Formación */}
            <Card className="luxury-card border-0 p-0 overflow-hidden group hover:scale-105 transition-all duration-500 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 shadow-2xl hover:shadow-[0_20px_40px_0_rgba(0,100,255,0.3)]">
              <CardContent className="p-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-indigo-400/20 to-purple-400/20 animate-pulse"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="h-10 w-10 text-white animate-bounce" />
                  </div>
                  <Badge className="bg-green-400 text-black font-bold text-xs mb-4 animate-pulse">
                    EDUCACIÓN PREMIUM
                  </Badge>
                  <h4 className="text-xl font-bold text-white mb-3 drop-shadow-lg">
                    Cursos de Formación
                  </h4>
                  <p className="text-white/90 text-sm mb-6 leading-relaxed">
                    Capacítate con nuestros cursos especializados y certificaciones
                  </p>
                  <Button 
                    size="lg" 
                    className="w-full bg-white text-blue-600 hover:bg-green-400 hover:text-black font-bold py-3 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 border-2 border-white/30"
                    asChild
                  >
                    <a href="https://app.hugex.co/p/form/bgheRWMHHS4POqApBIqc2iWoIJC-eyt8bXiLrnyDUpVb1KmRWQ0WyshDBzDUo1QjTP0kE4XEDZJYSb05ArFgSQI_-8_2t5zNN7HpR4twY_GX8AOhLwwtqZmpNdACbD_5" target="_blank" rel="noopener noreferrer">
                      Inscribirse
                      <GraduationCap className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-400/30 rounded-full animate-float"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-white/10 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
              </CardContent>
            </Card>

            {/* Botón Instagram */}
            <Card className="luxury-card border-0 p-0 overflow-hidden group hover:scale-105 transition-all duration-500 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 shadow-2xl hover:shadow-[0_20px_40px_0_rgba(255,0,150,0.3)]">
              <CardContent className="p-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-400/20 via-purple-400/20 to-indigo-400/20 animate-pulse"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Instagram className="h-10 w-10 text-white animate-bounce" />
                  </div>
                  <Badge className="bg-pink-400 text-white font-bold text-xs mb-4 animate-pulse">
                    SÍGUENOS
                  </Badge>
                  <h4 className="text-xl font-bold text-white mb-3 drop-shadow-lg">
                    @mimedallo2025
                  </h4>
                  <p className="text-white/90 text-sm mb-6 leading-relaxed">
                    Mantente al día con las últimas novedades y contenido exclusivo
                  </p>
                  <Button 
                    size="lg" 
                    className="w-full bg-white text-pink-600 hover:bg-pink-400 hover:text-white font-bold py-3 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 border-2 border-white/30"
                    asChild
                  >
                    <a href="https://www.instagram.com/mimedallo2025?igsh=MXBnczJiMG0zcGkycw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
                      Seguir
                      <Heart className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-pink-400/30 rounded-full animate-float"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-white/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">

          <Card className="bg-gradient-primary text-white border-0 p-8 max-w-4xl mx-auto relative overflow-hidden">
            <CardContent className="p-0 relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">¿Quieres aparecer aquí?</h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                Registra tu negocio y obtén tu propio subdominio personalizado
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" className="premium-button">
                  <Globe className="mr-2 h-5 w-5" />
                  Registrar Negocio
                </Button>
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                  <Phone className="mr-2 h-5 w-5" />
                  Contactar Soporte
                </Button>
              </div>
            </CardContent>
            
            {/* Background decorations */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-brand-turquoise/20 rounded-full animate-float"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-brand-gold/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          </Card>
        </div>

        {/* Domain Info */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <Card className="luxury-card border-0 p-6">
            <CardContent className="p-0 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mountain className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-primary mb-2">TuGuiaDeTurismo.com</h4>
              <p className="text-muted-foreground text-sm mb-4">
                Plataforma especializada en turismo, hoteles, restaurantes y experiencias únicas en Colombia
              </p>
              <Button variant="outline" size="sm" asChild>
                <a href="https://tuguiadeturismo.com/" target="_blank" rel="noopener noreferrer">
                  Visitar Sitio Principal
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="luxury-card border-0 p-6">
            <CardContent className="p-0 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-primary mb-2">ProfesionalesOnline.com.co</h4>
              <p className="text-muted-foreground text-sm mb-4">
                Directorio completo de servicios profesionales especializados en Colombia
              </p>
              <Button variant="outline" size="sm" asChild>
                <a href="https://profesionalesonline.com.co/" target="_blank" rel="noopener noreferrer">
                  Visitar Sitio Principal
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Categories;
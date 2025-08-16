import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Sparkles, BadgePercent } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const DiscountSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'center',
    dragFree: true,
    skipSnaps: false,
    speed: 8, // Velocidad más lenta para transiciones más suaves
    startIndex: 0,
    inViewThreshold: 0.8, // Mejora la detección de elementos visibles
  });
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [autoplayInterval, setAutoplayInterval] = useState<NodeJS.Timeout | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [isPaused, setIsPaused] = useState(false);

  // Lista de imágenes de descuentos con sus beneficios correspondientes
  const discountImages = [
    { 
      src: '/slider/amg.jpg', 
      alt: 'AMG', 
      discount: '10% en renta de vehículos en Antioquia'
    },
    { 
      src: '/slider/animador.jpg', 
      alt: 'SHOW DE FELIX', 
      discount: '10% en show y presentaciones en eventos'
    },
    { 
      src: '/slider/chiva.jpg', 
      alt: 'CHIVAS MOTO MEDELLÍN', 
      discount: '10% city tour de 4 horas'
    },
    { 
      src: '/slider/coltours.jpg', 
      alt: 'COLTOURS', 
      discount: '5% en destinos nacionales'
    },
    { 
      src: '/slider/el castillo.jpg', 
      alt: 'VIVIENDA TURÍSTICA EL CASTILLO', 
      discount: '5% en alojamiento'
    },
    { 
      src: '/slider/merizalde.jpg', 
      alt: 'MERIZALDE MOBILIARIO', 
      discount: '10% dcto. en tu primer proyecto: REFORMAS LOCATIVAS Y MOBILIARIO COMERCIAL Y PARA EL HOGAR'
    },
    { 
      src: '/slider/mundo sorpresa.jpg', 
      alt: 'Mundo Sorpresa', 
      discount: 'Descuentos exclusivos'
    },
    { 
      src: '/slider/palm beach.jpg', 
      alt: 'PALM BEACH', 
      discount: '8% en alojamiento'
    },
    { 
      src: '/slider/paraviaje.jpg', 
      alt: 'PARAELVIAJE.COM', 
      discount: '8% en viajes nacionales, 10% en viajes al Caribe, 12% en viajes a Europa, Asia y Medio Oriente'
    },
  ];

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const handleMouseEnter = useCallback(() => {
    setIsPaused(true);
    if (autoplayInterval) {
      clearInterval(autoplayInterval);
      setAutoplayInterval(null);
    }
  }, [autoplayInterval]);

  const handleMouseLeave = useCallback(() => {
    setIsPaused(false);
    if (!autoplayInterval && emblaApi) {
      const interval = setInterval(() => {
        emblaApi.scrollNext();
      }, 5000); // Sincronizado con el mismo intervalo del useEffect
      setAutoplayInterval(interval);
    }
  }, [autoplayInterval, emblaApi]);

  // Configurar autoplay y scroll snaps
  useEffect(() => {
    if (!emblaApi) return;

    // Obtener los puntos de snap para los indicadores
    const snaps = emblaApi.scrollSnapList();
    setScrollSnaps(snaps);
    
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);
  
  // Efecto separado para manejar el autoplay
  useEffect(() => {
    if (!emblaApi || isPaused) return;
    
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000); // Cambiar cada 5 segundos para dar más tiempo a leer los descuentos

    setAutoplayInterval(interval);

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [emblaApi, isPaused]);

  return (
    <div className="w-full max-w-4xl mx-auto mt-6 mb-8 relative">
      <div className="text-center mb-6 relative">
        {/* Título con efectos ultra premium */}
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-60 h-1 bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent"></div>
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-40 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="relative">
            <BadgePercent className="h-6 w-6 text-brand-gold animate-pulse" />
            <div className="absolute inset-0 bg-brand-gold/20 blur-md rounded-full animate-pulse"></div>
          </div>
          
          <h3 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-brand-gold to-amber-400 drop-shadow-lg">
            RED DE DESCUENTOS
          </h3>
          
          <div className="relative">
            <BadgePercent className="h-6 w-6 text-brand-gold animate-pulse" />
            <div className="absolute inset-0 bg-brand-gold/20 blur-md rounded-full animate-pulse"></div>
          </div>
        </div>
        
        <p className="text-sm md:text-base text-white/80 max-w-md mx-auto font-medium">
          Negocios afiliados con beneficios <span className="text-brand-gold">exclusivos</span> para nuestros usuarios
        </p>
        
        <Badge className="absolute -right-2 top-0 bg-gradient-to-br from-yellow-300 via-brand-gold to-amber-500 text-black text-xs font-bold animate-bounce shadow-lg shadow-brand-gold/20">
          ¡EXCLUSIVO!
        </Badge>
        
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent"></div>
      </div>

      {/* Contenedor principal con efecto de pausa al hover */}
      <div 
        className="relative bg-gradient-to-r from-transparent via-white/10 to-transparent p-6 rounded-2xl overflow-hidden border border-white/10 shadow-xl"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          backgroundImage: 'radial-gradient(circle at center, rgba(255,215,0,0.05) 0%, transparent 70%)'
        }}
      >
        {/* Efecto de brillo */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/10 via-transparent to-brand-turquoise/10 animate-pulse"></div>
        
        {/* Bordes decorativos */}
        <div className="absolute top-0 left-0 w-20 h-1 bg-gradient-to-r from-brand-gold/80 to-transparent"></div>
        <div className="absolute top-0 right-0 w-20 h-1 bg-gradient-to-l from-brand-gold/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-20 h-1 bg-gradient-to-r from-brand-gold/80 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-20 h-1 bg-gradient-to-l from-brand-gold/80 to-transparent"></div>
        
        {/* Carrusel */}
        <div className="overflow-hidden rounded-xl" ref={emblaRef}>
          <div className="flex py-2">
            {discountImages.map((image, index) => (
              <div 
                key={index} 
                className="flex-[0_0_50%] min-w-0 sm:flex-[0_0_33.333%] md:flex-[0_0_25%] px-2 relative"
              >
                <div className={`bg-gradient-to-b from-white/15 to-black/30 backdrop-blur-sm p-4 rounded-xl border ${selectedIndex === index ? 'border-brand-gold' : 'border-white/20'} shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 flex flex-col items-center justify-center group`}>
                  <Sparkles className="absolute top-1 right-1 h-3 w-3 text-brand-gold/0 group-hover:text-brand-gold transition-all duration-300" />
                  <div className="absolute -inset-px bg-gradient-to-b from-white/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  <div className="h-24 flex items-center justify-center mb-2 relative">
                    <div className="absolute inset-0 bg-radial-gradient from-brand-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="max-h-20 max-w-full object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-lg"
                      loading="lazy"
                    />
                  </div>
                  <div className="w-full bg-gradient-to-r from-black/50 via-black/70 to-black/50 backdrop-blur-sm rounded-lg p-2 mt-1 border-t border-white/10">
                    <p className="text-xs text-center font-bold text-white drop-shadow-md">{image.alt}</p>
                    <div className="h-px w-12 mx-auto my-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent"></div>
                    <p className="text-[10px] text-center text-brand-gold leading-tight font-medium">{image.discount}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicador de pausa */}
        {isPaused && (
          <div className="absolute top-2 right-2 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full text-xs text-white/90 animate-pulse">
            Pausado
          </div>
        )}

        {/* Controles de navegación ultra premium */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-black/70 to-black/40 backdrop-blur-md border border-white/10 text-white hover:text-brand-gold hover:border-brand-gold z-10 shadow-lg hover:shadow-brand-gold/30 transition-all duration-300 rounded-full p-2"
          onClick={scrollPrev}
          disabled={prevBtnDisabled}
        >
          <ChevronLeft className="h-5 w-5" />
          <span className="absolute -inset-px rounded-full bg-gradient-to-r from-brand-gold/0 to-brand-gold/0 group-hover:from-brand-gold/10 group-hover:to-brand-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </Button>

        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-l from-black/70 to-black/40 backdrop-blur-md border border-white/10 text-white hover:text-brand-gold hover:border-brand-gold z-10 shadow-lg hover:shadow-brand-gold/30 transition-all duration-300 rounded-full p-2"
          onClick={scrollNext}
          disabled={nextBtnDisabled}
        >
          <ChevronRight className="h-5 w-5" />
          <span className="absolute -inset-px rounded-full bg-gradient-to-l from-brand-gold/0 to-brand-gold/0 group-hover:from-brand-gold/10 group-hover:to-brand-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </Button>
      </div>

      {/* Indicadores de posición premium */}
      <div className="flex justify-center gap-2 mt-4">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={`h-2 rounded-full transition-all duration-500 ${index === selectedIndex 
              ? 'bg-gradient-to-r from-yellow-400 via-brand-gold to-amber-500 w-6 shadow-md shadow-brand-gold/30' 
              : 'bg-white/20 w-2 hover:bg-white/40'}`}
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Decoración inferior */}
      <div className="w-32 h-px mx-auto mt-6 bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent"></div>
    </div>
  );
};

export default DiscountSlider;
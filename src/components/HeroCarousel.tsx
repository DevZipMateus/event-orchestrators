import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services, Service } from '@/data/services';

// Import all service images
import limpezaImg from '@/assets/services/limpeza.jpg';
import bombeiroImg from '@/assets/services/bombeiro.jpg';
import carregadoresImg from '@/assets/services/carregadores.jpg';
import tradutoresImg from '@/assets/services/tradutores.jpg';
import recepcionistaImg from '@/assets/services/recepcionista.jpg';
import segurancaImg from '@/assets/services/seguranca.jpg';
import staffImg from '@/assets/services/staff.jpg';
import locacoesImg from '@/assets/services/locacoes.jpg';

const serviceImages: Record<string, string> = {
  limpeza: limpezaImg,
  bombeiro: bombeiroImg,
  carregadores: carregadoresImg,
  tradutores: tradutoresImg,
  recepcionista: recepcionistaImg,
  seguranca: segurancaImg,
  staff: staffImg,
  locacoes: locacoesImg,
};

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const currentService: Service = services[currentIndex];
  const imageUrl = serviceImages[currentService.id];

  return (
    <section className="relative h-[60vh] sm:h-[70vh] md:h-[75vh] lg:h-[80vh] min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={imageUrl}
          alt={currentService.title}
          className="w-full h-full object-cover transition-all duration-700"
          key={currentIndex}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full section-container flex items-center">
        <div className="max-w-xl sm:max-w-xl md:max-w-2xl lg:max-w-3xl animate-slide-in-left pr-4 sm:pr-0" key={currentIndex}>
          <p className="text-primary-foreground/80 text-sm sm:text-base lg:text-lg mb-2 sm:mb-4 font-medium">
            Confidence Eventos
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-primary-foreground mb-3 sm:mb-4 lg:mb-6 leading-tight">
            {currentService.title}
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-primary-foreground/90 mb-4 sm:mb-6 lg:mb-8 line-clamp-3 sm:line-clamp-none">
            {currentService.heroTagline}
          </p>
          <Link
            to={`/${currentService.slug}`}
            className="inline-flex items-center gap-2 bg-primary-foreground text-foreground px-5 py-3 sm:px-6 sm:py-3 lg:px-8 lg:py-4 rounded-lg font-semibold hover:bg-primary-foreground/90 transition-colors text-sm sm:text-base"
          >
            Saiba mais
          </Link>
        </div>
      </div>

      {/* Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/40 backdrop-blur-sm transition-colors"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/40 backdrop-blur-sm transition-colors"
        aria-label="Próximo slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 sm:h-2 rounded-full transition-all ${
              index === currentIndex
                ? 'w-6 sm:w-8 bg-primary-foreground'
                : 'w-1.5 sm:w-2 bg-primary-foreground/40 hover:bg-primary-foreground/60'
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;

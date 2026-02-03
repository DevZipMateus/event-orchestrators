import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { Testimonial } from '@/data/testimonials';

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

const TestimonialCarousel = ({ testimonials }: TestimonialCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [testimonials.length, isAnimating]);

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  if (testimonials.length === 0) return null;

  const current = testimonials[currentIndex];

  return (
    <section className="section-dark section-padding">
      <div className="section-container">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <p className="text-primary-foreground/60 text-xs sm:text-sm uppercase tracking-widest mb-2 sm:mb-3">
            Depoimentos
          </p>
          <h2 className="heading-secondary">
            O Que Nossos Clientes Dizem
          </h2>
        </div>

        <div className="relative max-w-3xl mx-auto px-2 sm:px-0">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 sm:-translate-x-2 md:-translate-x-12 lg:-translate-x-16 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-all duration-300 z-10 flex items-center justify-center group"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:-translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 sm:translate-x-2 md:translate-x-12 lg:translate-x-16 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-all duration-300 z-10 flex items-center justify-center group"
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Testimonial Card */}
          <div 
            className={`bg-primary-foreground/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-8 md:p-10 lg:p-12 border border-primary-foreground/10 transition-all duration-500 mx-6 sm:mx-10 md:mx-0 ${
              isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
            }`}
          >
            {/* Quote Icon */}
            <div className="flex justify-center mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                <Quote className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-primary-foreground/70" />
              </div>
            </div>

            {/* Stars */}
            <div className="flex justify-center gap-0.5 sm:gap-1 mb-4 sm:mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            
            {/* Testimonial Text */}
            <blockquote className="text-center mb-6 sm:mb-8">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed text-primary-foreground/90 font-light italic">
                "{current.text}"
              </p>
            </blockquote>

            {/* Divider */}
            <div className="w-12 sm:w-16 h-0.5 bg-primary-foreground/20 mx-auto mb-4 sm:mb-6" />

            {/* Author Info */}
            <div className="text-center">
              <p className="font-heading font-bold text-sm sm:text-base lg:text-lg text-primary-foreground mb-0.5 sm:mb-1">
                {current.name}
              </p>
              <p className="text-primary-foreground/70 text-xs sm:text-sm mb-0.5">
                {current.role}
              </p>
              <p className="text-primary-foreground/50 text-xs sm:text-sm">
                {current.company}
              </p>
            </div>
          </div>

          {/* Progress Dots */}
          <div className="flex justify-center items-center gap-2 sm:gap-3 mt-6 sm:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-8 sm:w-10 h-2 sm:h-3 bg-primary-foreground'
                    : 'w-2 sm:w-3 h-2 sm:h-3 bg-primary-foreground/30 hover:bg-primary-foreground/50'
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>

          {/* Counter */}
          <p className="text-center text-primary-foreground/40 text-xs sm:text-sm mt-3 sm:mt-4">
            {currentIndex + 1} / {testimonials.length}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;

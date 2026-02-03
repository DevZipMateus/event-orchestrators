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
        <div className="text-center mb-12">
          <p className="text-primary-foreground/60 text-sm uppercase tracking-widest mb-3">
            Depoimentos
          </p>
          <h2 className="heading-secondary">
            O Que Nossos Clientes Dizem
          </h2>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-16 w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-all duration-300 z-10 flex items-center justify-center group"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 group-hover:-translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-16 w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-all duration-300 z-10 flex items-center justify-center group"
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Testimonial Card */}
          <div 
            className={`bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-primary-foreground/10 transition-all duration-500 ${
              isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
            }`}
          >
            {/* Quote Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-14 h-14 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                <Quote className="w-6 h-6 text-primary-foreground/70" />
              </div>
            </div>

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            
            {/* Testimonial Text */}
            <blockquote className="text-center mb-8">
              <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-primary-foreground/90 font-light italic">
                "{current.text}"
              </p>
            </blockquote>

            {/* Divider */}
            <div className="w-16 h-0.5 bg-primary-foreground/20 mx-auto mb-6" />

            {/* Author Info */}
            <div className="text-center">
              <p className="font-heading font-bold text-lg text-primary-foreground mb-1">
                {current.name}
              </p>
              <p className="text-primary-foreground/70 text-sm mb-0.5">
                {current.role}
              </p>
              <p className="text-primary-foreground/50 text-sm">
                {current.company}
              </p>
            </div>
          </div>

          {/* Progress Dots */}
          <div className="flex justify-center items-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-10 h-3 bg-primary-foreground'
                    : 'w-3 h-3 bg-primary-foreground/30 hover:bg-primary-foreground/50'
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>

          {/* Counter */}
          <p className="text-center text-primary-foreground/40 text-sm mt-4">
            {currentIndex + 1} / {testimonials.length}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;

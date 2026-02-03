import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Testimonial } from '@/data/testimonials';

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

const TestimonialCarousel = ({ testimonials }: TestimonialCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  if (testimonials.length === 0) return null;

  const current = testimonials[currentIndex];

  return (
    <section className="section-dark section-padding">
      <div className="section-container">
        <h2 className="heading-secondary text-center mb-12">
          O Que Nossos Clientes Dizem
        </h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors z-10"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors z-10"
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Testimonial Card */}
          <div className="text-center px-8 md:px-16">
            <Quote className="w-12 h-12 mx-auto mb-6 opacity-50" />
            
            <p className="text-lg md:text-xl leading-relaxed mb-8 animate-carousel-slide" key={currentIndex}>
              "{current.text}"
            </p>

            <div>
              <p className="font-heading font-semibold text-lg">{current.name}</p>
              <p className="text-primary-foreground/70 text-sm">{current.role}</p>
              <p className="text-primary-foreground/50 text-sm">{current.company}</p>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-8 bg-primary-foreground'
                    : 'bg-primary-foreground/30 hover:bg-primary-foreground/50'
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;

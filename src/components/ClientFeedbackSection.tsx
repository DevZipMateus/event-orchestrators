import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

// Import images - Thiago Rosinhole
import feedbackImg1 from '@/assets/feedbacks/thiago-rosinhole-1.webp';
import feedbackImg2 from '@/assets/feedbacks/thiago-rosinhole-2.webp';
import feedbackImg3 from '@/assets/feedbacks/thiago-rosinhole-3.webp';

// Import images - Saudosa Maloca
import saudosaImg1 from '@/assets/feedbacks/saudosa-maloca-1.webp';
import saudosaImg2 from '@/assets/feedbacks/saudosa-maloca-2.webp';
import saudosaImg3 from '@/assets/feedbacks/saudosa-maloca-3.webp';
import saudosaImg4 from '@/assets/feedbacks/saudosa-maloca-4.webp';

interface ClientFeedback {
  id: number;
  clientName: string;
  eventType: string;
  feedback: string;
  images: string[];
}

const clientFeedbacks: ClientFeedback[] = [
  {
    id: 1,
    clientName: 'Cliente Da Exposição Do Thiago Rosinhole',
    eventType: 'Exposição de Arte',
    feedback: 'Prezada Carolina! Gostaríamos de expressar nossa sincera gratidão pela excelente prestação de serviços de segurança que sua empresa nos forneceu para o evento. Sua equipe demonstrou grande profissionalismo e dedicação. O trabalho realizado foi impecável, garantindo que tudo ocorresse de forma segura e tranquila. Vocês fizeram um ótimo trabalho! Agradecemos a parceria e esperamos trabalhar juntos novamente em breve.',
    images: [feedbackImg1, feedbackImg2, feedbackImg3]
  },
  {
    id: 2,
    clientName: 'Cliente Do Saudosa Maloca',
    eventType: 'Festival de Samba',
    feedback: 'Trabalhar com a Confidence Eventos no nosso evento foi uma experiência de total tranquilidade. A qualidade da mão de obra é notável. Desde a segurança, que manteve tudo sob controle com discrição e eficiência, até os carregadores e a equipe de limpeza, que foram incrivelmente ágeis e organizados. Eles são sinônimo de profissionalismo e pontualidade. Agradecemos por tornarem a logística do nosso evento impecável!',
    images: [saudosaImg1, saudosaImg2, saudosaImg3, saudosaImg4]
  }
];

const ClientFeedbackSection = () => {
  const [currentFeedbackIndex, setCurrentFeedbackIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const currentFeedback = clientFeedbacks[currentFeedbackIndex];

  const nextFeedback = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentFeedbackIndex((prev) => (prev + 1) % clientFeedbacks.length);
    setCurrentImageIndex(0);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const prevFeedback = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentFeedbackIndex((prev) => (prev - 1 + clientFeedbacks.length) % clientFeedbacks.length);
    setCurrentImageIndex(0);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % currentFeedback.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + currentFeedback.images.length) % currentFeedback.images.length);
  };

  // Auto-advance feedback
  useEffect(() => {
    const interval = setInterval(nextFeedback, 8000);
    return () => clearInterval(interval);
  }, [nextFeedback]);

  // Auto-advance images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % currentFeedback.images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [currentFeedback.images.length, currentFeedbackIndex]);

  return (
    <section className="section-padding bg-secondary overflow-hidden">
      <div className="section-container">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm uppercase tracking-widest mb-3">
            Depoimentos
          </p>
          <h2 className="heading-secondary">
            Feedback de Clientes
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image Carousel */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative aspect-[3/4] max-h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              {currentFeedback.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${currentFeedback.eventType} - Imagem ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover object-top transition-all duration-500 ${
                    index === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                  }`}
                />
              ))}
              
              {/* Image Navigation */}
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <div className="flex justify-center gap-2">
                  {currentFeedback.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`transition-all duration-300 rounded-full ${
                        index === currentImageIndex
                          ? 'w-8 h-2 bg-white'
                          : 'w-2 h-2 bg-white/50 hover:bg-white/70'
                      }`}
                      aria-label={`Ver imagem ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Image Arrow Controls */}
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 transition-colors flex items-center justify-center text-white"
                aria-label="Imagem anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 transition-colors flex items-center justify-center text-white"
                aria-label="Próxima imagem"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

          {/* Feedback Content Carousel */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Navigation Buttons */}
            <div className="flex justify-end gap-2 mb-6">
              <button
                onClick={prevFeedback}
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors flex items-center justify-center text-primary"
                aria-label="Feedback anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextFeedback}
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors flex items-center justify-center text-primary"
                aria-label="Próximo feedback"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div 
              className={`transition-all duration-500 ${
                isAnimating ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'
              }`}
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <Quote className="w-6 h-6 text-primary" />
                </div>
              </div>

              {/* Event Type Badge */}
              <span className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm rounded-full mb-4">
                {currentFeedback.eventType}
              </span>

              {/* Feedback Text */}
              <blockquote className="mb-6">
                <p className="text-lg leading-relaxed text-muted-foreground italic">
                  "{currentFeedback.feedback}"
                </p>
              </blockquote>

              {/* Client Info */}
              <div className="border-l-4 border-primary pl-4">
                <p className="font-heading font-bold text-lg text-foreground">
                  {currentFeedback.clientName}
                </p>
              </div>

              {/* Progress Dots */}
              <div className="flex items-center gap-3 mt-8">
                {clientFeedbacks.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (!isAnimating && index !== currentFeedbackIndex) {
                        setIsAnimating(true);
                        setCurrentFeedbackIndex(index);
                        setCurrentImageIndex(0);
                        setTimeout(() => setIsAnimating(false), 500);
                      }
                    }}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentFeedbackIndex
                        ? 'w-10 h-3 bg-primary'
                        : 'w-3 h-3 bg-primary/30 hover:bg-primary/50'
                    }`}
                    aria-label={`Ir para feedback ${index + 1}`}
                  />
                ))}
                <span className="ml-4 text-sm text-muted-foreground">
                  {currentFeedbackIndex + 1} / {clientFeedbacks.length}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientFeedbackSection;

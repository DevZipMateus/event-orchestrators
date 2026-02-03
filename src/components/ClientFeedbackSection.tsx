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

// Import images - Shopping Frei Caneca
import freiCanecaImg1 from '@/assets/feedbacks/shopping-frei-caneca-1.webp';
import freiCanecaImg2 from '@/assets/feedbacks/shopping-frei-caneca-2.webp';

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
  },
  {
    id: 3,
    clientName: 'Cliente Do Evento Do Shopping Frei Caneca',
    eventType: 'Congresso Nacional de Crédito no Agronegócio',
    feedback: 'Vocês arrasaram no serviço! Todos muito educados, atenciosos, tudo feito com muita atenção e capricho. Seguranças extremamente educados e solícitos. Limpeza atenciosa e extremamente caprichosa. Bombeiro sempre com atenção, circulando pelo salão. Carregadores "ponta firma", tudo que pedi eles me ajudaram! Trabalho há mais de 15 anos com evento e é muito difícil encontrar empresa de prestação de serviços-staffs como vocês. Parabéns! Com certeza estaremos juntos novamente em 2026!',
    images: [freiCanecaImg1, freiCanecaImg2]
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
          className="text-center mb-8 sm:mb-10 lg:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-xs sm:text-sm uppercase tracking-widest mb-2 sm:mb-3">
            Depoimentos
          </p>
          <h2 className="heading-secondary">
            Feedback de Clientes
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Image Carousel */}
          <motion.div 
            className="relative order-1 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative aspect-[4/3] sm:aspect-[3/4] max-h-[350px] sm:max-h-[450px] lg:max-h-[500px] mx-auto w-full max-w-md lg:max-w-none rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl">
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
              <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 bg-gradient-to-t from-black/60 to-transparent">
                <div className="flex justify-center gap-1.5 sm:gap-2">
                  {currentFeedback.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`transition-all duration-300 rounded-full ${
                        index === currentImageIndex
                          ? 'w-6 sm:w-8 h-1.5 sm:h-2 bg-white'
                          : 'w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/50 hover:bg-white/70'
                      }`}
                      aria-label={`Ver imagem ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Image Arrow Controls */}
              <button
                onClick={prevImage}
                className="absolute left-1.5 sm:left-2 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/30 hover:bg-black/50 transition-colors flex items-center justify-center text-white"
                aria-label="Imagem anterior"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-1.5 sm:right-2 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/30 hover:bg-black/50 transition-colors flex items-center justify-center text-white"
                aria-label="Próxima imagem"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </motion.div>

          {/* Feedback Content Carousel */}
          <motion.div 
            className="relative order-2 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Navigation Buttons */}
            <div className="flex justify-center sm:justify-end gap-2 mb-4 sm:mb-6">
              <button
                onClick={prevFeedback}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors flex items-center justify-center text-primary"
                aria-label="Feedback anterior"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={nextFeedback}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors flex items-center justify-center text-primary"
                aria-label="Próximo feedback"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

            <div 
              className={`transition-all duration-500 ${
                isAnimating ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'
              }`}
            >
              {/* Quote Icon */}
              <div className="mb-4 sm:mb-6 flex justify-center lg:justify-start">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <Quote className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-primary" />
                </div>
              </div>

              {/* Event Type Badge */}
              <div className="text-center lg:text-left">
                <span className="inline-block px-3 sm:px-4 py-1 bg-primary/10 text-primary text-xs sm:text-sm rounded-full mb-3 sm:mb-4">
                  {currentFeedback.eventType}
                </span>
              </div>

              {/* Feedback Text */}
              <blockquote className="mb-4 sm:mb-6 text-center lg:text-left">
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-muted-foreground italic">
                  "{currentFeedback.feedback}"
                </p>
              </blockquote>

              {/* Client Info */}
              <div className="border-l-4 border-primary pl-3 sm:pl-4 text-center lg:text-left mx-auto lg:mx-0 w-fit lg:w-auto">
                <p className="font-heading font-bold text-sm sm:text-base lg:text-lg text-foreground">
                  {currentFeedback.clientName}
                </p>
              </div>

              {/* Progress Dots */}
              <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 mt-6 sm:mt-8">
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
                        ? 'w-8 sm:w-10 h-2 sm:h-3 bg-primary'
                        : 'w-2 sm:w-3 h-2 sm:h-3 bg-primary/30 hover:bg-primary/50'
                    }`}
                    aria-label={`Ir para feedback ${index + 1}`}
                  />
                ))}
                <span className="ml-2 sm:ml-4 text-xs sm:text-sm text-muted-foreground">
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

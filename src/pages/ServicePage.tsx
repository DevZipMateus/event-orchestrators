import { useEffect } from 'react';
import { useParams, useLocation, Navigate, Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Check } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import ContactForm from '@/components/ContactForm';
import { getServiceBySlug } from '@/data/services';
import { getTestimonialsByService } from '@/data/testimonials';

// Import all service images - Hero
import limpezaImg from '@/assets/services/limpeza.jpg';
import bombeiroImg from '@/assets/services/bombeiro.jpg';
import carregadoresImg from '@/assets/services/carregadores.jpg';
import tradutoresImg from '@/assets/services/tradutores.jpg';
import recepcionistaImg from '@/assets/services/recepcionista.jpg';
import segurancaImg from '@/assets/services/seguranca.jpg';
import staffImg from '@/assets/services/staff.jpg';
import locacoesImg from '@/assets/services/locacoes.jpg';

// Import all service images - Detail
import limpezaDetailImg from '@/assets/services/limpeza-detail.jpg';
import bombeiroDetailImg from '@/assets/services/bombeiro-detail.jpg';
import carregadoresDetailImg from '@/assets/services/carregadores-detail.jpg';
import tradutoresDetailImg from '@/assets/services/tradutores-detail.jpg';
import recepcionistaDetailImg from '@/assets/services/recepcionista-detail.jpg';
import segurancaDetailImg from '@/assets/services/seguranca-detail.jpg';
import staffDetailImg from '@/assets/services/staff-detail.jpg';
import locacoesDetailImg from '@/assets/services/locacoes-detail.jpg';

const serviceHeroImages: Record<string, string> = {
  limpeza: limpezaImg,
  bombeiro: bombeiroImg,
  carregadores: carregadoresImg,
  tradutores: tradutoresImg,
  recepcionista: recepcionistaImg,
  seguranca: segurancaImg,
  staff: staffImg,
  locacoes: locacoesImg,
};

const serviceDetailImages: Record<string, string> = {
  limpeza: limpezaDetailImg,
  bombeiro: bombeiroDetailImg,
  carregadores: carregadoresDetailImg,
  tradutores: tradutoresDetailImg,
  recepcionista: recepcionistaDetailImg,
  seguranca: segurancaDetailImg,
  staff: staffDetailImg,
  locacoes: locacoesDetailImg,
};

const ServicePage = () => {
  const { slug: paramSlug } = useParams<{ slug: string }>();
  const location = useLocation();
  
  // Get slug from URL path (remove leading slash)
  const pathSlug = location.pathname.slice(1);
  const slug = paramSlug || pathSlug;
  
  const service = slug ? getServiceBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return <Navigate to="/" replace />;
  }

  const testimonials = getTestimonialsByService(service.id);
  const heroImage = serviceHeroImages[service.id];
  const detailImage = serviceDetailImages[service.id];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-20">
        <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
          <img
            src={heroImage}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/40" />
          
          <div className="absolute inset-0 flex items-center">
            <div className="section-container">
              <Link 
                to="/" 
                className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors mb-4"
              >
                <ArrowLeft className="w-5 h-5" />
                Voltar para a página inicial
              </Link>
              <p className="text-primary-foreground/70 text-lg mb-2">Confidence Eventos</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-4">
                {service.title}
              </h1>
              <p className="text-xl text-primary-foreground/90 max-w-2xl">
                {service.heroTagline}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Description */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="order-2 lg:order-1">
              <h2 className="heading-secondary mb-6">Sobre o Serviço</h2>
              <div className="prose prose-lg text-muted-foreground max-w-none">
                {service.fullDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Offerings List */}
              <div className="mt-8">
                <h3 className="font-heading font-semibold text-lg mb-4">O que oferecemos</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {service.offerings.map((offering, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-primary-foreground" />
                      </div>
                      <span className="text-foreground">{offering}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <div className="mt-8">
                <a
                  href={`https://wa.me/5511999857035?text=${encodeURIComponent(`Olá! Gostaria de uma cotação para o serviço de ${service.title}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  Fale agora com um de nossos especialistas
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={detailImage}
                  alt={`${service.title} - Detalhe`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialCarousel testimonials={testimonials} />

      {/* Contact Form */}
      <ContactForm serviceName={service.title} />

      {/* Back Button Bottom */}
      <section className="section-padding bg-secondary">
        <div className="section-container text-center">
          <Link 
            to="/" 
            className="btn-primary inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar para a página inicial
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ServicePage;

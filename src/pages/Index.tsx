import { useEffect } from 'react';
import { Users, Handshake, Building2, Award } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import HeroCarousel from '@/components/HeroCarousel';
import ServiceCard from '@/components/ServiceCard';
import ContactForm from '@/components/ContactForm';
import { services } from '@/data/services';

// Partner logos (placeholder)
const partners = [
  { name: 'Expo Center Norte', id: 1 },
  { name: 'São Paulo Expo', id: 2 },
  { name: 'Transamerica Expo Center', id: 3 },
  { name: 'WTC Events', id: 4 },
  { name: 'Pavilhão de Exposições', id: 5 },
  { name: 'Centro de Convenções', id: 6 },
];

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Carousel */}
      <section className="pt-20">
        <HeroCarousel />
      </section>

      {/* Slogan Banner */}
      <section className="bg-primary py-8">
        <div className="section-container text-center">
          <p className="text-xl md:text-2xl font-heading font-medium text-primary-foreground">
            Transformamos Ideias em Experiências Inesquecíveis
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="heading-secondary mb-4">Nossos Principais Serviços</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Oferecemos soluções completas para tornar seu evento um sucesso absoluto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-secondary">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="heading-secondary mb-4">Por Que Nos Escolher</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              A Confidence Eventos se destaca pela excelência na organização e execução de eventos corporativos. 
              Nossa equipe qualificada, comprometimento com a sustentabilidade e atenção aos detalhes garantem 
              que seu evento seja um sucesso completo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">Equipe Especializada</h3>
              <p className="text-sm text-muted-foreground">
                Profissionais qualificados e experientes para garantir a excelência do seu evento.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">Planejamento Completo</h3>
              <p className="text-sm text-muted-foreground">
                Organização detalhada com cronogramas, orçamentos e gestão eficiente de recursos.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Handshake className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">Suporte Contínuo</h3>
              <p className="text-sm text-muted-foreground">
                Acompanhamento personalizado durante todo o processo, do planejamento à execução.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">Compromisso Ambiental</h3>
              <p className="text-sm text-muted-foreground">
                Eventos com práticas sustentáveis e responsabilidade socioambiental.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="section-dark section-padding">
        <div className="section-container">
          <h2 className="heading-secondary text-center mb-12">Nossos Parceiros</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner) => (
              <div 
                key={partner.id} 
                className="flex items-center justify-center p-6 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
              >
                <span className="text-sm font-medium text-primary-foreground/80 text-center">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work With Us */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-secondary mb-6">Trabalhe Conosco</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Somos apaixonados por eventos e buscamos pessoas que compartilhem dessa energia.
            </p>
            <div className="space-y-4">
              <p className="text-foreground">
                Envie seu currículo para{' '}
                <a 
                  href="mailto:rh@confidenceeventos.com.br" 
                  className="text-primary font-medium hover:underline"
                >
                  rh@confidenceeventos.com.br
                </a>
              </p>
              <p className="text-foreground">
                ou entre em contato pelo WhatsApp{' '}
                <a 
                  href="https://wa.me/5511999857035" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary font-medium hover:underline"
                >
                  (11) 9 9985-7035
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;

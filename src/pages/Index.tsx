import { useEffect } from 'react';
import { Users, Handshake, Building2, Award } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import HeroCarousel from '@/components/HeroCarousel';
import ServiceCard from '@/components/ServiceCard';
import ContactForm from '@/components/ContactForm';
import ClientFeedbackSection from '@/components/ClientFeedbackSection';
import { services } from '@/data/services';
import servicesPerson from '@/assets/services-person.png';

// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } }
};

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
      <motion.section 
        className="bg-primary py-8 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="section-container text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-xl md:text-2xl font-heading font-medium text-primary-foreground">
            Transformamos Ideias em Experiências Inesquecíveis
          </p>
        </motion.div>
      </motion.section>

      {/* Services Section */}
      <section className="section-padding overflow-hidden">
        <div className="section-container">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="heading-secondary mb-4">Nossos Principais Serviços</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Oferecemos soluções completas para tornar seu evento um sucesso absoluto
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Person Image with Rotated Square */}
            <motion.div 
              className="relative flex-shrink-0 hidden lg:block"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInLeft}
            >
              {/* Rotated Square Background */}
              <motion.div 
                className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary -z-10"
                style={{ x: '-50%', y: '-50%' }}
                animate={{ rotate: [45, 50, 45] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* Person Image */}
              <motion.img 
                src={servicesPerson} 
                alt="Profissional de eventos" 
                className="relative z-10 w-72 h-auto object-contain"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Services Grid */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 flex-1"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
            >
              {services.map((service, index) => (
                <motion.div key={service.id} variants={scaleIn}>
                  <ServiceCard service={service} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-secondary overflow-hidden">
        <div className="section-container">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="heading-secondary mb-4">Por Que Nos Escolher</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              A Confidence Eventos se destaca pela excelência na organização e execução de eventos corporativos. 
              Nossa equipe qualificada, comprometimento com a sustentabilidade e atenção aos detalhes garantem 
              que seu evento seja um sucesso completo.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <motion.div className="text-center p-6" variants={fadeInUp}>
              <motion.div 
                className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Users className="w-8 h-8 text-primary-foreground" />
              </motion.div>
              <h3 className="font-heading font-semibold text-lg mb-2">Equipe Especializada</h3>
              <p className="text-sm text-muted-foreground">
                Profissionais qualificados e experientes para garantir a excelência do seu evento.
              </p>
            </motion.div>

            <motion.div className="text-center p-6" variants={fadeInUp}>
              <motion.div 
                className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Award className="w-8 h-8 text-primary-foreground" />
              </motion.div>
              <h3 className="font-heading font-semibold text-lg mb-2">Planejamento Completo</h3>
              <p className="text-sm text-muted-foreground">
                Organização detalhada com cronogramas, orçamentos e gestão eficiente de recursos.
              </p>
            </motion.div>

            <motion.div className="text-center p-6" variants={fadeInUp}>
              <motion.div 
                className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Handshake className="w-8 h-8 text-primary-foreground" />
              </motion.div>
              <h3 className="font-heading font-semibold text-lg mb-2">Suporte Contínuo</h3>
              <p className="text-sm text-muted-foreground">
                Acompanhamento personalizado durante todo o processo, do planejamento à execução.
              </p>
            </motion.div>

            <motion.div className="text-center p-6" variants={fadeInUp}>
              <motion.div 
                className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Building2 className="w-8 h-8 text-primary-foreground" />
              </motion.div>
              <h3 className="font-heading font-semibold text-lg mb-2">Compromisso Ambiental</h3>
              <p className="text-sm text-muted-foreground">
                Eventos com práticas sustentáveis e responsabilidade socioambiental.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Client Feedback Section */}
      <ClientFeedbackSection />

      {/* Partners Section */}
      <section className="section-dark section-padding overflow-hidden">
        <div className="section-container">
          <motion.h2 
            className="heading-secondary text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Nossos Parceiros
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {partners.map((partner) => (
              <motion.div 
                key={partner.id} 
                className="flex items-center justify-center p-6 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                variants={scaleIn}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="text-sm font-medium text-primary-foreground/80 text-center">
                  {partner.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Work With Us */}
      <section className="section-padding overflow-hidden">
        <div className="section-container">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="heading-secondary mb-6">Trabalhe Conosco</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Somos apaixonados por eventos e buscamos pessoas que compartilhem dessa energia.
            </p>
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <p className="text-foreground">
                Envie seu currículo para{' '}
                <motion.a 
                  href="mailto:rh@confidenceeventos.com.br" 
                  className="text-primary font-medium hover:underline"
                  whileHover={{ scale: 1.05 }}
                >
                  rh@confidenceeventos.com.br
                </motion.a>
              </p>
              <p className="text-foreground">
                ou entre em contato pelo WhatsApp{' '}
                <motion.a 
                  href="https://wa.me/5511999857035" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary font-medium hover:underline"
                  whileHover={{ scale: 1.05 }}
                >
                  (11) 9 9985-7035
                </motion.a>
              </p>
            </motion.div>
          </motion.div>
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

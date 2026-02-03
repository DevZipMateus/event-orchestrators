import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import logo from '@/assets/logo_confidence.webp';
import { services } from '@/data/services';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="section-container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <img src={logo} alt="Confidence Eventos" className="h-12 w-auto brightness-0 invert" />
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Transformamos ideias em experiências inesquecíveis. Especialistas em organização, criação e execução de eventos corporativos.
            </p>
            <p className="text-primary-foreground/60 text-sm">
              CNPJ: 46.426.349/0001-90
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Nossos Serviços</h4>
            <ul className="space-y-3">
              {services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/${service.slug}`}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-primary-foreground/80">+55 (11) 2364-1135</p>
                  <p className="text-primary-foreground/80">+55 (11) 2364-1135</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <a 
                  href="mailto:comercial@confidenceeventos.com.br"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  comercial@confidenceeventos.com.br
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-primary-foreground/80">
                  Av. Vieira de Morais, 2110<br />
                  Conjunto 916, São Paulo - SP<br />
                  CEP: 04.617-007
                </p>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Horário de Atendimento</h4>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <div className="text-sm text-primary-foreground/80">
                <p>Segunda a Sexta</p>
                <p>09:00 - 18:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} Confidence Eventos. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <Link to="/politica-privacidade" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Política de Privacidade
              </Link>
              <Link to="/termos-uso" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

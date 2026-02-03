import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Service } from '@/data/services';

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

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  const imageUrl = serviceImages[service.id];

  return (
    <Link to={`/${service.slug}`} className="card-service group">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={imageUrl}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="font-heading font-semibold text-lg text-card-foreground mb-2">
          {service.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
          {service.shortDescription}
        </p>
        <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
          Saiba mais
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;

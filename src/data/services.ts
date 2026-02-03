export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  offerings: string[];
  heroTagline: string;
}

export const services: Service[] = [
  {
    id: "limpeza",
    slug: "limpeza-para-eventos",
    title: "Limpeza para Eventos",
    shortDescription: "Ambientes impecáveis antes, durante e pós-evento.",
    heroTagline: "Ambientes impecáveis antes, durante e pós-evento.",
    fullDescription: `A limpeza para eventos é um fator crucial para o sucesso de qualquer evento corporativo em São Paulo. Nossa equipe especializada garante ambientes impecáveis antes, durante e após a realização do seu projeto, assegurando o conforto e a segurança sanitária de todos os participantes. Atuamos com discrição e eficiência, realizando a higienização de áreas comuns, banheiros, praças de alimentação e estandes.

Entendemos que cada evento corporativo em São Paulo possui particularidades, por isso, elaboramos um plano de limpeza personalizado que se adapta ao fluxo de pessoas e à estrutura do local. Utilizamos produtos de alta performance e equipamentos adequados para diferentes tipos de superfícies, sempre respeitando as normas ambientais e de segurança.

Seja um congresso, feira, workshop ou confraternização, conte com nossa excelência em serviços de limpeza. Mantenha a imagem da sua empresa impecável e proporcione uma experiência agradável aos seus convidados com nosso suporte profissional.`,
    offerings: [
      "Limpeza pré-evento",
      "Manutenção durante o evento",
      "Limpeza pós-evento",
      "Higienização de banheiros",
      "Coleta seletiva de resíduos",
      "Equipe uniformizada e treinada"
    ]
  },
  {
    id: "bombeiro",
    slug: "bombeiro-civil-para-eventos",
    title: "Bombeiro Civil para Eventos",
    shortDescription: "Prevenção, protocolos e resposta rápida.",
    heroTagline: "Prevenção, protocolos e resposta rápida.",
    fullDescription: `A segurança é prioridade absoluta em qualquer evento corporativo em São Paulo. Nossa equipe de Bombeiro Civil atua na prevenção e combate a incêndios, primeiros socorros e gestão de riscos, garantindo a tranquilidade de organizadores e convidados. Seguimos rigorosamente as normas técnicas e legislações vigentes para assegurar que seu evento esteja em total conformidade.

Nossos profissionais são altamente treinados para agir com rapidez e precisão em situações de emergência, realizando vistorias prévias, monitoramento constante e orientação de público. A presença de bombeiros civis qualificados é fundamental para a proteção da vida e do patrimônio, especialmente em locais de grande circulação.

Garanta o sucesso do seu evento corporativo em São Paulo com nossa equipe de bombeiros civis. Oferecemos planejamento estratégico de segurança, equipamentos modernos e profissionais preparados para lidar com qualquer imprevisto, permitindo que você foque no que realmente importa: o conteúdo e a experiência do seu evento.`,
    offerings: [
      "Brigada de incêndio certificada",
      "Plano de evacuação",
      "Primeiros socorros",
      "Inspeção de equipamentos",
      "Relatório técnico",
      "Atendimento 24 horas"
    ]
  },
  {
    id: "carregadores",
    slug: "carregadores-para-eventos",
    title: "Carregadores para Eventos",
    shortDescription: "Movimentação segura e eficiente para o seu evento.",
    heroTagline: "Movimentação segura e eficiente para o seu evento.",
    fullDescription: `Contamos com equipes de carregadores experientes para auxiliar na montagem, operação e desmontagem, seguindo protocolos de segurança e cronogramas definidos. Realizamos movimentação de estruturas, mobiliários e materiais promocionais com organização e cuidado, garantindo fluidez na logística do evento.

Nossa atuação é coordenada com fornecedores e produção, reduzindo riscos e atrasos, e proporcionando uma operação ágil e eficiente. Cada membro da nossa equipe é treinado para manusear diferentes tipos de materiais e equipamentos, sempre priorizando a segurança e a integridade dos itens transportados.

Seja para feiras, congressos, exposições ou eventos corporativos, nossa equipe de carregadores está preparada para garantir que toda a logística de movimentação seja executada com excelência e pontualidade.`,
    offerings: [
      "Montagem de estruturas",
      "Desmontagem pós-evento",
      "Transporte de materiais",
      "Movimentação de mobiliários",
      "Logística coordenada",
      "Equipe experiente e uniformizada"
    ]
  },
  {
    id: "tradutores",
    slug: "tradutores-para-eventos",
    title: "Tradutores para Eventos",
    shortDescription: "Apoio bilíngue e tradução simultânea.",
    heroTagline: "Apoio bilíngue e tradução simultânea.",
    fullDescription: `Oferecemos tradutores e intérpretes para recepção de convidados internacionais, tradução simultânea em palestras e suporte em múltiplos idiomas. Equipe preparada para atuar com discrição e eficiência, alinhada à identidade do evento e às necessidades do seu público.

Ideal para congressos, feiras e eventos corporativos com conteúdo internacional e presença de convidados estrangeiros. Nossos profissionais dominam diversos idiomas e possuem experiência em tradução técnica, comercial e institucional.

Garantimos uma comunicação fluida e precisa, eliminando barreiras linguísticas e proporcionando uma experiência inclusiva para todos os participantes do seu evento.`,
    offerings: [
      "Tradução simultânea",
      "Recepção bilíngue",
      "Intérpretes especializados",
      "Múltiplos idiomas",
      "Suporte em palestras",
      "Atendimento discreto e profissional"
    ]
  },
  {
    id: "recepcionista",
    slug: "recepcionista-para-eventos",
    title: "Recepcionista para Eventos",
    shortDescription: "A primeira impressão é a que fica.",
    heroTagline: "A primeira impressão é a que fica.",
    fullDescription: `Nossas Recepcionistas para Eventos, sejam elas bilíngues ou monolíngues, são colaboradoras especializadas e meticulosamente treinadas para prestar um acolhimento de excelência, assegurando organização rigorosa, fluidez operacional e uma recepção calorosa aos participantes.

Elas se dedicam ao credenciamento estratégico, à boas-vindas aos convidados, à orientação detalhada sobre o cronograma e logística, à gestão de acessos e ao suporte integral, sempre com cordialidade, prontidão e a devida postura profissional.

Para encontros nacionais e internacionais, nossas recepcionistas bilíngues garantem uma interlocução eficaz com os visitantes estrangeiros, proporcionando uma vivência acessível e de elevado padrão. Adicionalmente, cada Recepcionista para Evento é capacitada a interagir com diversos perfis de público, mantendo um nível de serviço superior e projetando a melhor imagem da sua instituição ou marca.

Abrangendo feiras, congressos, lançamentos, eventos corporativos ou celebrações sociais, nosso time de recepção está pronto para endossar sua empresa com máximo profissionalismo, resultando em um evento perfeitamente orquestrado e uma experiência inesquecível para todos os presentes!`,
    offerings: [
      "Recepção bilíngue e monolíngue",
      "Credenciamento estratégico",
      "Boas-vindas e orientação",
      "Gestão de acessos",
      "Suporte integral aos participantes",
      "Postura profissional e cordial"
    ]
  },
  {
    id: "seguranca",
    slug: "segurancas-para-eventos",
    title: "Seguranças para Eventos",
    shortDescription: "Proteção e tranquilidade para todos.",
    heroTagline: "Proteção e tranquilidade para todos.",
    fullDescription: `Nossa equipe de Proteção e Segurança para Eventos é composta por seguranças para evento profissionais altamente qualificados e rigorosamente treinados para assegurar a salvaguarda de participantes, ativos e a fluidez do seu evento.

Com uma abordagem estratégica e sutil, eles executam o controle de acesso, vigiam o ambiente, antecipam incidentes e administram prontamente situações de risco, garantindo um evento íntegro e impecavelmente organizado.

Dispomos de especialistas aptos a atuar em eventos de diversas magnitudes – de pequeno a grande porte –, moldando-se precisamente às demandas singulares de cada celebração. Nossa equipe adota diretrizes estritas de segurança, mantendo uma conduta impecável e vigilância constante para proporcionar serenidade total ao público, promotores e convidados.

Seja para concertos, exposições, encontros corporativos, celebrações privadas ou mega produções, oferecemos um serviço de segurança para eventos excepcional e eficaz, criando um espaço seguro para todos. Confie em nossa vasta experiência para um evento totalmente resguardado e livre de contratempos.`,
    offerings: [
      "Controle de acesso estratégico",
      "Vigilância constante",
      "Prevenção de incidentes",
      "Gestão de situações de risco",
      "Eventos de pequeno a grande porte",
      "Conduta profissional impecável"
    ]
  },
  {
    id: "staff",
    slug: "staff-para-eventos",
    title: "Staff para Eventos",
    shortDescription: "Apoio operacional e organização.",
    heroTagline: "Apoio operacional e organização.",
    fullDescription: `Equipe de staff para credenciamento, orientação de público, organização de filas e apoio logístico. Profissionais com postura e comunicação alinhadas à identidade do evento, focados em eficiência e experiência dos participantes.

Atuação coordenada com produção e fornecedores para garantir fluxo adequado e cumprimento de cronograma. Nossa equipe é treinada para lidar com diferentes situações e públicos, sempre mantendo a calma e o profissionalismo.

Oferecemos suporte completo em todas as etapas do evento, desde o credenciamento inicial até o encerramento, garantindo que tudo ocorra conforme planejado.`,
    offerings: [
      "Credenciamento",
      "Orientação de público",
      "Organização de filas",
      "Apoio logístico",
      "Comunicação alinhada ao evento",
      "Atuação coordenada com produção"
    ]
  },
  {
    id: "locacoes",
    slug: "locacoes-para-eventos",
    title: "Locações para Eventos",
    shortDescription: "Estruturas e equipamentos com logística completa.",
    heroTagline: "Estruturas e equipamentos com logística completa.",
    fullDescription: `Fornecemos tendas, banheiros químicos, ambulâncias, mobiliários, equipamentos e demais soluções para estruturação do seu evento. Gestão de logística, montagem e operação coordenadas com fornecedores e produção, garantindo eficiência e segurança.

Opções personalizadas conforme porte e necessidades, com foco em qualidade, sustentabilidade e atendimento. Trabalhamos com os melhores fornecedores do mercado para garantir equipamentos de primeira linha.

Nossa equipe cuida de toda a logística, desde a entrega até a retirada dos equipamentos, permitindo que você foque na experiência do seu evento.`,
    offerings: [
      "Tendas e coberturas",
      "Banheiros químicos",
      "Ambulâncias",
      "Mobiliário para eventos",
      "Gestão de logística e montagem",
      "Opções personalizadas"
    ]
  }
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(s => s.slug === slug);
};

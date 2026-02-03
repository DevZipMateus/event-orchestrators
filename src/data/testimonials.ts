export interface Testimonial {
  id: number;
  name: string;
  company: string;
  role: string;
  text: string;
  serviceId: string;
}

const generateTestimonials = (): Testimonial[] => {
  const serviceTestimonials: Record<string, { names: string[], companies: string[], roles: string[], texts: string[] }> = {
    limpeza: {
      names: ["Maria Santos", "Carlos Oliveira", "Ana Paula", "Roberto Silva", "Fernanda Lima", "João Pedro", "Luciana Martins", "André Costa", "Patricia Souza", "Marcelo Alves"],
      companies: ["Empresa Tech SP", "Feira Brasil Expo", "Congresso Nacional", "Workshop Digital", "Evento Prime", "Fórum Empresarial", "Conferência Global", "Simpósio Inovação", "Encontro Corporativo", "Festival Business"],
      roles: ["Gerente de Eventos", "Coordenadora", "Diretor", "Produtora Executiva", "CEO", "Organizador", "Diretora de Operações", "Supervisor", "Gestora", "Coordenador Geral"],
      texts: [
        "A equipe de limpeza foi impecável! Mantiveram tudo organizado durante todo o evento de 3 dias.",
        "Profissionais discretos e eficientes. O espaço ficou impecável do início ao fim.",
        "Contratamos para um congresso de 5 mil pessoas e a limpeza foi exemplar.",
        "Superaram nossas expectativas. A equipe é muito bem treinada e pontual.",
        "Higienização perfeita, mesmo com alto fluxo de pessoas. Recomendo demais!",
        "Trabalho excepcional na limpeza pós-evento. Entregaram o espaço como novo.",
        "Equipe uniformizada, educada e extremamente competente. Contrataremos novamente.",
        "A limpeza durante o evento foi contínua e sem interrupções. Excelente serviço!",
        "Profissionalismo nota 10. Os banheiros ficaram impecáveis o tempo todo.",
        "Coleta seletiva funcionou perfeitamente. Ótima consciência ambiental da equipe."
      ]
    },
    bombeiro: {
      names: ["Ricardo Mendes", "Beatriz Santos", "Fernando Rocha", "Camila Dias", "Paulo Henrique", "Juliana Ferreira", "Thiago Campos", "Marina Ribeiro", "Eduardo Lima", "Vanessa Martins"],
      companies: ["Centro de Convenções SP", "Arena Events", "Pavilhão Industrial", "Teatro Municipal", "Espaço Cultural", "Shopping Center Norte", "Clube Empresarial", "Hotel Grand", "Parque de Exposições", "Centro Esportivo"],
      roles: ["Diretor de Segurança", "Coordenadora de Eventos", "Gerente Operacional", "Produtora", "Supervisor de Segurança", "Diretora Administrativa", "Organizador", "Gestora de Eventos", "Coordenador", "Diretora"],
      texts: [
        "Brigada de incêndio extremamente competente. Nos sentimos totalmente seguros.",
        "Profissionais certificados e muito preparados. Fizeram toda a diferença no nosso evento.",
        "O plano de evacuação foi apresentado com clareza. Equipe muito profissional.",
        "Atendimento 24h foi essencial para nosso evento noturno. Excelente suporte.",
        "Vistorias prévias detalhadas e relatório técnico completo. Trabalho exemplar.",
        "A presença da equipe de bombeiros civis trouxe tranquilidade a todos os participantes.",
        "Profissionais ágeis e bem treinados. Resolveram um princípio de problema rapidamente.",
        "Equipamentos modernos e equipe certificada. Segurança em primeiro lugar.",
        "Contratamos para uma feira de grande porte e o serviço foi impecável.",
        "Primeiros socorros disponíveis o tempo todo. Atenderam uma emergência com excelência."
      ]
    },
    carregadores: {
      names: ["Lucas Santos", "Amanda Oliveira", "Rafael Costa", "Daniela Silva", "Marcos Pereira", "Isabela Rocha", "Felipe Almeida", "Cristina Lima", "Bruno Martins", "Renata Souza"],
      companies: ["Stand Design", "Montagem Express", "Feira Tecnológica", "Exposição Nacional", "Congresso Médico", "Workshop Industrial", "Evento Automotivo", "Salão de Negócios", "Mostra Cultural", "Festival Gastronômico"],
      roles: ["Gerente de Produção", "Coordenadora de Montagem", "Diretor Técnico", "Produtora Executiva", "Supervisor de Logística", "Organizadora", "Coordenador de Operações", "Diretora de Produção", "Gerente de Eventos", "Coordenadora"],
      texts: [
        "Montagem e desmontagem realizadas no prazo. Equipe muito organizada.",
        "Movimentação de estruturas pesadas com total segurança. Profissionais capacitados.",
        "Logística impecável! Coordenaram tudo com nossos fornecedores perfeitamente.",
        "Equipe pontual e muito cuidadosa com os materiais. Recomendo fortemente.",
        "Desmontagem pós-evento foi rápida e eficiente. Liberaram o espaço antes do prazo.",
        "Profissionais uniformizados e muito respeitosos. Trabalho de primeira.",
        "Movimentação de mobiliário executada com precisão. Zero danos aos materiais.",
        "Coordenação perfeita entre equipe de carregadores e produção do evento.",
        "Transporte de materiais promocionais realizado com todo cuidado necessário.",
        "Equipe experiente que entende as demandas de eventos de grande porte."
      ]
    },
    tradutores: {
      names: ["Sofia Martinez", "Gabriel Santos", "Helena Müller", "Leonardo Costa", "Laura Chen", "Pedro Yamamoto", "Carolina Schmidt", "Matheus Silva", "Valentina Rossi", "Nicolas Ferreira"],
      companies: ["Congresso Internacional", "Tech Summit Brasil", "Fórum Global", "Conferência Médica", "Evento Multinacional", "Seminário Jurídico", "Workshop Executivo", "Cúpula Empresarial", "Encontro Diplomático", "Feira Internacional"],
      roles: ["Diretora de Relações Internacionais", "Organizador", "Coordenadora de Conteúdo", "CEO", "Gerente de Eventos", "Coordenador Internacional", "Diretora Executiva", "Produtor", "Gestora de Protocolo", "Diretor de Operações"],
      texts: [
        "Tradução simultânea impecável em três idiomas. Profissionais de altíssimo nível.",
        "Intérpretes especializados que dominam a terminologia técnica do nosso setor.",
        "Recepção bilíngue encantou nossos convidados estrangeiros. Serviço exemplar.",
        "Suporte em inglês, espanhol e alemão funcionou perfeitamente durante todo o evento.",
        "Tradutores discretos e extremamente competentes. Comunicação fluida garantida.",
        "A equipe de tradução facilitou negociações importantes com parceiros internacionais.",
        "Profissionais pontuais e muito bem preparados. Tradução técnica perfeita.",
        "Atendimento multilíngue que fez toda a diferença no nosso congresso internacional.",
        "Intérpretes experientes que transmitiram as nuances culturais corretamente.",
        "Serviço de tradução que elevou o padrão do nosso evento. Altamente recomendado."
      ]
    },
    recepcionista: {
      names: ["Bianca Almeida", "Gustavo Santos", "Larissa Oliveira", "Rodrigo Costa", "Amanda Ferreira", "Vinícius Lima", "Natália Rocha", "Diego Silva", "Mariana Martins", "Caio Pereira"],
      companies: ["Evento Premium", "Lançamento Corporativo", "Gala Beneficente", "Feira de Negócios", "Congresso Empresarial", "Workshop VIP", "Conferência Executiva", "Seminário Nacional", "Encontro de Líderes", "Fórum de Inovação"],
      roles: ["Diretora de Marketing", "Gerente de Eventos", "Coordenadora", "CEO", "Diretor Comercial", "Produtora Executiva", "Organizador", "Gestora de Relações", "Coordenador", "Diretora de Operações"],
      texts: [
        "Recepcionistas impecáveis! A primeira impressão do nosso evento foi perfeita.",
        "Credenciamento ágil e organizado. Filas fluíram rapidamente.",
        "Equipe bilíngue atendeu nossos convidados internacionais com excelência.",
        "Postura profissional e cordialidade marcaram o atendimento. Nota 10!",
        "Recepção calorosa que encantou todos os participantes do evento.",
        "Gestão de acessos funcionou perfeitamente. Equipe muito bem treinada.",
        "Orientação sobre cronograma e logística foi clara e eficiente.",
        "Profissionais elegantes e extremamente competentes. Imagem impecável.",
        "Suporte integral durante todo o evento. Sempre disponíveis e atenciosos.",
        "A equipe de recepção elevou o padrão do nosso evento corporativo."
      ]
    },
    seguranca: {
      names: ["Thiago Mendes", "Priscila Santos", "Alexandre Rocha", "Fernanda Costa", "Bruno Almeida", "Carla Ferreira", "Ricardo Lima", "Patrícia Silva", "Eduardo Martins", "Vanessa Oliveira"],
      companies: ["Show Nacional", "Evento Esportivo", "Feira Industrial", "Congresso Político", "Festival Cultural", "Exposição de Arte", "Convenção Empresarial", "Lançamento de Produto", "Gala de Premiação", "Conferência de Tecnologia"],
      roles: ["Diretor de Segurança", "Produtora Executiva", "Gerente de Operações", "Coordenador", "CEO", "Organizadora", "Diretor de Eventos", "Gestora de Segurança", "Coordenador Geral", "Diretora de Produção"],
      texts: [
        "Controle de acesso estratégico e eficiente. Evento transcorreu com total segurança.",
        "Equipe de segurança discreta e profissional. Convidados se sentiram protegidos.",
        "Prevenção de incidentes funcionou perfeitamente. Equipe muito preparada.",
        "Vigilância constante que nos permitiu focar na produção do evento.",
        "Profissionais de conduta impecável. Segurança de alto padrão.",
        "Gestão de situações de risco foi exemplar. Equipe altamente treinada.",
        "Segurança para evento de grande porte executada com excelência.",
        "Controle de multidão eficiente e respeitoso. Público muito bem orientado.",
        "Equipe que transmite confiança e profissionalismo. Recomendo fortemente.",
        "Serviço de segurança que fez toda a diferença no sucesso do nosso evento."
      ]
    },
    staff: {
      names: ["Juliana Alves", "Marcelo Santos", "Beatriz Lima", "André Oliveira", "Carolina Costa", "Felipe Rocha", "Mariana Silva", "Rodrigo Ferreira", "Isabela Martins", "Lucas Pereira"],
      companies: ["Feira de Tecnologia", "Congresso Médico", "Workshop Empresarial", "Exposição Cultural", "Seminário Jurídico", "Evento Educacional", "Conferência de RH", "Encontro Setorial", "Fórum de Líderes", "Festival Corporativo"],
      roles: ["Coordenadora de Eventos", "Diretor de Produção", "Gerente de Operações", "Produtora Executiva", "Organizador", "Diretora", "Coordenador", "Gestora de Eventos", "Supervisor", "Coordenadora Geral"],
      texts: [
        "Staff extremamente organizado e eficiente. Apoio logístico perfeito.",
        "Credenciamento ágil que evitou filas. Equipe muito bem treinada.",
        "Orientação de público funcionou perfeitamente. Participantes bem direcionados.",
        "Comunicação alinhada com a identidade do nosso evento. Profissionalismo total.",
        "Organização de filas eficiente mesmo com alto volume de pessoas.",
        "Atuação coordenada com produção que garantiu o cumprimento do cronograma.",
        "Equipe proativa que antecipou necessidades. Excelente suporte operacional.",
        "Staff uniformizado e com postura profissional impecável.",
        "Apoio logístico que fez o evento fluir sem contratempos.",
        "Profissionais focados na experiência dos participantes. Nota 10!"
      ]
    },
    locacoes: {
      names: ["Rafael Mendes", "Camila Santos", "Gustavo Lima", "Amanda Oliveira", "Pedro Costa", "Larissa Rocha", "Bruno Silva", "Natália Ferreira", "Diego Martins", "Mariana Alves"],
      companies: ["Evento ao Ar Livre", "Feira Agropecuária", "Festival de Música", "Congresso Nacional", "Exposição Industrial", "Workshop Regional", "Conferência Empresarial", "Encontro Esportivo", "Seminário Educacional", "Fórum de Negócios"],
      roles: ["Diretor de Produção", "Coordenadora de Eventos", "Gerente de Operações", "Produtora Executiva", "Organizador", "Diretora de Logística", "Coordenador Geral", "Gestora de Eventos", "Supervisor de Montagem", "Diretora"],
      texts: [
        "Tendas de qualidade excepcional. Montagem rápida e segura.",
        "Banheiros químicos limpos e bem posicionados. Logística perfeita.",
        "Ambulância disponível durante todo o evento. Segurança garantida.",
        "Mobiliário elegante que combinou perfeitamente com a proposta do evento.",
        "Gestão de logística impecável. Entrega e retirada no prazo combinado.",
        "Estruturas robustas que resistiram às intempéries. Qualidade superior.",
        "Opções personalizadas que atenderam todas as nossas necessidades.",
        "Equipamentos modernos e bem conservados. Ótimo custo-benefício.",
        "Montagem coordenada com outros fornecedores. Eficiência total.",
        "Locações que elevaram o padrão do nosso evento. Altamente recomendado."
      ]
    }
  };

  const testimonials: Testimonial[] = [];
  let id = 1;

  Object.entries(serviceTestimonials).forEach(([serviceId, data]) => {
    for (let i = 0; i < 10; i++) {
      testimonials.push({
        id: id++,
        name: data.names[i],
        company: data.companies[i],
        role: data.roles[i],
        text: data.texts[i],
        serviceId
      });
    }
  });

  return testimonials;
};

export const testimonials = generateTestimonials();

export const getTestimonialsByService = (serviceId: string): Testimonial[] => {
  return testimonials.filter(t => t.serviceId === serviceId);
};

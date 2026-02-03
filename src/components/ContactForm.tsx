import { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';
import { z } from 'zod';

const contactSchema = z.object({
  nome: z.string().trim().min(2, 'Nome deve ter pelo menos 2 caracteres').max(100),
  email: z.string().trim().email('E-mail inválido').max(255),
  telefone: z.string().trim().min(10, 'Telefone deve ter pelo menos 10 dígitos').max(20),
  comoConheceu: z.string().optional(),
  informacoesExtras: z.string().max(1000).optional(),
});

interface ContactFormProps {
  serviceName?: string;
}

const ContactForm = ({ serviceName }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    comoConheceu: '',
    informacoesExtras: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const validatedData = contactSchema.parse(formData);
      
      // Build WhatsApp message
      let message = `Olá! Meu nome é ${validatedData.nome}.\n\n`;
      if (serviceName) {
        message += `Tenho interesse no serviço: ${serviceName}\n\n`;
      }
      message += `E-mail: ${validatedData.email}\n`;
      message += `Telefone: ${validatedData.telefone}\n`;
      if (validatedData.comoConheceu) {
        message += `\nComo nos conheceu: ${validatedData.comoConheceu}`;
      }
      if (validatedData.informacoesExtras) {
        message += `\nInformações extras: ${validatedData.informacoesExtras}`;
      }

      const phoneNumber = '5511999857035';
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
      
      // Reset form
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        comoConheceu: '',
        informacoesExtras: '',
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach(err => {
          if (err.path[0]) {
            newErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(newErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section-padding bg-secondary" id="contato">
      <div className="section-container">
        <div className="max-w-2xl mx-auto">
          <h2 className="heading-secondary text-center mb-3 sm:mb-4">
            Fale com um Especialista
          </h2>
          <p className="text-center text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">
            Preencha o formulário abaixo e entraremos em contato em breve.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Nome */}
              <div className="sm:col-span-2">
                <label htmlFor="nome" className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                  Nome *
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors text-sm sm:text-base ${
                    errors.nome ? 'border-destructive' : 'border-input'
                  }`}
                  placeholder="Seu nome completo"
                />
                {errors.nome && <p className="text-destructive text-xs sm:text-sm mt-1">{errors.nome}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors text-sm sm:text-base ${
                    errors.email ? 'border-destructive' : 'border-input'
                  }`}
                  placeholder="seu@email.com"
                />
                {errors.email && <p className="text-destructive text-xs sm:text-sm mt-1">{errors.email}</p>}
              </div>

              {/* Telefone */}
              <div>
                <label htmlFor="telefone" className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                  Telefone (DDD) *
                </label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors text-sm sm:text-base ${
                    errors.telefone ? 'border-destructive' : 'border-input'
                  }`}
                  placeholder="(11) 99999-9999"
                />
                {errors.telefone && <p className="text-destructive text-xs sm:text-sm mt-1">{errors.telefone}</p>}
              </div>

              {/* Como nos conheceu */}
              <div className="sm:col-span-2">
                <label htmlFor="comoConheceu" className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                  Como nos conheceu?
                </label>
                <select
                  id="comoConheceu"
                  name="comoConheceu"
                  value={formData.comoConheceu}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors text-sm sm:text-base"
                >
                  <option value="">Selecione uma opção</option>
                  <option value="Google">Google</option>
                  <option value="Indicação">Indicação</option>
                  <option value="Redes Sociais">Redes Sociais</option>
                  <option value="Evento">Participei de um evento</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>

              {/* Informações extras */}
              <div className="sm:col-span-2">
                <label htmlFor="informacoesExtras" className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                  Informações Extras
                </label>
                <textarea
                  id="informacoesExtras"
                  name="informacoesExtras"
                  value={formData.informacoesExtras}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors resize-none text-sm sm:text-base"
                  placeholder="Conte-nos mais sobre o seu evento ou necessidade..."
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                  <span className="text-sm sm:text-base">Enviando...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base">Enviar Mensagem</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

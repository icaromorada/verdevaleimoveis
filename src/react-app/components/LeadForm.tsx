import { useState } from 'react';
import { Building2, Phone, Mail, MapPin, Home } from 'lucide-react';

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    propertyType: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Número de WhatsApp para contato (o mesmo do botão de contato)
    const phoneNumber = '5512991968709';
    
    // Construa a mensagem com os dados do formulário
    const whatsappMessage = `Olá, Verde Vale Imóveis! Tenho interesse em cadastrar meu imóvel para locação.

📋 Dados do Proprietário:
👤 Nome: ${formData.name}
📞 Telefone: ${formData.phone}
📧 E-mail: ${formData.email}

🏠 Detalhes do Imóvel:
📍 Endereço: ${formData.address}
🏘️ Tipo de Imóvel: ${formData.propertyType}

Por favor, entre em contato para agendar uma avaliação do meu imóvel.`;

    // Codifique a mensagem para URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Crie o link completo do WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Abra o link do WhatsApp em uma nova aba
    window.open(whatsappUrl, '_blank');
    
    // Aguarde um momento para garantir que o WhatsApp foi aberto
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Limpe o formulário após o redirecionamento
    setFormData({
      name: '',
      phone: '',
      email: '',
      address: '',
      propertyType: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <section id="lead-form" className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white p-12 rounded-3xl shadow-xl">
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Building2 className="h-10 w-10 text-emerald-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              WhatsApp Aberto com Sucesso!
            </h2>
            <p className="text-xl text-slate-600 mb-6">
              Sua mensagem foi preparada no WhatsApp com todos os dados do seu imóvel. 
              Por favor, envie-a para nossa equipe para que possamos agendar a avaliação.
            </p>
            <p className="text-slate-500">
              Se o WhatsApp não abriu automaticamente, clique no botão verde no canto da tela ou entre em contato pelo (12) 99196-8709.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="lead-form" className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Cadastre seu imóvel agora
          </h2>
          <p className="text-xl text-slate-600">
            Preencha o formulário e nossa equipe entrará em contato
          </p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                  Nome completo *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <Building2 className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="block w-full pl-10 pr-3 py-3 border border-slate-300 rounded-xl focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    placeholder="Seu nome completo"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                  Telefone *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <Phone className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="block w-full pl-10 pr-3 py-3 border border-slate-300 rounded-xl focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    placeholder="(11) 99999-9999"
                  />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                E-mail *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <Mail className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="block w-full pl-10 pr-3 py-3 border border-slate-300 rounded-xl focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-slate-700 mb-2">
                Endereço do imóvel *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <MapPin className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleInputChange}
                  className="block w-full pl-10 pr-3 py-3 border border-slate-300 rounded-xl focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  placeholder="Rua, número, bairro, cidade"
                />
              </div>
            </div>

            <div>
              <label htmlFor="propertyType" className="block text-sm font-medium text-slate-700 mb-2">
                Tipo do imóvel *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <Home className="h-5 w-5 text-slate-400" />
                </div>
                <select
                  id="propertyType"
                  name="propertyType"
                  required
                  value={formData.propertyType}
                  onChange={handleInputChange}
                  className="block w-full pl-10 pr-3 py-3 border border-slate-300 rounded-xl focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                >
                  <option value="">Selecione o tipo</option>
                  <option value="apartamento">Apartamento</option>
                  <option value="casa">Casa</option>
                  <option value="comercial">Comercial</option>
                  <option value="terreno">Terreno</option>
                  <option value="outros">Outros</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white py-4 px-8 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {isSubmitting ? 'Enviando...' : 'Cadastrar meu imóvel agora'}
            </button>
          </form>

          <p className="text-sm text-slate-500 text-center mt-6">
            * Campos obrigatórios. Seus dados estão protegidos conosco.
          </p>
        </div>
      </div>
    </section>
  );
}

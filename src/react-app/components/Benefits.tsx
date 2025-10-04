import { Globe, Shield, FileText, DollarSign, Users, Home } from 'lucide-react';

const benefits = [
  {
    icon: Globe,
    title: 'Divulgação Ampla',
    description: 'Seu imóvel em grandes portais imobiliários e redes sociais para máxima visibilidade.'
  },
  {
    icon: Shield,
    title: 'Seleção Rigorosa',
    description: 'Análise de crédito completa e verificação de referências para inquilinos confiáveis.'
  },
  {
    icon: FileText,
    title: 'Contrato Seguro',
    description: 'Assessoria jurídica completa com contratos que protegem seus direitos.'
  },
  {
    icon: DollarSign,
    title: 'Gestão Financeira',
    description: 'Recebimento pontual dos aluguéis e repasses organizados na data combinada.'
  },
  {
    icon: Users,
    title: 'Equipe Especializada',
    description: 'Profissionais experientes sempre à disposição para resolver qualquer questão.'
  },
  {
    icon: Home,
    title: 'Manutenção Preventiva',
    description: 'Acompanhamento do estado do imóvel e orientações para manter seu valor.'
  }
];

export default function Benefits() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Por que escolher a Verde Vale Imóveis?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Oferecemos um serviço completo de gestão imobiliária para garantir que seu investimento seja rentável e seguro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-100"
              >
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                  <IconComponent className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

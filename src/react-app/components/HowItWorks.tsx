import { FileText, Camera, Users } from 'lucide-react';

const steps = [
  {
    number: '1',
    icon: FileText,
    title: 'Preencha o formulário',
    description: 'Cadastre seu imóvel com informações básicas e deixe seus contatos conosco.'
  },
  {
    number: '2',
    icon: Camera,
    title: 'Avaliação e fotos',
    description: 'Nossa equipe agenda uma visita para avaliar e fotografar profissionalmente seu imóvel.'
  },
  {
    number: '3',
    icon: Users,
    title: 'Encontramos o inquilino',
    description: 'Divulgamos seu imóvel e selecionamos o inquilino ideal com toda segurança.'
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-emerald-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Como funciona?
          </h2>
          <p className="text-xl text-slate-300">
            Processo simples e transparente para alugar seu imóvel
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="text-center">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-emerald-600 font-bold text-lg">{step.number}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {step.description}
                </p>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 transform -translate-y-1/2 left-full w-8 h-0.5 bg-emerald-400"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

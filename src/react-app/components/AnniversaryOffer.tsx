import { Gift, Calendar, TrendingUp } from 'lucide-react';

export default function AnniversaryOffer() {
  const scrollToForm = () => {
    const form = document.getElementById('lead-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-800 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-700/30 to-transparent"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Anniversary badge */}
        <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/30">
          <Calendar className="h-5 w-5 mr-2" />
          <span className="font-semibold">Oferta Especial de Outubro</span>
        </div>

        <div className="flex justify-center mb-6">
          <div className="relative">
            <Gift className="h-20 w-20 text-yellow-300 drop-shadow-lg" />
            <div className="absolute -top-2 -right-2 bg-yellow-400 text-emerald-800 text-xs font-bold px-2 py-1 rounded-full">
              28
            </div>
          </div>
        </div>

        <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          <span className="text-yellow-300">28 Anos</span> de Sucesso!
        </h2>
        
        <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
          Em comemoração ao nosso aniversário, oferecemos condições 
          <span className="font-bold text-yellow-300"> imperdíveis</span> para proprietários de imóveis!
        </p>

        <div className="bg-white/15 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-10 border border-white/20 max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <TrendingUp className="h-16 w-16 text-yellow-300" />
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-300">
            Receba até 6 meses de aluguel adiantado!
          </h3>
          <p className="text-lg md:text-xl text-slate-200 mb-6">
            Transforme seu imóvel em liquidez imediata. Uma oportunidade única para você acelerar seus investimentos.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <div className="flex items-center bg-white/20 px-4 py-2 rounded-full">
              <span className="mr-2">✓</span>
              Sem burocracia extra
            </div>
            <div className="flex items-center bg-white/20 px-4 py-2 rounded-full">
              <span className="mr-2">✓</span>
              Segurança garantida
            </div>
            <div className="flex items-center bg-white/20 px-4 py-2 rounded-full">
              <span className="mr-2">✓</span>
              Condições especiais
            </div>
          </div>
        </div>

        <button
          onClick={scrollToForm}
          className="bg-yellow-400 hover:bg-yellow-300 text-emerald-800 px-10 py-4 rounded-xl text-xl font-bold transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 mb-6"
        >
          Quero Esta Oferta Especial
        </button>

        <p className="text-slate-200 text-sm max-w-2xl mx-auto">
          *Oferta válida exclusivamente para o mês de Outubro de 2024. 
          Sujeita à análise e aprovação. Consulte condições específicas com nossa equipe.
        </p>
      </div>
    </section>
  );
}

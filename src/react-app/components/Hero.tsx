export default function Hero() {
  const scrollToForm = () => {
    const form = document.getElementById('lead-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://mocha-cdn.com/019974ad-d3f6-789f-8672-2b2021bfc3b1/Foto-Pq-Cidade-Hero.jpeg"
          alt="Parque da Cidade - Verde Vale Imóveis"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-emerald-900/60"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Transforme seu imóvel em{' '}
            <span className="text-emerald-400">renda segura</span>{' '}
            com a Verde Vale Imóveis
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Cuidamos de todo o processo de locação para você: da divulgação à gestão completa do contrato.
          </p>
          
          <button
            onClick={scrollToForm}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 backdrop-blur-sm"
          >
            Quero Alugar Meu Imóvel
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}

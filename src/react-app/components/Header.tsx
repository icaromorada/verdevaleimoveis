// Logo image will be used instead of icon

export default function Header() {
  const scrollToForm = () => {
    const form = document.getElementById('lead-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <img 
              src="https://mocha-cdn.com/019974ad-d3f6-789f-8672-2b2021bfc3b1/AP1189-Residencial-Bem-Viver-(1).png" 
              alt="Verde Vale Imóveis" 
              className="h-32 w-auto"
            />
            <span className="text-2xl font-bold text-slate-800">Verde Vale Imóveis</span>
          </div>
          
          <button
            onClick={scrollToForm}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            Cadastre seu Imóvel
          </button>
        </div>
      </div>
    </header>
  );
}

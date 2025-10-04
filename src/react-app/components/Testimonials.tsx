import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Maria Silva',
    location: 'Proprietária - Apartamento Centro',
    content: 'A Verde Vale cuidou de tudo! Meu apartamento foi alugado em 15 dias e recebo meu aluguel pontualmente todo mês. Recomendo!',
    rating: 5
  },
  {
    name: 'João Santos',
    location: 'Proprietário - Casa Jardim América',
    content: 'Serviço excepcional! A equipe é muito profissional e me mantem sempre informado sobre tudo. Minha casa nunca ficou vazia.',
    rating: 5
  },
  {
    name: 'Ana Costa',
    location: 'Proprietária - Sala Comercial',
    content: 'Confiança total! Há 3 anos trabalho com eles e nunca tive problemas. A gestão é transparente e eficiente.',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-slate-600">
            Centenas de proprietários confiam na Verde Vale Imóveis
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-slate-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              
              <div className="border-t border-slate-200 pt-4">
                <p className="font-semibold text-slate-800">{testimonial.name}</p>
                <p className="text-sm text-slate-600">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

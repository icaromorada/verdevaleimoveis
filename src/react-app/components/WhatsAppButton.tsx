import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = '5512991968709'; // WhatsApp number with country code
  const message = 'Olá! Gostaria de saber mais sobre os serviços da Verde Vale Imóveis.';
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center group hover:scale-110"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="h-8 w-8" />
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-slate-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Fale conosco no WhatsApp
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-800"></div>
      </div>
      
      {/* Pulse animation */}
      <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></div>
    </a>
  );
}

import { Building2, Phone, Mail, MapPin, MessageCircle, Instagram, Facebook, Linkedin } from 'lucide-react';
export default function Footer() {
  return <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-white p-2 rounded-lg">
                <img src="https://mocha-cdn.com/019974ad-d3f6-789f-8672-2b2021bfc3b1/AP1189-Residencial-Bem-Viver-(1).png" alt="Verde Vale Imóveis" className="h-24 w-auto" />
              </div>
              <span className="text-xl font-bold">Verde Vale Imóveis</span>
            </div>
            <p className="text-slate-300 mb-6 max-w-md leading-relaxed">
              Especialistas em gestão de locação imobiliária. Transformamos seu imóvel em renda segura e constante com total transparência e profissionalismo.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-300 hover:text-emerald-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-300 hover:text-emerald-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-300 hover:text-emerald-400 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-emerald-400" />
                <span className="text-slate-300">(12) 2134-1551</span>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="h-5 w-5 text-emerald-400" />
                <span className="text-slate-300">(12) 99196-8709</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-emerald-400" />
                <span className="text-slate-300">contato@verdevaleimoveis.com.br</span>
              </div>
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Localização</h3>
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-emerald-400 mt-1" />
              <div className="text-slate-300">
                <p>Rua das Peonias, 193</p>
                <p>Jardim Motorama -                                           São José dos Campos - SP</p>
                <p>CEP: 12224-110</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2024 Verde Vale Imóveis. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
}

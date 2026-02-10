import React, { useState } from 'react';
import { Menu, X, MessageCircle, MapPin, Phone, Mail, Instagram, Heart, Leaf, Target, Ruler, Dna, Flower } from 'lucide-react';

export default function ConsultorioMarques() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const whatsappLink = "https://wa.me/5511970768886?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta";

  return (
    <div className="min-h-screen bg-amber-50 font-sans">
      {/* HEADER */}
      <header className="sticky top-0 z-100 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img 
                src="icone_simara.svg" 
                alt="Logo Consultório Médico Marques" 
                className="h-10 sm:h-12 w-auto"
              />
              <span className="hidden sm:block font-serif text-lg sm:text-xl font-semibold text-gray-900 tracking-tight">
                Consultório Marques
              </span>
            </div>

            {/* Navigation Desktop */}
            <nav className="hidden md:flex gap-8 lg:gap-10 items-center">
              <a href="#home" className="text-sm text-gray-900 hover:text-amber-500 transition-colors">
                Início
              </a>
              <a href="#pilares" className="text-sm text-gray-900 hover:text-amber-500 transition-colors">
                Sobre
              </a>
              <a href="#contatos" className="text-sm text-gray-900 hover:text-amber-500 transition-colors">
                Contato
              </a>
              <a 
                href={whatsappLink}
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-amber-500 text-white text-sm font-semibold rounded-lg hover:bg-amber-600 transition-all transform hover:-translate-y-0.5"
              >
                Agendar Consulta
              </a>
            </nav>

            {/* Menu Button Mobile */}
            <button 
              onClick={toggleMenu}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {menuOpen && (
            <nav className="md:hidden mt-4 pb-4 flex flex-col gap-3 border-t border-gray-100 pt-4">
              <a 
                href="#home" 
                onClick={closeMenu}
                className="px-4 py-2 text-gray-900 hover:text-amber-500 transition-colors"
              >
                Início
              </a>
              <a 
                href="#pilares" 
                onClick={closeMenu}
                className="px-4 py-2 text-gray-900 hover:text-amber-500 transition-colors"
              >
                Sobre
              </a>
              <a 
                href="#contatos" 
                onClick={closeMenu}
                className="px-4 py-2 text-gray-900 hover:text-amber-500 transition-colors"
              >
                Contato
              </a>
              <a 
                href={whatsappLink}
                target="_blank" 
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="mx-4 px-4 py-2.5 bg-amber-500 text-white text-sm font-semibold rounded-lg hover:bg-amber-600 transition-all text-center"
              >
                Agendar Consulta
              </a>
            </nav>
          )}
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="bg-gradient-to-br from-amber-50 to-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="flex flex-col gap-6 sm:gap-7">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight text-gray-900">
                Saúde Integrativa com Humanidade
              </h1>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Bem-vindo ao Consultório Médico Marques, onde seu bem-estar é nossa prioridade. Oferecemos atendimento personalizado e humanizado, focado em sua saúde integral.
              </p>
              <a 
                href={whatsappLink}
                target="_blank" 
                rel="noopener noreferrer"
                className="w-fit px-8 py-3 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-all transform hover:-translate-y-1"
              >
                Saiba Mais
              </a>
            </div>
            <div className="bg-amber-200 rounded-2xl aspect-square flex items-center justify-center text-gray-500 text-center p-8 min-h-64 sm:min-h-80">
                              <picture>
  <source
    srcSet={`${import.meta.env.BASE_URL}foto_simara.jpg`}
    type="image/jpeg"
  />
  <img
    src={`${import.meta.env.BASE_URL}foto_simara.jpg`}
    alt="Foto da Dr. Simara"
    loading="eager"
    fetchpriority="high"
    decoding="async"
    width="600"
    height="600"
    className="w-full h-full object-cover rounded-lg"
  />
</picture>
            </div>
          </div>
        </div>
      </section>

            {/* Atendemos */}
      <section id="pilares" className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-24">
          <h2 className="font-serif text-4xl sm:text-5xl text-center text-gray-900 mb-12 sm:mb-16 lg:mb-20">
            Atendemos
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Pilar 1 */}
            <div className="bg-amber-50 rounded-2xl p-6 sm:p-8 text-center hover:shadow-xl transition-all transform hover:-translate-y-2 border border-amber-100">
              <div className="flex justify-center mb-4">
                <Ruler size={48} className="text-amber-500" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-gray-900 mb-3">
                Emagrecimento & Endocrinologia
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Tratamento do metabolismo visando emagrecimento e saúde.
              </p>
            </div>

            {/* Pilar 2 */}
            <div className="bg-amber-50 rounded-2xl p-6 sm:p-8 text-center hover:shadow-xl transition-all transform hover:-translate-y-2 border border-amber-100">
              <div className="flex justify-center mb-4">
                <Dna size={48} className="text-amber-500" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-gray-900 mb-3">
                Reposição Hormonal
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Equilíbrio hormonal com objetivo de maior conforto e bem estar.
              </p>
            </div>

            {/* Pilar 3 */}
            <div className="bg-amber-50 rounded-2xl p-6 sm:p-8 text-center hover:shadow-xl transition-all transform hover:-translate-y-2 border border-amber-100">
              <div className="flex justify-center mb-4">
                <Flower size={48} className="text-amber-500" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-gray-900 mb-3">
                Saúde da Mulher & Estética Íntima
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Cuidado com o íntimo focando na prevenção e autoestima.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PILARES */}
      <section id="pilares" className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-24">
          <h2 className="font-serif text-4xl sm:text-5xl text-center text-gray-900 mb-12 sm:mb-16 lg:mb-20">
            Nossos Pilares
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Pilar 1 */}
            <div className="bg-amber-50 rounded-2xl p-6 sm:p-8 text-center hover:shadow-xl transition-all transform hover:-translate-y-2 border border-amber-100">
              <div className="flex justify-center mb-4">
                <Leaf size={48} className="text-amber-500" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-gray-900 mb-3">
                Saúde Integrativa
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Abordagem médica que olha o corpo como um todo para um tratamento completo e eficaz.
              </p>
            </div>

            {/* Pilar 2 */}
            <div className="bg-amber-50 rounded-2xl p-6 sm:p-8 text-center hover:shadow-xl transition-all transform hover:-translate-y-2 border border-amber-100">
              <div className="flex justify-center mb-4">
                <Heart size={48} className="text-amber-500" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-gray-900 mb-3">
                Atendimento Humanizado
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Escuta atenta e empatia em cada consulta, criando um ambiente seguro e acolhedor.
              </p>
            </div>

            {/* Pilar 3 */}
            <div className="bg-amber-50 rounded-2xl p-6 sm:p-8 text-center hover:shadow-xl transition-all transform hover:-translate-y-2 border border-amber-100">
              <div className="flex justify-center mb-4">
                <Target size={48} className="text-amber-500" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-gray-900 mb-3">
                Tratamento Personalizado
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Cada paciente é único. Desenvolvemos planos terapêuticos adaptados às suas necessidades específicas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTATOS */}
      <section id="contatos" className="bg-gradient-to-br from-amber-50 to-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-24">
          <h2 className="font-serif text-4xl sm:text-5xl text-center text-gray-900 mb-12 sm:mb-16 lg:mb-20">
            Entre em Contato
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Info */}
            <div className="space-y-8">
              {/* WhatsApp */}
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <MessageCircle size={28} className="text-amber-500 mt-1" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">WhatsApp</h4>
                  <a 
                    href="https://wa.me/5511970768886" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-base text-amber-600 hover:text-amber-700 font-medium transition-colors"
                  >
                    (11) 9 97076-8886
                  </a>
                </div>
              </div>

              {/* Telefone */}
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <Phone size={28} className="text-amber-500 mt-1" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Telefone</h4>
                  <p className="text-base text-gray-600">(11) 9 97076-8886</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <Mail size={28} className="text-amber-500 mt-1" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Email</h4>
                  <a 
                    href="mailto:consultoriomedicomarques@gmail.com"
                    className="text-base text-amber-600 hover:text-amber-700 font-medium transition-colors"
                  >
                    consultoriomedicomarques@gmail.com
                  </a>
                </div>
              </div>

            {/* Instagram */}
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <Instagram size={28} className="text-amber-500 mt-1" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Instagram</h4>
                  <a 
                    href="https://www.instagram.com/consultoriomedicomarques/"
                    className="text-base text-amber-600 hover:text-amber-700 font-medium transition-colors"
                  >
                    @consultoriomedicomarques
                  </a>
                </div>
              </div>

              {/* Localização */}
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <MapPin size={28} className="text-amber-500 mt-1" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Localização</h4>
                  <p className="text-base text-gray-600">Av. Marechal Tito, 677 - Sala 8<br />São Paulo, SP</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-lg h-80 sm:h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0874662451756!2d-46.6661!3d-23.5505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef7c7f7f7f7f7%3A0x0!2sAv.%20Marechal%20Tito%2C%20677!5e0!3m2!1spt-BR!2sbr!4v1707600000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-amber-100 py-8 text-center">
        <p className="text-sm">&copy; 2026 Consultório Médico Marques. Todos os direitos reservados.</p>
      </footer>

      {/* BOTÃO FLUTUANTE WHATSAPP MODERNO */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 group"
      >
        <div className="relative">
          {/* Pulsação de fundo */}
          <div className="absolute inset-0 bg-green-400 rounded-full opacity-0 group-hover:opacity-20 scale-100 group-hover:scale-125 transition-all duration-500"></div>
          
          {/* Botão principal */}
          <div className="relative w-14 sm:w-16 h-14 sm:h-16 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center shadow-2xl hover:shadow-green-500/50 transition-all duration-300 group-hover:scale-110">
            {/* Ícone de chat */}
            <MessageCircle size={28} className="text-white" strokeWidth={1.5} />
            
            {/* Badge de notificação */}
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg group-hover:scale-125 transition-transform">
              1
            </div>
          </div>

          {/* Label ao hover */}
          <div className="absolute bottom-full right-0 mb-3 px-3 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Conversar agora
            <div className="absolute top-full right-2 w-2 h-2 bg-gray-900 transform rotate-45"></div>
          </div>
        </div>
      </a>
    </div>
  );
}
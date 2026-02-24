import React from "react";
import { Link } from "react-router-dom";
import { Leaf, Heart, Target, Ruler, Dna, Flower } from "lucide-react";
import { WHATSAPP_LINK } from "../lib/whatsapp";
import Seo from "../components/Seo";

function ServiceCard({ icon, title, description, to }) {
  return (
    <Link
      to={to}
      className="bg-amber-50 rounded-2xl p-6 sm:p-8 text-center hover:shadow-xl transition-all transform hover:-translate-y-2 border border-amber-100 block"
    >
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="font-serif text-xl sm:text-2xl text-gray-900 mb-3">{title}</h3>
      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{description}</p>
      <div className="mt-5 text-amber-700 font-semibold text-sm">Ver detalhes →</div>
    </Link>
  );
}

export default function Home() {
  return (
    <>
      <Seo
        title="Home"
        description="Saúde integrativa com atendimento humanizado. Emagrecimento & endocrinologia, reposição hormonal, saúde da mulher e estética íntima."
      />
      {/* HERO */}
      <section className="bg-gradient-to-br from-amber-50 to-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="flex flex-col gap-6 sm:gap-7">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight text-gray-900">
                Saúde Integrativa com Humanidade
              </h1>

              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Atendimento personalizado e humanizado, com foco em saúde integral, bem-estar e resultados sustentáveis.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit px-8 py-3 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-all transform hover:-translate-y-1"
                >
                  Agendar Consulta
                </a>

                <Link
                  to="/sobre"
                  className="w-fit px-8 py-3 bg-white text-gray-900 font-semibold rounded-lg border border-amber-200 hover:border-amber-300 hover:bg-amber-50 transition-all"
                >
                  Conheça a trajetória
                </Link>
              </div>
            </div>

            <div className="bg-amber-200 rounded-2xl aspect-square flex items-center justify-center text-gray-500 text-center p-8 min-h-64 sm:min-h-80">
              <picture>
                <source srcSet={`${import.meta.env.BASE_URL}foto_simara.jpg`} type="image/jpeg" />
                <img
                  src={`${import.meta.env.BASE_URL}foto_simara.jpg`}
                  alt="Foto da Dra."
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

      {/* ATENDEMOS */}
      <section id="atendemos" className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-24">
          <h2 className="font-serif text-4xl sm:text-5xl text-center text-gray-900 mb-12 sm:mb-16 lg:mb-20">
            Atendemos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <ServiceCard
              to="/servicos/emagrecimento-endocrinologia"
              icon={<Ruler size={48} className="text-amber-500" strokeWidth={1.5} />}
              title="Emagrecimento & Endocrinologia"
              description="Tratamento do metabolismo visando emagrecimento, energia, saúde e manutenção de resultados."
            />

            <ServiceCard
              to="/servicos/reposicao-hormonal"
              icon={<Dna size={48} className="text-amber-500" strokeWidth={1.5} />}
              title="Reposição Hormonal"
              description="Avaliação completa para equilíbrio hormonal, com foco em conforto, vitalidade e bem-estar."
            />

            <ServiceCard
              to="/servicos/saude-da-mulher-estetica-intima"
              icon={<Flower size={48} className="text-amber-500" strokeWidth={1.5} />}
              title="Saúde da Mulher & Estética Íntima"
              description="Cuidado íntimo focado em prevenção, autoestima, qualidade de vida e saúde sexual."
            />
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
            <div className="bg-amber-50 rounded-2xl p-6 sm:p-8 text-center hover:shadow-xl transition-all transform hover:-translate-y-2 border border-amber-100">
              <div className="flex justify-center mb-4">
                <Leaf size={48} className="text-amber-500" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-gray-900 mb-3">Saúde Integrativa</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Olhar amplo do corpo e do estilo de vida para um tratamento completo, coerente e sustentável.
              </p>
            </div>

            <div className="bg-amber-50 rounded-2xl p-6 sm:p-8 text-center hover:shadow-xl transition-all transform hover:-translate-y-2 border border-amber-100">
              <div className="flex justify-center mb-4">
                <Heart size={48} className="text-amber-500" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-gray-900 mb-3">Atendimento Humanizado</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Escuta real, empatia e orientação clara — com cuidado em cada etapa, do diagnóstico ao acompanhamento.
              </p>
            </div>

            <div className="bg-amber-50 rounded-2xl p-6 sm:p-8 text-center hover:shadow-xl transition-all transform hover:-translate-y-2 border border-amber-100">
              <div className="flex justify-center mb-4">
                <Target size={48} className="text-amber-500" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-gray-900 mb-3">Tratamento Personalizado</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Planos terapêuticos adaptados à sua rotina, histórico, objetivos e necessidades específicas.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-br from-amber-50 to-amber-100">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-24">
        <h2 className="font-serif text-4xl sm:text-5xl text-center text-gray-900 mb-12 sm:mb-16 lg:mb-20">
          Entre em Contato
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-8">
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

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0">
                <Phone size={28} className="text-amber-500 mt-1" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-1">Telefone</h4>
                <p className="text-base text-gray-600">(11) 9 97076-8886</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0">
                <Mail size={28} className="text-amber-500 mt-1" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-1">Email</h4>
                <a
                  href="mailto:marquesconsultoriomedico@gmail.com"
                  className="text-base text-amber-600 hover:text-amber-700 font-medium transition-colors"
                >
                  marquesconsultoriomedico@gmail.com
                </a>
              </div>
            </div>

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

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0">
                <MapPin size={28} className="text-amber-500 mt-1" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-1">Localização</h4>
                <p className="text-base text-gray-600">
                  Av. Marechal Tito, 677 - Sala 8
                  <br />
                  São Paulo, SP
                </p>
              </div>
            </div>
          </div>
<div className="rounded-2xl overflow-hidden shadow-lg border border-amber-200 bg-white">
  <div className="w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-auto lg:h-96">
    <iframe
      className="w-full h-full"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0874662451756!2d-46.6661!3d-23.5505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef7c7f7f7f7f7%3A0x0!2sAv.%20Marechal%20Tito%2C%20677!5e0!3m2!1spt-BR!2sbr!4v1707600000000"
      style={{ border: 0 }}
      allowFullScreen
      loading="eager"
      referrerPolicy="no-referrer-when-downgrade"
      title="Mapa"
    />
  </div>

  <div className="p-4 bg-amber-50 border-t border-amber-100">
    <a
      href="https://www.google.com/maps?q=Av.%20Marechal%20Tito,%20677%20-%20Sala%208,%20S%C3%A3o%20Paulo%20SP"
      target="_blank"
      rel="noopener noreferrer"
      className="text-amber-700 font-semibold hover:text-amber-800 transition-colors"
    >
      Abrir no Google Maps →
    </a>
  </div>
</div>
        </div>
      </div>
      </section>
    </>
  );
}
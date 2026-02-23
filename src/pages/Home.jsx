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
    </>
  );
}
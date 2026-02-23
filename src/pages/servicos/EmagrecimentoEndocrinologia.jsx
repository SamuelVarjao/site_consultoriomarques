import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import BackButton from "../../components/BackButton";
import Seo from "../../components/Seo";
import { WHATSAPP_LINK } from "../../lib/whatsapp";

export default function EmagrecimentoEndocrinologia() {
  return (
    <section className="bg-white">
              <Seo
        title="Emagrecimento & Endocrinologia"
        description="Avaliação metabólica e acompanhamento para emagrecimento com saúde, foco em resultados sustentáveis e segurança."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-12">
        <div className="flex items-center justify-between gap-4">
          <Breadcrumb />
          <BackButton />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <h1 className="font-serif text-4xl sm:text-5xl text-gray-900 mb-6">
              Emagrecimento & Endocrinologia
            </h1>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
              Emagrecer com saúde vai além de “comer menos”. O tratamento endocrinológico avalia como está o
              metabolismo, a relação com a insulina, sono, estresse, composição corporal, histórico familiar e hábitos.
              O objetivo é encontrar o que está dificultando seu resultado e construir uma estratégia segura e
              sustentável.
            </p>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
              O acompanhamento pode incluir ajustes alimentares, rotina, suplementação quando indicada, solicitação de
              exames e, em alguns casos, terapias específicas — sempre com avaliação individual e foco em segurança.
            </p>

            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6">
              <h2 className="font-serif text-2xl text-gray-900 mb-3">O que é avaliado</h2>
              <ul className="space-y-2 text-gray-700">
                <li>• Resistência à insulina, glicemia e perfil metabólico</li>
                <li>• Fatores hormonais que impactam peso e energia</li>
                <li>• Sono, estresse, fome emocional e compulsões</li>
                <li>• Estratégias para manutenção e prevenção do “efeito sanfona”</li>
              </ul>
            </div>

            <div className="mt-6">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex px-8 py-3 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-all transform hover:-translate-y-0.5"
              >
                Agendar Consulta
              </a>
              <p className="text-sm text-gray-500 mt-3">
                *Cada conduta depende de avaliação clínica individual e exames.
              </p>
            </div>
          </div>

          <div className="bg-amber-100 rounded-2xl min-h-[420px] flex items-center justify-center text-gray-600 p-8 border border-amber-200">
              <picture>
                <source srcSet={`${import.meta.env.BASE_URL}metabolismo.jpg`} type="image/jpeg" />
                <img
                  src={`${import.meta.env.BASE_URL}metabolismo.jpg`}
                  alt="metabolismo"
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
  );
}
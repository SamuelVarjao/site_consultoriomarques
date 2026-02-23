import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import BackButton from "../../components/BackButton";
import Seo from "../../components/Seo";
import { WHATSAPP_LINK } from "../../lib/whatsapp";

export default function SaudeMulherEsteticaIntima() {
  return (
    <section className="bg-white">
              <Seo
        title="Saúde da Mulher & Estética Íntima"
        description="Cuidado íntimo com foco em prevenção, conforto, autoestima e qualidade de vida."
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
              Saúde da Mulher & Estética Íntima
            </h1>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
              A saúde íntima faz parte da saúde integral. Alterações como ressecamento, desconforto, queda de libido,
              dor, irritações recorrentes e mudanças ao longo da vida (pós-parto, climatério/menopausa) podem afetar
              bem-estar e autoestima. O cuidado adequado começa por uma avaliação respeitosa, sem julgamentos, com foco
              em conforto e qualidade de vida.
            </p>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
              A abordagem pode incluir investigação clínica, orientação de hábitos, estratégias de prevenção e
              tratamentos indicados conforme cada caso — sempre priorizando segurança, naturalidade e resultados
              alinhados às suas necessidades.
            </p>

            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6">
              <h2 className="font-serif text-2xl text-gray-900 mb-3">O que pode ser abordado</h2>
              <ul className="space-y-2 text-gray-700">
                <li>• Prevenção e cuidado íntimo no dia a dia</li>
                <li>• Desconfortos e alterações relacionados a fases hormonais</li>
                <li>• Orientações para melhora de autoestima e bem-estar</li>
                <li>• Plano de cuidado individual com acompanhamento</li>
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
                *Cada indicação depende de avaliação clínica individual.
              </p>
            </div>
          </div>

          <div className="bg-amber-100 rounded-2xl min-h-[420px] flex items-center justify-center text-gray-600 p-8 border border-amber-200">
              <picture>
                <source srcSet={`${import.meta.env.BASE_URL}saude_mulher.jpg`} type="image/jpeg" />
                <img
                  src={`${import.meta.env.BASE_URL}saude_mulher.jpg`}
                  alt="saude_mulher"
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

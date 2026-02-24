import React from "react";
import { WHATSAPP_LINK } from "../lib/whatsapp";
import Breadcrumb from "../components/Breadcrumb";
import BackButton from "../components/BackButton";
import Seo from "../components/Seo";

export default function Sobre() {
  return (
    <section className="bg-white">
       <Seo
        title="Sobre"
        description="Conheça a trajetória da Dra. e a abordagem integrativa e humanizada do Consultório Médico Marques."
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
              Sobre o Consultório
            </h1>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
              A trajetória da médica por trás do consultório foi construída com um olhar atento para a individualidade
              de cada paciente. Ao longo dos anos, a prática clínica foi ganhando um foco cada vez mais integrativo:
              entender sintomas, hábitos, histórico, emoções e rotina — para então propor um plano de cuidado coerente,
              possível e sustentável.
            </p>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
              A abordagem do consultório combina ciência, acompanhamento próximo e metas realistas. Em vez de soluções
              rápidas, o objetivo é construir saúde: ajustar o que está por trás do problema, fortalecer o organismo e
              orientar escolhas que tragam bem-estar de verdade no dia a dia.
            </p>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
              Cada consulta é pensada para gerar clareza. Você entende o que está acontecendo, por que está acontecendo
              e qual será o caminho do tratamento — com decisões compartilhadas, respeito aos seus limites e
              acompanhamento contínuo.
            </p>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-8 py-3 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-all transform hover:-translate-y-0.5"
            >
              Agendar Consulta
            </a>
          </div>

<div className="rounded-2xl overflow-hidden border border-amber-200 bg-amber-100">
  <picture className="block w-full">
    <source srcSet={`${import.meta.env.BASE_URL}foto_consultorio5.jpeg`} type="image/jpeg" />
    <img
      src={`${import.meta.env.BASE_URL}foto_consultorio5.jpeg`}
      alt="foto_consultorio5"
      loading="eager"
      fetchpriority="high"
      decoding="async"
      width="1200"
      height="900"
      className="block w-full h-[280px] sm:h-[420px] lg:h-[520px] object-cover"
    />
  </picture>
</div>
        </div>

        {/* Bloco extra opcional */}
        <div className="mt-14 bg-amber-50 border border-amber-100 rounded-2xl p-6 sm:p-8">
          <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 mb-4">Como funciona o atendimento</h2>
          <ul className="space-y-3 text-gray-700">
            <li><span className="font-semibold">1)</span> Avaliação completa do histórico, rotina e queixas.</li>
            <li><span className="font-semibold">2)</span> Definição de objetivos e plano de cuidado individualizado.</li>
            <li><span className="font-semibold">3)</span> Acompanhamento e ajustes para evolução segura e consistente.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
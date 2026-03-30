import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import BackButton from "../../components/BackButton";
import Seo from "../../components/Seo";
import { WHATSAPP_LINK } from "../../lib/whatsapp";
import { CheckCircle } from "lucide-react";

export default function NutricaoClinica() {
  return (
    <section className="bg-white">
      <Seo
        title="Nutrição Clínica"
        description="Acompanhamento nutricional individualizado com a Dra. Jéssica Moura (CRN 51674). Reeducação alimentar, emagrecimento saudável e saúde metabólica."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-12">
        <div className="flex items-center justify-between gap-4">
          <Breadcrumb />
          <BackButton />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Content */}
          <div>
            <p className="text-amber-500 font-bold text-xs uppercase tracking-widest mb-3">Especialidade</p>
            <h1 className="font-serif text-4xl sm:text-5xl text-gray-900 mb-2">
              Nutrição Clínica
            </h1>
            <p className="text-gray-400 text-sm mb-6 font-medium">
              Dra. Jéssica Moura · CRN 51674
            </p>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
              A nutrição clínica vai muito além de uma dieta. O acompanhamento nutricional avalia o histórico
              alimentar, exames laboratoriais, hábitos de vida, objetivos e preferências — para montar um plano
              alimentar personalizado, funcional e sustentável no longo prazo.
            </p>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
              Com a Dra. Jéssica Moura, o foco está na reeducação alimentar genuína: construir uma relação
              mais saudável com a comida, sem restrições desnecessárias, com orientação clara e acompanhamento
              próximo em cada etapa da sua evolução.
            </p>

            {/* O que é avaliado */}
            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6 mb-6">
              <h2 className="font-serif text-2xl text-gray-900 mb-4">O que é avaliado</h2>
              <ul className="space-y-2.5">
                {[
                  "Histórico alimentar e comportamento com a comida",
                  "Exames laboratoriais e composição corporal",
                  "Rotina, preferências e restrições alimentares",
                  "Relação com o peso e a imagem corporal",
                  "Objetivos individuais de saúde e performance",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle size={15} className="text-amber-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Áreas */}
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 mb-6">
              <h2 className="font-serif text-2xl text-gray-900 mb-4">Áreas de atuação</h2>
              <ul className="space-y-2.5">
                {[
                  "Emagrecimento saudável e manutenção do peso",
                  "Saúde metabólica e resistência à insulina",
                  "Nutrição hormonal e saúde da mulher",
                  "Nutrição esportiva e performance",
                  "Reeducação alimentar e mudança de hábitos",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle size={15} className="text-amber-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-8 py-3.5 bg-amber-500 text-white font-semibold rounded-xl hover:bg-amber-600 transition-all transform hover:-translate-y-0.5 shadow-lg shadow-amber-200/50"
            >
              Agendar com Dra. Jéssica
            </a>
            <p className="text-xs text-gray-400 mt-3">
              *O plano alimentar é elaborado de forma individualizada após avaliação nutricional completa.
            </p>
          </div>

          {/* Professional photo */}
          <div className="flex flex-col gap-6">
            <div className="rounded-3xl overflow-hidden border border-amber-200 shadow-2xl aspect-[4/5]">
              <img
                src={`${import.meta.env.BASE_URL}foto_jessica.jpg`}
                alt="Dra. Jéssica Moura – Nutricionista"
                loading="eager"
                fetchpriority="high"
                decoding="async"
                width="800"
                height="1000"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Quote card */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-100">
              <p className="text-gray-700 text-base italic leading-relaxed mb-3">
                "A nutrição é um processo de autoconhecimento. Cada plano alimentar é único porque cada
                pessoa é única — e o objetivo é sempre construir saúde de forma real e duradoura."
              </p>
              <p className="text-amber-600 font-semibold text-sm">— Dra. Jéssica Moura, CRN 51674</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import BackButton from "../../components/BackButton";
import Seo from "../../components/Seo";
import { WHATSAPP_LINK } from "../../lib/whatsapp";

export default function ReposicaoHormonal() {
  return (
    <section className="bg-white">
              <Seo
        title="Reposição Hormonal"
        description="Avaliação clínica e exames para equilíbrio hormonal com acompanhamento e segurança."
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
              Reposição Hormonal
            </h1>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
              Oscilações hormonais podem impactar energia, sono, humor, libido, pele, disposição e até composição
              corporal. A reposição hormonal (quando indicada) deve ser feita com critério: avaliação clínica,
              investigação por exames e acompanhamento cuidadoso.
            </p>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
              O foco do consultório é buscar equilíbrio e bem-estar, respeitando seu momento de vida e seu histórico.
              Nem todo sintoma é “falta de hormônio”, por isso a consulta é essencial para definir a melhor conduta com
              segurança.
            </p>

            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6">
              <h2 className="font-serif text-2xl text-gray-900 mb-3">Como é a abordagem</h2>
              <ul className="space-y-2 text-gray-700">
                <li>• Análise de sintomas, histórico e exames</li>
                <li>• Avaliação de riscos e contraindicações</li>
                <li>• Definição da melhor estratégia (ou alternativas) de forma individual</li>
                <li>• Acompanhamento e ajustes periódicos</li>
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
                *Condutas hormonais exigem avaliação individual e acompanhamento médico.
              </p>
            </div>
          </div>

          <div className="bg-amber-100 rounded-2xl min-h-[420px] flex items-center justify-center text-gray-600 p-8 border border-amber-200">
              <picture>
                <source srcSet={`${import.meta.env.BASE_URL}bem_estar.jpg`} type="image/jpeg" />
                <img
                  src={`${import.meta.env.BASE_URL}bem_estar.jpg`}
                  alt="bem_estar"
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
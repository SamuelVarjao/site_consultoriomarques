import React from "react";
import { WHATSAPP_LINK } from "../lib/whatsapp";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import BackButton from "../components/BackButton";
import Seo from "../components/Seo";
import { CheckCircle, Award, Heart, Users } from "lucide-react";

export default function Sobre() {
  return (
    <section className="bg-white">
      <Seo
        title="Sobre"
        description="Conheça a trajetória e a abordagem integrativa e humanizada do Consultório Médico Marques e seus profissionais."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-12">
        <div className="flex items-center justify-between gap-4">
          <Breadcrumb />
          <BackButton />
        </div>
      </div>

      {/* ── HERO DA PÁGINA ─────────────────────────────── */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <p className="text-amber-500 font-bold text-xs uppercase tracking-widest mb-3">Quem somos</p>
              <h1 className="font-serif text-4xl sm:text-5xl text-gray-900 mb-6">
                Sobre o Consultório
              </h1>

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                O Consultório Marques nasceu do compromisso com uma medicina mais humana, integrativa e eficaz.
                Ao longo dos anos, a equipe foi crescendo e se especializando para oferecer cuidado completo
                — da medicina clínica e endocrinológica à nutrição clínica.
              </p>

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                A abordagem do consultório combina ciência, acompanhamento próximo e metas realistas.
                Em vez de soluções rápidas, o objetivo é construir saúde: ajustar o que está por trás
                do problema, fortalecer o organismo e orientar escolhas que tragam bem-estar real no dia a dia.
              </p>

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8">
                Cada consulta é pensada para gerar clareza. Você entende o que está acontecendo, por que está
                acontecendo e qual será o caminho do tratamento — com decisões compartilhadas, respeito aos
                seus limites e acompanhamento contínuo.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex px-8 py-3.5 bg-amber-500 text-white font-semibold rounded-xl hover:bg-amber-600 transition-all transform hover:-translate-y-0.5 shadow-lg shadow-amber-200/50"
                >
                  Agendar Consulta
                </a>
                <Link
                  to="/equipe"
                  className="inline-flex px-8 py-3.5 bg-white text-gray-800 font-semibold rounded-xl border border-amber-200 hover:bg-amber-50 hover:border-amber-300 transition-all"
                >
                  Conheça a Equipe →
                </Link>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden border border-amber-200 bg-amber-100 shadow-xl">
              <img
                src={`${import.meta.env.BASE_URL}foto_consultorio5.jpeg`}
                alt="Consultório Marques"
                loading="eager"
                fetchpriority="high"
                decoding="async"
                width="1200"
                height="900"
                className="block w-full h-[280px] sm:h-[420px] lg:h-[520px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── DIFERENCIAIS ───────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20">
        <div className="text-center mb-12">
          <p className="text-amber-500 font-bold text-xs uppercase tracking-widest mb-3">Por que nos escolher</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-gray-900">Nossos Diferenciais</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <Users size={28} className="text-amber-500" strokeWidth={1.5} />,
              title: "Equipe Multidisciplinar",
              desc: "Médicos e nutricionista em um único consultório, trabalhando de forma integrada pelo seu bem-estar.",
            },
            {
              icon: <Heart size={28} className="text-amber-500" strokeWidth={1.5} />,
              title: "Atendimento Humanizado",
              desc: "Escuta ativa e empatia em cada consulta, com respeito ao seu ritmo e suas necessidades.",
            },
            {
              icon: <Award size={28} className="text-amber-500" strokeWidth={1.5} />,
              title: "Profissionais Qualificados",
              desc: "Equipe com CRM e CRN ativos, formação sólida e atualização contínua em suas especialidades.",
            },
            {
              icon: <CheckCircle size={28} className="text-amber-500" strokeWidth={1.5} />,
              title: "Resultados Sustentáveis",
              desc: "Tratamentos baseados em evidências, com metas realistas e acompanhamento de longo prazo.",
            },
          ].map(({ icon, title, desc }) => (
            <div
              key={title}
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-4 border border-amber-100">
                {icon}
              </div>
              <h3 className="font-serif text-lg text-gray-900 mb-2">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── COMO FUNCIONA ──────────────────────────────── */}
      <div className="bg-amber-50 border-y border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20">
          <div className="text-center mb-12">
            <p className="text-amber-500 font-bold text-xs uppercase tracking-widest mb-3">Processo</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-gray-900">Como Funciona o Atendimento</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "01",
                title: "Avaliação Completa",
                desc: "Avaliação detalhada do histórico, rotina, queixas e exames para entender seu quadro de forma ampla.",
              },
              {
                step: "02",
                title: "Plano Individualizado",
                desc: "Definição de objetivos e elaboração de um plano de cuidado personalizado, adaptado à sua realidade.",
              },
              {
                step: "03",
                title: "Acompanhamento Contínuo",
                desc: "Retornos regulares para ajustes e evolução segura, garantindo resultados consistentes e duradouros.",
              },
            ].map(({ step, title, desc }) => (
              <div key={step} className="text-center">
                <div className="w-14 h-14 bg-amber-500 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 font-bold text-lg shadow-lg shadow-amber-200">
                  {step}
                </div>
                <h3 className="font-serif text-xl text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA ────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl text-gray-900 mb-4">
          Conheça nossa equipe
        </h2>
        <p className="text-gray-600 mb-8 max-w-lg mx-auto text-base sm:text-lg">
          Veja o perfil completo de cada profissional e agende a consulta ideal para você.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/equipe"
            className="px-8 py-3.5 bg-amber-500 text-white font-semibold rounded-xl hover:bg-amber-600 transition-all transform hover:-translate-y-1 shadow-lg shadow-amber-200/50"
          >
            Ver Nossa Equipe
          </Link>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 bg-white text-gray-800 font-semibold rounded-xl border border-amber-200 hover:bg-amber-50 hover:border-amber-300 transition-all"
          >
            Agendar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

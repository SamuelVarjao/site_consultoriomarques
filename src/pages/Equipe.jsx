import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import BackButton from "../components/BackButton";
import Seo from "../components/Seo";
import { WHATSAPP_LINK, WA_SIMARA, WA_PHILIPI, WA_JESSICA } from "../lib/whatsapp";
import { Award, Stethoscope, Apple, CheckCircle } from "lucide-react";

const professionals = [
  {
    photo: "foto_dra_simara.jpg",
    alt: "Dra. Simara Marques",
    name: "Dra. Simara Marques",
    specialty: "Médica",
    registration: "Médico · CRM 247.230 SP",
    waLink: WA_SIMARA,
    icon: <Stethoscope size={20} className="text-amber-500" strokeWidth={1.5} />,
    bio: [
      "Especializada em endocrinologia e metabolismo, a Dra. Simara construiu sua trajetória com um olhar atento à individualidade de cada paciente. Ao longo dos anos, sua prática clínica ganhou um foco cada vez mais integrativo: entender sintomas, hábitos, histórico, emoções e rotina para propor um plano de cuidado coerente e sustentável.",
      "Seu atendimento combina ciência, acompanhamento próximo e metas realistas. Em vez de soluções rápidas, o objetivo é construir saúde de verdade.",
    ],
    areas: [
      "Emagrecimento & Controle Metabólico",
      "Reposição Hormonal",
      "Endocrinologia Feminina",
      "Saúde da Mulher & Estética Íntima",
      "Prevenção e Medicina Integrativa",
    ],
  },
  {
    photo: "foto_philipi.jpg",
    alt: "Dr. Philipi Marques",
    name: "Dr. Philipi Marques",
    specialty: "Médico",
    registration: "CRM 223.765 · SP",
    waLink: WA_PHILIPI,
    icon: <Stethoscope size={20} className="text-amber-500" strokeWidth={1.5} />,
    bio: [
      "O Dr. Philipi Marques atua com uma abordagem clínica integrativa e preventiva, priorizando o diagnóstico preciso e o acompanhamento longitudinal do paciente. Sua formação sólida em permite identificar e tratar condições de forma ampla, com atenção ao contexto de vida de cada pessoa.",
      "Comprometido com a qualidade do atendimento, oferece consultas objetivas e humanizadas, construindo uma relação de confiança com seus pacientes.",
    ],
    areas: [
      "Endocrinologia e Emagrecimento",
      "Medicina Esportiva",
      "Checkup e Rastreamento",
      "Saúde Masculina",
    ],
  },
  {
    photo: "foto_jessica.jpg",
    alt: "Dra. Jéssica Moura",
    name: "Dra. Jéssica Moura",
    specialty: "Nutricionista",
    registration: "CRN 51674",
    waLink: WA_JESSICA,
    icon: <Apple size={20} className="text-amber-500" strokeWidth={1.5} />,
    bio: [
      "A Dra. Jéssica Moura é nutricionista clínica com foco em reeducação alimentar, emagrecimento saudável e saúde metabólica. Sua abordagem parte da escuta ativa e da personalização — cada plano alimentar é construído com base no histórico, preferências e objetivos únicos de cada paciente.",
      "Acredita que a nutrição vai muito além de dietas: é um processo de autoconhecimento, construção de hábitos e melhora genuína da qualidade de vida.",
    ],
    areas: [
      "Nutrição Clínica",
      "Reeducação Alimentar",
      "Emagrecimento Saudável",
      "Nutrição Esportiva",
    ],
  },
];

function ProfessionalCard({ pro, reverse }) {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${reverse ? "lg:flex lg:flex-row-reverse" : ""}`}>
      {/* Photo */}
      <div className="relative">
        <div className="rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
          <img
            src={`${import.meta.env.BASE_URL}${pro.photo}`}
            alt={pro.alt}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-top"
          />
        </div>
        {/* Registration badge */}
        <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-xl border border-amber-100 flex items-center gap-3">
          <div className="w-9 h-9 bg-amber-50 rounded-xl flex items-center justify-center flex-shrink-0 border border-amber-100">
            {pro.icon}
          </div>
          <div>
            <p className="text-xs text-gray-400 font-medium">{pro.specialty}</p>
            <p className="text-sm font-bold text-gray-900 font-mono">{pro.registration}</p>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col gap-5">
        <div>
          <p className="text-amber-500 font-bold text-xs uppercase tracking-widest mb-2">{pro.specialty}</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-gray-900">{pro.name}</h2>
          <p className="text-gray-400 text-sm font-mono mt-1">{pro.registration}</p>
        </div>

        {pro.bio.map((p, i) => (
          <p key={i} className="text-base text-gray-700 leading-relaxed">{p}</p>
        ))}

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
          <h3 className="font-semibold text-gray-900 text-sm mb-3 flex items-center gap-2">
            <Award size={16} className="text-amber-500" />
            Áreas de Atuação
          </h3>
          <ul className="space-y-2">
            {pro.areas.map((area) => (
              <li key={area} className="flex items-center gap-2 text-sm text-gray-700">
                <CheckCircle size={14} className="text-amber-500 flex-shrink-0" />
                {area}
              </li>
            ))}
          </ul>
        </div>

        <a
          href={pro.waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit px-8 py-3.5 bg-amber-500 text-white font-semibold rounded-xl hover:bg-amber-600 transition-all transform hover:-translate-y-0.5 shadow-lg shadow-amber-200/50 text-sm"
        >
          Agendar com {pro.name.split(" ")[1]}
        </a>
      </div>
    </div>
  );
}

export default function Equipe() {
  return (
    <section className="bg-white">
      <Seo
        title="Nossa Equipe"
        description="Conheça os profissionais do Consultório Marques: Dra. Simara Marques, Dr. Philipi Marques e Dra. Jéssica Moura. Medicina e nutrição integradas."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-12">
        <div className="flex items-center justify-between gap-4">
          <Breadcrumb />
          <BackButton />
        </div>
      </div>

      {/* Page hero */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-14 sm:py-16 text-center">
          <p className="text-amber-500 font-bold text-xs uppercase tracking-widest mb-3">Profissionais</p>
          <h1 className="font-serif text-4xl sm:text-5xl text-gray-900 mb-4">Nossa Equipe</h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Profissionais dedicados, com formação sólida e comprometimento genuíno com a saúde e o bem-estar
            de cada paciente.
          </p>
        </div>
      </div>

      {/* Team members */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-24">
        <div className="flex flex-col gap-24 sm:gap-28 lg:gap-32">
          {professionals.map((pro, index) => (
            <div key={pro.name}>
              <ProfessionalCard pro={pro} reverse={index % 2 !== 0} />
              {index < professionals.length - 1 && (
                <div className="mt-24 border-t border-gray-100" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-amber-500 to-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-14 sm:py-16 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-white mb-4">
            Agende sua consulta hoje
          </h2>
          <p className="text-amber-100 text-base sm:text-lg mb-8 max-w-xl mx-auto">
            Entre em contato e escolha o profissional mais adequado para o seu cuidado.
          </p>
          <a
            href={pro.waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-10 py-4 bg-white text-amber-600 font-bold rounded-xl hover:bg-amber-50 transition-all transform hover:-translate-y-1 shadow-xl text-base sm:text-lg"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Leaf, Heart, Target, Ruler, Dna, Flower,
  MessageCircle, MapPin, Phone, Mail, Instagram,
  Apple, ChevronRight, Award, Star, Users, CheckCircle,
} from "lucide-react";
import { WHATSAPP_LINK } from "../lib/whatsapp";
import Seo from "../components/Seo";

function ServiceCard({ icon, title, description, to }) {
  return (
    <Link
      to={to}
      className="group relative bg-white rounded-2xl p-6 sm:p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden block"
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-amber-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-t-2xl" />
      <div className="flex justify-center mb-5">
        <div className="p-4 bg-amber-50 rounded-2xl group-hover:bg-amber-100 transition-colors">
          {icon}
        </div>
      </div>
      <h3 className="font-serif text-lg sm:text-xl text-gray-900 mb-3 font-semibold">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
      <div className="mt-5 inline-flex items-center gap-1 text-amber-600 font-semibold text-sm group-hover:gap-2 transition-all">
        Ver detalhes <ChevronRight size={14} />
      </div>
    </Link>
  );
}

function StatCard({ number, label }) {
  return (
    <div className="text-center px-4">
      <div className="text-3xl sm:text-4xl font-bold text-white mb-1">{number}</div>
      <div className="text-sm text-amber-100 font-medium">{label}</div>
    </div>
  );
}

function TeamCard({ name, specialty, registration, description, photo, alt }) {
  const firstName = name.split(" ")[1] ?? name.split(" ")[0];
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
      <div className="h-72 overflow-hidden bg-amber-100">
        <img
          src={photo}
          alt={alt}
          className="w-full h-full object-cover object-top"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="p-6">
        <h3 className="font-serif text-xl text-gray-900 mb-0.5">{name}</h3>
        <p className="text-amber-500 font-semibold text-sm mb-0.5">{specialty}</p>
        <p className="text-gray-400 text-xs mb-4 font-mono">{registration}</p>
        <p className="text-sm text-gray-600 leading-relaxed mb-5">{description}</p>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex justify-center px-4 py-2.5 bg-amber-500 text-white text-sm font-semibold rounded-xl hover:bg-amber-600 transition-all"
        >
          Agendar com {firstName}
        </a>
      </div>
    </div>
  );
}

function PillarCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
      <div className="flex justify-center mb-5">
        <div className="p-4 bg-amber-50 rounded-2xl">
          {icon}
        </div>
      </div>
      <h3 className="font-serif text-xl sm:text-2xl text-gray-900 mb-3">{title}</h3>
      <p className="text-sm sm:text-base text-gray-500 leading-relaxed">{description}</p>
    </div>
  );
}

const CAROUSEL_SLIDES = [
  {
    photo: "foto_dra_simara.jpg",
    alt: "Dra. Simara Marques",
    name: "Dra. Simara Marques",
    specialty: "Médica · CRM 247.230 SP",
  },
  {
    photo: "foto_philipi.jpg",
    alt: "Dr. Philipi Marques",
    name: "Dr. Philipi Marques",
    specialty: "Médico · CRM 223.765 SP",
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrent((c) => (c + 1) % CAROUSEL_SLIDES.length);
        setFading(false);
      }, 400);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index) => {
    if (index === current) return;
    setFading(true);
    setTimeout(() => {
      setCurrent(index);
      setFading(false);
    }, 400);
  };

  const slide = CAROUSEL_SLIDES[current];

  return (
    <>
      <Seo
        title="Home"
        description="Saúde integrativa com atendimento humanizado. Emagrecimento & endocrinologia, reposição hormonal, saúde da mulher, estética íntima e nutrição clínica."
      />

      <section className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 overflow-hidden">

        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-200 rounded-full opacity-30 blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-300 rounded-full opacity-20 blur-2xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-20 sm:py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Text */}
            <div className="flex flex-col gap-6 sm:gap-7">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-amber-200 rounded-full px-4 py-2 w-fit shadow-sm">
                <Star size={13} className="text-amber-500 fill-amber-500" />
                <span className="text-xs sm:text-sm font-semibold text-amber-700 tracking-wide">
                  Saúde &amp; Emagrecimento
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight text-gray-900">
                Sua saúde, nossa{" "}
                <span className="text-amber-500">prioridade</span>
              </h1>

              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-lg">
                Medicina e nutrição integradas, com atendimento humanizado e personalizado.
                Uma equipe completa dedicada ao seu bem-estar e beleza.
              </p>

              <ul className="flex flex-col gap-2">
                {[
                  "Equipe multidisciplinar especializada",
                  "Consultas presenciais e online",
                  "Planos de tratamento individualizados",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle size={16} className="text-amber-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit px-8 py-3.5 bg-amber-500 text-white font-semibold rounded-xl hover:bg-amber-600 transition-all transform hover:-translate-y-1 shadow-lg shadow-amber-200/50 text-sm sm:text-base"
                >
                  Agendar Consulta
                </a>
                <Link
                  to="/equipe"
                  className="w-fit px-8 py-3.5 bg-white text-gray-800 font-semibold rounded-xl border border-amber-200 hover:border-amber-400 hover:bg-amber-50 transition-all text-sm sm:text-base"
                >
                  Nossa Equipe →
                </Link>
              </div>
            </div>

            {/* Carousel */}
            <div className="relative flex justify-center">
              <div className="relative w-full max-w-sm sm:max-w-md">

                {/* Photo */}
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white">
                  <img
                    key={slide.photo}
                    src={`${import.meta.env.BASE_URL}${slide.photo}`}
                    alt={slide.alt}
                    loading="eager"
                    fetchpriority="high"
                    decoding="async"
                    width="600"
                    height="600"
                    style={{ transition: "opacity 0.4s ease", opacity: fading ? 0 : 1 }}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Name badge */}
                <div
                  style={{ transition: "opacity 0.4s ease", opacity: fading ? 0 : 1 }}
                  className="absolute -bottom-5 -left-5 bg-white rounded-2xl px-4 py-3 shadow-xl border border-amber-100"
                >
                  <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wide mb-0.5">
                    {slide.specialty}
                  </p>
                  <p className="text-sm font-bold text-gray-900 leading-none">{slide.name}</p>
                </div>

                {/* Specialists badge */}
                <div className="absolute -top-5 -right-5 bg-amber-500 rounded-2xl px-4 py-3 shadow-xl flex items-center gap-3">
                  <div className="w-9 h-9 bg-amber-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users size={16} className="text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] text-amber-100 font-medium uppercase tracking-wide">Equipe</p>
                    <p className="text-base font-bold text-white leading-none mt-0.5">3 Especialistas</p>
                  </div>
                </div>

                {/* Dots */}
                <div className="absolute -bottom-14 left-0 right-0 flex justify-center gap-2">
                  {CAROUSEL_SLIDES.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goTo(i)}
                      aria-label={`Slide ${i + 1}`}
                      className={[
                        "rounded-full transition-all duration-300",
                        i === current
                          ? "w-6 h-2.5 bg-amber-500"
                          : "w-2.5 h-2.5 bg-amber-300 hover:bg-amber-400",
                      ].join(" ")}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 divide-x divide-amber-400/40">
            <StatCard number="500+" label="Consultas Realizadas" />
            <StatCard number="3" label="Especialistas" />
            <StatCard number="3+" label="Anos de Experiência" />
          </div>
        </div>
      </section>

      <section id="servicos" className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-24">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-amber-500 font-bold text-xs uppercase tracking-widest mb-3">O que oferecemos</p>
            <h2 className="font-serif text-4xl sm:text-5xl text-gray-900 mb-4">Nossos Serviços</h2>
            <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto">
              Especialidades médicas e nutricionais unidas em um só consultório para cuidar de você de forma completa.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              to="/servicos/emagrecimento-endocrinologia"
              icon={<Ruler size={36} className="text-amber-500" strokeWidth={1.5} />}
              title="Emagrecimento &amp; Endocrinologia"
              description="Tratamento do metabolismo visando emagrecimento, energia, saúde e manutenção de resultados."
            />
            <ServiceCard
              to="/servicos/reposicao-hormonal"
              icon={<Dna size={36} className="text-amber-500" strokeWidth={1.5} />}
              title="Reposição Hormonal"
              description="Avaliação completa para equilíbrio hormonal, com foco em conforto, vitalidade e bem-estar."
            />
            <ServiceCard
              to="/servicos/saude-da-mulher-estetica-intima"
              icon={<Flower size={36} className="text-amber-500" strokeWidth={1.5} />}
              title="Saúde da Mulher &amp; Estética Íntima"
              description="Cuidado íntimo focado em prevenção, autoestima, qualidade de vida e saúde sexual."
            />
            <ServiceCard
              to="/servicos/nutricao-clinica"
              icon={<Apple size={36} className="text-amber-500" strokeWidth={1.5} />}
              title="Nutrição Clínica"
              description="Acompanhamento nutricional individualizado para emagrecimento saudável e saúde metabólica."
            />
          </div>
        </div>
      </section>

      <section id="equipe" className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-24">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-amber-500 font-bold text-xs uppercase tracking-widest mb-3">Profissionais</p>
            <h2 className="font-serif text-4xl sm:text-5xl text-gray-900 mb-4">Nossa Equipe</h2>
            <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto">
              Profissionais dedicados, com formação sólida e comprometimento com a sua saúde.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TeamCard
              photo={`${import.meta.env.BASE_URL}foto_dra_simara2.jpg`}
              alt="Dra. Simara Marques"
              name="Dra. Simara Marques"
              specialty="Médica"
              registration="CRM 247.230 · SP"
              description="Especialista em endocrinologia, emagrecimento e saúde hormonal. Atendimento integrativo e humanizado, com foco em resultados duradouros."
            />
            <TeamCard
              photo={`${import.meta.env.BASE_URL}foto_philipi.jpg`}
              alt="Dr. Philipi Marques"
              name="Dr. Philipi Marques"
              specialty="Médico"
              registration="CRM 223.765 · SP"
              description="Médico com abordagem integrativa e preventiva. Diagnóstico preciso e acompanhamento próximo para sua saúde geral e qualidade de vida."
            />
            <TeamCard
              photo={`${import.meta.env.BASE_URL}foto_jessica.jpg`}
              alt="Dra. Jéssica Moura"
              name="Dra. Jéssica Moura"
              specialty="Nutricionista"
              registration="CRN 51.674 SP"
              description="Nutricionista clínica com foco em reeducação alimentar, emagrecimento saudável e saúde metabólica. Planos alimentares personalizados para cada objetivo."
            />
          </div>

          <div className="text-center mt-10">
            <Link
              to="/equipe"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-amber-50 text-amber-700 font-semibold rounded-xl border border-amber-200 hover:bg-amber-100 hover:border-amber-300 transition-all text-sm"
            >
              Ver perfil completo de cada profissional →
            </Link>
          </div>
        </div>
      </section>

      <section id="pilares" className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-24">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-amber-500 font-bold text-xs uppercase tracking-widest mb-3">Como trabalhamos</p>
            <h2 className="font-serif text-4xl sm:text-5xl text-gray-900">Nossos Pilares</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <PillarCard
              icon={<Leaf size={36} className="text-amber-500" strokeWidth={1.5} />}
              title="Saúde Integrativa"
              description="Olhar amplo do corpo e do estilo de vida para um tratamento completo, coerente e sustentável."
            />
            <PillarCard
              icon={<Heart size={36} className="text-amber-500" strokeWidth={1.5} />}
              title="Atendimento Humanizado"
              description="Escuta real, empatia e orientação clara — com cuidado em cada etapa, do diagnóstico ao acompanhamento."
            />
            <PillarCard
              icon={<Target size={36} className="text-amber-500" strokeWidth={1.5} />}
              title="Tratamento Personalizado"
              description="Planos terapêuticos adaptados à sua rotina, histórico, objetivos e necessidades específicas."
            />
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-amber-500 to-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-14 sm:py-16 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-white mb-4">
            Pronto para cuidar da sua saúde?
          </h2>
          <p className="text-amber-100 text-base sm:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            Agende sua consulta agora e dê o primeiro passo rumo ao seu bem-estar com quem realmente cuida de você.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-amber-600 font-bold rounded-xl hover:bg-amber-50 transition-all transform hover:-translate-y-1 shadow-xl text-base sm:text-lg"
          >
            Falar no WhatsApp
          </a>
        </div>
      </section>

      {/* ── CONTATO ───────────────────────────────────────── */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-24">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-amber-500 font-bold text-xs uppercase tracking-widest mb-3">Fale conosco</p>
            <h2 className="font-serif text-4xl sm:text-5xl text-gray-900">Entre em Contato</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-6">
              {[
                {
                  icon: <MessageCircle size={24} className="text-amber-500" strokeWidth={1.5} />,
                  label: "WhatsApp",
                  content: (
                    <a href="https://wa.me/5511970768886" target="_blank" rel="noopener noreferrer"
                      className="text-amber-600 hover:text-amber-700 font-medium transition-colors">
                      (11) 9 97076-8886
                    </a>
                  ),
                },
                {
                  icon: <Phone size={24} className="text-amber-500" strokeWidth={1.5} />,
                  label: "Telefone",
                  content: <p className="text-gray-600">(11) 9 97076-8886</p>,
                },
                {
                  icon: <Mail size={24} className="text-amber-500" strokeWidth={1.5} />,
                  label: "Email",
                  content: (
                    <a href="mailto:marquesconsultoriomedico@gmail.com"
                      className="text-amber-600 hover:text-amber-700 font-medium transition-colors break-all">
                      marquesconsultoriomedico@gmail.com
                    </a>
                  ),
                },
                {
                  icon: <Instagram size={24} className="text-amber-500" strokeWidth={1.5} />,
                  label: "Instagram",
                  content: (
                    <a href="https://www.instagram.com/consultoriomedicomarques/" target="_blank" rel="noopener noreferrer"
                      className="text-amber-600 hover:text-amber-700 font-medium transition-colors">
                      @consultoriomedicomarques
                    </a>
                  ),
                },
                {
                  icon: <MapPin size={24} className="text-amber-500" strokeWidth={1.5} />,
                  label: "Localização",
                  content: <p className="text-gray-600">Av. Marechal Tito, 677 – Sala 8<br />São Paulo, SP</p>,
                },
              ].map(({ icon, label, content }) => (
                <div key={label} className="flex gap-4 items-start p-4 rounded-xl hover:bg-amber-50 transition-colors">
                  <div className="flex-shrink-0 w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center border border-amber-100">
                    {icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 mb-1 uppercase tracking-wide">{label}</h4>
                    {content}
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg border border-amber-100 bg-white">
              <div className="w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-auto lg:h-96">
                <iframe
                  className="w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0874662451756!2d-46.6661!3d-23.5505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef7c7f7f7f7f7%3A0x0!2sAv.%20Marechal%20Tito%2C%20677!5e0!3m2!1spt-BR!2sbr!4v1707600000000"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="eager"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa Consultório Marques"
                />
              </div>
              <div className="p-4 bg-amber-50 border-t border-amber-100">
                <a
                  href="https://www.google.com/maps?q=Av.%20Marechal%20Tito,%20677%20-%20Sala%208,%20S%C3%A3o%20Paulo%20SP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-700 font-semibold hover:text-amber-800 transition-colors text-sm"
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

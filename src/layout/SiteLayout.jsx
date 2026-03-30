import React, { useState } from "react";
import { NavLink, Outlet, Link } from "react-router-dom";
import { Menu, X, Phone, Instagram, MapPin } from "lucide-react";
import WhatsAppFloating from "../components/WhatsappFloating";
import { WHATSAPP_LINK } from "../lib/whatsapp";

function NavItem({ to, children, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        [
          "text-sm font-medium transition-colors relative group",
          isActive
            ? "text-amber-500"
            : "text-gray-700 hover:text-amber-500",
        ].join(" ")
      }
    >
      {({ isActive }) => (
        <>
          {children}
          <span
            className={[
              "absolute -bottom-1 left-0 right-0 h-0.5 bg-amber-500 rounded-full transition-transform duration-200 origin-left",
              isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
            ].join(" ")}
          />
        </>
      )}
    </NavLink>
  );
}

export default function SiteLayout() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((v) => !v);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* ── TOP BAR ─────────────────────────────────── */}
      <div className="hidden sm:block bg-amber-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-2 flex justify-between items-center text-xs font-medium">
          <div className="flex items-center gap-6">
            <a href="tel:+5511970768886" className="flex items-center gap-1.5 hover:text-amber-100 transition-colors">
              <Phone size={12} />
              (11) 9 97076-8886
            </a>
            <span className="flex items-center gap-1.5">
              <MapPin size={12} />
              Av. Marechal Tito, 677 – Sala 8, São Paulo
            </span>
          </div>
          <a
            href="https://www.instagram.com/consultoriomedicomarques/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-amber-100 transition-colors"
          >
            <Instagram size={12} />
            @consultoriomedicomarques
          </a>
        </div>
      </div>

      {/* ── HEADER ──────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <NavLink to="/home" onClick={closeMenu} className="flex items-center gap-3">
              <img
                src="icone_simara.svg"
                alt="Logo Consultório Médico Marques"
                className="h-9 sm:h-11 w-auto"
              />
              <div className="hidden sm:flex flex-col">
                <span className="font-serif text-lg font-bold text-gray-900 leading-tight tracking-tight">
                  Consultório Marques
                </span>
                <span className="text-[10px] text-amber-500 font-semibold tracking-widest uppercase">
                  Saúde &amp; Emagrecimento
                </span>
              </div>
            </NavLink>

            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-8 lg:gap-10 items-center">
              <NavItem to="/home">Início</NavItem>
              <NavItem to="/sobre">Sobre</NavItem>
              <NavItem to="/equipe">Equipe</NavItem>
              <NavItem to="/contato">Contato</NavItem>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-amber-500 text-white text-sm font-semibold rounded-xl hover:bg-amber-600 transition-all transform hover:-translate-y-0.5 shadow-md shadow-amber-200"
              >
                Agendar Consulta
              </a>
            </nav>

            {/* Hamburger */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 hover:bg-gray-100 rounded-xl transition-colors"
              aria-label="Abrir menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Mobile Nav */}
          {menuOpen && (
            <nav className="md:hidden mt-3 pb-4 flex flex-col gap-1 border-t border-gray-100 pt-4">
              {[
                { to: "/home", label: "Início" },
                { to: "/sobre", label: "Sobre" },
                { to: "/equipe", label: "Equipe" },
                { to: "/contato", label: "Contato" },
              ].map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    [
                      "px-4 py-2.5 rounded-xl text-sm font-medium transition-colors",
                      isActive
                        ? "bg-amber-50 text-amber-600"
                        : "text-gray-700 hover:bg-gray-50 hover:text-amber-500",
                    ].join(" ")
                  }
                >
                  {label}
                </NavLink>
              ))}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="mx-0 mt-2 px-4 py-3 bg-amber-500 text-white text-sm font-semibold rounded-xl hover:bg-amber-600 transition-all text-center"
              >
                Agendar Consulta
              </a>
            </nav>
          )}
        </div>
      </header>

      {/* ── CONTEÚDO ────────────────────────────────── */}
      <main>
        <Outlet />
      </main>

      {/* ── FOOTER ──────────────────────────────────── */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <Link to="/home" className="flex items-center gap-3 mb-4">
                <img src="icone_simara.svg" alt="Logo" className="h-10 w-auto brightness-0 invert opacity-80" />
                <span className="font-serif text-lg font-bold text-white">Consultório Marques</span>
              </Link>
              <p className="text-sm leading-relaxed text-gray-400 mb-4">
                Saúde integrativa com atendimento humanizado. Medicina e nutrição cuidando de você.
              </p>
              <a
                href="https://www.instagram.com/consultoriomedicomarques/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 text-sm font-medium transition-colors"
              >
                <Instagram size={16} />
                @consultoriomedicomarques
              </a>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Navegação</h4>
              <ul className="space-y-2.5">
                {[
                  { to: "/home", label: "Início" },
                  { to: "/sobre", label: "Sobre o Consultório" },
                  { to: "/equipe", label: "Nossa Equipe" },
                  { to: "/contato", label: "Contato" },
                ].map(({ to, label }) => (
                  <li key={to}>
                    <Link to={to} className="text-sm text-gray-400 hover:text-amber-400 transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Serviços */}
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Especialidades</h4>
              <ul className="space-y-2.5">
                {[
                  { to: "/servicos/emagrecimento-endocrinologia", label: "Emagrecimento & Endocrinologia" },
                  { to: "/servicos/reposicao-hormonal", label: "Reposição Hormonal" },
                  { to: "/servicos/saude-da-mulher-estetica-intima", label: "Saúde da Mulher" },
                  { to: "/servicos/nutricao-clinica", label: "Nutrição Clínica" },
                ].map(({ to, label }) => (
                  <li key={to}>
                    <Link to={to} className="text-sm text-gray-400 hover:text-amber-400 transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contato */}
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Contato</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-gray-400">
                  <MapPin size={14} className="text-amber-400 flex-shrink-0 mt-0.5" />
                  Av. Marechal Tito, 677 – Sala 8,<br />São Paulo, SP
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Phone size={14} className="text-amber-400 flex-shrink-0" />
                  <a href="tel:+5511970768886" className="text-gray-400 hover:text-amber-400 transition-colors">
                    (11) 9 97076-8886
                  </a>
                </li>
              </ul>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex px-5 py-2.5 bg-amber-500 text-white text-sm font-semibold rounded-xl hover:bg-amber-600 transition-all"
              >
                Agendar Consulta
              </a>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500">
            <p>&copy; 2026 Consultório Médico Marques. Todos os direitos reservados.</p>
            <p>CRM 223.765 SP · CRN 51674</p>
          </div>
        </div>
      </footer>

      {/* WHATSAPP */}
      <WhatsAppFloating />
    </div>
  );
}

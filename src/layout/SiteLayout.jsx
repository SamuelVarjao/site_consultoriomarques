import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Menu, X } from "lucide-react";
import WhatsAppFloating from "../components/WhatsappFloating";
import { WHATSAPP_LINK } from "../lib/whatsapp";

function NavItem({ to, children, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        [
          "text-sm transition-colors",
          isActive ? "text-amber-600 font-semibold" : "text-gray-900 hover:text-amber-500",
        ].join(" ")
      }
    >
      {children}
    </NavLink>
  );
}

export default function SiteLayout() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((v) => !v);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen bg-amber-50 font-sans">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <NavLink to="/home" onClick={closeMenu} className="flex items-center gap-3">
              <img
                src="icone_simara.svg"
                alt="Logo Consultório Médico Marques"
                className="h-10 sm:h-12 w-auto"
              />
              <span className="hidden sm:block font-serif text-lg sm:text-xl font-semibold text-gray-900 tracking-tight">
                Consultório Marques
              </span>
            </NavLink>

            {/* Navigation Desktop */}
            <nav className="hidden md:flex gap-8 lg:gap-10 items-center">
              <NavItem to="/home">Início</NavItem>
              <NavItem to="/sobre">Sobre</NavItem>
              <NavItem to="/contato">Contato</NavItem>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-amber-500 text-white text-sm font-semibold rounded-lg hover:bg-amber-600 transition-all transform hover:-translate-y-0.5"
              >
                Agendar Consulta
              </a>
            </nav>

            {/* Menu Button Mobile */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Abrir menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {menuOpen && (
            <nav className="md:hidden mt-4 pb-4 flex flex-col gap-3 border-t border-gray-100 pt-4">
              <NavLink
                to="/home"
                onClick={closeMenu}
                className="px-4 py-2 text-gray-900 hover:text-amber-500 transition-colors"
              >
                Início
              </NavLink>

              <NavLink
                to="/sobre"
                onClick={closeMenu}
                className="px-4 py-2 text-gray-900 hover:text-amber-500 transition-colors"
              >
                Sobre
              </NavLink>

              <NavLink
                to="/contato"
                onClick={closeMenu}
                className="px-4 py-2 text-gray-900 hover:text-amber-500 transition-colors"
              >
                Contato
              </NavLink>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="mx-4 px-4 py-2.5 bg-amber-500 text-white text-sm font-semibold rounded-lg hover:bg-amber-600 transition-all text-center"
              >
                Agendar Consulta
              </a>
            </nav>
          )}
        </div>
      </header>

      {/* CONTEÚDO DAS PÁGINAS */}
      <main>
        <Outlet />
      </main>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-amber-100 py-8 text-center">
        <p className="text-sm">&copy; 2026 Consultório Médico Marques. Todos os direitos reservados.</p>
      </footer>

      {/* WHATSAPP */}
      <WhatsAppFloating />
    </div>
  );
}
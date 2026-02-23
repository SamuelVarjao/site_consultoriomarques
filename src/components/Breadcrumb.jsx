import React from "react";
import { Link, useLocation } from "react-router-dom";

const LABELS = {
  home: "Início",
  sobre: "Sobre",
  contato: "Contato",
  servicos: "Serviços",
  "emagrecimento-endocrinologia": "Emagrecimento & Endocrinologia",
  "reposicao-hormonal": "Reposição Hormonal",
  "saude-da-mulher-estetica-intima": "Saúde da Mulher & Estética Íntima",
};

function labelFromSegment(seg) {
  return (
    LABELS[seg] ||
    seg
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase())
  );
}

export default function Breadcrumb({ className = "" }) {
  const { pathname } = useLocation();

  const parts = pathname.split("/").filter(Boolean);

  const crumbs = [{ to: "/home", label: "Início" }];

  let acc = "";
  for (const p of parts) {
    // não adiciona /home como crumb extra
    if (p === "home") continue;
    acc += `/${p}`;
    crumbs.push({ to: acc, label: labelFromSegment(p) });
  }

  return (
    <nav aria-label="Breadcrumb" className={`text-sm ${className}`}>
      <ol className="flex flex-wrap items-center gap-2 text-gray-600">
        {crumbs.map((c, idx) => {
          const isLast = idx === crumbs.length - 1;
          return (
            <li key={c.to} className="flex items-center gap-2">
              {idx !== 0 && <span className="text-gray-300">/</span>}
              {isLast ? (
                <span className="text-gray-900 font-semibold">{c.label}</span>
              ) : (
                <Link to={c.to} className="hover:text-amber-600 transition-colors">
                  {c.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
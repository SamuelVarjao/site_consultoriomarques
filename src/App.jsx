import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SiteLayout from "./layout/SiteLayout";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Contato from "./pages/Contato";
import Sobre from "./pages/Sobre";

import EmagrecimentoEndocrinologia from "./pages/servicos/EmagrecimentoEndocrinologia";
import ReposicaoHormonal from "./pages/servicos/ReposicaoHormonal";
import SaudeMulherEsteticaIntima from "./pages/servicos/SaudeMulherEsteticaIntima";

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Routes>
        <Route element={<SiteLayout />}>
          {/* garante que / sempre vá para /home */}
          <Route path="/" element={<Navigate to="/home" replace />} />

          <Route path="/home" element={<Home />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/sobre" element={<Sobre />} />

          <Route
            path="/servicos/emagrecimento-endocrinologia"
            element={<EmagrecimentoEndocrinologia />}
          />
          <Route path="/servicos/reposicao-hormonal" element={<ReposicaoHormonal />} />
          <Route
            path="/servicos/saude-da-mulher-estetica-intima"
            element={<SaudeMulherEsteticaIntima />}
          />

          {/* opcional */}
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
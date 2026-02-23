import React from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

export default function BackButton({ fallback = "/home", className = "" }) {
  const navigate = useNavigate();

  const handleBack = () => {
    // Se não tiver histórico, manda pro fallback
    if (window.history.length > 1) navigate(-1);
    else navigate(fallback, { replace: true });
  };

  return (
    <button
      type="button"
      onClick={handleBack}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-amber-200 bg-white hover:bg-amber-50 text-gray-900 transition-colors ${className}`}
    >
      <ChevronLeft size={18} />
      Voltar
    </button>
  );
}
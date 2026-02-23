import React from "react";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "../lib/whatsapp";

export default function WhatsAppFloating() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 group"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-green-400 rounded-full opacity-0 group-hover:opacity-20 scale-100 group-hover:scale-125 transition-all duration-500"></div>

        <div className="relative w-14 sm:w-16 h-14 sm:h-16 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center shadow-2xl hover:shadow-green-500/50 transition-all duration-300 group-hover:scale-110">
          <MessageCircle size={28} className="text-white" strokeWidth={1.5} />

          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg group-hover:scale-125 transition-transform">
            1
          </div>
        </div>

        <div className="absolute bottom-full right-0 mb-3 px-3 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Conversar agora
          <div className="absolute top-full right-2 w-2 h-2 bg-gray-900 transform rotate-45"></div>
        </div>
      </div>
    </a>
  );
}
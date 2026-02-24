import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import BackButton from "../components/BackButton";
import Seo from "../components/Seo";
import { MessageCircle, MapPin, Phone, Mail, Instagram } from "lucide-react";

export default function Contato() {
  return (
    <section className="bg-gradient-to-br from-amber-50 to-amber-100">
              <Seo
        title="Contato"
        description="Entre em contato com o Consultório Médico Marques para agendar sua consulta. WhatsApp, telefone, e-mail e localização."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-12">
        <div className="flex items-center justify-between gap-4">
          <Breadcrumb />
          <BackButton />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-24">
        <h2 className="font-serif text-4xl sm:text-5xl text-center text-gray-900 mb-12 sm:mb-16 lg:mb-20">
          Entre em Contato
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-8">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0">
                <MessageCircle size={28} className="text-amber-500 mt-1" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-1">WhatsApp</h4>
                <a
                  href="https://wa.me/5511970768886"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-amber-600 hover:text-amber-700 font-medium transition-colors"
                >
                  (11) 9 97076-8886
                </a>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0">
                <Phone size={28} className="text-amber-500 mt-1" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-1">Telefone</h4>
                <p className="text-base text-gray-600">(11) 9 97076-8886</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0">
                <Mail size={28} className="text-amber-500 mt-1" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-1">Email</h4>
                <a
                  href="mailto:marquesconsultoriomedico@gmail.com"
                  className="text-base text-amber-600 hover:text-amber-700 font-medium transition-colors"
                >
                  marquesconsultoriomedico@gmail.com
                </a>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0">
                <Instagram size={28} className="text-amber-500 mt-1" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-1">Instagram</h4>
                <a
                  href="https://www.instagram.com/consultoriomedicomarques/"
                  className="text-base text-amber-600 hover:text-amber-700 font-medium transition-colors"
                >
                  @consultoriomedicomarques
                </a>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0">
                <MapPin size={28} className="text-amber-500 mt-1" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-1">Localização</h4>
                <p className="text-base text-gray-600">
                  Av. Marechal Tito, 677 - Sala 8
                  <br />
                  São Paulo, SP
                </p>
              </div>
            </div>
          </div>
<div className="rounded-2xl overflow-hidden shadow-lg border border-amber-200 bg-white">
  <div className="w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-auto lg:h-96">
    <iframe
      className="w-full h-full"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0874662451756!2d-46.6661!3d-23.5505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef7c7f7f7f7f7%3A0x0!2sAv.%20Marechal%20Tito%2C%20677!5e0!3m2!1spt-BR!2sbr!4v1707600000000"
      style={{ border: 0 }}
      allowFullScreen
      loading="eager"
      referrerPolicy="no-referrer-when-downgrade"
      title="Mapa"
    />
  </div>

  <div className="p-4 bg-amber-50 border-t border-amber-100">
    <a
      href="https://www.google.com/maps?q=Av.%20Marechal%20Tito,%20677%20-%20Sala%208,%20S%C3%A3o%20Paulo%20SP"
      target="_blank"
      rel="noopener noreferrer"
      className="text-amber-700 font-semibold hover:text-amber-800 transition-colors"
    >
      Abrir no Google Maps →
    </a>
  </div>
</div>
        </div>
      </div>
    </section>
  );
}
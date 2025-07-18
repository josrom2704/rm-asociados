"use client";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/50376416944?text=Hola,%20necesito%20asesoría%20contable%20urgente"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg z-50 transition-all"
      aria-label="WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}

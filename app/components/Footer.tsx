// app/components/Footer.tsx
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer  
    id = "redes"
     className="bg-[#0a0a0a] text-white py-8">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="mb-4 text-sm">© 2025 R&M Asociados | Todos los derechos reservados</p>
        
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.tiktok.com/@rm_solutions.sv"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition text-2xl"
            aria-label="TikTok"
          >
            <FaTiktok />
          </a>

          <a
            href="https://www.instagram.com/rm_solutions.sv"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition text-2xl"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="https://wa.me/50376416944"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition text-2xl"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
}

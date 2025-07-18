"use client";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0a0a0a]/80 backdrop-blur-md border-b border-neutral-800 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="#inicio" className="text-xl font-bold text-white hover:opacity-90 transition">
          R&M Asociados
        </Link>
        <ul className="flex space-x-6 text-sm font-medium text-white">
          <li>
            <a href="#inicio" className="hover:text-green-400 transition">Inicio</a>
          </li>
          <li>
            <a href="#quienes-somos" className="hover:text-green-400 transition">Quiénes Somos</a>
          </li>
          <li>
            <a href="#servicios" className="hover:text-green-400 transition">Servicios</a>
          </li>
          <li>
            <a href="#formulario-consulta" className="hover:text-green-400 transition">Contáctenos</a>
          </li>
          <li>
            <a href="#redes" className="hover:text-green-400 transition">Redes Sociales</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


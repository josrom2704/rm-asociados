// app/components/Navbar.tsx
"use client";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 shadow-sm z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="#inicio" className="text-xl font-bold text-blue-800 hover:opacity-80 transition">
          R&M Asociados
        </Link>
        <ul className="flex space-x-6 text-sm font-semibold text-gray-700">
          <li>
            <a href="#inicio" className="hover:text-blue-600 hover:underline underline-offset-4 transition">Inicio</a>
          </li>
          <li>
            <a href="#quienes" className="hover:text-blue-600 hover:underline underline-offset-4 transition">Quiénes Somos</a>
          </li>
          <li>
            <a href="#servicios" className="hover:text-blue-600 hover:underline underline-offset-4 transition">Servicios</a>
          </li>
          <li>
            <a href="#contacto" className="hover:text-blue-600 hover:underline underline-offset-4 transition">Contáctenos</a>
          </li>
          <li>
            <a href="#redes" className="hover:text-blue-600 hover:underline underline-offset-4 transition">Redes Sociales</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

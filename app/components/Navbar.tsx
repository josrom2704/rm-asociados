'use client';
import Link from "next/link";
import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="#inicio" className="text-xl font-bold text-blue-800" onClick={closeMenu}>
          R&M Asociados
        </Link>

        {/* Menú en escritorio */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          <li><a href="#inicio" className="hover:text-blue-600">Inicio</a></li>
          <li><a href="#quienes" className="hover:text-blue-600">Quiénes Somos</a></li>
          <li><a href="#servicios" className="hover:text-blue-600">Servicios</a></li>
          <li><a href="#formulario-consulta" className="hover:text-blue-600">Contáctenos</a></li>
          <li><a href="#redes" className="hover:text-blue-600">Redes Sociales</a></li>
        </ul>

        {/* Menú hamburguesa */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {menuOpen ? <HiOutlineX className="w-6 h-6" /> : <HiOutlineMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      {menuOpen && (
        <ul className="md:hidden px-6 pb-4 bg-white space-y-2 text-sm font-medium">
          <li><a href="#inicio" onClick={closeMenu} className="block hover:text-blue-600">Inicio</a></li>
          <li><a href="#quienes" onClick={closeMenu} className="block hover:text-blue-600">Quiénes Somos</a></li>
          <li><a href="#servicios" onClick={closeMenu} className="block hover:text-blue-600">Servicios</a></li>
          <li><a href="#formulario-consulta" onClick={closeMenu} className="block hover:text-blue-600">Contáctenos</a></li>
          <li><a href="#redes" onClick={closeMenu} className="block hover:text-blue-600">Redes Sociales</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;



// app/components/Navbar.tsx
"use client";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="#inicio" className="text-lg font-bold text-blue-800">
          R&M Asociados
        </Link>
        <ul className="flex space-x-6 text-sm font-medium">
          <li><a href="#inicio" className="hover:text-blue-600">Inicio</a></li>
          <li><a href="#quienes" className="hover:text-blue-600">Quiénes Somos</a></li>
          <li><a href="#servicios" className="hover:text-blue-600">Servicios</a></li>
          <li><a href="#contacto" className="hover:text-blue-600">Contáctenos</a></li>
          <li><a href="#redes" className="hover:text-blue-600">Redes Sociales</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

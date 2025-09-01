"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Quiénes Somos", href: "#quienes" },
  { label: "Servicios", href: "#servicios" },
  { label: "Contáctenos", href: "#formulario-consulta" },
  { label: "Redes Sociales", href: "#redes" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`fixed top-0 left-0 w-full text-white shadow-lg z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/95 backdrop-blur-md shadow-2xl' 
          : 'bg-gradient-to-r from-black via-gray-900 to-black'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: "spring" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link 
          href="#inicio" 
          className="text-xl font-bold hover:text-green-400 transition-all duration-300 group"
        >
          <motion.span 
            className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent group-hover:from-green-400 group-hover:to-emerald-400 transition-all duration-300 font-serif tracking-wide"
            whileHover={{ scale: 1.05 }}
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ 
              backgroundPosition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            RM Asociados
          </motion.span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium">
          {navLinks.map((link, index) => (
            <motion.li 
              key={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <motion.a 
                href={link.href} 
                className="relative px-3 py-2 hover:text-green-400 transition-all duration-300 group font-serif tracking-wide"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.label}
                <motion.span 
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-green-400 to-emerald-400"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </motion.li>
          ))}
        </ul>

        {/* CTA Button */}
        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <motion.a 
            href="#formulario-consulta"
            className="px-6 py-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold rounded-full text-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-green-400/20 font-serif tracking-wide"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(16, 185, 129, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 4px 15px rgba(16, 185, 129, 0.2)",
                "0 8px 25px rgba(16, 185, 129, 0.4)",
                "0 4px 15px rgba(16, 185, 129, 0.2)"
              ]
            }}
            transition={{
              boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            Contactar
          </motion.a>
        </motion.div>

        {/* Mobile Button */}
        <button
          className="md:hidden focus:outline-none p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <motion.div
            animate={menuOpen ? "open" : "closed"}
            className="w-6 h-6 relative"
          >
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: 45, y: 6 }
              }}
              className="absolute w-6 h-0.5 bg-white rounded-full"
            />
            <motion.span
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 }
              }}
              className="absolute w-6 h-0.5 bg-white rounded-full top-2"
            />
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: -45, y: -6 }
              }}
              className="absolute w-6 h-0.5 bg-white rounded-full top-4"
            />
          </motion.div>
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <motion.ul
              className="px-6 py-6 space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              {navLinks.map((link, index) => (
                <motion.li 
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block text-lg font-medium hover:text-green-400 transition-colors duration-200 py-2 border-b border-white/10 hover:border-green-400/50 font-serif tracking-wide"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.3 }}
                className="pt-4"
              >
                <a
                  href="#formulario-consulta"
                  onClick={() => setMenuOpen(false)}
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold rounded-lg shadow-lg transition-all duration-300 font-serif tracking-wide"
                >
                  Contactar Ahora
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;




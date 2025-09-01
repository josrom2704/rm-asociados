"use client";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, type: "spring" }}
    >
      {/* Floating Label */}
      <motion.div
        className="absolute bottom-full right-0 mb-3 px-4 py-2 bg-black text-white text-sm font-medium rounded-lg shadow-lg whitespace-nowrap"
        initial={{ opacity: 0, y: 10, scale: 0.8 }}
        animate={{ 
          opacity: isHovered ? 1 : 0, 
          y: isHovered ? 0 : 10, 
          scale: isHovered ? 1 : 0.8 
        }}
        transition={{ duration: 0.2 }}
      >
        ¡Consulta gratis!
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
      </motion.div>

      {/* Main Button */}
      <motion.a
        href="https://wa.me/50376416944?text=Hola,%20necesito%20asesoría%20contable%20urgente"
        target="_blank"
        rel="noopener noreferrer"
        className="block relative group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="WhatsApp"
      >
        {/* Glow Effect */}
        <motion.div 
          className="absolute inset-0 bg-green-400 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Main Button */}
        <motion.div 
          className="relative bg-gradient-to-br from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 p-4 rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 border-2 border-green-400/20"
          animate={{
            boxShadow: [
              "0 10px 25px rgba(16, 185, 129, 0.3)",
              "0 15px 35px rgba(16, 185, 129, 0.5)",
              "0 10px 25px rgba(16, 185, 129, 0.3)"
            ]
          }}
          transition={{
            boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <motion.div
            animate={{ rotate: [0, 10, 0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <FaWhatsapp size={28} className="text-white" />
          </motion.div>
        </motion.div>

        {/* Pulse Animation */}
        <motion.div
          className="absolute inset-0 bg-green-400 rounded-full opacity-30"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.a>

      {/* Bouncing Arrow */}
      <motion.div
        className="absolute -top-2 -left-2 text-green-500"
        animate={{
          y: [0, -8, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>
    </motion.div>
  );
}

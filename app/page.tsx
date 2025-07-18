'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-white min-h-screen text-gray-900 scroll-smooth">
      <motion.header
        className="text-center py-10 bg-gradient-to-b from-blue-800 to-blue-500 text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-md mx-auto">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3 }}>
            <Image src="/logo-rm.png" alt="Logo R&M" width={200} height={200} className="mx-auto mb-4" />
          </motion.div>
          <h1 className="text-3xl font-bold">¿Estás listo para enfrentar a Hacienda?</h1>
          <p className="mt-2">R&M Asociados - Contabilidad sin excusas.</p>
          <motion.a
            href="#formulario-consulta"
            className="inline-block mt-6 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Agenda tu consulta gratis ahora
          </motion.a>
        </div>
      </motion.header>



      <motion.section
        className="bg-red-100 text-red-700 text-center p-4 font-bold text-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        ⚠️ ¿Estás listo para la facturación electrónica?
      </motion.section>

      <motion.section
    id="quienes"
    className="py-20 px-6 bg-white text-gray-900 dark:bg-[#0a0a0a] dark:text-white"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
>
    <div className="max-w-5xl mx-auto text-center">
     <h2 className="text-4xl font-bold mb-6">¿Quiénes somos?</h2>
      <p className="text-lg mb-4 leading-relaxed">
      <strong>R&M Asociados</strong> nació con un solo propósito: que ningún pequeño empresario o
      emprendedor se vea aplastado por Hacienda. 
      </p>
      <p className="text-lg leading-relaxed">
      Somos un equipo de contadores públicos, asesores fiscales y expertos en sistemas que entienden lo que es luchar
      día a día por mantener un negocio vivo. Llevamos más de <strong>10 años</strong> protegiendo a nuestros clientes con
      una contabilidad sin excusas.
     </p>
    </div>
  </motion.section>



      <motion.section
        className="py-12 px-6 bg-gray-50 scroll-mt-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Servicios Destacados</h2>
        <ul className="grid md:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
          <li>✅ Transición a facturación electrónica</li>
          <li>✅ Asesoría fiscal completa</li>
          <li>✅ Declaraciones, IVA, ISR y más</li>
          <li>✅ Contabilidad mensual para PYMES</li>
        </ul>
      </motion.section>

      <motion.section
        id="formulario-consulta"
        className="py-12 px-6 bg-gray-50"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold text-center mb-4">Agenda tu consulta</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const name = (document.getElementById("name") as HTMLInputElement).value;
            const phone = (document.getElementById("phone") as HTMLInputElement).value;
            const message = (document.getElementById("message") as HTMLInputElement).value;
            const url = `https://wa.me/50376416944?text=Hola,%20soy%20${encodeURIComponent(name)}%20(${phone}).%20${encodeURIComponent(message)}`;
            window.open(url, "_blank");
          }}
          className="max-w-xl mx-auto grid gap-4"
        >
          <motion.input
            type="text"
            id="name"
            placeholder="Tu nombre"
            required
            className="border p-3 rounded"
            whileFocus={{ borderColor: "#3B82F6" }}
          />
          <motion.input
            type="tel"
            id="phone"
            placeholder="Tu número de teléfono"
            required
            className="border p-3 rounded"
            whileFocus={{ borderColor: "#3B82F6" }}
          />
          <motion.textarea
            id="message"
            placeholder="¿En qué necesitas ayuda contable?"
            required
            className="border p-3 rounded h-32 resize-none"
            whileFocus={{ borderColor: "#3B82F6" }}
          />
          <motion.button
            type="submit"
            className="bg-green-600 text-white py-3 rounded hover:bg-green-700 transition-all"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
          >
            Enviar consulta por WhatsApp
          </motion.button>
        </form>
      </motion.section>

      <footer className="text-center py-6 bg-gray-100">
        <p>© 2025 R&M Asociados | Todos los derechos reservados</p>
      </footer>
    </main>
  );
}


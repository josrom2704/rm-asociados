'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function Home() {
  return (
    <main className="bg-white min-h-screen text-gray-900 scroll-smooth">
      <motion.header
        id="inicio"
        className="text-center py-10 bg-gradient-to-b from-blue-800 to-blue-500 text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-md mx-auto">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3 }}>
            <Image src="/logo-rm.png" alt="Logo R&M" width={200} height={200} className="mx-auto mb-4" />
          </motion.div>
          <h1 className="text-3xl font-bold">¿Estás listo para la facturación electrónica?</h1>
          <p className="mt-2">R&M Asociados - Contabilidad sin excusas.</p>
          <motion.a
            href="#formulario-consulta"
            className="inline-block mt-6 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Dudas o Consultas, Escribenos
          </motion.a>
        </div>
      </motion.header>



      <motion.section
        className="bg-blue-100 text-blue-700 text-center p-4 font-bold text-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        ⚠️¿Ya sabes como incorporarte a la facturacion electronica?
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
            <strong>R&M Asociados</strong> En R&M Asociados somos una firma regional comprometida con el crecimiento y la rentabilidad de las empresas. Brindamos asesoría especializada en áreas legales, contables y empresariales, acompañando a nuestros clientes en cada etapa de su desarrollo. Nos destacamos por ofrecer soluciones prácticas como la creación de manuales de procesos, control interno y diagnósticos operativos. También aplicamos principios de ingeniería empresarial para optimizar operaciones en negocios en marcha.
            Con más de 10 años de experiencia, combinamos auditoría, consultoría y gestión estratégica para que tu empresa no solo cumpla con sus obligaciones, sino que crezca con bases sólidas.
          </p>
          <p className="text-lg leading-relaxed">
            Se parte de la familia con mas de <strong>10 años</strong> de experiencia empresarial
          </p>
        </div>
      </motion.section>



      <motion.section
        id="servicios"
        className="py-20 px-6 bg-gray-50"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Nuestros Servicios
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Servicio 1 */}
          <div className="bg-white shadow-lg rounded-xl p-6 hover:scale-[1.02] transition-all duration-300">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              🧾 Transición a Facturación Electrónica
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Te ayudamos a migrar rápido, legal y sin errores al sistema obligatorio de facturación electrónica. Evita sanciones y empieza a facturar como un profesional hoy mismo.
            </p>
          </div>

          {/* Servicio 2 */}
          <div className="bg-white shadow-lg rounded-xl p-6 hover:scale-[1.02] transition-all duration-300">
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              🏢 Creación de Sociedades
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Te constituimos legalmente desde $1.00. Crea una SAS de forma rápida, sin socios ni papeleos eternos. Ideal para emprendedores individuales.
            </p>
          </div>

          {/* Servicio 3 */}
          <div className="bg-white shadow-lg rounded-xl p-6 hover:scale-[1.02] transition-all duration-300">
            <h3 className="text-xl font-semibold text-purple-700 mb-2">
              📊 Contabilidad Mensual para PYMES
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Llevamos tus libros, registramos todo y te preparamos para auditorías. Cero estrés contable. Nosotros lo manejamos todo.
            </p>
          </div>

          {/* Servicio 4 */}
          <div className="bg-white shadow-lg rounded-xl p-6 hover:scale-[1.02] transition-all duration-300">
            <h3 className="text-xl font-semibold text-red-700 mb-2">
              💼 Asesoría Fiscal y Financiera
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Optimiza impuestos, evita multas y toma decisiones inteligentes con nuestros contadores y asesores financieros. Habla con expertos.
            </p>
          </div>
        </div>
      </motion.section>


      <motion.section
        id="formulario-consulta"
        className="py-12 px-6 bg-gray-50"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold text-center mb-4">Si tienes alguna duda, llena este formulario</h2>
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

      <WhatsAppButton />

      <Footer />

    </main>
  );
}


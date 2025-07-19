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
          <h1 className="text-3xl font-bold">¿Ya conoces sobre las Sociedades de Acciones Simplificadas?</h1>
          <p className="mt-2">R&M Asociados - Contabilidades, Auditorias, Consultorias y Gestion Empresarial</p>
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
        ⚠️ ¿Ya sabes como incorporarte a la facturacion electronica?
      </motion.section>

      <motion.section
        id="quienes"
        className="py-20 px-6 bg-white text-gray-900 dark:bg-[#0a0a0a] dark:text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-center">¿Quiénes somos?</h2>

          <div className="space-y-6 text-lg leading-relaxed">
            <p className="indent-0">
              <strong>R&M Asociados</strong> es una firma regional comprometida con el crecimiento y la rentabilidad de pequeñas y medianas empresas. Brindamos asesoría especializada en áreas legales, contables y fiscales.
            </p>

            <p className="indent-0">
              Acompañamos a nuestros clientes en cada etapa de su desarrollo empresarial con soluciones prácticas como manuales de procesos, control interno y diagnósticos operativos.
            </p>

            <p className="indent-0">
              Aplicamos principios de ingeniería empresarial para optimizar operaciones en negocios en marcha y garantizar resultados sostenibles.
            </p>

            <p className="indent-0">
              Con más de <strong>10 años de experiencia</strong>, combinamos auditoría, consultoría y gestión estratégica para que tu empresa no solo cumpla con sus obligaciones fiscales, sino que también crezca con bases sólidas.
            </p>

            <p className="text-center font-semibold text-blue-800 mt-8">
              ✅ Somos tu equipo contable, legal y fiscal.
            </p>
          </div>
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
          {/* Servicio 5 */}
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
            <h3 className="text-xl font-semibold mb-2 text-green-700">🏗️ Consultoría Empresarial</h3>
            <p className="text-sm leading-relaxed">
              Reingeniería de procesos, control interno, perfiles de puesto y flujogramas. Hacemos que tu empresa funcione.
            </p>
          </div>
          {/* Servicio 6 */}
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
            <h3 className="text-xl font-semibold mb-2 text-green-700">🔚 Cierre de Empresas</h3>
            <p className="text-sm leading-relaxed">
              Te apoyamos en el proceso de cierre ante alcaldías, ISSS, AFP y Hacienda. Legal, rápido y sin estrés.
            </p>
          </div>
          {/* Servicio 7 */}
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
            <h3 className="text-xl font-semibold mb-2 text-green-700">🛡️ Protección de Patrimonio</h3>
            <p className="text-sm leading-relaxed">
              Creamos estructuras offshore que resguardan tu capital en jurisdicciones seguras, lejos del riesgo local.
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


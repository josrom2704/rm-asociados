'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-gray-50 to-white min-h-screen text-gray-900 scroll-smooth">
      {/* Hero Section */}
      <motion.header
        id="inicio"
        className="relative text-center py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white overflow-hidden"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          ></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-6">
          <motion.div 
            initial={{ scale: 0, rotate: -180 }} 
            animate={{ scale: 1, rotate: 0 }} 
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="mb-8"
          >
            <motion.div
              animate={{ 
                y: [0, -5, 0],
                rotate: [0, 2, 0, -2, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <Image 
                src="/logo-rm.png" 
                alt="Logo R&M" 
                width={180} 
                height={180} 
                className="mx-auto drop-shadow-2xl" 
              />
            </motion.div>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight font-serif tracking-wide"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            ¿Ya conoces sobre las{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
              Sociedades de Acciones Simplificadas?
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed font-serif"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            R&M Asociados - Contabilidades, Auditorias, Consultorias y Gestion Empresarial
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <motion.a
              href="#formulario-consulta"
              className="inline-block px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-green-400/20"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              💬 Dudas o Consultas, Escríbenos
            </motion.a>
          </motion.div>
        </div>
      </motion.header>

      {/* Alert Banner */}
      <motion.section
        className="bg-gradient-to-r from-amber-400 to-orange-500 text-white text-center py-6 font-bold text-lg shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto px-6">
          ⚠️ ¿Ya sabes cómo incorporarte a la facturación electrónica?
          <span className="block text-sm font-normal mt-1 opacity-90">
            Te ayudamos a hacer la transición de manera legal y sin errores
          </span>
        </div>
      </motion.section>

      {/* Quiénes Somos Section */}
      <motion.section
        id="quienes"
        className="py-24 px-6 bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent font-serif tracking-wide">
              ¿Quiénes somos?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-6 text-lg leading-relaxed text-gray-700"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-2xl border-l-4 border-blue-500">
                <p className="font-semibold text-blue-900 mb-2">
                  <strong className="text-2xl">R&M Asociados</strong> es una firma regional comprometida con el crecimiento y la rentabilidad de pequeñas y medianas empresas.
                </p>
                <p className="text-blue-800">
                  Brindamos asesoría especializada en áreas legales, contables y fiscales.
                </p>
              </div>

              <div className="space-y-4">
                <p className="flex items-start space-x-3">
                  <span className="text-green-500 text-2xl">✓</span>
                  <span>Acompañamos a nuestros clientes en cada etapa de su desarrollo empresarial con soluciones prácticas como manuales de procesos, control interno y diagnósticos operativos.</span>
                </p>
                
                <p className="flex items-start space-x-3">
                  <span className="text-green-500 text-2xl">✓</span>
                  <span>Aplicamos principios de ingeniería empresarial para optimizar operaciones en negocios en marcha y garantizar resultados sostenibles.</span>
                </p>
                
                <p className="flex items-start space-x-3">
                  <span className="text-green-500 text-2xl">✓</span>
                  <span>Con más de <strong className="text-blue-700">10 años de experiencia</strong>, combinamos auditoría, consultoría y gestión estratégica.</span>
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-blue-600 to-green-600 p-8 rounded-3xl text-white text-center shadow-2xl">
                <div className="text-6xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold mb-4">Tu Éxito es Nuestro Objetivo</h3>
                <p className="text-blue-100 leading-relaxed">
                  Somos tu equipo contable, legal y fiscal. Trabajamos para que tu empresa no solo cumpla con sus obligaciones fiscales, sino que también crezca con bases sólidas.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Servicios Section */}
      <motion.section
        id="servicios"
        className="py-24 px-6 bg-gradient-to-br from-gray-50 to-blue-50"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-blue-800 bg-clip-text text-transparent font-serif tracking-wide">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluciones integrales para el crecimiento y éxito de tu empresa
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full mt-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Servicio 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group"
              whileHover={{ y: -8 }}
            >
              <motion.a 
                href="#formulario-consulta" 
                className="block bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-gray-100 hover:border-blue-200"
                whileHover={{ 
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)"
                }}
                animate={{
                  boxShadow: [
                    "0 10px 25px rgba(0, 0, 0, 0.1)",
                    "0 15px 35px rgba(0, 0, 0, 0.15)",
                    "0 10px 25px rgba(0, 0, 0, 0.1)"
                  ]
                }}
                transition={{
                  boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <motion.div 
                  className="text-4xl mb-4"
                  animate={{ rotate: [0, 5, 0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  🧾
                </motion.div>
                <h3 className="text-xl font-bold text-blue-700 mb-4 group-hover:text-blue-800 transition-colors">
                  Transición a Facturación Electrónica
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Te ayudamos a migrar rápido, legal y sin errores al sistema obligatorio de facturación electrónica. Evita sanciones y empieza a facturar como un profesional hoy mismo.
                </p>
                <motion.div 
                  className="mt-4 text-blue-500 font-semibold group-hover:text-blue-600 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  → Saber más
                </motion.div>
              </motion.a>
            </motion.div>

            {/* Servicio 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="group"
              whileHover={{ y: -8 }}
            >
              <motion.a 
                href="#formulario-consulta" 
                className="block bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-gray-100 hover:border-green-200"
                whileHover={{ 
                  boxShadow: "0 20px 40px rgba(16, 185, 129, 0.15)"
                }}
                animate={{
                  boxShadow: [
                    "0 10px 25px rgba(0, 0, 0, 0.1)",
                    "0 15px 35px rgba(0, 0, 0, 0.15)",
                    "0 10px 25px rgba(0, 0, 0, 0.1)"
                  ]
                }}
                transition={{
                  boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
                }}
              >
                <motion.div 
                  className="text-4xl mb-4"
                  animate={{ rotate: [0, 5, 0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  🏢
                </motion.div>
                <h3 className="text-xl font-bold text-green-700 mb-4 group-hover:text-green-800 transition-colors">
                  Creación de Sociedades
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Te constituimos legalmente desde $1.00. Crea una SAS de forma rápida, sin socios ni papeleos eternos. Ideal para emprendedores individuales.
                </p>
                <motion.div 
                  className="mt-4 text-green-500 font-semibold group-hover:text-green-600 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  → Saber más
                </motion.div>
              </motion.a>
            </motion.div>

            {/* Servicio 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="group"
              whileHover={{ y: -8 }}
            >
              <motion.a 
                href="#formulario-consulta" 
                className="block bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-gray-100 hover:border-purple-200"
                whileHover={{ 
                  boxShadow: "0 20px 40px rgba(139, 92, 246, 0.15)"
                }}
                animate={{
                  boxShadow: [
                    "0 10px 25px rgba(0, 0, 0, 0.1)",
                    "0 15px 35px rgba(0, 0, 0, 0.15)",
                    "0 10px 25px rgba(0, 0, 0, 0.1)"
                  ]
                }}
                transition={{
                  boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }
                }}
              >
                <motion.div 
                  className="text-4xl mb-4"
                  animate={{ rotate: [0, 5, 0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  📊
                </motion.div>
                <h3 className="text-xl font-bold text-purple-700 mb-4 group-hover:text-purple-800 transition-colors">
                  Contabilidad Mensual para PYMES
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Llevamos tus libros, registramos todo y te preparamos para auditorías. Cero estrés contable. Nosotros lo manejamos todo.
                </p>
                <motion.div 
                  className="mt-4 text-purple-500 font-semibold group-hover:text-purple-600 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  → Saber más
                </motion.div>
              </motion.a>
            </motion.div>

            {/* Servicio 4 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="group"
            >
              <a href="#formulario-consulta" className="block bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-gray-100 hover:border-red-200">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="text-xl font-bold text-red-700 mb-4 group-hover:text-red-800 transition-colors">
                  Asesoría Fiscal y Financiera
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Optimiza impuestos, evita multas y toma decisiones inteligentes con nuestros contadores y asesores financieros. Habla con expertos.
                </p>
                <div className="mt-4 text-red-500 font-semibold group-hover:text-red-600 transition-colors">
                  → Saber más
                </div>
              </a>
            </motion.div>

            {/* Servicio 5 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
              className="group"
            >
              <a href="#formulario-consulta" className="block bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-gray-100 hover:border-emerald-200">
                <div className="text-4xl mb-4">🏗️</div>
                <h3 className="text-xl font-bold text-emerald-700 mb-4 group-hover:text-emerald-800 transition-colors">
                  Consultoría Empresarial
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Reingeniería de procesos, control interno, perfiles de puesto y flujogramas. Hacemos que tu empresa funcione.
                </p>
                <div className="mt-4 text-emerald-500 font-semibold group-hover:text-emerald-600 transition-colors">
                  → Saber más
                </div>
              </a>
            </motion.div>

            {/* Servicio 6 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
              className="group"
            >
              <a href="#formulario-consulta" className="block bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-gray-100 hover:border-blue-200">
                <div className="text-4xl mb-4">🔚</div>
                <h3 className="text-xl font-bold text-blue-700 mb-4 group-hover:text-blue-800 transition-colors">
                  Cierre de Empresas
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Te apoyamos en el proceso de cierre ante alcaldías, ISSS, AFP y Hacienda. Legal, rápido y sin estrés.
                </p>
                <div className="mt-4 text-blue-500 font-semibold group-hover:text-blue-600 transition-colors">
                  → Saber más
                </div>
              </a>
            </motion.div>

            {/* Servicio 7 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              viewport={{ once: true }}
              className="group"
            >
              <a href="#formulario-consulta" className="block bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-gray-100 hover:border-red-200">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold text-red-700 mb-4 group-hover:text-red-800 transition-colors">
                  Protección de Patrimonio
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Creamos estructuras offshore que resguardan tu capital en jurisdicciones seguras y evitan el riesgo local.
                </p>
                <div className="mt-4 text-red-500 font-semibold group-hover:text-red-600 transition-colors">
                  → Saber más
                </div>
              </a>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Formulario Section */}
      <motion.section
        id="formulario-consulta"
        className="py-20 px-6 bg-gradient-to-br from-blue-900 to-blue-700 text-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif tracking-wide">
              ¿Tienes alguna duda?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto font-serif">
              Llena este formulario y te contactaremos inmediatamente para resolver todas tus consultas
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-400 mx-auto rounded-full mt-6"></div>
          </motion.div>

          <motion.form
            onSubmit={(e) => {
              e.preventDefault();
              const name = (document.getElementById("name") as HTMLInputElement).value;
              const phone = (document.getElementById("phone") as HTMLInputElement).value;
              const message = (document.getElementById("message") as HTMLInputElement).value;
              const url = `https://wa.me/50376416944?text=Hola,%20soy%20${encodeURIComponent(name)}%20(${phone}).%20${encodeURIComponent(message)}`;
              window.open(url, "_blank");
            }}
            className="max-w-2xl mx-auto grid gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <input
                  type="text"
                  id="name"
                  placeholder="Tu nombre completo"
                  required
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl text-white placeholder-white/70 focus:outline-none focus:border-green-400 focus:bg-white/20 transition-all duration-300"
                />
              </motion.div>
              
              <motion.div
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <input
                  type="tel"
                  id="phone"
                  placeholder="Tu número de teléfono"
                  required
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl text-white placeholder-white/70 focus:outline-none focus:border-green-400 focus:bg-white/20 transition-all duration-300"
                />
              </motion.div>
            </div>
            
            <motion.div
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <textarea
                id="message"
                placeholder="¿En qué necesitas ayuda contable?"
                required
                className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl text-white placeholder-white/70 focus:outline-none focus:border-green-400 focus:bg-white/20 transition-all duration-300 h-32 resize-none"
              />
            </motion.div>
            
            <motion.button
              type="submit"
              className="w-full md:w-auto md:px-12 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-green-400/20"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              💬 Enviar consulta por WhatsApp
            </motion.button>
          </motion.form>
        </div>
      </motion.section>

      <WhatsAppButton />
      <Footer />
    </main>
  );
}
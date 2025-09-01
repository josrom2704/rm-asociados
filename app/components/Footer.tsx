// app/components/Footer.tsx
import { FaInstagram, FaTiktok, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer  
      id="redes"
      className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-16 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent font-serif tracking-wide">
              RM Asociados
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md font-serif">
              Somos tu equipo contable, legal y fiscal. Con más de 10 años de experiencia, 
              ayudamos a pequeñas y medianas empresas a crecer con bases sólidas.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <FaMapMarkerAlt className="text-green-400 flex-shrink-0" />
                <span className="text-sm">El Salvador, Centro América</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <FaPhone className="text-green-400 flex-shrink-0" />
                <span className="text-sm">+503 7641-6944</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <FaEnvelope className="text-green-400 flex-shrink-0" />
                <span className="text-sm">info@rmasociados.com</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-white font-serif tracking-wide">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#inicio" className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm font-serif">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#quienes" className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm font-serif">
                  Quiénes Somos
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm font-serif">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#formulario-consulta" className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm font-serif">
                  Contáctanos
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-white font-serif tracking-wide">Servicios</h4>
            <ul className="space-y-3">
              <li>
                <span className="text-gray-300 text-sm">Facturación Electrónica</span>
              </li>
              <li>
                <span className="text-gray-300 text-sm">Creación de Sociedades</span>
              </li>
              <li>
                <span className="text-gray-300 text-sm">Contabilidad PYMES</span>
              </li>
              <li>
                <span className="text-gray-300 text-sm">Asesoría Fiscal</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Social Media Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h4 className="text-lg font-semibold mb-6 text-white font-serif tracking-wide">Síguenos en Redes Sociales</h4>
          <div className="flex justify-center space-x-8">
            <motion.a
              href="https://www.tiktok.com/@rm_solutions.sv"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-gradient-to-br from-pink-500 to-red-500 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
              aria-label="TikTok"
              animate={{
                boxShadow: [
                  "0 10px 25px rgba(236, 72, 153, 0.3)",
                  "0 15px 35px rgba(236, 72, 153, 0.5)",
                  "0 10px 25px rgba(236, 72, 153, 0.3)"
                ]
              }}
              transition={{
                boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <motion.div
                animate={{ rotate: [0, 5, 0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <FaTiktok className="text-white text-2xl group-hover:rotate-12 transition-transform duration-300" />
              </motion.div>
            </motion.a>

            <motion.a
              href="https://www.instagram.com/rm_solutions.sv"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Instagram"
              animate={{
                boxShadow: [
                  "0 10px 25px rgba(139, 92, 246, 0.3)",
                  "0 15px 35px rgba(139, 92, 246, 0.5)",
                  "0 10px 25px rgba(139, 92, 246, 0.3)"
                ]
              }}
              transition={{
                boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
              }}
            >
              <motion.div
                animate={{ rotate: [0, 5, 0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <FaInstagram className="text-white text-2xl group-hover:rotate-12 transition-transform duration-300" />
              </motion.div>
            </motion.a>

            <motion.a
              href="https://wa.me/50376416944"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
              aria-label="WhatsApp"
              animate={{
                boxShadow: [
                  "0 10px 25px rgba(16, 185, 129, 0.3)",
                  "0 15px 35px rgba(16, 185, 129, 0.5)",
                  "0 10px 25px rgba(16, 185, 129, 0.3)"
                ]
              }}
              transition={{
                boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }
              }}
            >
              <motion.div
                animate={{ rotate: [0, 5, 0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <FaWhatsapp className="text-white text-2xl group-hover:rotate-12 transition-transform duration-300" />
              </motion.div>
            </motion.a>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-8"></div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-400 text-sm">
            © 2025 R&M Asociados | Todos los derechos reservados
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Desarrollado con ❤️ para el éxito de tu empresa
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

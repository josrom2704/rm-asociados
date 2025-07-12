'use client';


import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white min-h-screen text-gray-900">
      <header className="text-center py-10 bg-gradient-to-b from-blue-800 to-blue-500 text-white">
        <div className="max-w-md mx-auto">
          <Image
            src="/logo-rm.png"
            alt="Logo R&M"
            width={200}
            height={200}
            className="mx-auto mb-4"
          />
          <h1 className="text-3xl font-bold">¿Estás listo para enfrentar a Hacienda?</h1>
          <p className="mt-2">R&M Asociados - Contabilidad sin excusas.</p>
          <a
            href="https://wa.me/50370656561?text=Quiero%20una%20consulta%20contable"
            className="inline-block mt-6 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded"
          >
            Agenda tu consulta gratis ahora
          </a>
        </div>
      </header>


      <section className="bg-red-100 text-red-700 text-center p-4 font-bold text-lg">
        ⚠️ ¿Estás listo para la facturacion electronica?.
      </section>

      <section className="py-12 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-6">Servicios Destacados</h2>
        <ul className="grid md:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
          <li>✅ Transición a facturación electrónica</li>
          <li>✅ Asesoría fiscal completa</li>
          <li>✅ Declaraciones, IVA, ISR y más</li>
          <li>✅ Contabilidad mensual para PYMES</li>
        </ul>
      </section>

      <section className="py-12 px-6 bg-gray-50">
  <h2 className="text-2xl font-semibold text-center mb-4">Agenda tu consulta</h2>
  <form
    onSubmit={(e) => {
      e.preventDefault();
      const name = (document.getElementById("name") as HTMLInputElement).value;
      const phone = (document.getElementById("phone") as HTMLInputElement).value;
      const message = (document.getElementById("message") as HTMLInputElement).value;
      const url = `https://wa.me/50370656561?text=Hola,%20soy%20${encodeURIComponent(name)}%20(${phone}).%20${encodeURIComponent(message)}`;
      window.open(url, "_blank");
    }}
    className="max-w-xl mx-auto grid gap-4"
  >
    <input
      type="text"
      id="name"
      placeholder="Tu nombre"
      required
      className="border p-3 rounded"
    />
    <input
      type="tel"
      id="phone"
      placeholder="Tu número de teléfono"
      required
      className="border p-3 rounded"
    />
    <textarea
      id="message"
      placeholder="¿En qué necesitas ayuda contable?"
      required
      className="border p-3 rounded h-32 resize-none"
    />
    <button
      type="submit"
      className="bg-green-600 text-white py-3 rounded hover:bg-green-700 transition-all"
    >
      Enviar consulta por WhatsApp
    </button>
  </form>
</section>


      <footer className="text-center py-6 bg-gray-100">
        <p>© 2025 R&M Asociados | Todos los derechos reservados</p>
      </footer>
    </main>
  );
}



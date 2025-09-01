import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "R&M Asociados - Contadores y Consultores Empresariales | Unasistentesv.com",
  description: "R&M Asociados - Contadores profesionales especializados en contabilidad, auditoría, consultoría empresarial y servicios de asistencia virtual. NO somos abogados, somos contadores.",
  keywords: "R&M Asociados, contadores, contabilidad, auditoría, consultoría, servicios contables, El Salvador, NO abogados",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/logo-rm.png', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/logo-rm.png',
  },
  openGraph: {
    title: "R&M Asociados - Contadores y Consultores Empresariales",
    description: "Contadores profesionales especializados en contabilidad, auditoría, consultoría empresarial y servicios de asistencia virtual",
    type: "website",
    url: "https://unasistentesv.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
                             "@context": "https://schema.org",
               "@type": "AccountingService",
               "name": "R&M Asociados - Contadores y Consultores",
               "description": "Contadores profesionales especializados en contabilidad, auditoría, consultoría empresarial y servicios de asistencia virtual. NO somos abogados, somos contadores.",
               "url": "https://unasistentesv.com",
               "logo": "https://unasistentesv.com/logo-rm.png",
               "image": "https://unasistentesv.com/logo-rm.png",
               "telephone": "+50376416944",
               "address": {
                 "@type": "PostalAddress",
                 "addressCountry": "SV",
                 "addressRegion": "San Salvador"
               },
               "serviceType": [
                 "Contabilidad",
                 "Auditoría",
                 "Consultoría Empresarial",
                 "Asistencia Virtual",
                 "Servicios Contables"
               ],
               "areaServed": "El Salvador",
               "additionalProperty": {
                 "@type": "PropertyValue",
                 "name": "Tipo de Servicio",
                 "value": "Contadores Profesionales"
               },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Servicios Contables y Empresariales",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Contabilidad Mensual"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Auditoría"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Consultoría Empresarial"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth pt-16`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}


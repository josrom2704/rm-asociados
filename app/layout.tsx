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
  title: "R&M Asociados - Servicios de Contabilidad, Auditoría y Consultoría | Unasistentesv.com",
  description: "R&M Asociados - Servicios profesionales de contabilidad, auditoría, consultoría empresarial y asistencia virtual. Tu socio estratégico para el crecimiento de tu empresa.",
  keywords: "R&M Asociados, contabilidad, auditoría, consultoría, servicios empresariales, asistencia virtual, El Salvador",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/logo-rm.png', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/logo-rm.png',
  },
  openGraph: {
    title: "R&M Asociados - Servicios de Contabilidad y Consultoría",
    description: "Servicios profesionales de contabilidad, auditoría, consultoría empresarial y asistencia virtual",
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
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
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


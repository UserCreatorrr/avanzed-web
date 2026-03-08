import type { Metadata } from 'next';
import { Inter, Manrope, Fraunces } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ScrollProgress } from '@/components/magicui/scroll-progress';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  style: ['italic', 'normal'],
  variable: '--font-fraunces',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Selección de personal odontología para clínicas | Avanzed',
  description: 'Potenciamos procesos de selección para clínicas odontológicas especializadas. Seguridad, fiabilidad y calidad de equipo.',
  openGraph: {
    locale: 'es_ES',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${manrope.variable} ${fraunces.variable} scroll-smooth`}>
      <body className="antialiased min-h-screen flex flex-col bg-perola-light text-dark selection:bg-terracota selection:text-white">
        <ScrollProgress />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Avanzed",
              "url": "https://avanzed.es",
              "logo": "https://avanzed.es/logo.png",
              "description": "Consultoría especializada en selección de personal odontológico de alto nivel y RRHH para clínicas dentales.",
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "hola@avanzed.es",
                "contactType": "customer service"
              }
            })
          }}
        />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

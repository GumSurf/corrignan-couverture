import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import ClientLayout from "./components/ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Damien Corrignan - Couvreur indépendant à Lanester | Corrignan Couverture",
  description: "Damien Corrignan, couvreur depuis 1999. Ardoise, zinc, bac acier, aluminium à Lorient, Ploemeur, Locmiquélic, L'Armor Plage.",
  keywords: "Damien Corrignan, couvreur Lanester, couvreur indépendant Morbihan, couvreur Lorient, Ploemeur, Locmiquélic, L'Armor Plage, bassin lorientais",
  authors: [{ name: "Damien Corrignan" }],
  openGraph: {
    title: "Damien Corrignan - Couvreur indépendant à Lanester",
    description: "Couvreur depuis 1999. Intervention dans le bassin lorientais et Morbihan.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Damien Corrignan - Couvreur indépendant",
    description: "Ardoise, zinc, bac acier, aluminium à Lorient et alentours.",
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://corrignan-couverture.fr", // Remplacez par nom de domaine réel
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Corrignan Couverture",
              "description": "Damien Corrignan, couvreur indépendant spécialisé en ardoise, zinc, bac acier et aluminium dans le bassin lorientais.",
              "url": "https://corrignan-couverture.fr", // Remplacez par nom de domaine réel
              "telephone": "+33604107018",
              "email": "corrignan.couv56@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "5 Chem. du Zulio",
                "addressLocality": "Lanester",
                "postalCode": "56600",
                "addressCountry": "FR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "47.7644", // Coordonnées approximatives de Lanester
                "longitude": "-3.2958"
              },
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Lorient"
                },
                {
                  "@type": "City",
                  "name": "Lanester"
                },
                {
                  "@type": "City",
                  "name": "Ploemeur"
                },
                {
                  "@type": "City",
                  "name": "Locmiquélic"
                },
                {
                  "@type": "City",
                  "name": "L'Armor Plage"
                },
                {
                  "@type": "AdministrativeArea",
                  "name": "Morbihan"
                }
              ],
              "serviceType": ["Couverture", "Ardoise", "Zinc", "Bac acier", "Aluminium", "Bardage"],
              "foundingDate": "2024-09-03",
              "founder": {
                "@type": "Person",
                "name": "Damien Corrignan"
              }
            })
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
          <Header />
          <main className="flex-1">
            <ClientLayout>{children}</ClientLayout>
          </main>
          <Footer />
      </body>
    </html>
  );
}

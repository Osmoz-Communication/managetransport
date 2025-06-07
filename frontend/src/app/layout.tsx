import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import AOSInitializer from "./components/setup/aos-initializer";
import { AlertContainer } from "./components/ui/alert/Alert";
import { AlertProvider } from "./providers/AlertProvider";
import { FontAwesomeOptimized } from "./components/setup/fontawesome-optimized";
import { BfcacheOptimizer } from "./components/setup/bfcache-optimizer";
import { SkipLink } from "./components/ui/skip-link";

import 'aos/dist/aos.css'; // CSS AOS nécessaire pour les animations

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Manage Transport',
    default: 'Votre conseiller personnel en transport - Manage Transport',
  },
  description: 'Expert-conseil en transport et logistique. Optimisation des coûts, organisation des appels d\'offres, plans de transport personnalisés. Solutions sur-mesure pour votre entreprise.',
  keywords: ['transport', 'logistique', 'conseil', 'optimisation', 'appels d\'offres', 'France', 'expert'],
  authors: [{ name: 'Jean-Claude Ravineau', url: 'https://managetransport.fr' }],
  creator: 'Manage Transport',
  publisher: 'Manage Transport',
  metadataBase: new URL('https://managetransport.fr'),
  alternates: {
    canonical: '/',
    languages: {
      'fr': '/fr',
      'en': '/en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    alternateLocale: ['en_US'],
    url: 'https://managetransport.fr',
    title: 'Votre conseiller personnel en transport - Manage Transport',
    description: 'Expert-conseil en transport et logistique. Optimisation des coûts, organisation des appels d\'offres, plans de transport personnalisés.',
    siteName: 'Manage Transport',
    images: [
      {
        url: '/images/og-default.webp',
        width: 1200,
        height: 630,
        alt: 'Manage Transport - Expert-conseil en transport et logistique',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Votre conseiller personnel en transport - Manage Transport',
    description: 'Expert-conseil en transport et logistique. Optimisation des coûts, organisation des appels d\'offres, plans de transport personnalisés.',
    images: ['/images/og-default.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/cropped-arbre-de-vie-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/cropped-arbre-de-vie-180x180.png" />

        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical CSS inline pour le premier affichage */
            *{box-sizing:border-box}
            html{font-family:'Geist Sans',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;line-height:1.6;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
            body{margin:0;padding:0;background-color:#fff;color:#1f2937}
            .header-critical{position:sticky;top:0;left:0;right:0;z-index:50;background-color:rgba(255,255,255,.95);backdrop-filter:blur(10px);border-bottom:1px solid #e5e7eb;height:80px}
            .nav-critical{display:flex;justify-content:space-between;align-items:center;padding:0 1rem;max-width:1200px;margin:0 auto;height:100%}
            .logo-critical{font-size:1.5rem;font-weight:700;color:#1f2937;text-decoration:none}
            .hero-critical{min-height:100vh;padding-top:80px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:white;text-align:center}
            .hero-content-critical{max-width:42rem;padding:0 1rem}
            .hero-title-critical{font-size:2.25rem;line-height:1.2;font-weight:800;margin-bottom:1.5rem}
            .hero-description-critical{font-size:1.125rem;line-height:1.7;opacity:.9;margin-bottom:2rem}
            .cta-button-critical{display:inline-block;background-color:#f59e0b;color:white;padding:.75rem 2rem;border-radius:.5rem;text-decoration:none;font-weight:600;transition:all .2s ease;border:none;cursor:pointer}
            .cta-button-critical:hover{background-color:#d97706;transform:translateY(-1px)}
            .skeleton{background:linear-gradient(90deg,#f0f0f0 25%,#e0e0e0 50%,#f0f0f0 75%);background-size:200% 100%;animation:loading 1.5s infinite}
            @keyframes loading{0%{background-position:200% 0}100%{background-position:-200% 0}}
            @media (max-width:768px){.hero-title-critical{font-size:1.875rem}.hero-description-critical{font-size:1rem}.nav-critical{padding:0 .5rem}}
          `
        }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Manage Transport",
              "url": "https://managetransport.fr",
              "logo": "https://managetransport.fr/logo_managetransport.png",
              "description": "Expert-conseil en transport et logistique. Optimisation des coûts, organisation des appels d'offres, plans de transport personnalisés.",
              "founder": {
                "@type": "Person",
                "name": "Jean-Claude Ravineau"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "FR"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
                "areaServed": "FR",
                "availableLanguage": ["French", "English"]
              },
              "sameAs": [
                "https://fr-fr.facebook.com/people/Jean-claude-Ravineau/100011211398278/",
                "https://fr.linkedin.com/in/jean-claude-ravineau-496498195",
                "https://www.instagram.com/jeanclauderavineau/"
              ],
              "service": [
                {
                  "@type": "Service",
                  "name": "Organisation d'appels d'offres transport",
                  "description": "Optimisation et gestion complète des appels d'offres transport"
                },
                {
                  "@type": "Service", 
                  "name": "Plans de transport personnalisés",
                  "description": "Conception de solutions transport sur-mesure"
                },
                {
                  "@type": "Service",
                  "name": "Optimisation des coûts logistiques",
                  "description": "Analyse et réduction des coûts de transport et logistique"
                }
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        {/* Skip Links pour l'accessibilité */}
        <SkipLink href="#main-content">Aller au contenu principal</SkipLink>
        <SkipLink href="#main-navigation">Aller à la navigation</SkipLink>
        <SkipLink href="#footer">Aller au pied de page</SkipLink>
        
        <FontAwesomeOptimized />
        <BfcacheOptimizer />
        <AlertProvider>
          <AOSInitializer />
          {children}
          <AlertContainer />
        </AlertProvider>
      </body>
    </html>
  );
}

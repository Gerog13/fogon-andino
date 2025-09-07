import type React from "react"
import type { Metadata } from "next"
import { Merriweather, Lato } from "next/font/google"
import "./globals.css"

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
  variable: "--font-merriweather",
})

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400"],
  display: "swap",
  variable: "--font-lato",
})

export const metadata: Metadata = {
  title: "Fogón Andino - Catering con alma mendocina",
  description: "Servicio de catering especializado en eventos deportivos, corporativos y sociales en Mendoza. Sabores auténticos de la cordillera para tus eventos especiales.",
  keywords: [
    "catering Mendoza",
    "eventos corporativos",
    "eventos deportivos",
    "catering gourmet",
    "asado argentino",
    "cordillera",
    "Fogón Andino",
    "catering empresarial",
    "eventos sociales",
    "comida mendocina"
  ],
  authors: [{ name: "Fogón Andino" }],
  creator: "Fogón Andino",
  publisher: "Fogón Andino",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://fogonandino.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Fogón Andino - Catering con alma mendocina",
    description: "Servicio de catering especializado en eventos deportivos, corporativos y sociales en Mendoza. Sabores auténticos de la cordillera para tus eventos especiales.",
    url: 'https://fogonandino.com',
    siteName: 'Fogón Andino',
    images: [
      {
        url: '/minimalist-logo.png',
        width: 1200,
        height: 630,
        alt: 'Fogón Andino - Logo con montañas y llama',
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Fogón Andino - Catering con alma mendocina",
    description: "Servicio de catering especializado en eventos deportivos, corporativos y sociales en Mendoza. Sabores auténticos de la cordillera para tus eventos especiales.",
    images: ['/minimalist-logo.png'],
    creator: '@fogonandino',
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
  icons: {
    icon: [
      { url: '/minimalist-logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/minimalist-logo.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/minimalist-logo.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/minimalist-logo.png',
        color: '#000000',
      },
    ],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Fogón Andino",
    "description": "Servicio de catering especializado en eventos deportivos, corporativos y sociales en Mendoza",
    "url": "https://fogonandino.com",
    "logo": "https://fogonandino.com/minimalist-logo.png",
    "image": "https://fogonandino.com/minimalist-logo.png",
    "telephone": "+54-261-XXX-XXXX",
    "email": "info@fogonandino.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mendoza",
      "addressRegion": "Mendoza",
      "addressCountry": "AR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-32.8908",
      "longitude": "-68.8272"
    },
    "openingHours": "Mo-Su 08:00-20:00",
    "priceRange": "$$",
    "servesCuisine": ["Argentine", "Mendoza", "Cordillera"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios de Catering",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Catering Corporativo",
            "description": "Servicio de catering para eventos corporativos"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Catering Deportivo",
            "description": "Servicio de catering para eventos deportivos"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Catering Social",
            "description": "Servicio de catering para eventos sociales"
          }
        }
      ]
    },
    "sameAs": [
      "https://www.facebook.com/fogonandino",
      "https://www.instagram.com/fogonandino",
      "https://www.linkedin.com/company/fogonandino"
    ]
  }

  return (
    <html lang="es" className={`${merriweather.variable} ${lato.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Fogón Andino" />
        <meta name="application-name" content="Fogón Andino" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body>{children}</body>
    </html>
  )
}

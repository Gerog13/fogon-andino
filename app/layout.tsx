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
  description: "Servicio de catering especializado en eventos deportivos, corporativos y sociales en Mendoza",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${merriweather.variable} ${lato.variable} antialiased`}>
      <body>{children}</body>
    </html>
  )
}

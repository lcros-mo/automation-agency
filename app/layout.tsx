// app/layout.tsx
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'AutoFlow - Automatización de Procesos Empresariales',
  description: 'Transformamos procesos manuales en flujos automatizados que funcionan 24/7. Consultoría especializada en automatización con n8n.',
  keywords: 'automatización, n8n, procesos empresariales, CRM, email marketing, consultoría',
  authors: [{ name: 'AutoFlow' }],
  robots: 'index, follow',
  openGraph: {
    title: 'AutoFlow - Automatización de Procesos Empresariales',
    description: 'Ahorra 50+ horas mensuales automatizando tu negocio. Consultoría especializada en n8n.',
    type: 'website',
    locale: 'es_ES',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AutoFlow - Automatización de Procesos Empresariales',
    description: 'Ahorra 50+ horas mensuales automatizando tu negocio.',
  }
}

export const viewport = {
  themeColor: '#2563eb',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

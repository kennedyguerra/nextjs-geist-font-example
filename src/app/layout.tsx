import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tropicália - Boas-vindas',
  description: 'Site oficial Tropicália com foco em acessibilidade e design vibrante',
  keywords: 'tropicália, música, cultura, brasil, acessibilidade',
  authors: [{ name: 'Tropicália Team' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#FF6B35" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body 
        className={`${inter.className} antialiased bg-gradient-to-br from-orange-100 to-pink-50 min-h-screen`}
        role="document"
      >
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-orange-600 text-white px-4 py-2 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-orange-400"
          aria-label="Pular para o conteúdo principal"
        >
          Pular para o conteúdo principal
        </a>
        {children}
      </body>
    </html>
  )
}

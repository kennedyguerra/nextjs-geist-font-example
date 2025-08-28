'use client'

import { useEffect } from 'react'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import ScrollRevealWrapper from '@/components/ScrollRevealWrapper'

export default function Home() {
  useEffect(() => {
    // Configuração global do ScrollReveal
    if (typeof window !== 'undefined') {
      const ScrollReveal = require('scrollreveal').default
      
      ScrollReveal({
        distance: '60px',
        duration: 2000,
        delay: 400,
        reset: true,
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
      })

      // Animações específicas
      ScrollReveal().reveal('.reveal-top', { 
        origin: 'top',
        delay: 200 
      })
      
      ScrollReveal().reveal('.reveal-left', { 
        origin: 'left',
        delay: 400 
      })
      
      ScrollReveal().reveal('.reveal-right', { 
        origin: 'right',
        delay: 600 
      })
      
      ScrollReveal().reveal('.reveal-bottom', { 
        origin: 'bottom',
        delay: 800 
      })
    }
  }, [])

  return (
    <main 
      id="main-content"
      className="min-h-screen bg-gradient-to-br from-orange-200 via-pink-200 to-yellow-200"
      role="main"
      aria-label="Página principal do site Tropicália"
    >
      <ScrollRevealWrapper className="reveal-top">
        <Header />
      </ScrollRevealWrapper>
      
      <ScrollRevealWrapper className="reveal-bottom">
        <HeroSection />
      </ScrollRevealWrapper>
      
      {/* Seções adicionais */}
      <section 
        id="galeria" 
        className="min-h-screen flex items-center justify-center p-8"
        aria-labelledby="galeria-title"
      >
        <ScrollRevealWrapper className="reveal-left">
          <div className="text-center max-w-4xl mx-auto">
            <h2 
              id="galeria-title"
              className="text-4xl md:text-6xl font-bold text-orange-800 mb-8"
            >
              Galeria
            </h2>
            <p className="text-xl text-orange-700 leading-relaxed">
              Explore nossa coleção de momentos e memórias que capturam a essência do movimento tropicalista.
            </p>
          </div>
        </ScrollRevealWrapper>
      </section>
      
      <section 
        id="contato" 
        className="min-h-screen flex items-center justify-center p-8 bg-gradient-to-t from-yellow-300 to-orange-300"
        aria-labelledby="contato-title"
      >
        <ScrollRevealWrapper className="reveal-right">
          <div className="text-center max-w-4xl mx-auto">
            <h2 
              id="contato-title"
              className="text-4xl md:text-6xl font-bold text-orange-900 mb-8"
            >
              Contato
            </h2>
            <p className="text-xl text-orange-800 leading-relaxed mb-8">
              Entre em contato conosco e faça parte desta jornada musical e cultural.
            </p>
            <div className="space-y-4 text-orange-800">
              <p>
                <strong>Email:</strong> 
                <a 
                  href="mailto:contato@tropicalia.com.br" 
                  className="ml-2 underline hover:text-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 rounded"
                  aria-label="Enviar email para contato@tropicalia.com.br"
                >
                  contato@tropicalia.com.br
                </a>
              </p>
              <p>
                <strong>Telefone:</strong> 
                <a 
                  href="tel:+5511999999999" 
                  className="ml-2 underline hover:text-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 rounded"
                  aria-label="Ligar para (11) 99999-9999"
                >
                  (11) 99999-9999
                </a>
              </p>
            </div>
          </div>
        </ScrollRevealWrapper>
      </section>
    </main>
  )
}

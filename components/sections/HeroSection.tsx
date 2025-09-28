// components/sections/HeroSection.tsx
'use client';

import Link from 'next/link';
import TrueFocus from '../ui/animations/TrueFocus';
import Galaxy from '../ui/backgrounds/Galaxy';
import GradientText from '../ui/animations/GradientText';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
      {/* Galaxy Background */}
      <Galaxy 
        intensity="medium" 
        showOnMobile={false}
        particleCount={80}
        className="absolute inset-0"
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          
          {/* Main Headline with TrueFocus */}
          <div className="mb-8">
            <TrueFocus 
              text="Automatizamos lo que te quita tiempo"
              size="xl"
              speed={1.2}
              color="#ffffff"
              className="mb-4"
            />
            <div className="text-xl md:text-2xl text-blue-100 font-light">
              Convierte procesos manuales en{' '}
              <GradientText 
                text="flujos automatizados"
                colors={['#60a5fa', '#a855f7']}
                size="md"
                animated={true}
              />{' '}
              que funcionan 24/7
            </div>
          </div>

          {/* Value Proposition */}
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
              Especialistas en <strong>n8n</strong> que transforman tu negocio. 
              Ahorra 50+ horas mensuales y aumenta ingresos automatizando email marketing, 
              CRM, e-commerce y procesos administrativos.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-blue-200">Horas ahorradas/mes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">€15K+</div>
              <div className="text-blue-200">Ahorro anual promedio</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">2-4</div>
              <div className="text-blue-200">Semanas implementación</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Consulta Gratuita (30 min)
            </Link>
            <Link 
              href="/services"
              className="border-2 border-blue-400 hover:bg-blue-400 hover:text-blue-900 text-blue-200 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
            >
              Ver Servicios
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16">
            <p className="text-blue-300 mb-6">Tecnologías que dominamos:</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
              <div className="text-blue-200 font-semibold">n8n</div>
              <div className="text-blue-200">•</div>
              <div className="text-blue-200 font-semibold">Zapier</div>
              <div className="text-blue-200">•</div>
              <div className="text-blue-200 font-semibold">Make</div>
              <div className="text-blue-200">•</div>
              <div className="text-blue-200 font-semibold">HubSpot</div>
              <div className="text-blue-200">•</div>
              <div className="text-blue-200 font-semibold">Shopify</div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
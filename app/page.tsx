// app/page.tsx
// app/page.tsx
'use client';

import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        
        {/* Hero Section - Clean & Powerful */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Automatización + IA para empresas que quieren escalar
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-10 max-w-3xl mx-auto">
                Desde chatbots inteligentes hasta OCR para facturas. 
                Automatizamos lo que te quita tiempo para que te enfoques en hacer crecer tu negocio.
              </p>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors"
                >
                  Consulta gratuita
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 border-2 border-gray-200 rounded-lg text-lg font-semibold hover:border-gray-300 transition-colors"
                >
                  Ver servicios
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span>2-4 semanas implementación</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span>ROI medible mes 1</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span>Soporte incluido</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">50+</div>
                <div className="text-gray-600">Horas ahorradas mensualmente</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">€15K+</div>
                <div className="text-gray-600">Ahorro anual promedio</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">400+</div>
                <div className="text-gray-600">Integraciones disponibles</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview - Usando ServiceCard */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Qué automatizamos
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Soluciones probadas que generan ROI desde el primer mes
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* IA Featured */}
              <ServiceCard
                aiPowered
                title="IA & Automatización"
                description="Asistentes virtuales, OCR y clasificación inteligente con IA."
                features={[
                  'Chatbots con OpenAI/Claude',
                  'OCR para facturas y contratos',
                  'Clasificación automática'
                ]}
                pricing="€1,500 - €3,500"
                timeline="2-4 semanas"
              />

              {/* Email */}
              <ServiceCard
                aiPowered
                badge="AI-Enhanced"
                title="Email Marketing"
                description="Secuencias automatizadas con segmentación inteligente."
                features={[
                  'Nurturing automático',
                  'Segmentación por IA',
                  'A/B testing'
                ]}
                pricing="€800 - €1,500"
                timeline="1-2 semanas"
              />

              {/* CRM */}
              <ServiceCard
                aiPowered
                badge="AI Scoring"
                title="CRM Automation"
                description="Pipeline automático con lead scoring predictivo."
                features={[
                  'Lead scoring con IA',
                  'Captura desde redes sociales',
                  'Reportes automáticos'
                ]}
                pricing="€1,200 - €2,800"
                timeline="1-2 semanas"
              />
            </div>

            <div className="text-center">
              <Link
                href="/services"
                className="inline-flex items-center text-gray-900 font-semibold hover:text-gray-700 transition-colors"
              >
                Ver todos los servicios
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Por qué elegir AutoFlow
              </h2>
              <p className="text-xl text-gray-600">
                Automatización seria para empresas serias
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Implementación rápida
                </h3>
                <p className="text-gray-600 text-sm">
                  2-4 semanas de la consulta al go-live. Sin proyectos eternos.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gray-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  IA real, no promesas
                </h3>
                <p className="text-gray-600 text-sm">
                  OpenAI, Claude AI y OCR integrados. Casos de uso probados.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gray-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Soporte incluido
                </h3>
                <p className="text-gray-600 text-sm">
                  2-3 meses de soporte técnico en todos los paquetes.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gray-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  ROI medible
                </h3>
                <p className="text-gray-600 text-sm">
                  Tracking claro de tiempo ahorrado y errores eliminados.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Cómo funciona
              </h2>
              <p className="text-xl text-gray-600">
                De la consulta al go-live en 4 pasos
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  step: '01',
                  title: 'Consulta gratuita (30 min)',
                  description: 'Analizamos tus procesos y identificamos qué automatizar con IA. Sin compromiso.'
                },
                {
                  step: '02',
                  title: 'Propuesta técnica (2-3 días)',
                  description: 'Diseñamos la solución con timeline realista y presupuesto transparente.'
                },
                {
                  step: '03',
                  title: 'Implementación (1-6 semanas)',
                  description: 'Construimos, probamos y desplegamos. Demos semanales para feedback.'
                },
                {
                  step: '04',
                  title: 'Soporte y optimización',
                  description: 'Monitoreamos y mejoramos. Soporte incluido durante 2-3 meses.'
                }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 items-start p-6 bg-white rounded-xl border border-gray-200 hover:border-gray-300 transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Stack tecnológico
              </h2>
              <p className="text-gray-600">
                Herramientas enterprise que funcionan
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-70">
              {[
                'n8n',
                'OpenAI',
                'Claude AI',
                'HubSpot',
                'Shopify',
                'Salesforce',
                'Stripe',
                'Slack',
                'Zapier',
                'Make'
              ].map((tool) => (
                <div key={tool} className="text-center text-gray-900 font-semibold">
                  {tool}
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <p className="text-sm text-gray-500">
                Y más de 400 herramientas adicionales via API
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              ¿Listo para automatizar con IA?
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Agenda una consulta gratuita de 30 minutos. Analizamos tu negocio 
              y te mostramos exactamente qué puedes automatizar.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Reservar consulta gratuita
            </Link>
            <p className="mt-6 text-sm text-gray-500">
              Sin compromiso · Sin coste · 30 minutos
            </p>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
}

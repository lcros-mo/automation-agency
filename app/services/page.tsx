// app/services/page.tsx
'use client';

import ServiceCard from '@/components/ServiceCard';
import Footer from '@/components/Footer';

export default function ServicesPage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        
        {/* Hero Section - Con mención a IA */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Automatización + IA que funciona desde el día uno
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Implementamos flujos de trabajo automatizados potenciados por IA que ahorran tiempo real, 
                eliminan errores y escalan con tu negocio. Desde OCR hasta asistentes virtuales.
              </p>
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span>2-4 semanas de implementación</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span>ROI medible desde mes 1</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid - Bento Layout */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            
            {/* Grid with featured service */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              
              {/* Featured Service - IA & Automatización Avanzada */}
              <ServiceCard
                featured
                aiPowered
                title="IA & Automatización Avanzada"
                description="Asistentes virtuales inteligentes, OCR para procesamiento de documentos y clasificación automática. Automatización de próxima generación."
                features={[
                  'Asistentes virtuales con IA (chatbots email/web)',
                  'OCR y procesamiento inteligente de documentos',
                  'Clasificación automática de emails y tickets',
                  'Análisis predictivo y lead scoring con IA',
                  'Extracción de datos de facturas/contratos'
                ]}
                pricing="€1,500 - €3,500"
                timeline="2-4 semanas"
              />

              {/* Regular Services */}
              <div className="grid gap-6">
                <ServiceCard
                  aiPowered
                  badge="AI-Enhanced"
                  title="Email Marketing Automation"
                  description="Secuencias automatizadas con segmentación inteligente y clasificación por IA."
                  features={[
                    'Nurturing automático con personalización IA',
                    'Segmentación basada en comportamiento',
                    'A/B testing automatizado'
                  ]}
                  pricing="€800 - €1,500"
                  timeline="1-2 semanas"
                />
                
                <ServiceCard
                  aiPowered
                  badge="AI Chatbot"
                  title="E-commerce Automation"
                  description="Gestión de inventario y atención al cliente 24/7 con asistente virtual IA."
                  features={[
                    'Chatbot IA para atención 24/7',
                    'Sincronización automática de stock',
                    'Follow-ups inteligentes post-compra'
                  ]}
                  pricing="€1,000 - €2,200"
                  timeline="2-3 semanas"
                />
              </div>
            </div>

            {/* Bottom row */}
            <div className="grid md:grid-cols-3 gap-6">
              <ServiceCard
                aiPowered
                badge="AI Scoring"
                title="CRM Automation"
                description="Pipeline automático con lead scoring predictivo por IA."
                features={[
                  'Lead scoring con IA predictiva',
                  'Captura automática desde redes sociales',
                  'Sincronización multi-plataforma',
                  'Reportes ejecutivos automáticos'
                ]}
                pricing="€1,200 - €2,800"
                timeline="1-2 semanas"
              />

              <ServiceCard
                badge="Social Media"
                title="Social Media Automation"
                description="Automatiza captura de leads y reporting cross-platform."
                features={[
                  'LinkedIn/Instagram leads → CRM',
                  'Content repurposing automático',
                  'Social listening & alerts',
                  'Analytics multi-plataforma'
                ]}
                pricing="€600 - €1,500"
                timeline="1 semana"
              />

              <ServiceCard
                title="Consultoría Custom"
                description="Workflows complejos, integraciones legacy y APIs custom para tu industria."
                features={[
                  'Auditoría completa de procesos',
                  'Integración con sistemas legacy',
                  'Workflows multi-departamento',
                  'Soluciones con IA a medida'
                ]}
                pricing="€2,000 - €5,000"
                timeline="3-6 semanas"
              />
            </div>

            {/* CTA Card */}
            <div className="mt-6 bg-gray-900 text-white rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                ¿No estás seguro qué necesitas?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Agenda una consulta gratuita de 30 minutos. Analizamos tu caso específico 
                y te mostramos exactamente qué puedes automatizar con IA.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Consulta gratuita
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Tecnologías que usamos
              </h2>
              <p className="text-gray-600">
                n8n, OpenAI, Claude AI, y más de 400 integraciones
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
              {[
                { name: 'n8n', tag: 'Core' },
                { name: 'OpenAI', tag: 'IA' },
                { name: 'Claude AI', tag: 'IA' },
                { name: 'HubSpot', tag: 'CRM' },
                { name: 'Shopify', tag: 'E-commerce' },
                { name: 'Salesforce', tag: 'CRM' },
                { name: 'Zapier', tag: 'Integración' },
                { name: 'Make', tag: 'Integración' },
                { name: 'Stripe', tag: 'Pagos' },
                { name: 'Slack', tag: 'Comunicación' }
              ].map((tool) => (
                <div key={tool.name} className="text-center">
                  <div className="text-gray-900 font-semibold mb-1">{tool.name}</div>
                  <div className="text-xs text-gray-500">{tool.tag}</div>
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

        {/* Process Section - Simplified */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Cómo trabajamos
            </h2>
            
            <div className="space-y-8">
              {[
                {
                  step: '01',
                  title: 'Consulta inicial',
                  description: 'Analizamos tus procesos actuales y identificamos oportunidades de automatización + IA con ROI claro.'
                },
                {
                  step: '02',
                  title: 'Propuesta técnica',
                  description: 'Diseñamos la solución óptima (n8n + IA cuando aplique) con timeline realista y presupuesto transparente.'
                },
                {
                  step: '03',
                  title: 'Implementación',
                  description: 'Construimos, probamos y desplegamos. Trabajamos en sprints con demos semanales.'
                },
                {
                  step: '04',
                  title: 'Soporte continuo',
                  description: 'Monitoreamos, optimizamos y escalamos. Soporte técnico incluido durante 2-3 meses.'
                }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-gray-900 text-white rounded-lg flex items-center justify-center font-bold text-lg">
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

        {/* FAQ - Minimal */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Preguntas frecuentes
            </h2>
            
            <div className="space-y-8">
              {[
                {
                  q: "¿Qué tipo de IA utilizan?",
                  a: "Trabajamos principalmente con OpenAI (GPT-4) y Claude AI para asistentes virtuales, OCR y clasificación. La IA específica depende del caso de uso y presupuesto."
                },
                {
                  q: "¿Cuánto tarda la implementación?",
                  a: "Entre 1-6 semanas dependiendo de la complejidad. Email automation típicamente 1-2 semanas. Proyectos con IA custom 3-6 semanas."
                },
                {
                  q: "¿Necesito conocimientos técnicos?",
                  a: "No. Nos encargamos de todo el setup técnico y formamos a tu equipo para usar las automatizaciones."
                },
                {
                  q: "¿Qué pasa si algo deja de funcionar?",
                  a: "Todos los paquetes incluyen 2-3 meses de soporte técnico. Después ofrecemos planes de mantenimiento desde €200/mes."
                },
                {
                  q: "¿Puedo automatizar redes sociales?",
                  a: "Sí, pero nos enfocamos en automatizaciones operativas B2B: captura de leads desde LinkedIn/Instagram a CRM, social listening, y reporting multi-plataforma. No hacemos creación de contenido ni community management."
                }
              ].map((faq, idx) => (
                <div key={idx} className="border-b border-gray-200 pb-8 last:border-0">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {faq.q}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA - Bold but clean */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              ¿Listo para automatizar con IA?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Consulta gratuita de 30 minutos. Analizamos tu negocio y te mostramos 
              exactamente qué puedes automatizar.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Reservar consulta
            </a>
            <p className="mt-4 text-sm text-gray-500">
              Sin compromiso · Sin coste · 30 minutos
            </p>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
}

// app/services/page.tsx
'use client';

import Link from 'next/link';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Servicios de Automatización
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Soluciones probadas que generan ROI desde el primer mes. 
              Implementación rápida, resultados garantizados.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Email Marketing Automation */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Email Marketing Automation</h2>
                  <p className="text-blue-600 font-semibold">ROI promedio: 300%</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">¿Qué incluye?</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 font-bold">✓</span>
                    Secuencias de bienvenida automatizadas
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 font-bold">✓</span>
                    Segmentación automática de leads
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 font-bold">✓</span>
                    Follow-up inteligente basado en comportamiento
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 font-bold">✓</span>
                    Integración CRM + Email Marketing
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 font-bold">✓</span>
                    Reportes automáticos de conversión
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Herramientas compatibles:</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 text-sm">
                    Mailchimp, ConvertKit, ActiveCampaign, HubSpot, Klaviyo, 
                    GetResponse, MailerLite, Sendinblue, Campaign Monitor...
                  </p>
                  <p className="text-blue-600 font-semibold mt-2">
                    +50 plataformas de email marketing
                  </p>
                </div>
              </div>

              <div className="border-t pt-6">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-2xl font-bold text-gray-900">€800 - €1,500</p>
                    <p className="text-sm text-gray-600">Setup completo + 2 meses soporte</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Implementación</p>
                    <p className="font-semibold">1-2 semanas</p>
                  </div>
                </div>
                <Link 
                  href="/contact"
                  className="w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors block"
                >
                  Solicitar Consulta
                </Link>
              </div>
            </div>

            {/* E-commerce Automation */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">E-commerce Automation</h2>
                  <p className="text-green-600 font-semibold">Ahorro: 15-25h/semana</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">¿Qué automatizamos?</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 font-bold">✓</span>
                    Gestión automática de inventarios
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 font-bold">✓</span>
                    Procesamiento de pedidos
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 font-bold">✓</span>
                    Notificaciones automáticas de stock
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 font-bold">✓</span>
                    Customer service chatbots
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 font-bold">✓</span>
                    Sincronización multi-plataforma
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Plataformas compatibles:</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 text-sm">
                    Shopify, WooCommerce, PrestaShop, Magento, BigCommerce, 
                    Amazon, eBay, Mercado Libre, Etsy...
                  </p>
                  <p className="text-green-600 font-semibold mt-2">
                    +30 plataformas e-commerce
                  </p>
                </div>
              </div>

              <div className="border-t pt-6">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-2xl font-bold text-gray-900">€1,200 - €2,200</p>
                    <p className="text-sm text-gray-600">Setup completo + 2 meses soporte</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Implementación</p>
                    <p className="font-semibold">2-3 semanas</p>
                  </div>
                </div>
                <Link 
                  href="/contact"
                  className="w-full bg-green-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors block"
                >
                  Solicitar Consulta
                </Link>
              </div>
            </div>

            {/* CRM Integration */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 p-3 rounded-lg mr-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">CRM Integration</h2>
                  <p className="text-purple-600 font-semibold">90% menos errores de datos</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">¿Qué automatizamos?</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 font-bold">✓</span>
                    Captura automática de leads
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 font-bold">✓</span>
                    Sincronización de datos en tiempo real
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 font-bold">✓</span>
                    Pipeline automation por scoring
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 font-bold">✓</span>
                    Reportes automáticos de ventas
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 font-bold">✓</span>
                    Integraciones múltiples herramientas
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Herramientas compatibles:</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 text-sm">
                    HubSpot, Salesforce, Pipedrive, Zoho, Monday.com, Airtable, 
                    ClickUp, Google Workspace, Office 365...
                  </p>
                  <p className="text-purple-600 font-semibold mt-2">
                    +100 integraciones CRM disponibles
                  </p>
                </div>
              </div>

              <div className="border-t pt-6">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-2xl font-bold text-gray-900">€1,200 - €2,800</p>
                    <p className="text-sm text-gray-600">Setup completo + 2 meses soporte</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Implementación</p>
                    <p className="font-semibold">1-2 semanas</p>
                  </div>
                </div>
                <Link 
                  href="/contact"
                  className="w-full bg-purple-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors block"
                >
                  Solicitar Consulta
                </Link>
              </div>
            </div>

            {/* Custom Consulting */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-4">
                <div className="bg-orange-100 p-3 rounded-lg mr-4">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Consultoría Custom</h2>
                  <p className="text-orange-600 font-semibold">Soluciones a medida</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">¿Para qué casos?</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 font-bold">✓</span>
                    Automatizaciones específicas de tu industria
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 font-bold">✓</span>
                    Integración con sistemas legacy
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 font-bold">✓</span>
                    Workflows complejos multi-departamento
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 font-bold">✓</span>
                    APIs custom y webhooks avanzados
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 font-bold">✓</span>
                    Consultoría estratégica completa
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Sectores de especialización:</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 text-sm">
                    Inmobiliarias, Agencias de marketing, Consultoría, 
                    Educación online, SaaS, Servicios profesionales...
                  </p>
                  <p className="text-orange-600 font-semibold mt-2">
                    Solución personalizada para tu sector
                  </p>
                </div>
              </div>

              <div className="border-t pt-6">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-2xl font-bold text-gray-900">€2,000 - €5,000</p>
                    <p className="text-sm text-gray-600">Proyecto completo + soporte extendido</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Implementación</p>
                    <p className="font-semibold">3-6 semanas</p>
                  </div>
                </div>
                <Link 
                  href="/contact"
                  className="w-full bg-orange-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors block"
                >
                  Solicitar Consulta
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nuestro Proceso
            </h2>
            <p className="text-xl text-gray-600">
              Metodología probada para resultados rápidos y efectivos
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Análisis",
                description: "Auditoría gratuita de tus procesos actuales y identificación de oportunidades",
                duration: "2-3 días"
              },
              {
                step: "02", 
                title: "Diseño",
                description: "Creamos el plan de automatización específico con ROI proyectado",
                duration: "3-5 días"
              },
              {
                step: "03",
                title: "Desarrollo",
                description: "Implementamos y configuramos todas las automatizaciones",
                duration: "1-3 semanas"
              },
              {
                step: "04",
                title: "Optimización",
                description: "Testing, ajustes y formación para maximizar los resultados",
                duration: "2-4 semanas"
              }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {phase.title}
                </h3>
                <p className="text-gray-600 mb-2">
                  {phase.description}
                </p>
                <p className="text-sm text-blue-600 font-semibold">
                  {phase.duration}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Preguntas Frecuentes
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "¿Cuánto tiempo tarda en verse el ROI?",
                a: "Típicamente entre 2-4 semanas después de la implementación. Los clientes reportan ahorros inmediatos en tiempo y reducción de errores desde el primer mes."
              },
              {
                q: "¿Qué pasa si mi herramienta no está en la lista?",
                a: "Nuestras soluciones conectan con +400 servicios y podemos crear integraciones custom via API. Si tu herramienta tiene API, la conectamos."
              },
              {
                q: "¿Incluye soporte técnico?",
                a: "Sí, todos los paquetes incluyen 2-3 meses de soporte técnico completo. Después ofrecemos planes de mantenimiento desde €200/mes."
              },
              {
                q: "¿Necesito conocimientos técnicos?",
                a: "No. Nos encargamos de todo y formamos a tu equipo. Las automatizaciones funcionan completamente en background."
              },
              {
                q: "¿Cómo garantizan la seguridad de mis datos?",
                a: "Utilizamos protocolos de seguridad estándar de la industria y todas las integraciones se realizan con tokens seguros y encriptación SSL."
              },
              {
                q: "¿Puedo cancelar el servicio cuando quiera?",
                a: "Sí, no hay permanencia. Las automatizaciones seguirán funcionando independientemente y puedes cancelar el soporte cuando desees."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {faq.q}
                </h3>
                <p className="text-gray-700">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿Listo para automatizar tu negocio?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Consulta gratuita de 30 minutos para analizar tu caso específico
          </p>
          <Link 
            href="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
          >
            Reservar Consulta Gratuita
          </Link>
        </div>
      </section>
    </div>
  );
}
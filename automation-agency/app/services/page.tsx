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
                    Reportes automáticos de performance
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Caso de uso típico:</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2">
                    <strong>Cliente:</strong> E-commerce con 1,000+ leads/mes
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Problema:</strong> 70% de leads se perdían sin seguimiento
                  </p>
                  <p className="text-green-600 font-semibold">
                    <strong>Resultado:</strong> +45% conversión, 15h/semana ahorradas
                  </p>
                </div>
              </div>

              <div className="border-t pt-6">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-2xl font-bold text-gray-900">€1,500 - €3,500</p>
                    <p className="text-sm text-gray-600">Setup completo + 3 meses soporte</p>
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M8 11v6a2 2 0 002 2h4a2 2 0 002-2v-6M8 11h8" />
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
                <h3 className="text-lg font-semibold mb-3">Caso de uso típico:</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2">
                    <strong>Cliente:</strong> Tienda online con 200+ pedidos/mes
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Problema:</strong> Gestión manual causaba errores y retrasos
                  </p>
                  <p className="text-green-600 font-semibold">
                    <strong>Resultado:</strong> 95% menos errores, respuesta 24h→2h
                  </p>
                </div>
              </div>

              <div className="border-t pt-6">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-2xl font-bold text-gray-900">€2,000 - €4,500</p>
                    <p className="text-sm text-gray-600">Setup completo + 3 meses soporte</p>
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">CRM Integration</h2>
                  <p className="text-purple-600 font-semibold">Precisión: 95%+ datos</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">¿Qué conectamos?</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 font-bold">✓</span>
                    Sincronización automática de leads
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 font-bold">✓</span>
                    Actualización de datos en tiempo real
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
                    Mailchimp, ConvertKit, Zapier, Google Workspace, Office 365...
                  </p>
                  <p className="text-purple-600 font-semibold mt-2">
                    +200 integraciones disponibles
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Consultoría Custom</h2>
                  <p className="text-orange-600 font-semibold">100% personalizado</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">¿Qué desarrollamos?</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 font-bold">✓</span>
                    Auditoría completa de procesos
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 font-bold">✓</span>
                    Automatizaciones específicas del sector
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 font-bold">✓</span>
                    Workflows complejos multi-departamento
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 font-bold">✓</span>
                    Formación del equipo
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 font-bold">✓</span>
                    Soporte técnico continuo
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Sectores especializados:</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                    <p>• Inmobiliarias</p>
                    <p>• Consultorías</p>
                    <p>• Agencias Marketing</p>
                    <p>• SaaS & Tech</p>
                    <p>• Educación Online</p>
                    <p>• Healthcare</p>
                  </div>
                  <p className="text-orange-600 font-semibold mt-3">
                    Soluciones adaptadas a tu industria
                  </p>
                </div>
              </div>

              <div className="border-t pt-6">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-2xl font-bold text-gray-900">€150/hora</p>
                    <p className="text-sm text-gray-600">Proyectos desde €3,000</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Primera consulta</p>
                    <p className="font-semibold text-green-600">GRATUITA</p>
                  </div>
                </div>
                <Link 
                  href="/contact"
                  className="w-full bg-orange-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors block"
                >
                  Consulta Gratuita
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nuestro Proceso de Implementación
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
                a: "n8n conecta con +400 servicios y podemos crear integraciones custom via API. Si tu herramienta tiene API, la conectamos."
              },
              {
                q: "¿Incluye soporte técnico?",
                a: "Sí, todos los paquetes incluyen 2-3 meses de soporte técnico completo. Después ofrecemos planes de mantenimiento desde €200/mes."
              },
              {
                q: "¿Necesito conocimientos técnicos?",
                a: "No. Nos encargamos de todo y formamos a tu equipo. Las automatizaciones funcionan completamente en background."
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
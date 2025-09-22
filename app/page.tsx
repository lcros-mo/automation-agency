// app/page.tsx
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Automatiza tu negocio<br />
              <span className="text-blue-200">en 2 semanas</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Transformamos procesos manuales en flujos automatizados que funcionan 24/7. 
              ROI visible desde el primer mes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Consulta Gratuita
              </Link>
              <Link 
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Ver Servicios
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem vs Solution */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ¿Cansado de perder tiempo en tareas repetitivas?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-red-600 mb-6">
                No sigas perdiendo tiempo en:
              </h3>
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 font-bold">✗</span>
                  Procesar emails y leads manualmente
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 font-bold">✗</span>
                  Actualizar datos entre múltiples herramientas
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 font-bold">✗</span>
                  Generar reportes que nadie lee
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 font-bold">✗</span>
                  Seguimiento manual de clientes
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 font-bold">✗</span>
                  Copiar datos de una app a otra
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-600 mb-6">
                Nosotros lo automatizamos TODO
              </h3>
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 font-bold">✓</span>
                  Leads calificados automáticamente en tu CRM
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 font-bold">✓</span>
                  Datos sincronizados en tiempo real
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 font-bold">✓</span>
                  Reportes inteligentes que SÍ importan
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 font-bold">✓</span>
                  Seguimiento automático sin intervención
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 font-bold">✓</span>
                  Flujos que funcionan mientras duermes
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Servicios que generan resultados inmediatos
            </h2>
            <p className="text-xl text-gray-600">
              Implementación en 1-2 semanas. ROI visible desde el primer mes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Email Marketing",
                description: "Secuencias automatizadas que convierten leads en clientes",
                roi: "300% ROI promedio",
                color: "blue"
              },
              {
                title: "E-commerce",
                description: "Inventarios, pedidos y customer service automatizados",
                roi: "15-20h/semana ahorradas",
                color: "green"
              },
              {
                title: "CRM Integration",
                description: "Todos tus datos centralizados y actualizados en tiempo real",
                roi: "90% menos errores",
                color: "purple"
              },
              {
                title: "Consultoría Custom",
                description: "Automatizaciones específicas para tu industria",
                roi: "Soluciones a medida",
                color: "orange"
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <p className={`text-${service.color}-600 font-semibold`}>
                  {service.roi}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/services"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors inline-block"
            >
              Ver Todos los Servicios
            </Link>
          </div>
        </div>
      </section>

      {/* ROI Calculator Placeholder */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ¿Cuánto tiempo podrías ahorrar?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Calcula el ROI de automatizar tus procesos
          </p>
          
          {/* Simple ROI Preview */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">15-25h</div>
                <p className="text-gray-600">Tiempo ahorrado por semana</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">€1,200+</div>
                <p className="text-gray-600">Valor del tiempo recuperado</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">2-4x</div>
                <p className="text-gray-600">ROI en los primeros 6 meses</p>
              </div>
            </div>
            <div className="mt-8">
              <Link 
                href="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Calcular mi ROI específico
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Por qué elegir AutoFlow
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "⚡",
                title: "Implementación Rápida",
                description: "Tus automatizaciones funcionando en 1-2 semanas. Sin complicaciones técnicas."
              },
              {
                icon: "🎯",
                title: "ROI Garantizado",
                description: "Si no ahorras tiempo y dinero en el primer mes, seguimos trabajando gratis."
              },
              {
                icon: "🔧",
                title: "Soporte Completo",
                description: "2-3 meses de soporte incluido. Te formamos para que seas autónomo."
              },
              {
                icon: "🔗",
                title: "Conecta Todo",
                description: "Integramos cualquier herramienta que uses. Si tiene API, la conectamos."
              },
              {
                icon: "📊",
                title: "Datos en Tiempo Real",
                description: "Reportes automáticos que te ayudan a tomar mejores decisiones."
              },
              {
                icon: "🚀",
                title: "Escalable",
                description: "Las automatizaciones crecen contigo. Añade procesos cuando necesites."
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Deja de perder tiempo en tareas manuales
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Consulta gratuita de 30 minutos. Analizamos tus procesos y te mostramos exactamente qué podemos automatizar.
          </p>
          <Link 
            href="/contact"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors inline-block"
          >
            Reservar Consulta Gratuita
          </Link>
          <p className="text-sm text-gray-400 mt-4">
            Sin compromiso. Sin costes ocultos. Solo resultados.
          </p>
        </div>
      </section>
    </div>
  );
}

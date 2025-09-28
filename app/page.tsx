// app/page.tsx
import HeroSection from '@/components/sections/HeroSection';
import GradientText from '@/components/ui/animations/GradientText';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Effects */}
      <HeroSection />

      {/* Services Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <GradientText 
                text="Nuestros Servicios"
                colors={['#1f2937', '#2563eb']}
                size="lg"
                animated={false}
              />
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluciones probadas que generan ROI desde el primer mes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Email Automation */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-blue-600 text-3xl mb-4">📧</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                <GradientText 
                  text="Email Automation"
                  colors={['#2563eb', '#1d4ed8']}
                  size="sm"
                  hover={true}
                />
              </h3>
              <p className="text-gray-600 mb-4">
                Nurturing automático, segmentación inteligente y campañas de conversión.
              </p>
              <p className="text-sm text-blue-600 font-semibold">Desde €800</p>
            </div>

            {/* E-commerce */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-green-600 text-3xl mb-4">🛒</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                <GradientText 
                  text="E-commerce"
                  colors={['#059669', '#047857']}
                  size="sm"
                  hover={true}
                />
              </h3>
              <p className="text-gray-600 mb-4">
                Gestión de inventario, follow-ups de carrito abandonado y atención al cliente.
              </p>
              <p className="text-sm text-green-600 font-semibold">Desde €1,200</p>
            </div>

            {/* CRM Automation */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-purple-600 text-3xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                <GradientText 
                  text="CRM Automation"
                  colors={['#7c3aed', '#6d28d9']}
                  size="sm"
                  hover={true}
                />
              </h3>
              <p className="text-gray-600 mb-4">
                Pipeline automation, scoring de leads y reportes automáticos.
              </p>
              <p className="text-sm text-purple-600 font-semibold">Desde €1,200</p>
            </div>

            {/* Custom Solutions */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-orange-600 text-3xl mb-4">⚙️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                <GradientText 
                  text="Consultoría Custom"
                  colors={['#ea580c', '#dc2626']}
                  size="sm"
                  hover={true}
                />
              </h3>
              <p className="text-gray-600 mb-4">
                Auditorías completas y soluciones a medida para tu sector específico.
              </p>
              <p className="text-sm text-orange-600 font-semibold">€150/hora</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/services"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Ver Todos los Servicios
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            <GradientText 
              text="Calcula tu ROI"
              colors={['#1f2937', '#059669']}
              size="lg"
            />
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Descubre cuánto puedes ahorrar automatizando tus procesos
          </p>
          
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <p className="text-gray-600 mb-8">
              Una empresa típica de 20 empleados ahorra <strong>€18,000 anuales</strong> 
              automatizando solo email marketing y gestión de leads.
            </p>
            <Link 
              href="/contact"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
            >
              Calcular Mi Ahorro
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <GradientText 
              text="¿Listo para automatizar tu negocio?"
              colors={['#ffffff', '#60a5fa']}
              size="lg"
            />
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Consulta gratuita de 30 minutos. Sin compromiso. Sin coste.
          </p>
          <Link 
            href="/contact"
            className="bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors duration-300"
          >
            Reservar Consulta Gratuita
          </Link>
        </div>
      </section>
    </div>
  );
}

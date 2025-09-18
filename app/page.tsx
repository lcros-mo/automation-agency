// app/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function HomePage() {
  const [calculatorValues, setCalculatorValues] = useState({
    emails: '500',
    hoursManual: '2',
    costPerHour: '25'
  });

  const monthlyROI = () => {
    const emails = parseInt(calculatorValues.emails) || 0;
    const hours = parseFloat(calculatorValues.hoursManual) || 0;
    const cost = parseFloat(calculatorValues.costPerHour) || 0;
    return Math.round(emails * hours * cost);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Automatiza tu negocio.<br />
              <span className="text-blue-200">Multiplica tus resultados.</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Transformamos procesos manuales en flujos automatizados que funcionan 24/7. 
              Más tiempo para crecer, menos tiempo en tareas repetitivas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Consulta Gratuita
              </Link>
              <button 
                onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-700 transition-colors"
              >
                Calcular ROI
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                ¿Tu equipo pierde horas en tareas repetitivas?
              </h2>
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
                roi: "300% ROI promedio"
              },
              {
                title: "E-commerce",
                description: "Inventarios, pedidos y customer service automatizados",
                roi: "15-20h/semana ahorradas"
              },
              {
                title: "CRM Integration",
                description: "Todos tus datos centralizados y actualizados en tiempo real",
                roi: "90% menos errores"
              },
              {
                title: "Consultoría Custom",
                description: "Automatizaciones específicas para tu industria",
                roi: "Soluciones a medida"
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <p className="text-blue-600 font-semibold">
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

      {/* ROI Calculator */}
      <section id="calculator" className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Calcula cuánto puedes ahorrar
            </h2>
            <p className="text-xl text-gray-600">
              Solo toma 30 segundos descubrir tu ROI potencial
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Emails que procesas manualmente/mes
                  </label>
                  <input
                    type="number"
                    value={calculatorValues.emails}
                    onChange={(e) => setCalculatorValues({...calculatorValues, emails: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Horas por email (promedio)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={calculatorValues.hoursManual}
                    onChange={(e) => setCalculatorValues({...calculatorValues, hoursManual: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Coste por hora (€)
                  </label>
                  <input
                    type="number"
                    value={calculatorValues.costPerHour}
                    onChange={(e) => setCalculatorValues({...calculatorValues, costPerHour: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="25"
                  />
                </div>
              </div>

              <div className="bg-blue-600 text-white p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Tu ahorro potencial:</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-blue-200">Ahorro mensual</p>
                    <p className="text-4xl font-bold">€{monthlyROI().toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-blue-200">Ahorro anual</p>
                    <p className="text-2xl font-semibold">€{(monthlyROI() * 12).toLocaleString()}</p>
                  </div>
                  <div className="border-t border-blue-400 pt-4 mt-6">
                    <p className="text-sm text-blue-200 mb-3">
                      Inversión típica: €2,000 - €5,000
                    </p>
                    <p className="text-lg font-semibold">
                      ROI: {monthlyROI() > 0 ? Math.round((monthlyROI() * 12) / 3500 * 100) : 0}%
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link 
                href="/contact"
                className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors inline-block"
              >
                Quiero mi consulta gratuita
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Resultados que hablan por sí solos
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { metric: "40h/mes", description: "Ahorradas en promedio por cliente" },
              { metric: "250%", description: "ROI promedio en el primer año" },
              { metric: "2 semanas", description: "Tiempo promedio de implementación" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {stat.metric}
                </div>
                <p className="text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿Listo para automatizar tu negocio?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Consulta gratuita de 30 minutos para analizar tu caso específico
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
            >
              Reservar Consulta Gratuita
            </Link>
            <Link 
              href="/services"
              className="border-2 border-gray-400 text-gray-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 hover:border-gray-300 transition-colors"
            >
              Ver Servicios Detallados
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

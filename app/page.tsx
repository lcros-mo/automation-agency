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
            <div className="mb-6">
              <span className="bg-blue-500 text-blue-100 px-4 py-2 rounded-full text-sm font-medium">
                🔧 15+ años desarrollo de software • Automatización técnica avanzada
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Automatización Empresarial<br />
              <span className="text-blue-200">Con Desarrollo Técnico Real</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
              Combinamos herramientas no-code con desarrollo custom para crear 
              soluciones que van más allá de lo que ofrecen otros consultores. 
              <strong>Desde workflows simples hasta integraciones complejas</strong>.
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

      {/* Technical Advantage Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Por Qué AutoFlow Es Diferente?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nuestro background en desarrollo de software nos permite crear 
              automatizaciones que otros consultores simplemente no pueden resolver.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Stack Híbrido</h3>
              <p className="text-gray-600">
                n8n + Make.com + desarrollo custom. Lo mejor de cada mundo 
                según las necesidades de tu proyecto.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">APIs Custom</h3>
              <p className="text-gray-600">
                Cuando tu herramienta no tiene integración disponible, 
                creamos la conexión desde cero. Sin límites.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lógica Compleja</h3>
              <p className="text-gray-600">
                Procesos con múltiples condiciones, transformaciones de datos 
                y flujos que requieren programación real.
              </p>
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
                Proyectos Que Otros Consultores Rechazan
              </h2>
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 font-bold">✗</span>
                  "Tu ERP legacy no tiene API moderna"
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 font-bold">✗</span>
                  "Necesitas lógica muy específica que n8n no puede hacer"
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 font-bold">✗</span>
                  "Requiere desarrollo custom además de automatización"
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 font-bold">✗</span>
                  "Es demasiado complejo para herramientas no-code"
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-600 mb-6">
                Nosotros Lo Resolvemos
              </h3>
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 font-bold">✓</span>
                  Creamos APIs custom para sistemas legacy
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 font-bold">✓</span>
                  Desarrollamos funciones específicas cuando es necesario
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 font-bold">✓</span>
                  Combinamos no-code + código según la complejidad
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 font-bold">✓</span>
                  Soluciones técnicas sin límites de plataforma
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
              Servicios Adaptados a Tu Complejidad
            </h2>
            <p className="text-xl text-gray-600">
              Desde automatizaciones estándar hasta arquitecturas técnicas complejas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="text-center mb-6">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Automatización Estándar
                </h3>
                <p className="text-gray-600">
                  Workflows típicos con herramientas probadas
                </p>
              </div>
              
              <div className="mb-6">
                <p className="text-2xl font-bold text-blue-600 mb-2">€2,500 - €5,000</p>
                <p className="text-sm text-gray-500">Timeline: 2-3 semanas</p>
              </div>

              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Email marketing automation
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  CRM integrations básicas
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Lead scoring automático
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Reportes automáticos
                </li>
              </ul>

              <Link 
                href="/contact"
                className="w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors block"
              >
                Más Información
              </Link>
            </div>

            <div className="bg-white border-2 border-blue-500 rounded-lg p-8 hover:shadow-lg transition-shadow relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  MÁS POPULAR
                </span>
              </div>
              
              <div className="text-center mb-6">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔧</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Automatización Avanzada
                </h3>
                <p className="text-gray-600">
                  Incluye desarrollo custom cuando se necesita
                </p>
              </div>
              
              <div className="mb-6">
                <p className="text-2xl font-bold text-blue-600 mb-2">€5,000 - €12,000</p>
                <p className="text-sm text-gray-500">Timeline: 3-6 semanas</p>
              </div>

              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Todo lo del plan Estándar
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  APIs custom desarrolladas
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Lógica de negocio compleja
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Integraciones múltiples sistemas
                </li>
              </ul>

              <Link 
                href="/contact"
                className="w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors block"
              >
                Más Información
              </Link>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="text-center mb-6">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏗️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Arquitectura Completa
                </h3>
                <p className="text-gray-600">
                  Para sistemas complejos y requisitos específicos
                </p>
              </div>
              
              <div className="mb-6">
                <p className="text-2xl font-bold text-blue-600 mb-2">€12,000+</p>
                <p className="text-sm text-gray-500">Timeline: 6-12 semanas</p>
              </div>

              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Todo lo del plan Avanzado
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Plataforma automation completa
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Multiple APIs + workflows
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Mantenimiento incluido 6 meses
                </li>
              </ul>

              <Link 
                href="/contact"
                className="w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors block"
              >
                Más Información
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/services"
              className="bg-gray-100 text-gray-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-200 transition-colors inline-block"
            >
              Ver Todos los Servicios Detallados
            </Link>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section id="calculator" className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Calcula el ROI de automatizar tu negocio
            </h2>
            <p className="text-xl text-gray-600">
              Descubre cuánto puedes ahorrar automatizando procesos manuales
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Datos de tu negocio:
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Emails que procesas manualmente por mes:
                    </label>
                    <input
                      type="number"
                      value={calculatorValues.emails}
                      onChange={(e) => setCalculatorValues({...calculatorValues, emails: e.target.value})}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Horas por cada 100 emails:
                    </label>
                    <input
                      type="number"
                      step="0.5"
                      value={calculatorValues.hoursManual}
                      onChange={(e) => setCalculatorValues({...calculatorValues, hoursManual: e.target.value})}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Coste por hora (€):
                    </label>
                    <input
                      type="number"
                      value={calculatorValues.costPerHour}
                      onChange={(e) => setCalculatorValues({...calculatorValues, costPerHour: e.target.value})}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Tu ROI potencial:
                </h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-white rounded">
                    <span className="text-gray-700">Ahorro mensual:</span>
                    <span className="text-2xl font-bold text-green-600">
                      €{monthlyROI().toLocaleString()}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-white rounded">
                    <span className="text-gray-700">Ahorro anual:</span>
                    <span className="text-2xl font-bold text-green-600">
                      €{(monthlyROI() * 12).toLocaleString()}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-blue-100 rounded">
                    <span className="text-gray-700">ROI sobre €3,500:</span>
                    <span className="text-2xl font-bold text-blue-600">
                      {monthlyROI() > 0 ? Math.round((monthlyROI() * 12) / 3500 * 100) : 0}%
                    </span>
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
              Por Qué Confían en Nuestro Enfoque Técnico
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <p className="text-gray-600">Años desarrollando software empresarial</p>
            </div>
            
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">400+</div>
              <p className="text-gray-600">Integraciones disponibles + APIs custom</p>
            </div>
            
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <p className="text-gray-600">Proyectos entregados (sin límites técnicos)</p>
            </div>
          </div>

          <div className="mt-12 bg-gray-50 p-8 rounded-lg">
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                ¿Tienes un proyecto que otros consultores han rechazado?
              </h3>
              <p className="text-gray-600 mb-6">
                Si requiere desarrollo custom, APIs específicas, o lógica compleja... 
                es exactamente lo que sabemos hacer mejor.
              </p>
              <Link 
                href="/contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
              >
                Cuéntanos tu proyecto
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿Listo para automatizar sin limitaciones técnicas?
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

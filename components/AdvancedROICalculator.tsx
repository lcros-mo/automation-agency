// components/AdvancedROICalculator.tsx
'use client';

import { useState } from 'react';

interface CalculatorData {
  sector: string;
  [key: string]: string | number;
}

const sectorConfigs = {
  ecommerce: {
    title: 'E-commerce & Retail Online',
    icon: '🛒',
    color: 'blue',
    fields: [
      { key: 'monthlyOrders', label: 'Pedidos por mes', placeholder: '500', suffix: ' pedidos' },
      { key: 'avgTicket', label: 'Ticket promedio', placeholder: '85', prefix: '€' },
      { key: 'cartAbandonmentRate', label: 'Tasa abandono carrito actual', placeholder: '74', suffix: '%' },
      { key: 'customerServiceHours', label: 'Horas customer service/semana', placeholder: '25', suffix: ' horas' },
      { key: 'inventoryErrors', label: 'Errores de stock por mes', placeholder: '12', suffix: ' errores' }
    ],
    calculations: {
      cartRecovery: (data: any) => {
        const orders = parseInt(data.monthlyOrders) || 0;
        const ticket = parseInt(data.avgTicket) || 0;
        const abandonmentRate = parseInt(data.cartAbandonmentRate) || 0;
        // Automatizar follow-up de carritos abandonados puede recuperar 10-15% según estudios 2024
        return Math.round((orders * (abandonmentRate / 100) * ticket * 0.12)); // 12% recovery promedio
      },
      customerServiceAutomation: (data: any) => {
        const hours = parseInt(data.customerServiceHours) || 0;
        // Automatizar respuestas FAQ y tickets nivel 1 ahorra 60% tiempo según HubSpot 2024
        return Math.round(hours * 4 * 25 * 0.6); // €25/hora, 60% automatizable
      },
      inventoryOptimization: (data: any) => {
        const errors = parseInt(data.inventoryErrors) || 0;
        const ticket = parseInt(data.avgTicket) || 0;
        // Cada error de stock causa pérdida promedio 2.3 ventas (Salesforce 2024)
        return Math.round(errors * 2.3 * ticket);
      }
    },
    insights: [
      'Tasa abandono carrito promedio 2025: 75.38% (aumentó 1.26% vs 2024)',
      'Automatizar follow-up carritos puede recuperar 10-15% ventas perdidas',
      'Respuesta <5min vs >24h aumenta conversión 391% (Velocify 2024)',
      'Errores inventario cuestan promedio €4.6 trillones globalmente/año'
    ]
  },
  
  realestate: {
    title: 'Inmobiliarias & Real Estate',
    icon: '🏠',
    color: 'green',
    fields: [
      { key: 'monthlyLeads', label: 'Leads por mes', placeholder: '180', suffix: ' leads' },
      { key: 'avgCommission', label: 'Comisión promedio', placeholder: '4200', prefix: '€' },
      { key: 'responseTimeHours', label: 'Tiempo respuesta actual', placeholder: '6', suffix: ' horas' },
      { key: 'followUpRate', label: 'Leads con seguimiento estructurado', placeholder: '25', suffix: '%' },
      { key: 'adminHours', label: 'Horas admin/semana', placeholder: '18', suffix: ' horas' }
    ],
    calculations: {
      fasterResponse: (data: any) => {
        const leads = parseInt(data.monthlyLeads) || 0;
        const commission = parseInt(data.avgCommission) || 0;
        const responseTime = parseInt(data.responseTimeHours) || 0;
        // Responder en 5min vs 30min = 9x más conversión (Lead Response 2024)
        const currentConversion = responseTime > 5 ? 0.015 : 0.025; // 1.5% vs 2.5%
        const improvedConversion = 0.04; // 4% con automatización
        return Math.round(leads * (improvedConversion - currentConversion) * commission);
      },
      betterFollowUp: (data: any) => {
        const leads = parseInt(data.monthlyLeads) || 0;
        const commission = parseInt(data.avgCommission) || 0;
        const followUpRate = parseInt(data.followUpRate) || 0;
        // 80% leads inmobiliarios nunca reciben seguimiento (NAR 2024)
        const missedLeads = leads * (80 - followUpRate) / 100;
        return Math.round(missedLeads * 0.035 * commission); // 3.5% conversión con seguimiento
      },
      adminAutomation: (data: any) => {
        const adminHours = parseInt(data.adminHours) || 0;
        // Agentes pierden 21% tiempo en admin (RIS Media 2024)
        return Math.round(adminHours * 4 * 30 * 0.7); // €30/hora, 70% automatizable
      }
    },
    insights: [
      'Conversión promedio sector inmobiliario: 0.5-1.2% (NAR 2024)',
      '71% compradores solo hablan con 1 agente, 81% vendedores con el primero',
      'Responder en 5min vs 30min = 9x más probabilidad conversión',
      '80% leads inmobiliarios nunca reciben seguimiento estructurado'
    ]
  },

  marketing: {
    title: 'Agencias de Marketing',
    icon: '📊',
    color: 'purple',
    fields: [
      { key: 'monthlyClients', label: 'Clientes activos', placeholder: '28', suffix: ' clientes' },
      { key: 'avgRetainer', label: 'Retainer promedio', placeholder: '2800', prefix: '€' },
      { key: 'reportingHours', label: 'Horas reporting/semana', placeholder: '15', suffix: ' horas' },
      { key: 'campaignSetupHours', label: 'Horas setup campaña', placeholder: '6', suffix: ' horas' },
      { key: 'clientChurnRate', label: 'Churn rate mensual', placeholder: '8', suffix: '%' }
    ],
    calculations: {
      reportingAutomation: (data: any) => {
        const reportingHours = parseInt(data.reportingHours) || 0;
        // 73% marketers gastan +5h/semana en reportes (HubSpot 2024)
        return Math.round(reportingHours * 4 * 55 * 0.8); // €55/hora, 80% automatizable
      },
      campaignEfficiency: (data: any) => {
        const setupHours = parseInt(data.campaignSetupHours) || 0;
        const clients = parseInt(data.monthlyClients) || 0;
        // Automatización permite 60% ahorro tiempo setup (Adobe 2024)
        return Math.round(setupHours * clients * 0.6 * 55);
      },
      churnReduction: (data: any) => {
        const clients = parseInt(data.monthlyClients) || 0;
        const retainer = parseInt(data.avgRetainer) || 0;
        const churnRate = parseInt(data.clientChurnRate) || 0;
        // Mejor reporting/comunicación reduce churn 25% (MarketingCharts 2024)
        const churnReduction = Math.round(clients * churnRate / 100 * 0.25);
        return churnReduction * retainer * 6; // Valor 6 meses retenidos
      }
    },
    insights: [
      '76% agencias usan automatización marketing, 91% aumentó demanda',
      '73% marketers gastan +5 horas/semana en reportes manuales',
      'Automatización mejora targeting 60.4% según marketers (Liana 2024)',
      'Emails automatizados: +84% open rate, +341% click rate vs manuales'
    ]
  },

  consulting: {
    title: 'Consultorías & Servicios B2B',
    icon: '💼',
    color: 'orange',
    fields: [
      { key: 'monthlyProposals', label: 'Propuestas por mes', placeholder: '12', suffix: ' propuestas' },
      { key: 'avgProjectValue', label: 'Valor proyecto promedio', placeholder: '12500', prefix: '€' },
      { key: 'proposalHours', label: 'Horas por propuesta', placeholder: '8', suffix: ' horas' },
      { key: 'salesCycleMonths', label: 'Ciclo ventas promedio', placeholder: '4', suffix: ' meses' },
      { key: 'adminTasksHours', label: 'Horas admin/semana', placeholder: '12', suffix: ' horas' }
    ],
    calculations: {
      proposalAutomation: (data: any) => {
        const proposals = parseInt(data.monthlyProposals) || 0;
        const hours = parseInt(data.proposalHours) || 0;
        // Templates + automatización ahorra 70% tiempo propuestas
        return Math.round(proposals * hours * 0.7 * 85); // €85/hora consultor
      },
      fasterSalesCycle: (data: any) => {
        const proposals = parseInt(data.monthlyProposals) || 0;
        const projectValue = parseInt(data.avgProjectValue) || 0;
        const cycleMonths = parseInt(data.salesCycleMonths) || 0;
        // Automatización reduce ciclo ventas B2B 23% (Marketo 2024)
        const monthsReduced = cycleMonths * 0.23;
        const additionalDeals = proposals * (monthsReduced / 12); // Deals extra por aceleración
        return Math.round(additionalDeals * projectValue * 0.25); // 25% tasa conversión
      },
      adminOptimization: (data: any) => {
        const adminHours = parseInt(data.adminTasksHours) || 0;
        // 75% tareas admin B2B son automatizables (McKinsey 2024)
        return Math.round(adminHours * 4 * 85 * 0.75);
      }
    },
    insights: [
      'Ciclo ventas B2B 2024: 25% más largo que hace 5 años (promedio 11.5 meses)',
      'Solo 35% empresas B2B tienen estrategia lead nurturing establecida',
      '44% vendedores B2B abandonan después primer follow-up',
      'Automatización puede acelerar ciclo ventas 23% (leads nurturizados)'
    ]
  }
};

export default function AdvancedROICalculator() {
  const [selectedSector, setSelectedSector] = useState<string>('');
  const [calculatorData, setCalculatorData] = useState<CalculatorData>({
    sector: ''
  });

  const currentConfig = selectedSector ? sectorConfigs[selectedSector as keyof typeof sectorConfigs] : null;

  const calculateTotalROI = () => {
    if (!currentConfig) return 0;
    
    const calculations = currentConfig.calculations;
    const total = Object.values(calculations).reduce((sum, calcFn) => {
      return sum + calcFn(calculatorData);
    }, 0);
    
    return total;
  };

  const calculateBreakdown = () => {
    if (!currentConfig) return [];
    
    const calculations = currentConfig.calculations;
    return Object.entries(calculations).map(([key, calcFn]) => ({
      name: key,
      value: calcFn(calculatorData)
    }));
  };

  const handleInputChange = (key: string, value: string) => {
    setCalculatorData(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-600 border-blue-500 text-blue-600',
      green: 'bg-green-600 border-green-500 text-green-600',
      purple: 'bg-purple-600 border-purple-500 text-purple-600',
      orange: 'bg-orange-600 border-orange-500 text-orange-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Sector Selection */}
      {!selectedSector && (
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Calculadora ROI por Sector
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Datos actualizados 2024-2025. Selecciona tu sector para ver métricas reales y ahorros específicos.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(sectorConfigs).map(([key, config]) => (
              <button
                key={key}
                onClick={() => setSelectedSector(key)}
                className="p-6 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-lg transition-all duration-200 group"
              >
                <div className="text-4xl mb-3">{config.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                  {config.title}
                </h3>
              </button>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              📊 Datos basados en estudios 2024-2025: Baymard Institute, HubSpot, NAR, Salesforce, McKinsey
            </p>
          </div>
        </div>
      )}

      {/* Calculator */}
      {selectedSector && currentConfig && (
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center">
            <button
              onClick={() => setSelectedSector('')}
              className="text-blue-600 hover:text-blue-800 mb-4 inline-flex items-center"
            >
              ← Cambiar sector
            </button>
            <div className="flex items-center justify-center mb-4">
              <span className="text-4xl mr-3">{currentConfig.icon}</span>
              <h2 className="text-3xl font-bold text-gray-900">
                {currentConfig.title}
              </h2>
            </div>
            <p className="text-gray-600">Datos actualizados con estadísticas 2024-2025</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Input Form */}
            <div className="lg:col-span-2 bg-white border border-gray-200 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Datos de tu negocio
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {currentConfig.fields.map((field) => (
                  <div key={field.key}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {field.label}
                    </label>
                    <div className="relative">
                      {field.prefix && (
                        <span className="absolute left-3 top-3 text-gray-500">
                          {field.prefix}
                        </span>
                      )}
                      <input
                        type="number"
                        value={calculatorData[field.key] || ''}
                        onChange={(e) => handleInputChange(field.key, e.target.value)}
                        className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${field.prefix ? 'pl-8' : ''}`}
                        placeholder={field.placeholder}
                      />
                      {field.suffix && (
                        <span className="absolute right-3 top-3 text-gray-500 text-sm">
                          {field.suffix}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Results */}
            <div className={`bg-gradient-to-br from-${currentConfig.color}-600 to-${currentConfig.color}-800 text-white p-6 rounded-lg shadow-lg`}>
              <h3 className="text-2xl font-bold mb-6">Ahorro Potencial Mensual</h3>
              
              <div className="space-y-4">
                <div className="text-center">
                  <p className="text-sm opacity-90">Total ahorro mensual</p>
                  <p className="text-4xl font-bold">
                    €{calculateTotalROI().toLocaleString()}
                  </p>
                </div>

                {/* Breakdown */}
                {calculateTotalROI() > 0 && (
                  <div className="space-y-2 text-sm">
                    {calculateBreakdown().map((item, index) => (
                      <div key={index} className="flex justify-between opacity-90">
                        <span className="capitalize">{item.name.replace(/([A-Z])/g, ' $1')}</span>
                        <span>€{item.value.toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                )}
                
                <div className="text-center border-t border-white border-opacity-30 pt-4">
                  <p className="text-sm opacity-90">Ahorro anual</p>
                  <p className="text-2xl font-semibold">
                    €{(calculateTotalROI() * 12).toLocaleString()}
                  </p>
                </div>
                
                <div className="border-t border-white border-opacity-30 pt-4">
                  <p className="text-sm opacity-90 mb-2">Inversión típica automatización</p>
                  <p className="text-lg">€2,500 - €5,000</p>
                  
                  {calculateTotalROI() > 0 && (
                    <div className="mt-3">
                      <p className="text-sm opacity-90">ROI primer año</p>
                      <p className="text-xl font-bold">
                        {Math.round((calculateTotalROI() * 12) / 3750 * 100)}%
                      </p>
                      <p className="text-xs opacity-75 mt-1">
                        Recuperación: {Math.round(3750 / calculateTotalROI())} meses
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Updated Insights */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              📊 Estadísticas Sector {currentConfig.title} (2024-2025)
            </h3>
            <ul className="space-y-2">
              {currentConfig.insights.map((insight, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">•</span>
                  <span className="text-gray-700 text-sm">{insight}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 text-xs text-gray-500">
              <p><strong>Fuentes:</strong> Baymard Institute 2025, HubSpot State of Marketing 2024, NAR, Salesforce, McKinsey, Adobe Marketing Automation Report 2024</p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-white border border-gray-200 rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Quieres implementar estas automatizaciones?
            </h3>
            <p className="text-gray-600 mb-6">
              Consulta gratuita de 30 minutos para analizar tu caso específico y validar estos números
            </p>
            <button className={`px-8 py-4 ${getColorClasses(currentConfig.color).split(' ')[0]} text-white rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity`}>
              Reservar Consulta Gratuita
            </button>
            <p className="text-sm text-gray-500 mt-3">
              ✅ Sin compromiso ✅ ROI garantizado ✅ Resultados en 2-4 semanas
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
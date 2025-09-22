// components/VisualConfigurator.tsx
'use client';

import { useState } from 'react';

interface Tool {
  id: string;
  name: string;
  icon: string;
  category: string;
}

interface AutomationStep {
  id: string;
  tool: string;
  action: string;
  description: string;
}

const tools: Tool[] = [
  { id: 'gmail', name: 'Gmail', icon: '📧', category: 'Email' },
  { id: 'hubspot', name: 'HubSpot', icon: '🎯', category: 'CRM' },
  { id: 'shopify', name: 'Shopify', icon: '🛒', category: 'E-commerce' },
  { id: 'slack', name: 'Slack', icon: '💬', category: 'Communication' },
  { id: 'typeform', name: 'Typeform', icon: '📋', category: 'Forms' },
  { id: 'mailchimp', name: 'Mailchimp', icon: '📨', category: 'Email Marketing' },
  { id: 'stripe', name: 'Stripe', icon: '💳', category: 'Payment' },
  { id: 'zapier', name: 'Zapier', icon: '⚡', category: 'Automation' }
];

const painPoints = [
  {
    id: 'lost-leads',
    title: 'Leads se pierden sin seguimiento',
    description: 'Los leads entran pero no hay proceso automático de nurturing',
    icon: '😤'
  },
  {
    id: 'manual-orders',
    title: 'Procesar pedidos manualmente',
    description: 'Cada pedido requiere intervención manual y propenso a errores',
    icon: '📦'
  },
  {
    id: 'slow-support',
    title: 'Customer service lento',
    description: 'Consultas tardan horas en responderse',
    icon: '🐌'
  },
  {
    id: 'manual-reports',
    title: 'Reportes manuales que nadie lee',
    description: 'Horas perdidas creando reportes poco útiles',
    icon: '📊'
  }
];

const automationTemplates = {
  'lost-leads': {
    tools: ['typeform', 'hubspot', 'mailchimp'],
    steps: [
      { id: '1', tool: 'typeform', action: 'Nuevo lead', description: 'Form completado' },
      { id: '2', tool: 'hubspot', action: 'Auto-tag', description: 'Clasificar por origen' },
      { id: '3', tool: 'mailchimp', action: 'Email sequence', description: 'Follow-up automático' }
    ],
    metrics: { timeSaved: '12h/semana', roi: '€2,400/mes', efficiency: '+45%' }
  },
  'manual-orders': {
    tools: ['shopify', 'slack', 'hubspot'],
    steps: [
      { id: '1', tool: 'shopify', action: 'Nuevo pedido', description: 'Order received' },
      { id: '2', tool: 'slack', action: 'Notificación', description: 'Alert al equipo' },
      { id: '3', tool: 'hubspot', action: 'Update customer', description: 'Histórico actualizado' }
    ],
    metrics: { timeSaved: '18h/semana', roi: '€3,200/mes', efficiency: '+60%' }
  },
  'slow-support': {
    tools: ['gmail', 'slack', 'hubspot'],
    steps: [
      { id: '1', tool: 'gmail', action: 'Nuevo email', description: 'Consulta recibida' },
      { id: '2', tool: 'slack', action: 'Auto-assign', description: 'Asignar a agente' },
      { id: '3', tool: 'hubspot', action: 'Track response', description: 'Monitor tiempos' }
    ],
    metrics: { timeSaved: '8h/semana', roi: '€1,800/mes', efficiency: '+70%' }
  },
  'manual-reports': {
    tools: ['hubspot', 'slack', 'gmail'],
    steps: [
      { id: '1', tool: 'hubspot', action: 'Collect data', description: 'Obtener métricas' },
      { id: '2', tool: 'slack', action: 'Generate report', description: 'Crear reporte automático' },
      { id: '3', tool: 'gmail', action: 'Send weekly', description: 'Envío programado' }
    ],
    metrics: { timeSaved: '6h/semana', roi: '€1,200/mes', efficiency: '+85%' }
  }
};

export default function VisualConfigurator() {
  const [step, setStep] = useState(1);
  const [selectedTools, setSelectedTools] = useState<string[]>([]);
  const [selectedPain, setSelectedPain] = useState<string>('');
  const [showResult, setShowResult] = useState(false);

  const currentAutomation = selectedPain ? automationTemplates[selectedPain as keyof typeof automationTemplates] : null;

  const handleToolSelect = (toolId: string) => {
    setSelectedTools(prev => 
      prev.includes(toolId) 
        ? prev.filter(id => id !== toolId)
        : [...prev, toolId]
    );
  };

  const handlePainSelect = (painId: string) => {
    setSelectedPain(painId);
    setStep(3);
  };

  const generateAutomation = () => {
    setShowResult(true);
  };

  const resetConfigurator = () => {
    setStep(1);
    setSelectedTools([]);
    setSelectedPain('');
    setShowResult(false);
  };

  if (showResult && currentAutomation) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            🎯 Tu Automatización Personalizada
          </h2>
          <button 
            onClick={resetConfigurator}
            className="text-blue-600 hover:text-blue-800"
          >
            ← Configurar otra automatización
          </button>
        </div>

        {/* Workflow Visual */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-8 mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Flujo de Automatización
          </h3>
          
          <div className="flex items-center justify-between mb-8">
            {currentAutomation.steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                    <span className="text-2xl">
                      {tools.find(t => t.id === step.tool)?.icon}
                    </span>
                  </div>
                  <h4 className="font-semibold text-sm text-gray-900">
                    {step.action}
                  </h4>
                  <p className="text-xs text-gray-600">
                    {step.description}
                  </p>
                </div>
                
                {index < currentAutomation.steps.length - 1 && (
                  <div className="flex-1 mx-4">
                    <div className="h-0.5 bg-blue-300 relative">
                      <div className="absolute right-0 top-0 w-0 h-0 border-l-4 border-l-blue-300 border-t-2 border-b-2 border-t-transparent border-b-transparent transform -translate-y-1/2"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Metrics */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-green-50 p-6 rounded-lg text-center">
            <h4 className="text-lg font-semibold text-green-800 mb-2">
              Tiempo Ahorrado
            </h4>
            <p className="text-3xl font-bold text-green-600">
              {currentAutomation.metrics.timeSaved}
            </p>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <h4 className="text-lg font-semibold text-blue-800 mb-2">
              ROI Estimado
            </h4>
            <p className="text-3xl font-bold text-blue-600">
              {currentAutomation.metrics.roi}
            </p>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-lg text-center">
            <h4 className="text-lg font-semibold text-purple-800 mb-2">
              Eficiencia
            </h4>
            <p className="text-3xl font-bold text-purple-600">
              {currentAutomation.metrics.efficiency}
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">
            ¿Quieres implementar esta automatización?
          </h3>
          <p className="text-blue-100 mb-6">
            Consulta gratuita para analizar tu caso específico y crear el plan de implementación
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
            Solicitar Consulta Gratuita
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Configurador de Automatizaciones
        </h2>
        <p className="text-xl text-gray-600">
          Descubre qué automatizaciones necesita tu negocio en 2 minutos
        </p>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-600">Paso {step} de 3</span>
          <span className="text-sm text-gray-600">{Math.round((step/3)*100)}% completado</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(step/3)*100}%` }}
          ></div>
        </div>
      </div>

      {/* Step 1: Tools Selection */}
      {step === 1 && (
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            ¿Qué herramientas usas actualmente?
          </h3>
          <p className="text-gray-600 mb-6">
            Selecciona todas las herramientas que tu negocio usa día a día
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {tools.map((tool) => (
              <button
                key={tool.id}
                onClick={() => handleToolSelect(tool.id)}
                className={`p-4 border-2 rounded-lg text-center transition-all ${
                  selectedTools.includes(tool.id)
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="text-2xl mb-2">{tool.icon}</div>
                <div className="font-semibold text-sm">{tool.name}</div>
                <div className="text-xs text-gray-500">{tool.category}</div>
              </button>
            ))}
          </div>
          
          <button
            onClick={() => setStep(2)}
            disabled={selectedTools.length === 0}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Siguiente: Identificar Problema
          </button>
        </div>
      )}

      {/* Step 2: Pain Points */}
      {step === 2 && (
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            ¿Cuál es tu mayor dolor de cabeza?
          </h3>
          <p className="text-gray-600 mb-6">
            Selecciona el problema que más tiempo te quita cada día
          </p>
          
          <div className="space-y-4">
            {painPoints.map((pain) => (
              <button
                key={pain.id}
                onClick={() => handlePainSelect(pain.id)}
                className="w-full p-6 border-2 border-gray-200 rounded-lg text-left hover:border-blue-500 hover:bg-blue-50 transition-all"
              >
                <div className="flex items-start">
                  <span className="text-2xl mr-4">{pain.icon}</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {pain.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {pain.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 3: Review */}
      {step === 3 && currentAutomation && (
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Resumen de tu Configuración
          </h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Herramientas seleccionadas:</h4>
              <div className="flex flex-wrap gap-2">
                {selectedTools.map(toolId => {
                  const tool = tools.find(t => t.id === toolId);
                  return (
                    <span key={toolId} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {tool?.icon} {tool?.name}
                    </span>
                  );
                })}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Problema a resolver:</h4>
              <p className="text-gray-600">
                {painPoints.find(p => p.id === selectedPain)?.title}
              </p>
            </div>
          </div>
          
          <button
            onClick={generateAutomation}
            className="w-full bg-green-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors mt-8"
          >
            🚀 Generar Mi Automatización
          </button>
        </div>
      )}
    </div>
  );
}
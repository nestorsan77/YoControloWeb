'use client';

import React, { useState } from 'react';
import { Check, Star, Zap, Building2, Shield, Users, Crown, Sparkles } from 'lucide-react';

interface Plan {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  precioAnual: number;
  popular: boolean;
  icono: React.ReactNode;
  caracteristicas: string[];
  limite: string;
  badge?: string;
}

const planes: Plan[] = [
  {
    id: 1,
    nombre: 'Básico',
    descripcion: 'Perfecto para empezar tu gestión financiera personal',
    precio: 0,
    precioAnual: 0,
    popular: false,
    icono: <Shield className="w-8 h-8" />,
    limite: 'reportes ilimitados',
    caracteristicas: [
      'Registro de gastos básicos',
      'Categorización automática',
      'Reportes mensuales',
      'Soporte por email',
      'Sincronización en la nube'
    ]
  },
  {
    id: 2,
    nombre: 'Premium',
    descripcion: 'La opción más popular para usuarios avanzados',
    precio: 1.99,
    precioAnual: 19.10,
    popular: true,
    icono: <Star className="w-8 h-8" />,
    limite: 'reportes ilimitados',
    badge: 'Más Popular',
    caracteristicas: [
      'Todo lo del plan Básico',
      'Presupuestos inteligentes',
      'Análisis avanzados',
      'Exportación a Excel/PDF',
      'Alertas personalizadas',
      'Sin publicidad',
      'Soporte prioritario'
    ]
  },
  {
    id: 3,
    nombre: 'Business',
    descripcion: 'Solución completa para empresas y equipos',
    precio: 99.99,
    precioAnual: 959.90,
    popular: false,
    icono: <Building2 className="w-8 h-8" />,
    limite: 'Multi-usuario (hasta 10)',
    badge: 'Empresas',
    caracteristicas: [
      'Todo lo del plan Premium',
      'Gestión de equipos',
      'Integraciones con APIs',
      'Dashboard ejecutivo',
      'Reportes personalizados',
      'Consultor asignado',
      'SLA garantizado'
    ]
  }
];

const PricingPlans: React.FC = () => {
  const [isAnual, setIsAnual] = useState(false);

  const togglePrecio = () => {
    setIsAnual(!isAnual);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-8 px-4 transition-all duration-500">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Crown className="w-8 h-8 text-yellow-500" />
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Elige tu Plan
            </h1>
          </div>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Encuentra el plan perfecto para tus necesidades financieras. 
            <span className="hidden sm:inline"> Sin compromisos, cancela cuando quieras.</span>
          </p>

          {/* Toggle Anual/Mensual */}
          <div className="flex items-center justify-center gap-4 bg-white dark:bg-gray-800 rounded-full p-2 max-w-sm mx-auto shadow-lg">
            <span className={`text-sm font-medium transition-colors ${!isAnual ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500'}`}>
              Mensual
            </span>
            <button
              onClick={togglePrecio}
              className={`relative w-14 h-7 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                isAnual ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'
              }`}
            >
              <div className={`absolute w-5 h-5 bg-white rounded-full transition-transform duration-200 top-1 ${
                isAnual ? 'translate-x-8' : 'translate-x-1'
              }`} />
            </button>
            <span className={`text-sm font-medium transition-colors ${isAnual ? 'text-green-600 dark:text-green-400' : 'text-gray-500'}`}>
              Anual
            </span>
            {isAnual && (
              <div className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-2 py-1 rounded-full text-xs font-semibold">
                Ahorra 20%
              </div>
            )}
          </div>
        </div>

        {/* Planes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {planes.map((plan) => {
            const precio = isAnual ? plan.precioAnual : plan.precio;
            const precioMostrar = isAnual ? precio / 12 : precio;
            
            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  plan.popular
                    ? 'bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/50 dark:to-indigo-900/50 border-2 border-blue-500 shadow-xl scale-105 md:scale-110'
                    : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg'
                }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className={`absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-1 rounded-full text-xs font-bold text-white z-10 ${
                    plan.popular ? 'bg-blue-500' : 'bg-gray-600'
                  }`}>
                    {plan.badge}
                  </div>
                )}

                <div className="p-6 md:p-8 pt-18 md:pt-10 mt-10">
                  {/* Header del Plan */}
                  <div className="text-center mb-6">
                    <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                      plan.popular 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                    }`}>
                      {plan.icono}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {plan.nombre}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      {plan.descripcion}
                    </p>
                    
                    {/* Precio */}
                    <div className="mb-2">
                      <span className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                        ${precioMostrar.toFixed(2)}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400 text-base">
                        {precio === 0 ? '/mes' : isAnual ? '/mes facturado anualmente' : '/mes'}
                      </span>
                    </div>
                    
                    {isAnual && precio > 0 && (
                      <div className="text-sm text-green-600 dark:text-green-400 font-medium">
                        Ahorra ${((plan.precio * 12) - plan.precioAnual).toFixed(2)} al año
                      </div>
                    )}
                    
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                      {plan.limite}
                    </div>
                  </div>

                  {/* Características */}
                  <ul className="space-y-3 mb-8">
                    {plan.caracteristicas.map((caracteristica, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          {caracteristica}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                      plan.popular
                        ? 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500 shadow-lg'
                        : 'bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 focus:ring-gray-500'
                    }`}
                  >
                    {precio === 0 ? 'Comenzar Gratis' : 'Proximamente'}
                    {plan.popular && <Sparkles className="inline w-4 h-4 ml-2" />}
                  </button>
                  
                  {precio > 0 && (
                    <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-3">
                      Prueba gratuita de 14 días
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Info */}
        <div className="text-center mt-12 space-y-4">
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>Pagos seguros</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>Soporte 24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              <span>Cancelación instantánea</span>
            </div>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Todos los planes incluyen encriptación de grado bancario y cumplimiento GDPR. 
            Los precios no incluyen impuestos aplicables según tu ubicación.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
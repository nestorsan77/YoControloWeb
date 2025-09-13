'use client';

import React, { useState } from 'react';
import { 
  Calculator, TrendingUp, Shield, EyeOff, 
  CheckCircle, Target, BarChart3,
  Zap, Heart
} from 'lucide-react';

const GestionFinanzasPersonales = () => {
  const [] = useState('gastos');

  const features = [
    {
      icon: Calculator,
      title: "Control de Gastos Diarios",
      description: "Registra y categoriza todos tus gastos en efectivo, tarjeta y transferencias sin conexión bancaria.",
      benefits: ["Sin acceso a cuentas", "Categorización automática", "Historial completo"]
    },
    {
      icon: TrendingUp,
      title: "Seguimiento de Ingresos",
      description: "Controla tus ingresos de todas las fuentes: nómina, freelance, ventas y ingresos extra.",
      benefits: ["Múltiples fuentes", "Análisis mensual", "Proyecciones futuras"]
    },
    {
      icon: Target,
      title: "Objetivos de Ahorro",
      description: "Establece metas financieras realistas y sigue tu progreso con análisis personalizados.",
      benefits: ["Metas personalizadas", "Seguimiento visual", "Consejos inteligentes"]
    },
    {
      icon: BarChart3,
      title: "Reportes Detallados",
      description: "Genera informes completos sobre tu situación financiera con gráficos claros y comprensibles.",
      benefits: ["Gráficos interactivos", "Exportación PDF", "Análisis tendencias"]
    }
  ];

  const useCases = [
    {
      title: "Para Profesionales Independientes",
      description: "Controla ingresos variables, gastos deducibles y proyecta tu flujo de caja mensual.",
      icon: "💼",
      stats: "89% mejora en control financiero"
    },
    {
      title: "Para Estudiantes",
      description: "Gestiona tu presupuesto limitado, controla gastos universitarios y ahorra para objetivos.",
      icon: "🎓",
      stats: "Ahorro promedio: €150/mes"
    },
    {
      title: "Para Familias",
      description: "Organiza gastos domésticos, planifica compras importantes y enseña educación financiera.",
      icon: "👨‍👩‍👧‍👦",
      stats: "Reduce gastos innecesarios 40%"
    },
    {
      title: "Para Comerciantes",
      description: "Separa finanzas personales del negocio, controla efectivo y mantén privacidad total.",
      icon: "🏪",
      stats: "Control 100% privado"
    }
  ];

  const comparisons = [
    {
      feature: "Privacidad de datos financieros",
      yocontrolo: "100% - Datos en tu dispositivo",
      others: "Acceden a todas tus cuentas",
      advantage: true
    },
    {
      feature: "Control de dinero en efectivo",
      yocontrolo: "Especializado en efectivo y transferencias",
      others: "Solo movimientos bancarios",
      advantage: true
    },
    {
      feature: "Configuración inicial",
      yocontrolo: "30 segundos - Sin conexiones",
      others: "Hasta 1 hora - Verificaciones bancarias",
      advantage: true
    },
    {
      feature: "Costo mensual",
      yocontrolo: "Gratis - Plan premium €1.99",
      others: "Desde €15-30/mes",
      advantage: true
    },
    {
      feature: "Funciona sin internet",
      yocontrolo: "Sí - PWA completamente offline",
      others: "Requiere conexión constante",
      advantage: true
    }
  ];

  const steps = [
    {
      number: "1",
      title: "Descarga e Instala",
      description: "Accede desde cualquier navegador, instala como PWA en 1 clic. No necesitas tiendas de apps.",
      time: "30 segundos"
    },
    {
      number: "2", 
      title: "Configura Categorías",
      description: "Personaliza categorías de gastos e ingresos según tu estilo de vida y necesidades.",
      time: "2 minutos"
    },
    {
      number: "3",
      title: "Registra Movimientos",
      description: "Añade gastos e ingresos de forma manual y privada. Tú controlas qué registrar.",
      time: "1 minuto diario"
    },
    {
      number: "4",
      title: "Analiza y Mejora",
      description: "Revisa reportes semanales, identifica patrones y optimiza tu gestión financiera.",
      time: "5 minutos semanales"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
      
      {/* Hero SEO Optimizado */}
      <section className="pt-24 pb-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
              Gestión de <span className="text-blue-600 dark:text-blue-400">Finanzas Personales</span> sin Espías
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              <strong>Controla tus gastos e ingresos</strong> con la app de finanzas más privada de España. 
              <strong> Sin conexiones bancarias</strong>, <strong>sin rastreo</strong>, <strong>sin preguntas</strong>. 
              Tu dinero, tu privacidad, tu control total.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg">
                Probar Gratis Ahora →
              </button>
              <button className="px-8 py-4 bg-white dark:bg-gray-800 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 rounded-xl font-bold text-lg transition-all">
                Ver Demo en Vivo
              </button>
            </div>
            
            {/* Trust Signals */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">1,250+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Usuarios Beta</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-green-600 dark:text-green-400">100%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Datos Privados</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-yellow-500">4.8★</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Valoración</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-purple-600 dark:text-purple-400">0€</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Plan Básico</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Características Principales */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              ¿Por qué elegir YoControlo para tus Finanzas?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              La única aplicación de gestión financiera que pone tu privacidad primero sin sacrificar funcionalidad
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Casos de Uso */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Gestión Financiera para cada Estilo de Vida
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Sea cual sea tu situación, YoControlo se adapta a tus necesidades específicas de control financiero
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-2xl p-6 text-center hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{useCase.description}</p>
                <div className="inline-flex items-center px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm font-medium">
                  {useCase.stats}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo Funciona */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Comienza a Controlar tus Finanzas en 4 Pasos
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Sin configuraciones complejas, sin verificaciones bancarias, sin esperas. Empieza en menos de 5 minutos.
            </p>
          </div>
          
          <div className="relative">
            {/* Línea conectora */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-blue-500 to-purple-500 mt-5"></div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative text-center">
                  <div className="relative z-10 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">{step.description}</p>
                  <div className="inline-flex items-center px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-sm font-medium">
                    ⏱️ {step.time}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparación Competencia */}
      <section className="py-20 px-4 bg-blue-50 dark:bg-blue-900/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              YoControlo vs. Aplicaciones Bancarias Tradicionales
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Descubre por qué miles de usuarios eligen privacidad y control real sobre espionaje financiero
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-6 py-4 text-left text-lg font-bold text-gray-900 dark:text-white">Característica</th>
                    <th className="px-6 py-4 text-center text-lg font-bold text-blue-600 dark:text-blue-400">YoControlo</th>
                    <th className="px-6 py-4 text-center text-lg font-bold text-gray-600 dark:text-gray-400">Apps Bancarias</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                  {comparisons.map((comparison, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-25 dark:bg-gray-750'}>
                      <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{comparison.feature}</td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span className="text-green-700 dark:text-green-400 font-medium">{comparison.yocontrolo}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                            <div className="w-3 h-0.5 bg-red-500"></div>
                          </div>
                          <span className="text-red-600 dark:text-red-400">{comparison.others}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SEO */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Preguntas Frecuentes sobre Gestión de Finanzas Privadas
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Resuelve todas tus dudas sobre control financiero sin espías digitales
            </p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                q: "¿Es mejor controlar las finanzas manualmente que con apps bancarias?",
                a: "Sí, el control manual te da privacidad total y te hace más consciente de tus gastos. Los estudios muestran que quienes registran gastos manualmente ahorran 25% más que quienes usan solo apps automáticas."
              },
              {
                q: "¿Cómo puedo gestionar dinero en efectivo sin que mi banco lo sepa?",
                a: "YoControlo está diseñado específicamente para esto. Registras tus movimientos en efectivo de forma privada, sin conexiones bancarias. Perfecto para freelancers, comerciantes y quienes valoran su privacidad financiera."
              },
              {
                q: "¿Qué ventajas tiene no conectar con el banco para gestión financiera?",
                a: "Total privacidad, sin rastreo de gastos, control real de qué registrar, funciona offline, no depende de APIs bancarias, y nadie puede analizar tus patrones de consumo para venderte productos."
              },
              {
                q: "¿Es seguro almacenar datos financieros en el dispositivo?",
                a: "Más seguro que en servidores externos. Tus datos están cifrados con AES-256 en tu dispositivo, solo tú tienes las claves, y no hay riesgo de filtraciones masivas de datos como en apps tradicionales."
              },
              {
                q: "¿Cuánto tiempo necesito diariamente para controlar mis finanzas?",
                a: "Solo 1-2 minutos al día para registrar gastos. La revisión semanal lleva 5 minutos. Es una inversión mínima para control financiero total y privacidad garantizada."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{faq.q}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Comienza tu Gestión Financiera Privada Hoy
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Únete a más de 1,250 usuarios que ya controlan sus finanzas sin espías. 
            Tu privacidad financiera está a un clic de distancia.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="px-10 py-5 bg-white text-blue-600 rounded-xl font-bold text-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl">
              🚀 Empezar Gratis Ahora
            </button>
            <button className="px-10 py-5 bg-white/20 hover:bg-white/30 text-white rounded-xl font-bold text-xl transition-all">
              📱 Descargar PWA
            </button>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 text-blue-100">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span>100% Privado</span>
            </div>
            <div className="flex items-center gap-2">
              <EyeOff className="w-5 h-5" />
              <span>Sin Espías</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5" />
              <span>Listo en 30s</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5" />
              <span>Gratis para Siempre</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GestionFinanzasPersonales;
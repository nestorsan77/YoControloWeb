'use client';

import CTAButton from '@/app/components/CTAButtons';
import { 
  Star, Zap, Shield, 
  Target, Wallet, Users, 
  CheckCircle, Clock, EyeOff, UserX
} from 'lucide-react';
import React, { useState } from 'react';
import AppPreview from '@/app/components/AppPreview';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "¿Por qué YoControlo no se conecta con mi banco?",
      answer: "Nuestra filosofía es la privacidad total. No necesitamos acceder a tus cuentas bancarias porque TÚ tienes el control. Registras manualmente solo lo que quieres, cuando quieres, sin que nadie más sepa en qué gastas tu dinero."
    },
    {
      question: "¿Cómo protege YoControlo mi privacidad financiera?",
      answer: "Todos tus datos se almacenan localmente en tu dispositivo y se cifran con tu clave personal. Ni nosotros ni los bancos pueden ver tus movimientos. Es tu dinero, tu privacidad, tu control."
    },
    {
      question: "¿Funciona para controlar dinero en efectivo?",
      answer: "¡Exactamente! YoControlo está diseñado especialmente para registrar gastos en efectivo, transferencias, bizums y cualquier movimiento que quieras controlar sin dejar rastro digital."
    },
    {
      question: "¿Qué pasa si pierdo mi teléfono?",
      answer: "Tus datos están protegidos con PIN/biometría local. Además, puedes hacer copias de seguridad cifradas en la nube que solo tú puedes descifrar con tu clave maestra."
    },
    {
      question: "¿Es realmente gratis y sin publicidad?",
      answer: "El plan básico es 100% gratuito sin publicidad ni venta de datos. Los planes premium financian el desarrollo sin comprometer tu privacidad jamás."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Preguntas Frecuentes
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Todo sobre privacidad financiera y control personal del dinero
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
              <button
                className="w-full text-left p-6 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                    {faq.question}
                  </h3>
                  <div className={`transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonios para credibilidad SEO
const Testimonials = () => {
  const testimonials = [
    {
      name: "Ana P.",
      role: "Profesional Independiente",
      content: "Por fin una app que no espía mis gastos. Controlo mi dinero en efectivo y mis ahorros sin que nadie sepa dónde gasto cada euro. ¡Libertad financiera real!",
      rating: 5,
      avatar: "🕵️‍♀️"
    },
    {
      name: "Carlos M.",
      role: "Comerciante",
      content: "Manejo mucho efectivo en mi negocio y necesitaba privacidad total. YoControlo me permite llevar las cuentas sin dejar rastro digital. Perfecto.",
      rating: 5,
      avatar: "🏪"
    },
    {
      name: "María L.",
      role: "Ahorradora Privada",
      content: "No quiero que mi banco sepa cada movimiento que hago. Con YoControlo gestiono mis ahorros y gastos manteniendo mi privacidad al 100%.",
      rating: 5,
      avatar: "🔐"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Usuarios que Valoran su Privacidad
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Descubre por qué eligen controlar sus finanzas sin espías digitales
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {testimonial.content}
              </p>
              <div className="flex items-center">
                <div className="text-3xl mr-4">{testimonial.avatar}</div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-500 dark:text-gray-400 text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Beneficios detallados para SEO
const Benefits = () => {
  const benefits = [
    {
      icon: EyeOff,
      title: "Privacidad Total Garantizada",
      description: "Tus datos financieros nunca salen de tu dispositivo. Ni bancos, ni gobiernos, ni empresas pueden ver en qué gastas tu dinero.",
      stats: "0% de datos compartidos"
    },
    {
      icon: Wallet,
      title: "Control Real de Efectivo",
      description: "Registra gastos en efectivo, bizums, transferencias y cualquier movimiento sin conexiones bancarias. Tu dinero, tus reglas.",
      stats: "100% control manual"
    },
    {
      icon: Shield,
      title: "Sin Rastros Digitales",
      description: "No dejamos huellas en sistemas bancarios. Controla tus finanzas de forma completamente anónima y segura.",
      stats: "Cifrado local AES-256"
    },
    {
      icon: Target,
      title: "Libertad Financiera Real",
      description: "Ahorra y gasta sin explicaciones a nadie. Establece objetivos privados y alcánzalos sin supervisión externa.",
      stats: "Tu dinero, tu decisión"
    }
  ];

  return (
    <section className="py-20 px-4 bg-blue-50 dark:bg-blue-900/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Recupera el Control de tu Dinero
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            YoControlo te devuelve la privacidad financiera que mereces. Sin espías, sin preguntas, sin control externo.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/50 rounded-2xl flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {benefit.description}
                </p>
                <div className="inline-flex items-center px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-sm font-medium">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  {benefit.stats}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Comparación con la competencia
const Comparison = () => {
  const features = [
    { feature: "Sin acceso a cuentas bancarias", us: true, others: false },
    { feature: "Datos almacenados localmente", us: true, others: false },
    { feature: "Control de dinero en efectivo", us: true, others: false },
    { feature: "Sin rastreo de gastos", us: true, others: false },
    { feature: "Funciona completamente offline", us: true, others: false },
    { feature: "Sin venta de datos personales", us: true, others: false },
    { feature: "Anonimato total garantizado", us: true, others: false }
  ];

  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            ¿Por qué YoControlo es Diferente?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Mientras otras apps te espían, nosotros protegemos tu privacidad
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
          <div className="grid grid-cols-3 bg-gray-50 dark:bg-gray-700 p-6">
            <div className="font-bold text-gray-900 dark:text-white">Características</div>
            <div className="text-center font-bold text-blue-600 dark:text-blue-400">YoControlo</div>
            <div className="text-center font-bold text-gray-500 dark:text-gray-400">Apps Bancarias</div>
          </div>
          
          {features.map((item, index) => (
            <div key={index} className={`grid grid-cols-3 p-4 border-b border-gray-100 dark:border-gray-700 ${
              index % 2 === 0 ? 'bg-gray-25 dark:bg-gray-800/50' : 'bg-white dark:bg-gray-800'
            }`}>
              <div className="text-gray-700 dark:text-gray-300 text-sm md:text-base">{item.feature}</div>
              <div className="text-center">
                {item.us ? (
                  <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                ) : (
                  <div className="w-6 h-6 mx-auto rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                    <div className="w-3 h-0.5 bg-red-500"></div>
                  </div>
                )}
              </div>
              <div className="text-center">
                {item.others ? (
                  <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                ) : (
                  <div className="w-6 h-6 mx-auto rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                    <div className="w-3 h-0.5 bg-red-500"></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Stats para credibilidad
const Stats = () => {
  const stats = [
    { number: "1,250+", label: "Usuarios Beta", icon: Users },
    { number: "100%", label: "Datos Privados", icon: EyeOff },
    { number: "4.8/5", label: "Valoración Beta", icon: Star },
    { number: "0%", label: "Datos Compartidos", icon: UserX }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            La Revolución de la Privacidad Financiera
          </h2>
          <p className="text-blue-100 text-lg">
            Números reales de nuestra fase beta con usuarios que valoran su privacidad
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-blue-100 text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const features = [
  { 
    icon: EyeOff, 
    title: 'Privacidad Total', 
    description: 'Tus datos nunca salen de tu dispositivo. Sin conexiones bancarias, sin espías digitales.' 
  },
  { 
    icon: Wallet, 
    title: 'Control de Efectivo', 
    description: 'Registra gastos en efectivo, bizums y transferencias de forma completamente privada.' 
  },
  { 
    icon: Shield, 
    title: 'Cifrado Local', 
    description: 'Toda tu información se cifra localmente con AES-256. Ni nosotros podemos verla.' 
  },
  { 
    icon: Zap, 
    title: 'Funciona Offline', 
    description: 'No necesita internet para funcionar. Tu dinero, tu control, sin dependencias.' 
  },
];

interface FeatureCardProps {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => (
  <div className="group p-8 rounded-2xl transition-all duration-300 hover:scale-105 dark:bg-gray-800/50 bg-gray-50 hover:shadow-xl dark:hover:shadow-blue-900/20">
    <div className="mb-6">
      <Icon className="w-12 h-12 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300" />
    </div>
    <h3 className="text-xl font-semibold mb-4 dark:text-white text-gray-900">{title}</h3>
    <p className="dark:text-gray-300 text-gray-600 leading-relaxed">{description}</p>
  </div>
);

export default function LayoutClient() {
  const screenshots = ['/images/dinero.png'];
  
  return (
    <main>
      {/* Hero mejorado con enfoque en privacidad */}
      <section className="pt-24 pb-20 px-4 relative overflow-hidden bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            <span className="text-gray-900 dark:text-white">Tu Dinero, </span>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Tu Privacidad
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-700 dark:text-gray-300">
            La única app que <strong className="text-gray-900 dark:text-white">controla tu efectivo</strong> sin 
            <strong className="text-gray-900 dark:text-white"> conexiones bancarias</strong>. 
            Gestiona tus <strong className="text-gray-900 dark:text-white">finanzas privadas</strong> sin que 
            nadie sepa en qué gastas. <strong className="text-gray-900 dark:text-white">¡Libertad financiera real!</strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <CTAButton text="Prueba Gratis Ahora" href="https://app.yocontrolo.net/" variant="primary" />
            <CTAButton text="Ver Cómo Funciona" href="/gestion-finanzas-personales" variant="secondary" />
          </div>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 mt-12 text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <EyeOff className="w-5 h-5" />
              <span className="text-sm">Sin Espías</span>
            </div>
            <div className="flex items-center gap-2">
              <Wallet className="w-5 h-5" />
              <span className="text-sm">Control Efectivo</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span className="text-sm">Cifrado Local</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span className="text-sm">Listo en 30 segundos</span>
            </div>
          </div>
        </div>
        
        {/* Elementos decorativos */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200/30 dark:bg-blue-600/10 rounded-full blur-3xl"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-200/30 dark:bg-purple-600/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      <AppPreview screenshots={screenshots} />
      <Stats />
      <Benefits />

      {/* Features mejoradas */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800/30">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white text-gray-900">
            Características que Protegen tu Privacidad
          </h2>
          <p className="text-xl dark:text-gray-300 text-gray-600 max-w-3xl mx-auto">
            Tecnología diseñada para mantener tus finanzas completamente privadas y bajo tu control
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => <FeatureCard key={i} {...f} />)}
        </div>
      </section>

      <Comparison />
      <Testimonials />
      <FAQ />

      {/* CTA Final */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Listo para Recuperar tu Privacidad?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Únete a la revolución de usuarios que controlan su dinero sin espías digitales. 
            Tu privacidad financiera te está esperando.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton text="Empezar Ahora Gratis" href="https://app.yocontrolo.net/" variant="primary" />
            <button className="px-8 py-4 bg-white/20 hover:bg-white/30 text-white rounded-xl font-semibold transition-all">
              <a href="/gestion-finanzas-personales">Conocer Más Detalles</a>
            </button>
          </div>
          <p className="text-blue-200 text-sm mt-6">
            Sin registro de datos • Sin conexiones bancarias • Privacidad garantizada
          </p>
        </div>
      </section>
    </main>
  );
}
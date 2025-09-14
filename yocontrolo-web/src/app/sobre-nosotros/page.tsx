'use client';

import React from 'react';
import { 
  Shield, EyeOff, Heart, Users, 
  Target, Lightbulb, Code, Lock,
  CheckCircle, Globe, Zap, UserX
} from 'lucide-react';

const SobreNosotros = () => {
  const values = [
    {
      icon: EyeOff,
      title: "Privacidad Primero",
      description: "Creemos que tus datos financieros son tuyos y solo tuyos. Nunca los veremos, nunca los venderemos, nunca los compartiremos.",
      principle: "Tu dinero, tu privacidad, tu decisión"
    },
    {
      icon: Shield,
      title: "Tecnología al Servicio del Usuario",
      description: "Desarrollamos cada línea de código pensando en protegerte, no en espiarte. La tecnología debe servir a las personas.",
      principle: "Código abierto y transparente"
    },
    {
      icon: Heart,
      title: "Finanzas sin Estrés",
      description: "Gestionar dinero no debería ser complicado ni invasivo. Creamos herramientas simples para una vida financiera tranquila.",
      principle: "Simplicidad y control personal"
    },
    {
      icon: Users,
      title: "Comunidad de Libertad",
      description: "Construimos una comunidad de personas que valoran su autonomía financiera y rechazan la vigilancia digital.",
      principle: "Unidos por la libertad financiera"
    }
  ];

  const team = [
    {
      name: "Equipo de Privacidad",
      role: "Desarrolladores Anónimos",
      description: "Un equipo de desarrolladores que, como tú, valora la privacidad. Trabajamos desde la sombra para proteger tu libertad financiera.",
      avatar: "🥷",
      motto: "\"Código que libera, no que esclaviza\""
    },
    {
      name: "Comunidad Beta",
      role: "1,250+ Usuarios Pioneros",
      description: "Nuestros usuarios beta son nuestros verdaderos jefes. Ellos definen el rumbo de YoControlo con sus necesidades reales de privacidad.",
      avatar: "👥",
      motto: "\"Tu feedback es nuestro norte\""
    },
    {
      name: "Filosofía Opensource",
      role: "Transparencia Total",
      description: "Creemos en el código abierto. Si proteges la privacidad, debes ser transparente sobre cómo lo haces.",
      avatar: "🔓",
      motto: "\"Transparencia en el código, privacidad en los datos\""
    }
  ];

  const timeline = [
    {
      year: "2023",
      title: "Nace la Idea",
      description: "Un grupo de desarrolladores se cansa de apps que espían. Decidimos crear algo diferente.",
      icon: Lightbulb
    },
    {
      year: "2024",
      title: "Primeros Prototipos",
      description: "Desarrollo del primer prototipo totalmente privado. Sin servidores, sin rastreo, sin compromisos.",
      icon: Code
    },
    {
      year: "2024",
      title: "Beta Privada",
      description: "1,250+ usuarios comprometidos con la privacidad prueban y mejoran YoControlo.",
      icon: Users
    },
    {
      year: "2025",
      title: "Lanzamiento Público",
      description: "YoControlo está disponible para todos los que valoran su privacidad financiera.",
      icon: Globe
    }
  ];

  const mission = [
    {
      title: "Nuestra Misión",
      content: "Devolver el control financiero a las personas. En un mundo donde cada transacción es vigilada, ofrecemos una alternativa: gestión de finanzas completamente privada.",
      icon: Target,
      highlight: "Privacidad financiera para todos"
    },
    {
      title: "Nuestra Visión",
      content: "Un futuro donde gestionar tu dinero no requiera sacrificar tu privacidad. Donde tú decides qué compartir y con quién.",
      icon: EyeOff,
      highlight: "Libertad financiera digital"
    },
    {
      title: "Nuestros Principios",
      content: "Código abierto, datos locales, cifrado fuerte, y una promesa inquebrantable: nunca veremos tu información financiera.",
      icon: Lock,
      highlight: "Promesa de privacidad eterna"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
            Somos <span className="text-blue-600 dark:text-blue-400">YoControlo</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Un equipo de desarrolladores <strong>obsesionados con tu privacidad</strong>. 
            Creamos <strong>tecnología que te libera</strong>, no que te controla. 
            Tu dinero es tuyo, y <strong>tus datos también</strong>.
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>1,250+ usuarios beta</span>
            </div>
            <div className="flex items-center gap-2">
              <EyeOff className="w-5 h-5" />
              <span>0% datos compartidos</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5" />
              <span>100% enfoque usuario</span>
            </div>
            <div className="flex items-center gap-2">
              <Code className="w-5 h-5" />
              <span>Código abierto</span>
            </div>
          </div>
        </div>
      </section>

      {/* Misión, Visión y Principios */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              ¿Por qué Existimos?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              En un mundo donde cada clic es rastreado, defendemos tu derecho a la privacidad financiera
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {mission.map((item, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{item.content}</p>
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm font-medium">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  {item.highlight}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Nuestros Valores Inquebrantables
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Estos principios guían cada decisión que tomamos. No son solo palabras, son compromisos.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {values.map((value, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{value.description}</p>
                  <div className="text-blue-600 dark:text-blue-400 font-medium italic">
                    {value.principle}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nuestro Equipo */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Conoce al Equipo (sin Comprometer la Privacidad)
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Practicamos lo que predicamos. Incluso nosotros valoramos el anonimato y la privacidad personal.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 text-center hover:shadow-lg transition-all">
                <div className="text-6xl mb-4">{member.avatar}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{member.name}</h3>
                <div className="text-blue-600 dark:text-blue-400 font-medium mb-4">{member.role}</div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{member.description}</p>
                <div className="text-gray-500 dark:text-gray-400 italic text-sm">{member.motto}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 bg-blue-50 dark:bg-blue-900/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Nuestra Historia de Privacidad
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Desde la frustración hasta la solución: cómo nació YoControlo
            </p>
          </div>
          
          <div className="relative">
            {/* Línea temporal */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-800"></div>
            
            <div className="space-y-12">
              {timeline.map((event, index) => (
                <div key={index} className="relative flex items-start gap-8">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg relative z-10">
                    <event.icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">{event.year}</span>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{event.title}</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compromiso de Transparencia */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-12">
            <Lock className="w-16 h-16 text-blue-600 dark:text-blue-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Nuestro Compromiso Inquebrantable
            </h2>
            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                <strong className="text-gray-900 dark:text-white">Nunca veremos tus datos financieros.</strong> 
                Tu información se queda en tu dispositivo, cifrada con tu clave personal.
              </p>
              <p>
                <strong className="text-gray-900 dark:text-white">Nunca venderemos tu información.</strong> 
                No tenemos acceso a ella, así que es físicamente imposible.
              </p>
              <p>
                <strong className="text-gray-900 dark:text-white">Nunca cambiaremos estos principios.</strong> 
                Están grabados en el código mismo de YoControlo.
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full">
                <CheckCircle className="w-4 h-4" />
                <span className="font-medium">Datos locales</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full">
                <CheckCircle className="w-4 h-4" />
                <span className="font-medium">Cifrado AES-256</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full">
                <CheckCircle className="w-4 h-4" />
                <span className="font-medium">Código abierto</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-full">
                <UserX className="w-4 h-4" />
                <span className="font-medium">Sin rastreo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Compartes Nuestra Visión?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Si crees que la privacidad financiera es un derecho, no un privilegio, únete a nuestra comunidad. 
            Construyamos juntos el futuro de las finanzas privadas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="px-10 py-5 bg-white text-blue-600 rounded-xl font-bold text-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl">
              <a href="https://app.yocontrolo.net">
              🚀 Prueba YoControlo Gratis
              </a>
            </button>
            <button className="px-10 py-5 bg-white/20 hover:bg-white/30 text-white rounded-xl font-bold text-xl transition-all">
              <a href="/gestion-finanzas-personales">
              📖 Conoce Más sobre Privacidad
              </a>
            </button>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 text-blue-100">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span>Filosofía Open Source</span>
            </div>
            <div className="flex items-center gap-2">
              <EyeOff className="w-5 h-5" />
              <span>Privacidad por Diseño</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5" />
              <span>Hecho con ❤️ para la comunidad</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SobreNosotros;
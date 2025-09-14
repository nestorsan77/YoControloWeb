'use client';

import React, { useState } from 'react';
import { 
  Shield, EyeOff, Heart, Users, 
  Mail, MessageCircle, Bug, Lightbulb,
  CheckCircle, Clock, Lock, AlertCircle,
  Github, Twitter, Send, Phone, MapPin,
  Zap, HelpCircle, Star, Code
} from 'lucide-react';

const ContactoAppFinanzasPrivadas = () => {
  const [formData, setFormData] = useState({
    tipo: '',
    email: '',
    asunto: '',
    mensaje: '',
    privacidad: false
  });
  
  const [submitted, setSubmitted] = useState(false);

  const metodosContactoSeguros = [
    {
      icon: Mail,
      title: "Email Cifrado para Consultas Financieras",
      description: "Contacta de forma segura sobre gestión de finanzas personales sin espías",
      contact: "hola@yocontrolo.net",
      time: "Respuesta garantizada en 24-48 horas",
      privacy: "Comunicación cifrada end-to-end disponible",
      primary: true,
      keywords: "email privado finanzas, contacto seguro app dinero"
    },
    {
      icon: MessageCircle,
      title: "Soporte Técnico App Control Gastos",
      description: "Ayuda especializada con problemas técnicos en control de gastos personales",
      contact: "soporte@yocontrolo.net",
      time: "Soporte prioritario en 12-24 horas",
      privacy: "Sin recopilación de datos bancarios personales",
      keywords: "soporte app finanzas, ayuda control gastos"
    },
    {
      icon: Github,
      title: "GitHub Issues Gestión Finanzas Opensource",
      description: "Reporta bugs o solicita nuevas características para la app de finanzas",
      contact: "github.com/yocontrolo/issues",
      time: "Comunidad activa de desarrolladores financieros",
      privacy: "Repositorio público y transparente",
      keywords: "github app finanzas, código abierto gestión dinero"
    },
    {
      icon: Users,
      title: "Comunidad Beta Finanzas Privadas",
      description: "Únete a usuarios pioneros que prueban nuevas funciones financieras",
      contact: "beta@yocontrolo.net",
      time: "Invitación a programa beta en 48 horas",
      privacy: "Solo email requerido, sin datos financieros",
      keywords: "beta finanzas app, comunidad usuarios privacidad"
    }
  ];

  const faqContactoFinanzas = [
    {
      question: "¿Recopiláis datos bancarios cuando contacto por soporte financiero?",
      answer: "Nunca solicitamos ni almacenamos datos bancarios. Solo guardamos tu email temporalmente para responderte sobre la app de gestión financiera. Una vez resuelto tu consulta sobre control de gastos, eliminamos toda información personal.",
      icon: EyeOff,
      keywords: "datos bancarios seguros, privacidad financiera contacto"
    },
    {
      question: "¿Podéis acceder a mis datos de control de gastos durante el soporte?",
      answer: "Imposible técnicamente. Tus datos de gestión financiera están cifrados localmente en tu dispositivo. Ni nosotros ni terceros pueden acceder a tu información de gastos e ingresos. El soporte se basa únicamente en tu descripción del problema.",
      icon: Lock,
      keywords: "seguridad datos financieros, cifrado local gastos"
    },
    {
      question: "¿Cuánto tiempo tardáis en resolver problemas de la app de finanzas?",
      answer: "Bugs críticos en gestión financiera: 12-24 horas. Consultas sobre control de gastos: 24-48 horas. Nuevas funciones de ahorro: evaluación en 1 semana. Somos un equipo especializado en privacidad financiera comprometido con respuestas de calidad.",
      icon: Clock,
      keywords: "tiempo respuesta soporte finanzas, resolución bugs app dinero"
    },
    {
      question: "¿Ofrecéis soporte telefónico para consultas sobre gestión de dinero?",
      answer: "No ofrecemos soporte telefónico para mantener tu privacidad financiera completa. Toda comunicación sobre control de gastos es por email cifrado, evitando grabaciones y rastreos de conversaciones sobre tu situación económica.",
      icon: Phone,
      keywords: "contacto privado finanzas, comunicación segura app dinero"
    },
    {
      question: "¿Cómo garantizáis la privacidad al contactar sobre temas financieros?",
      answer: "Usamos cifrado de extremo a extremo para todas las comunicaciones. No compartimos información con terceros. No analizamos patrones de consultas. Tu privacidad financiera es absoluta incluso en el proceso de soporte técnico.",
      icon: Shield,
      keywords: "privacidad absoluta finanzas, comunicación cifrada dinero"
    }
  ];

  const tiposConsultaFinanciera = [
    {
      value: "bug",
      label: "Reportar Error en Control de Gastos",
      description: "Problemas técnicos con registro de gastos o cálculos financieros",
      keywords: "bug app finanzas, error control gastos"
    },
    {
      value: "feature",
      label: "Solicitar Nueva Función Financiera",
      description: "Ideas para mejorar gestión de dinero y control de presupuesto",
      keywords: "nueva función app dinero, mejoras gestión financiera"
    },
    {
      value: "privacidad",
      label: "Consulta Seguridad Datos Financieros",
      description: "Preguntas sobre protección de información bancaria y privacidad",
      keywords: "seguridad datos bancarios, privacidad información financiera"
    },
    {
      value: "general",
      label: "Consulta General Gestión Finanzas",
      description: "Otras preguntas sobre uso de la app de control financiero",
      keywords: "ayuda app finanzas, consulta gestión dinero"
    },
    {
      value: "prensa",
      label: "Medios - App Finanzas Privadas",
      description: "Consultas de periodistas sobre aplicaciones de gestión financiera",
      keywords: "prensa app finanzas, medios gestión dinero privada"
    },
    {
      value: "colaboracion",
      label: "Colaboración Fintech Privacidad",
      description: "Propuestas de partnership en el sector de finanzas privadas",
      keywords: "colaboración fintech, partnership app finanzas"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
      
      {/* Hero Section Optimizado SEO */}
      <section className="pt-24 pb-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
            Contacto App de <span className="text-blue-600 dark:text-blue-400">Finanzas Privadas</span> YoControlo
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            <strong>Soporte técnico especializado</strong> en aplicaciones de <strong>gestión financiera privada</strong>. 
            Contacta sobre <strong>control de gastos personales</strong>, <strong>privacidad de datos bancarios</strong> y 
            <strong>gestión de dinero sin espías</strong>. Comunicación completamente <strong>cifrada y segura</strong>.
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600 dark:text-gray-400 mb-8">
            <div className="flex items-center gap-2">
              <Lock className="w-5 h-5" />
              <span>Comunicación cifrada finanzas</span>
            </div>
            <div className="flex items-center gap-2">
              <EyeOff className="w-5 h-5" />
              <span>Sin rastreo datos bancarios</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>Respuesta garantizada 24-48h</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span>Soporte sin acceso cuentas</span>
            </div>
          </div>
          
          {/* Schema.org structured data simulation */}
          <div className="hidden" itemScope itemType="https://schema.org/ContactPage">
            <span itemProp="name">Contacto YoControlo - App Gestión Finanzas Privadas</span>
            <span itemProp="description">Soporte técnico especializado para aplicación de control de gastos personales y gestión financiera privada</span>
            <div itemProp="contactPoint" itemScope itemType="https://schema.org/ContactPoint">
              <span itemProp="telephone">Email: hola@yocontrolo.net</span>
              <span itemProp="contactType">Soporte técnico finanzas</span>
            </div>
          </div>
        </div>
      </section>

      {/* Métodos de Contacto Especializados SEO */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Contactar Soporte App de Gestión Financiera Privada
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Múltiples canales de <strong>comunicación segura</strong> para resolver consultas sobre 
              <strong>control de gastos</strong>, <strong>privacidad de datos bancarios</strong> y 
              <strong>gestión de finanzas personales</strong> sin comprometer tu información financiera.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metodosContactoSeguros.map((method, index) => (
              <div key={index} className={`bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 ${
                method.primary ? 'ring-2 ring-blue-500 dark:ring-blue-400' : ''
              }`}>
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <method.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 text-center">{method.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-center">{method.description}</p>
                <div className="text-center mb-4">
                  <div className="text-blue-600 dark:text-blue-400 font-medium break-all">{method.contact}</div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span>{method.time}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-green-600 dark:text-green-400">
                    <Shield className="w-4 h-4" />
                    <span>{method.privacy}</span>
                  </div>
                </div>
                {method.primary && (
                  <div className="mt-4 text-center">
                    <span className="inline-flex items-center px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm font-medium">
                      <Star className="w-4 h-4 mr-1" />
                      Canal Recomendado Finanzas
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulario de Contacto Especializado Finanzas */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Formulario Contacto Seguro - Consultas Financieras Privadas
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Envía consultas sobre <strong>gestión de gastos personales</strong>, <strong>control de presupuesto</strong> y 
              <strong>privacidad financiera</strong>. Formulario con <strong>cifrado extremo a extremo</strong> que protege 
              completamente tu información personal y económica.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8">
            {!submitted ? (
              <div className="space-y-6">
                {/* Tipo de consulta financiera */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Selecciona el tipo de consulta sobre gestión financiera privada
                  </label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {tiposConsultaFinanciera.map((type) => (
                      <label key={type.value} className="flex items-center p-4 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 cursor-pointer transition-colors">
                        <input
                          type="radio"
                          name="tipo"
                          value={type.value}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <div className={`flex-1 ${formData.tipo === type.value ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'}`}>
                          <div className="font-medium">{type.label}</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">{type.description}</div>
                        </div>
                        {formData.tipo === type.value && (
                          <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        )}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Email para respuesta */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email para recibir respuesta sobre consulta financiera
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder="tu-email-privado@ejemplo.com"
                    required
                  />
                  <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                    Solo usado para responder sobre tu consulta de gestión financiera. Se elimina tras resolver el tema.
                  </p>
                </div>

                {/* Asunto específico finanzas */}
                <div>
                  <label htmlFor="asunto" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Asunto de tu consulta sobre gestión de finanzas privadas
                  </label>
                  <input
                    type="text"
                    id="asunto"
                    name="asunto"
                    value={formData.asunto}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder="Ej: Error al categorizar gastos, Consulta sobre privacidad datos bancarios"
                    required
                  />
                </div>

                {/* Mensaje detallado */}
                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Describe tu consulta sobre control de gastos o privacidad financiera
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-none"
                    placeholder="Explica tu consulta sobre gestión financiera, problema con la app de control de gastos, o pregunta sobre privacidad de datos bancarios. Cuanto más específico seas sobre tu situación financiera, mejor podremos ayudarte sin comprometer tu privacidad."
                    required
                  />
                </div>

                {/* Checkbox privacidad financiera */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="privacidad"
                    name="privacidad"
                    checked={formData.privacidad}
                    onChange={handleInputChange}
                    className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 dark:border-gray-600 rounded"
                    required
                  />
                  <label htmlFor="privacidad" className="text-sm text-gray-600 dark:text-gray-300">
                    Acepto que YoControlo procese temporalmente mi email y consulta sobre gestión financiera únicamente para 
                    proporcionar soporte técnico especializado. Entiendo que mis datos se eliminan completamente tras resolver 
                    mi consulta sobre control de gastos personales. No se realizará seguimiento ni análisis de mis patrones financieros.
                  </label>
                </div>

                {/* Submit button con keywords SEO */}
                <div className="text-center">
                  <button
                    onClick={handleSubmit}
                    className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg inline-flex items-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Enviar Consulta Financiera Segura
                  </button>
                  <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
                    Comunicación cifrada • Privacidad garantizada • Respuesta especializada 24-48h
                  </p>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Consulta Financiera Enviada de Forma Totalmente Segura
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Hemos recibido tu consulta sobre gestión de finanzas privadas y te responderemos con 
                  soporte especializado en las próximas 24-48 horas. Tu información financiera está 
                  completamente protegida y será eliminada tras resolver tu consulta.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-all"
                >
                  Enviar Nueva Consulta Financiera
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Especializada SEO Finanzas */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Preguntas Frecuentes: Contacto y Privacidad Financiera
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Resolvemos dudas sobre <strong>comunicación segura</strong> con soporte de 
              <strong>aplicaciones de gestión financiera</strong> y <strong>protección de datos bancarios</strong> 
              durante el proceso de atención al cliente.
            </p>
          </div>
          
          <div className="space-y-6">
            {faqContactoFinanzas.map((faq, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <faq.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{faq.question}</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Información Especializada Fintech */}
      <section className="py-20 px-4 bg-blue-50 dark:bg-blue-900/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Recursos Adicionales App Gestión Financiera Privada
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Canales especializados para diferentes consultas sobre finanzas y privacidad
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Transparencia Código Finanzas */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 text-center">
              <Code className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Código Abierto Gestión Financiera
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Revisa el código fuente de nuestra aplicación de finanzas privadas. 
                Transparencia total en algoritmos de control de gastos y cifrado de datos.
              </p>
              <div className="text-blue-600 dark:text-blue-400 font-medium">
                github.com/yocontrolo
              </div>
            </div>

            {/* Comunidad Finanzas Privadas */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 text-center">
              <Users className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Comunidad Beta Finanzas Personales
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Únete a 1,250+ usuarios que prueban nuevas funciones de gestión de dinero privada 
                y mejoran la aplicación de control de gastos personales.
              </p>
              <div className="text-blue-600 dark:text-blue-400 font-medium">
                beta@yocontrolo.net
              </div>
            </div>

            {/* Emergencias Seguridad Financiera */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 text-center md:col-span-2 lg:col-span-1">
              <AlertCircle className="w-12 h-12 text-orange-500 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Vulnerabilidades Críticas Seguridad
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Canal prioritario para reportar vulnerabilidades de seguridad que afecten 
                la privacidad de datos financieros de usuarios.
              </p>
              <div className="text-orange-500 font-medium">
                seguridad@yocontrolo.net
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final Optimizado SEO */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contacta Soporte Especializado en Finanzas Privadas
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            <strong>Equipo experto en privacidad financiera</strong> listo para resolver consultas sobre 
            <strong>gestión de gastos personales</strong>, <strong>control de presupuesto familiar</strong> y 
            <strong>protección de datos bancarios</strong>. Comunicación completamente segura garantizada.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="px-10 py-5 bg-white text-blue-600 rounded-xl font-bold text-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl">
              <a href="mailto:hola@yocontrolo.net">
              Enviar Email Consulta Financiera
              </a>
            </button>
            <button className="px-10 py-5 bg-white/20 hover:bg-white/30 text-white rounded-xl font-bold text-xl transition-all">
              <a href="https://app.yocontrolo.net">
              Probar App Gestión Finanzas
              </a>
            </button>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 text-blue-100">
            <div className="flex items-center gap-2">
              <Lock className="w-5 h-5" />
              <span>Comunicación Cifrada Finanzas</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>Respuesta Especializada 24h</span>
            </div>
            <div className="flex items-center gap-2">
              <EyeOff className="w-5 h-5" />
              <span>Sin Acceso Datos Bancarios</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5" />
              <span>Soporte Personalizado Privacidad</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactoAppFinanzasPrivadas;
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Shield, Eye, Lock, Server, Cookie, FileText, Calendar, Mail, Phone, MapPin, AlertTriangle, CheckCircle } from 'lucide-react';

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState('');

  const sections = [
    { id: 'introduccion', title: 'Introducción', icon: FileText },
    { id: 'datos-recopilados', title: 'Datos que Recopilamos', icon: Eye },
    { id: 'como-usamos', title: 'Cómo Usamos los Datos', icon: Server },
    { id: 'almacenamiento', title: 'Almacenamiento Local', icon: Lock },
    { id: 'cookies', title: 'Política de Cookies', icon: Cookie },
    { id: 'derechos', title: 'Tus Derechos', icon: Shield },
    { id: 'contacto', title: 'Contacto', icon: Mail }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-3 mb-6">
            <Shield className="w-12 h-12 text-blue-600 dark:text-blue-400" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Política de Privacidad
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-4">
            En YoControlo, tu privacidad es nuestra prioridad absoluta. Esta política explica cómo protegemos tus datos financieros.
          </p>
          <div className="inline-flex items-center px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-sm font-medium">
            <CheckCircle className="w-4 h-4 mr-2" />
            Actualizado: 13 de Septiembre, 2025
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-12">
          
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Índice</h3>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveSection(section.id);
                      document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-sm ${
                      activeSection === section.id
                        ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
                    }`}
                  >
                    <section.icon className="w-4 h-4" />
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            
            {/* Introducción */}
            <section id="introduccion" className="scroll-mt-8">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Introducción</h2>
                </div>
                
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p className="text-lg leading-relaxed">
                    <strong className="text-gray-900 dark:text-white">YoControlo</strong> es una aplicación de gestión financiera personal diseñada con un principio fundamental: 
                    <strong className="text-blue-600 dark:text-blue-400"> tu privacidad es sagrada</strong>.
                  </p>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Nuestro Compromiso:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Nunca accedemos a tus cuentas bancarias</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Tus datos financieros permanecen en tu dispositivo</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>No vendemos, compartimos ni analizamos tu información financiera</span>
                      </li>
                    </ul>
                  </div>
                  
                  <p>
                    Esta política se aplica a todos los usuarios de YoControlo y explica qué información mínima recopilamos 
                    para el funcionamiento técnico de la aplicación web.
                  </p>
                </div>
              </div>
            </section>

            {/* Datos que Recopilamos */}
            <section id="datos-recopilados" className="scroll-mt-8">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <Eye className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Datos que Recopilamos</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-green-600 dark:text-green-400">✅ Lo que SÍ recopilamos:</h3>
                    <div className="space-y-3 text-gray-700 dark:text-gray-300">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong className="text-gray-900 dark:text-white">Email (opcional):</strong> Solo si eliges crear una cuenta para sincronización cifrada
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong className="text-gray-900 dark:text-white">Datos técnicos:</strong> Tipo de navegador, versión de la app (para soporte técnico)
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong className="text-gray-900 dark:text-white">Logs de errores:</strong> Solo información técnica para corregir bugs (sin datos personales)
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-red-600 dark:text-red-400">❌ Lo que NUNCA recopilamos:</h3>
                    <div className="space-y-3 text-gray-700 dark:text-gray-300">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>Datos bancarios o credenciales financieras</div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>Información sobre tus gastos, ingresos o transacciones</div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>Ubicación, contactos o datos del dispositivo</div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>Datos para publicidad o análisis comercial</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Cómo Usamos los Datos */}
            <section id="como-usamos" className="scroll-mt-8">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Server className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Cómo Usamos los Datos</h2>
                </div>
                
                <div className="space-y-6 text-gray-700 dark:text-gray-300">
                  <p className="text-lg">
                    Los pocos datos que recopilamos se utilizan exclusivamente para:
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                      <div className="text-2xl mb-3">🛠️</div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Soporte Técnico</h3>
                      <p className="text-sm">Resolver problemas técnicos y mejorar la estabilidad de la app</p>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                      <div className="text-2xl mb-3">🔄</div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Sincronización</h3>
                      <p className="text-sm">Permitir copias de seguridad cifradas si eliges esta opción</p>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                      <div className="text-2xl mb-3">📧</div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Comunicación</h3>
                      <p className="text-sm">Responder a tus consultas de soporte (solo si nos contactas)</p>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Importante:</h3>
                        <p className="text-yellow-700 dark:text-yellow-300">
                          <strong>Nunca</strong> utilizamos tus datos para publicidad, análisis de mercado, venta a terceros 
                          o cualquier propósito comercial que no sea el funcionamiento directo de YoControlo.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Almacenamiento Local */}
            <section id="almacenamiento" className="scroll-mt-8">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <Lock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Almacenamiento Local y Cifrado</h2>
                </div>
                
                <div className="space-y-6 text-gray-700 dark:text-gray-300">
                  <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-4">
                      🔐 Tu Información Financiera Permanece en tu Dispositivo
                    </h3>
                    <p className="mb-4">
                      Todos tus datos financieros (gastos, ingresos, categorías, objetivos) se almacenan exclusivamente 
                      en el almacenamiento local de tu navegador usando tecnologías PWA.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span><strong>Cifrado AES-256:</strong> Toda tu información está cifrada con tu clave personal</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span><strong>Sin servidores:</strong> No enviamos tus datos financieros a ningún servidor</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span><strong>Control total:</strong> Puedes borrar toda tu información en cualquier momento</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Copias de Seguridad (Opcional)</h3>
                    <p>
                      Si eliges activar las copias de seguridad cifradas en la nube:
                    </p>
                    <ul className="ml-6 space-y-2">
                      <li className="list-disc">Se almacenan en servidores europeos bajo normativa GDPR</li>
                      <li className="list-disc">Están cifradas con tu clave personal (nosotros no podemos descifrarlas)</li>
                      <li className="list-disc">Puedes eliminarlas completamente en cualquier momento</li>
                      <li className="list-disc">Solo tú tienes acceso a estos datos cifrados</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Política de Cookies */}
            <section id="cookies" className="scroll-mt-8">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Cookie className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Política de Cookies</h2>
                </div>
                
                <div className="space-y-6 text-gray-700 dark:text-gray-300">
                  <p className="text-lg">
                    YoControlo utiliza el mínimo número de cookies necesarias para funcionar correctamente:
                  </p>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                      <thead className="bg-gray-100 dark:bg-gray-700">
                        <tr>
                          <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left text-gray-900 dark:text-white font-semibold">Tipo de Cookie</th>
                          <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left text-gray-900 dark:text-white font-semibold">Propósito</th>
                          <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left text-gray-900 dark:text-white font-semibold">Duración</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white dark:bg-gray-800">
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium">Esenciales</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Funcionamiento básico de la PWA, preferencias de tema</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Sesión</td>
                        </tr>
                        <tr className="bg-gray-25 dark:bg-gray-750">
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium">Seguridad</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Protección CSRF, validación de sesión segura</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">24 horas</td>
                        </tr>
                        <tr className="bg-white dark:bg-gray-800">
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium text-red-600 dark:text-red-400">Analíticas</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-red-600 dark:text-red-400">❌ No utilizamos cookies de seguimiento</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-red-600 dark:text-red-400">N/A</td>
                        </tr>
                        <tr className="bg-gray-25 dark:bg-gray-750">
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium text-red-600 dark:text-red-400">Publicidad</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-red-600 dark:text-red-400">❌ No utilizamos cookies publicitarias</td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-red-600 dark:text-red-400">N/A</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6 rounded-r-lg">
                    <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Control de Cookies:</h3>
                    <p className="text-green-700 dark:text-green-300">
                      Puedes configurar tu navegador para bloquear cookies, pero algunas funciones de YoControlo 
                      pueden verse afectadas. Las cookies esenciales son necesarias para el funcionamiento básico.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Tus Derechos */}
            <section id="derechos" className="scroll-mt-8">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Tus Derechos (GDPR)</h2>
                </div>
                
                <div className="space-y-6 text-gray-700 dark:text-gray-300">
                  <p className="text-lg">
                    Como usuario europeo, tienes derecho a:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">Acceso</h3>
                          <p className="text-sm">Ver qué datos tenemos sobre ti (spoiler: muy pocos)</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">Rectificación</h3>
                          <p className="text-sm">Corregir información incorrecta</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">Eliminación</h3>
                          <p className="text-sm">Borrar tu cuenta y datos asociados</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">Portabilidad</h3>
                          <p className="text-sm">Exportar tus datos en formato estándar</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">Oposición</h3>
                          <p className="text-sm">Oponerte al procesamiento de tus datos</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">Reclamación</h3>
                          <p className="text-sm">Presentar queja ante la autoridad de protección de datos</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">
                      💡 Ejercicio Simplificado de Derechos
                    </h3>
                    <p className="mb-3">
                      Dado que tus datos financieros están en tu dispositivo, muchos derechos los puedes ejercer directamente:
                    </p>
                    <ul className="space-y-1">
                      <li>• <strong>Eliminar datos:</strong> Usa la opción {'"Borrar todos los datos"'} en Configuración</li>
                      <li>• <strong>Exportar datos:</strong> Función de exportación disponible en la app</li>
                      <li>• <strong>Control total:</strong> Tú decides qué datos registrar y cuáles no</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
{/* Contacto */}
<section id="contacto" className="scroll-mt-8">
  <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
    <div className="flex items-center gap-3 mb-6">
      <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Contacto y Soporte</h2>
    </div>
    
    <div className="space-y-6">
      <p className="text-lg text-gray-700 dark:text-gray-300">
        Para cualquier consulta sobre la privacidad de tus datos o sobre el uso de la web, 
        puedes ponerte en contacto directamente conmigo, el desarrollador y responsable del sitio.
      </p>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Datos de Contacto</h3>
          
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Email de Privacidad</p>
                <p className="text-gray-600 dark:text-gray-400">privacidad@yocontrolo.net</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Soporte Técnico</p>
                <p className="text-gray-600 dark:text-gray-400">soporte@yocontrolo.net</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-gray-500 dark:text-gray-400 mt-1" />
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Responsable</p>
                <p className="text-gray-600 dark:text-gray-400">
                  Este sitio es desarrollado y mantenido por un único programador.<br />
                  No hay empresa registrada detrás del dominio.<br />
                  YoControlo.net
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Tiempos de Respuesta</h3>
          
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-center gap-3">
                <Calendar className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span><strong>Consultas generales:</strong> 24-48 horas</span>
              </li>
              <li className="flex items-center gap-3">
                <Calendar className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span><strong>Ejercicio de derechos GDPR:</strong> Máximo 30 días</span>
              </li>
              <li className="flex items-center gap-3">
                <Calendar className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span><strong>Incidentes de seguridad:</strong> Inmediato</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded-r-lg">
            <p className="text-green-700 dark:text-green-300 text-sm">
              <strong>Compromiso:</strong> Todas las consultas sobre privacidad son atendidas con prioridad, 
              y serán gestionadas directamente por el responsable del sitio.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


            {/* Cambios en la Política */}
            <section className="scroll-mt-8">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Cambios en esta Política</h2>
                </div>
                
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p className="text-lg">
                    Nos comprometemos a mantenerte informado sobre cualquier cambio en nuestra política de privacidad:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Tipos de Cambios</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span><strong>Menores:</strong> Correcciones y aclaraciones (notificación en la app)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span><strong>Importantes:</strong> Cambios en el tratamiento de datos (email + notificación)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span><strong>Críticos:</strong> Cambios fundamentales (consentimiento requerido)</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Historial de Versiones</h3>
                      <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                        <ul className="space-y-2 text-sm">
                          <li className="flex justify-between">
                            <span>v1.0 - Política inicial</span>
                            <span className="text-gray-500 dark:text-gray-400">13/09/2025</span>
                          </li>
                          <li className="text-gray-500 dark:text-gray-400 italic">
                            Futuras actualizaciones aparecerán aquí
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">
                      🔔 Sistema de Notificaciones
                    </h3>
                    <p className="mb-3">
                      Te informaremos de cambios importantes a través de:
                    </p>
                    <ul className="space-y-1">
                      <li>• Notificación prominente en la aplicación</li>
                      <li>• Email a tu dirección registrada (si tienes cuenta)</li>
                      <li>• Período de gracia de 30 días antes de aplicar cambios importantes</li>
                      <li>• Opción de rechazar cambios y eliminar tu cuenta si no estás de acuerdo</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Compromiso Final */}
            <section className="scroll-mt-8">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 rounded-2xl p-8 text-white">
                <div className="text-center">
                  <div className="flex justify-center items-center gap-3 mb-6">
                    <Shield className="w-8 h-8" />
                    <h2 className="text-3xl font-bold">Nuestro Compromiso Contigo</h2>
                  </div>
                  
                  <div className="space-y-6 text-lg">
                    <p className="max-w-3xl mx-auto">
                      En YoControlo, entendemos que la confianza se gana con acciones, no con palabras. 
                      Por eso hemos construido una aplicación que pone tu privacidad primero desde el diseño.
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-6 mt-8">
                      <div className="bg-white/10 rounded-xl p-6">
                        <div className="text-3xl mb-3">🔒</div>
                        <h3 className="font-semibold mb-2">Privacy by Design</h3>
                        <p className="text-sm opacity-90">
                          Tu privacidad está integrada en cada línea de código
                        </p>
                      </div>
                      
                      <div className="bg-white/10 rounded-xl p-6">
                        <div className="text-3xl mb-3">🛡️</div>
                        <h3 className="font-semibold mb-2">Transparencia Total</h3>
                        <p className="text-sm opacity-90">
                          Sin letra pequeña, sin sorpresas, sin datos ocultos
                        </p>
                      </div>
                      
                      <div className="bg-white/10 rounded-xl p-6">
                        <div className="text-3xl mb-3">⚡</div>
                        <h3 className="font-semibold mb-2">Control Real</h3>
                        <p className="text-sm opacity-90">
                          Tú decides qué datos compartir y cuándo eliminarlos
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-blue-100 mt-8">
                      <strong>Tu privacidad no es negociable.</strong> Si alguna vez comprometemos estos principios, 
                      te notificaremos inmediatamente y te daremos opciones claras.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                      <button className="px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                        Comenzar con Privacidad Total
                      </button>
                      <button className="px-6 py-3 bg-white/20 hover:bg-white/30 rounded-xl font-semibold transition-colors">
                        Hacer una Consulta de Privacidad
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div> 
      </div>
    </div>
  );
};

export default PrivacyPolicy;
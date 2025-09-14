"use client";

import React, { useState } from 'react';
import { Shield, FileText, Scale, AlertTriangle, CheckCircle, Clock, Users, Gavel, Ban, Zap, Mail, Phone, MapPin, Calendar, Lock, Eye, Server } from 'lucide-react';

const TermsOfService = () => {
  const [activeSection, setActiveSection] = useState('');

  const sections = [
    { id: 'aceptacion', title: 'Aceptación de Términos', icon: FileText },
    { id: 'descripcion', title: 'Descripción del Servicio', icon: Shield },
    { id: 'registro', title: 'Registro y Cuenta', icon: Users },
    { id: 'uso-permitido', title: 'Uso Permitido', icon: CheckCircle },
    { id: 'uso-prohibido', title: 'Uso Prohibido', icon: Ban },
    { id: 'responsabilidades', title: 'Responsabilidades del Usuario', icon: Scale },
    { id: 'limitaciones', title: 'Limitaciones de Responsabilidad', icon: AlertTriangle },
    { id: 'modificaciones', title: 'Modificaciones del Servicio', icon: Zap },
    { id: 'terminacion', title: 'Terminación', icon: Clock },
    { id: 'contacto', title: 'Contacto Legal', icon: Mail }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-3 mb-6">
            <Scale className="w-12 h-12 text-blue-600 dark:text-blue-400" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Términos de Uso
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-4">
            Condiciones claras y justas para el uso de YoControlo. Protegemos tus derechos mientras mantenemos un servicio seguro para todos.
          </p>
          <div className="inline-flex items-center px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-sm font-medium">
            <CheckCircle className="w-4 h-4 mr-2" />
            Vigentes desde: 13 de Septiembre, 2025
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-12">
          
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contenido</h3>
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
            
            {/* Aceptación de Términos */}
            <section id="aceptacion" className="scroll-mt-8">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Scale className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Responsabilidades del Usuario</h2>
                </div>
                
                <div className="space-y-6 text-gray-700 dark:text-gray-300">
                  <p className="text-lg">
                    Como usuario de YoControlo, tienes ciertas responsabilidades para mantener un servicio seguro y confiable para todos:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">Seguridad de tu Cuenta</h3>
                      <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3">
                            <Lock className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <h4 className="font-medium text-gray-900 dark:text-white">Protege tus credenciales</h4>
                              <p className="text-sm">Mantén segura tu contraseña y clave de cifrado</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <Eye className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <h4 className="font-medium text-gray-900 dark:text-white">Monitorea tu actividad</h4>
                              <p className="text-sm">Revisa regularmente el uso de tu cuenta</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <AlertTriangle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <h4 className="font-medium text-gray-900 dark:text-white">Reporta incidentes</h4>
                              <p className="text-sm">Notifica accesos no autorizados inmediatamente</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">Uso Responsable</h3>
                      <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <h4 className="font-medium text-gray-900 dark:text-white">Cumple las leyes aplicables</h4>
                              <p className="text-sm">Respeta la legislación de tu jurisdicción</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <Server className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <h4 className="font-medium text-gray-900 dark:text-white">Respeta los recursos</h4>
                              <p className="text-sm">No abuses del servicio ni consumas recursos excesivos</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <Mail className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <h4 className="font-medium text-gray-900 dark:text-white">Mantén información actualizada</h4>
                              <p className="text-sm">Si tienes cuenta, mantén tus datos de contacto al día</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">
                      Datos y Backups
                    </h3>
                    <p className="mb-3">
                      Aunque YoControlo almacena tus datos localmente por privacidad, eres responsable de:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>Realizar copias de seguridad regulares de tus datos importantes</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>Verificar la integridad de tus backups cifrados</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>Entender que la pérdida de tu clave de cifrado significa pérdida de datos</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Descripción del Servicio */}
{/* Descripción del Servicio */}
<section id="descripcion" className="scroll-mt-8">
  <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
    <div className="flex items-center gap-3 mb-6">
      <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
        Descripción del Servicio
      </h2>
    </div>
    <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
      <p>
        <strong>YoControlo</strong> es una plataforma digital diseñada para 
        ayudarte a organizar, comprender y optimizar tu vida financiera de 
        manera sencilla, visual e intuitiva. Nuestro servicio está pensado 
        para usuarios que desean tener un mayor control sobre sus ingresos, 
        gastos y compromisos económicos, ofreciéndoles una experiencia clara 
        y accesible tanto desde dispositivos móviles como desde navegadores 
        web.
      </p>
      <p>
        La aplicación te permite registrar tus movimientos financieros, 
        clasificar tus transacciones, identificar patrones de consumo y 
        anticipar necesidades futuras. A través de gráficos dinámicos, 
        reportes automáticos y filtros personalizados, YoControlo busca que 
        tengas una <em>visión completa</em> de tu situación económica en todo 
        momento.
      </p>
      <p>
        Además, el servicio incluye funcionalidades para gestionar 
        <span className="font-medium"> pagos recurrentes</span>, establecer 
        metas de ahorro, recibir recordatorios de vencimientos y consultar 
        estadísticas que te ayuden a tomar decisiones más inteligentes. 
        Nuestro objetivo es que no solo lleves un registro, sino que puedas 
        <span className="font-medium"> planificar, proyectar y crecer 
        financieramente</span>.
      </p>
      <p>
        YoControlo evoluciona continuamente para adaptarse a las 
        necesidades de los usuarios, manteniendo siempre un compromiso con 
        la <span className="font-medium">seguridad</span>, la 
        <span className="font-medium"> privacidad</span> de tus datos y la 
        <span className="font-medium"> simplicidad</span> de uso. 
        Queremos ser un aliado en tu día a día, para que gestionar tus 
        finanzas deje de ser una tarea complicada y se convierta en un 
        proceso claro, práctico y motivador.
      </p>
    </div>
  </div>
</section>

{/* Registro y Cuenta */}
<section id="registro" className="scroll-mt-8">
  <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
    <div className="flex items-center gap-3 mb-6">
      <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
        Registro y Cuenta
      </h2>
    </div>
    <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
      <p>
        El uso de <strong>YoControlo</strong> no requiere obligatoriamente la 
        creación de una cuenta. Nuestra filosofía es ofrecerte 
        <em> flexibilidad</em> y <em>comodidad</em>, para que elijas cómo deseas 
        gestionar tu información financiera.
      </p>
      <p>
        Si decides utilizar la aplicación <span className="font-medium">sin 
        registro</span>, todos tus datos se almacenarán de manera segura en el 
        <span className="font-medium"> almacenamiento local de tu dispositivo</span>. 
        De esta forma, tendrás acceso completo a las funcionalidades básicas sin 
        necesidad de proporcionar información personal ni depender de conexión a 
        internet. No obstante, en este modo no será posible recuperar tus datos en 
        caso de pérdida, cambio de dispositivo o reinstalación de la aplicación.
      </p>
      <p>
        Por otro lado, si eliges <span className="font-medium">registrarte y crear 
        una cuenta</span>, tus datos se sincronizarán con nuestros servidores, 
        permitiéndote acceder a ellos desde cualquier dispositivo compatible y 
        garantizar su respaldo. Esto también te habilitará funciones adicionales, 
        como la posibilidad de recuperar tu información en caso de incidencias, 
        mantener tu progreso aunque cambies de móvil y recibir notificaciones 
        personalizadas.
      </p>
      <p>
        Al registrarte, te comprometes a proporcionar información veraz y actualizada, 
        y a mantener la confidencialidad de tus credenciales de acceso. Tú eres el 
        único responsable del uso de tu cuenta y de las acciones que se realicen desde 
        ella. En caso de detectar un uso indebido, YoControlo podrá suspender o 
        cancelar el acceso para proteger la seguridad del servicio y de la comunidad.
      </p>
      <p>
        Tanto en el uso local como en el registrado, mantenemos nuestro compromiso con 
        la <span className="font-medium">privacidad</span> y la 
        <span className="font-medium">seguridad</span>, asegurando que tus finanzas 
        estén siempre bajo tu control.
      </p>
    </div>
  </div>
</section>


{/* Uso Permitido */}
<section id="uso-permitido" className="scroll-mt-8">
  <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
    <div className="flex items-center gap-3 mb-6">
      <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
        Uso Permitido
      </h2>
    </div>
    <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
      <p>
        El servicio de <strong>YoControlo</strong> está diseñado para 
        facilitar la gestión de tus finanzas personales, brindándote 
        herramientas que mejoren tu organización, análisis y toma de 
        decisiones en el ámbito económico. Queremos que la aplicación 
        sea un <em>aliado cotidiano</em> que te ayude a alcanzar tus metas 
        financieras con mayor claridad y tranquilidad.
      </p>
      <p>
        Como usuario, tienes derecho a utilizar la plataforma de manera 
        responsable y conforme a su propósito principal: la 
        <span className="font-medium"> gestión financiera personal</span>. 
        Dentro de los usos permitidos se incluyen, entre otros:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <span className="font-medium">Registrar ingresos y gastos </span> 
          de manera manual o automática, organizándolos en categorías 
          personalizadas según tus necesidades.
        </li>
        <li>
          <span className="font-medium">Configurar recordatorios y pagos 
          recurrentes</span> para no olvidar fechas importantes ni 
          compromisos financieros.
        </li>
        <li>
          <span className="font-medium">Analizar tu situación económica</span> 
          a través de gráficos, estadísticas y reportes que faciliten la 
          comprensión de tus hábitos de consumo.
        </li>
        <li>
          <span className="font-medium">Establecer objetivos de ahorro</span> 
          y llevar un seguimiento de tu progreso, motivándote a cumplirlos.
        </li>
        <li>
          <span className="font-medium">Sincronizar tus datos</span> entre 
          dispositivos si decides registrarte, manteniendo tu información 
          siempre disponible y respaldada en la nube.
        </li>
        <li>
          <span className="font-medium">Exportar o eliminar tu información</span> 
          en cualquier momento, respetando tu derecho de control sobre tus datos.
        </li>
        <li>
          <span className="font-medium">Acceder a soporte técnico</span> para 
          resolver incidencias, dudas o recibir orientación sobre el uso de la 
          aplicación.
        </li>
      </ul>
      <p>
        En resumen, el uso permitido de YoControlo se centra en ofrecerte un 
        espacio confiable, seguro y práctico para llevar tus finanzas personales 
        de manera ordenada, transparente y adaptada a tu estilo de vida.
      </p>
    </div>
  </div>
</section>


{/* Uso Prohibido */}
<section id="uso-prohibido" className="scroll-mt-8">
  <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
    <div className="flex items-center gap-3 mb-6">
      <Ban className="w-6 h-6 text-red-600 dark:text-red-400" />
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
        Uso Prohibido
      </h2>
    </div>
    <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
      <p>
        Para mantener la seguridad, la integridad y el correcto 
        funcionamiento de <strong>YoControlo</strong>, existen ciertas 
        prácticas que están estrictamente prohibidas. Estas limitaciones 
        buscan proteger tanto a los usuarios como al servicio, garantizando 
        un entorno confiable y respetuoso.
      </p>
      <p>
        El uso indebido de la aplicación puede dar lugar a la suspensión o 
        cancelación de la cuenta y, en casos graves, a posibles acciones 
        legales. Entre las conductas prohibidas se incluyen, entre otras:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <span className="font-medium">Proporcionar información falsa o fraudulenta</span>, 
          ya sea en los registros financieros o en los datos de la cuenta.
        </li>
        <li>
          <span className="font-medium">Compartir, distribuir o manipular información 
          ajena</span> sin autorización expresa del titular.
        </li>
        <li>
          <span className="font-medium">Acceder sin permiso</span> a cuentas, dispositivos 
          o información de otros usuarios mediante prácticas de hacking, phishing 
          o cualquier otro método ilícito.
        </li>
        <li>
          <span className="font-medium">Modificar, descompilar o realizar ingeniería inversa</span> 
          de la aplicación con el fin de alterar su funcionamiento, obtener ventajas 
          indebidas o explotar vulnerabilidades.
        </li>
        <li>
          <span className="font-medium">Utilizar la plataforma con fines comerciales, publicitarios 
          o de reventa</span> sin una autorización previa y expresa de YoControlo.
        </li>
        <li>
          <span className="font-medium">Introducir virus, malware, bots o cualquier código malicioso</span> 
          que pueda afectar la disponibilidad, integridad o seguridad del servicio.
        </li>
        <li>
          <span className="font-medium">Usar la aplicación para actividades ilegales</span>, como 
          lavado de dinero, fraude financiero u operaciones contrarias a la normativa 
          vigente.
        </li>
        <li>
          <span className="font-medium">Interferir en el uso de otros usuarios</span>, obstaculizando 
          la experiencia o comprometiendo la estabilidad de la plataforma.
        </li>
      </ul>
      <p>
        YoControlo se reserva el derecho de supervisar e investigar cualquier 
        comportamiento sospechoso y de tomar las medidas necesarias para 
        proteger tanto a la comunidad como a la infraestructura del servicio.
      </p>
    </div>
  </div>
</section>


{/* Responsabilidades del Usuario */}
<section id="responsabilidades" className="scroll-mt-8">
  <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
    <div className="flex items-center gap-3 mb-6">
      <Scale className="w-6 h-6 text-blue-600 dark:text-blue-400" />
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Responsabilidades del Usuario</h2>
    </div>
    <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
      <li>Usar la aplicación conforme a la ley y a estos términos.</li>
      <li>Mantener seguros tus dispositivos y claves de acceso.</li>
      <li>No transferir tu cuenta ni credenciales a terceros.</li>
      <li>Realizar copias de seguridad de tus datos importantes.</li>
    </ul>
  </div>
</section>

          {/* Limitaciones de Responsabilidad */}
<section id="limitaciones" className="scroll-mt-8">
  <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
    <div className="flex items-center gap-3 mb-6">
      <AlertTriangle className="w-6 h-6 text-orange-600 dark:text-orange-400" />
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Limitaciones de Responsabilidad</h2>
    </div>
    
    <div className="space-y-6 text-gray-700 dark:text-gray-300">
      <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-6 rounded-r-lg">
        <h3 className="font-semibold text-orange-800 dark:text-orange-200 mb-3">
          Exención de Garantías
        </h3>
        <p className="text-orange-700 dark:text-orange-300 mb-4">
          YoControlo se proporciona tal {'"como está"'} sin garantías expresas o implícitas de ningún tipo.
        </p>
        <ul className="space-y-2 text-orange-700 dark:text-orange-300">
          <li>• No garantizamos disponibilidad 24/7 del servicio</li>
          <li>• No garantizamos la ausencia total de errores o bugs</li>
          <li>• No garantizamos compatibilidad con todos los dispositivos</li>
          <li>• No garantizamos resultados financieros específicos</li>
        </ul>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Limitación de Daños</h3>
          <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-xl">
            <p className="mb-4">
              El desarrollador de YoControlo Nestor Calderón Pérez no será responsable de:
            </p>
            <ul className="space-y-2 text-sm">
              <li>• Pérdida de datos por mal uso o fallos técnicos</li>
              <li>• Decisiones financieras tomadas basándose en la app</li>
              <li>• Daños indirectos, consecuenciales o punitivos</li>
              <li>• Interrupciones del servicio por causas externas</li>
              <li>• Problemas derivados del uso de funciones beta</li>
            </ul>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Responsabilidad Máxima</h3>
          <div className="bg-blue-100 dark:bg-blue-900/30 p-6 rounded-xl">
            <p className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">
              100€ o el importe pagado en los últimos 12 meses
            </p>
            <p className="text-blue-800 dark:text-blue-200 text-sm">
              Esta es la responsabilidad máxima total del desarrollador de YoControlo Nestor Calderón Pérez
              ante cualquier reclamación relacionada con el servicio, independientemente 
              de la causa o naturaleza del daño.
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-100 mb-3 flex items-center gap-2">
          <Shield className="w-5 h-5" />
          Excepciones a las Limitaciones
        </h3>
        <p className="text-yellow-800 dark:text-yellow-200 mb-3">
          Estas limitaciones NO se aplican en casos de:
        </p>
        <ul className="space-y-1 text-yellow-700 dark:text-yellow-300">
          <li>• Dolo o negligencia grave por parte del desarrollador</li>
          <li>• Violación de datos personales por culpa del desarrollador</li>
          <li>• Muerte o lesiones personales causadas por el uso del sitio</li>
          <li>• Cualquier responsabilidad que no pueda limitarse legalmente</li>
        </ul>
      </div>
    </div>
  </div>
</section>


            {/* Modificaciones del Servicio */}
            <section id="modificaciones" className="scroll-mt-8">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Modificaciones del Servicio</h2>
                </div>
                
                <div className="space-y-6 text-gray-700 dark:text-gray-300">
                  <p className="text-lg">
                    Nos reservamos el derecho de modificar, actualizar o descontinuar YoControlo, 
                    siempre respetando los derechos de nuestros usuarios:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">Tipos de Cambios</h3>
                      <div className="space-y-4">
                        <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                          <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2">Mejoras y Actualizaciones</h4>
                          <p className="text-sm">Nuevas funciones, corrección de errores, mejoras de seguridad</p>
                        </div>
                        <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                          <h4 className="font-semibold text-orange-700 dark:text-orange-400 mb-2">Cambios Significativos</h4>
                          <p className="text-sm">Modificaciones importantes que afecten funcionalidad core</p>
                        </div>
                        <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                          <h4 className="font-semibold text-red-700 dark:text-red-400 mb-2">Descontinuación</h4>
                          <p className="text-sm">Finalización del servicio o funciones específicas</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">Proceso de Notificación</h3>
                      <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                        <ul className="space-y-3">
                          <li className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                              <span className="text-green-600 dark:text-green-400 font-bold text-sm">1</span>
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-900 dark:text-white">Notificación previa</h4>
                              <p className="text-sm">30 días mínimo para cambios importantes</p>
                            </div>
                          </li>
                          <li className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                              <span className="text-blue-600 dark:text-blue-400 font-bold text-sm">2</span>
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-900 dark:text-white">Múltiples canales</h4>
                              <p className="text-sm">In-app, email, y página web</p>
                            </div>
                          </li>
                          <li className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                              <span className="text-purple-600 dark:text-purple-400 font-bold text-sm">3</span>
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-900 dark:text-white">Opciones al usuario</h4>
                              <p className="text-sm">Alternativas o periodo de adaptación</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">
                      Compromiso de Continuidad
                    </h3>
                    <p className="mb-3 text-blue-800 dark:text-blue-200">
                      En caso de descontinuación del servicio, garantizamos:
                    </p>
                    <ul className="space-y-2 text-blue-800 dark:text-blue-200">
                      <li>• Mínimo 90 días de aviso previo</li>
                      <li>• Herramientas completas de exportación de datos</li>
                      <li>• Guías para migrar a servicios alternativos</li>
                      <li>• Soporte técnico durante el periodo de transición</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Terminación */}
            <section id="terminacion" className="scroll-mt-8">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-6 h-6 text-red-600 dark:text-red-400" />
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Terminación del Servicio</h2>
                </div>
                
                <div className="space-y-6 text-gray-700 dark:text-gray-300">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-green-600 dark:text-green-400">Terminación por el Usuario</h3>
                      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
                        <p className="mb-4 text-green-800 dark:text-green-200">
                          Puedes dejar de usar YoControlo en cualquier momento:
                        </p>
                        <ul className="space-y-2 text-green-700 dark:text-green-300">
                          <li>• Sin penalizaciones ni cargos adicionales</li>
                          <li>• Conservando acceso hasta el final del periodo pagado</li>
                          <li>• Con derecho a exportar todos tus datos</li>
                          <li>• Eliminación de cuenta y datos bajo petición</li>
                        </ul>
                        
                        <div className="mt-4 p-4 bg-green-100 dark:bg-green-900/40 rounded-lg">
                          <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Para usuarios sin cuenta:</h4>
                          <p className="text-sm text-green-800 dark:text-green-200">
                            Simplemente deja de usar la app. Tus datos locales permanecerán 
                            en tu dispositivo hasta que decidas eliminarlos manualmente.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-red-600 dark:text-red-400">Terminación por YoControlo</h3>
                      <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-800">
                        <p className="mb-4 text-red-800 dark:text-red-200">
                          Podemos suspender o terminar tu acceso en casos de:
                        </p>
                        <ul className="space-y-2 text-red-700 dark:text-red-300">
                          <li>• Violación grave de estos términos</li>
                          <li>• Actividades ilegales o fraudulentas</li>
                          <li>• Abuso técnico del servicio</li>
                          <li>• Impago de servicios premium (tras aviso)</li>
                        </ul>
                        
                        <div className="mt-4 p-4 bg-red-100 dark:bg-red-900/40 rounded-lg">
                          <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Proceso justo:</h4>
                          <p className="text-sm text-red-800 dark:text-red-200">
                            Siempre proporcionamos aviso previo y oportunidad de 
                            rectificar el problema, excepto en casos de riesgo inmediato.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                    <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-3 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5" />
                      Efectos de la Terminación
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6 text-yellow-700 dark:text-yellow-300">
                      <div>
                        <h4 className="font-medium mb-2">Datos Locales:</h4>
                        <p className="text-sm">Permanecen en tu dispositivo intactos. 
                        Tú decides si conservarlos o eliminarlos.</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Datos de Sincronización:</h4>
                        <p className="text-sm">Se eliminan de nuestros servidores tras 
                        un periodo de gracia de 30 días.</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Funciones Premium:</h4>
                        <p className="text-sm">Cesan inmediatamente, pero mantienes 
                        acceso a funciones básicas locales.</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Soporte Técnico:</h4>
                        <p className="text-sm">Disponible durante 30 días para 
                        exportación de datos y transición.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Contacto Legal */}
<section id="contacto" className="scroll-mt-8">
  <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
    <div className="flex items-center gap-3 mb-6">
      <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Contacto Legal y Disputas</h2>
    </div>
    
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Información Legal</h3>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Scale className="w-5 h-5 text-gray-500 dark:text-gray-400 mt-1" />
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Responsable del Sitio</p>
                <p className="text-gray-600 dark:text-gray-400">Desarrollador de YoControlo Nestor Calderón Pérez</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-gray-500 dark:text-gray-400 mt-1" />
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Domicilio</p>
                <p className="text-gray-600 dark:text-gray-400">
                  YoControlo.net<br />
                  España
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Contacto Legal</p>
                <p className="text-gray-600 dark:text-gray-400">legal@yocontrolo.net</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Resolución de Disputas</h3>
          
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">1. Resolución Amistosa</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Contacta con el desarrollador para intentar resolver cualquier disputa de forma amistosa.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">2. Mediación</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Si no se resuelve amistosamente, se podrá recurrir a mediación antes de acciones legales.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">3. Jurisdicción</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Los tribunales de España tendrán jurisdicción exclusiva sobre cualquier disputa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">
          Ley Aplicable
        </h3>
        <p className="text-blue-800 dark:text-blue-200">
          Estos términos se rigen por la legislación española y europea aplicable, 
          incluyendo el GDPR y la normativa de protección de consumidores. 
          Los usuarios europeos conservan todos sus derechos bajo la legislación local aplicable.
        </p>
      </div>
    </div>
  </div>
</section>


            {/* Términos Generales */}
            <section className="scroll-mt-8">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <Gavel className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Disposiciones Generales</h2>
                </div>
                
                <div className="space-y-6 text-gray-700 dark:text-gray-300">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Separabilidad</h3>
                      <p className="text-sm">
                        Si alguna disposición de estos términos se considera inválida o no aplicable, 
                        las disposiciones restantes permanecerán en pleno vigor y efecto.
                      </p>
                      
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Modificaciones</h3>
                      <p className="text-sm">
                        Nos reservamos el derecho de modificar estos términos. Los cambios importantes 
                        se notificarán con 30 días de antelación mínimo.
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Renuncia</h3>
                      <p className="text-sm">
                        El hecho de que no ejerzamos un derecho no constituye una renuncia 
                        a dicho derecho ni a ejercerlo en el futuro.
                      </p>
                      
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Acuerdo Completo</h3>
                      <p className="text-sm">
                        Estos términos, junto con nuestra Política de Privacidad, constituyen 
                        el acuerdo completo entre las partes.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Historial de Versiones
                    </h3>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span className="font-medium">v1.0 - Términos iniciales</span>
                        <span className="text-gray-500 dark:text-gray-400">13/09/2025</span>
                      </div>
                      <p className="text-gray-500 dark:text-gray-400 text-sm italic">
                        Las futuras actualizaciones aparecerán aquí con descripción de cambios
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Compromiso Final */}
            <section className="scroll-mt-8">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 rounded-2xl p-8 text-white">
                <div className="text-center">
                  <div className="flex justify-center items-center gap-3 mb-6">
                    <Scale className="w-8 h-8" />
                    <h2 className="text-3xl font-bold">Términos Justos para Todos</h2>
                  </div>
                  
                  <div className="space-y-6 text-lg">
                    <p className="max-w-3xl mx-auto">
                      Estos términos están diseñados para proteger tanto a los usuarios como al servicio YoControlo. 
                      Creemos en condiciones claras, justas y transparentes.
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-6 mt-8">
                      <div className="bg-white/10 rounded-xl p-6">
                        <div className="text-3xl mb-3">⚖️</div>
                        <h3 className="font-semibold mb-2">Términos Equilibrados</h3>
                        <p className="text-sm opacity-90">
                          Protegemos nuestros derechos respetando los tuyos
                        </p>
                      </div>
                      
                      <div className="bg-white/10 rounded-xl p-6">
                        <div className="text-3xl mb-3">🔍</div>
                        <h3 className="font-semibold mb-2">Transparencia Total</h3>
                        <p className="text-sm opacity-90">
                          Sin cláusulas ocultas ni sorpresas desagradables
                        </p>
                      </div>
                      
                      <div className="bg-white/10 rounded-xl p-6">
                        <div className="text-3xl mb-3">🤝</div>
                        <h3 className="font-semibold mb-2">Resolución Amistosa</h3>
                        <p className="text-sm opacity-90">
                          Siempre priorizamos el diálogo antes que lo legal
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-blue-100 mt-8">
                      <strong>¿Tienes dudas sobre estos términos?</strong> Nuestro equipo legal está disponible 
                      para aclarar cualquier punto que no esté claro.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                      <a 
                        href="mailto:legal@yocontrolo.app"
                        className="px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors inline-block"
                      >
                        Consulta Legal
                      </a>
                      <a 
                        href="https://app.yocontrolo.net/"
                        className="px-6 py-3 bg-white/20 hover:bg-white/30 rounded-xl font-semibold transition-colors inline-block"
                      >
                        Comenzar a Usar YoControlo
                      </a>
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

export default TermsOfService;
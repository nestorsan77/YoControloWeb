import React, { useState, useEffect } from 'react';
import { X, Cookie, Shield, BarChart3, Settings } from 'lucide-react';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Siempre activadas
    analytics: false,
    marketing: false,
    personalization: false
  });

  useEffect(() => {
    // Verificar si el usuario ya ha dado su consentimiento
    const consent = localStorage.getItem('yocontrolo-cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      personalization: true
    };
    setPreferences(allAccepted);
    saveCookiePreferences(allAccepted);
    setIsVisible(false);
  };

  const handleAcceptSelected = () => {
    saveCookiePreferences(preferences);
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
      personalization: false
    };
    setPreferences(onlyNecessary);
    saveCookiePreferences(onlyNecessary);
    setIsVisible(false);
  };

  const saveCookiePreferences = (prefs: typeof preferences) => {
    localStorage.setItem('yocontrolo-cookie-consent', JSON.stringify({
      preferences: prefs,
      timestamp: new Date().toISOString(),
      version: '1.0'
    }));

    // Aquí puedes agregar lógica para activar/desactivar cookies según las preferencias
    if (prefs.analytics) {
      // Activar Google Analytics
      if (window.gtag) {
        window.gtag('consent', 'update', {
          'analytics_storage': 'granted'
        });
      }
    }
  };

  const handlePreferenceChange = (type: keyof typeof preferences) => {
    if (type === 'necessary') return; // Las necesarias no se pueden desactivar
    
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end sm:items-center sm:justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-t-2xl sm:rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-3">
            <Cookie className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Configuración de Cookies
            </h2>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              En <strong>YoControlo</strong> utilizamos cookies para mejorar tu experiencia de usuario, 
              analizar el tráfico del sitio web y personalizar el contenido. Puedes elegir qué tipos 
              de cookies aceptas.
            </p>
          </div>

          {!showDetails ? (
            /* Vista Simple */
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <Shield className="w-5 h-5 text-blue-600" />
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    Respetamos tu privacidad
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Solo utilizamos cookies esenciales y las que nos autorices explícitamente.
                  </p>
                </div>
              </div>

              <button
                onClick={() => setShowDetails(true)}
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                <Settings className="w-4 h-4" />
                Personalizar configuración
              </button>
            </div>
          ) : (
            /* Vista Detallada */
            <div className="space-y-4">
              {/* Cookies Necesarias */}
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-green-600" />
                    <h3 className="font-medium text-gray-900 dark:text-white">
                      Cookies Necesarias
                    </h3>
                  </div>
                  <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                    Siempre activas
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Esenciales para el funcionamiento básico del sitio web y no se pueden desactivar.
                </p>
              </div>

              {/* Cookies de Análisis */}
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-blue-600" />
                    <h3 className="font-medium text-gray-900 dark:text-white">
                      Cookies de Análisis
                    </h3>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={() => handlePreferenceChange('analytics')}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Nos ayudan a entender cómo los usuarios interactúan con nuestro sitio web (Google Analytics).
                </p>
              </div>

              {/* Cookies de Marketing */}
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded bg-purple-600 flex items-center justify-center">
                      <span className="text-white text-xs">M</span>
                    </div>
                    <h3 className="font-medium text-gray-900 dark:text-white">
                      Cookies de Marketing
                    </h3>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={() => handlePreferenceChange('marketing')}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Se utilizan para mostrar anuncios relevantes y medir la efectividad de las campañas.
                </p>
              </div>

              {/* Cookies de Personalización */}
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded bg-orange-600 flex items-center justify-center">
                      <span className="text-white text-xs">P</span>
                    </div>
                    <h3 className="font-medium text-gray-900 dark:text-white">
                      Cookies de Personalización
                    </h3>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.personalization}
                      onChange={() => handlePreferenceChange('personalization')}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Permiten recordar tus preferencias y personalizar tu experiencia en el sitio.
                </p>
              </div>

              <button
                onClick={() => setShowDetails(false)}
                className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                ← Volver a vista simple
              </button>
            </div>
          )}

          {/* Enlaces adicionales */}
          <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Para más información, consulta nuestra{' '}
              <a href="/politica-privacidad" className="text-blue-600 hover:text-blue-700 underline">
                Política de Privacidad
              </a>{' '}
              y{' '}
              <a href="/politica-cookies" className="text-blue-600 hover:text-blue-700 underline">
                Política de Cookies
              </a>
            </p>
          </div>
        </div>

        {/* Footer con botones */}
        <div className="flex flex-col sm:flex-row gap-3 p-6 bg-gray-50 dark:bg-gray-800 rounded-b-2xl">
          <button
            onClick={handleRejectAll}
            className="flex-1 px-4 py-3 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors font-medium"
          >
            Rechazar todas
          </button>
          
          {showDetails && (
            <button
              onClick={handleAcceptSelected}
              className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Guardar preferencias
            </button>
          )}
          
          <button
            onClick={handleAcceptAll}
            className="flex-1 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
          >
            Aceptar todas
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
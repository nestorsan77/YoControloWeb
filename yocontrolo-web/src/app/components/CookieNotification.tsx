"use client";
// components/CookieNotification.tsx - Banner pequeño para cambiar preferencias
import React, { useState } from 'react';
import { Cookie, Settings } from 'lucide-react';
import { useCookieConsent } from '../hooks/useCookieConsent';
import { CookieSettingsModal } from './CookieSettingsModal';

export const CookieNotification: React.FC = () => {
  const { hasConsent } = useCookieConsent();
  const [showSettings, setShowSettings] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Solo mostrar si el usuario ya dio consentimiento y el banner es visible
  if (!hasConsent || !isVisible) return null;

  return (
    <>
      <div className="fixed bottom-4 left-4 z-40 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-4 max-w-sm">
        <div className="flex items-start gap-3">
          <Cookie className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
              Gestiona tus preferencias de cookies
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => setShowSettings(true)}
                className="flex items-center gap-1 text-xs text-blue-600 hover:text-blue-700 font-medium"
              >
                <Settings className="w-3 h-3" />
                Configurar
              </button>
              <button
                onClick={() => setIsVisible(false)}
                className="text-xs text-gray-500 hover:text-gray-700"
              >
                Ocultar
              </button>
            </div>
          </div>
        </div>
      </div>

      <CookieSettingsModal 
        isOpen={showSettings} 
        onClose={() => setShowSettings(false)} 
      />
    </>
  );
};


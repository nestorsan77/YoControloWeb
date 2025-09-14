"use client";
import { useState, useEffect } from 'react';

export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  personalization: boolean;
}

export interface CookieConsent {
  preferences: CookiePreferences;
  timestamp: string;
  version: string;
}

export const useCookieConsent = () => {
  const [consent, setConsent] = useState<CookieConsent | null>(null);
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    const savedConsent = localStorage.getItem('yocontrolo-cookie-consent');
    if (savedConsent) {
      try {
        const parsedConsent = JSON.parse(savedConsent);
        setConsent(parsedConsent);
        setHasConsent(true);
        
        // Activar servicios basados en las preferencias
        activateServices(parsedConsent.preferences);
      } catch (error) {
        console.error('Error parsing cookie consent:', error);
        localStorage.removeItem('yocontrolo-cookie-consent');
      }
    }
  }, []);

  const activateServices = (preferences: CookiePreferences) => {
    // Google Analytics
    if (preferences.analytics && window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
    }

    // Aquí puedes agregar más servicios
    if (preferences.marketing) {
      // Activar píxeles de marketing, etc.
    }

    if (preferences.personalization) {
      // Activar servicios de personalización
    }
  };

  const updateConsent = (preferences: CookiePreferences) => {
    const newConsent: CookieConsent = {
      preferences,
      timestamp: new Date().toISOString(),
      version: '1.0'
    };

    localStorage.setItem('yocontrolo-cookie-consent', JSON.stringify(newConsent));
    setConsent(newConsent);
    setHasConsent(true);
    activateServices(preferences);
  };

  const revokeConsent = () => {
    localStorage.removeItem('yocontrolo-cookie-consent');
    setConsent(null);
    setHasConsent(false);
    
    // Desactivar servicios
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'denied'
      });
    }
  };

  return {
    consent,
    hasConsent,
    updateConsent,
    revokeConsent
  };
};
'use client';

import { useMemo, useSyncExternalStore } from 'react';

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

const STORAGE_KEY = 'yocontrolo-cookie-consent';
const CONSENT_EVENT = 'yocontrolo:cookie-consent';
const PENDING_SNAPSHOT = '__pending__';

function subscribe(onStoreChange: () => void) {
  window.addEventListener(CONSENT_EVENT, onStoreChange);
  window.addEventListener('storage', onStoreChange);
  return () => {
    window.removeEventListener(CONSENT_EVENT, onStoreChange);
    window.removeEventListener('storage', onStoreChange);
  };
}

function getSnapshot() {
  return window.localStorage.getItem(STORAGE_KEY) ?? '';
}

function getServerSnapshot() {
  return PENDING_SNAPSHOT;
}

function activateServices(preferences: CookiePreferences) {
  window.gtag?.('consent', 'update', {
    analytics_storage: preferences.analytics ? 'granted' : 'denied',
  });
}

function parseConsent(raw: string): CookieConsent | null {
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as CookieConsent;
    return parsed?.preferences?.necessary ? parsed : null;
  } catch {
    return null;
  }
}

export function useCookieConsent() {
  const rawConsent = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const consent = useMemo(() => parseConsent(rawConsent), [rawConsent]);
  const isReady = rawConsent !== PENDING_SNAPSHOT;

  function updateConsent(preferences: CookiePreferences) {
    const nextConsent: CookieConsent = {
      preferences: { ...preferences, necessary: true },
      timestamp: new Date().toISOString(),
      version: '1.0',
    };
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextConsent));
    activateServices(nextConsent.preferences);
    window.dispatchEvent(new Event(CONSENT_EVENT));
  }

  function revokeConsent() {
    window.localStorage.removeItem(STORAGE_KEY);
    activateServices({ necessary: true, analytics: false, marketing: false, personalization: false });
    window.dispatchEvent(new Event(CONSENT_EVENT));
  }

  return { consent, hasConsent: consent !== null, isReady, updateConsent, revokeConsent };
}

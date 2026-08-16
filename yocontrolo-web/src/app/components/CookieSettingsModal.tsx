'use client';

import { useState } from 'react';
import { Cookie, X } from 'lucide-react';
import { type CookiePreferences, useCookieConsent } from '../hooks/useCookieConsent';
import type { Locale } from '../i18n';

const initial: CookiePreferences = { necessary: true, analytics: false, marketing: false, personalization: false };

export function CookieSettingsModal({ onClose, locale }: { onClose: () => void; locale: Locale }) {
  const { consent, updateConsent } = useCookieConsent();
  const [preferences, setPreferences] = useState<CookiePreferences>(() => consent?.preferences ?? initial);
  const copy = locale === 'es' ? { eyebrow: 'PRIVACIDAD', title: 'Preferencias de cookies', necessary: 'Necesarias', necessaryText: 'Imprescindibles para el funcionamiento de la web.', always: 'Siempre', change: 'Puedes cambiar esta elección cuando quieras.', cancel: 'Cancelar', save: 'Guardar cambios', close: 'Cerrar' } : { eyebrow: 'PRIVACY', title: 'Cookie preferences', necessary: 'Essential', necessaryText: 'Required for the website to work.', always: 'Always', change: 'You can change this choice at any time.', cancel: 'Cancel', save: 'Save changes', close: 'Close' };
  const options: Array<[keyof CookiePreferences, string]> = locale === 'es' ? [['analytics','Analítica'],['marketing','Marketing'],['personalization','Personalización']] : [['analytics','Analytics'],['marketing','Marketing'],['personalization','Personalisation']];

  return <div className="yc-cookie-backdrop"><section className="yc-cookie-panel is-settings" role="dialog" aria-modal="true" aria-labelledby="cookie-settings-title"><header><span><Cookie/></span><div><small>{copy.eyebrow}</small><h2 id="cookie-settings-title">{copy.title}</h2></div><button className="yc-cookie-close" onClick={onClose} aria-label={copy.close}><X/></button></header><div className="yc-cookie-options"><div><span><b>{copy.necessary}</b><small>{copy.necessaryText}</small></span><em>{copy.always}</em></div>{options.map(([key,label]) => <label key={key}><span><b>{label}</b><small>{copy.change}</small></span><input type="checkbox" checked={preferences[key]} onChange={() => setPreferences((value) => ({ ...value, [key]: !value[key] }))}/><i/></label>)}</div><footer><button className="yc-cookie-plain" onClick={onClose}>{copy.cancel}</button><button className="yc-button yc-button-primary" onClick={() => { updateConsent(preferences); onClose(); }}>{copy.save}</button></footer></section></div>;
}

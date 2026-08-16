'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Cookie, Settings, ShieldCheck } from 'lucide-react';
import { type CookiePreferences, useCookieConsent } from '../hooks/useCookieConsent';
import type { Locale } from '../i18n';

const initial: CookiePreferences = { necessary: true, analytics: false, marketing: false, personalization: false };

export function CookieConsent({ locale }: { locale: Locale }) {
  const { hasConsent, isReady, updateConsent } = useCookieConsent();
  const [details, setDetails] = useState(false);
  const [preferences, setPreferences] = useState(initial);
  if (!isReady || hasConsent) return null;

  const copy = locale === 'es' ? {
    eyebrow: 'CONTROL DE PRIVACIDAD', title: 'Tú eliges las cookies.', description: 'Usamos las necesarias para que la web funcione. La analítica solo se carga si la autorizas expresamente.',
    necessary: 'Necesarias', necessaryText: 'Sesión, seguridad y preferencias básicas.', always: 'Siempre', policy: 'Leer política de cookies', only: 'Solo necesarias', save: 'Guardar elección', customize: 'Personalizar', accept: 'Aceptar todas',
    choices: [['analytics', 'Analítica', 'Nos ayuda a entender qué partes de la web resultan útiles.'], ['marketing', 'Marketing', 'Reservado para medir campañas si se activan en el futuro.'], ['personalization', 'Personalización', 'Recuerda preferencias no esenciales de la experiencia.']],
  } : {
    eyebrow: 'PRIVACY CONTROL', title: 'You choose the cookies.', description: 'We use essential cookies to make the website work. Analytics only loads when you explicitly allow it.',
    necessary: 'Essential', necessaryText: 'Session, security and basic preferences.', always: 'Always', policy: 'Read the cookie policy', only: 'Essential only', save: 'Save choices', customize: 'Customise', accept: 'Accept all',
    choices: [['analytics', 'Analytics', 'Helps us understand which parts of the website are useful.'], ['marketing', 'Marketing', 'Reserved for campaign measurement if enabled in the future.'], ['personalization', 'Personalisation', 'Remembers non-essential experience preferences.']],
  };
  const choices = copy.choices as Array<[keyof CookiePreferences, string, string]>;

  return <div className="yc-cookie-backdrop" role="presentation"><section className="yc-cookie-panel" role="dialog" aria-modal="true" aria-labelledby="cookie-title">
    <header><span><Cookie/></span><div><small>{copy.eyebrow}</small><h2 id="cookie-title">{copy.title}</h2></div></header>
    <p>{copy.description}</p>
    {details && <div className="yc-cookie-options"><div><span><ShieldCheck/><b>{copy.necessary}</b><small>{copy.necessaryText}</small></span><em>{copy.always}</em></div>{choices.map(([key,label,text]) => <label key={key}><span><b>{label}</b><small>{text}</small></span><input type="checkbox" checked={preferences[key]} onChange={() => setPreferences((value) => ({ ...value, [key]: !value[key] }))}/><i/></label>)}</div>}
    <Link href="/privacy#cookies">{copy.policy}</Link>
    <footer><button className="yc-cookie-plain" onClick={() => updateConsent(initial)}>{copy.only}</button>{details ? <button className="yc-button yc-button-primary" onClick={() => updateConsent(preferences)}>{copy.save}</button> : <><button className="yc-cookie-settings" onClick={() => setDetails(true)}><Settings/>{copy.customize}</button><button className="yc-button yc-button-primary" onClick={() => updateConsent({ necessary: true, analytics: true, marketing: true, personalization: true })}>{copy.accept}</button></>}</footer>
  </section></div>;
}

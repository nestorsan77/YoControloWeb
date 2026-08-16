'use client';

import { useState } from 'react';
import { Cookie } from 'lucide-react';
import { useCookieConsent } from '../hooks/useCookieConsent';
import { CookieSettingsModal } from './CookieSettingsModal';
import type { Locale } from '../i18n';

export function CookieNotification({ locale }: { locale: Locale }) {
  const { hasConsent } = useCookieConsent();
  const [open, setOpen] = useState(false);
  if (!hasConsent) return null;
  return <><button className="yc-cookie-fab" onClick={() => setOpen(true)} aria-label={locale === 'es' ? 'Configurar cookies' : 'Cookie settings'}><Cookie/></button>{open && <CookieSettingsModal locale={locale} onClose={() => setOpen(false)}/>}</>;
}

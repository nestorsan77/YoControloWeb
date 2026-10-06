 'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useCookieConsent } from '../hooks/useCookieConsent';

type AnalyticsProps = { measurementId?: string };

export default function Analytics({ measurementId }: AnalyticsProps) {
  const { consent } = useCookieConsent();
  const allowed = consent?.preferences?.analytics === true;
  const validId = measurementId && /^G-[A-Z0-9]+$/.test(measurementId) ? measurementId : undefined;
  const pathname = usePathname();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!validId) return;
    const flags = window as unknown as Record<string, unknown>;
    flags[`ga-disable-${validId}`] = !allowed;
    window.gtag?.('consent', 'update', { analytics_storage: allowed ? 'granted' : 'denied' });
    if (!allowed) {
      // Stop an already-loaded tag and remove first-party GA cookies on withdrawal.
      const domains = ['', window.location.hostname, ...window.location.hostname.split('.').slice(1).map((_, i) => '.' + window.location.hostname.split('.').slice(i + 1).join('.'))];
      for (const cookie of document.cookie.split(';')) {
        const name = cookie.trim().split('=')[0];
        if (!/^_ga(?:_|$)/.test(name)) continue;
        for (const domain of domains) document.cookie = `${name}=; Max-Age=0; path=/;${domain ? ` domain=${domain};` : ''}`;
      }
    }
  }, [allowed, validId]);

  useEffect(() => {
    if (!allowed || !ready || !validId) return;
    // Do not send URL queries, fragments, mail addresses or arbitrary link labels.
    window.gtag?.('event', 'page_view', {
      send_to: validId, page_location: window.location.origin + pathname, page_title: document.title,
    });
    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as Element | null)?.closest?.('a');
      if (!anchor) return;
      const destination = new URL(anchor.href, window.location.origin);
      if (destination.hostname === 'app.yocontrolo.net') {
        window.gtag?.('event', 'open_app', { send_to: validId, source_path: pathname });
      } else if (destination.protocol === 'mailto:') {
        window.gtag?.('event', 'contact_click', { send_to: validId, source_path: pathname });
      } else if (destination.protocol === 'https:' && destination.origin !== window.location.origin) {
        window.gtag?.('event', 'outbound_click', { send_to: validId, destination_host: destination.hostname });
      }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [allowed, ready, validId, pathname]);

  if (!validId || !allowed) return null;
  return <Script id="yocontrolo-ga" strategy="afterInteractive"
    src={`https://www.googletagmanager.com/gtag/js?id=${validId}`}
    onReady={() => {
      // Consent may have changed while the script was downloading.
      try {
        if (JSON.parse(localStorage.getItem('yocontrolo-cookie-consent') || '{}')?.preferences?.analytics !== true) return;
      } catch { return; }
      window.dataLayer = window.dataLayer || [];
      // gtag expects an Arguments object in the data layer.
      // eslint-disable-next-line prefer-rest-params
      window.gtag = function () { window.dataLayer!.push(arguments); };
      window.gtag('consent', 'default', { analytics_storage: 'granted', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
      window.gtag('js', new Date());
      window.gtag('config', validId, { page_location: window.location.origin + window.location.pathname, page_referrer: document.referrer ? new URL(document.referrer).origin + new URL(document.referrer).pathname : '', send_page_view: false, allow_google_signals: false, allow_ad_personalization_signals: false });
      setReady(true);
    }} />;
}

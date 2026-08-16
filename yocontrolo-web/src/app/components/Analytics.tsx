'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

type AnalyticsProps = { measurementId?: string };

function analyticsAllowed() {
  try {
    const raw = localStorage.getItem('yocontrolo-cookie-consent');
    return raw ? Boolean(JSON.parse(raw)?.preferences?.analytics) : false;
  } catch {
    return false;
  }
}

export default function Analytics({ measurementId }: AnalyticsProps) {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const refresh = () => setAllowed(analyticsAllowed());
    refresh();
    window.addEventListener('yocontrolo:cookie-consent', refresh);
    return () => window.removeEventListener('yocontrolo:cookie-consent', refresh);
  }, []);

  if (!measurementId || !allowed) return null;
  return <>
    <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} />
    <Script id="google-analytics" strategy="afterInteractive">{`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${measurementId}', { anonymize_ip: true });
    `}</Script>
  </>;
}

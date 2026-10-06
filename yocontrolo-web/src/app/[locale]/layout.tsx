import SiteStructuredData from '@/app/components/SiteStructuredData';
import type { Metadata, Viewport } from 'next';
import '@/app/globals.css';
import ClientLayout from '@/app/ClientLayout';
import { CookieConsent } from '@/app/components/CookieConsent';
import { CookieNotification } from '@/app/components/CookieNotification';
import Analytics from '@/app/components/Analytics';
import { getLocale } from '@/app/i18n.server';
import { PUBLIC_SITE_URL } from '@/app/site';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const locale = await getLocale(params.then(value => ({ locale: value.locale || 'es' })));
  const isSpanish = locale === 'es';
  const title = isSpanish ? 'YoControlo · Todas tus cuentas, bajo control' : 'YoControlo · All your accounts, under control';
  const description = isSpanish ? 'Organiza cuentas, movimientos, gastos recurrentes, deudas y planes compartidos desde una sola aplicación financiera.' : 'Organise accounts, movements, recurring expenses, debts and shared plans from one financial app.';
  return {
    metadataBase: new URL(PUBLIC_SITE_URL),
    title: { default: title, template: '%s · YoControlo' },
    description,
    keywords: isSpanish ? ['finanzas personales', 'control de gastos', 'cuentas bancarias', 'gastos compartidos', 'pagos recurrentes'] : ['personal finance', 'expense tracking', 'bank accounts', 'shared expenses', 'recurring payments'],
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
    authors: [{ name: 'YoControlo' }],
    openGraph: { title, description, url: PUBLIC_SITE_URL, siteName: 'YoControlo', locale: isSpanish ? 'es_ES' : 'en_GB', type: 'website' },
    twitter: { card: 'summary', title, description },
    icons: { icon: '/brand/gato-custodio-app.svg', apple: '/brand/gato-custodio-app.svg' },
    verification: { google: 'sp4rNgkbygN1SS6c-TvUrIgB2IazXvINNGP2KbIQeYo' },
  };
}

export const viewport: Viewport = { themeColor: '#17212B', colorScheme: 'light dark' };

export default async function RootLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ locale?: string }> }>) {
  const locale = await getLocale(params.then(value => ({ locale: value.locale || 'es' })));
  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <SiteStructuredData locale={locale} />
        <Analytics measurementId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />
        <ClientLayout locale={locale}>{children}</ClientLayout>
        <CookieConsent locale={locale} />
        <CookieNotification locale={locale} />
      </body>
    </html>
  );
}

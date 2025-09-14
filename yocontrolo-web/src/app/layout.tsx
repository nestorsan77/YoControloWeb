import './globals.css';
import ClientLayout from './ClientLayout';
import Script from 'next/script';
import Head from 'next/head';

export const metadata = {
  title: 'YoControlo - Gestiona tus finanzas personales fácilmente',
  description:
    'Organiza tus gastos e ingresos, controla pagos recurrentes y visualiza tus finanzas con gráficos claros y filtros personalizables. Tu gestor financiero todo en uno.',
  keywords: [
    'finanzas personales',
    'gestor de gastos',
    'control de ingresos',
    'ahorro',
    'presupuesto',
    'pagos recurrentes',
    'gráficos financieros',
  ],
  authors: [{ name: 'YoControlo Team' }],
  openGraph: {
    title: 'YoControlo - Gestiona tus finanzas personales fácilmente',
    description:
      'Controla tus gastos, ingresos y pagos recurrentes con gráficos claros y herramientas sencillas. Optimiza tu dinero con YoControlo.',
    url: 'https://yocontrolo.com',
    siteName: 'YoControlo',
    images: [
      {
        url: 'https://yocontrolo.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'YoControlo App - Controla tus finanzas',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YoControlo - Gestiona tus finanzas personales',
    description:
      'Registra gastos e ingresos, controla pagos recurrentes y visualiza tus finanzas fácilmente.',
    images: ['https://yocontrolo.com/twitter-card.jpg'],
    creator: '@yocontrolo',
  },
  icons: {
  icon: '/images/YoControlo.ico',
  apple: '/images/YoControlo.png',
  other: [
    { rel: 'icon', url: '/images/YoControlo.png', sizes: '192x192' },
    { rel: 'icon', url: '/images/YoControlo.png', sizes: '512x512' },
  ],
},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

  return (
    <html lang="es" className="scroll-smooth">
      <Head>
        <meta
          name="google-site-verification"
          content="sp4rNgkbygN1SS6c-TvUrIgB2IazXvINNGP2KbIQeYo"
        />
      </Head>
      <body className="bg-white dark:bg-[var(--background)] text-gray-900 dark:text-[var(--foreground)] font-sans antialiased transition-colors duration-500">
        {/* Google Analytics */}
        {GA_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}');
                `,
              }}
            />
          </>
        )}

        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}


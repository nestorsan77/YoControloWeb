// src/app/page.tsx
import LayoutClient from './LayoutClient'; // Cliente separado

export const metadata = {
  title: 'YoControlo – Gestiona tus finanzas personales fácilmente',
  description: 'Organiza tus gastos e ingresos, controla pagos recurrentes y analiza tu ahorro con gráficos claros. Tu gestor financiero todo en uno.',
  keywords: [
    'finanzas personales',
    'gestor de gastos',
    'control de ingresos',
    'ahorro',
    'presupuesto',
    'pagos recurrentes',
    'gráficos financieros',
  ],
  openGraph: {
    title: 'YoControlo – Gestiona tus finanzas personales fácilmente',
    description: 'Controla tus gastos, ingresos y pagos recurrentes con gráficos claros y herramientas sencillas. Optimiza tu dinero con YoControlo.',
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
    title: 'YoControlo – Gestiona tus finanzas personales',
    description: 'Registra gastos e ingresos, controla pagos recurrentes y visualiza tus finanzas fácilmente.',
    images: ['https://yocontrolo.com/twitter-card.jpg'],
    creator: '@yocontrolo',
  },
};

export default function Page() {
  return <LayoutClient />;
}

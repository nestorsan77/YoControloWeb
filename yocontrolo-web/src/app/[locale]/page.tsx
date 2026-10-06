import { pageMetadata } from '@/app/seo';
import type { Metadata } from 'next';
import LayoutClient from '@/app/LayoutClient';
import { getLocale } from '@/app/i18n.server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const locale = await getLocale(params);
  return pageMetadata('/', locale,
    locale === 'es' ? 'App de finanzas personales y control de gastos' : 'Personal finance and expense tracking app',
    locale === 'es' ? 'Organiza tus cuentas, ingresos, gastos recurrentes, deudas y gastos compartidos con YoControlo. Disponible en web y móvil, sin conectar tus bancos.' : 'Organise accounts, income, recurring expenses, debts and shared spending with YoControlo. Available on web and mobile, without connecting your banks.');
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await getLocale(params);
  return <LayoutClient locale={locale} />;
}

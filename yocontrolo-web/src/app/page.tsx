import type { Metadata } from 'next';
import LayoutClient from './LayoutClient';
import { getLocale } from './i18n.server';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return locale === 'es' ? {
    title: 'Todas tus cuentas, bajo control',
    description: 'Centraliza la visión de tus cuentas, movimientos, gastos recurrentes, deudas y gastos compartidos con YoControlo.',
    alternates: { canonical: '/' },
  } : {
    title: 'All your accounts, under control',
    description: 'Bring accounts, movements, recurring expenses, debts and shared spending together with YoControlo.',
    alternates: { canonical: '/' },
  };
}

export default async function Page() {
  const locale = await getLocale();
  return <LayoutClient locale={locale} />;
}

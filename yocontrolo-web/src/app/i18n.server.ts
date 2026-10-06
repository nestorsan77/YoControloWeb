import { notFound } from 'next/navigation';
import type { Locale } from './i18n';

export type LocaleParams = { params: Promise<{ locale: string }> };

export async function getLocale(params: Promise<{ locale: string }>): Promise<Locale> {
  const { locale } = await params;
  if (locale !== 'es' && locale !== 'en') notFound();
  return locale;
}

import { cookies, headers } from 'next/headers';
import { isLocale, localeFromAcceptLanguage, LOCALE_COOKIE, type Locale } from './i18n';

export async function getLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const savedLocale = cookieStore.get(LOCALE_COOKIE)?.value;
  if (isLocale(savedLocale)) return savedLocale;

  const headerStore = await headers();
  return localeFromAcceptLanguage(headerStore.get('accept-language'));
}

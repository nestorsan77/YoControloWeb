'use server';

import { cookies } from 'next/headers';
import { isLocale, LOCALE_COOKIE, type Locale } from '../i18n';

export async function saveLocalePreference(locale: Locale) {
  if (!isLocale(locale)) throw new Error('Unsupported locale');

  const cookieStore = await cookies();
  cookieStore.set({
    name: LOCALE_COOKIE,
    value: locale,
    maxAge: 60 * 60 * 24 * 365,
    path: '/',
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
  });
}

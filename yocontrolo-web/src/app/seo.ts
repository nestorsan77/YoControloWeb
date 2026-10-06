import type { Metadata } from 'next';
import type { Locale } from './i18n';
import { localizedPath } from './localized-path';
import { PUBLIC_SITE_URL } from './site';

export function pageAlternates(path: string, locale: Locale) {
  return {
    canonical: new URL(localizedPath(path, locale), PUBLIC_SITE_URL).href,
    languages: {
      es: new URL(localizedPath(path, 'es'), PUBLIC_SITE_URL).href,
      en: new URL(localizedPath(path, 'en'), PUBLIC_SITE_URL).href,
      'x-default': new URL(localizedPath(path, 'es'), PUBLIC_SITE_URL).href,
    },
  };
}

export function pageMetadata(path: string, locale: Locale, title: string, description: string): Metadata {
  return {
    title, description, alternates: pageAlternates(path, locale),
    openGraph: {
      title, description, url: new URL(localizedPath(path, locale), PUBLIC_SITE_URL).href,
      siteName: 'YoControlo', type: 'website', locale: locale === 'es' ? 'es_ES' : 'en_GB',
      alternateLocale: locale === 'es' ? ['en_GB'] : ['es_ES'],
    },
    twitter: { card: 'summary', title, description },
  };
}

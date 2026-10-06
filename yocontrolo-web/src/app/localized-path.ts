import type { Locale } from './i18n';

export function unlocalizedPath(path: string): string {
  return path.replace(/^\/en(?=\/|$|[?#])/, '') || '/';
}

export function localizedPath(path: string, locale: Locale): string {
  if (!path.startsWith('/') || path.startsWith('//')) return path;
  const base = unlocalizedPath(path);
  return locale === 'en' ? `/en${base === '/' ? '' : base}` : base;
}

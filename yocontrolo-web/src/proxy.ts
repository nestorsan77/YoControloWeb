import { NextResponse, type NextRequest } from 'next/server';
import { isLocale, localeFromAcceptLanguage, LOCALE_COOKIE } from './app/i18n';

export function proxy(request: NextRequest) {
  const savedLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  if (isLocale(savedLocale)) return NextResponse.next();

  const response = NextResponse.next();
  response.cookies.set({
    name: LOCALE_COOKIE,
    value: localeFromAcceptLanguage(request.headers.get('accept-language')),
    maxAge: 60 * 60 * 24 * 365,
    path: '/',
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
  });
  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)'],
};

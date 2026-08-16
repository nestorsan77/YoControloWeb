'use client';

import NavMenu from './components/NavMenu';
import Footer from './components/Footer';
import type { Locale } from './i18n';

export default function ClientLayout({ children, locale }: { children: React.ReactNode; locale: Locale }) {
  return (
    <>
      <NavMenu locale={locale} />
      <main className="yc-site-content">{children}</main>
      <Footer locale={locale} />
    </>
  );
}

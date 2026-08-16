'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Check, ChevronDown, Globe2, LogIn, Menu, Moon, Sun, X } from 'lucide-react';
import Brand from './Brand';
import { commonMessages, type Locale } from '../i18n';
import { saveLocalePreference } from '../actions/locale';

export default function NavMenu({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const languageControlRef = useRef<HTMLDivElement>(null);
  const messages = commonMessages[locale];
  const links = [
    { label: messages.home, href: '/' },
    { label: messages.product, href: '/gestion-finanzas-personales' },
    { label: messages.pricing, href: '/precios' },
    { label: messages.about, href: '/sobre-nosotros' },
    { label: messages.blog, href: '/blog' },
    { label: messages.help, href: '/contacto' },
  ];

  useEffect(() => {
    const cookieTheme = document.cookie.match(/(?:^|; )theme=(dark|light)/)?.[1];
    const nextDark = cookieTheme ? cookieTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.toggle('dark', nextDark);
    const frame = window.requestAnimationFrame(() => setDark(nextDark));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        setLanguageOpen(false);
      }
    };
    const closeOnOutsidePress = (event: PointerEvent) => {
      if (!languageControlRef.current?.contains(event.target as Node)) setLanguageOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    document.addEventListener('pointerdown', closeOnOutsidePress);
    return () => {
      window.removeEventListener('keydown', closeOnEscape);
      document.removeEventListener('pointerdown', closeOnOutsidePress);
    };
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    document.cookie = `theme=${next ? 'dark' : 'light'}; max-age=315360000; path=/; SameSite=Lax`;
  }

  async function selectLocale(nextLocale: Locale) {
    setLanguageOpen(false);
    if (nextLocale === locale) return;
    setOpen(false);
    await saveLocalePreference(nextLocale);
    router.refresh();
  }

  return (
    <header className="yc-site-header">
      <nav className="yc-site-nav" aria-label={messages.navigation}>
        <Brand locale={locale} />
        <div className={`yc-site-links ${open ? 'is-open' : ''}`}>
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={pathname === link.href ? 'is-active' : ''} onClick={() => { setOpen(false); setLanguageOpen(false); }}>
              {link.label}
            </Link>
          ))}
          <Link className="yc-button yc-button-secondary yc-nav-login" href="https://app.yocontrolo.net/" onClick={() => setOpen(false)}><LogIn />{messages.login}</Link>
          <Link className="yc-button yc-button-primary yc-nav-cta" href="https://app.yocontrolo.net/" onClick={() => setOpen(false)}>{messages.signup}</Link>
        </div>
        <div className="yc-nav-tools">
          <div className="yc-language-control" ref={languageControlRef}>
            <button type="button" className="yc-language-switch" onClick={() => { setLanguageOpen((value) => !value); setOpen(false); }} aria-label={messages.chooseLanguage} aria-haspopup="menu" aria-expanded={languageOpen}>
              <Globe2 /><span>{messages.languageShort}</span><ChevronDown className={languageOpen ? 'is-open' : ''} />
            </button>
            {languageOpen && <div className="yc-language-menu" role="menu" aria-label={messages.chooseLanguage}>
              <div className="yc-language-menu-title"><Globe2/><span><small>YoControlo</small><strong>{messages.languageTitle}</strong></span></div>
              {([['es', messages.spanish], ['en', messages.english]] as const).map(([code, label]) => {
                const selected = locale === code;
                return <button key={code} type="button" role="menuitemradio" aria-checked={selected} onClick={() => selectLocale(code)} className={selected ? 'is-selected' : ''}>
                  <span className="yc-language-code">{code.toUpperCase()}</span>
                  <span className="yc-language-name"><strong>{label}</strong><small>{selected ? messages.selectedLanguage : code === 'es' ? 'Spanish' : 'English'}</small></span>
                  {selected && <Check />}
                </button>;
              })}
            </div>}
          </div>
          <button type="button" onClick={toggleTheme} aria-label={dark ? messages.lightMode : messages.darkMode}>
            {dark ? <Sun /> : <Moon />}
          </button>
          <button type="button" className="yc-menu-toggle" onClick={() => { setOpen((value) => !value); setLanguageOpen(false); }} aria-expanded={open} aria-label={open ? messages.closeMenu : messages.openMenu}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
    </header>
  );
}

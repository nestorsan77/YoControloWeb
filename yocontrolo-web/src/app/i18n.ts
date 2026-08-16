export const locales = ['es', 'en'] as const;

export type Locale = (typeof locales)[number];

export const LOCALE_COOKIE = 'yocontrolo-locale';

export function isLocale(value: string | undefined): value is Locale {
  return value === 'es' || value === 'en';
}

export function localeFromAcceptLanguage(header: string | null | undefined): Locale {
  if (!header) return 'en';

  const languages = header
    .split(',')
    .map((part, index) => {
      const [tag, ...parameters] = part.trim().toLowerCase().split(';');
      const quality = parameters
        .map((parameter) => parameter.trim())
        .find((parameter) => parameter.startsWith('q='));
      const parsedQuality = quality ? Number.parseFloat(quality.slice(2)) : 1;
      return { tag, quality: Number.isFinite(parsedQuality) ? parsedQuality : 0, index };
    })
    .filter(({ quality }) => quality > 0)
    .sort((a, b) => b.quality - a.quality || a.index - b.index);

  for (const { tag } of languages) {
    const baseLanguage = tag.split('-')[0];
    if (baseLanguage === 'es') return 'es';
    if (baseLanguage === 'en') return 'en';
  }

  return 'en';
}

export const commonMessages = {
  es: {
    home: 'Inicio', product: 'Producto', pricing: 'Precios', about: 'Nosotros', blog: 'Blog', help: 'Ayuda',
    login: 'Entrar', signup: 'Crear cuenta', lightMode: 'Activar modo claro', darkMode: 'Activar modo oscuro',
    openMenu: 'Abrir menú', closeMenu: 'Cerrar menú', navigation: 'Navegación principal',
    changeTo: 'Cambiar idioma a inglés', languageShort: 'ES', chooseLanguage: 'Seleccionar idioma', languageTitle: 'Idioma', spanish: 'Español', english: 'English', selectedLanguage: 'Idioma seleccionado', tagline: 'Todas tus cuentas, bajo control',
    footerDescription: 'Una sola vista para entender el dinero repartido entre tus cuentas, tus pagos recurrentes y tus planes compartidos.',
    features: 'Funciones', openApp: 'Abrir la app', contact: 'Contacto', legal: 'Legal', privacy: 'Privacidad', terms: 'Términos de uso',
    cookieSettings: 'Configurar cookies', footerNote: 'Hecho con calma para tomar mejores decisiones.',
  },
  en: {
    home: 'Home', product: 'Product', pricing: 'Pricing', about: 'About us', blog: 'Blog', help: 'Help',
    login: 'Sign in', signup: 'Create account', lightMode: 'Switch to light mode', darkMode: 'Switch to dark mode',
    openMenu: 'Open menu', closeMenu: 'Close menu', navigation: 'Main navigation',
    changeTo: 'Cambiar idioma a español', languageShort: 'EN', chooseLanguage: 'Choose language', languageTitle: 'Language', spanish: 'Español', english: 'English', selectedLanguage: 'Selected language', tagline: 'All your accounts, under control',
    footerDescription: 'One clear view of the money spread across your accounts, recurring payments and shared plans.',
    features: 'Features', openApp: 'Open the app', contact: 'Contact', legal: 'Legal', privacy: 'Privacy', terms: 'Terms of use',
    cookieSettings: 'Cookie settings', footerNote: 'Built calmly, for better decisions.',
  },
} as const;

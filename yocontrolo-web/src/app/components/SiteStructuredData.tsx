import type { Locale } from '../i18n';
import { localizedPath } from '../localized-path';
import { PUBLIC_SITE_URL } from '../site';

export default function SiteStructuredData({ locale }: { locale: Locale }) {
  const url = new URL(localizedPath('/', locale), PUBLIC_SITE_URL).href;
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Organization', '@id': `${PUBLIC_SITE_URL}/#organization`, name: 'YoControlo', url: PUBLIC_SITE_URL,
        logo: `${PUBLIC_SITE_URL}/brand/gato-custodio-app.svg`, email: 'soporte@yocontrolo.net' },
      { '@type': 'WebSite', '@id': `${url}#website`, name: 'YoControlo', url, inLanguage: locale,
        publisher: { '@id': `${PUBLIC_SITE_URL}/#organization` } },
      { '@type': 'SoftwareApplication', '@id': `${PUBLIC_SITE_URL}/#application`, name: 'YoControlo',
        url: 'https://app.yocontrolo.net/', applicationCategory: 'FinanceApplication', operatingSystem: 'Web, Android',
        description: locale === 'es'
          ? 'Aplicación para registrar cuentas, ingresos, gastos recurrentes, deudas y gastos compartidos sin conectar bancos.'
          : 'An app to record accounts, income, recurring expenses, debts and shared spending without connecting banks.',
        publisher: { '@id': `${PUBLIC_SITE_URL}/#organization` } },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, '\\u003c') }} />;
}

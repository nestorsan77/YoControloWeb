import Link from './LocalizedLink';
import { Mail } from 'lucide-react';
import Brand from './Brand';
import { commonMessages, type Locale } from '../i18n';

export default function Footer({ locale }: { locale: Locale }) {
  const messages = commonMessages[locale];
  const columns = [
    { title: messages.product, links: [[messages.features, '/gestion-finanzas-personales'], [locale === 'es' ? 'Control de gastos' : 'Expense tracking', '/control-de-gastos'], [locale === 'es' ? 'Gastos compartidos' : 'Shared expenses', '/gastos-compartidos'], [locale === 'es' ? 'Pagos recurrentes' : 'Recurring payments', '/pagos-recurrentes'], [messages.pricing, '/precios'], [messages.openApp, 'https://app.yocontrolo.net/']] },
    { title: 'YoControlo', links: [[messages.about, '/sobre-nosotros'], [messages.blog, '/blog'], [messages.contact, '/contacto']] },
    { title: messages.legal, links: [[messages.privacy, '/privacy'], [messages.terms, '/terms'], [messages.cookieSettings, '/privacy#cookies']] },
  ];
  return (
    <footer className="yc-site-footer">
      <div className="yc-footer-main">
        <div className="yc-footer-intro">
          <Brand inverse locale={locale} />
          <p>{messages.footerDescription}</p>
          <a href="mailto:soporte@yocontrolo.net"><Mail /> soporte@yocontrolo.net</a>
        </div>
        <div className="yc-footer-links">
          {columns.map((column) => <div key={column.title}><strong>{column.title}</strong>{column.links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</div>)}
        </div>
      </div>
      <div className="yc-footer-bottom">
        <span>© {new Date().getFullYear()} YoControlo</span>
        <span>{messages.footerNote}</span>
      </div>
    </footer>
  );
}

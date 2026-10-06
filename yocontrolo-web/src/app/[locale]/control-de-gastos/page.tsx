import type { Metadata } from 'next';
import Link from '@/app/components/LocalizedLink';
import { ArrowRight, WalletCards } from 'lucide-react';
import PageHero from '@/app/components/PageHero';
import { getLocale } from '@/app/i18n.server';
import { pageMetadata } from '@/app/seo';

const content = {"es": ["Control de gastos personales", "Organiza tus ingresos y gastos por cuenta y categoría. YoControlo reúne movimientos y saldos sin conectar tus bancos.", "Entiende en qué se va tu dinero.", "Registra tus movimientos y consulta una visión conjunta de tus cuentas para revisar tus gastos con contexto.", [["Registra ingresos y gastos", "Añade tus movimientos a la cuenta correspondiente y clasifícalos por categoría. El historial permite filtrar por fecha, tipo y categoría."], ["Revisa la evolución", "Consulta las entradas, salidas y saldos de tus cuentas desde el resumen. Utiliza tus registros para comparar lo que has gastado con lo que esperabas."], ["Haz una revisión semanal", "Reserva unos minutos para comprobar que tus movimientos están completos. Las categorías te ayudan a localizar gastos que quieres revisar; la calidad del resumen depende de los datos que registres."]], [["¿Necesito conectar mi banco?", "No. YoControlo no se conecta a tus bancos. Tú registras las cuentas y movimientos que quieres organizar."], ["¿Puedo controlar varias cuentas?", "Sí. Puedes representar distintas cuentas, como tu banco diario, ahorro o efectivo, y revisar sus movimientos en una misma aplicación."]]], "en": ["Personal expense tracking", "Organise income and expenses by account and category. YoControlo brings movements and balances together without connecting your banks.", "Understand where your money goes.", "Record movements and review your accounts together to understand spending in context.", [["Record income and expenses", "Add each movement to its account and category. Filter your history by date, movement type and category."], ["Review trends", "See income, spending and account balances in the overview. Use your records to compare actual spending with what you expected."], ["Review your records weekly", "Set aside a few minutes to check that your records are complete. Categories help identify spending to review; the overview depends on the data you enter."]], [["Do I need to connect my bank?", "No. YoControlo does not connect to your banks. You record the accounts and movements you want to organise."], ["Can I track several accounts?", "Yes. Represent several accounts, such as everyday banking, savings or cash, and review their movements in one app."]]]} as const;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const locale = await getLocale(params);
  const copy = content[locale];
  return pageMetadata('/control-de-gastos', locale, copy[0], copy[1]);
}

export default async function TopicPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await getLocale(params);
  const copy = content[locale];
  return <div className="yc-page yc-topic-page">
    <PageHero eyebrow={copy[0]} icon={WalletCards} title={copy[2]} description={copy[3]} />
    <section className="yc-page-body yc-contact-grid">{copy[4].map(([title, text]) => <article key={title} className="yc-content-card"><h2>{title}</h2><p>{text}</p></article>)}</section>
    <section className="yc-section"><h2>{locale === 'es' ? 'Preguntas frecuentes' : 'Frequently asked questions'}</h2>{copy[5].map(([question, answer]) => <article className="yc-content-card" key={question}><h3>{question}</h3><p>{answer}</p></article>)}</section>
    <section className="yc-inline-cta"><div><h2>{locale === 'es' ? 'Organiza tus propios números' : 'Organise your own records'}</h2><p>{locale === 'es' ? 'Consulta todas las funciones y la disponibilidad actual antes de empezar.' : 'Review all features and current availability before getting started.'}</p><Link href="/gestion-finanzas-personales">{locale === 'es' ? 'Todas las funciones' : 'All features'}</Link> · <Link href="/precios">{locale === 'es' ? 'Planes disponibles' : 'Available plans'}</Link></div><Link className="yc-button yc-button-primary" href="https://app.yocontrolo.net/">{locale === 'es' ? 'Abrir la app' : 'Open the app'}<ArrowRight /></Link></section>
    <nav className="yc-section" aria-label={locale === 'es' ? 'Temas relacionados' : 'Related topics'}>
      <Link href="/control-de-gastos">{locale === 'es' ? 'Control de gastos' : 'Expense tracking'}</Link> · <Link href="/gastos-compartidos">{locale === 'es' ? 'Gastos compartidos' : 'Shared expenses'}</Link> · <Link href="/pagos-recurrentes">{locale === 'es' ? 'Pagos recurrentes' : 'Recurring payments'}</Link> · <Link href="/blog">Blog</Link>
    </nav>
  </div>;
}

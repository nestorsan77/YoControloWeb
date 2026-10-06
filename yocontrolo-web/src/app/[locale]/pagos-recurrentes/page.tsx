import type { Metadata } from 'next';
import Link from '@/app/components/LocalizedLink';
import { ArrowRight, WalletCards } from 'lucide-react';
import PageHero from '@/app/components/PageHero';
import { getLocale } from '@/app/i18n.server';
import { pageMetadata } from '@/app/seo';

const content = {"es": ["Control de gastos fijos y pagos recurrentes", "Organiza movimientos recurrentes semanales, mensuales o anuales y revisa tus gastos fijos con YoControlo.", "Ten presentes los gastos que se repiten.", "Agrupa los registros recurrentes de tu economía, como alquiler o suscripciones, para revisar lo que vence y entender tus gastos fijos.", [["Identifica tus gastos fijos", "Revisa los movimientos que se repiten y la cuenta que quieres asociar a cada registro. Comprueba importe y periodicidad antes de programarlos."], ["Programa la recurrencia", "Configura movimientos semanales, mensuales o anuales. El servidor procesa las recurrencias a su hora; esto genera registros en YoControlo, no órdenes a tu banco."], ["Comprueba los cambios", "Revisa periódicamente los registros y actualiza la información cuando cambie un importe o termine una suscripción. Contrasta siempre los datos de la aplicación con tus movimientos reales."]], [["¿Los pagos se cargan automáticamente en el banco?", "No. YoControlo programa registros de movimientos, pero no realiza cargos ni transferencias bancarias."], ["¿Qué periodicidades admite?", "Puedes organizar recurrencias semanales, mensuales o anuales."]]], "en": ["Track recurring expenses and payments", "Organise weekly, monthly or yearly recurring movements and review your fixed expenses with YoControlo.", "Keep repeating expenses in view.", "Bring recurring records, such as rent or subscriptions, together to review what is due and understand fixed spending.", [["Identify fixed expenses", "Review repeating movements and the account to associate with each record. Check the amount and frequency before scheduling."], ["Schedule the recurring record", "Configure weekly, monthly or yearly movements. The server processes schedules on time; this creates records in YoControlo, not orders to your bank."], ["Check for changes", "Review records regularly and update them when amounts change or subscriptions end. Always compare the app’s records with real movements."]], [["Are payments automatically charged to my bank?", "No. YoControlo schedules movement records, but does not make bank charges or transfers."], ["Which frequencies are supported?", "Organise weekly, monthly or yearly recurring movements."]]]} as const;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const locale = await getLocale(params);
  const copy = content[locale];
  return pageMetadata('/pagos-recurrentes', locale, copy[0], copy[1]);
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

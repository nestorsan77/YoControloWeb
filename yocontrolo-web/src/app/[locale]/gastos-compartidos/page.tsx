import type { Metadata } from 'next';
import Link from '@/app/components/LocalizedLink';
import { ArrowRight, WalletCards } from 'lucide-react';
import PageHero from '@/app/components/PageHero';
import { getLocale } from '@/app/i18n.server';
import { pageMetadata } from '@/app/seo';

const content = {"es": ["Organizar y repartir gastos compartidos", "Registra quién pagó, reparte gastos de forma igual o personalizada y consulta los balances de tu grupo en YoControlo.", "Comparte gastos con cuentas claras.", "Organiza los gastos de un viaje o un plan en grupo: quién pagó, qué parte corresponde a cada persona y qué queda por resolver.", [["Crea un grupo", "Invita a usuarios registrados para reunir los gastos de un plan compartido. Cada gasto conserva su relación con el movimiento correspondiente."], ["Registra y reparte el gasto", "Indica quién pagó y divide el total por igual o con un reparto personalizado. Solicita las confirmaciones correspondientes para que los participantes revisen el gasto."], ["Anota las devoluciones", "Cuando alguien devuelve dinero por Bizum, transferencia o efectivo, registra el acuerdo y consulta el balance por persona. YoControlo registra la información; no ejecuta el pago."]], [["¿YoControlo envía dinero?", "No. La aplicación no custodia ni mueve fondos. Las devoluciones se realizan fuera de YoControlo y se registran en la aplicación."], ["¿Todos tienen que pagar la misma parte?", "No. Puedes usar un reparto igual o personalizado según el acuerdo del grupo."]]], "en": ["Organise and split shared expenses", "Record who paid, split expenses equally or with custom amounts, and review group balances in YoControlo.", "Share expenses with clear records.", "Organise spending for a trip or group plan: who paid, each person’s share and what remains to settle.", [["Create a group", "Invite registered users to bring expenses for a shared plan together. Each expense stays linked to its corresponding movement."], ["Record and split spending", "Record who paid and divide the total equally or with custom shares. Request the relevant confirmations so participants can review the expense."], ["Record repayments", "When someone repays using Bizum, a transfer or cash, record the agreement and review balances per person. YoControlo records information; it does not execute payments."]], [["Does YoControlo send money?", "No. The app does not hold or move funds. Repayments happen outside YoControlo and are recorded in the app."], ["Does everyone have to pay the same share?", "No. Use an equal or custom split based on the group’s agreement."]]]} as const;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const locale = await getLocale(params);
  const copy = content[locale];
  return pageMetadata('/gastos-compartidos', locale, copy[0], copy[1]);
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

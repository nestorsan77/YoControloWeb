import { pageMetadata } from '@/app/seo';
import type { Metadata } from 'next';
import Link from '@/app/components/LocalizedLink';
import { ArrowRight, Check, Crown, Heart, ShieldCheck, Sparkles } from 'lucide-react';
import PageHero from '@/app/components/PageHero';
import { getLocale } from '@/app/i18n.server';

const content = {
  es: {
    metadata: ['Planes y precios', 'Empieza gratis con YoControlo y conoce los planes sin anuncios y Pro que estamos preparando.'],
    hero: ['Precios claros', 'Empieza gratis. Mejora solo si te aporta valor.', 'YoControlo ya se puede usar sin pagar. Los planes de pago todavía no están a la venta: preferimos enseñarte con honestidad qué estamos preparando.'],
    plans: [
      { name: 'Gratis', price: '0 €', note: 'Para empezar y seguir', icon: Heart, tone: 'mint', active: true, text: 'La experiencia financiera esencial para registrar y comprender tu dinero.', features: ['Cuentas y movimientos', 'Gastos fijos y deudas', 'Resumen y evolución', 'Gastos compartidos', 'Sincronización entre dispositivos'] },
      { name: 'Sin anuncios', price: '4,99 €', note: 'Pago único · previsto', icon: ShieldCheck, tone: 'gold', active: false, text: 'Para quien quiere apoyar el proyecto y mantener una experiencia limpia para siempre.', features: ['Todo lo incluido en Gratis', 'Sin espacios publicitarios', 'Una única compra', 'Precio adaptado por país cuando se lance'] },
      { name: 'Pro', price: 'Próximamente', note: 'En definición', icon: Crown, tone: 'coral', active: false, text: 'Funciones avanzadas que lanzaremos cuando aporten una ventaja real, no por llenar una tabla.', features: ['Todo lo incluido en Sin anuncios', 'Herramientas avanzadas', 'Ventajas por concretar', 'Información antes del lanzamiento'] },
    ],
    available: 'DISPONIBLE', create: 'Crear cuenta', coming: 'Te avisaremos cuando esté listo', honesty: 'Sin letra pequeña', honestyText: 'No cobramos todavía por estos planes y no pediremos un método de pago al crear tu cuenta gratuita. Los precios y ventajas definitivos se publicarán antes de activar cualquier compra.',
  },
  en: {
    metadata: ['Plans and pricing', 'Start using YoControlo for free and explore the ad-free and Pro plans we are preparing.'],
    hero: ['Clear pricing', 'Start for free. Upgrade only when it brings real value.', 'YoControlo is already free to use. Paid plans are not on sale yet: we would rather show you honestly what we are preparing.'],
    plans: [
      { name: 'Free', price: '€0', note: 'Start and keep going', icon: Heart, tone: 'mint', active: true, text: 'The essential financial experience for recording and understanding your money.', features: ['Accounts and movements', 'Recurring expenses and debts', 'Overview and trends', 'Shared expenses', 'Sync across devices'] },
      { name: 'Ad-free', price: '€4.99', note: 'Planned one-time payment', icon: ShieldCheck, tone: 'gold', active: false, text: 'For people who want to support the project and keep a clean experience forever.', features: ['Everything in Free', 'No advertising spaces', 'One purchase only', 'Country-adjusted pricing when launched'] },
      { name: 'Pro', price: 'Coming soon', note: 'Being defined', icon: Crown, tone: 'coral', active: false, text: 'Advanced tools we will launch when they provide a real advantage, not just to fill a table.', features: ['Everything in Ad-free', 'Advanced tools', 'Benefits to be defined', 'Full details before launch'] },
    ],
    available: 'AVAILABLE', create: 'Create account', coming: 'We will let you know when it is ready', honesty: 'No small print', honestyText: 'We do not currently charge for these plans and will not ask for a payment method when you create a free account. Final pricing and benefits will be published before any purchase is enabled.',
  },
} as const;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const locale = await getLocale(params);
  const copy = content[locale];
  return pageMetadata('/precios', locale, copy.metadata[0], copy.metadata[1]);
}

export default async function PricingPage({ params }: { params: Promise<{ locale: string }> }) {
  const copy = content[await getLocale(params)];
  return <div className="yc-page">
    <PageHero eyebrow={copy.hero[0]} icon={Sparkles} title={copy.hero[1]} description={copy.hero[2]} />
    <div className="yc-page-body">
      <div className="yc-pricing-grid">{copy.plans.map(({ name, price, note, icon: Icon, tone, active, text, features }) => <article key={name} className={`yc-pricing-card is-${tone} ${active ? 'is-featured' : ''}`}>
        <header><span><Icon /></span>{active && <b>{copy.available}</b>}</header><h2>{name}</h2><div className="yc-price">{price}</div><small>{note}</small><p>{text}</p><ul>{features.map((feature) => <li key={feature}><Check />{feature}</li>)}</ul>
        {active ? <Link className="yc-button yc-button-primary" href="https://app.yocontrolo.net/">{copy.create} <ArrowRight /></Link> : <span className="yc-coming-soon">{copy.coming}</span>}
      </article>)}</div>
      <div className="yc-honesty-note"><ShieldCheck /><div><strong>{copy.honesty}</strong><p>{copy.honestyText}</p></div></div>
    </div>
  </div>;
}

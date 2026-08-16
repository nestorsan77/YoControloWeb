'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight, BellRing, CalendarClock, Check, CreditCard, Eye,
  Landmark, LockKeyhole, PiggyBank, Repeat2, ShieldCheck, Users, WalletCards,
} from 'lucide-react';
import type { Locale } from './i18n';

const homeCopy = {
  es: {
    accounts: [
      { icon: Landmark, name: 'Cuenta diaria', note: 'Pagos y recibos', amount: '1.248,30 €', tone: 'mint' },
      { icon: PiggyBank, name: 'Ahorro', note: 'Remunerada', amount: '8.420,00 €', tone: 'gold' },
      { icon: CreditCard, name: 'Inversión', note: 'Largo plazo', amount: '3.180,55 €', tone: 'coral' },
    ],
    features: [
      { icon: WalletCards, title: 'Todas tus cuentas', text: 'Reúne bancos, efectivo, ahorro e inversión en una visión ordenada.' },
      { icon: CalendarClock, title: 'Recurrentes puntuales', text: 'El backend registra tus gastos fijos cuando vencen, incluso con la app cerrada.' },
      { icon: Users, title: 'Gastos compartidos', text: 'Organiza viajes y planes, reparte importes y confirma pagos externos.' },
      { icon: BellRing, title: 'Avisos útiles', text: 'Recibe solo las notificaciones que importan y llega al movimiento exacto.' },
      { icon: Eye, title: 'Lectura clara', text: 'Filtros, balances y evolución sin hojas de cálculo imposibles de mantener.' },
      { icon: ShieldCheck, title: 'Acceso protegido', text: 'Inicio de sesión seguro, permisos y controles contra usos abusivos.' },
    ],
    preview: ['Resumen', 'Patrimonio controlado', '+ 3,4%', 'este mes', 'Todo bajo control', '3 pagos al día'],
    hero: ['Tu Gato Custodio financiero', 'Todas tus cuentas.', 'Bajo control.', 'Tu dinero puede vivir en varios bancos, una cuenta remunerada, inversiones y efectivo. YoControlo te ofrece una sola vista para apuntarlo, entenderlo y decidir con calma.', 'Empezar gratis', 'Descubrir cómo funciona'],
    points: ['Sin conectar tus bancos', 'Disponible en web y móvil', 'En español e inglés'],
    principles: ['Tú eliges qué registrar', 'Sincronización segura', 'Compartir sin perder el control', 'Automatizaciones fiables'],
    story: ['Una realidad con muchas cuentas', 'Tu vida financiera no cabe en la app de un solo banco.', 'Cada cuenta cumple una función. El problema no es tener varias: es perder la visión conjunta.', 'Una visión clara', 'sin mover tu dinero'],
    product: ['El producto', 'Menos tiempo cuadrando cuentas. Más tiempo decidiendo.'],
    groups: ['Gastos compartidos', 'Viajes y planes sin cuentas pendientes eternas.', 'Crea un grupo, invita a tus amistades, reparte cada gasto como necesites y deja que quien pagó confirme cuándo ha recibido el dinero.', 'Repartos iguales o personalizados', 'Pagos externos sin mover dinero dentro de la app', 'Historial y balances para todo el grupo', 'Ver gastos compartidos', 'VIAJE COMPARTIDO', 'Londres · 4 personas', 'Todo repartido y confirmado', 'Pago confirmado', 'Bizum · 42,50 €'],
    recurring: ['Gastos fijos', 'Las suscripciones no esperan a que abras la app.', 'Programa gastos semanales, mensuales o anuales. YoControlo los procesa desde el servidor en la fecha correcta y evita duplicados.', 'Fechas y zonas horarias consistentes', 'Historial enlazado con su programación', 'Control y eliminación desde una sola fuente', 'Próximos pagos', 'Agosto', 'Programado'],
    security: ['Seguridad que acompaña', 'Tu información financiera merece algo más que una contraseña.', 'Acceso y sesiones protegidas', 'Autenticación segura y controles de sesión.', 'Permisos con propósito', 'Cada acción se comprueba también en el servidor.', 'Actividad visible', 'Notificaciones útiles ante cambios importantes.'],
    final: ['Empieza en unos minutos', 'Tu dinero ya está repartido.', 'Tu visión no tiene por qué estarlo.', 'Crea tu cuenta y reúne hoy la información que necesitas para tomar decisiones con tranquilidad.', 'Abrir YoControlo'],
  },
  en: {
    accounts: [
      { icon: Landmark, name: 'Everyday account', note: 'Payments and bills', amount: '€1,248.30', tone: 'mint' },
      { icon: PiggyBank, name: 'Savings', note: 'Interest-bearing', amount: '€8,420.00', tone: 'gold' },
      { icon: CreditCard, name: 'Investments', note: 'Long term', amount: '€3,180.55', tone: 'coral' },
    ],
    features: [
      { icon: WalletCards, title: 'All your accounts', text: 'Bring banks, cash, savings and investments together in one orderly view.' },
      { icon: CalendarClock, title: 'On-time recurring payments', text: 'The backend records fixed expenses when they are due, even while the app is closed.' },
      { icon: Users, title: 'Shared expenses', text: 'Organise trips and plans, split amounts and confirm external payments.' },
      { icon: BellRing, title: 'Useful alerts', text: 'Receive only meaningful notifications and jump straight to the exact movement.' },
      { icon: Eye, title: 'A clearer picture', text: 'Filters, balances and trends without impossible spreadsheets.' },
      { icon: ShieldCheck, title: 'Protected access', text: 'Secure sign-in, permissions and safeguards against abuse.' },
    ],
    preview: ['Overview', 'Net worth under control', '+ 3.4%', 'this month', 'Everything under control', '3 payments today'],
    hero: ['Your financial Guardian Cat', 'All your accounts.', 'Under control.', 'Your money may live across several banks, an interest-bearing account, investments and cash. YoControlo gives you one view to record it, understand it and decide calmly.', 'Start for free', 'See how it works'],
    points: ['No bank connections', 'Available on web and mobile', 'Available in English and Spanish'],
    principles: ['You choose what to record', 'Secure synchronisation', 'Share without losing control', 'Reliable automations'],
    story: ['A real life with many accounts', 'Your financial life does not fit inside one bank app.', 'Every account has a purpose. The problem is not having several; it is losing the complete picture.', 'One clear view', 'without moving your money'],
    product: ['The product', 'Less time reconciling accounts. More time deciding.'],
    groups: ['Shared expenses', 'Trips and plans without endless unsettled balances.', 'Create a group, invite friends, split every expense as needed and let the payer confirm when money arrives.', 'Equal or custom splits', 'External payments without moving money inside the app', 'History and balances for the whole group', 'Explore shared expenses', 'SHARED TRIP', 'London · 4 people', 'Everything split and confirmed', 'Payment confirmed', 'Transfer · €42.50'],
    recurring: ['Recurring expenses', 'Subscriptions do not wait for you to open the app.', 'Schedule weekly, monthly or yearly expenses. YoControlo processes them on the server on the right date and prevents duplicates.', 'Consistent dates and time zones', 'History linked to its schedule', 'Control and deletion from one source', 'Upcoming payments', 'August', 'Scheduled'],
    security: ['Security that stays with you', 'Your financial information deserves more than a password.', 'Protected access and sessions', 'Secure authentication and session controls.', 'Purposeful permissions', 'Every action is also checked on the server.', 'Visible activity', 'Useful notifications for important changes.'],
    final: ['Start in a few minutes', 'Your money is already spread out.', 'Your view does not have to be.', 'Create your account and bring together the information you need to make calmer decisions.', 'Open YoControlo'],
  },
} as const;

function ProductPreview({ locale }: { locale: Locale }) {
  const copy = homeCopy[locale];
  const accounts = copy.accounts;
  return (
    <div className="yc-product-preview" aria-label={locale === 'es' ? 'Vista ilustrativa de la aplicación YoControlo' : 'Illustrated preview of the YoControlo app'}>
      <div className="yc-preview-top"><span>{copy.preview[0]}</span><div><i /><i /><i /></div></div>
      <div className="yc-preview-balance"><small>{copy.preview[1]}</small><strong>{locale === 'es' ? '12.848,85 €' : '€12,848.85'}</strong><span><b>{copy.preview[2]}</b> {copy.preview[3]}</span></div>
      <div className="yc-preview-chart" aria-hidden="true">
        {[34, 48, 42, 61, 57, 75, 72, 86].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}
      </div>
      <div className="yc-preview-accounts">
        {accounts.map(({ icon: Icon, name, note, amount, tone }) => <div key={name}><span className={`is-${tone}`}><Icon /></span><p><strong>{name}</strong><small>{note}</small></p><b>{amount}</b></div>)}
      </div>
      <div className="yc-preview-float"><Image src="/brand/gato-custodio-app.svg" alt="Guardian Cat" width={62} height={62} /><span><strong>{copy.preview[4]}</strong><small>{copy.preview[5]}</small></span><Check /></div>
    </div>
  );
}

export default function LayoutClient({ locale }: { locale: Locale }) {
  const copy = homeCopy[locale];
  const accounts = copy.accounts;
  const features = copy.features;
  return (
    <>
      <section className="yc-hero">
        <div className="yc-hero-copy">
          <span className="yc-eyebrow"><ShieldCheck /> {copy.hero[0]}</span>
          <h1>{copy.hero[1]}<br/><em>{copy.hero[2]}</em></h1>
          <p>{copy.hero[3]}</p>
          <div className="yc-hero-actions">
            <Link className="yc-button yc-button-primary" href="https://app.yocontrolo.net/">{copy.hero[4]} <ArrowRight /></Link>
            <Link className="yc-button yc-button-secondary" href="/gestion-finanzas-personales">{copy.hero[5]}</Link>
          </div>
          <div className="yc-hero-points">{copy.points.map((point) => <span key={point}><Check /> {point}</span>)}</div>
        </div>
        <div className="yc-hero-visual"><div className="yc-orbit is-one"/><div className="yc-orbit is-two"/><ProductPreview locale={locale} /></div>
      </section>

      <section className="yc-trust-strip" aria-label={locale === 'es' ? 'Principios de YoControlo' : 'YoControlo principles'}>
        <span><LockKeyhole /> {copy.principles[0]}</span><span><Repeat2 /> {copy.principles[1]}</span><span><Users /> {copy.principles[2]}</span><span><CalendarClock /> {copy.principles[3]}</span>
      </section>

      <section className="yc-section yc-story-section">
        <div className="yc-section-heading"><span className="yc-eyebrow">{copy.story[0]}</span><h2>{copy.story[1]}</h2><p>{copy.story[2]}</p></div>
        <div className="yc-account-story">
          {accounts.map(({ icon: Icon, name, note, tone }, index) => <article key={name} className={`is-${tone}`}><span>0{index + 1}</span><Icon /><h3>{name}</h3><p>{note}</p></article>)}
          <div className="yc-account-connector"><Image src="/brand/gato-custodio-mark.svg" alt="Guardian Cat" width={156} height={156}/><strong>{copy.story[3]}</strong><small>{copy.story[4]}</small></div>
        </div>
      </section>

      <section className="yc-section yc-dark-section">
        <div className="yc-section-heading"><span className="yc-eyebrow">{copy.product[0]}</span><h2>{copy.product[1]}</h2></div>
        <div className="yc-feature-grid">{features.map(({ icon: Icon, title, text }, index) => <article key={title}><span><Icon /></span><small>0{index + 1}</small><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="yc-section yc-split-section">
        <div className="yc-split-visual yc-group-visual">
          <div className="yc-group-card"><span className="yc-group-cover">✈</span><div><small>{copy.groups[7]}</small><strong>{copy.groups[8]}</strong><p>{copy.groups[9]}</p></div></div>
          <div className="yc-group-people"><i>NP</i><i>AM</i><i>LC</i><i>+1</i></div>
          <div className="yc-settlement"><Check /><span><strong>{copy.groups[10]}</strong><small>{copy.groups[11]}</small></span></div>
        </div>
        <div className="yc-split-copy"><span className="yc-eyebrow">{copy.groups[0]}</span><h2>{copy.groups[1]}</h2><p>{copy.groups[2]}</p><ul><li><Check /> {copy.groups[3]}</li><li><Check /> {copy.groups[4]}</li><li><Check /> {copy.groups[5]}</li></ul><Link href="/gestion-finanzas-personales#grupos">{copy.groups[6]} <ArrowRight /></Link></div>
      </section>

      <section className="yc-section yc-split-section is-reversed">
        <div className="yc-split-copy"><span className="yc-eyebrow">{copy.recurring[0]}</span><h2>{copy.recurring[1]}</h2><p>{copy.recurring[2]}</p><ul><li><Check /> {copy.recurring[3]}</li><li><Check /> {copy.recurring[4]}</li><li><Check /> {copy.recurring[5]}</li></ul></div>
        <div className="yc-split-visual yc-calendar-visual"><div className="yc-calendar-head"><CalendarClock /><span><strong>{copy.recurring[6]}</strong><small>{copy.recurring[7]}</small></span></div>{(locale === 'es' ? [['12','Alquiler','850,00 €'],['18','Internet','32,00 €'],['25','Ahorro','150,00 €']] : [['12','Rent','€850.00'],['18','Internet','€32.00'],['25','Savings','€150.00']]).map(([day,name,amount]) => <div className="yc-calendar-row" key={name}><b>{day}</b><span><strong>{name}</strong><small>{copy.recurring[8]}</small></span><em>{amount}</em></div>)}</div>
      </section>

      <section className="yc-section yc-security-section">
        <div><Image src="/brand/gato-custodio-ring.svg" alt="Guardian Cat" width={180} height={180}/><span className="yc-eyebrow">{copy.security[0]}</span><h2>{copy.security[1]}</h2></div>
        <div className="yc-security-list"><article><LockKeyhole/><span><strong>{copy.security[2]}</strong><small>{copy.security[3]}</small></span></article><article><ShieldCheck/><span><strong>{copy.security[4]}</strong><small>{copy.security[5]}</small></span></article><article><BellRing/><span><strong>{copy.security[6]}</strong><small>{copy.security[7]}</small></span></article></div>
      </section>

      <section className="yc-final-cta">
        <Image src="/brand/gato-custodio-app.svg" alt="" width={94} height={94}/>
        <span className="yc-eyebrow">{copy.final[0]}</span><h2>{copy.final[1]}<br/>{copy.final[2]}</h2><p>{copy.final[3]}</p><Link className="yc-button yc-button-primary" href="https://app.yocontrolo.net/">{copy.final[4]} <ArrowRight /></Link>
      </section>
    </>
  );
}

import { pageMetadata } from '@/app/seo';
import type { Metadata } from 'next';
import Link from '@/app/components/LocalizedLink';
import { ArrowRight, BarChart3, BellRing, CalendarClock, Check, Landmark, ListFilter, ShieldCheck, Users, WalletCards } from 'lucide-react';
import PageHero from '@/app/components/PageHero';
import { getLocale } from '@/app/i18n.server';

const content = {
  es: {
    metadata: ['Gestión de finanzas personales sin conectar bancos', 'Descubre cómo YoControlo organiza cuentas, movimientos, pagos recurrentes, deudas y gastos compartidos.'],
    hero: ['El producto', 'Una rutina sencilla para una realidad financiera compleja.', 'YoControlo no mueve tu dinero ni necesita entrar en tus bancos. Tú mantienes el control y la aplicación te ayuda a ordenar la información.'],
    start: ['Cómo empezar', 'De cuentas dispersas a una imagen completa.'],
    steps: [['01','Crea tu visión','Añade las cuentas que quieras representar: banco diario, ahorro, inversión o efectivo.'],['02','Registra lo importante','Apunta ingresos y gastos, categorízalos y programa los movimientos que se repiten.'],['03','Decide con contexto','Consulta saldo, evolución, deudas y balances compartidos desde una única vista.']],
    modulesHeading: ['Todo conectado','Cada módulo responde a una pregunta concreta.','¿Cuánto tengo? ¿Qué vence pronto? ¿Quién debe a quién? ¿Qué ha cambiado?'],
    modules: [[WalletCards,'Movimientos','Historial filtrable por fecha, tipo y categoría, con enlaces al origen de cada gasto compartido.'],[CalendarClock,'Gastos fijos','Recurrencias semanales, mensuales o anuales procesadas por el servidor a su hora.'],[BarChart3,'Resumen','Lectura inmediata de entradas, salidas y evolución sin depender de hojas de cálculo.'],[Users,'Grupos','Planes compartidos, repartos personalizados, confirmaciones y balances por persona.'],[BellRing,'Notificaciones','Avisos no leídos que conducen al gasto, pago o invitación exactos.'],[ShieldCheck,'Seguridad','Autenticación, permisos en servidor, control de sesiones y límites contra abuso.']],
    group: ['Compartir con claridad','Un gasto general, un reparto flexible.','Indica quién pagó, reparte el total de forma igual o personalizada y solicita la confirmación correspondiente. Cuando alguien devuelve dinero por Bizum, transferencia o efectivo, se registra el acuerdo; YoControlo no custodia ni mueve fondos.','Invitaciones entre usuarios registrados','Portadas personalizadas para cada grupo','Cancelación consistente del gasto y su movimiento','Viaje a Londres','4 participantes','Hotel','Pagado por Nestor','Museos','Reparto personalizado','Todo cuadrado y enlazado'],
    cta: ['Tu primera cuenta','Pruébalo con tus propios números.','No necesitas conectar ninguna entidad bancaria.','Abrir la app'],
  },
  en: {
    metadata: ['Personal finance management without bank connections', 'Learn how YoControlo organises accounts, movements, recurring payments, debts and shared expenses.'],
    hero: ['The product', 'A simple routine for a complex financial reality.', 'YoControlo does not move your money or need access to your banks. You stay in control while the app helps organise the information.'],
    start: ['Getting started', 'From scattered accounts to one complete picture.'],
    steps: [['01','Build your view','Add the accounts you want to represent: everyday banking, savings, investments or cash.'],['02','Record what matters','Add income and expenses, categorise them and schedule recurring movements.'],['03','Decide with context','See balances, trends, debts and shared balances from one view.']],
    modulesHeading: ['Everything connected','Each module answers a specific question.','How much do I have? What is due soon? Who owes whom? What changed?'],
    modules: [[WalletCards,'Movements','A history you can filter by date, type and category, linked to the source of each shared expense.'],[CalendarClock,'Recurring expenses','Weekly, monthly or yearly schedules processed by the server on time.'],[BarChart3,'Overview','An immediate view of money in, money out and trends without spreadsheets.'],[Users,'Groups','Shared plans, custom splits, confirmations and per-person balances.'],[BellRing,'Notifications','Unread alerts that take you to the exact expense, payment or invitation.'],[ShieldCheck,'Security','Authentication, server-side permissions, session control and anti-abuse limits.']],
    group: ['Share with clarity','One general expense, one flexible split.','Choose who paid, split the total equally or with custom amounts and request confirmation. When someone pays back by transfer or cash, the agreement is recorded; YoControlo never holds or moves funds.','Invitations between registered users','Custom covers for every group','Consistent deletion of the expense and its movement','London trip','4 participants','Hotel','Paid by Nestor','Museums','Custom split','Everything balanced and linked'],
    cta: ['Your first account','Try it with your own numbers.','You do not need to connect a bank.','Open the app'],
  },
} as const;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const locale = await getLocale(params);
  const copy = content[locale];
  return pageMetadata('/gestion-finanzas-personales', locale, copy.metadata[0], copy.metadata[1]);
}

export default async function ProductPage({ params }: { params: Promise<{ locale: string }> }) {
  const copy = content[await getLocale(params)];
  return <div className="yc-page">
    <PageHero eyebrow={copy.hero[0]} icon={Landmark} title={copy.hero[1]} description={copy.hero[2]} />
    <div className="yc-page-body">
      <section className="yc-process"><div className="yc-section-title"><span className="yc-eyebrow">{copy.start[0]}</span><h2>{copy.start[1]}</h2></div><div className="yc-process-grid">{copy.steps.map(([number,title,text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
      <section className="yc-modules"><div className="yc-section-title"><span className="yc-eyebrow">{copy.modulesHeading[0]}</span><h2>{copy.modulesHeading[1]}</h2><p>{copy.modulesHeading[2]}</p></div><div className="yc-card-grid">{copy.modules.map(([Icon,title,text]) => <article className="yc-content-card" key={title as string}><Icon/><h3>{title as string}</h3><p>{text as string}</p></article>)}</div></section>
      <section id="grupos" className="yc-product-deep-dive"><div><span className="yc-eyebrow">{copy.group[0]}</span><h2>{copy.group[1]}</h2><p>{copy.group[2]}</p><ul><li><Check/>{copy.group[3]}</li><li><Check/>{copy.group[4]}</li><li><Check/>{copy.group[5]}</li></ul></div><div className="yc-product-ledger"><header><Users/><span><strong>{copy.group[6]}</strong><small>{copy.group[7]}</small></span></header><div><span>{copy.group[8]}</span><strong>{copy === content.es ? '420,00 €' : '€420.00'}</strong><small>{copy.group[9]}</small></div><div><span>{copy.group[10]}</span><strong>{copy === content.es ? '96,00 €' : '€96.00'}</strong><small>{copy.group[11]}</small></div><footer><ListFilter/><span>{copy.group[12]}</span></footer></div></section>
      <section className="yc-inline-cta"><div><span className="yc-eyebrow">{copy.cta[0]}</span><h2>{copy.cta[1]}</h2><p>{copy.cta[2]}</p></div><Link className="yc-button yc-button-primary" href="https://app.yocontrolo.net/">{copy.cta[3]} <ArrowRight/></Link></section>
    </div>
  </div>;
}

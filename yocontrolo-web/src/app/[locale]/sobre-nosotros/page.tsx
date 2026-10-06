import { pageMetadata } from '@/app/seo';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from '@/app/components/LocalizedLink';
import { ArrowRight, Eye, Heart, Scale, ShieldCheck, Sparkles } from 'lucide-react';
import PageHero from '@/app/components/PageHero';
import { getLocale } from '@/app/i18n.server';

const content = {
  es: {
    metadata: ['Sobre nosotros','Conoce la visión, los principios y la identidad del Gato Custodio detrás de YoControlo.'],
    hero: ['El proyecto','Control financiero sin lenguaje de banco.','YoControlo nace de una situación cotidiana: repartir el dinero entre varias cuentas tiene sentido, pero entender el conjunto no debería exigir una hoja de cálculo.'],
    origin: ['Por qué existe','Una sola persona puede usar cuatro bancos por cuatro buenas razones.','Una cuenta para cobrar y pagar, otra por su remuneración, una plataforma para invertir y algo de efectivo. Ninguna entidad ve el dibujo completo y, normalmente, su interés es enseñarte solo su parte.','YoControlo crea esa visión conjunta sin convertirse en otro banco. La información la aportas tú, la aplicación la organiza y las decisiones siguen siendo tuyas.','El Gato Custodio','Observa, ordena y protege sin decidir por ti.'],
    principlesHeading: ['Nuestros principios','El producto crece sobre una base estable.'],
    principles: [[Eye,'Claridad antes que ruido','Cada pantalla debe ayudar a responder una pregunta financiera, no presumir de cantidad de datos.'],[ShieldCheck,'Seguridad por capas','Las decisiones sensibles se validan en el servidor y se acompañan con permisos, auditoría y límites.'],[Scale,'Honestidad de producto','No prometemos funciones, cifras ni protecciones que todavía no existen.'],[Heart,'Tecnología cercana','El Gato Custodio convierte un tema serio en una experiencia tranquila, reconocible y humana.']],
    cta: ['Construcción continua','El mejor producto se construye escuchando problemas reales.','Si algo no se entiende o no funciona como debería, queremos saberlo.','Hablar con nosotros'],
  },
  en: {
    metadata: ['About us','Discover the vision, principles and Guardian Cat identity behind YoControlo.'],
    hero: ['The project','Financial control without bank language.','YoControlo grew from an everyday reality: spreading money across several accounts makes sense, but understanding the whole picture should not require a spreadsheet.'],
    origin: ['Why it exists','One person can use four banks for four very good reasons.','One account for income and bills, another for interest, an investment platform and some cash. No provider sees the whole picture, and each usually only wants to show its own part.','YoControlo creates that combined view without becoming another bank. You provide the information, the app organises it and the decisions remain yours.','The Guardian Cat','Watches, organises and protects without deciding for you.'],
    principlesHeading: ['Our principles','The product grows on a stable foundation.'],
    principles: [[Eye,'Clarity before noise','Every screen should answer a financial question, not boast about the amount of data.'],[ShieldCheck,'Layered security','Sensitive decisions are validated on the server with permissions, audits and limits.'],[Scale,'Product honesty','We do not promise features, numbers or protections that do not exist yet.'],[Heart,'Approachable technology','The Guardian Cat turns a serious subject into a calm, recognisable and human experience.']],
    cta: ['Continuous improvement','The best product is built by listening to real problems.','If something is unclear or does not work as it should, we want to know.','Talk to us'],
  },
} as const;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const locale = await getLocale(params);
  const copy = content[locale];
  return pageMetadata('/sobre-nosotros', locale, copy.metadata[0], copy.metadata[1]);
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const copy = content[await getLocale(params)];
  return <div className="yc-page">
    <PageHero eyebrow={copy.hero[0]} icon={Sparkles} title={copy.hero[1]} description={copy.hero[2]} />
    <div className="yc-page-body">
      <section className="yc-origin-story"><div><span className="yc-eyebrow">{copy.origin[0]}</span><h2>{copy.origin[1]}</h2><p>{copy.origin[2]}</p><p>{copy.origin[3]}</p></div><div className="yc-mascot-card"><Image src="/brand/gato-custodio-mark.svg" alt={copy.origin[4]} width={260} height={260}/><strong>{copy.origin[4]}</strong><span>{copy.origin[5]}</span></div></section>
      <section><div className="yc-section-title"><span className="yc-eyebrow">{copy.principlesHeading[0]}</span><h2>{copy.principlesHeading[1]}</h2></div><div className="yc-card-grid">{copy.principles.map(([Icon,title,text]) => <article className="yc-content-card" key={title as string}><Icon/><h3>{title as string}</h3><p>{text as string}</p></article>)}</div></section>
      <section className="yc-inline-cta"><div><span className="yc-eyebrow">{copy.cta[0]}</span><h2>{copy.cta[1]}</h2><p>{copy.cta[2]}</p></div><Link className="yc-button yc-button-primary" href="/contacto">{copy.cta[3]} <ArrowRight/></Link></section>
    </div>
  </div>;
}

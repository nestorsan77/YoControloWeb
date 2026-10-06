import { pageMetadata } from '@/app/seo';
import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowUpRight, Bug, HelpCircle, Lightbulb, Mail, MessageCircle, ShieldCheck } from 'lucide-react';
import PageHero from '@/app/components/PageHero';
import { getLocale } from '@/app/i18n.server';

const content = {
  es: {
    metadata: ['Contacto y ayuda','Contacta con soporte de YoControlo para resolver dudas, reportar errores o compartir propuestas.'],
    hero: ['Estamos al otro lado','Ayuda humana, sin hacerte repetirlo todo.','Escríbenos directamente. Cuanto más contexto nos des —sin compartir información sensible—, antes podremos entender qué necesitas.'],
    reasons: [[HelpCircle,'Necesito ayuda','Cuéntanos qué estabas intentando hacer y en qué pantalla ocurrió.','Necesito ayuda con YoControlo'],[Bug,'He encontrado un error','Incluye navegador, dispositivo y pasos para reproducirlo. No envíes contraseñas.','He encontrado un error en YoControlo'],[Lightbulb,'Tengo una propuesta','Nos interesa el problema que quieres resolver, no solo la función concreta.','Propuesta para YoControlo']],
    write: 'Escribir a soporte', official: 'Canal oficial', supportText: 'Respondemos desde esta dirección. Para proteger tu cuenta, nunca te pediremos la contraseña, códigos de verificación ni credenciales bancarias.', open: 'Abrir mi correo', safety: 'Antes de enviar una captura', safetyText: 'Oculta saldos, correos, identificadores y cualquier dato que no sea necesario para comprender el problema.',
  },
  en: {
    metadata: ['Contact and help','Contact YoControlo support to ask questions, report issues or share ideas.'],
    hero: ['We are here','Human help, without making you repeat everything.','Write to us directly. The more context you provide —without sharing sensitive information—, the sooner we can understand what you need.'],
    reasons: [[HelpCircle,'I need help','Tell us what you were trying to do and which screen you were on.','I need help with YoControlo'],[Bug,'I found a problem','Include your browser, device and steps to reproduce it. Never send passwords.','I found a problem in YoControlo'],[Lightbulb,'I have an idea','We care about the problem you want to solve, not only the specific feature.','Idea for YoControlo']],
    write: 'Email support', official: 'Official channel', supportText: 'We reply from this address. To protect your account, we will never ask for your password, verification codes or bank credentials.', open: 'Open my email app', safety: 'Before sending a screenshot', safetyText: 'Hide balances, email addresses, identifiers and any data that is not needed to understand the issue.',
  },
} as const;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const locale = await getLocale(params);
  const copy = content[locale];
  return pageMetadata('/contacto', locale, copy.metadata[0], copy.metadata[1]);
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const copy = content[await getLocale(params)];
  return <div className="yc-page">
    <PageHero eyebrow={copy.hero[0]} icon={MessageCircle} title={copy.hero[1]} description={copy.hero[2]} />
    <div className="yc-page-body">
      <div className="yc-contact-grid">{copy.reasons.map(([Icon,title,text,subject]) => <a key={title as string} href={`mailto:soporte@yocontrolo.net?subject=${encodeURIComponent(subject as string)}`} className="yc-content-card"><Icon/><h2>{title as string}</h2><p>{text as string}</p><span>{copy.write} <ArrowUpRight/></span></a>)}</div>
      <section className="yc-support-card"><div className="yc-support-cat"><Image src="/brand/gato-custodio-ring.svg" alt="Guardian Cat" width={210} height={210}/></div><div><span className="yc-eyebrow">{copy.official}</span><h2>soporte@yocontrolo.net</h2><p>{copy.supportText}</p><a className="yc-button yc-button-primary" href="mailto:soporte@yocontrolo.net"><Mail/>{copy.open}</a></div></section>
      <div className="yc-contact-safety"><ShieldCheck/><div><strong>{copy.safety}</strong><p>{copy.safetyText}</p></div></div>
    </div>
  </div>;
}

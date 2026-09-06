import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Clock, Check, Coffee, ShoppingBag, Repeat2 } from 'lucide-react';
import SpendingCalculator from './SpendingCalculator';
import './spending-guide.css';

const articleCopy = {
  es: {
    back: 'Volver al blog', eyebrow: 'HÁBITOS QUE CUENTAN', title: 'Gastos hormiga:', accent: 'pequeños gastos, grandes sumas.',
    intro: 'Un café, un pedido, una suscripción que casi no usas. Descubre cuánto suman y decide cuáles merecen quedarse.',
    calculator: 'Calcular mis gastos', challenge: 'Ver el reto de 7 días', date: '6 de septiembre de 2026', read: '6 min de lectura',
    imageAlt: 'Café, bolsa de comida, tarjetas de suscripción y monedas con pequeñas hormigas: una ilustración de gastos cotidianos que se acumulan.',
    mathLabel: 'Un ejemplo cotidiano', math: '2,50 € × 20 días', mathResult: '50 € al mes',
    toc: 'EN ESTA GUÍA', links: [['que-son','Qué son'],['ejemplos','Ejemplos que suman'],['calculadora','Tu calculadora'],['reto','Reto de 7 días'],['con-yocontrolo','Llévalo a la app'],['preguntas','Preguntas frecuentes']],
    lead: 'No hace falta una compra enorme para perder la cuenta. A veces basta con repetir pagos pequeños y no mirarlos juntos.',
    opening: 'La pregunta útil no es «¿debería dejar de tomar café?», sino «¿sé cuánto gasto y lo elijo yo?». Aquí tienes ejemplos con números claros, una calculadora y una forma sencilla de empezar a registrar tus gastos con YoControlo.',
    definitionTitle: '¿Qué son los gastos hormiga?',
    definition: 'Los gastos hormiga son pequeños desembolsos que se repiten y pasan fácilmente desapercibidos. Por separado parecen poco; sumados durante un mes pueden ocupar más espacio del que esperabas en tu presupuesto.',
    distinction: 'Conviene distinguirlos de las suscripciones olvidadas: estas son pagos recurrentes, aunque no las uses. Revisar ambos juntos puede ser útil, pero no todos los gastos pequeños ni todas las suscripciones son prescindibles.',
    sourceIntro: 'El Banco de España recuerda que los pagos pequeños se acumulan y recomienda tenerlos presentes al planificar el gasto.',
    sourceLabel: 'Leer la guía del Banco de España',
    calloutTitle: 'Tu café no explica todo tu presupuesto.',
    callout: 'La vivienda, los suministros o unos ingresos insuficientes pueden pesar mucho más. Esta revisión sirve para ganar claridad y elegir; no para culpabilizarte por cada pequeño placer.',
    examplesTitle: 'Tres ejemplos de gastos que se acumulan',
    examplesIntro: 'Son importes inventados para hacer las cuentas, no precios de mercado ni una promesa de ahorro. Cambia las cifras en la calculadora para ver tu caso.',
    examples: [['Cafés y antojos','2,50 € × 20 al mes','50 €','600 € al año'],['Pedidos y compras pequeñas','12 € × 4 al mes','48 €','576 € al año'],['Suscripciones por revisar','9,99 € + 5,99 € al mes','15,98 €','191,76 € al año']],
    perMonth: '/ mes', total: 'En este ejemplo: 113,98 € al mes. 1.367,76 € si se repite durante un año.',
    totalNote: 'Es gasto registrado, no ahorro disponible. Tú decides qué conservar, ajustar o cancelar.',
    challengeTitle: 'Un reto de 7 días, sin dejar de vivir',
    challengeIntro: 'Durante una semana observa primero y decide después. No necesitas una hoja de cálculo perfecta ni cambiar todos tus hábitos.',
    steps: [['DÍAS 1–2','Anota sin juzgar','Registra cada pago pequeño, también en efectivo. Apunta el importe y una categoría que puedas reutilizar.'],['DÍAS 3–4','Busca lo que se repite','Agrupa cafés, pedidos y compras parecidas. Revisa además tus suscripciones mensuales y anuales: una semana no muestra todos los cobros.'],['DÍAS 5–6','Elige un solo cambio','Conserva lo que disfrutas. Ajusta una frecuencia o revisa un servicio que no usas. Si cancelas algo, hazlo con su proveedor y confirma la baja.'],['DÍA 7','Comprueba y continúa','Suma lo registrado y elige qué seguir observando. No multipliques una semana excepcional como si todas fueran iguales.']],
    secondAlt: 'Cuaderno abierto, calendario de siete días, monedas y una planta en una mesa: una rutina tranquila para revisar gastos.',
    caption: 'Un momento para revisar. Una decisión que puedas mantener.',
    appTitle: 'De «creo que gasto» a «esto es lo que he registrado»',
    appIntro: 'YoControlo te ayuda a reunir esa información sin conectar tus bancos. Tú registras los movimientos; la app te permite consultarlos con contexto.',
    features: [['Movimientos','Registra ingresos y gastos, y filtra el historial por fecha y categoría.'],['Gastos fijos','Configura pagos semanales, mensuales o anuales y revisa que estén al día.'],['Resumen','Consulta entradas, salidas y evolución a partir de tus registros.']],
    appNote: 'Antes de añadir un pago, comprueba si ya existe por una recurrencia. Y recuerda: borrar un gasto en la app no cancela una suscripción con su proveedor.',
    shared: '¿Pagaste una cena para varias personas? Revisa también el reparto en Grupos: el importe que adelantas no siempre coincide con tu parte del gasto.',
    faqTitle: 'Lo que suele generar dudas',
    faqs: [['¿Cómo puedo detectar mis gastos hormiga?','Registra los pagos pequeños durante siete días y agrúpalos por categoría. Después revisa un mes completo y los cargos anuales para no olvidar suscripciones o pagos menos frecuentes.'],['¿Tengo que eliminar todos los gastos pequeños?','No. El objetivo es conocer cuánto suman y elegir cuáles te aportan valor. Puedes mantenerlos, reducir su frecuencia o cambiar uno que ya no disfrutas.'],['¿Cuánto puedo ahorrar al mes?','No hay una cantidad universal. Depende de tus gastos, necesidades e ingresos. La calculadora muestra escenarios con tus cifras; no predice ni garantiza un ahorro.'],['¿YoControlo detecta o cancela mis suscripciones automáticamente?','No cancela servicios ni analiza tu banco automáticamente. Puedes registrar y organizar pagos recurrentes en la app; las altas, bajas y cambios se gestionan con cada proveedor.'],['¿Necesito conectar mi cuenta bancaria?','No. YoControlo permite representar tus cuentas y registrar movimientos sin conectar tus bancos. La app utiliza autenticación y almacenamiento en servidor; no es una libreta exclusivamente local.']],
    ctaEyebrow: 'EMPIEZA POR UN SOLO GASTO', ctaTitle: 'Tu dinero merece algo más que un «más o menos».',
    ctaText: 'Lleva el reto a YoControlo y construye un registro que puedas revisar.', ctaButton: 'Empezar con YoControlo', ctaLink: 'Ver cómo funciona',
    related: 'Sigue poniendo orden', relatedTitle: 'Cómo controlar tus gastos sin depender del banco', relatedText: 'Un método sencillo para mantener tus registros al día.',
    editorial: 'Preparado por el equipo de YoControlo. Ejemplos y calculadora propios; orientación general sobre registro de gastos. Ilustraciones creadas con IA.',
  },
  en: {
    back: 'Back to the blog', eyebrow: 'HABITS THAT ADD UP', title: 'Small expenses.', accent: 'Bigger than you think.',
    intro: 'A coffee, a takeaway, a subscription you barely use. Find out what they add up to and decide which ones deserve to stay.',
    calculator: 'Calculate my spending', challenge: 'See the 7-day challenge', date: '6 September 2026', read: '6 min read',
    imageAlt: 'Coffee, a takeaway bag, subscription cards and coins with tiny ants: an illustration of everyday expenses adding up.',
    mathLabel: 'An everyday example', math: '€2.50 × 20 days', mathResult: '€50 a month',
    toc: 'IN THIS GUIDE', links: [['que-son','What they are'],['ejemplos','Examples that add up'],['calculadora','Your calculator'],['reto','7-day challenge'],['con-yocontrolo','Use the app'],['preguntas','Common questions']],
    lead: 'It does not take one huge purchase to lose track. Sometimes all it takes is repeating small payments without looking at them together.',
    opening: 'The useful question is not “should I stop buying coffee?” but “do I know what I spend, and am I choosing it?”. Here are clear examples, a calculator and a simple way to start tracking your spending with YoControlo.',
    definitionTitle: 'What are small recurring expenses?',
    definition: 'These are small purchases that happen repeatedly and are easy to overlook. Individually they seem minor; together over a month they can take up more of your budget than you expected.',
    distinction: 'Forgotten subscriptions are slightly different: they are recurring payments, even when you do not use the service. Reviewing both can help, but not every small purchase or subscription is unnecessary.',
    sourceIntro: 'The Bank of Spain notes that small payments accumulate and recommends considering them when planning spending.',
    sourceLabel: 'Read the Bank of Spain guide (Spanish)',
    calloutTitle: 'Your coffee does not explain your whole budget.',
    callout: 'Housing, utilities or insufficient income may have a much bigger impact. This review is about clarity and choice, not feeling guilty about every small pleasure.',
    examplesTitle: 'Three examples of expenses that add up',
    examplesIntro: 'These are invented amounts for illustration, not market prices or a savings promise. Change the calculator values to explore your own situation.',
    examples: [['Coffee and treats','€2.50 × 20 each month','€50','€600 per year'],['Takeaways and small purchases','€12 × 4 each month','€48','€576 per year'],['Subscriptions to review','€9.99 + €5.99 each month','€15.98','€191.76 per year']],
    perMonth: '/ month', total: 'In this example: €113.98 a month. €1,367.76 if repeated for a year.',
    totalNote: 'This is recorded spending, not available savings. You decide what to keep, adjust or cancel.',
    challengeTitle: 'A 7-day challenge that fits real life',
    challengeIntro: 'Observe first and decide later. You do not need a perfect spreadsheet or a complete overhaul of your habits.',
    steps: [['DAYS 1–2','Record without judging','Track each small payment, including cash. Record the amount and a category you can reuse.'],['DAYS 3–4','Look for repetitions','Group coffee, takeaways and similar purchases. Also review monthly and annual subscriptions: one week will not reveal every charge.'],['DAYS 5–6','Choose just one change','Keep what you enjoy. Adjust a frequency or review a service you do not use. Cancel directly with the provider and confirm it has taken effect.'],['DAY 7','Check and continue','Add up your records and choose what to keep observing. Do not extrapolate an unusual week as if every week were the same.']],
    secondAlt: 'An open notebook, a seven-day calendar, coins and a plant on a desk: a calm routine for reviewing spending.',
    caption: 'A moment to review. A decision you can maintain.',
    appTitle: 'From “I think I spend” to “this is what I recorded”',
    appIntro: 'YoControlo helps you bring that information together without connecting to your banks. You record the transactions; the app gives you context to review them.',
    features: [['Transactions','Record income and expenses, then filter the history by date and category.'],['Recurring expenses','Set weekly, monthly or yearly payments and check they are up to date.'],['Overview','Review income, spending and trends based on your records.']],
    appNote: 'Before adding a payment, check whether a recurring schedule has already created it. Deleting an expense in the app does not cancel a subscription with its provider.',
    shared: 'Paid for dinner for several people? Check the split in Groups: the amount you advance does not always match your own share of the expense.',
    faqTitle: 'Questions you might be asking',
    faqs: [['How can I spot small recurring expenses?','Track small payments for seven days and group them by category. Then review a full month and annual charges so you do not miss subscriptions or less frequent payments.'],['Should I eliminate every small expense?','No. The aim is to understand the total and choose what adds value. Keep them, reduce their frequency or change one you no longer enjoy.'],['How much can I save each month?','There is no universal amount. It depends on your spending, needs and income. The calculator shows scenarios with your figures; it does not predict or guarantee savings.'],['Does YoControlo automatically detect or cancel my subscriptions?','It does not cancel services or automatically analyse your bank. You can record and organise recurring payments in the app; service changes and cancellations are handled with each provider.'],['Do I need to connect my bank account?','No. YoControlo lets you represent accounts and record transactions without connecting to your banks. The app uses authentication and server storage; it is not an exclusively local notebook.']],
    ctaEyebrow: 'START WITH ONE EXPENSE', ctaTitle: 'Your money deserves more than a rough guess.',
    ctaText: 'Take the challenge into YoControlo and build a record you can review.', ctaButton: 'Get started with YoControlo', ctaLink: 'See how it works',
    related: 'Keep organising', relatedTitle: 'How to track your spending without relying on your bank', relatedText: 'A simple approach to keeping your records up to date.',
    editorial: 'Prepared by the YoControlo team. Original examples and calculator; general guidance on expense tracking. AI-generated illustrations.',
  },
} as const;

export default function SpendingGuide({ locale }: { locale: 'es' | 'en' }) {
  const c = articleCopy[locale];
  const icons = [Coffee, ShoppingBag, Repeat2];
  return <article className="sg-article">
    <div className="sg-topline"><Link href="/blog"><ArrowLeft size={16}/>{c.back}</Link><span>YOCONTROLO JOURNAL / 03</span></div>
    <header className="sg-hero">
      <div className="sg-hero-copy"><span className="sg-section-kicker"><span className="sg-dot"/>{c.eyebrow}</span><h1>{c.title} <em>{c.accent}</em></h1><p>{c.intro}</p><div className="sg-hero-actions"><a className="yc-button yc-button-primary" href="#calculadora">{c.calculator}<ArrowRight size={18}/></a><a className="sg-text-link" href="#reto">{c.challenge}</a></div><div className="sg-byline"><span>YoControlo</span><time dateTime="2026-09-06">{c.date}</time><span><Clock size={14}/>{c.read}</span></div></div>
      <div className="sg-hero-art"><Image src="/images/blog/gastos-hormiga-portada.webp" alt={c.imageAlt} width={1536} height={1024} priority sizes="(max-width: 850px) 100vw, 50vw"/><div className="sg-math-note"><span>{c.mathLabel}</span><div>{c.math} <ArrowRight size={20}/></div><strong>{c.mathResult}</strong></div></div>
    </header>
    <div className="sg-reading-layout">
      <aside className="sg-sidebar"><nav aria-label={c.toc}><strong>{c.toc}</strong>{c.links.map(([id,label],index) => <a href={`#${id}`} key={id}><span>{String(index+1).padStart(2,'0')}</span>{label}</a>)}</nav><p>{locale === 'es' ? 'Menos suposiciones. Más claridad.' : 'Less guessing. More clarity.'}</p></aside>
      <div className="sg-body">
        <p className="sg-lead">{c.lead}</p><p>{c.opening}</p>
        <section id="que-son"><span className="sg-section-number">01 / {locale === 'es' ? 'ENTIENDE' : 'UNDERSTAND'}</span><h2>{c.definitionTitle}</h2><p>{c.definition}</p><p>{c.distinction}</p><p className="sg-source">{c.sourceIntro} <a href="https://clientebancario.bde.es/pcb/es/blog/verano-sol-descanso-y-control-del-gasto.html">{c.sourceLabel} ↗</a></p><aside className="sg-callout"><strong>{c.calloutTitle}</strong><p>{c.callout}</p></aside></section>
        <section id="ejemplos"><span className="sg-section-number">02 / {locale === 'es' ? 'HAZ LAS CUENTAS' : 'ADD IT UP'}</span><h2>{c.examplesTitle}</h2><p>{c.examplesIntro}</p><div className="sg-example-grid">{c.examples.map(([title,formula,total,annual],i) => { const Icon=icons[i]; return <div className={`sg-example sg-example-${i}`} key={title}><Icon size={24}/><h3>{title}</h3><p>{formula}</p><strong>{total}<small>{c.perMonth}</small></strong><span>{annual}</span></div>; })}</div><p className="sg-total">{c.total}</p><p className="sg-fineprint">{c.totalNote}</p></section>
        <SpendingCalculator locale={locale}/>
        <section id="reto"><span className="sg-section-number">04 / {locale === 'es' ? 'PASA A LA ACCIÓN' : 'TAKE ACTION'}</span><h2>{c.challengeTitle}</h2><p>{c.challengeIntro}</p><ol className="sg-challenge">{c.steps.map(([days,title,text]) => <li key={days}><span>{days}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol><figure className="sg-editorial-image"><Image src="/images/blog/reto-gastos-siete-dias.webp" alt={c.secondAlt} width={1536} height={1024} sizes="(max-width: 850px) 100vw, 720px"/><figcaption>{c.caption}</figcaption></figure></section>
        <section id="con-yocontrolo"><span className="sg-section-number">05 / YOCONTROLO</span><h2>{c.appTitle}</h2><p>{c.appIntro}</p><div className="sg-features">{c.features.map(([title,text]) => <div key={title}><Check size={19}/><p><strong>{title}.</strong> {text}</p></div>)}</div><p>{c.appNote}</p><p>{c.shared}</p></section>
        <section id="preguntas"><span className="sg-section-number">06 / FAQ</span><h2>{c.faqTitle}</h2><div className="sg-faq">{c.faqs.map(([q,a]) => <details key={q}><summary>{q}<span aria-hidden="true">+</span></summary><p>{a}</p></details>)}</div></section>
        <section className="sg-cta"><span className="sg-section-kicker">{c.ctaEyebrow}</span><h2>{c.ctaTitle}</h2><p>{c.ctaText}</p><Link className="yc-button yc-button-primary" href="https://app.yocontrolo.net/">{c.ctaButton}<ArrowRight size={18}/></Link><Link className="sg-cta-secondary" href="/gestion-finanzas-personales">{c.ctaLink}</Link></section>
        <Link className="sg-related" href="/blog/controlar-gastos-sin-banco"><span className="sg-section-kicker">{c.related}</span><strong>{c.relatedTitle}<ArrowRight size={22}/></strong><p>{c.relatedText}</p></Link>
        <footer className="sg-editorial-note">{c.editorial} <Link href="/sobre-nosotros">{locale === 'es' ? 'Sobre el equipo' : 'About the team'}</Link>.</footer>
      </div>
    </div>
  </article>;
}

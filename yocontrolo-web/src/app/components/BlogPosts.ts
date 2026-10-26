import { balanceGuide } from '../content/balance-guide';

// components/BlogPosts.ts
export interface BlogPost {
  title: string;
  slug: string;
  date: string;
  publishedAt?: string;
  seoTitle?: string;
  seoTitleEn?: string;
  imageAlt?: string;
  imageAltEn?: string;
  layout?: 'spending-guide';
  excerpt: string;
  image?: string;
  author?: string;
  readTime?: string;
  tags?: string[];
  content?: string;
  titleEn?: string;
  dateEn?: string;
  excerptEn?: string;
  contentEn?: string;
}

export const blogPosts: BlogPost[] = [
balanceGuide,
{
  "title": "Cómo controlar tus suscripciones y gastos fijos cada mes",
  "titleEn": "How to track subscriptions and fixed monthly expenses",
  "seoTitle": "Controlar suscripciones y gastos fijos: guía práctica",
  "seoTitleEn": "Track subscriptions and fixed expenses: a practical guide",
  "slug": "controlar-suscripciones-gastos-fijos",
  "date": "11 de octubre, 2026",
  "dateEn": "11 October 2026",
  "publishedAt": "2026-10-11T00:00:00.000Z",
  "excerpt": "Organiza tus pagos recurrentes, calcula el coste mensual y anual de tus suscripciones y revisa los gastos fijos con un ejemplo práctico en YoControlo.",
  "excerptEn": "Organise recurring payments, calculate the monthly and annual cost of subscriptions and review fixed expenses with a practical YoControlo example.",
  "image": "/images/blog/suscripciones-gastos-fijos-portada.webp",
  "imageAlt": "Calendario, sobres y monedas que representan la organización de los pagos recurrentes.",
  "imageAltEn": "A calendar, envelopes and coins representing organised recurring payments.",
  "author": "YoControlo",
  "readTime": "6 min",
  "tags": [
    "suscripciones",
    "gastos fijos",
    "pagos recurrentes",
    "presupuesto mensual"
  ],
  "content": `
<p>Una plataforma de series, almacenamiento en la nube, una aplicación y una cuota anual: cada cargo parece pequeño por separado. Para <strong>controlar tus suscripciones y gastos fijos</strong>, necesitas ver cuánto suman, cuándo se cobran y qué cuenta paga cada uno. No hace falta cancelar todo: empieza por distinguir lo que utilizas de lo que se renueva por costumbre.</p>
<h2>Qué diferencia hay entre gastos fijos y pagos recurrentes</h2>
<p>Un gasto fijo mantiene un importe relativamente estable, como el alquiler. Un pago recurrente se repite con cierta frecuencia, aunque su importe pueda variar: por ejemplo, la factura de electricidad. Las suscripciones suelen ser recurrentes, pero no todas son necesarias. Separar la frecuencia, el importe y la prioridad evita meter todos los cargos en el mismo saco.</p>
<p>Reserva una categoría para los gastos esenciales, otra para los servicios que puedes revisar y una previsión para los pagos anuales. Así puedes organizar tu presupuesto mensual sin olvidar un cobro que solo aparece una vez al año.</p>
<h2>1. Haz una lista de todas tus suscripciones</h2>
<p>Revisa los movimientos de tus cuentas y tarjetas, además de los recibos y las confirmaciones de compra. Mira también el historial del último año para localizar renovaciones anuales que no aparecen en el extracto del mes actual. Por cada servicio, anota:</p>
<ul><li>Nombre e importe del cargo.</li><li>Frecuencia: mensual, trimestral o anual.</li><li>Fecha del próximo cobro y cuenta o tarjeta utilizada.</li><li>Quién lo usa y cuándo fue la última vez.</li><li>Condiciones de renovación y plazo para solicitar la baja.</li></ul>
<p>Si compartes una suscripción con otra persona, distingue el cargo completo de la parte que te corresponde. Puedes consultar nuestra guía de <a href="/gastos-compartidos">gastos compartidos</a> para llevar ese registro sin contar dos veces el mismo pago.</p>
<h2>2. Calcula el coste mensual y anual</h2>
<p>Compara todos los servicios en la misma unidad. Multiplica una cuota mensual por 12 para estimar su coste anual; divide una cuota anual entre 12 para reservar su equivalente mensual. Si es trimestral, divídela entre 3. Son equivalencias para planificar: no cambian la fecha ni el importe real del cobro.</p>
<div class="yc-table-scroll"><table><caption>Ejemplo ilustrativo: importes ficticios, no tarifas de servicios reales</caption><thead><tr><th scope="col">Servicio</th><th scope="col">Cobro</th><th scope="col">Equivalente mensual</th><th scope="col">Coste anual</th></tr></thead><tbody><tr><th scope="row">Series</th><td>9,99 €/mes</td><td>9,99 €</td><td>119,88 €</td></tr><tr><th scope="row">Música</th><td>6,99 €/mes</td><td>6,99 €</td><td>83,88 €</td></tr><tr><th scope="row">Aplicación</th><td>12,50 €/mes</td><td>12,50 €</td><td>150,00 €</td></tr><tr><th scope="row">Almacenamiento</th><td>60,00 €/año</td><td>5,00 €</td><td>60,00 €</td></tr><tr><th scope="row">Total</th><td>Cuotas mixtas</td><td><strong>34,48 €</strong></td><td><strong>413,76 €</strong></td></tr></tbody></table></div>
<p>El mes en que se renueva el almacenamiento tendrá un cargo de 60 €, aunque su equivalente mensual sea 5 €. Si decides prescindir de la aplicación de 12,50 €, dejarías de pagar 150 € durante doce meses completos, suponiendo que no haya permanencia ni otras condiciones. Es un ejemplo de cálculo, no una promesa de ahorro.</p>
<h2>3. Revisa qué servicios merecen seguir</h2>
<p>Para cada suscripción, pregúntate si la usas, si duplica otra y si encaja en tu presupuesto. Un servicio que utilizas cada día puede tener más sentido que uno barato que nunca abres. También puedes revisar la modalidad contratada o pausar un servicio si el proveedor lo permite.</p>
<p>Antes de solicitar una baja, comprueba sus condiciones y conserva la confirmación del proveedor. Borrar una aplicación o eliminar un pago de tu registro personal no cancela el contrato. Apunta la fecha efectiva de finalización para comprobar después que los cargos coinciden con lo acordado.</p>
<h2>4. Lleva el control de pagos recurrentes con YoControlo</h2>
<p>En YoControlo puedes organizar tus cuentas, registrar ingresos y gastos y llevar tus <a href="/pagos-recurrentes">pagos recurrentes</a> junto al resto de movimientos. Asocia cada gasto a la cuenta correcta y utiliza categorías coherentes para comparar lo que esperabas pagar con lo que se ha cobrado realmente.</p>
<p>La aplicación no cancela suscripciones ni mueve tu dinero: te ayuda a mantener el registro. Puedes añadir los movimientos o importar un extracto, sin entregar credenciales bancarias. Para ver los pagos de distintas tarjetas juntos, lee cómo <a href="/blog/cuentas-y-tarjetas-en-un-solo-lugar">centralizar tus cuentas y tarjetas</a>.</p>
<h2>5. Mantén una revisión mensual breve</h2>
<p>Al cerrar el mes, compara tu lista con los movimientos, revisa cambios de precio y comprueba qué se renovará a continuación. Anota las decisiones que hayas tomado: mantener, cambiar o cancelar. Incluye también alquiler, suministros y otros gastos habituales para que el total no se limite a las plataformas digitales.</p>
<p>Para ampliar el contexto del presupuesto, consulta la <a href="https://www.finanzasparatodos.es/el-presupuesto-la-clave-para-controlar-tus-finanzas" target="_blank" rel="noopener noreferrer">guía de presupuesto de Finanzas para Todos</a>. Registrar entradas y salidas es la base para decidir qué puedes ajustar.</p>
<h2>Preguntas frecuentes sobre suscripciones</h2>
<h3>¿Cómo encuentro suscripciones que he olvidado?</h3><p>Busca cargos repetidos en todas tus cuentas y tarjetas y revisa los correos de renovación. Comprueba también los pagos anuales: una lista basada solo en el último mes puede dejarlos fuera.</p>
<h3>¿Una suscripción anual cuenta como gasto mensual?</h3><p>Para planificar puedes repartir su coste entre doce meses. En el registro del dinero realmente pagado, anota el cargo completo cuando se cobre; no registres además doce pagos ficticios, porque duplicarías el gasto.</p>
<h3>¿YoControlo cancela las suscripciones por mí?</h3><p>No. La baja se solicita al proveedor siguiendo sus condiciones. YoControlo te ayuda a organizar y revisar la información de tus gastos.</p>
<p><strong>Empieza por tu próximo cobro:</strong> crea la cuenta correspondiente, registra el servicio y revisa su frecuencia. <a href="https://app.yocontrolo.net" target="_blank" rel="noopener noreferrer">Abre YoControlo y organiza tus gastos</a>, o explora la guía de <a href="/control-de-gastos">control de gastos</a> para continuar.</p>
`,
  "contentEn": `
<p>A streaming service, cloud storage, an app and an annual membership: each charge may look small on its own. To <strong>track subscriptions and fixed monthly expenses</strong>, you need to know the total, the renewal dates and which account pays each bill. Start by separating services you use from subscriptions that renew out of habit.</p>
<h2>Fixed expenses and recurring payments are different</h2>
<p>A fixed expense has a relatively stable amount, such as rent. A recurring payment repeats at regular intervals but can change in amount, such as an electricity bill. Subscriptions are usually recurring, but they are not all essential. Record frequency, amount and priority separately.</p>
<p>Keep essential bills, optional services and annual renewals visible in your monthly budget. An annual charge still matters even if it does not appear in this month's statement.</p>
<h2>1. List every subscription</h2>
<p>Review transactions across all your accounts and cards, together with receipts and purchase confirmations. Look back over a full year to find annual renewals. For each service, record its name, amount, billing frequency, next payment date, payment account, who uses it and the cancellation terms.</p>
<p>For a shared subscription, distinguish the full charge from your own share. Our <a href="/en/gastos-compartidos">shared expenses guide</a> explains how to keep that distinction without counting the same payment twice.</p>
<h2>2. Compare monthly and annual costs</h2>
<p>Multiply a monthly fee by 12 to estimate its annual cost. Divide an annual fee by 12 to plan its monthly equivalent, or a quarterly fee by 3. These are planning equivalents: they do not change the actual amount or date of the charge.</p>
<div class="yc-table-scroll"><table><caption>Illustrative example: fictional amounts, not actual service prices</caption><thead><tr><th scope="col">Service</th><th scope="col">Billing</th><th scope="col">Monthly equivalent</th><th scope="col">Annual cost</th></tr></thead><tbody><tr><th scope="row">Streaming</th><td>€9.99/month</td><td>€9.99</td><td>€119.88</td></tr><tr><th scope="row">Music</th><td>€6.99/month</td><td>€6.99</td><td>€83.88</td></tr><tr><th scope="row">App</th><td>€12.50/month</td><td>€12.50</td><td>€150.00</td></tr><tr><th scope="row">Storage</th><td>€60.00/year</td><td>€5.00</td><td>€60.00</td></tr><tr><th scope="row">Total</th><td>Mixed billing</td><td><strong>€34.48</strong></td><td><strong>€413.76</strong></td></tr></tbody></table></div>
<p>The storage renewal month still includes a €60 charge, despite its €5 monthly equivalent. Removing the €12.50 app would avoid €150 over twelve full months, assuming no minimum term or other conditions apply. This is a calculation example, not a savings guarantee.</p>
<h2>3. Decide what to keep</h2>
<p>Check whether you use each service, whether it duplicates another and whether it fits your budget. A service used daily may be more useful than a cheaper one you never open. Review your plan or pause the subscription if the provider allows it.</p>
<p>Before cancelling, check the terms and keep the provider's confirmation. Deleting an app or removing an entry from your personal record does not cancel a contract. Note the effective end date so you can compare future charges with the agreed terms.</p>
<h2>4. Track recurring expenses with YoControlo</h2>
<p>YoControlo lets you organise accounts, record income and expenses and track <a href="/en/pagos-recurrentes">recurring payments</a> alongside other transactions. Assign each expense to the right account and use consistent categories to compare expected bills with actual charges.</p>
<p>The app does not cancel subscriptions or move money. You can enter transactions or import statements without handing over bank credentials. Read how to <a href="/en/blog/cuentas-y-tarjetas-en-un-solo-lugar">bring accounts and cards into one overview</a> if payments are spread across several cards.</p>
<h2>5. Keep a short monthly review</h2>
<p>Compare your list with transactions, check price changes and review upcoming renewals. Record decisions to keep, change or cancel services. Include rent, utilities and other regular bills so your overview extends beyond digital subscriptions.</p>
<p>For budgeting background, see the <a href="https://www.finanzasparatodos.es/el-presupuesto-la-clave-para-controlar-tus-finanzas" target="_blank" rel="noopener noreferrer">Finanzas para Todos budgeting guide (Spanish)</a>. Recording income and expenses gives you the information needed to decide what to adjust.</p>
<h2>Frequently asked questions</h2>
<h3>How do I find forgotten subscriptions?</h3><p>Look for repeated charges across all your accounts and cards and check renewal emails. Include annual charges: a list based only on the latest month can miss them.</p>
<h3>Should I record an annual subscription as a monthly expense?</h3><p>You can divide its cost by twelve for planning. For actual spending, record the full charge when paid; do not also record twelve fictional payments, which would count it twice.</p>
<h3>Does YoControlo cancel subscriptions for me?</h3><p>No. Request cancellation directly from the provider under its terms. YoControlo helps you organise and review your expense information.</p>
<p><strong>Start with your next renewal:</strong> create the payment account, record the service and review its billing frequency. <a href="https://app.yocontrolo.net" target="_blank" rel="noopener noreferrer">Open YoControlo and organise your expenses</a>, or continue with our <a href="/en/control-de-gastos">expense tracking guide</a>.</p>
`
},
  {
    title: 'Tus cuentas y tarjetas, en una sola visión de tu dinero',
    titleEn: 'All your accounts and cards in one clear view of your money',
    seoTitle: 'Centraliza tus cuentas y pagos en un solo lugar | YoControlo',
    seoTitleEn: 'Bring your accounts and payments together | YoControlo',
    slug: 'cuentas-y-tarjetas-en-un-solo-lugar',
    date: '28 de septiembre, 2026',
    dateEn: '28 September 2026',
    publishedAt: '2026-09-28T00:00:00.000Z',
    excerpt: 'Reúne los movimientos de tus cuentas, tarjetas y efectivo para entender mejor cuánto tienes y en qué gastas. Y con Apple Wallet y Atajos, registra automáticamente los pagos compatibles sin apuntarlos a mano.',
    excerptEn: 'Bring your accounts, cards and cash transactions together to see what you have and where it goes. With Apple Wallet and Shortcuts, eligible payments can be recorded automatically—no manual entry.',
    image: '/images/blog/cuentas-y-tarjetas-portada.webp',
    imageAlt: 'Tarjetas de pago, monedas y un registro central que representan una visión conjunta de las cuentas.',
    imageAltEn: 'Payment cards, coins and a central ledger representing a combined view of personal accounts.',
    author: 'YoControlo',
    readTime: '6 min',
    tags: ['cuentas', 'tarjetas', 'gastos', 'Apple Wallet', 'automatización'],
    content: `
      <p>Pagas el supermercado con una tarjeta, una suscripción con otra, guardas parte del ahorro en otra cuenta y a veces utilizas efectivo. El problema no es tener varios medios de pago: es tener que reconstruir tu situación financiera mirando cada uno por separado.</p>
      <p><strong>Centralizar tus movimientos en una sola aplicación te da una imagen completa:</strong> puedes revisar tus cuentas, tarjetas, efectivo, ingresos y gastos desde el mismo lugar, sin confundirlos ni perder de vista de dónde salió cada importe.</p>

      <h2>Una visión común no significa mezclar tu dinero</h2>
      <p>Cada cuenta sigue siendo independiente. Puedes mantener una tarjeta para los gastos diarios, otra para viajes y una cuenta separada para ahorrar. Lo que unificas es el registro y la consulta: puedes saber cuánto hay en cada una y revisar los movimientos con el mismo criterio.</p>
      <p>Esto importa porque mirar solo una tarjeta o la cuenta principal ofrece una visión parcial. Los pequeños pagos repartidos entre varias tarjetas, los recibos recurrentes y el efectivo también forman parte de tu mes. Al tenerlos reunidos, es más fácil detectar suscripciones olvidadas, entender cuánto cuesta realmente una categoría y comprobar si tus gastos coinciden con lo que esperabas.</p>

      <h2>Todos tus pagos, ordenados por la cuenta correcta</h2>
      <p>En YoControlo puedes crear las cuentas que necesites y asociar cada movimiento a la tarjeta o cuenta desde la que se hizo. También puedes importar extractos para incorporar un historial, registrar efectivo y consultar los movimientos juntos o filtrados por cuenta.</p>
      <ul class="list-disc pl-5 my-4">
        <li><strong>Menos puntos ciegos:</strong> la vista general incluye tus distintos medios de pago.</li>
        <li><strong>Más contexto:</strong> cada movimiento conserva su cuenta asociada, fecha, concepto e importe.</li>
        <li><strong>Mejores revisiones:</strong> puedes comparar tus gastos y comprobar el saldo de cada cuenta.</li>
        <li><strong>Sin entregar credenciales bancarias:</strong> no necesitas conectar tu banco para llevar el registro; puedes añadir movimientos o importar un extracto.</li>
      </ul>
      <p>Centralizar no significa transferir fondos, fusionar saldos ni sustituir la información oficial de tu entidad. Significa tener un registro personal más claro y poder revisar tu dinero desde una misma aplicación.</p>

      <h2>Registra los pagos de Apple Wallet sin apuntarlos a mano</h2>
      <p>Si pagas con iPhone, puedes dar un paso más: una automatización de <strong>Apple Wallet con Atajos</strong> puede enviar a YoControlo los datos que iOS facilita de una transacción —como el importe y el comercio— y crear el movimiento en la cuenta que hayas configurado. Así no tienes que abrir la app y teclear cada compra.</p>
      <ol class="list-decimal pl-5 my-4">
        <li>En YoControlo, crea una integración para la cuenta donde quieres registrar esos gastos.</li>
        <li>Añade el atajo de YoControlo y crea una automatización personal de Wallet en Shortcuts.</li>
        <li>Selecciona las tarjetas de Wallet que correspondan a esa misma cuenta y configura la automatización para ejecutarse inmediatamente.</li>
        <li>Cuando hagas un pago compatible, el atajo enviará la información recibida y el gasto aparecerá en los movimientos de YoControlo.</li>
      </ol>
      <p>Si utilizas tarjetas que corresponden a cuentas diferentes, crea una integración y una automatización independientes para cada cuenta: seleccionar varias tarjetas en la misma automatización no las asigna automáticamente a cuentas distintas. La información disponible depende de lo que iOS entregue para cada pago; si Wallet no proporciona la fecha, YoControlo registra la hora de recepción. No se guardan números completos de tarjeta ni credenciales bancarias.</p>
      <p>La configuración se realiza una vez y puedes revocar el acceso cuando quieras. La automatización actual está pensada para iPhone y Apple Wallet; Android necesitará una integración distinta.</p>

      <h2>De pagos dispersos a una rutina sencilla</h2>
      <p>El objetivo no es añadir tareas a tu día, sino quitar fricción. Reúne tus cuentas, deja que cada movimiento quede en el sitio correspondiente y consulta un resumen que tenga en cuenta el conjunto, no solo la tarjeta que utilizaste hoy. Para los pagos compatibles de Apple Wallet, configura el atajo una vez y evita registrarlos manualmente.</p>
      <p>Empieza creando tus cuentas y eligiendo dónde registrar tus pagos. Después puedes activar la automatización desde <a href="https://app.yocontrolo.net/settings/integraciones" target="_blank" rel="noopener noreferrer">Ajustes → Integraciones</a>.</p>
      <p><a href="https://app.yocontrolo.net" target="_blank" rel="noopener noreferrer">Abre YoControlo y reúne tus cuentas y movimientos en un solo lugar →</a></p>
    `,
    contentEn: `
      <p>You pay for groceries with one card, a subscription with another, keep some savings in a separate account, and sometimes use cash. The problem is not having several ways to pay; it is having to piece together your financial picture by checking each one separately.</p>
      <p><strong>Bringing your transactions together in one app gives you a fuller view:</strong> review accounts, cards, cash, income and spending in one place without mixing them up or losing track of where each amount came from.</p>

      <h2>One overview does not mean merging your money</h2>
      <p>Each account remains independent. You can keep one card for everyday spending, another for travel and a separate account for savings. What you bring together is the record and the overview: see the balance of each account and review transactions using the same approach.</p>
      <p>Looking only at one card or your main account gives you a partial picture. Small purchases spread across several cards, recurring bills and cash all count toward your month. Bringing them together makes it easier to spot forgotten subscriptions, understand the true cost of a category and check whether your spending matches your expectations.</p>

      <h2>Every payment, assigned to the right account</h2>
      <p>In YoControlo, create the accounts you need and associate each transaction with the card or account used. You can also import statements to add transaction history, record cash and review everything together or filter by account.</p>
      <ul class="list-disc pl-5 my-4">
        <li><strong>Fewer blind spots:</strong> your overview includes the different ways you pay.</li>
        <li><strong>More context:</strong> each transaction keeps its associated account, date, description and amount.</li>
        <li><strong>Clearer reviews:</strong> compare spending and check the balance of each account.</li>
        <li><strong>No bank credentials required:</strong> you can keep a record without connecting your bank by adding transactions or importing a statement.</li>
      </ul>
      <p>Centralising does not transfer funds, merge balances or replace your bank's official records. It gives you a clearer personal record and lets you review your money in one app.</p>

      <h2>Record Apple Wallet payments without typing them in</h2>
      <p>If you pay with an iPhone, you can go a step further: an <strong>Apple Wallet and Shortcuts</strong> automation can send YoControlo the transaction details iOS provides—such as the amount and merchant—and create the expense in the account you configured. You do not have to open the app and type every purchase.</p>
      <ol class="list-decimal pl-5 my-4">
        <li>In YoControlo, create an integration for the account where you want those expenses recorded.</li>
        <li>Add the YoControlo shortcut and create a personal Wallet automation in Shortcuts.</li>
        <li>Select the Wallet cards that belong to that same account and set the automation to run immediately.</li>
        <li>When you make an eligible payment, the shortcut sends the received details and the expense appears in YoControlo transactions.</li>
      </ol>
      <p>If your cards belong to different accounts, create a separate integration and automation for each account: selecting several cards in one automation does not automatically assign them to different accounts. Available details depend on what iOS provides for each payment; if Wallet does not provide a date, YoControlo records the time it receives the transaction. Full card numbers and bank credentials are not stored.</p>
      <p>Set it up once and revoke access whenever you want. The current automation is designed for iPhone and Apple Wallet; Android will need a separate integration.</p>

      <h2>Turn scattered payments into a simple routine</h2>
      <p>The goal is not to add more work to your day, but to remove friction. Bring your accounts together, keep each transaction in the right place and use an overview that considers the whole picture—not just the card you used today. For eligible Apple Wallet payments, set up the shortcut once and avoid recording them manually.</p>
      <p>Start by creating your accounts and choosing where to record payments. Then enable the automation from <a href="https://app.yocontrolo.net/settings/integraciones" target="_blank" rel="noopener noreferrer">Settings → Integrations</a>.</p>
      <p><a href="https://app.yocontrolo.net" target="_blank" rel="noopener noreferrer">Open YoControlo and bring your accounts and transactions together →</a></p>
    `,
  },
  {
    title: "Gastos hormiga: pequeños gastos, grandes sumas.",
    titleEn: "Small expenses. Bigger than you think.",
    seoTitle: "Gastos hormiga: ejemplos y calculadora de gastos",
    seoTitleEn: "Small expenses: examples and a spending calculator",
    slug: "gastos-hormiga-como-controlarlos",
    date: "6 de septiembre, 2026",
    dateEn: "6 September 2026",
    publishedAt: "2026-09-06T00:00:00.000Z",
    excerpt: "Descubre qué son los gastos hormiga, calcula cuánto suman tus compras y suscripciones y prueba un reto de 7 días para controlarlos con YoControlo.",
    excerptEn: "Find out how small expenses add up, calculate your purchases and subscriptions, and try a 7-day challenge to track spending with YoControlo.",
    image: "/images/blog/gastos-hormiga-portada.webp",
    imageAlt: "Café, compras, suscripciones y monedas: los pequeños gastos cotidianos que se acumulan.",
    imageAltEn: "Coffee, purchases, subscriptions and coins: small everyday expenses that add up.",
    author: "YoControlo",
    readTime: "6 min",
    layout: "spending-guide",
  },
 {
    title: "Cómo controlar tus gastos sin depender del banco",
    titleEn: "How to track your spending without relying on your bank",
    slug: "controlar-gastos-sin-banco",
    date: "13 de septiembre, 2025",
    dateEn: "13 September 2025",
    excerpt: "Técnicas prácticas y privacidad: aprende a registrar y controlar tus gastos diarios usando efectivo, sobres, plantillas y herramientas offline.",
    excerptEn: "Practical, privacy-friendly ways to track daily spending with cash, envelopes, templates and offline tools.",
    image: "/images/blog/controlar-gastos.jpg",
    author: "YoControlo",
    readTime: "8 min",
    tags: ["presupuesto", "ahorro", "privacidad", "efectivo"],
    contentEn: `
      <p><strong>Summary:</strong> You can regain control and privacy by using a simple envelope system, a daily spending log and a short weekly review. The best system is the one you can keep using consistently.</p>
      <h2>Why track spending without connecting a bank?</h2>
      <p>Bank connections can be convenient, but they also share sensitive information with another provider. A manual record lets you decide exactly which data exists and makes every purchase more visible.</p>
      <h2>A minimal setup</h2>
      <ul><li>A notebook, local spreadsheet or expense app.</li><li>Simple categories such as food, transport, leisure and savings.</li><li>Two minutes each day and a short weekly review.</li><li>An encrypted backup if you store the data digitally.</li></ul>
      <h2>The envelope method</h2>
      <p>Assign a monthly amount to each category. Every purchase comes out of the matching envelope, whether that envelope is physical or digital. When it is empty, spending in that category stops until the next period.</p>
      <h2>Record each expense quickly</h2>
      <p>Save the date, category, amount, payment method and a short note. Keeping the format small matters more than building a perfect spreadsheet.</p>
      <h2>Review weekly, close monthly</h2>
      <ol><li>Check for missing or unusual expenses.</li><li>Compare totals with your limits.</li><li>Adjust next month based on what actually happened.</li></ol>
      <h2>Security and privacy</h2>
      <p>Protect your device, use strong authentication and keep backups encrypted. Avoid sharing full statements or receipts when a smaller amount of information is enough.</p>
      <h2>Conclusion</h2>
      <p>Start small: a two-minute daily log and one weekly review can provide a useful view of your money without handing over bank credentials. YoControlo is designed for this kind of deliberate, manual control.</p>
    `,
    content: `
      <p><strong>Resumen (TL;DR):</strong> Puedes recuperar control y privacidad sobre tus finanzas usando métodos sencillos como el sistema de sobres, un registro diario de gastos, revisiones semanales y herramientas que funcionan offline o guardan los datos localmente. Este artículo te guía paso a paso, incluye plantillas prácticas y recomendaciones de herramientas.</p>

      <h2>¿Por qué llevar tus gastos sin conectar el banco?</h2>
      <p>Conectar cuentas bancarias a servicios y agregadores puede ser cómodo, pero también implica compartir datos sensibles con terceros. Mantener un registro manual u offline te da control total sobre qué información existe y dónde se guarda, reduce riesgos de exposición y te hace más consciente de cada gasto — lo que a su vez mejora la conducta financiera. </p>

      <h2>Qué necesitas para empezar (lista mínima)</h2>
      <ul class="list-disc pl-5 my-4">
        <li>Una libreta o cuaderno dedicado (o una hoja Excel / Google Sheets si prefieres local).</li>
        <li>Un sobre o wallet para "cash stuffing" (si vas a usar efectivo).</li>
        <li>Un método de respaldo cifrado (respaldo local en disco cifrado o en un pendrive encriptado).</li>
        <li>Un hábito: 2 minutos al día para anotar; 10–20 minutos semanales para revisar.</li>
      </ul>

      <h2>Métodos que funcionan (y cómo ponerlos en práctica)</h2>

      <h3>Sistema de sobres (cash stuffing)</h3>
      <p>Divide tu dinero en sobres físicos o virtuales según categorías (Comida, Transporte, Ocio, Ahorro, etc.). Cada vez que uses dinero de una categoría, saca el efectivo del sobre correspondiente. Si el sobre se agota, no hay más gasto para esa categoría hasta la próxima asignación. Este método es especialmente efectivo para controlar gasto impulsivo y visualizar límites reales de gasto. </p>

      <p><strong>Cómo implementarlo (ejemplo mensual):</strong></p>
      <table class="w-full my-4">
        <thead>
          <tr>
            <th class="text-left">Categoría</th>
            <th class="text-left">Presupuesto (€)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Alimentación</td><td>250</td></tr>
          <tr><td>Transporte</td><td>60</td></tr>
          <tr><td>Ocio</td><td>80</td></tr>
          <tr><td>Ahorro</td><td>150</td></tr>
          <tr><td>Gastos varios</td><td>60</td></tr>
        </tbody>
      </table>
      <p>Asignas la cantidad al inicio de mes y usas sólo lo que hay en cada sobre. Para versiones digitales, crea "sobres" en una app offline o en columnas de una hoja de cálculo.</p>

      <h3>Registro diario rápido (2 minutos)</h3>
      <p>Al final del día (o al realizar la compra) anota: <em>fecha, categoría, monto, método (efectivo/tarjeta), nota corta</em>. Hacerlo diariamente evita olvidos y crea conciencia. Mantén el formato simple para que no cueste hacerlo.</p>

      <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded">
Date,Category,Amount,Method,Notes
2025-09-13,Alimentación,4.50,efectivo,Café
2025-09-13,Transporte,1.50,efectivo,Bus
      </pre>

      <h3>Revisión semanal y cierre mensual</h3>
      <ol class="list-decimal pl-5 my-4">
        <li>Revisa los gastos de la semana y etiqueta gastos fuera de lo esperado.</li>
        <li>Compara contra los sobres/limites; ajusta el presupuesto si hace falta.</li>
        <li>Al final de mes suma por categoría y analiza dónde puedes recortar o reasignar.</li>
      </ol>

      <h2>Plantilla práctica (copia/pega en Excel o CSV)</h2>
      <p>Crea un archivo CSV con estas columnas y arrástralo a Excel o Sheets:</p>
      <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded">
date,category,amount,method,tag,notes
2025-09-13,Alimentación,12.50,efectivo,comida,Compra supermercado
      </pre>

      <h2>Herramientas recomendadas (privacidad y offline)</h2>
      <p>Si quieres digitalizar sin entregar credenciales bancarias, estas opciones son útiles:</p>
      <ul class="list-disc pl-5 my-4">
        <li><strong>YoControlo</strong> — es la aplicación más sencilla, perfecta para llevar gastos personales, registrarse es tan fácil como poner un correo y contraseña y funciona en cualquier dispositivo, en la web e incluso descargar en el ordenador</li>
        <li><strong>GnuCash</strong> — software libre y potente, datos locales, exporta e importa CSV/QIF; ideal si buscas control total y copia de seguridad local. (buena opción para llevar registros estructurados y reports). </li>
        <li><strong>Goodbudget</strong> — app basada en el sistema de sobres (virtual). Si usas Goodbudget, revisa su política y decide si prefieres la versión que sincroniza o llevar sobres locales. </li>
        <li>Apps sencillas que funcionan offline (por ejemplo gestores de gastos que no requieren conexión ni sincronización automática). Para máxima privacidad evita las que piden vincular cuentas o subir datos a la nube.</li>
      </ul>

      <h2>Seguridad y privacidad (práctica)</h2>
      <p>Consejos concretos para mantener tus registros seguros:</p>
      <ul class="list-disc pl-5 my-4">
        <li>Guarda tus datos en un archivo cifrado o en una app que ofrezca almacenamiento local cifrado.</li>
        <li>Evita sincronizar automáticamente con servicios en la nube sin cifrado de extremo a extremo.</li>
        <li>Usa bloqueo del dispositivo, contraseña fuerte y, si es posible, autentificación biométrica.</li>
        <li>Si guardas fotos de recibos, mantén una copia cifrada o recórtalas para eliminar datos sensibles.</li>
      </ul>

      <h2>Ejemplo práctico: primer mes paso a paso</h2>
      <ol class="list-decimal pl-5 my-4">
        <li><strong>Día 0:</strong> Analiza ingresos y fija montos por categoría (usa la tabla de ejemplo).</li>
        <li><strong>Inicio de mes:</strong> Retira la cantidad de efectivo (si trabajas con sobres) o crea las columnas en tu hoja local.</li>
        <li><strong>Diario:</strong> Anota cada gasto en 2 minutos. Guarda ticket si lo deseas.</li>
        <li><strong>Semanal:</strong> 10–20 minutos para revisar: ¿faltan sobres? ¿sobran? ¿gasto inesperado?</li>
        <li><strong>Fin de mes:</strong> Revisa totales, ajusta el próximo mes y selecciona 1 hábito a mejorar (p.ej., reducir cafés fuera de casa).</li>
      </ol>

      <h2>Preguntas frecuentes rápidas</h2>
      <h3>¿Y si necesito conciliar con el banco para ciertas operaciones?</h3>
      <p>Conciliar puntualmente está bien: usa tus extractos para comprobar discrepancias, pero evita sincronizar cuentas completas con terceros si tu prioridad es privacidad.</p>

      <h3>¿No perderé control si no uso la app del banco?</h3>
      <p>No: de hecho, el registro manual incrementa tu “conciencia de gasto” y suele reducir gastos impulsivos. La evidencia académica muestra que estrategias de autocontrol y seguimiento suelen reducir el gasto y aumentar ahorros con efecto de tamaño medio en varios estudios.</p>

      <h2>Recursos y lecturas para profundizar</h2>
      <ul class="list-disc pl-5 my-4">
        <li><em>Guía práctica del sistema de sobres</em> (artículos y revisiones sobre la técnica).</li>
        <li>Estudios sobre estrategias de autocontrol y seguimiento de gastos (meta-análisis y papers sobre seguimiento y comportamiento financiero).</li>
        <li>Documentación/GNU Cash y buenas prácticas si quieres mantener datos locales.</li>
      </ul>

      <h2>Conclusión</h2>
      <p>Controlar tus gastos sin depender del banco es totalmente factible y, para muchas personas, más sano: preserva privacidad, mejora disciplina y te da una vista real de tu dinero. Empieza con un método simple (sobres + registro de 2 minutos) y escala según necesites: plantillas, app offline o GnuCash para reportes más avanzados.</p>

      <p>Recuerda: la clave es la constancia. Un poco cada día y una revisión semanal hacen maravillas a largo plazo.</p>
      <p>Puedes utilizar la app de YoControlo creada para gestionar tus finanzas personales de manera segura y privada, sin necesidad de conectar tus cuentas bancarias.</p>
      <a href="https://app.yocontrolo.net" style="color: #8b5cf6; font-size: 18px;">App YoControlo</a>
    `
  },
  {
    title: "Ahorrar con objetivos claros: guía práctica",
    titleEn: "Saving with clear goals: a practical guide",
    slug: "ahorrar-objetivos-practica",
    date: "10 de septiembre, 2025",
    dateEn: "10 September 2025",
    excerpt: "Descubre cómo establecer metas financieras realistas y alcanzables para optimizar tu ahorro mensual...",
    excerptEn: "Learn how to set realistic, achievable financial goals and improve your monthly saving routine.",
    image: "/images/blog/ahorrar-objetivos.jpg",
    author: "YoControlo",
    contentEn: `
      <p>Clear goals make saving easier to understand and maintain.</p>
      <ul><li>Set a specific monthly and yearly target.</li><li>Track progress with a simple visual.</li><li>Review the target when your circumstances change.</li></ul>
      <p>A realistic plan is more valuable than an ambitious target you cannot sustain. Start with a comfortable amount, automate the habit where possible and review progress every month.</p>
    `,
    content: `
      <p>Establecer metas financieras claras es clave para ahorrar. En esta guía aprenderás:</p>
      <ul class="list-disc pl-5 my-4">
        <li>Cómo fijar objetivos mensuales y anuales.</li>
        <li>Cómo monitorear tu progreso con gráficos simples.</li>
        <li>Cómo mantener motivación para alcanzar tus metas.</li>
      </ul>
      <p>Con una planificación inteligente, ahorrar se vuelve más fácil y predecible.</p>
      <p>Visualiza tus avances y ajusta tus objetivos según sea necesario para mantener un ahorro constante.</p>
    `
  }
];

export const posts: BlogPost[] = blogPosts.map(p => ({
  title: p.title,
  slug: p.slug,
  date: p.date,
  image: p.image,
  excerpt: p.excerpt
}));

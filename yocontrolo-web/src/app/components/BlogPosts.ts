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
    image: '/images/blog/gastos-hormiga-portada.webp',
    imageAlt: 'Varias tarjetas de pago y monedas que representan los distintos medios de pago de una persona.',
    imageAltEn: 'Several payment cards and coins representing the different ways one person pays.',
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

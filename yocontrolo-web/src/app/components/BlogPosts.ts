// components/BlogPosts.ts
export interface BlogPost {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  image?: string;
  author?: string;
  readTime?: string;
  tags?: string[];
  content?: string;
}

export const blogPosts: BlogPost[] = [
 {
    title: "Cómo controlar tus gastos sin depender del banco",
    slug: "controlar-gastos-sin-banco",
    date: "13 de septiembre, 2025",
    excerpt: "Técnicas prácticas y privacidad: aprende a registrar y controlar tus gastos diarios usando efectivo, sobres, plantillas y herramientas offline.",
    image: "/images/blog/controlar-gastos.jpg",
    author: "YoControlo",
    readTime: "8 min",
    tags: ["presupuesto", "ahorro", "privacidad", "efectivo"],
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
    slug: "ahorrar-objetivos-practica",
    date: "10 de septiembre, 2025",
    excerpt: "Descubre cómo establecer metas financieras realistas y alcanzables para optimizar tu ahorro mensual...",
    image: "/images/blog/ahorrar-objetivos.jpg",
    author: "YoControlo",
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
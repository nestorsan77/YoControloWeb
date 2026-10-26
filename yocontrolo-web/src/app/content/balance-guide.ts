import type { BlogPost } from '../components/BlogPosts';

export const balanceGuide: BlogPost = {
  slug: 'cuadrar-saldo-importar-extracto-bancario',
  title: 'Tu saldo no cuadra: cómo importar un extracto sin perder el control',
  titleEn: 'Balance not adding up? How to import a bank statement clearly',
  seoTitle: 'Cómo cuadrar el saldo al importar un extracto bancario',
  seoTitleEn: 'How to reconcile your balance when importing a bank statement',
  date: '26 de octubre, 2026',
  dateEn: '26 October 2026',
  publishedAt: '2026-10-26T00:00:00.000Z',
  excerpt: 'Aprende a distinguir saldo e importe, elegir la cuenta correcta y revisar fechas y duplicados. Un ejemplo de 2.000 € a 1.900 € para entender tu extracto paso a paso.',
  excerptEn: 'Learn to distinguish balances from amounts, choose the right account and check dates and duplicates. Follow a €2,000 to €1,900 example step by step.',
  image: '/images/blog/cuadrar-extracto.png',
  imageAlt: 'Un extracto con saldo inicial de 2.000 €, un gasto de 300 € y un ingreso de 200 €: saldo final de 1.900 €.',
  imageAltEn: 'A statement starting at €2,000, with a €300 expense and €200 income, ending at €1,900.',
  author: 'YoControlo',
  readTime: '6 min',
  tags: ['cuentas', 'extractos', 'saldo', 'movimientos'],
  content: `
<p>Has importado los movimientos y, aun así, la cifra de la aplicación no coincide con la del banco. Antes de añadir un ingreso para «arreglarla», conviene mirar qué representa cada dato. <strong>Un extracto no es solo una lista de compras: también tiene un periodo, un orden y, a veces, un saldo después de cada operación.</strong> Entenderlos evita corregir una diferencia creando otra.</p>
<h2>Saldo e importe no significan lo mismo</h2>
<p>El importe es lo que entra o sale en una operación. El saldo es el dinero registrado en la cuenta en un momento concreto. Si tu historial empieza cuando ya tenías dinero, sumar únicamente sus movimientos no reconstruye por sí solo el saldo completo.</p>
<div class="yc-table-scroll"><table><caption>Ejemplo ficticio de una sola cuenta, sin operaciones pendientes</caption><thead><tr><th scope="col">Fecha</th><th scope="col">Concepto</th><th scope="col">Importe</th><th scope="col">Saldo</th></tr></thead><tbody><tr><td>01/10/2026</td><th scope="row">Saldo inicial</th><td>—</td><td>2.000 €</td></tr><tr><td>02/10/2026</td><th scope="row">Compra</th><td>−300 €</td><td>1.700 €</td></tr><tr><td>03/10/2026</td><th scope="row">Ingreso</th><td>+200 €</td><td>1.900 €</td></tr></tbody></table></div>
<p>Los movimientos suman −100 €, pero el saldo final es <strong>2.000 − 300 + 200 = 1.900 €</strong>. No faltan 2.000 € de ingresos: ese dinero ya existía al comienzo del periodo. El saldo inicial es una referencia, no una compra ni un nuevo ingreso de ese mes.</p>
<h2>1. Prepara el archivo y elige la cuenta</h2>
<p>Exporta el extracto de una cuenta concreta y comprueba el periodo y la moneda. Si tienes una tarjeta para compras y otra para ahorrar, impórtalas en cuentas separadas. Centralizar la consulta no significa mezclar sus saldos: nuestra guía sobre <a href="/blog/cuentas-y-tarjetas-en-un-solo-lugar">cuentas y tarjetas en un solo lugar</a> explica esa diferencia.</p>
<p>No publiques el extracto ni lo pegues en foros: puede incluir nombres, referencias y otros datos personales. Para pedir ayuda, basta con un ejemplo ficticio que conserve el formato de las columnas.</p>
<h2>2. Revisa las columnas antes de confirmar</h2>
<p>En la importación de YoControlo revisa la correspondencia de <strong>concepto, fecha, importe y saldo</strong>. La detección automática es una ayuda, no una sustitución de la revisión. Algunos bancos separan cargos y abonos; otros usan importes con signo. El separador decimal también cambia: 1.234,56 no debe confundirse con 1,234.56.</p>
<p>Mira al menos un gasto, un ingreso y la primera y última fila. Si hay una columna de saldo, comprueba que cada diferencia concuerda con el importe, respetando el orden de las operaciones. No asignes «saldo» como si fuera «importe»: registrarías el dinero acumulado como una operación nueva.</p>
<h2>3. Comprueba fechas y orden del extracto</h2>
<p>Una fecha como 17-07-2026 es clara; 07/08/2026 puede significar 7 de agosto u 8 de julio según el país. Revisa la vista previa antes de continuar. Ordenar las filas al revés tampoco cambia la fecha real: si lo más reciente está arriba, el último saldo cronológico estará al principio del archivo.</p>
<p>Dos operaciones del mismo día pueden necesitar el orden original del banco para interpretar sus saldos intermedios. Y la fecha de la compra puede diferir de la fecha contable: compara el mismo periodo y el mismo tipo de saldo, no una operación pendiente con un extracto cerrado.</p>
<h2>4. Decide si vas a añadir o reemplazar un periodo</h2>
<p>Si esos gastos ya estaban apuntados manualmente o mediante una automatización, importarlos otra vez puede duplicarlos. En YoControlo, revisa la opción de reemplazar los movimientos del intervalo indicado <strong>solo en la cuenta seleccionada</strong>. Comprueba el aviso con las fechas más antigua y más reciente antes de confirmar. Los registros fuera de ese intervalo deben conservarse.</p>
<p>No elijas reemplazar por costumbre: primero revisa si hay notas o movimientos manuales de ese periodo que quieras conservar. Conserva tu archivo original y compara la vista previa con lo que esperas modificar. Un movimiento de otra cuenta no debe borrarse para cuadrar esta.</p>
<h2>5. Valida el saldo con una referencia del mismo día</h2>
<p>El último saldo del CSV describe el cierre de su periodo, no necesariamente el dinero disponible ahora. Si el extracto termina el viernes y has comprado el sábado, habrá una diferencia legítima. Los movimientos posteriores deben seguir formando parte del registro.</p>
<ul><li>Compara cuenta, moneda y fecha de referencia.</li><li>Busca operaciones duplicadas o que falten, también transferencias entre tus cuentas.</li><li>Revisa si el banco muestra saldo contable o disponible.</li><li>Comprueba el saldo inicial y las operaciones anteriores al archivo.</li></ul>
<p>Una transferencia entre cuentas propias es salida en una y entrada en otra; no significa por sí sola que hayas ganado o gastado dinero en el conjunto. Revisar cada cuenta por separado ayuda a no confundir una transferencia con consumo.</p>
<h2>Menos trabajo manual, con una revisión breve</h2>
<p>Los extractos sirven para revisar el historial. Para los pagos diarios compatibles con Apple Wallet, puedes configurar <a href="https://app.yocontrolo.net/settings/integraciones">la integración de Atajos de YoControlo</a> y registrar el gasto automáticamente. Asocia cada automatización a la cuenta correspondiente y comprueba el resultado con una prueba antes de usarla a diario.</p>
<p>La automatización no es una conexión bancaria ni sustituye el extracto: revisa posibles solapamientos si importas después el mismo periodo. Para completar tu revisión mensual, consulta cómo <a href="/blog/controlar-suscripciones-gastos-fijos">organizar suscripciones</a> y cómo <a href="/blog/ahorrar-objetivos-practica">convertir el margen disponible en objetivos claros</a>.</p>
<p><strong>La idea clave:</strong> no busques que dos cifras coincidan a cualquier precio. Busca que cada movimiento tenga una cuenta, una fecha y un significado. <a href="https://app.yocontrolo.net">Abre YoControlo y revisa tu próxima importación</a> con ese criterio.</p>`,
  contentEn: `
<p>You have imported transactions, but the app still shows a different balance from your bank. Before adding income to “fix” it, check what each number represents. <strong>A statement has a period, a transaction order and sometimes a balance after each entry.</strong> Understanding these is more useful than forcing two numbers to match.</p>
<h2>Balance and transaction amount are different</h2>
<p>An amount is money entering or leaving in one transaction. A balance is the money recorded in an account at a point in time. If you already had money when the imported history began, adding its transactions alone will not reconstruct the full balance.</p>
<div class="yc-table-scroll"><table><caption>Fictional example for one account, with no pending transactions</caption><thead><tr><th scope="col">Date</th><th scope="col">Description</th><th scope="col">Amount</th><th scope="col">Balance</th></tr></thead><tbody><tr><td>1 October 2026</td><th scope="row">Opening balance</th><td>—</td><td>€2,000</td></tr><tr><td>2 October 2026</td><th scope="row">Purchase</th><td>−€300</td><td>€1,700</td></tr><tr><td>3 October 2026</td><th scope="row">Income</th><td>+€200</td><td>€1,900</td></tr></tbody></table></div>
<p>The transactions total −€100, but the closing balance is <strong>2,000 − 300 + 200 = €1,900</strong>. The €2,000 was already there at the start. An opening balance is a reference, not a new purchase or income received that month.</p>
<h2>1. Prepare the file and choose the account</h2>
<p>Export a statement for one account and check its period and currency. Import your everyday card and savings account separately. A combined overview should not merge their balances: see our guide to <a href="/en/blog/cuentas-y-tarjetas-en-un-solo-lugar">keeping accounts and cards in one place</a>.</p>
<p>Do not publish a real statement or paste it into a forum. It can contain names, payment references and personal data. A fictional example preserving the column format is usually enough when asking for help.</p>
<h2>2. Review the columns before confirming</h2>
<p>Check the mapping of <strong>description, date, amount and balance</strong> in YoControlo. Automatic detection helps, but still needs review. Some banks separate debits and credits; others use signed amounts. Decimal separators also vary: 1,234.56 and 1.234,56 need different interpretation.</p>
<p>Review an expense, an income entry and the first and last rows. Where balances are supplied, their changes should agree with the amounts in transaction order. Never map the balance column as an amount: that would turn accumulated money into a new transaction.</p>
<h2>3. Check dates and statement order</h2>
<p>A date such as 17-07-2026 is clear; 07/08/2026 can mean 7 August or July 8 depending on the country. Check the preview before proceeding. If newest entries are first, the final chronological balance may be at the top of the file.</p>
<p>Transactions on the same day may need the bank's original ordering to interpret intermediate balances. The purchase date may also differ from the booking date. Compare matching periods and balance types, not a pending purchase with a closed statement.</p>
<h2>4. Decide whether to add or replace a period</h2>
<p>Importing expenses already entered manually or through automation can count them twice. In YoControlo, review the option to replace the displayed date interval <strong>only for the selected account</strong>. Check the earliest and latest dates in the warning before confirming. Entries outside that interval should remain intact.</p>
<p>Do not replace a period automatically. First check for notes or manual entries you want to keep, retain the original file and review the preview. Transactions in another account must not be deleted to reconcile this one.</p>
<h2>5. Compare balances on the same reference date</h2>
<p>The final CSV balance describes the end of its period, not necessarily your available money today. A purchase on Saturday can legitimately change the balance of a statement ending on Friday. Later transactions still belong in the record.</p>
<ul><li>Compare the same account, currency and reference date.</li><li>Look for duplicate or missing entries, including transfers.</li><li>Check whether the bank shows booked or available balance.</li><li>Check the opening balance and activity before the file begins.</li></ul>
<p>A transfer between your own accounts is an outflow in one and an inflow in the other. It does not, on its own, mean your total money increased or was spent. Reviewing each account separately helps distinguish transfers from consumption.</p>
<h2>Less manual entry, with a short review</h2>
<p>Statements help review history. For eligible daily Apple Wallet payments, configure <a href="https://app.yocontrolo.net/settings/integraciones">YoControlo's Shortcuts integration</a> to record expenses automatically. Associate each automation with its account and test the result before everyday use.</p>
<p>This is not a bank connection or a replacement for statements. Review overlaps if you later import the same period. Complete your monthly review with our <a href="/en/blog/controlar-suscripciones-gastos-fijos">subscription guide</a> and <a href="/en/blog/ahorrar-objetivos-practica">practical saving goals</a>.</p>
<p><strong>The key:</strong> give every transaction an account, a date and a meaning instead of forcing two figures to match. <a href="https://app.yocontrolo.net">Open YoControlo and review your next import</a> with that in mind.</p>`,
};

'use client';

import { useId, useState } from 'react';

export default function SpendingCalculator({ locale }: { locale: 'es' | 'en' }) {
  const es = locale === 'es';
  const id = useId();
  const initial = [{ amount: '2.50', count: '20' }, { amount: '12', count: '4' }, { amount: '15.98', count: '1' }];
  const [rows, setRows] = useState(initial);
  const [reduction, setReduction] = useState(25);
  const labels = es ? ['Cafés o pequeños antojos', 'Pedidos u otras compras', 'Suscripciones que revisar'] : ['Coffee or small treats', 'Takeaways or other purchases', 'Subscriptions to review'];
  const valid = rows.every(row => [row.amount, row.count].every(value => value !== '' && Number.isFinite(Number(value)) && Number(value) >= 0) && Number(row.amount) <= 10000 && Number(row.count) <= 366 && Number.isInteger(Number(row.count)));
  const monthly = rows.reduce((sum, row) => sum + Math.round(Number(row.amount) * 100) * Number(row.count), 0) / 100;
  const money = (value: number) => new Intl.NumberFormat(es ? 'es-ES' : 'en-IE', { style: 'currency', currency: 'EUR' }).format(value);
  function update(index: number, field: 'amount' | 'count', value: string) {
    setRows(previous => previous.map((row, i) => i === index ? { ...row, [field]: value } : row));
  }
  return <section className="sg-calculator" id="calculadora" aria-labelledby={`${id}-heading`}>
    <div className="sg-section-kicker">{es ? 'PONLE UNA CIFRA' : 'PUT A NUMBER ON IT'}</div>
    <h2 id={`${id}-heading`}>{es ? '¿Cuánto suman tus gastos hormiga?' : 'How much do your small expenses add up to?'}</h2>
    <p>{es ? 'Prueba con tus importes. Los valores iniciales son un ejemplo, no una media de gasto.' : 'Try your own amounts. The starting values are an example, not average spending.'}</p>
    <div className="sg-calculator-fields">
      {rows.map((row, index) => <fieldset key={index}>
        <legend>{labels[index]}</legend>
        <label htmlFor={`${id}-amount-${index}`}>{es ? 'Importe (€)' : 'Amount (€)'}<input id={`${id}-amount-${index}`} type="number" inputMode="decimal" min="0" max="10000" step="0.01" value={row.amount} onChange={event => update(index, 'amount', event.target.value)} /></label>
        <span aria-hidden="true">×</span>
        <label htmlFor={`${id}-count-${index}`}>{es ? 'Veces al mes' : 'Times per month'}<input id={`${id}-count-${index}`} type="number" inputMode="numeric" min="0" max="366" step="1" value={row.count} onChange={event => update(index, 'count', event.target.value)} /></label>
      </fieldset>)}
    </div>
    <div className="sg-calculator-result" aria-live="polite" aria-atomic="true">
      {valid ? <><div><span>{es ? 'Suman al mes' : 'Monthly total'}</span><strong data-testid="monthly-total">{money(monthly)}</strong></div><div><span>{es ? 'Si se repiten 12 meses' : 'If repeated for 12 months'}</span><strong data-testid="yearly-total">{money(monthly * 12)}</strong></div></> : <p role="status">{es ? 'Completa los importes entre 0 y 10.000 € y las repeticiones con números enteros entre 0 y 366.' : 'Enter amounts from €0 to €10,000 and whole-number repetitions from 0 to 366.'}</p>}
    </div>
    <label className="sg-range-label" htmlFor={`${id}-reduction`}>{es ? '¿Y si redujeras estos gastos un' : 'What if you reduced these expenses by'} <strong>{reduction} %</strong>{es ? '?' : '?'}</label>
    <input className="sg-range" id={`${id}-reduction`} type="range" min="0" max="100" step="5" value={reduction} onChange={event => setReduction(Number(event.target.value))} />
    <p className="sg-calculator-saving" aria-live="polite">{valid ? <><strong data-testid="yearly-saving">{money(Math.round(monthly * 12 * reduction) / 100)}</strong> {es ? 'menos de gasto al año en este escenario.' : 'less spending per year in this scenario.'}</> : '—'}</p>
    <p className="sg-fineprint">{es ? 'Cálculo orientativo: importe × repeticiones mensuales × 12. No incluye inflación, intereses ni cambios de hábitos. Reducir un gasto no garantiza que ese dinero termine ahorrado. Tus cifras no se envían ni se guardan.' : 'Illustrative calculation: amount × monthly repetitions × 12. Excludes inflation, interest and habit changes. Lower spending does not guarantee savings. Your figures are neither sent nor saved.'}</p>
    <button type="button" className="sg-reset" onClick={() => { setRows(initial); setReduction(25); }}>{es ? 'Restablecer ejemplo' : 'Reset example'}</button>
  </section>;
}

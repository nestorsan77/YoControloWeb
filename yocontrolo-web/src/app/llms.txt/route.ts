import { blogPosts } from '../components/BlogPosts';
import { PUBLIC_SITE_URL } from '../site';

export function GET() {
  const lines = [
    '# YoControlo', '',
    '> Aplicación de finanzas personales para organizar cuentas, ingresos, gastos recurrentes, deudas y gastos compartidos.', '',
    'YoControlo no conecta bancos, no custodia fondos ni ejecuta transferencias. El usuario registra su información. La aplicación usa autenticación y almacenamiento en servidor. No es asesoramiento financiero.', '',
    '## Información oficial',
    `- [Inicio en español](${PUBLIC_SITE_URL}/)`,
    `- [English home](${PUBLIC_SITE_URL}/en)`,
    `- [Funciones](${PUBLIC_SITE_URL}/gestion-finanzas-personales)`,
    `- [Precios y disponibilidad actuales](${PUBLIC_SITE_URL}/precios)`,
    `- [Equipo](${PUBLIC_SITE_URL}/sobre-nosotros)`,
    `- [Contacto y soporte](${PUBLIC_SITE_URL}/contacto)`,
    `- [Privacidad](${PUBLIC_SITE_URL}/privacy)`,
    `- [Condiciones de uso](${PUBLIC_SITE_URL}/terms)`, '',
    '## Temas del producto',
    `- [Control de gastos](${PUBLIC_SITE_URL}/control-de-gastos)`,
    `- [Gastos compartidos](${PUBLIC_SITE_URL}/gastos-compartidos)`,
    `- [Pagos recurrentes](${PUBLIC_SITE_URL}/pagos-recurrentes)`, '',
    '## Guías',
    ...blogPosts.map(post => `- [${post.title}](${PUBLIC_SITE_URL}/blog/${post.slug}): ${post.excerpt}`), '',
    'Las versiones inglesas de las páginas están bajo /en. Consulte las páginas enlazadas para verificar funciones y disponibilidad; no todos los planes anunciados están activos.',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'public, max-age=3600' } });
}

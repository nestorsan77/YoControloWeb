import assert from 'node:assert/strict';

const htmlRoutes = [
  '/',
  '/gestion-finanzas-personales',
  '/precios',
  '/sobre-nosotros',
  '/blog',
  '/blog/cuentas-y-tarjetas-en-un-solo-lugar',
  '/blog/controlar-gastos-sin-banco',
  '/blog/ahorrar-objetivos-practica',
  '/contacto',
  '/privacy',
  '/terms',
];

async function request(baseUrl, path, init = {}) {
  const response = await fetch(new URL(path, baseUrl), {
    redirect: 'follow',
    signal: AbortSignal.timeout(15_000),
    ...init,
  });
  return response;
}

async function expectHtmlRoute(baseUrl, path) {
  const response = await request(baseUrl, path);
  assert.equal(response.status, 200, `${path} returned HTTP ${response.status}`);
  assert.match(response.headers.get('content-type') ?? '', /text\/html/i, `${path} did not return HTML`);
}

export async function verifySite(baseUrl) {
  const normalizedBaseUrl = new URL(baseUrl).toString();

  await Promise.all(htmlRoutes.map((path) => expectHtmlRoute(normalizedBaseUrl, path)));

  const spanishResponse = await request(normalizedBaseUrl, '/', {
    headers: { 'Accept-Language': 'es-ES,es;q=0.9,en;q=0.5' },
  });
  const spanishHtml = await spanishResponse.text();
  assert.equal(spanishResponse.status, 200);
  assert.match(spanishHtml, /<html[^>]*lang="es"/i, 'Spanish browser preference was not applied');
  assert.match(spanishResponse.headers.get('set-cookie') ?? '', /yocontrolo-locale=es/i);

  const fallbackResponse = await request(normalizedBaseUrl, '/', {
    headers: { 'Accept-Language': 'de-DE,de;q=0.9' },
  });
  const fallbackHtml = await fallbackResponse.text();
  assert.equal(fallbackResponse.status, 200);
  assert.match(fallbackHtml, /<html[^>]*lang="en"/i, 'Unsupported languages must fall back to English');
  assert.match(fallbackResponse.headers.get('set-cookie') ?? '', /yocontrolo-locale=en/i);

  const savedLocaleResponse = await request(normalizedBaseUrl, '/', {
    headers: {
      'Accept-Language': 'de-DE,de;q=0.9',
      Cookie: 'yocontrolo-locale=es',
    },
  });
  const savedLocaleHtml = await savedLocaleResponse.text();
  assert.match(savedLocaleHtml, /<html[^>]*lang="es"/i, 'The saved language must override the browser language');

  const robotsResponse = await request(normalizedBaseUrl, '/robots.txt');
  assert.equal(robotsResponse.status, 200);
  assert.match(await robotsResponse.text(), /Sitemap:\s+https:\/\/www\.yocontrolo\.net\/sitemap\.xml/i);

  const sitemapResponse = await request(normalizedBaseUrl, '/sitemap.xml');
  assert.equal(sitemapResponse.status, 200);
  const sitemap = await sitemapResponse.text();
  for (const path of htmlRoutes) {
    const canonicalUrl = new URL(path, 'https://www.yocontrolo.net').toString().replace(/\/$/, path === '/' ? '' : '/');
    assert.ok(sitemap.includes(canonicalUrl), `Sitemap is missing ${canonicalUrl}`);
  }

  const notFoundResponse = await request(normalizedBaseUrl, '/__ci_missing_route__');
  assert.equal(notFoundResponse.status, 404, 'Unknown routes must return HTTP 404');

  const securityResponse = await request(normalizedBaseUrl, '/');
  assert.equal(securityResponse.headers.get('x-content-type-options'), 'nosniff');
  assert.equal(securityResponse.headers.get('x-frame-options'), 'DENY');
  assert.equal(securityResponse.headers.get('referrer-policy'), 'strict-origin-when-cross-origin');
  assert.match(securityResponse.headers.get('permissions-policy') ?? '', /camera=\(\)/);
  assert.match(securityResponse.headers.get('strict-transport-security') ?? '', /max-age=31536000/);
  assert.equal(securityResponse.headers.get('x-permitted-cross-domain-policies'), 'none');
  assert.equal(securityResponse.headers.get('x-powered-by'), null, 'The framework signature must not be exposed');
}

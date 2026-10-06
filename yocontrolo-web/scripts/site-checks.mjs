import assert from 'node:assert/strict';

const htmlRoutes = [
  '/',
  '/gestion-finanzas-personales',
  '/precios',
  '/control-de-gastos',
  '/gastos-compartidos',
  '/pagos-recurrentes',
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

  for (const language of ['es', 'en']) {
    for (const path of htmlRoutes) {
      const localized = language === 'en' ? `/en${path === '/' ? '' : path}` : path;
      const response = await request(normalizedBaseUrl, localized, {
        headers: { 'Accept-Language': language === 'es' ? 'en-US' : 'es-ES', Cookie: `yocontrolo-locale=${language === 'es' ? 'en' : 'es'}` },
      });
      const html = await response.text();
      assert.equal(response.status, 200, localized);
      assert.ok(html.includes(`lang="${language}"`), `${localized} has the wrong language`);
      const canonical = new URL(localized, 'https://www.yocontrolo.net').href.replace(/\/$/, '');
      assert.ok(html.includes(`rel="canonical" href="${canonical}"`) || html.includes(`rel="canonical" href="${canonical}/"`), `${localized} has an incorrect canonical`);
      assert.match(html, /hreflang="es"/i);
      assert.match(html, /hreflang="en"/i);
      assert.match(html, /hreflang="x-default"/i);
      const internalLinks = [...html.matchAll(/<a[^>]+href="(\/[^"#?]*)/g)].map(match => match[1]);
      if (language === 'en') assert.ok(internalLinks.every(href => href === '/en' || href.startsWith('/en/')), `${localized} contains a link that loses the language`);
    }
  }

  const robotsResponse = await request(normalizedBaseUrl, '/robots.txt');
  assert.equal(robotsResponse.status, 200);
  const robots = await robotsResponse.text();
  for (const bot of ['OAI-SearchBot', 'Claude-SearchBot', 'Claude-User', 'ChatGPT-User']) assert.ok(robots.includes(bot));
  assert.match(robots, /Sitemap:\s+https:\/\/www\.yocontrolo\.net\/sitemap\.xml/i);

  const sitemapResponse = await request(normalizedBaseUrl, '/sitemap.xml');
  assert.equal(sitemapResponse.status, 200);
  const sitemap = await sitemapResponse.text();
  for (const path of htmlRoutes) {
    const canonicalUrl = new URL(path, 'https://www.yocontrolo.net').toString().replace(/\/$/, path === '/' ? '' : '/');
    assert.ok(sitemap.includes(canonicalUrl), `Sitemap is missing ${canonicalUrl}`);
  }

  const llms = await request(normalizedBaseUrl, '/llms.txt');
  assert.equal(llms.status, 200);
  assert.match(await llms.text(), /# YoControlo/);
  const englishMissing = await request(normalizedBaseUrl, '/en/__ci_missing_route__');
  assert.equal(englishMissing.status, 404);

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
